import { Routes } from '@angular/router';
import { AllSkinWalkerComponent } from './all-skin-walker/all-skin-walker.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path: 'SkinWalkers', component: AllSkinWalkerComponent},
    {path: '', component: LandingPageComponent}
];
