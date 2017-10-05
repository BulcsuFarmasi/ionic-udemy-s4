import { Component } from '@angular/core';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
    public items:string[] = ['Apples', 'Bananas', 'Berries'];
}
