import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path:'list',
    component: UserListComponent
  },
  {
    path:'general',
    loadChildren:()=>import('./general/general.module').then(m=>m.GeneralModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }


