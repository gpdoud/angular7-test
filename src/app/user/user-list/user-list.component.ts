import { Component, OnInit } from '@angular/core';

import { SystemService } from '../../services/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResp } from '../../jsonresp.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private usersvc: UserService, private syssvc: SystemService) { }

  ngOnInit() {
    this.usersvc.list()
      .subscribe(resp => {
        console.log('JsonResp:', resp);
        this.users = resp.data;
      });
  }

}
