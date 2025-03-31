import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonCardsComponent } from './season-cards.component';

describe('SeasonCardsComponent', () => {
  let component: SeasonCardsComponent;
  let fixture: ComponentFixture<SeasonCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
