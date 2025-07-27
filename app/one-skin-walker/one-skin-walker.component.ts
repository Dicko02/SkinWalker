import { Component, Input, OnInit } from '@angular/core';
import { Model } from '../Model/Model';

@Component({
  selector: 'app-one-skin-walker',
  standalone: true,
  imports: [],
  templateUrl: './one-skin-walker.component.html',
  styleUrl: './one-skin-walker.component.scss'
})
export class OneSkinWalkerComponent implements OnInit{
  @Input() model!: Model;

  ngOnInit(): void {
    
  }
  
}
