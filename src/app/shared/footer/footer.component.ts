import { Component, OnInit } from '@angular/core';
import { faGooglePay, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public faGooglePlay = faGooglePay;
  public faGithub = faGithub;
  public faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
