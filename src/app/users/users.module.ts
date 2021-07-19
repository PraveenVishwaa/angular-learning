import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './users.routing.module';


console.log("aaa");
@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports:[
    UserListComponent
  ]
})
export class UsersModule { }
