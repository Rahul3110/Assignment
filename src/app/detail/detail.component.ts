import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DetailService } from '../detail.service';
import { DetailPostComponent } from '../detail-post/detail-post.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  employee = new Map();

  constructor(private detailService: DetailService) { }

  ngOnInit() {
    this.detailService.getEmployee()
      .subscribe(
        (data) => this.split(data)
      );
  }



  split(emp) {
    for (var i = 0; i < emp.length; i++) {
      this.employee.set(emp[i].name.split(" ")[0], emp[i].id);
    }
  }


  firstComponentFunction(userId) {
    this.detailService.onFirstComponentButtonClick(userId);
  }

}
