import { Component, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.scss'
})

export class MyCardsComponent implements AfterContentInit{
    @ContentChild('header')
    cardHeaderData: ElementRef = {
	nativeElement: undefined
    };

    ngAfterContentInit() {
	console.log(this.cardHeaderData);
    }
}
