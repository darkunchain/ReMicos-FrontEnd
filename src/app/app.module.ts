import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewClientService } from './services/new-client.service';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalButtonComponent } from './components/modal-button/modal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [NewClientService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalFormComponent,
    ModalButtonComponent
  ]
})
export class AppModule { }
