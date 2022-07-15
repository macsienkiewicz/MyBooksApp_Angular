import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from "./author/author.component";
import { AddAuthorComponent } from "./add-author/add-author.component";

const routes: Routes = [
  { path: '', component: AuthorComponent },
  { path: 'add-author', component: AddAuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
