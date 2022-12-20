import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardsComponent } from './edit-cards.component';

describe('EditCardsComponent', () => {
  let component: EditCardsComponent;
  let fixture: ComponentFixture<EditCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
