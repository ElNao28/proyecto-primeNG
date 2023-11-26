import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent {
  options: any[] | undefined = [
    {
      name: 'Aclaracion o duda',
  },
  {
      name: 'Queja',
  },
  {
    name: 'Sugerencia',
},
  ]
}
