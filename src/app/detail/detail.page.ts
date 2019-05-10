import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import { TipsService} from '../tips.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private router:Router,public connect:TipsService) { }
  GotoHomepage(){
    this.router.navigate(['/home']);
  }
  GotoHomePage(){
    this.router.navigate(['/home']);
  }
  HelloButton(){
    console.log("Hello!");
  }
  ngOnInit() {
  }

}
