import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularz2Component } from './formularz2.component';

describe('Formularz2Component', () => {
  let component: Formularz2Component;
  let fixture: ComponentFixture<Formularz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formularz2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formularz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
