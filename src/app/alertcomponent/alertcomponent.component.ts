import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CommonServiceService } from '../common-service.service'

@Component({
  selector: 'app-alertcomponent',
  templateUrl: './alertcomponent.component.html',
  styleUrls: ['./alertcomponent.component.css']
})
export class AlertcomponentComponent implements OnInit {

  @Input() users_a:any;
  data:any;
  newform!: FormGroup;
  constructor(private formbuilder : FormBuilder, private service: CommonServiceService) { 
    this.initnewform();
  }

  initnewform(){
    this.newform = this.formbuilder.group({
      firstname: ['',[Validators.required,Validators.minLength(2)]],
      phone: ['']
    })
  }

  save(){
    console.log(this.newform.value)
  }

  ngOnInit(): void {
    this.service.getapiData().subscribe(data=> {
      return this.data = data
    } , (error) =>{
      console.log(error);
    } );
    // this.data = this.service.getData();
    // console.log(this.data);
  }

  ngAfterViewInit(){
    this.data = this.service.getData();
    console.log(this.data);
  }

  get firstname(){
    return this.newform.get('firstname');
  }
}
