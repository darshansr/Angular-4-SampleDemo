import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { DraggableModule } from './draggable/draggable.module';
import { IPipetoSpace } from './shared/convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    IPipetoSpace
  ],
  imports: [
    BrowserModule,
    DraggableModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
