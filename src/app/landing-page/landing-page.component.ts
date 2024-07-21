import { Component, HostListener, OnInit } from '@angular/core';
import { SkillSectionComponent } from '../skill-section/skill-section.component';
import { SkillBlockComponent } from '../skill-block/skill-block.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { WorkSectionComponent } from '../work-section/work-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SkillSectionComponent,
    SkillBlockComponent,
    NavBarComponent,
    HomePageComponent,
    WorkSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  public navBarColor: string = 'black';
  public currentPage: string = 'about';
  public isMobile: boolean = false;
  public isNavBarDisabled: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const workSection = document.getElementById('work');
    const contactSection = document.getElementById('contact');

    if (homeSection && aboutSection && workSection && contactSection) {
      const homeRect = homeSection.getBoundingClientRect();
      const skillRect = aboutSection.getBoundingClientRect();
      const workRect = workSection.getBoundingClientRect();
      const contactRect = contactSection.getBoundingClientRect();

      if (
        homeRect.top >= 0 &&
        Math.floor(homeRect.bottom) <= Math.floor(window.innerHeight)
      ) {
        this.isNavBarDisabled = false;
        this.currentPage = 'about';
        console.log(this.currentPage);
      } else if (
        skillRect.top >= 0 &&
        Math.floor(skillRect.bottom) <= Math.floor(window.innerHeight * 1.5)
      ) {
        if (this.isMobile) {
          this.isNavBarDisabled = true;
        }
        this.currentPage = 'work';

        console.log(this.currentPage);
      } else if (
        workRect.top >= 0 &&
        Math.floor(workRect.bottom) <= Math.floor(window.innerHeight * 1.5)
      ) {
        if (this.isMobile) {
          this.isNavBarDisabled = true;
        }
        this.currentPage = 'contact';

        console.log(this.currentPage);
      } else if (
        contactRect.top >= 0 &&
        Math.floor(contactRect.bottom) <= Math.floor(window.innerHeight)
      ) {
        if (this.isMobile) {
          this.isNavBarDisabled = true;
        }
        this.currentPage = '';

        console.log(this.currentPage);
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
