import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories = [
    {
      "image":"../../../assets/images/womens.webp",
      "title":"Women"
    },
    {
      "image":"../../../assets/images/kid.jpg",
      "title":"Kids"
    },
    {
      "image":"../../../assets/images/men.jpeg",
      "title":"Men"
    }
  ]

}
