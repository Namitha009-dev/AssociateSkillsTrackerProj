import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addinghrdetails',
  templateUrl: './addinghrdetails.component.html',
  styleUrls: ['./addinghrdetails.component.css']
})
export class AddinghrdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display(userName : any){
    console.log("Welcome " + userName.toString());
    
  }

}
