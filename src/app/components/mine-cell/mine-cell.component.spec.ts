import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineCellComponent } from './mine-cell.component';

describe('MineCellComponent', () => {
  let component: MineCellComponent;
  let fixture: ComponentFixture<MineCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
