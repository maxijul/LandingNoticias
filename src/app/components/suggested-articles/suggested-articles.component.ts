import { Component, OnInit } from '@angular/core';
import { testArticleThumbnail } from 'src/app/models/data';

@Component({
  selector: 'suggested-articles',
  templateUrl: './suggested-articles.component.html',
  styleUrls: ['./suggested-articles.component.css']
})
export class SuggestedArticlesComponent implements OnInit {
  articlesToDisplay: any;
  constructor() { }

  ngOnInit(): void {
    this.articlesToDisplay = [
      {
        type: 'articulos-recientes',
        articles: [testArticleThumbnail, testArticleThumbnail]
      },
      {
        type: 'articulos-populares',
        articles: [testArticleThumbnail, testArticleThumbnail]
      },
      {
        type: 'articulos-politicos',
        articles: [testArticleThumbnail, testArticleThumbnail]
      },
      {
        type: 'articulos-educacion',
        articles: [testArticleThumbnail, testArticleThumbnail]
      },
    ]
  }

}
