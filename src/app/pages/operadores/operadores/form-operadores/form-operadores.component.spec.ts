import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperadoresComponent } from './form-operadores.component';

describe('FormOperadoresComponent', () => {
  let component: FormOperadoresComponent;
  let fixture: ComponentFixture<FormOperadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOperadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOperadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
