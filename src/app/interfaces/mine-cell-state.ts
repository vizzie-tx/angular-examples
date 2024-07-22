import { MineCellComponent } from '../components/mine-cell/mine-cell.component';

export interface MineCellState {
    row: number;
    col: number;
    mined: boolean;
    exposed: boolean;
    flagged: boolean;
    neighbors: number;
    idx: number;
}
