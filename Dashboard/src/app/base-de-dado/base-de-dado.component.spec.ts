import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeDadoComponent } from './base-de-dado.component';

describe('BaseDeDadoComponent', () => {
  let component: BaseDeDadoComponent;
  let fixture: ComponentFixture<BaseDeDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDeDadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseDeDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
