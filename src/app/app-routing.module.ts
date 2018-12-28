import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'material-demo', component: MaterialComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
