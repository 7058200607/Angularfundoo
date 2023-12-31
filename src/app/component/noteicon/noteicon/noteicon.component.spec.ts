import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteiconComponent } from './noteicon.component';

describe('NoteiconComponent', () => {
  let component: NoteiconComponent;
  let fixture: ComponentFixture<NoteiconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteiconComponent]
    });
    fixture = TestBed.createComponent(NoteiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
