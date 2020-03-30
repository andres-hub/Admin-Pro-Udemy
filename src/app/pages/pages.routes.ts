import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';



const pagesRoutes: Routes=[
    {
        path: '',
        component:PagesComponent,
        canActivate:[LoginGuardGuard],
        children:[
            {path: 'dashboard', component: DashboardComponent,data:{titulo: 'Dashboard', meta:'Aqui se pone el meta'}},
            {path:'progress', component: ProgressComponent,  data:{titulo: 'Progress', meta:'Aqui se pone el meta'}},
            {path: 'graficas1', component: Graficas1Component,data :{titulo: 'Gráficas', meta:'Aqui se pone el meta'}},
            {path: 'promesas', component: PromesasComponent, data:{titulo: 'Promesas', meta:'Aqui se pone el meta'}},
            {path: 'rxjs', component: RxjsComponent, data:{titulo: 'Rxjs', meta:'Aqui se pone el meta'}},
            {path: 'account-settings', component: AccountSettingsComponent, data:{titulo: 'Ajustes del Tema', meta:'Aqui se pone el meta'}},
            {path: 'perfil', component: ProfileComponent, data:{titulo:'Perfil de usuario'}},
            {path:'',redirectTo:'/dashboard', pathMatch:'full'}
        ]
    }
];

export const PAGES_RUTES = RouterModule.forChild(pagesRoutes);