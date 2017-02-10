import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app', // to use me, put <my-app> in index.html
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  hideAddress = false;
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      street:'123 Main St',
      city: 'Anytown',
      state: 'VA',
      region:'East'
    }
  };
}
