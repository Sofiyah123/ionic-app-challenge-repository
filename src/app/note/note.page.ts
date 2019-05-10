import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  constructor(private alertctrl:AlertController,private navcontrl:NavController) { }

  ngOnInit() {
  }

}
