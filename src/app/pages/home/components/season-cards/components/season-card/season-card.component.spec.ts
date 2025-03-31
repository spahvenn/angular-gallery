import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonCardComponent } from './season-card.component';

describe('SeasonCardComponent', () => {
  let component: SeasonCardComponent;
  let fixture: ComponentFixture<SeasonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
