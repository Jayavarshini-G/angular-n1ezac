import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component(
{
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule], 
   templateUrl: './app-component.component.html',  
   styleUrls: ['./app-component.component.css'],               
})
 export class AppComponent {
   myBlog: string = "My First Angular Blog";
   
   product= {
    title: 'Foot Ball',
    price: 700
};
   name:string="varsh";
   additems() {
    console.log('add items');  
 }
 uname = 'Java'; 
      constructor() { } 
      ngOnInit() { }
}







