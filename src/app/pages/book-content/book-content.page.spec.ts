import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookContentPage } from './book-content.page';

describe('BookContentPage', () => {
  let component: BookContentPage;
  let fixture: ComponentFixture<BookContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
