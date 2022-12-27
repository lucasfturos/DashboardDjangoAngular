import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent {

  constructor(
    private dialog: MatDialog,
  ) { }

  showCadastro() {
    this.dialog.open(CreateComponent, {
      width: '80%',
      height: '95%',
      panelClass: 'createUserContainer'
    })
  }

}
