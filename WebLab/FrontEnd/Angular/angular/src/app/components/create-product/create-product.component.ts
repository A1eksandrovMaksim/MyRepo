import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ModalService } from '../../services/modal.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

export class CreateProductComponent implements OnInit{
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  get title(){
    return this.form.controls.title as FormControl
  }

  constructor(
    private productsService: ProductsService,
    private modalService: ModalService){}

  ngOnInit():void{}

  submit(){
    this.productsService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(()=>this.modalService.close())
  }
}
