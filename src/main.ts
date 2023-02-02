import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
    <h1>Hello from {{word}}!</h1>
    <input #myinput type="text">
    <button (click) = "inputText(myinput)" >submit</button> <br>
    <input [(ngModel)]= "name"type="text">
    {{name}}
    
  `,
})
export class App {
  word = 'Angular';

  public name = ""

  inputText(value){
    console.log(value)

  }
}





bootstrapApplication(App);
