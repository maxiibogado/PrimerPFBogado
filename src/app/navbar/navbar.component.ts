import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showFiller = false;

  miFormulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
      apellido: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
      dni: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{8}$/),Validators.maxLength(8)])],
      fechaRegistro: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }
}


