import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontVideoListComponent } from './video-list/video-list.component';

const routes: Routes = [

  { path: 'video-list', component: FrontVideoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
