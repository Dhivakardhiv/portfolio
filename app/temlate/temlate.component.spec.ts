import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemlateComponent } from './temlate.component';

describe('TemlateComponent', () => {
  let component: TemlateComponent;
  let fixture: ComponentFixture<TemlateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemlateComponent]
    });
    fixture = TestBed.createComponent(TemlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
