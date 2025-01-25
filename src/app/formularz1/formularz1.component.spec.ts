import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularz1Component } from './formularz1.component';

describe('Formularz1Component', () => {
  let component: Formularz1Component;
  let fixture: ComponentFixture<Formularz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formularz1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formularz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
