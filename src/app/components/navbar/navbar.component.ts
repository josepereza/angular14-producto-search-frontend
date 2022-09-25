import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = new FormControl('');
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    
    this.name.valueChanges.subscribe(data=>{
      this.productoService.nombre.next(data)
      console.log(data)
    })
  }

}
