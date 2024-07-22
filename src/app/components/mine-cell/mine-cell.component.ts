import { Input, Output, Component, OnInit, EventEmitter, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLandMineOn, faFlag, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8 } from '@fortawesome/free-solid-svg-icons';

import { MineCellState } from '../../interfaces/mine-cell-state';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-mine-cell',
  standalone: true,
    imports: [ CommonModule, FontAwesomeModule ],
  templateUrl: './mine-cell.component.html',
  styleUrl: './mine-cell.component.scss'
})
export class MineCellComponent implements OnInit {
    faLandMineOn = faLandMineOn;
    faFlag = faFlag;
    digits = [ fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8 ];
    faNb = fa1;
    @Input('row') row: number = -1;
    @Input('col') col: number = -1;

    exposed: boolean = false;
    flagged: boolean = false;
    mined: boolean = false;
    fatal: boolean = false;
    neighbors: number = 0;
    class: string = "";
    
    @Output() onExpose = new EventEmitter<any>();
    @Output() onFlagged = new EventEmitter<any>();
    
    expose(mined: boolean, neighbors: number) {
	if (!mined) {
	    this.faNb = this.digits[neighbors-1];
	    if (neighbors > 0) {
		this.neighbors = neighbors;
		this.class = 'icon' + neighbors;
	    }
	} else {
	    this.mined = true;
	}
	this.exposed = true;
    }

    flag(state: boolean) {
	this.flagged = state;
    }
    loser(state: boolean = true) {
	this.fatal = state;
    }
    
    constructor(private boardService: BoardService) {}
    
    ngOnInit() {
    }
    
    onClick() {
	this.onExpose.emit([this.row, this.col]);
	return false;
    }

    onContextMenu() {
	this.onFlagged.emit([this.row, this.col]);
	return false;
    }
}




