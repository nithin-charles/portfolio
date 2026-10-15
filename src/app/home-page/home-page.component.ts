import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit, OnDestroy {
  public greetings: string[] = ['Hi', 'Vanakkam', 'Bonjour', 'Hola'];
  public greet: string = 'Hi';
  private timer: any;

  ngOnInit(): void {
    let i = 1;
    this.timer = setInterval(() => {
      this.greet = this.greetings[i];
      i = (i + 1) % this.greetings.length;
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
