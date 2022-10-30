import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { menuFormComponent } from './components/cantine/menu-form/menu-form.component';
import { MenuListComponent } from './components/cantine/menu-list/menu-list.component';
import { EventComponent } from './components/event/event.component';
import { HomeComponent } from './components/home/home.component';
import { InscriMenuFormComponent } from './components/inscri-menu/inscri-menu-form/inscri-menu-form.component';
import { InscriMenuListComponent } from './components/inscri-menu/inscri-menu-list/inscri-menu-list.component';
import { MenuUpdateComponent } from './components/cantine/menu-update/menu-update.component';
import { MenuRandomComponent } from './components/cantine/menu-random/menu-random.component';

const routes: Routes = [
{path:"home", component: HomeComponent},
{path:"event", component: EventComponent},
{path:"menu-list", component: MenuListComponent},
{path:"add-ListMenu", component: menuFormComponent},
{path:"retrieve-all-Listmenu", component: MenuListComponent},
{path:"retrieve-all-inscriCantine", component: InscriMenuListComponent},
{path:"add-inscriCantine", component: InscriMenuFormComponent},
{path:"modify-inscriCantine", component: InscriMenuListComponent},
{path:"modify-ListMenu", component: MenuUpdateComponent},
{path:"getmenu", component: MenuRandomComponent},
{path:"updatemenu", component: MenuUpdateComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
