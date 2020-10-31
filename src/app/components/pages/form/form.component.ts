import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  profileform: FormGroup;

  constructor(private formbuilder: FormBuilder) { 
    this.profileform = this.formbuilder.group({
      nom: [''],
      age: [''],
      race: [''],
      vivant: ['']
    })
  }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.profileform.value);
  }
}
