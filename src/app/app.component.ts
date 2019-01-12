import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from  '@angular/forms';

//import * as $ from "jquery";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formProperties: FormGroup;

  ngOnInit(){
    this.formProperties= new FormGroup({
      description: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
      required: new FormControl(false,[]),
      default: new FormControl('',[])
    });
  }
  title = 'Jesus Noh';
  typeControl = ['text', 'checkbox'];

  listProperties = new Array();

  properties = {
    description: '',
    name: '',
    type: '',
    required: false,
    default: ''
  };

  contextMenu() {
    $("#MenuProperties").modal("show");
  }

  save(form:FormGroup){
    if(form.valid){
      this.listProperties.push(form.value)
      alert("Formulario Valido");
    }
  }
}
