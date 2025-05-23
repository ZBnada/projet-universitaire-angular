import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindding',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-bindding.component.html',
  styleUrl: './data-bindding.component.css'
})
export class DataBinddingComponent {
  firstName: string="Mohamed";
  annee:number= 2025;
  isActive:boolean = true;
  currentDate: Date = new  Date();
  myPlaceHolder: string="Entre Votre nom";
  divClassName: string ="text-bg-primary p-3";

  constructor()
  {
    console.log(this.firstName);
    this.isActive=false;
    console.log(this.isActive);
  }

  showWelcomeMessage(){
    alert("Welcome to our Angular course!");
  }

  onCityChange(){
    console.log("City changed ");
  }

}
