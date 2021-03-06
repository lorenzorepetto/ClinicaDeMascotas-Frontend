import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './services/guards/auth.guard';
import { PageNotFoundComponent } from './shared/pageNotFound/page-not-found.component';
import { DetalleComponent } from './home/fichas/detalle.component';


const APP_ROUTES: Routes = [
    
    { path: 'home', component: HomeComponent },    
    { path: 'ficha/:id', component: DetalleComponent },    
    { path: '', 
        component: PagesComponent, 
        canActivate: [ AuthGuard ], 
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: PageNotFoundComponent }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });

