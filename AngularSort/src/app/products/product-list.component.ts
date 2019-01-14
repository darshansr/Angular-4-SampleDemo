import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { SortEvent } from '../draggable/sortable-list.directive';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
    pageTitle: string= 'Product list Management';
    imageWidth: number= 50;
    imageMargin: number= 20;
    showImage: boolean = false;
    listFilter: string = 'cart';
    product: IProduct[]= [ {
        'productId': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
        'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
        'productId': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2016',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    },
    {
        'productId': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2016',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    }];

  trappedBoxes = ['Trapped 1', 'Trapped 2'];

  sortableList = [
    'User 1',
    'User 2',
    'User 3',
    'User 4',
    'User 5',
    'User 6',
    'User 7'
  ];

  add(): void {
    this.trappedBoxes.push('New trapped');
  }

  sort(event: SortEvent) {
    const current = this.product[event.currentIndex];
    const swapWith = this.product[event.newIndex];

    this.product[event.newIndex] = current;
    this.product[event.currentIndex] = swapWith;
  }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
    }
}