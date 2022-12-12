import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { AutomobileListComponent } from './automobile-list/automobile-list.component';
import { AutomobileDetailComponent } from './automobile-detail/automobile-detail.component';
import { AutomobileCreateComponent } from './automobile-create/automobile-create.component';
import { AutomobileDeleteComponent } from './automobile-delete/automobile-delete.component';
import { AutomobileEditComponent } from './automobile-edit/automobile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    AutomobileListComponent,
    AutomobileDetailComponent,
    AutomobileCreateComponent,
    AutomobileDeleteComponent,
    AutomobileEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
