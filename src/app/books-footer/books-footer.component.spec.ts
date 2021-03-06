import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFooterComponent } from './books-footer.component';

describe('BooksFooterComponent', () => {
  let component: BooksFooterComponent;
  let fixture: ComponentFixture<BooksFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
