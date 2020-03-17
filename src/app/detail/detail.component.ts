import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DetailService } from '../detail.service';
import { DetailPostComponent } from '../detail-post/detail-post.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public employees = [];
  @Output() public allid = new EventEmitter();

   public dc = new DetailPostComponent(this.detailService);

  constructor(private detailService: DetailService ) {}

  ngOnInit() {
    this.detailService.getEmployee()
        .subscribe(data => this.employees = data);
  }

  getPost(userId) {
    this.allid.emit(userId);
    console.log(userId);
    // this.dc.myPost(userId);
  }

}
