import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts = [
    {name:'Traning', phone:'086-6170572'}
    ,{name:'Support', phone:'086-5554445'}
    ,{name:'Customer Service', phone:'086-1234567'}

  ]

  constructor(public navCtrl: NavController) {

  }
  showDetail(contact){

    //alert(contact.name)
    this.navCtrl.push('DetailPage',contact)
  }

}
