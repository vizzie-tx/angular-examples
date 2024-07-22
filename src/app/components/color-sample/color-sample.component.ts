import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'color-sample',
    standalone: true,
    imports: [ MatIconModule ],
    templateUrl: './color-sample.component.html',
    styleUrls: ['./color-sample.component.scss'],
})

export class ColorSampleComponent implements OnInit {
    @Input() color: string = "";
    constructor() {}

    ngOnInit() {}
}

