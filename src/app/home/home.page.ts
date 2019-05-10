import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import{TipsService} from '../tips.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

constructor(private router: Router, public connect: TipsService){}

ngOnInit(){
  this.connect.getLocalData().subscribe(data =>{
    
      console.log("Local Data");
      console.log(data);

    });

    this.connect.getRemoteData().subscribe(data =>{
    
      console.log("Remote Data");
      console.log(data);

    });
 
}
GotoDetailPage(){
this.router.navigate(['/detail']);
}
GotoDetails(){
  this.router.navigate(['/detail']);
}
}
