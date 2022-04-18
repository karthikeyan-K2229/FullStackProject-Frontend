import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddthemeComponent } from './Addtheme.component';

describe('AddthemeComponent', () => {
  let component: AddthemeComponent;
  let fixture: ComponentFixture<AddthemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddthemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
