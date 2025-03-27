import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartImageListComponent } from './shopping-cart-image-list.component';

describe('ShoppingCartImageListComponent', () => {
  let component: ShoppingCartImageListComponent;
  let fixture: ComponentFixture<ShoppingCartImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartImageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
