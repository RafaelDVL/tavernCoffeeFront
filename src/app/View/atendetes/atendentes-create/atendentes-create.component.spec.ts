import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendentesCreateComponent } from './atendentes-create.component';

describe('AtendentesCreateComponent', () => {
  let component: AtendentesCreateComponent;
  let fixture: ComponentFixture<AtendentesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendentesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendentesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
