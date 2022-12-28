import { Router } from '@angular/router';
import { UserService } from './../../services/users/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';
import { NonNullableFormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent implements OnInit {

  formUser!: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBuilder: NonNullableFormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      username: [''],
      senha: [''],
    });
  }

  OnSubmit() {
    this.userService.login(this.formUser.value.username, this.formUser.value.senha)
      .pipe(first()).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['']);
        });
  }

  showCadastro() {
    this.dialog.open(CreateComponent, {
      width: '80%',
      height: '95%',
      panelClass: 'createUserContainer'
    })
  }

}
