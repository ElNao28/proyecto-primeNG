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
  newPassword!:string;
  code!:string;
  idUser!:number;
  validStatus:boolean = false;
  validCode:boolean = false;
  validQuestion:boolean = true;

  //Formulario donde se ingresa el codigo enviado por correo
  formCode:FormGroup = this.fb.group({
    code:['',[Validators.required, Validators.minLength(10)]],
  })
  //Formulario donde se ingresa la nueva contraseña y su respectiva repeticion
  formNewPassword:FormGroup = this.fb.group({
    password:['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    confirmPassword:['',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]]
  },
  {
    validators: [
      this.isFieldOneEqualFieldTwo('password','confirmPassword')
    ]
  })
  //Formulario donde se ingresa el correo electronico
  formEmail:FormGroup = this.fb.group({
    email:['', [Validators.required, Validators.email]],
  })

  formQuestion:FormGroup = this.fb.group({
    question:['',[Validators.required]],
    respuesta:['', [Validators.required, Validators.minLength(3)]]
  })

  //Funcion para validar que las contraseñas ingresadas en el formulario sean iguales
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
  //Funcion para validar que los datos introducidos en los inputs de el Formcodigo sean correctos
  isValidFieldCode(field: string ): boolean | null {
    return this.formCode.controls[field].errors
      && this.formCode.controls[field].touched;
  }
  //Funcion para validar que los datos introducidos en los inputs de el Formemail sean correctos
  isValidField( field: string ): boolean | null {
    return this.formEmail.controls[field].errors
      && this.formEmail.controls[field].touched;
  }
  //Funcion para validar que los datos introducidos en los inputs de el Formcontraseña sean correctos
  isValidFieldPassword( field: string ): boolean | null {
    return this.formNewPassword.controls[field].errors
      && this.formNewPassword.controls[field].touched;
  }
  //Funcion para validar que los datos introducidos en los inputs de el FormQuestion sean correctos
  isValidFieldQuestion( field: string ): boolean | null {
    return this.formQuestion.controls[field].errors
      && this.formQuestion.controls[field].touched;
  }
  //funcion que manda a llamar al servicio para hacer la peticion al API y validar que el correo introducido sea correcto
  public getData(){
    if(this.formEmail.invalid)
    {
      this.formEmail.markAllAsTouched();
      return;
    }

    this.userService.getUser(this.formEmail.controls['email'].value).subscribe(data =>{
        this.user = data
        if(!this.user) return console.log("No existe")

        console.log(this.user);

        if(
            this.formEmail.controls['email'].value === this.user.email
          ){
            this.idUser = data.id;
            const dataSend:Email = {
              to:this.formEmail.controls['email'].value,
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
    if(this.formEmail.invalid)
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
