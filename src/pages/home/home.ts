import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import  { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listPage = ListPage;

  constructor(public navCtrl: NavController) {}

  onClick () {
    console.log('Clicked!');
  }

  onElementClicked () {
    console.log('I was clicked or touched');
  }

  onElementTapped () {
    console.log('I was tapped');
  }

}
