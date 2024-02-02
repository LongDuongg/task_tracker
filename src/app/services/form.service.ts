import { Injectable, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
@Component({
  standalone: true,
  imports: [
  ],
  template: ""
})
export class FormService {
  form!: FormGroup;
  editMode: boolean = false;
  showForm: boolean = false;
  currentTaskID!: any;

  constructor(private _formBuilder: FormBuilder) {

  }

  onCreateForm() {
    this.form = this._formBuilder.group({
      text: [null , [Validators.required]],
      day: [null, [Validators.required]],
      reminder: [false]
    });
  }

}
