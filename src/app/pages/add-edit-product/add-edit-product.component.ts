import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
operacion:string='Agregar'
id:number
productoForm=this.fb.nonNullable.group({
  name:['',Validators.required],
  price:[0,Validators.required],
  description:['',Validators.required],
  stock:[0,Validators.required]
})
  constructor(
    private  fb:FormBuilder,
    private productoService:ProductoService,
    private router:Router,
    private aRouter:ActivatedRoute
    ) 
  { 
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }
  getProduct(id:number){
this.productoService.getProduct(id).subscribe(data=>{
  this.productoForm.setValue({
    name: data.name,
    description: data.description,
    price: data.price,
    stock: data.stock
  })
})
  }
addProduct(){
  const product: Producto = {
    name: this.productoForm.value.name!,
    description: this.productoForm.value.description!,
    price: this.productoForm.value.price!,
    stock: this.productoForm.value.stock!
  }
  if(this.id !=0 ){
this.productoService.updateProduct(this.id,product).subscribe(data=>{
  console.log(data)
  this.router.navigate(['/'])
})
  }else {
     this.productoService.saveProduct(product).subscribe(data=>{
    console.log(data)
    this.router.navigate(['/'])
  })
  }
 
}

}
