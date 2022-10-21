import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {
  list1: any[] = []
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getList1();
  }

  getList1() {
    this.api.getlist1().subscribe(list => {
      console.log(list)
      this.list1 = list
    })
  }
}
