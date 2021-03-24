import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display(userName : any){
    console.log("Welcome " + userName.toString());
    
  }

}
