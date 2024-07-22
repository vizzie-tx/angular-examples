import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ColorChildComponent } from './components/color-child/color-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, RouterLink, MatToolbarModule,
	      ColorChildComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
})
export class AppComponent {
  title = 'angular-examples';
}
