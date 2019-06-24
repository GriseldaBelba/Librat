import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-books',
  templateUrl: './read-books.component.html',
  styleUrls: ['./read-books.component.css']
})
export class ReadBooksComponent implements OnInit {

  librat: any[]
  localStorage: any[] = ["Titulli 1", "Titulli 2", "asd", "asd","asd","asd"];

  constructor() { }

  ngOnInit(){
    this.librat = this.localStorage;
  }
  
  fshiLibrat(){
    this.librat = [];
  }
 
  kerkoLiber(vlera: any){
    this.librat = this.localStorage.filter(s => s.includes(vlera));
  }
}