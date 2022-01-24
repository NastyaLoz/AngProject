import {NgModule} from '@angular/core';
import {Routes, RouterModule, DetachedRouteHandle, ActivatedRouteSnapshot} from '@angular/router';

import {SessionMenuComponent} from "./sessions/session-menu/session-menu.component";

import {RouteReuseStrategy} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'equipment',
    pathMatch: 'full',
    component: SessionMenuComponent,
    // data: { shouldReuse: true }
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
