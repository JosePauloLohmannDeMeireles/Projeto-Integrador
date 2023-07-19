import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbisComponent } from './hobbis.component';

describe('HobbisComponent', () => {
  let component: HobbisComponent;
  let fixture: ComponentFixture<HobbisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbisComponent]
    });
    fixture = TestBed.createComponent(HobbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
