import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookStoreComponent } from './book-store/book-store.component';


const routes: Routes = [
  { path: '', redirectTo: 'bookStore', pathMatch: 'full' },
  { path: 'bookStore', component: BookStoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
