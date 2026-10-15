import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface ProjectItem {
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  links: { label: string; url: string; icon?: string }[];
}

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss',
})
export class ProjectSectionComponent {
  public projects: ProjectItem[] = [
    {
      title: 'Lgd.Yarp.Studio',
      badge: 'NuGet Package',
      description:
        'Developed and published a modern visual administrative user interface and configuration dashboard for YARP (Yet Another Reverse Proxy) in ASP.NET Core.',
      tags: ['.NET', 'C#', 'YARP', 'Reverse Proxy', 'NuGet'],
      links: [
        {
          label: 'NuGet',
          url: 'https://www.nuget.org/packages/Lgd.Yarp.Studio',
        },
      ],
    },
    {
      title: 'FollowUp AI',
      badge: 'AI Platform',
      description:
        'Built an AI agent platform for WhatsApp that acts as a personal assistant and automates custom workflows, task tracking, and reminders in group chats.',
      tags: ['AI Agent', 'WhatsApp API', 'Workflows', 'LLM Automation'],
      links: [],
    },
    {
      title: 'Personal Portfolio',
      badge: 'Web App',
      description:
        'Built a minimal, developer-centric portfolio using Angular with responsive navigation, micro-interactions, and Vercel Analytics integration.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Vercel'],
      links: [
        {
          label: 'Live',
          url: 'https://nithin-charles.vercel.app/',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/nithin-charles/portfolio',
        },
      ],
    },
  ];
}
