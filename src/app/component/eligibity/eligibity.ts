import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eligibity',
  standalone:true,
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './eligibity.html',
  styleUrl: './eligibity.css'
})
export class Eligibity {
   selectedEducation: string = '';
  selectedCategory: string = '';

courses = [
  {
      image: '/police.png',
      title: 'TNUSRB',
      designation:'Police Constable',
      description: 'A Police Constable plays a vital role in maintaining law and order, ensuring public safety, and supporting crime prevention and investigations. Key responsibilities include patrolling, crowd management, assisting senior officers, and responding to emergencies. The role demands physical fitness, discipline, integrity, and the ability to perform effectively under pressure and in challenging situations.',
      Education: '10th',
      Age:{
        category:{
        general : '18-26',
        bc_mbc :'18-28',
        sc_st:'18-31',
        Transgender:'18-31',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/tnusrb-police-constable'
    },
    {
      image: '/police.png',
      title: 'TNUSRB',
      designation:'Sub Inspector',
      description: 'A Sub-Inspector (SI) is a key frontline officer responsible for supervising constables, maintaining law and order, and leading preliminary criminal investigations. They manage police stations, oversee patrol duties, gather evidence, and ensure enforcement of the law. The role demands leadership, legal knowledge, integrity, and the ability to make quick, responsible decisions under pressure.',
      Education: 'UG',
      Age:{
        category:{
        general : '18-30',
        bc_mbc :'18-32',
        sc_st:'18-35',
        Transgender:'18-35',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Viva Voice / Medical',
      link: '/tnusrb-sub-inspector'
    },
    {
     
      image: '/police.png',
      title: 'TNUSRB',
      designation:'Sub Inspector-Finger Print',
      description: 'A Sub-Inspector – Finger Print specializes in forensic identification, playing a critical role in criminal investigations by analyzing, classifying, and matching fingerprint evidence. Responsibilities include visiting crime scenes, collecting latent prints, preparing fingerprint reports, and assisting in identifying suspects. The role demands keen observation, scientific accuracy, attention to detail, and strong analytical skills to support law enforcement with reliable forensic evidence.',
      Education: 'UG',
      Age:{
        category:{
        general : '18-30',
        bc_mbc :'18-32',
        sc_st:'18-35',
        Transgender:'18-35',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Viva Voice / Medical',
      link: '/tnusrb-sub-inspector-finger-print'
    },
    {
     
      image: '/police.png',
      title: 'TNUSRB',
      designation:'Sub Inspector-Technical',
      description: 'A Sub-Inspector – Technical plays a crucial role in supporting police operations through the maintenance and management of technical equipment and communication systems. Key responsibilities include handling wireless systems, CCTV networks, and digital forensic tools to aid crime prevention and investigation. The role demands strong technical knowledge, precision, problem-solving skills, and the ability to work effectively in high-pressure environments.',
      Education: 'Diploma',
      Age:{
       category:{
        general : '18-30',
        bc_mbc :'18-32',
        sc_st:'18-35',
        Transgender:'18-35',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Viva Voice / Medical',
      link: '/tnusrb-sub-inspector-technical'
    },
    {
     
      image: '/police.png',
      title: 'TNUSRB',
      designation:'Watcher',
      description: 'A TNUSRB Watcher serves as a vital part of the law enforcement system, primarily focused on surveillance, intelligence gathering, and assisting in maintaining public order. Key responsibilities include monitoring suspicious activities, supporting senior officers with background information, and aiding in crime detection efforts. The role demands alertness, confidentiality, commitment, and the ability to observe and report accurately under diverse conditions.',
      Education: '10th',
      Age:{
        category:{
        general : '18-32',
        bc_mbc :'18-37',
        sc_st:'18-37',
        Transgender:'18-37',
        Widows:'18-37',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical',
      link: '/tnusrb-watcher'
    },
    {
     
      image: '/police.png',
      title: 'TNUSRB',
      designation:'Guard',
      description: 'A TNUSRB Guard plays an important role in ensuring the security of government premises, properties, and personnel. Key responsibilities include controlling access points, monitoring for unauthorized activities, and responding to security threats or emergencies. The role demands alertness, physical fitness, discipline, and a strong sense of responsibility to uphold safety and order at all times.',
      Education: '12th',
      Age:{
         category:{
        general : '18-32',
        bc_mbc :'18-37',
        sc_st:'18-37',
        Transgender:'18-37',
        Widows:'18-37',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical',
      link: '/tnusrb-guard'
    },
    {
      image: '/police.png',
      title: 'TNUSRB',
      designation:'Forester',
      description: 'A TNUSRB Forester plays a key role in protecting forest resources, wildlife, and enforcing environmental laws. Key responsibilities include patrolling forest areas, preventing illegal activities like poaching and logging, and assisting in conservation efforts. The role demands physical endurance, environmental awareness, integrity, and the ability to work in remote and challenging natural terrains.',
      Education: 'UG',
      Age:{
        category:{
        general : '21-30',
        bc_mbc :'21-35',
        sc_st:'21-35',
        Transgender:'21-35',
        Widows:'21-35',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/tnusrb-forester'
    },
    {
      image: '/army.png',
      title: 'Army',
      designation:'NDA',
      description: 'An Army NDA Cadet undergoes rigorous training to become a future officer in the Indian Army, preparing to lead troops and safeguard the nation. Key responsibilities post-commission include tactical leadership, operational planning, and maintaining discipline and morale in the ranks. The role demands exceptional physical fitness, mental resilience, leadership qualities, and unwavering dedication to service under challenging and high-pressure conditions.',
      Education: '12th',
      Age:{
        category:{
        general : '16.5 - 19',
        bc_mbc :'16.5 - 19',
        sc_st:'16.5 - 19',
        Transgender:'16.5 - 19',
        Widows:'16.5 - 19',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / SSB Interview',
      link: '/NDA-Exam'
    },
     {
      image: '/army.png',
      title: 'ARMY',
      designation:'CDS',
      description: 'An Army CDS Officer plays a crucial role in leading military units, planning operations, and upholding national security. Key responsibilities include strategic command, personnel management, and executing defense protocols in both peace and combat scenarios. The role demands strong leadership, physical and mental toughness, discipline, and the ability to perform under pressure in demanding and dynamic environments.',
      Education: 'UG',
      Age:{
        category:{
        general : '---18-26',
        bc_mbc :'18-28',
        sc_st:'18-31',
        Transgender:'18-31',
        Widows:'18-37',
        ex_service_man:'Up to 47---',
      } 
    },
      Height:'156',
      Recruitment :'Exam / SSB Interview',
      link: '/CDS-Exam'
    },
    {
      image: '/army.png',
      title: 'ARMY',
      designation:'General Duty',
      description: 'An Army General Duty (GD) Soldier serves as the backbone of the Indian Army, performing essential frontline duties to ensure national security and operational readiness. Key responsibilities include combat readiness, patrolling, guard duties, and supporting senior officers during field operations. The role demands exceptional physical fitness, courage, discipline, and the ability to perform effectively under high-pressure and challenging conditions.',
      Education: '10th',
      Age:{
        category:{
        general : '17.5-21',
        bc_mbc :'17.5-21',
        sc_st:'17.5-21',
        Transgender:'17.5-21',
        Widows:'17.5-21',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/army-general-duty'
    },
    {
      image: '/army.png',
      title: 'ARMY',
      designation:'Tradesman',
      description: 'An Army Tradesman plays a vital support role in maintaining the operational efficiency and daily functioning of Army units. Key responsibilities include performing skilled tasks such as cooking, cleaning, equipment maintenance, and logistical support. The role demands physical stamina, discipline, dedication, and the ability to work diligently under challenging and demanding conditions, both in peace and field operations.',
      Education: '8th',
      Age:{
        category:{
        general : '17.5-21',
        bc_mbc :'17.5-21',
        sc_st:'17.5-21',
        Transgender:'17.5-21',
        Widows:'17.5-21',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/army-tradesman'
    },
    {
      image: '/army.png',
      title: 'ARMY',
      designation:'Nursing Assistant',
      description: 'An Army Nursing Assistant plays a crucial role in providing medical support to soldiers, both in field conditions and military hospitals. Key responsibilities include assisting in patient care, administering first aid, maintaining medical supplies, and supporting army doctors during treatment. The role demands medical knowledge, compassion, physical fitness, and the ability to perform effectively in high-stress and combat-related environments.',
      Education: '12th',
      Age:{
        category:{
        general : '17.5-23',
        bc_mbc :'17.5-23',
        sc_st:'17.5-23',
        Transgender:'17.5-23',
        Widows:'17.5-23',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/army-nursing-assistant'
    },
    {
      image: '/army.png',
      title: 'ARMY',
      designation:'Solider Clerk / Store Keeper Technical',
      description: 'An Army Soldier Clerk / Store Keeper Technical plays a key role in managing administrative, financial, and inventory-related tasks within the Army. Key responsibilities include maintaining personnel records, handling documentation, managing logistics, and supporting operational readiness through efficient supply chain management. The role demands attention to detail, computer literacy, integrity, and the ability to perform accurately under pressure and in demanding conditions.',
      Education: '12th',
      Age:{
        category:{
        general : '17.5-21',
        bc_mbc :'17.5-21',
        sc_st:'17.5-21',
        Transgender:'17.5-21',
        Widows:'17.5-21',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/army-soldier-clerk'
    },
    {
      image: '/army.png',
      title: 'ARMY',
      designation:'Technical',
      description: 'An Army Soldier Clerk / Store Keeper Technical (Technical) plays a vital role in ensuring the smooth operation of administrative and logistical systems within the Armys technical units. Key responsibilities include managing technical records, handling inventory of equipment and spare parts, and supporting maintenance operations. The role demands technical knowledge, organizational skills, discipline, and the ability to perform with precision under pressure in operational environments.',
      Education: '10th',
      Age:{
        category:{
        general : '17.5-21',
        bc_mbc :'17.5-21',
        sc_st:'17.5-21',
        Transgender:'17.5-21',
        Widows:'17.5-21',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/army-technical'
    },
    {
      image: '/navy.png',
      title: 'NAVY',
       designation:'MR',
      description: 'A Navy Matric Recruit (MR) plays an essential role in supporting day-to-day operations onboard naval ships and establishments. Key responsibilities include duties as a cook, steward, or hygienist, ensuring the well-being and efficiency of the ship’s crew. The role demands physical fitness, discipline, adaptability, and the ability to perform reliably under pressure in dynamic and challenging maritime environments.',
      Education: '10th',
      Age:{
        category:{
        general : '17-20',
        bc_mbc :'17-20',
        sc_st:'17-20',
        Transgender:'17-20',
        Widows:'17-20',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/navy-mr'
    },
    {
      image: '/navy.png',
      title: 'NAVY',
       designation:'Technical SSR',
      description: 'A Navy Senior Secondary Recruit (SSR – Technical) plays a crucial role in operating and maintaining advanced equipment on board naval ships and submarines. Key responsibilities include managing communication systems, radar, sonar, and weaponry, and supporting technical operations during missions. The role demands strong technical aptitude, physical endurance, discipline, and the ability to perform effectively under pressure in demanding sea conditions.',
      Education: '12th',
      Age:{
        category:{
        general : '17-20',
        bc_mbc :'17-20',
        sc_st:'17-20',
        Transgender:'17-20',
        Widows:'17-20',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/navy-technical-ssr'
    },
    {
      image: '/navy.png',
      title: 'NAVY',
       designation:'Technical AA',
      description: 'Prepare for MR, SSR, AA exams with our Navy training program.',
      Education: '12th',
      Age:{
        category:{
        general : '17-20',
        bc_mbc :'17-20',
        sc_st:'17-20',
        Transgender:'17-20',
        Widows:'17-20',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/navy-technical-aa'
    },
    {
      image: '/navy.png',
      title: 'NAVY',
       designation:'Indian Coast Guard',
      description: 'Prepare for MR, SSR, AA exams with our Navy training program.',
      Education: 'Diploma',
      Age:{
        category:{
        general : '18-22',
        bc_mbc :'18-25',
        sc_st:'18-27',
        Transgender:'18- --',
        Widows:'18- --',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'exam',
      link: '/indian-coast-guard'
    },
    {
      image: '/navy.png',
      title: 'NAVY',
       designation:'Indian Coast Guard - Navik (GD)',
      description: 'Prepare for MR, SSR, AA exams with our Navy training program.',
      Education: '12th',
      Age:{
        category:{
        general : '18-22',
        bc_mbc :'18-25',
        sc_st:'18-27',
        Transgender:'18- --',
        Widows:'18- --',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/indian-coast-guard-navik-gd'
    },
     {
      image: '/navy.png',
      title: 'NAVY',
       designation:'Indian Coast Guard - Navik (DB)',
      description: 'Prepare for MR, SSR, AA exams with our Navy training program.',
      Education: '12th',
      Age:{
        category:{
        general : '18-22',
        bc_mbc :'18-25',
        sc_st:'18-27',
        Transgender:'18- --',
        Widows:'18- --',
        ex_service_man:'Up to --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/indian-coast-guard-navik-db'
    },
    {
      image: '/air-force.png',
      title: 'AIR FORCE',
      designation: 'Air Force X & Y',
      description: 'Crack Group X and Y exams with our professional coaching.',
      Education: '12th',
      Age:{
        category:{
        general : '17-21',
        bc_mbc :'17-21',
        sc_st:'17-21',
        Transgender:'17-21',
        Widows:'17-21 --',
        ex_service_man:'17-21 --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/indian-air-force-group-x-y'
    },
       {
      image: '/air-force.png',
      title: 'AIR FORCE',
      designation: 'Air Force Group X',
      description: 'Crack Group X and Y exams with our professional coaching.',
      Education: '12th',
      Age:{
        category:{
        general : '17-21',
        bc_mbc :'17-21',
        sc_st:'17-21',
        Transgender:'17-21',
        Widows:'17-21 --',
        ex_service_man:'17-21 --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/indian-air-force-group-x'
    },
       {
      image: '/air-force.png',
      title: 'AIR FORCE',
      designation: 'Air Force Group Y',
      description: 'Crack Group X and Y exams with our professional coaching.',
      Education: '12th',
      Age:{
        category:{
         general : '17-21',
        bc_mbc :'17-21',
        sc_st:'17-21',
        Transgender:'17-21',
        Widows:'17-21 --',
        ex_service_man:'17-21 --',
      } 
    },
      Height:'156',
      Recruitment :'Exam / Physical / Medical',
      link: '/indian-air-force-group-y'
    },
    {
      image: '/nda.png',
      title: 'UNIFORMED SERVICES',
      designation: 'RPF-Sub Inspector',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      Education: 'UG',
      Age:{
        category:{
        general : '20-30',
        bc_mbc :'20-33',
        sc_st:'20-35',
        Transgender:'18-31 --',
        Widows:'18-37 --',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/rpf-sub-inspector'
    },
    {
      image: '/nda.png',
      title: 'UNIFORMED SERVICES',
      designation: 'RPF-Police Constable',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      Education: '10th',
      Age:{
        category:{
        general : '18-25',
        bc_mbc :'18-28',
        sc_st:'18-30',
        Transgender:'18-31',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/rpf-police-constable'
    },
    {
      image: '/nda.png',
      title: 'UNIFORMED SERVICES',
      designation: 'BSF-Tradesman',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      Education: '10th',
      Age:{
        category:{
        general : '18-25',
        bc_mbc :'18-28',
        sc_st:'18-30',
        Transgender:'18-31 --',
        Widows:'18-37 --',
        ex_service_man:'18-28',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/bsf-tradesman'
    },
    {
      image: '/nda.png',
      title: 'UNIFORMED SERVICES',
      designation: 'BSF-GD',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      Education: '10th',
      Age:{
        category:{
        general : '18-23',
        bc_mbc :'18-26',
        sc_st:'18-28',
        Transgender:'18-31',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/bsf-gd'
    },
    {
      image: '/nda.png',
      title: 'UNIFORMED SERVICES',
      designation: 'CRPF-Constable GD',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      Education: '10th',
      Age:{
        category:{
        general : '18-23',
        bc_mbc :'18-26',
        sc_st:'18-28',
        Transgender:'18-31',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'Exam(CBT) / Physical / Medical',
      link: '/crpf-constable-gd'
    },
    {
      image: '/nda.png',
      title: 'UNIFORMED SERVICES',
      designation: 'CRPF-Tradesman',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      Education: '10th',
      Age:{
        category:{
        general : '18-26',
        bc_mbc :'18-28',
        sc_st:'18-31',
        Transgender:'18-31',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'exam',
      link: '/crpf-tradesman'
    },
    {
      image: '/nda.png',
      title: 'UNIFORMED SERVICES',
      designation: 'SSC-MTS',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      Education: '10th',
      Age:{
        category:{
        general : '18-26',
        bc_mbc :'18-28',
        sc_st:'18-31',
        Transgender:'18-31',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'exam',
      link: '/ssc-mts'
    },
    {
      image: '/nda.png',
      title: 'UNIFORMED SERVICES',
      designation: 'SSC-GD',
      description: 'Crack UPSC NDA & CDS with our focused coaching modules.',
      Education: '10th',
      Age:{
        category:{
        general : '18-26',
        bc_mbc :'18-28',
        sc_st:'18-31',
        Transgender:'18-31',
        Widows:'18-37',
        ex_service_man:'Up to 47',
      } 
    },
      Height:'156',
      Recruitment :'exam',
      link: '/ssc-gd'
    },
  ];
  filteredCourses() {
    return this.courses.filter(item => {
      const matchEdu = this.selectedEducation ? item.Education === this.selectedEducation : true;
      return matchEdu;
    });}
}
