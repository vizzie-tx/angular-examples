import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-mat-components',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './mat-components.component.html',
  styleUrl: './mat-components.component.scss'
})
export class MatComponentsComponent {

}
