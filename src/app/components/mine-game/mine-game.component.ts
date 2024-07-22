import { Component, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MineCellState } from '../../interfaces/mine-cell-state';
import { BoardInfo } from '../../interfaces/board-info';
import { BoardService } from '../../services/board.service';
import { MineCellComponent } from '../mine-cell/mine-cell.component';

@Component({
    selector: 'app-mine-game',
    standalone: true,
    imports: [ CommonModule, MineCellComponent ],
    templateUrl: './mine-game.component.html',
    styleUrl: './mine-game.component.scss'
})

export class MineGameComponent implements OnInit {
    @ViewChildren(MineCellComponent) rowChildren: QueryList<MineCellComponent> = new QueryList<MineCellComponent>();

    boardInfo: BoardInfo = {
	totalRows: 0,
	totalCols: 0,
	totalMines: 0
    };
    gameOver: boolean = false;
    foundCount: number = 0;
    flaggedCount: number = 0;
    timeElapsed: number = 0;
    timerStarted: boolean = false;
    timerInterval : number = 0;
    
    constructor (private boardService: BoardService) {
    }

    ngOnInit() {
	this.boardService.initializeGameBoard();
	this.boardInfo = this.boardService.getBoardInfo();
    }
    
    expose(cell: MineCellState): void {
if (this.gameOver) {
	    return;
	}
	if (!cell.exposed) {
	    if (cell.mined) {
		this.endGame(cell);
	    }
	    console.log("here 1");
	    cell.exposed = true;
	    let tgt = this.rowChildren.get(cell.idx);
	    if (tgt !== undefined) {
		tgt.expose(cell.mined, cell.neighbors); 
	    }
	    if (cell.neighbors == 0) {
		for (let i = -1; i < 2; i++) {
		    for (let j = -1; j < 2; j++) {
			let nRow = cell.row + i;
			let nCol = cell.col + j;
			let nCell = this.boardService.getCell(nRow, nCol);

			if (nCell !== undefined) {
			    this.expose(nCell);
			}
		    }
		}
	    }
	}
    }

    endGame(cur: MineCellState): void {
	clearInterval(this.timerInterval);
	this.timerStarted = false;
	
	this.gameOver = true;
	if (this.foundCount == this.boardInfo.totalMines) {
	    console.log("You is winner!");
	} else {
	    console.log("You lost the game");
	    let tgtl = this.rowChildren.get(cur.idx);
	    if (tgtl !== undefined) {
		tgtl.loser(true);
	    }
	    for (let i: number = 0; i < this.boardInfo.totalRows; i++) {
		for (let j: number = 0; j < this.boardInfo.totalCols; j++) {
		    let cell = this.boardService.getCell(i, j);
		    if (cell == undefined) { continue; }
		    if (cell !== undefined) {
			if (cell.mined) {
			    cell.exposed = true;
			    let tgt = this.rowChildren.get(cell.idx)
			    if (tgt !== undefined) {
				tgt.expose(true, 0);
			    }
			}
		    }
		}
	    }
	}
    }

    getCoord(a: number[]): number {
	let ret = a.pop();
	if (ret !== undefined) {
	    return ret;
	} else {
	    return -1;
	}
    }

    checkTimer(): void {
	if (!this.timerStarted) {
	    this.timerInterval =
		setInterval(() => { this.timeElapsed++; }, 1000);
	    this.timerStarted = true;
	}
    }
    
    onExpose(coord: number[]): void {
	if (this.gameOver) {
	    return;
	}
	this.checkTimer();
	let col: number = this.getCoord(coord);
	let row: number = this.getCoord(coord);

	console.log("Exposing " + row + ", " + col);

	let cell = this.boardService.getCell(row, col);
	if (cell !== undefined) {
	    this.expose(cell);
	}
    }

    onFlagged(coord: number[]): void {
	if (this.gameOver) {
	    return;
	}
	this.checkTimer();
	let col: number = this.getCoord(coord);
	let row: number = this.getCoord(coord);
	let cell = this.boardService.getCell(row, col);
	if (cell != undefined) {
	    cell.flagged = !cell.flagged;
	    let tgt = this.rowChildren.get(cell.idx);
	    if (tgt !== undefined) {
		tgt.flag(cell.flagged);
	    }
	    
	    if (cell.flagged) {
		this.flaggedCount += 1;
		if(cell.mined) {
		    this.foundCount += 1;
		}
	    } else {
		this.flaggedCount -= 1;
		if (cell.mined) {
		    this.foundCount -= 1;
		}
	    }
	    if (this.foundCount == this.boardInfo.totalMines) {
		this.endGame(cell);
	    }
	}
    }
}
