import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContraRecuperarPage } from './contra-recuperar.page';

describe('ContraRecuperarPage', () => {
  let component: ContraRecuperarPage;
  let fixture: ComponentFixture<ContraRecuperarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraRecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
