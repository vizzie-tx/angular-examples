import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ColorChildComponent } from './components/color-child/color-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, RouterLink,
	      MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
	      ColorChildComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
})
export class AppComponent {
    title = 'angular-examples';
    demos = [
	{ path: 'color', name: 'Color' },
	{ path: 'mines', name: 'Mines' },
	{ path: 'projection', name: 'Projection'}
    ];

}
