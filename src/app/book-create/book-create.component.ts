import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(private bookService:BookService,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this.bookService.addBook(form.value).subscribe(()=>{
      console.log("Success"),() =>{
        console.log("Failed")
      }
    });
    console.log(form.value);
    this.route.navigate(['/']);
  }
}
