import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-menu-random',
  templateUrl: './menu-random.component.html',
  styleUrls: ['./menu-random.component.css']
})
export class MenuRandomComponent implements OnInit {
  menu: Menu[];
  constructor(private menuService:MenuServiceService) { 
  }

  ngOnInit() {
    this.menuService.random().subscribe(data => {
      this.menu = data;
    });
  }
}
