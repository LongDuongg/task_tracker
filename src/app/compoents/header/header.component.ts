import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(public _formService: FormService) {
    
  }

  ngOnInit(): void {
      
  }

  onToggle() {
    this._formService.showForm = !this._formService.showForm
    console.log(this._formService.showForm);
  }
}
