import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemAddPage } from '../item-add/item-add';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ModalController } from 'ionic-angular';



/**
 * Generated class for the ItemListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {
	itemList = [{"name": "Learn Ionic","description":"Learn Ionic Slide 12345", "completed":false}, {"name":"FreeCodeCamp","description":"Complete FCC by this week", "completed":false}, {"name":"I Love WOD!!","description":"WOD turn my brain", "completed":false}]
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

   buttonTapped(item) {
  	// this.navCtrl.push(ItemAddPage, {item:item})
    let modal = this.modalCtrl.create(ItemAddPage);
     modal.onDidDismiss(data => {
     this.itemList.push(data);
   });
    modal.present();
  }

  detailTapped(item) {
    this.navCtrl.push(ItemDetailPage, {item:item})
  }

 done(item){
    item.completed=true;
 }

 remove(item){
  this.itemList.splice (this.itemList.indexOf(item),1);
 }

}
