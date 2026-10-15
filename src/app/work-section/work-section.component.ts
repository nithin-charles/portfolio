import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  skills: string;
  points: string[];
  expanded?: boolean;
}

@Component({
  selector: 'app-work-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss',
})
export class WorkSectionComponent {
  public experiences: WorkExperience[] = [
    {
      company: 'Bottomline',
      location: 'Bengaluru, Karnataka',
      role: 'Software Development Engineer II',
      period: 'May 2025 - Present',
      skills: '.NET 10, Microservices, AWS CloudFormation',
      points: [
        'Develop and support .NET microservices in the Ecosystem integration layer, enabling bidirectional data exchange between customer ERP systems and Bottomline products, including Paymode and NexusPayables.',
        'Deliver new features and resolve defects across enterprise import and export workflows.',
        'Completed the platform upgrade of Ecosystem microservices from .NET 8 to .NET 10, resolving migration and compatibility issues encountered during the upgrade.',
        'Partnered with a senior engineer to build new Ecosystem services that improve performance and extend import and export jobs with deduplication, grouping, splitting, and load-size controls.',
        'Contributed across the service delivery lifecycle, from project setup and implementation through AWS CloudFormation templates for cloud deployment.',
      ],
      expanded: true,
    },
    {
      company: 'SOTI',
      location: 'Kochi, Kerala',
      role: 'Full-Stack Developer',
      period: 'August 2022 - May 2025',
      skills: '.NET 8, Angular, Web API, SignalR, Jasmine, NUnit',
      points: [
        'Modernized a legacy web-server UI with a responsive Angular interface and led front-end delivery for multiple epics, adding features and improving the user experience.',
        'Built .NET Web APIs and Angular integrations for secure front-end and back-end communication.',
        'Implemented automated tests with Jasmine for Angular components, NUnit for Web APIs, and BDD scenarios.',
        'Contributed to the upgrade from .NET Framework to .NET 8 and adapted the server for deployment on a Linux VM, reducing hosting costs.',
        'Diagnosed and resolved a critical SignalR issue, delivering a timely fix that improved the customer experience.',
      ],
      expanded: false,
    },
  ];

  public toggleExpand(index: number): void {
    this.experiences[index].expanded = !this.experiences[index].expanded;
  }
}

