import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './components/cantine/menu-list/menu-list.component';
import { menuFormComponent } from './components/cantine/menu-form/menu-form.component';
import { MenuServiceService } from './components/cantine/menu-service.service';
import { InscriMenuFormComponent } from './components/inscri-menu/inscri-menu-form/inscri-menu-form.component';
import { InscriMenuListComponent } from './components/inscri-menu/inscri-menu-list/inscri-menu-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscrimenuService } from './components/inscri-menu/service/inscri-menu.service';
import { MenuUpdateComponent } from './components/cantine/menu-update/menu-update.component';
import { MenuRandomComponent } from './components/cantine/menu-random/menu-random.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    HeaderComponent,
    FooterComponent,
    MenuListComponent,
    menuFormComponent,
    InscriMenuFormComponent,
    InscriMenuListComponent,
    MenuUpdateComponent,
    MenuRandomComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MenuServiceService,
  InscrimenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
