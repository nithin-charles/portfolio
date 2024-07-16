import { Component, HostListener } from '@angular/core';
import { SkillSectionComponent } from '../skill-section/skill-section.component';
import { RouterModule } from '@angular/router';
import { SkillBlockComponent } from '../skill-block/skill-block.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SkillSectionComponent,
    SkillBlockComponent,
    NavBarComponent,
    HomePageComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  public navBarColor: string = 'black';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const homeSection = document.getElementById('home');
    const skillSection = document.getElementById('skill');
    const navbar = document.querySelector('app-nav-bar');

    if (homeSection && skillSection && navbar) {
      const homeRect = homeSection.getBoundingClientRect();
      const skillRect = skillSection.getBoundingClientRect();

      // if (
      //   homeRect.top >= 0 &&
      //   Math.floor(homeRect.bottom) <= Math.floor(window.innerHeight)
      // ) {
      //   this.navBarColor = 'black';
      //   console.log(this.navBarColor);
      // } else if (
      //   skillRect.top >= 0 &&
      //   Math.floor(skillRect.bottom) <= Math.floor(window.innerHeight * 1.5)
      // ) {
      //   this.navBarColor = 'white';
      //   console.log(this.navBarColor);
      // }

      if (
        skillRect.top >= 0 &&
        Math.floor(skillRect.bottom) <= Math.floor(window.innerHeight * 1.5)
      ) {
        this.navBarColor = 'white';
        console.log(this.navBarColor);
      } else {
        this.navBarColor = 'black';
      }
    }
  }

  public isWhite(): boolean {
    return this.navBarColor === 'white';
  }

  public isBlack(): boolean {
    return this.navBarColor === 'black';
  }
}
