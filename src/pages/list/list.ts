import { Component } from '@angular/core';

import { reorderArray } from 'ionic-angular'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
    public items:string[] = ['Apples', 'Bananas', 'Berries'];

    reorderItems (indexes) {
      console.log(this.items, indexes);
      this.items = reorderArray(this.items, indexes);
      console.log(this.items);
    }
}
