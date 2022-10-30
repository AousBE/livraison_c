import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Inscrimenu } from '../inscri-menu.';
import { InscrimenuService } from '../service/inscri-menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inscri-menu-list',
  templateUrl: './inscri-menu-list.component.html',
  styleUrls: ['./inscri-menu-list.component.css']
})
export class InscriMenuListComponent implements OnInit {
  inscrimenu:  Observable<Inscrimenu[]>;

  constructor(private inscrimenuService: InscrimenuService) {
  }

  ngOnInit() {
   // this.inscrimenuService.findAll().subscribe(data => {
     // this.inscrimenu = data;});
    this.reloadData();
    }
    reloadData(){
      this.inscrimenu = this.inscrimenuService.findAll();
    }

onUpdateInscriBus(inscrimenu: Inscrimenu ): void {
      this.inscrimenuService.modifymenu(inscrimenu).subscribe(
        (response: Inscrimenu) => {
          console.log(response);
          this.ngOnInit();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    deleteInscrimenu(idinscri: number) {
      this.inscrimenuService.deleteInscrimenu(idinscri)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    
    }

}