import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentContainerComponent } from './page-content-container.component';

describe('PageContentContainerComponent', () => {
  let component: PageContentContainerComponent;
  let fixture: ComponentFixture<PageContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageContentContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
