import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logindetails';
  display(userName : any){
    console.log("Welcome " + userName.toString());
    
  }
}
