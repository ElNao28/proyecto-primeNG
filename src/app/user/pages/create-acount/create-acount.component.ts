import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/users.interface';
import { UserService } from '../../services/services.service';

@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService){}

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => this.newUser = users);
  }

  newUser:User[] = [];

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm:FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    lastname:['', [Validators.required, Validators.minLength(3)]],
    motherLastname:['', [Validators.required, Validators.minLength(3)]],
    gender:['',[Validators.required]],
    birthdate:['', [Validators.required]],
    city:['',[Validators.required]],
    address:['', [Validators.required, Validators.minLength(5)]],
    cp:['', [Validators.required, Validators.minLength(5)]],
    email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
    cellphone:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    username:['', [Validators.required, Validators.minLength(5)]],
    password:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    password2:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    question:['',[Validators.required]],
    answer:['', [Validators.required, Validators.minLength(3)]]
  })
  createNewUser(){

    if(this.myForm.valid){
      console.log(this.myForm.value)
      const formData = this.myForm.value;
      this.userService.createUser(formData).subscribe(data => console.log("Listo papu"))
    }
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  prueba():void{
    //if(this.myForm.valid)
    console.log(this.newUser)
  }


}
