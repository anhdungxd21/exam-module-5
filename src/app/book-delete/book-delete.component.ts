import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  id:number;
  book:any;

  constructor(private bookService:BookService,
    private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getBook();
  }
  getBook(){
    this.id = +this.route.snapshot.paramMap.get("id");
    this.bookService.getBookById(this.id).subscribe( value =>{
      this.book = value;
    });
  }
  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe(()=>{
      console.log("Success");
    },() =>{
      console.log("Failed")
    });
    this.router.navigate(['/']);
  }
}
