import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Rashtrakavi Ramdhari Singh Dinkar College of Engineering',
      board: 'Aryabhatta Knowledge University, Patna',
      period: '2017 – 2021',
    },
    {
      degree: 'Intermediate (12th) — BSEB',
      institution: 'Patna, Bihar, India',
      board: '',
      period: '2015 – 2017',
    },
    {
      degree: 'High School (10th) — BSEB',
      institution: 'Patna, Bihar, India',
      board: '',
      period: '2014 – 2015',
    },
  ];

  achievements = [
    'Improved application load time by 30% via SQL and API optimization',
    'Delivered multiple enterprise-grade healthcare and client portal applications',
    'Reduced database response time by 25% through advanced query tuning and indexing',
    'Recognized by management for cross-team collaboration and junior mentorship',
    'Implemented real-time telehealth features used by hundreds of patients and providers',
  ];
}
