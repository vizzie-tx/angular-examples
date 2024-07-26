import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [ RouterOutlet, RouterLink, CommonModule,
	       MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
	       MatSlideToggleModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
})
export class AppComponent implements OnInit {
title = 'angular-examples';
    isDarkTheme?: Observable<boolean>;
    
    demos = [
	{ path: 'color', name: 'Color' },
	{ path: 'mines', name: 'Mines' },
	{ path: 'projection', name: 'Projection'}
    ];

    constructor(private themeService: ThemeService,
		private overlayContainer: OverlayContainer,
		private mediaMatcher: MediaMatcher
	       ) {
	this.isDarkTheme = this.themeService.isDarkTheme;
    }

    ngOnInit() {
	let match = this.mediaMatcher.matchMedia('( prefers-color-scheme: dark )');
	this.onToggleDarkMode(match.matches);
    }
    
    onToggleDarkMode(state: boolean) {
	this.themeService.setDarkTheme(state);
	let oc = this.overlayContainer.getContainerElement();
	console.log("before: " + oc.className);
	let classNames = oc.className.split(' ');
	if (state) {
	    if (!classNames.includes('dark-theme')) {
		classNames.push("dark-theme");
		oc.className = classNames.join(' ');
	    }
	} else {
	    if (classNames.includes('dark-theme')) {
		console.log(classNames);
		classNames = classNames.filter((word:string) => !(word == ('dark-theme')));
		console.log(classNames);
		oc.className = classNames.join(' ');
	    }
	}
	console.log("after: " + oc.className);
    }
}
