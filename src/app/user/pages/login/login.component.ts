import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router){}
  ngOnInit(): void {

    this.counter.attems = JSON.parse(localStorage.getItem('attems')!);
    if(this.counter.attems == null){
      this.counter.attems = 0
    }
  }

  public attems:number = 1;
  public validButton: boolean = false;
  public counter = {
    attems: 0,
  };

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  public prueba(){
    this.limitAtems()
    if(this.myForm.invalid)
    {
      this.myForm.markAllAsTouched();
      return;
    }

    if(this.myForm.controls['email'].value.toString() === 'luis@gmai.com'){
      if(this.validButton){
      this.myForm.reset()
      return;
    }
      this.router.navigate(['/user/Inicio']);
      localStorage.clear()
    }

  }

  public limitAtems(){

    if(this.counter.attems < 8){
      localStorage.setItem('attems', JSON.stringify(this.attems++))
      this.counter.attems = JSON.parse(localStorage.getItem('attems')!);
    }
    console.log(this.counter.attems)
    if(this.counter.attems >= 8){
      alert('Se a alcanzado el numero maximo de intentos')
      this.validButton = true;
      return;
    }
  }

}
