import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemAddPage } from '../item-add/item-add';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';



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
	itemList = []
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public dataService: DataProvider, public alertCtrl: AlertController) {
    this.dataService.getData().then((todos)=>
      { if(todos){
        this.itemList=JSON.parse(todos); 
      }
      }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

   buttonTapped(item) {
  	// this.navCtrl.push(ItemAddPage, {item:item})
    let modal = this.modalCtrl.create(ItemAddPage);
     modal.onDidDismiss(data => {
     this.itemList.push(data)
     this.dataService.saveData(this.itemList);
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
   let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
           this.dataService.deleteData(item,(todos)=>{
             this.toDoArray
           })
          }
        },
        {
          text: 'Delete it!',
          handler: () => {
           this.dataService.deleteData(item,(todos)=> {
             this.itemList = JSON.parse(todos);
           })
          }
        }
      ]
    });
    confirm.present();
  }
  // this.itemList.splice (this.itemList.indexOf(item),1);
 }

}
