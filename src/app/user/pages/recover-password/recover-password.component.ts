import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent{
  constructor(private fb:FormBuilder){}

  myForm:FormGroup = this.fb.group({
    username:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.email]],
    respuesta:['', [Validators.required, Validators.minLength(3)]]
  })

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }
}
