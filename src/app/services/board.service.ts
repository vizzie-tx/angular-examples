import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

import { MineCellState } from '../interfaces/mine-cell-state';
import { BoardInfo } from '../interfaces/board-info';

@Injectable({
  providedIn: 'root'
})

export class BoardService {
    private gameBoard: MineCellState[][] = [];
    private totalRows: number = 9;
    private totalCols: number = 9;
    private totalMines: number = 10;
    
    constructor() {
	this.initializeGameBoard();
    }

    private placeMines(): void {
	let minesPlaced: number = 0;

	while (minesPlaced < this.totalMines) {
	    let nextRow = Math.floor(Math.random() * this.totalRows);
	    let nextCol = Math.floor(Math.random() * this.totalCols);
	    if (!this.gameBoard[nextRow][nextCol].mined) {
		this.gameBoard[nextRow][nextCol].mined = true;
		console.log("mine: [" + nextRow + ", " + nextCol + "]");

		for (let i = -1; i < 2; i++) {
		    for (let j = -1; j < 2; j++) {
			if (this.cellInRange(nextRow+i, nextCol+j)) {
			    this.gameBoard[nextRow+i][nextCol+j].neighbors += 1;
			    console.log("neighbor: [" + (nextRow + i) + "," + ( nextCol + j) + "]");
			}
		    }
		}
		minesPlaced++;
	    }

	}
    }

    public initializeGameBoard(): void {
	this.gameBoard=[];
	
	for (let i = 0; i < this.totalRows; i++) {
	    let rowArr: MineCellState[] = [];
	    for (let j = 0; j < this.totalCols; j++) {
		rowArr.push({ row: i, col: j,
			      mined: false, exposed: false, flagged: false,
			      neighbors: 0,
			      idx: i*this.totalCols+j
			    });
	    }
	    this.gameBoard.push(rowArr);
	}
	this.placeMines();
	console.log(this.gameBoard);
    }

    private cellInRange(row: number, col: number): boolean {
	if (row < 0 || row >= this.totalRows ||
	    col < 0 || col >= this.totalCols) {
	    return false;
	}
	return true;
    }

    public getBoardInfo() : BoardInfo {
	let info: BoardInfo = { totalRows: this.totalRows,
				totalCols: this.totalCols,
				totalMines: this.totalMines };

	return info;
    }
    
    public getCell(row:number, col: number): MineCellState | undefined {
	if (this.cellInRange(row, col)) {
	    return this.gameBoard[row][col];
	}
	
	return undefined;
    }
}
