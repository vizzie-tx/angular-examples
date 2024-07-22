import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ColorSampleComponent } from '../color-sample/color-sample.component';

@Component({
    selector: 'app-color-child',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule,
	      ColorSampleComponent],
    templateUrl: './color-child.component.html',
    styleUrl: './color-child.component.scss'
})

export class ColorChildComponent implements AfterViewInit {
    @Input() primary:string = '#ccff00';
    @Input() colorPicker: string = "";

    @ViewChild('primaryColorSample')
    primarySampleComponent?: ColorSampleComponent;

    @ViewChild('primaryColorSample', { read: ElementRef})
    primarySampleDiv?: ElementRef;

    @ViewChild('primaryInput')
    primaryInput?: ElementRef;

    ngAfterViewInit() {
	console.log('Values on ngAfterViewInit():');

	console.log('primaryColorSample:', this.primarySampleComponent);

	console.log('primarySampleDiv:', this.primarySampleDiv);

	console.log('primaryInput:', this.primaryInput);
    }

    onClick() {
	console.log("Here");
	if (this.primaryInput !== undefined) {
	    let input = this.primaryInput.nativeElement;
	    console.log(input);
	    input.focus();
	    input.click();
	}
    }
    
}
