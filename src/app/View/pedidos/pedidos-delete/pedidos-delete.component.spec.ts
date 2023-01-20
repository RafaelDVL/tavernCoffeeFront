import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosDeleteComponent } from './pedidos-delete.component';

describe('PedidosDeleteComponent', () => {
  let component: PedidosDeleteComponent;
  let fixture: ComponentFixture<PedidosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
