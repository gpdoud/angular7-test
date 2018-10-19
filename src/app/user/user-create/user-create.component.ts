import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';
import { JsonResp } from '../../jsonresp.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  save(): void {
    console.log('Debug User B4 Create:', this.user);
    this.usersvc.create(this.user)
      .subscribe(resp => {
        console.log('User Create:', resp);
        if (resp.rc === 200) {
          this.router.navigateByUrl('/users/list');
        }
      });
  }

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
