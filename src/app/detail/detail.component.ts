import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DetailService } from '../detail.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  user = new Map();

  constructor(private detailService: DetailService,
              private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.SpinnerService.show();
    this.detailService.getEmployee()
      .subscribe(
        (data) => this.split(data)
      );
  }

  split(usr) {
    for (var i = 0; i < usr.length; i++) {
      if(usr[i].name.split(" ").length < 3){
      this.user.set(usr[i].name.split(" ")[0], usr[i].id);
      }else {
        this.user.set(usr[i].name.split(" ")[1], usr[i].id);
      }
      this.SpinnerService.hide();
    }
  }

  userClick(userId) {
    this.SpinnerService.show();
    this.detailService.onUserClick(userId);
  }
}
