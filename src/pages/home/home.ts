import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { GroceriesServiceProvider } from "../../providers/groceries-service/groceries-service";
import { InputDialogServiceProvider } from "../../providers/input-dialog-service/input-dialog-service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  title = "Grocery";

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public dataService: GroceriesServiceProvider,
    public inputService: InputDialogServiceProvider
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
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  };
}
