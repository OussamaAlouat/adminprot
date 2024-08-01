import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sitebar',
  templateUrl: './sitebar.component.html',
  styleUrls: ['./sitebar.component.css']
})
export class SitebarComponent implements OnInit{

  menuItems: any[] = []

  constructor(private sideBarService: SidebarService){}


  ngOnInit(): void {
    this.menuItems = this.sideBarService.menu;
    
  }
}
