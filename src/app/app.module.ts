import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ClassicComponent } from './editor/classic/classic.component';
import { InlineComponent } from './editor/inline/inline.component';
import { BaloonComponent } from './editor/baloon/baloon.component';
import { DocumentComponent } from './editor/document/document.component';
import { OnlinebuildComponent } from './editor/onlinebuild/onlinebuild.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ClassicComponent,
    InlineComponent,
    BaloonComponent,
    DocumentComponent,
    OnlinebuildComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
