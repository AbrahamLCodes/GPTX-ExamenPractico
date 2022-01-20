import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public faBars = faBars;
  public isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
    
  }

}
