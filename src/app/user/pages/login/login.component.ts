import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/services.service';
import { User } from '../../interfaces/users.interface';
import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  user!:User;
  key:string="6Le_PFspAAAAANjtS-GYPRh8xjiU46szehJjNz3u"
  constructor(private fb:FormBuilder, private router:Router, private userService:UserService, private recaptchaV3Service:ReCaptchaV3Service){}

  ngOnInit(): void {

    this.counter.attems = JSON.parse(localStorage.getItem('attems')!);
    if(this.counter.attems == null){
      this.counter.attems = 0
    }
  }

  public attems:number = 1;
  public validButton: boolean = true;
  public counter = {
    attems: 0,
  };

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required,Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]]
  })

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  public getData(){
    //this.limitAtems()
    if(this.myForm.invalid)
    {
      this.myForm.markAllAsTouched();
      return;
    }

    this.userService.validUser(this.myForm.value).subscribe(res=>{
      console.log(res)
      if(res.status == 200)
        this.router.navigate(['/user/inicio'])
      else
        return console.log(false)
    })
  }

  handleSuccess(response:any): void {
    // Este método se ejecutará cuando reCAPTCHA se resuelva con éxito
    this.validButton = false; // Habilitar el botón una vez que reCAPTCHA se haya resuelto
  }

  // public limitAtems(){

  //   if(this.counter.attems < 8){
  //     localStorage.setItem('attems', JSON.stringify(this.attems++))
  //     this.counter.attems = JSON.parse(localStorage.getItem('attems')!);
  //   }
  //   console.log(this.counter.attems)
  //   if(this.counter.attems >= 8){
  //     alert('Se a alcanzado el numero maximo de intentos')
  //     this.validButton = true;
  //     return;
  //   }
  // }

}
