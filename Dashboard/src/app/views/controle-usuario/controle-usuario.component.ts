import { Component, OnInit, ViewChild } from '@angular/core';
import { DeleteComponent } from './delete/delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-controle-usuario',
  templateUrl: './controle-usuario.component.html',
  styleUrls: ['./controle-usuario.component.css']
})
export class ControleUsuarioComponent implements OnInit {
  search!: any;
  @ViewChild('searchInput', { static: true }) searchInput?: any;
  constructor(
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }

  cleanSearch() {
    this.searchInput.nativeElement.value = '';
  }
  async warningAlert() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '350px',
      height: '20%',
      disableClose: false
    });
  }
}
