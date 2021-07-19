import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertcomponentComponent } from './alertcomponent/alertcomponent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestRouteGuard } from './test-route.guard'

const routes: Routes = [
  {
    path:'alert',
    component: AlertcomponentComponent,
    canActivate : [TestRouteGuard]
  },
  {
    path:'user',
    loadChildren:()=>import('./users/users.module').then(mod=>mod.UsersModule)
  },
  {
    path:'role',
    loadChildren:()=>import('./roles/roles.module').then(mod=>mod.RolesModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
