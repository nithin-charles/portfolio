import { Component, HostListener, OnInit } from '@angular/core';
import { SkillSectionComponent } from '../skill-section/skill-section.component';
import { SkillBlockComponent } from '../skill-block/skill-block.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { WorkSectionComponent } from '../work-section/work-section.component';
import { ProjectSectionComponent } from '../project-section/project-section.component';
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
    ProjectSectionComponent,
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
    const scrollPosition = window.scrollY + window.innerHeight * 0.4;
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const workSection = document.getElementById('work');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    if (homeSection && aboutSection && workSection && projectsSection && contactSection) {
      const contactTop = contactSection.offsetTop;
      const projectsTop = projectsSection.offsetTop;
      const workTop = workSection.offsetTop;
      const aboutTop = aboutSection.offsetTop;

      if (scrollPosition >= contactTop) {
        this.isNavBarDisabled = true;
        this.currentPage = '';
      } else if (scrollPosition >= projectsTop) {
        this.isNavBarDisabled = this.isMobile;
        this.currentPage = 'contact';
      } else if (scrollPosition >= workTop) {
        this.isNavBarDisabled = this.isMobile;
        this.currentPage = 'projects';
      } else if (scrollPosition >= aboutTop) {
        this.isNavBarDisabled = this.isMobile;
        this.currentPage = 'work';
      } else {
        this.isNavBarDisabled = false;
        this.currentPage = 'about';
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
