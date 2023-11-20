import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-view-products-page',
  templateUrl: './view-products-page.component.html',
  styleUrls: ['./view-products-page.component.css']
})
export class ViewProductsPageComponent implements OnInit{

  products!: Product[];

  files = [
    {
      key: '0',
      label: 'Hombre',
      data: 'Documents Folder',
      children: [
          {
              key: '0-0',
              label: 'Patalones',
              data: 'Work Folder',
              children: [
                  { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
                  { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
                  { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
              ]
          },
          {
            key: '0-0',
            label: 'Playera',
            data: 'Work Folder',
            children: [
                { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
                { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
                { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
            ]
        },
        {
          key: '0-0',
          label: 'Calzado',
          data: 'Work Folder',
          children: [
              { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
              { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
              { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
          ]
      },
      {
        key: '0-0',
        label: 'Accesorios',
        data: 'Work Folder',
        children: [
            { key: '0-0-0', label: 'Relogs', data: 'Expenses Document' },
            { key: '0-0-0', label: 'Gorras', data: 'Expenses Document' },
            { key: '0-0-0', label: 'Collares', data: 'Expenses Document' },
        ]
    },
      ]
  },
  {
    key: '0',
    label: 'Mujer',
    data: 'Documents Folder',
    children: [
        {
            key: '0-0',
            label: 'Patalones',
            data: 'Work Folder',
            children: [
                { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
                { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
                { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
            ]
        },
        {
          key: '0-0',
          label: 'Playera',
          data: 'Work Folder',
          children: [
              { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
              { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
              { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
          ]
      },
      {
        key: '0-0',
        label: 'Calzado',
        data: 'Work Folder',
        children: [
            { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
            { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
            { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
        ]
    },
    {
      key: '0-0',
      label: 'Accesorios',
      data: 'Work Folder',
      children: [
          { key: '0-0-0', label: 'Relogs', data: 'Expenses Document' },
          { key: '0-0-0', label: 'Gorras', data: 'Expenses Document' },
          { key: '0-0-0', label: 'Collares', data: 'Expenses Document' },
      ]
  },
    ]
},
{
  key: '0',
  label: 'Niño',
  data: 'Documents Folder',
  children: [
      {
          key: '0-0',
          label: 'Patalones',
          data: 'Work Folder',
          children: [
              { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
              { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
              { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
          ]
      },
      {
        key: '0-0',
        label: 'Playera',
        data: 'Work Folder',
        children: [
            { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
            { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
            { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
        ]
    },
    {
      key: '0-0',
      label: 'Calzado',
      data: 'Work Folder',
      children: [
          { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
          { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
          { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
      ]
  },
  {
    key: '0-0',
    label: 'Accesorios',
    data: 'Work Folder',
    children: [
        { key: '0-0-0', label: 'Relogs', data: 'Expenses Document' },
        { key: '0-0-0', label: 'Gorras', data: 'Expenses Document' },
        { key: '0-0-0', label: 'Collares', data: 'Expenses Document' },
    ]
},
  ]
},
  {
    key: '0',
    label: 'Niña',
    data: 'Documents Folder',
    children: [
        {
            key: '0-0',
            label: 'Patalones',
            data: 'Work Folder',
            children: [
                { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
                { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
                { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
            ]
        },
        {
          key: '0-0',
          label: 'Playera',
          data: 'Work Folder',
          children: [
              { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
              { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
              { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
          ]
      },
      {
        key: '0-0',
        label: 'Calzado',
        data: 'Work Folder',
        children: [
            { key: '0-0-0', label: 'Talla grande', data: 'Expenses Document' },
            { key: '0-0-0', label: 'Talla Mediana', data: 'Expenses Document' },
            { key: '0-0-0', label: 'Talla Chica', data: 'Expenses Document' },
        ]
    },
    {
      key: '0-0',
      label: 'Accesorios',
      data: 'Work Folder',
      children: [
          { key: '0-0-0', label: 'Relogs', data: 'Expenses Document' },
          { key: '0-0-0', label: 'Gorras', data: 'Expenses Document' },
          { key: '0-0-0', label: 'Collares', data: 'Expenses Document' },
      ]
  },
    ]
},
  ]
  first: number = 0;

  rows: number = 10;

  countries: any[] | undefined;

  ngOnInit(): void {

    this.countries = [
      {
          name: 'Mayor precio',
      },
      {
          name: 'Menor precio',
      },]

    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 1
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},
{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},
{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'LOWSTOCK',
  rating: 5
},
  ]
  }

  getSeverity (product: Product) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
onPageChange(event: PageEvent) {
  this.first = event.first;
  this.rows = event.rows;
}
}
