import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResumeComponent} from "./resume/resume.component";
import {WoodComponent} from "./wood/wood.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "home", component: HomeComponent},
  { path: "resume", component: ResumeComponent},
  { path: "woodwork", component: WoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
