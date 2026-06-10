import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  bullets: string[];
  badge?: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Patient, Provider, Radiology & Pharmacy System',
      badge: 'Healthcare',
      highlight: true,
      description: 'End-to-end healthcare management platform supporting five distinct user roles with real-time video consultations, prescription management, and radiology workflows.',
      tech: ['ASP.NET Core Web API', 'React.js', 'Redux', 'SQL Server', 'Twilio'],
      bullets: [
        'Built full-stack application with secure JWT auth across Patient, Provider, Radiology, Pharmacy & SuperAdmin roles',
        'Developed React provider dashboard for creating and assigning medical tests routed to radiology users',
        'Integrated Twilio Video API for real-time video/audio/chat consultations between patients and providers',
        'Automated pharmacy lookup via third-party API based on patient geolocation',
        'Designed end-to-end prescription and radiology report workflows',
      ]
    },
    {
      title: 'Referral & Community Management System',
      badge: 'Healthcare',
      description: 'Patient referral tracking and community engagement portal connecting providers, specialists, and patients through a unified React + .NET platform.',
      tech: ['ASP.NET Core Web API', 'React.js', 'SQL Server'],
      bullets: [
        'Built referral workflow enabling providers to refer patients to specialists with full status tracking',
        'Developed React community portal for shared health resources and provider-patient communication',
        'Implemented RBAC with secure document workflows for referrer and community roles',
      ]
    },
    {
      title: 'Client Dashboard Portal',
      badge: 'Enterprise',
      description: 'Responsive single-page application for data visualization, user management, and role-based access control with optimized API data pipelines.',
      tech: ['React.js', 'Redux', 'ASP.NET Core Web API', 'SQL Server', 'Axios'],
      bullets: [
        'Built reusable React component library for charts and data tables',
        'Implemented React Router with role-based route guards',
        'Optimized API calls with Axios interceptors, reducing data latency by 35%',
      ]
    },
    {
      title: 'Doctor & Appointment Management System',
      badge: 'Healthcare',
      description: 'Full-featured appointment scheduling platform with interactive calendars, admin dashboards, and real-time database consistency through SQL triggers.',
      tech: ['React.js', 'ASP.NET Core Web API', 'SQL Server', 'Stored Procedures'],
      bullets: [
        'Built interactive React calendar with drag-and-drop appointment scheduling',
        'Developed admin dashboards improving scheduling efficiency by 40%',
        'Integrated SQL triggers and stored procedures for real-time data consistency',
      ]
    },
    {
      title: 'File Management & Automation Tools',
      badge: 'Enterprise',
      description: 'Desktop automation suite for multi-format file conversion, AWS-based storage, and legacy WinForms application optimization.',
      tech: ['C#', '.NET', 'WinForms', 'AWS S3', 'SQL Server'],
      bullets: [
        'Developed export/import utilities supporting PDF, DOCX, and XML formats',
        'Integrated AWS S3 for cloud file retrieval and storage',
        'Optimized legacy WinForms application performance by 30%',
      ]
    },
  ];
}
