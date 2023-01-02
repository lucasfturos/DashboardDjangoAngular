import { Router } from '@angular/router';
import { UserService } from './../../services/users/user.service';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent implements OnInit {

  formUser = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  OnSubmit() {
    this.userService.login(this.formUser.value.username!, this.formUser.value.password!)
      .pipe(first()).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['']);
        });
  }

}
