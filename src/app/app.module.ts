import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadBooksComponent } from './read-books/read-books.component';
import { BooksToReadComponent } from './books-to-read/books-to-read.component';
import { BooksUpdateComponent } from './books-update/books-update.component';
import { BooksDeleteComponent } from './books-delete/books-delete.component';
import { BooksFooterComponent } from './books-footer/books-footer.component';
import { BooksMenuComponent } from './books-menu/books-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadBooksComponent,
    BooksToReadComponent,
    BooksUpdateComponent,
    BooksDeleteComponent,
    BooksFooterComponent,
    BooksMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
