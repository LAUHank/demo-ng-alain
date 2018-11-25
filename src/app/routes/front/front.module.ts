import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FrontRoutingModule } from './front-routing.module';
import { FrontVideoListComponent } from './video-list/video-list.component';

const COMPONENTS = [
  FrontVideoListComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    FrontRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class FrontModule { }
