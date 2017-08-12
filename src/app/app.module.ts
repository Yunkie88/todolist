import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ItemListPage } from '../pages/item-list/item-list';
import { ItemAddPage } from '../pages/item-add/item-add';
import { ItemDetailPage } from '../pages/item-detail/item-detail';


@NgModule({
  declarations: [
    MyApp,
    ItemListPage,
    ItemAddPage,
    ItemDetailPage,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemListPage,
    ItemAddPage,
    ItemDetailPage,
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
