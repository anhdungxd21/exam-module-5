import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [{
  path: '',
  component: BookComponent
},{
  path:'create',
  component:BookCreateComponent
},{
  path: 'view/:id',
  component: BookDetailComponent
},{
  path: 'edit/:id',
  component: BookEditComponent
},{
  path: 'delete/:id',
  component: BookDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
