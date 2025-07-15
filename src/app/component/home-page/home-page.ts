import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,

} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
  imports: [
    CommonModule,
    FormsModule, RouterLink,
  ]
})
export class HomePage implements AfterViewInit {
  scrollToEnquiryForm() {
    throw new Error('Method not implemented.');
  }
  @ViewChild('myCarousel') carouselElement!: ElementRef;
  @ViewChild('testimonialCarousel') testimonialCarousel!: ElementRef;

  @ViewChild('enquiryFormSection') enquiryFormSection!: ElementRef;


  scrollToForm() {
    this.enquiryFormSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  formSubmitted = false;
  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }


  user = {
    name: '',
    email: '',
    number: '',
    district: '',
    course: '',
    specialization: '',
    join: false

  };

  testimonials = [
    {
      name: 'Sasidharan',
      image: 'student1.jpg',
      review: 'Good coaching center in vellore zone, both English and Tamil communication students will understand easily.'
    },
    {
      name: 'Nandha Kumar',
      image: 'student2.jpg',
      review: 'I attended all the classes in our institute. It gives a hopeful mind set to achieve in the exam. The physical training is better than I expected.'
    },
    {
      name: 'Kavitha',
      image: 'student3.jpg',
      review: 'The coaching is excellent, and the mentors are very helpful and encouraging.'
    },
    {
      name: 'Rajesh',
      image: 'student4.jpg',
      review: 'I cleared my SI exam in the first attempt, thanks to the academy’s consistent guidance.'
    },
    {
      name: 'Divya',
      image: 'student5.jpg',
      review: 'Perfect place for physical and written training. Very disciplined environment.'
    },
    {
      name: 'Sundar',
      image: 'student6.jpg',
      review: 'Excellent coaching and motivation sessions. Very effective training.'
    },
    {
      name: 'Priya',
      image: 'student7.jpg',
      review: 'The instructors are experienced and supportive. Helped me crack TNUSRB PC exam.'
    }
  ];
  cards = [
    {
      image: '/police.png',
      title: 'Police Coaching',
      description: 'Expert training for Police exams including TNUSRB and RPF.',
      link: '/register-form'
    },
    {
      image: '/army.png',
      title: 'Army Recruitment',
      description: 'Join our Army coaching program to crack GD, Clerk, and Technical roles.',
      link: '/register-form'
    },
    {
      image: '/navy.png',
      title: 'Navy Training',
      description: 'Prepare for MR, SSR, AA exams with our Navy training program.',
      link: '/register-form'
    },
    {
      image: '/air-force.png',
      title: 'Air Force X & Y',
      description: 'Crack Group X and Y exams with our professional coaching.',
      link: '/register-form'
    },
    {
      image: '/nda.png',
      title: 'NDA / CDS',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      link: '/register-form'
    },
    {
      image: '/capf.png',
      title: 'Assistant Commandant',
      description: 'Guidance for CAPF Assistant Commandant entrance exams.',
      link: '/register-form'
    },
    {
      image: '/crpf.png',
      title: 'CRPF & BSF',
      description: 'Expert training for Central Armed Police Forces like CRPF and BSF.',
      link: '/register-form'
    },
    {
      image: '/ssc.png',
      title: 'SSC - GD & MTS',
      description: 'Start your SSC journey with GD & MTS focused preparation.',
      link: '/register-form'
    },
    {
      image: '/physical.png',
      title: 'Physical Training',
      description: 'Get physically ready with our daily fitness training sessions.',
      link: ''
    },
    {
      image: '/online.png',
      title: 'Online Classes',
      description: 'Join our virtual classrooms for live coaching sessions.',
      link: ''
    },
    {
      image: '/mock.png',
      title: 'Mock Exams',
      description: 'Regular mock tests and assessments to track your progress.',
      link: ''
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private apiServices: Api, private router: Router) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('bootstrap/js/dist/carousel').then((module) => {
        const Carousel = module.default;

        // 🔁 Main Carousel (e.g., image slider)
        const carouselNativeEl = this.carouselElement?.nativeElement;
        if (carouselNativeEl) {
          new Carousel(carouselNativeEl, {
            interval: 4000,
            ride: 'carousel',
            wrap: true,
          });
        }

        // 💬 Testimonial Carousel
        const testimonialNativeEl = this.testimonialCarousel?.nativeElement;
        if (testimonialNativeEl) {
          const testimonialInstance = new Carousel(testimonialNativeEl, {
            interval: 5000,
            ride: 'carousel',
            wrap: true,
          });

          // 🖱️ Mouse drag
          let isDown = false;
          let startX = 0;

          testimonialNativeEl.addEventListener('mousedown', (e: MouseEvent) => {
            isDown = true;
            startX = e.pageX;
            testimonialNativeEl.style.cursor = 'grabbing';
          });

          testimonialNativeEl.addEventListener('mouseup', (e: MouseEvent) => {
            if (!isDown) return;
            isDown = false;
            testimonialNativeEl.style.cursor = 'grab';
            const diff = e.pageX - startX;
            if (diff > 50) testimonialInstance.prev();
            else if (diff < -50) testimonialInstance.next();
          });

          testimonialNativeEl.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialNativeEl.style.cursor = 'grab';
          });

          // 📱 Touch drag
          let touchStartX = 0;
          testimonialNativeEl.addEventListener('touchstart', (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
          });

          testimonialNativeEl.addEventListener('touchend', (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchEndX - touchStartX;
            if (diff > 50) testimonialInstance.prev();
            else if (diff < -50) testimonialInstance.next();
          });
        }
      });
    }
  }
  courseOptions: { [key: string]: string[] } = {
    'TNUSRB': ['Police Constable', 'Sub Inspector', 'Sub Inspector-Finger Print', 'Sub Inspector-Technical', 'Watcher', 'Guard', 'Forester'],
    'Army': ['NDA', 'CDS', 'General Duty', 'Tradesman', 'Nursing Assistant', 'Soldier-Clerk / Store Keeper Technical', 'Technical'],
    'Navy': ['MR', 'Technical SSR', 'Technical AA', ' Coast Gaurd', 'Coast Guard Navik (GD)', 'Coast Guard Navik (DB)'],
    'Air Force': ['Indian Air Force Group X & Y', 'Indian Air Force Group X', 'Indian Air Force Group Y'],
    'Other Uniformed Services': ['RPF-Sub Inspector', 'RPF-Police Constable', 'BSF-Tradesman', 'BSF-GD', 'CRPF-Constable (GD)', 'CRPF-Tradesman', 'SSC-MTS', 'SSC-GD'],
  };

  get specializations(): string[] {
    return this.courseOptions[this.user.course] || [];
  }


  onSubmit(form: any) {
    if (form.invalid) {
      console.warn('Form is invalid. Please correct the errors.');
      return;
    }

    const formData = { ...this.user };
    // console.log(formData);

    this.apiServices.submitForm(formData).subscribe({
      next: (res: any) => {
        console.log('✅ Form submitted!', res);

        form.resetForm(); // Reset form

        // Navigate immediately after successful submission
        this.router.navigate(['/thank-you']);
      },
      error: (err: any) => {
        console.error('❌ Error submitting form:', err);
      }
    });
  }
} 