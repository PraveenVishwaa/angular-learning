import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() app_title:any;
  @Output() parentfunction:EventEmitter<any> = new EventEmitter;
  @Output() test:EventEmitter<any> = new EventEmitter;
  contactform!: FormGroup;
  constructor(private formbuilder: FormBuilder) { 
    // this.createContactForm();
   }

  data = [{
     "name":"howdy",
     "age":20
   }];

  ngOnInit(): void {
    this.parentfunction.emit(this.data);
    this.test.emit();
  }
  currentVal = 20

  onclick(){
    this.currentVal++
  }
  userdata = [
    {
      "name":"Rahe",
      "age":21
    },
    {
      "name":"Raghu",
      "age":24
    }
  ]

  saveform(myform:NgForm){
    console.log(myform.value);
  }

  // createContactForm(){
  //   this.contactform = this.formbuilder.group({
  //     fullName: [''],  
  //     email: [''],
  //     message: ['']
  //   });
  // }

  // onSubmit() {
  //   console.log('Your form data : ', this.contactform.value );
  // }
}
