import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @Input() bg_color: string = 'black';

  public scrollToSection(event: Event, target: string) {
    event.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  public isWhite(): boolean {
    return this.bg_color === 'white';
  }

  public isBlack(): boolean {
    return this.bg_color === 'black';
  }
}
