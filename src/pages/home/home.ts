import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";

  items = [
    {
      name: 'Milk',
      quantity: 1
    },
    {
      name: 'Cheerioes',
      quantity: 4
    },
    {
      name: 'Chicken Breast',
      quantity:5 
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem = (item, index) => {
    console.log(`Removing item - ${item}, ${index}`, )
    const toast = this.toastCtrl.create({
      message: `Removing item - ${item.name} ... `,
      duration: 3000
    })
  
    toast.present();

    this.items.splice(index, 1)
  }
  
  addItem = () => {
    console.log("Adding item")
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Grocery Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.items.push(data)
          }
        }
      ]
    });
    alert.present();
  }

}

