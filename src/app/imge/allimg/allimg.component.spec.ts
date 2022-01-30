import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllimgComponent } from './allimg.component';

describe('AllimgComponent', () => {
  let component: AllimgComponent;
  let fixture: ComponentFixture<AllimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
