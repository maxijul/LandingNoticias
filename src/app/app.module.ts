import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleThumbnailComponent } from './components/article-thumbnail/article-thumbnail.component';
import { CategoryComponent } from './components/category/category.component';
import { SuggestedArticlesComponent } from './components/suggested-articles/suggested-articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { OpenArticleDirective } from './directives/open-article.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    HomeComponent,
    ArticleThumbnailComponent,
    CategoryComponent,
    SuggestedArticlesComponent,
    ArticleDetailsComponent,
    OpenArticleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
