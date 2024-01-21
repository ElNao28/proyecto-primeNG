import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/services.service';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  user!:User;

  constructor(private fb:FormBuilder, private router:Router, private userService:UserService){}

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
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]]
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

    this.userService.getUser(this.myForm.controls['email'].value).subscribe(data =>{
        this.user = data
        if(!this.user) return console.log("No existe")
        console.log(this.user)

        if(this.user.password === this.myForm.controls['password'].value){
          this.router.navigate(['/user/Inicio']);
          localStorage.clear()
        }
        else{
          return console.log('Contraseña Incorrecta')
        }

      })





    // if(this.myForm.controls['email'].value.toString() === 'luis@gmai.com'){
    //   if(this.validButton){
    //   this.myForm.reset()
    //   return;
    // }
    //   this.router.navigate(['/user/Inicio']);
    //   localStorage.clear()
    // }

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
