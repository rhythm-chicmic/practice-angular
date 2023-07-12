import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRecipieComponent } from './hello-recipie.component';

describe('HelloRecipieComponent', () => {
  let component: HelloRecipieComponent;
  let fixture: ComponentFixture<HelloRecipieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloRecipieComponent]
    });
    fixture = TestBed.createComponent(HelloRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
