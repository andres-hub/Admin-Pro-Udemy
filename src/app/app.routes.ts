
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},    
    {path:'**', component: NopagefoundComponent }
];

export const APP_ROUTER = RouterModule.forRoot(appRoutes, {useHash:true} )