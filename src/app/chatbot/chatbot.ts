import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css'],
  imports: [CommonModule, FormsModule]
})
export class Chatbot {
  isChatOpen = false;
  chatState: 'collectingInfo' | 'selectingQuestion' | 'conversation' = 'collectingInfo';
  user = { name: '', phone: '' };
  questions = [
    { id: 1, text: "What are your business hours?" },
    { id: 2, text: "Do you offer international shipping?" },
    { id: 3, text: "What is your return policy?" },
    { id: 4, text: "How can I track my order?" }
  ];
  conversation: { sender: string, text: string }[] = [];

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      this.conversation = [];
      this.chatState = 'collectingInfo';
    }
  }

  closeChat() {
    this.isChatOpen = false;
  }

  submitUser_Info() {
    this.conversation.push({ sender: 'user', text: `Name: ${this.user.name}, Phone: ${this.user.phone}` });
    this.playSound('send');
    this.chatState = 'selectingQuestion';
  }

  selectQuestion(question: any) {
    this.conversation.push({ sender: 'user', text: question.text });
    this.playSound('send');
    const answer = this.getAnswer(question.id);
    this.conversation.push({ sender: 'bot', text: answer });
    this.playSound('receive');
    this.saveConversation();
  }

  getAnswer(questionId: number): string {
    switch (questionId) {
      case 1: return "Our business hours are Monday to Friday, 9:00 AM to 5:00 PM.";
      case 2: return "Yes, we offer international shipping to most countries. Additional fees may apply.";
      case 3: return "We accept returns within 30 days of purchase with original receipt. Items must be unused and in original packaging.";
      case 4: return "Once your order ships, you'll receive a tracking number via email. You can use this to track your package on our website.";
      default: return "I'm sorry, I don't have an answer for that.";
    }
  }

  saveConversation() {
    const data = {
      name: this.user.name,
      phone: this.user.phone,
      question: this.conversation[this.conversation.length - 1]?.text || '',
      conversation: this.conversation
    };

    this.http.post('http://localhost:3000/api/chatbot', data)
      .subscribe(response => {
        console.log('Conversation saved:', response);
      });
  }

  playSound(action: string) {
    const audio = new Audio(action === 'send' ? 'path/to/send-sound.mp3' : 'path/to/receive-sound.mp3');
    audio.play();
  }
}
