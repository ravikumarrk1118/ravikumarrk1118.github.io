import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  dob = '';
  amount =0;
  tax = 0;


  car = {
    Color :"Red",
    price : "5L"
  }

  onNameInput(value: string) {
    this.name = value;
}

  onDobInput(value: string){
    this.dob = value;
  }

  onAmountInput(value: string){
    this.amount = parseFloat(value);
  }

  onTotInput(value: string){
    this.tax = parseFloat(value);
  }

}
