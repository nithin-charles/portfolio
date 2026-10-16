import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit, OnDestroy {
  public greetings: string[] = ['Hi', 'Vanakkam', 'Bonjour', 'Hola'];
  public greet: string = 'Hi';
  public copiedEmail: boolean = false;
  private timer: any;

  ngOnInit(): void {
    let i = 1;
    this.timer = setInterval(() => {
      this.greet = this.greetings[i];
      i = (i + 1) % this.greetings.length;
    }, 2000);
  }

  public scrollToSection(target: string): void {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

