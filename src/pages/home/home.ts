import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { GroceriesServiceProvider } from "../../providers/groceries-service/groceries-service";
import { InputDialogServiceProvider } from "../../providers/input-dialog-service/input-dialog-service";
import { SocialSharing } from "@ionic-native/social-sharing";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  title = "Grocery";

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public dataService: GroceriesServiceProvider,
    public inputService: InputDialogServiceProvider,
    public socialSharing: SocialSharing
  ) {}

  loadItems() {
    return this.dataService.getItems();
  }

  addItem = () => {
    console.log("Adding item");
    this.inputService.showPrompt();
  };

  editItem = (item, index) => {
    console.log(`Edit item - ${item.name}, ${index}`);
    this.inputService.showPrompt(item, index);
  };

  removeItem = (item, index) => {
    console.log(`Removing item - ${item.name}, ${index}`);
    const toast = this.toastCtrl.create({
      message: `Removing item - ${item.name} ... `,
      duration: 3000,
    });
    toast.present();
    this.dataService.removeItem(index);
  };

  shareItem = (item, index) => {
    console.log(`Removing item - ${item.name}, ${index}`);
    const toast = this.toastCtrl.create({
      message: `Sharing item - ${item.name} ... `,
      duration: 3000,
    });
    toast.present();

    let message = `Grocery Item - Name: ${item.name} - Quantity: ${item.quantity}`;
    let subject = `Shared via Groceries App`;

    this.socialSharing
      .share(message, subject)
      .then(() => {
        console.log("shared succesfully");
      })
      .catch((err) => {
        console.log(`Error on sharing - ${err}`);
      });
  };
}
