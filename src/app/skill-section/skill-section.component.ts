import { Component, OnInit } from '@angular/core';
import { SkillBlockComponent } from '../skill-block/skill-block.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [SkillBlockComponent],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss',
})
export class SkillSectionComponent implements OnInit {
  public isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  public ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
