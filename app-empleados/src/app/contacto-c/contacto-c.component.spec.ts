import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCComponent } from './contacto-c.component';

describe('ContactoCComponent', () => {
  let component: ContactoCComponent;
  let fixture: ComponentFixture<ContactoCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoCComponent]
    });
    fixture = TestBed.createComponent(ContactoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
