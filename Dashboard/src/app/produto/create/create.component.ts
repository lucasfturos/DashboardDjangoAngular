import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  getParamId: any;

  constructor(
    private activeRouter: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getParamId = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.getParamId)
  }

}
