import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './features/completed/completed.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { TasksComponent } from './features/tasks/tasks.component';
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomepageComponent},
  {path:'tasks',component:TasksComponent},
  {path:'completed',component:CompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  


}
