import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendentesDeleteComponent } from './atendentes-delete.component';

describe('AtendentesDeleteComponent', () => {
  let component: AtendentesDeleteComponent;
  let fixture: ComponentFixture<AtendentesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendentesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendentesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
