import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})



export class CreateAcountComponent {
  constructor(private fb:FormBuilder){}

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm:FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    lastnameFather:['', [Validators.required, Validators.minLength(3)]],
    lastnameMother:['', [Validators.required, Validators.minLength(3)]],
    date:['', [Validators.required]],
    address:['', [Validators.required, Validators.minLength(5)]],
    cp:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
    phone:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    username:['', [Validators.required, Validators.minLength(5)]],
    password:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    password2:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    respuesta:['', [Validators.required, Validators.minLength(3)]]
  })

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  prueba():void{
    if(this.myForm.valid)
    console.log("Hola Mundo")
  }
}
