import { Component, OnInit } from '@angular/core';
import { testArticleThumbnail } from 'src/app/models/data';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articlesToDisplay: any;


  constructor() { }

  ngOnInit(): void {
    this.articlesToDisplay = [
      {
        type: 'mas-visto',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'politica-argentina',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'politica-internacional',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'educacion',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'elecciones',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'argenllywood',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'tecnologia',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'policiales',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
      {
        type: 'clima',
        articles: [
          testArticleThumbnail,
          testArticleThumbnail,
        ],
      },
    ]
  }

}
