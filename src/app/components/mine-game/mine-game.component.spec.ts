import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineGameComponent } from './mine-game.component';

describe('MineGameComponent', () => {
  let component: MineGameComponent;
  let fixture: ComponentFixture<MineGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MineGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
