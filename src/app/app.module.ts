import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductsNavbarComponent } from './components/products/products-navbar/products-navbar.component'
import { ProductsComponent } from './components/products/products.component'
import { ProductsEffects } from './ngrx/products.effects'
import { productsReducer } from './ngrx/products.reducer'
import { ProductsListComponent } from './components/products/products-list/products-list.component'
import { ProductsListItemComponent } from './components/products/products-list-item/products-list-item.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsNavbarComponent,
    ProductsListComponent,
    ProductsListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ catalogState: productsReducer }),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
