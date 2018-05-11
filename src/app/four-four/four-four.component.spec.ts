import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourFourComponent } from './four-four.component';

describe('FourFourComponent', () => {
  let component: FourFourComponent;
  let fixture: ComponentFixture<FourFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
