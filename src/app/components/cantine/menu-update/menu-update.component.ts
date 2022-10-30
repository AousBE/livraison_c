import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.css']
})
export class MenuUpdateComponent implements OnInit {
  idListmenu: number;
  menu: Menu;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private menuService: MenuServiceService) {
   
  }
  ngOnInit(){
    this.menu= new Menu();

    this.idListmenu = this.route.snapshot.params['idListmenu'];
    
    this.menuService.retrievelistmenu(this.idListmenu)
     .subscribe(data => {
       console.log(data)
      this.menu = data;
      }, error => console.log(error));
  }
  updatemenu() {
    this.menuService.modifymenu(this.menu)
      .subscribe(data => {
        console.log(data);
        this.menu = new Menu();
        this. gotoMenuList();
      }, error => console.log(error));
  }

      onSubmit() {
        this.updatemenu();
  }

  gotoMenuList() {
    this.router.navigate(['/retrieve-all-Listmenu']);
  }
}
