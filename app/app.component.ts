import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllSkinWalkerComponent } from './all-skin-walker/all-skin-walker.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AllSkinWalkerComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
