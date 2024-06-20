import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeamananAkunPage } from './keamanan-akun.page';

describe('KeamananAkunPage', () => {
  let component: KeamananAkunPage;
  let fixture: ComponentFixture<KeamananAkunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KeamananAkunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
