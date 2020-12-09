import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {
  public authUser: any;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => {
    this.authUser = res;
    });
    }

}
