import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuServiceService } from '../menu-service.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menu: Observable<Menu[]>;
  /*
  constructor(private menuService:MenuServiceService) { 
  }

  ngOnInit() {
    this.menuService.findAll().subscribe(data => {
      this.menu = data;
    });
  }
  bus : Observable<Bus[]>;
*/
constructor(
  private menuservice: MenuServiceService,
  private router: Router
  ) {}
  ngOnInit(){
    this.reloadData();
  }

  reloadData(){
    this.menu = this.menuservice.findAll();
  }

deletemenu(idListMenu: number) {
  this.menuservice.deletemenu(idListMenu)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));

}
}
