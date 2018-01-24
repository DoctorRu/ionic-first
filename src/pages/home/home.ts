import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from "../users/users";
import { ShopPage } from "../shop/shop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usersPage = UsersPage;
  buyPage = ShopPage;

  constructor(private navCtrl: NavController) {

  }
  //
  // onGoToUsers() {
  //   this.navCtrl.push(this.usersPage)
  //     .then((msg) => console.log('Access granted: ') + msg)
  //     .catch((error) => console.log('Access denied, Argument was ' + error));
  // }
  //



  onGoToUsers() {
    this.navCtrl.push(this.usersPage)
      .then((msg) => msg ? console.log('Access granted: ' + msg)
                                  : console.log('Access granted: ' + msg))
  }
  // onGoToShop() {
  //   this.navCtrl.push(ShopPage);
  // }
}
