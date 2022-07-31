import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FiltersComponent } from './pages/shop-list/components/filters/filters.component';
import { ProdutctListComponent } from './pages/shop-list/components/produtct-list/produtct-list.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './pages/shop-list/shop-list.component.service';
import { ProductItemComponent } from './pages/shop-list/components/produtct-list/product-item/product-item.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    ShopListComponent,
    FiltersComponent,
    ProdutctListComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
