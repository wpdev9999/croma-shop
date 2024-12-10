import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { authGuard } from './guards/auth.guard';
import { noauthGuard } from './guards/noauth.guard';
export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        canActivate:[noauthGuard],
        component:LoginComponent
    },
    {
        path:'admin',
        pathMatch:'full',
        canActivate:[authGuard],
        component:LayoutComponent,
        children:[
            {
                path:'products',
                component:ProductsComponent
            },
        ],
    },
    
];
