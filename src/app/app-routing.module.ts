import {NgModule} from '@angular/core';
import {Routes, RouterModule, DetachedRouteHandle, ActivatedRouteSnapshot} from '@angular/router';

import {SessionMenuComponent} from "./sessions/session-menu/session-menu.component";

import {RouteReuseStrategy} from '@angular/router';
import {EditSessionComponent} from "./sessions/edit-session/edit-session.component";
import {CreateSessionComponent} from "./sessions/create-session/create-session.component";
import {ListSessionsComponent} from "./sessions/list-sessions/list-sessions.component";

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'equipment',
    pathMatch: 'full',
    component: SessionMenuComponent,
    // data: { shouldReuse: true }
    // loadChildren: () => import("./sessions/create-session/create-session.component").then(m => m.CreateSessionComponent)
  },
  {
    path: 'editSession',
    component: EditSessionComponent,
  },
  {
    path: 'createSession',
    component: CreateSessionComponent,
  },
  {
    path: 'listSession',
    component: ListSessionsComponent,

  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
