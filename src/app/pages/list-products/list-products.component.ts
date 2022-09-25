import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  productos: Producto[] = [];
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductos('')
    this.productoService.nombre.subscribe((data:any)=>{
          this.getProductos(data);

    })
  }
  getProductos(nombre:any) {
    this.productoService.getProducts().subscribe((data) => {
      this.productos = data.filter(data=>data.name.toLowerCase().includes(nombre.toLowerCase()));
    });
  }
  edit(id: number) {
    this.router.navigate(['/add-edit', id]);
  }
  del(id: number) {
    this.productoService.deleteProduct(id).subscribe((data) => {
      console.log(data);
      this.getProductos('');
    });
  }
}
