import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
    console.log("bookComponent");
  }
  getAll(){
    this.bookService.getAll().subscribe(value => {
      this.books = value;
      console.log(this.books);
    })
  }
}
