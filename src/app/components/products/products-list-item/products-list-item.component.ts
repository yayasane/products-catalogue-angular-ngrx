import { Component, Input, OnInit } from '@angular/core'
import { Product } from 'src/app/models/product.model'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'
import {
  DeleteProductAction,
  EditProductAction,
  SelectProductAction,
} from '../../../ngrx/products.actions'

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.css'],
})
export class ProductsListItemComponent implements OnInit {
  @Input() product?: Product
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onSelectProduct(product: Product) {
    this.store.dispatch(new SelectProductAction(product))
  }

  onDelete(product: Product) {
    this.store.dispatch(new DeleteProductAction(product))
  }

  onEdit(product: Product) {
    this.router.navigateByUrl('/editProduct/' + product.id)
  }
}
