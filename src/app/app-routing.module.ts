import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';

const routes: Routes = [
  {
    path:'',component:ListProductsComponent
  },
  {
    path:'add-edit', component:AddEditProductComponent
  },
  {
    path:'add-edit/:id', component:AddEditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
