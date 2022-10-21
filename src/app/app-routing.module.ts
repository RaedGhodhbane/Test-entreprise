import { Detail1Component } from './list1/detail1/detail1.component';
import { List1Component } from './list1/list1.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list1',
    component: List1Component
  },
  {
    path: 'list1/:id',
    component: Detail1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
