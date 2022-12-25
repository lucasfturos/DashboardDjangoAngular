import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProdutoComponent } from './delete.component';

describe('DeleteProdutoComponent', () => {
  let component: DeleteProdutoComponent;
  let fixture: ComponentFixture<DeleteProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteProdutoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeleteProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
