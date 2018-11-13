import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SystemService } from '../../services/system.service';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.usersvc.get(id)
      .subscribe(resp => {
        console.log('JsonResp:', resp);
        this.user = resp.data;
      });
  }

}
