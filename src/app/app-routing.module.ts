import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";
import {ListTodosComponent} from "./list-todos/list-todos.component";
import {LogoutComponent} from "./logout/logout.component";
import {RouteGuardService} from "./service/route-guard.service";
import { DashboardComponent } from './dashboard/dashboard.component';

// Welcome to Route
const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]}, //canActivate, RouteGuardService
    {path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
    {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
    {path: 'dashboard', component:DashboardComponent, canActivate: [RouteGuardService]},
    {path: '**', component: ErrorComponent}
];

@NgModule({ //<!-- NgModule means Angular Module -->
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
