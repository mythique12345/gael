import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
//import { ProductsComponent } from './pages/admin/products/products.component';
import { Product1Component } from './pages/admin/product1/product1.component';
import{HttpClientModule } from '@angular/common/http';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    
    {
        path: '',
        component: LayoutComponent,
        children: [

            {
                path: 'product1',
                component: Product1Component
            }


        ]
    }



];
