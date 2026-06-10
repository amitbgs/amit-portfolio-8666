import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'ASP.NET Core / Web API', level: 95 },
        { name: 'C# / .NET', level: 93 },
        { name: 'Entity Framework Core', level: 88 },
        { name: 'RESTful Services', level: 92 },
        { name: 'Microservices', level: 80 },
      ]
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React.js / Hooks', level: 88 },
        { name: 'Redux / State Mgmt', level: 82 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5 / CSS3 / SCSS', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
      ]
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MS SQL Server', level: 90 },
        { name: 'Stored Procedures', level: 88 },
        { name: 'LINQ / EF Queries', level: 85 },
        { name: 'Query Optimization', level: 82 },
        { name: 'Triggers & Indexing', level: 80 },
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS S3', level: 78 },
        { name: 'CI/CD Pipelines', level: 75 },
        { name: 'Git / Version Control', level: 92 },
        { name: 'Docker (basics)', level: 65 },
      ]
    },
    {
      category: 'Security',
      icon: '🔐',
      skills: [
        { name: 'OAuth 2.0 / OIDC', level: 83 },
        { name: 'JWT Authentication', level: 88 },
        { name: 'Role-Based Access', level: 90 },
        { name: 'API Security', level: 85 },
      ]
    },
    {
      category: 'Integrations',
      icon: '🔗',
      skills: [
        { name: 'Twilio (Video/Voice)', level: 85 },
        { name: 'Third-party REST APIs', level: 88 },
        { name: 'Webhooks', level: 80 },
        { name: 'Postman / Testing', level: 88 },
      ]
    },
  ];

  techTags = [
    'ASP.NET Core', 'React.js', 'C#', 'TypeScript', 'SQL Server',
    'Redux', 'Entity Framework', 'REST APIs', 'Twilio', 'JWT',
    'OAuth 2.0', 'AWS S3', 'Git', 'LINQ', 'CI/CD', 'WinForms',
  ];
}
