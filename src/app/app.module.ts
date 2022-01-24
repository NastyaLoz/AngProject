import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import {RippleModule} from "primeng/ripple";


import { AppComponent } from './app.component';
import { SiteHeaderComponent } from "./layout/site-header/site-header.component";
import { SiteFooterComponent } from "./layout/site-footer/site-footer.component";
import { SiteLayoutComponent } from "./layout/site-layout/site-layout.component";
import { SiteSidebarComponent } from "./layout/site-sidebar/site-sidebar.component";
import { SessionMenuComponent } from './sessions/session-menu/session-menu.component';
import { CreateSessionComponent } from './sessions/create-session/create-session.component';
import { ListSessionsComponent } from './sessions/list-sessions/list-sessions.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {environment} from "../environments/environment.prod";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

export const ApiUrl = new InjectionToken('ApiUrl');


@NgModule({
  declarations: [
    AppComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    SiteSidebarComponent,
    SessionMenuComponent,
    CreateSessionComponent,
    ListSessionsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSortModule,
    MatIconModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: ApiUrl, useValue: environment.apiUrl},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
