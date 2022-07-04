import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  username :string = "Priya";

  name1 = "Chammu";

  btnEnabled :boolean = true;
  users1 = null;

  users = [
    {
      name:'Priyanka',
      email:'abc@gmail.com',
      phonenumber:'1234567282',
      status: 'Active'
    },
    {
      name:'Shalini',
      email:'shallu@gmail.com',
      phonenumber:'1238567890', 
      status: 'InActive'

    },
    {
      name:'Amit',
      email:'amit@gmail.com',
      phonenumber:'1231757890' , 
    }
  ]

  imagesrc = "https://www.thephotoargus.com/wp-content/uploads/2020/02/rosepic12.jpg";

  age : number = 25;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.btnEnabled = false;
    },2000)
    
  }
  changeName(){
    this.username = "Priyanka"
  }

}
