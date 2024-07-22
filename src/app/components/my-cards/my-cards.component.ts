import { Component, ElementRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.scss'
})

export class MyCardsComponent implements AfterContentInit{
    @ContentChild('header')
    cardHeaderData: ElementRef = {
	nativeElement: undefined
    };

    ngAfterContentInit() {
	this.cardHeaderData.nativeElement.style.color = 'blue';
	this.cardHeaderData.nativeElement.style.backgroundColor =
	    'yellow';
	this.cardHeaderData.nativeElement.style.fontSize = '24px';
	console.log(this.cardHeaderData);
    }
}
