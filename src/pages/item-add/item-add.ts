import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';



/**
 * Generated class for the ItemAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-add',
  templateUrl: 'item-add.html',
})
export class ItemAddPage {

  name;
  description;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view:ViewController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemAddPage');
  }

  closeTapped() {
  	this.view.dismiss ();
  }

  saveItem(){
  	let newItem={"name": this.name, "description": this.description, completed: false}
  	this.view.dismiss(newItem);
  }

}
