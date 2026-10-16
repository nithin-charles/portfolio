import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  public copiedEmail: boolean = false;
  public copiedPhone: boolean = false;

  public scrollToSection(event: Event, target: string) {
    event.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  public copyEmail(): void {
    navigator.clipboard.writeText('s.nithincharles@gmail.com').then(() => {
      this.copiedEmail = true;
      setTimeout(() => {
        this.copiedEmail = false;
      }, 2500);
    });
  }

  public copyPhone(): void {
    navigator.clipboard.writeText('+918838758014').then(() => {
      this.copiedPhone = true;
      setTimeout(() => {
        this.copiedPhone = false;
      }, 2500);
    });
  }
}

