import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  photo: string;
  description: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
      <div class="product-list">
        <div *ngFor="let item of items" 
             class="product-item" 
             (click)="selectItem(item)" 
             [class.selected]="selectedItem === item">
          <img [src]="item.photo" alt="{{ item.name }}" />
          <span class="item-name">{{ item.name }}</span>
        </div>
      </div>

      <div class="product-details" *ngIf="selectedItem">
        <h2>{{ selectedItem.name }}</h2>
        <img [src]="selectedItem.photo" alt="{{ selectedItem.name }}" 
             class="item-photo" style="width: 150px; height: 150px;">
        <p>{{ selectedItem.description }}</p>
      </div>
    </div>
  `,
  styles: [`
    .main-container {
      display: flex;
      gap: 50px;
      padding: 150px;
      border-radius: 10px;
    }

    .product-list {
      flex: 1;
      border: 1px solid #100000;
      padding: 20px;
      border-radius: 10px;
    }

    .product-item {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #100000;
      padding: 20px;
      border-radius: 10px;
    }

    .product-item img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 10px;
    }

    .product-details {
      flex: 1;
      border: 1px solid #100000;
      padding: 40px;
      border-radius: 5px;
    }

    .details-container img {
      max-width: 100%;
      height: auto;
      display: block;
      margin-bottom: 30px;
      border-radius: 30px;
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  items: Item[] = [
    { name: 'Product 1', photo: 'assets/item.png', description: 'Details about Product 1.' },
    { name: 'Product 2', photo: 'assets/item.png', description: 'Details about Product 2.' },
    { name: 'Product 3', photo: 'assets/item.png', description: 'Details about Product 3.' },
    { name: 'Product 4', photo: 'assets/item.png', description: 'Details about Product 4.' }
  ];

  selectedItem: Item | null = null;

  selectItem(item: Item) {
    this.selectedItem = item;
  }
}
