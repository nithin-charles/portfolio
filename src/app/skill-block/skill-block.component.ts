import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-block.component.html',
  styleUrl: './skill-block.component.scss',
})
export class SkillBlockComponent implements OnInit {
  public isMobile: boolean = false;
  @Input() skill: string = '';
  constructor(private breakpointObserver: BreakpointObserver) {}
  public ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
