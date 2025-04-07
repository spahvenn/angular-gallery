import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCallToActionComponent } from './hero-call-to-action.component';

describe('HeroCallToActionComponent', () => {
  let component: HeroCallToActionComponent;
  let fixture: ComponentFixture<HeroCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCallToActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
