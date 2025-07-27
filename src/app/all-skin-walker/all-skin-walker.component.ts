import { Component, OnInit } from '@angular/core';
import { Model } from '../Model/Model';
import { OneSkinWalkerComponent } from '../one-skin-walker/one-skin-walker.component';
import { Service } from '../Service/Service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-all-skin-walker',
  standalone: true,
  imports: [
    OneSkinWalkerComponent,
    HeaderComponent,
    
  ],
  providers: [
    Service
  ],
  templateUrl: './all-skin-walker.component.html',
  styleUrl: './all-skin-walker.component.scss'
})
export class AllSkinWalkerComponent implements OnInit{

  constructor(private Service: Service){}

  models!: Model[];

  ngOnInit(): void{
    this.models = this.Service.getService();
  }
}
