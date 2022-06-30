import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({})
  constructor(private formBuilder: FormBuilder, private userService: UserService, private _snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'name': new FormControl(''),
      'userName': new FormControl(''),
      'EmailId': new FormControl(''),
      'CityName': new FormControl(''),
      'PhoneNumber': new FormControl(''),
      'Website': new FormControl('')
    })
  }

  createUser() {
    console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value).subscribe(data=>{
      this.router.navigate(['user/list'])
      this._snackBar.open("User created successfully"),(err: any)=>{
        this._snackBar.open("not unable to create!")
      }
    });
  }
}
