import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products = [
  { id: 1, name: 'Adidas Hoodie Black', price: 2500, location: 'SM Baguio', image: 'assets/products/P1.png' },
  { id: 2, name: 'Adidas Hoodie White', price: 2550, location: 'SM San Fernando', image: 'assets/products/P2.png' },
  { id: 3, name: 'Adidas Hoodie Red', price: 2600, location: 'SM Rosales', image: 'assets/products/P3.png' },
  { id: 4, name: 'Adidas Hoodie Blue', price: 2650, location: 'SM Tarlac', image: 'assets/products/P4.png' },
  { id: 5, name: 'Adidas T-Shirt Black', price: 1200, location: 'SM Baguio', image: 'assets/products/P5.png' },
  { id: 6, name: 'Adidas T-Shirt White', price: 1250, location: 'SM San Fernando', image: 'assets/products/P6.png' },
  { id: 7, name: 'Adidas T-Shirt Red', price: 1300, location: 'SM Rosales', image: 'assets/products/P7.png' },
  { id: 8, name: 'Adidas T-Shirt Blue', price: 1350, location: 'SM Tarlac', image: 'assets/products/P30.png' },
  { id: 9, name: 'Adidas Joggers Black', price: 2000, location: 'SM Baguio', image: 'assets/products/P8.png' },
  { id: 10, name: 'Adidas Joggers Gray', price: 2100, location: 'SM San Fernando', image: 'assets/products/P9.png' },
  { id: 11, name: 'Adidas Joggers Navy', price: 2200, location: 'SM Rosales', image: 'assets/products/P10.png' },
  { id: 12, name: 'Adidas Joggers Red', price: 2300, location: 'SM Tarlac', image: 'assets/products/P11.png' },
  { id: 13, name: 'Adidas Jacket Black', price: 3000, location: 'SM Baguio', image: 'assets/products/P12.png' },
  { id: 14, name: 'Adidas Jacket White', price: 3100, location: 'SM San Fernando', image: 'assets/products/P13.png' },
  { id: 15, name: 'Adidas Jacket Blue', price: 3200, location: 'SM Rosales', image: 'assets/products/P14.png' },
  { id: 16, name: 'Adidas Jacket Red', price: 3300, location: 'SM Tarlac', image: 'assets/products/P15.png' },
  { id: 17, name: 'Adidas Shorts Black', price: 1500, location: 'SM Baguio', image: 'assets/products/P16.png' },
  { id: 18, name: 'Adidas Shorts White', price: 1550, location: 'SM San Fernando', image: 'assets/products/P17.png' },
  { id: 19, name: 'Adidas Shorts Blue', price: 1600, location: 'SM Rosales', image: 'assets/products/P18.png' },
  { id: 20, name: 'Adidas Shorts Gray', price: 1650, location: 'SM Tarlac', image: 'assets/products/P19.png' },
  { id: 21, name: 'Adidas Tracksuit Black', price: 4000, location: 'SM Baguio', image: 'assets/products/P20.png' },
  { id: 22, name: 'Adidas Tracksuit White', price: 4100, location: 'SM San Fernando', image: 'assets/products/P21.png' },
  { id: 23, name: 'Adidas Tracksuit Blue', price: 4200, location: 'SM Rosales', image: 'assets/products/P22.png' },
  { id: 24, name: 'Adidas Tracksuit Red', price: 4300, location: 'SM Tarlac', image: 'assets/products/P23.png' },
  { id: 25, name: 'Adidas Polo Shirt Black', price: 1700, location: 'SM Baguio', image: 'assets/products/P24.png' },
  { id: 26, name: 'Adidas Polo Shirt White', price: 1750, location: 'SM San Fernando', image: 'assets/products/P25.png' },
  { id: 27, name: 'Adidas Polo Shirt Blue', price: 1800, location: 'SM Rosales', image: 'assets/products/P26.png' },
  { id: 28, name: 'Adidas Polo Shirt Red', price: 1850, location: 'SM Tarlac', image: 'assets/products/P27.png' },
  { id: 29, name: 'Adidas Windbreaker Black', price: 3500, location: 'SM Baguio', image: 'assets/products/P28.png' },
  { id: 30, name: 'Adidas Windbreaker White', price: 3600, location: 'SM San Fernando', image: 'assets/products/P29.png' }
];
}