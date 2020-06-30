import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    IconsComponent,
    AdminLayoutComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
