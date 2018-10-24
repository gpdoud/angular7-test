import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SystemService } from '../../services/system.service';

import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResp } from '../../jsonresp.class';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  save(): void {
    console.log('Debug User B4 Change:', this.user);
    this.usersvc.change(this.user)
      .subscribe(resp => {
        console.log('User Change:', resp);
        if (resp.rc === 200) {
          this.router.navigateByUrl('/users/list');
        }
      });
  }

  constructor(
    private usersvc: UserService,
    private router: Router,
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
