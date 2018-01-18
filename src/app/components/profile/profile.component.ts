import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../auth-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthServiceService) { }

  ngOnInit() {
  }

}
