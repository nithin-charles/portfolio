import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SkillSectionComponent } from '../skill-section/skill-section.component';
import { Router } from '@angular/router';
import { SkillBlockComponent } from '../skill-block/skill-block.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SkillSectionComponent, SkillBlockComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit {
  public greetings: string[] = ['hi', 'Vanakam', 'bonjur', 'Hola'];
  public greet: string = 'hi';

  @ViewChild('skill_section', { static: false })
  skillSectionComponent?: ElementRef;

  constructor(private router: Router) {
    let i = 0;
    setInterval(() => {
      if (i >= this.greetings.length) {
        i = 0;
      }
      this.greet = this.greetings[i++];
    }, 2000);
    console.log(this.skillSectionComponent);
  }

  ngAfterViewInit() {
    // ViewChild is initialized here
    console.log(this.skillSectionComponent);
  }

  public nagivateToSkillSection(): void {
    this.skillSectionComponent?.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
    //this.router.navigate([], { fragment: 'skill-section' });
  }
}
