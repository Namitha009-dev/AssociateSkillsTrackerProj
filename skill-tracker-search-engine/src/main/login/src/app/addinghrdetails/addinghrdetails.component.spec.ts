import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinghrdetailsComponent } from './addinghrdetails.component';

describe('AddinghrdetailsComponent', () => {
  let component: AddinghrdetailsComponent;
  let fixture: ComponentFixture<AddinghrdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinghrdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinghrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
