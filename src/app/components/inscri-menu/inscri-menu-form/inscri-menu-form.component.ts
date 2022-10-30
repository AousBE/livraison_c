import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscrimenu } from '../inscri-menu.';
import { InscrimenuService } from '../service/inscri-menu.service';

@Component({
  selector: 'app-inscri-menu-form',
  templateUrl: './inscri-menu-form.component.html',
  styleUrls: ['./inscri-menu-form.component.css']
})
export class InscriMenuFormComponent{
  inscrimenu: Inscrimenu;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private inscrimenuService: InscrimenuService) {
    this.inscrimenu = new Inscrimenu();
  }
  //ngOnInit(): void {
   // throw new Error('Method not implemented.');
  //}

  onSubmit() {
    this.inscrimenuService.save(this.inscrimenu).subscribe(result => this.gotoInscrimenuList());
  }

  gotoInscrimenuList() {
    this.router.navigate(['/retrieve-all-inscriCantine']);
  }
}