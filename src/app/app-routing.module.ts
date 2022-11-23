import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'category/:category', component: CategoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'article/:category/:id', component: ArticleDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
