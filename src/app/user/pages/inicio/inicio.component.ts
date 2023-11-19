import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  imagenes: string[] = [
  'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
  'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg',
];

public card = [{
  titulo:'Pantalon para caballero',
  precio:'$500.00',
  img:'https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
  descripccion:'Pantalon para caballero',
},
{
  titulo:'Pantalon para caballero',
  precio:'$500.00',
  img:'https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
  descripccion:'Pantalon para caballero',
},
{
  titulo:'Pantalon para caballero',
  precio:'$500.00',
  img:'https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
  descripccion:'Pantalon para caballero',
},
{
  titulo:'Pantalon para caballero',
  precio:'$500.00',
  img:'https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg',
  descripccion:'Pantalon para caballero',
},
]

}
