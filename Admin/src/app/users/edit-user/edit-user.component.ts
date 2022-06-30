import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: string = '';
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data['id'];
    })

    if (this.userId !== '') {
      this.userService.viewUser(this.userId)
        .toPromise()
        .then((data) => {
          // to view the details
          this.userDetails = data;
          console.log(this.userDetails)
          // Object.assign(this.userDetails, data);
          // console.log(Object.assign(this.userDetails, data))

          // edit the details using form
          this.editUserForm = this.formBuilder.group({
            'name': new FormControl(this.userDetails.name),
            'userName': new FormControl(this.userDetails.username),
            'Email': new FormControl(this.userDetails.email),
            'City': new FormControl(this.userDetails.city),
            'PhoneNumber': new FormControl(this.userDetails.phone),
            'Website': new FormControl(this.userDetails.website)
          })
          this.dataLoaded = true;
        })
        .catch(err => {
          console.log(err)
        })

    }
  }

  editUser() {
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data=>{
      this._snackBar.open("User updated successfully"),(err: any)=>{
        this._snackBar.open("not Unable to update!")
      }
    });
    this.router.navigate(['user/list'])
    console.log(this.editUserForm.value)
  }
}
