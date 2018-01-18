import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";



export const Routing:Routes=[
  // {
  // 	path:'',component:HomeComponent
  // },
  {
  	path:'home',component:HomeComponent
  },
  {
  	path:'profile',component:ProfileComponent
  }


];


export const AppRouting:ModuleWithProviders=RouterModule.forRoot(Routing);

//export const RoutComponent=[HomeComponent,ProfileComponent];