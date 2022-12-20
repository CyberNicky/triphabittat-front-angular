import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardsComponent } from './delete-cards.component';

describe('DeleteCardsComponent', () => {
  let component: DeleteCardsComponent;
  let fixture: ComponentFixture<DeleteCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
