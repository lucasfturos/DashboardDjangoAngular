import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    public dialogRefCreate: MatDialogRef<CreateComponent>,
    private formBuilder: NonNullableFormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
