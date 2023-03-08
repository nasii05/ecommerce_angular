import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  product = [
    {
      img: '../../../assets/images/women/girl1.jpg',
      heading: 'Lehenga',
    },
    {
      img: '../../../assets/images/women/women1.webp',
      heading: 'party wears',
    },
    {
      img: '../../../assets/images/women/men2.jpg',
      heading: 'casuals',
    },
    {
      img: '../../../assets/images/women/women2.jpg',
      heading: 'elegant',
    },
    {
      img: '../../../assets/images/women/men1.jpg',
      heading: "men's formals",
    },
  ];
}

