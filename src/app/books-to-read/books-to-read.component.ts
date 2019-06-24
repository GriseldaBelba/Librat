import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-to-read',
  templateUrl: './books-to-read.component.html',
  styleUrls: ['./books-to-read.component.css']
})
export class BooksToReadComponent implements OnInit {

  librat: any[]
  localStorage: any[] = ["Titulli 1", "Titulli 2", "asd", "asd","asd","asd"];
  constructor() { }

  ngOnInit() {
    this.librat = this.localStorage;
  }
  fshiLibrat(){
    this.librat = [];
  }
  kerkoLiber(vlera: any){
    this.librat = this.localStorage.filter(s => s.includes(vlera));
  }
}
