import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsActorsComponent } from './app-details-actors.component';

describe('AppDetailsActorsComponent', () => {
  let component: AppDetailsActorsComponent;
  let fixture: ComponentFixture<AppDetailsActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDetailsActorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDetailsActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
