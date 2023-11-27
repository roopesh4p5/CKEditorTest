// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassicComponent } from './editor/classic/classic.component';
import { InlineComponent } from './editor/inline/inline.component';
import { DocumentComponent } from './editor/document/document.component';
import { BaloonComponent } from './editor/baloon/baloon.component';
import { OnlinebuildComponent } from './editor/onlinebuild/onlinebuild.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Home/Classic Editor', component: ClassicComponent },
  { path: 'Home/Inline Editor', component: InlineComponent },
  { path: 'Home/Balloon Editor', component: BaloonComponent },
  { path: 'Home/Document Editor', component: DocumentComponent },
  { path: 'Home/Online Builder', component: OnlinebuildComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
