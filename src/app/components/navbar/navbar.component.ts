import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  timer: any = "";
  today:string = "" ;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      let date = new Date();
      this.timer = date.toLocaleTimeString();
      this.today = date.toDateString()
    }, 1000);
    
  }

}
