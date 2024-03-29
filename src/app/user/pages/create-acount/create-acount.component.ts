import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../interfaces/users.interface';
import { UserService } from '../../services/services.service';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService){}

  formValue:boolean = true;
  ngOnInit(): void {
    // this.userService.getUsers()
    // .subscribe(users => this.newUser = users);
  }
  formValueChangue(){
    if(this.formValue === true)
    this.formValue = false;
    else
    this.formValue = true;
  }

  newUser:User[] = [];

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm:FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    lastname:['', [Validators.required, Validators.minLength(3)]],
    motherLastname:['', [Validators.required, Validators.minLength(3)]],
    gender:['',[Validators.required]],
    birthdate: ['', [Validators.required, this.validateAge.bind(this)]],
    city:['',[Validators.required]],
    address:['', [Validators.required, Validators.minLength(5)]],
    cp:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
    cellphone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    username:['', [Validators.required, Validators.minLength(5)]],
    password:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    password2: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)],],
    question:['',[Validators.required]],
    answer:['', [Validators.required, Validators.minLength(3)]],
  }, {
    validators: [
      this.isFieldOneEqualFieldTwo('password','password2')
    ]
  })
  createNewUser(){

    if(this.myForm.valid){
      console.log(this.myForm.value)
      const formData = this.myForm.value;
      this.userService.createUser(formData).subscribe(data => console.log("Listo papu"))
    }
  }
  validateAge(control: AbstractControl): ValidationErrors | null {
    const birthdate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    return age >= 18 ? null : { underage: true };
  }

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


  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  validBtn():boolean{
    if(
    !this.myForm.controls['name'].invalid &&
    !this.myForm.controls['lastname'].invalid &&
    !this.myForm.controls['motherLastname'].invalid &&
    !this.myForm.controls['gender'].invalid &&
    !this.myForm.controls['birthdate'].invalid &&
    !this.myForm.controls['city'].invalid &&
    !this.myForm.controls['address'].invalid &&
    !this.myForm.controls['cp'].invalid )
    return false

    return true;
  }


}
