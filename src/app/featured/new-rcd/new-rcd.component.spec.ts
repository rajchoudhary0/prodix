import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRcdComponent } from './new-rcd.component';

describe('NewRcdComponent', () => {
  let component: NewRcdComponent;
  let fixture: ComponentFixture<NewRcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRcdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
