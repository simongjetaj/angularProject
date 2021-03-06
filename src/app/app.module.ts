import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/products/product.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { OrderComponent } from './components/orders/order.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductDetailGuard } from './components/products/product-detail/product-detail.guard';

const appRoutes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'orders', component: OrderComponent },
  { path: 'users', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ProductComponent,
    ConvertToSpacesPipe,
    StarComponent,
    OrderComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
