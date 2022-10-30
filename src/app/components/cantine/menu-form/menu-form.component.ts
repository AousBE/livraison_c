import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class menuFormComponent  {

  menu: Menu;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private menuService: MenuServiceService) {
    this.menu = new Menu();
  }
  //ngOnInit(): void {
   // throw new Error('Method not implemented.');
  //}

  onSubmit() {
    this.menuService.save(this.menu).subscribe(result => this.gotoMenuList());
  }

  gotoMenuList() {
    this.router.navigate(['/retrieve-all-Listmenu']);
  }

}
