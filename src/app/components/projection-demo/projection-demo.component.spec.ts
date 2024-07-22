import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionDemoComponent } from './projection-demo.component';

describe('ProjectionDemoComponent', () => {
  let component: ProjectionDemoComponent;
  let fixture: ComponentFixture<ProjectionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectionDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
