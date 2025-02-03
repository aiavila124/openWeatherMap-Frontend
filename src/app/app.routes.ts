import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'login', 
        component: LoginComponent
    },
    {
        path: 'main-page',
        component: MainPageComponent
    },
    // {path:'data-analysis/:id', component: AnalysisViewComponent},
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }

];
