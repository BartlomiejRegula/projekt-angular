import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularz3Component } from './formularz3.component';

describe('Formularz3Component', () => {
  let component: Formularz3Component;
  let fixture: ComponentFixture<Formularz3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formularz3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formularz3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
