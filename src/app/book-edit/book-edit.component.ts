import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id:number;
  book:any;

  constructor(private bookService: BookService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getBook();
  }
  getBook(){
    this.id = +this.route.snapshot.paramMap.get("id");
    this.bookService.getBookById(this.id).subscribe( value =>{
      this.book = value;
    });
  }

  onSubmit(form:any){
    this.bookService.updateBook(this.id,form.value).subscribe(()=>{
      console.log("Success");
      this.router.navigate(['/']);
    },()=>{
      console.log("Faild")
    });
  }

}
