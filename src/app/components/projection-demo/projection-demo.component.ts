import { Component } from '@angular/core';

import { MyCardsComponent } from '../my-cards/my-cards.component';

@Component({
  selector: 'app-projection-demo',
  standalone: true,
  imports: [MyCardsComponent],
  templateUrl: './projection-demo.component.html',
  styleUrl: './projection-demo.component.scss'
})
export class ProjectionDemoComponent {
}
