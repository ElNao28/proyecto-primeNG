import { Component} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../../services/services.service';
import { User } from '../../interfaces/users.interface';
import { Router } from '@angular/router';
import { Email, Password } from '../../interfaces/Email.interface';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent{
  constructor(private fb:FormBuilder,private router:Router, private userService:UserService){}

  user!:User;
  validStatus:boolean = false;
  newPassword!:string;
  code!:string;
  validCode:boolean = false;
  idUser!:number;

  formCode:FormGroup = this.fb.group({
    code:['',[Validators.required, Validators.minLength(10)]],
  })

  formNewPassword:FormGroup = this.fb.group({
    password:['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    confirmPassword:['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]]
  },
  {
    validators: [
      this.isFieldOneEqualFieldTwo('password','confirmPassword')
    ]
  })

  myForm:FormGroup = this.fb.group({
    username:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.email]],
    question:['',[Validators.required]],
    respuesta:['', [Validators.required, Validators.minLength(3)]]
  })

  public isFieldOneEqualFieldTwo( field1: string, field2: string ) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }

  }

  isValidFieldCode(field: string ): boolean | null {
    return this.formCode.controls[field].errors
      && this.formCode.controls[field].touched;
  }
  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  isValidFieldPassword( field: string ): boolean | null {
    return this.formNewPassword.controls[field].errors
      && this.formNewPassword.controls[field].touched;
  }

  public getData(){
    if(this.myForm.invalid)
    {
      this.myForm.markAllAsTouched();
      return;
    }

    this.userService.getUser(this.myForm.controls['email'].value).subscribe(data =>{
        this.user = data
        if(!this.user) return console.log("No existe")

        console.log(this.user);

        if(
            this.myForm.controls['username'].value === this.user.username &&
            this.myForm.controls['email'].value === this.user.email
          ){
            this.idUser = data.id;
            const dataSend:Email = {
              to:this.myForm.controls['email'].value,
              username:this.myForm.controls['username'].value
            }
            this.userService.sendCodePassword(dataSend).subscribe( data =>{
              console.log("enviado", data)
              if(data.status === 200){
                console.log("aprro si jalo")
                this.validStatus = true;
                this.code = data.codigo;
              }
            })
          }
      })
  }

  validButtonCode(){
    if(this.formCode.invalid)
      return true
    else
      return false
  }
  validUpdate(){
    if(this.formNewPassword.invalid)
      return true
    else
      return false
  }
  validButton():boolean{
    if(this.myForm.invalid)
      return true
    else
    return false
  }

  validatedCode(){
    if(this.code === this.formCode.controls['code'].value){
      console.log("Es valido")
      this.validCode = true;
    }
    return
  }

  updatePassword(){
    const password:Password = {
      password: this.formNewPassword.controls['password'].value
    }
    this.userService.updatePassword(this.idUser,password).subscribe(data =>{
      this.router.navigate(['/user/Inicio'])
    })
  }
}
