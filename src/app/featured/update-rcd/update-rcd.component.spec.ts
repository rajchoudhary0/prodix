import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRcdComponent } from './update-rcd.component';

describe('UpdateRcdComponent', () => {
  let component: UpdateRcdComponent;
  let fixture: ComponentFixture<UpdateRcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRcdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
