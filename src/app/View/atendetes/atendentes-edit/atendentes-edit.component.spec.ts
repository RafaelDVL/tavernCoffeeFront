import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendentesEditComponent } from './atendentes-edit.component';

describe('AtendentesEditComponent', () => {
  let component: AtendentesEditComponent;
  let fixture: ComponentFixture<AtendentesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendentesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendentesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
