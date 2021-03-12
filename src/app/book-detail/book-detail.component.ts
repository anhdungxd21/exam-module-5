import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id:number;
  book:any;
  constructor(private bookService: BookService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBook();
  }
  getBook(){
    this.id = +this.route.snapshot.paramMap.get("id");
    this.bookService.getBookById(this.id).subscribe( value =>{
      this.book = value;
    });
  }
}
