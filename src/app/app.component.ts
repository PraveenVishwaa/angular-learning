import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { CommonServiceService } from './common-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';

  constructor(private service:CommonServiceService,private vcr:ViewContainerRef,private cfr:ComponentFactoryResolver){
    this.service.getapiData().subscribe(data=>{
      console.log(data);
    });
  }
  parentfunction(data:any){
    console.log(data);
  }

  alert_func(){
    // console.log(data);
    alert();
  }

  async dynamic_component()
  {
    this.vcr.clear();
    const { UserListComponent } = await import('./users/user-list/user-list.component')
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    );
  }
}
