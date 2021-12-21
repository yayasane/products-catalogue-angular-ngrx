import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import {
  EditProductAction,
  UpdateProductAction,
} from 'src/app/ngrx/products.actions'
import {
  ProductsState,
  ProductsStateEnum,
} from '../../../ngrx/products.reducer'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productID: number
  state?: ProductsState
  productFormGroup?: FormGroup
  readonly ProductsStateEnum = ProductsStateEnum
  submitted: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.productID = activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productID))
    this.store.subscribe((state) => {
      this.state = state.catalogState
      if (this?.state?.dataState === ProductsStateEnum.LOADED) {
        console.log('rang')
        if (this.state.currentProduct) {
          console.log('Ininini')
          this.productFormGroup = this.fb.group({
            name: [this.state.currentProduct.name, Validators.required],
            price: [this.state.currentProduct.price, Validators.required],
            quantity: [this.state.currentProduct.quantity, Validators.required],
            selected: [this.state.currentProduct.selected, Validators.required],
            available: [
              this.state.currentProduct.available,
              Validators.required,
            ],
          })
        }
      }
    })
  }

  onUpdateProduct() {
    this.submitted = true
    if (this.productFormGroup?.invalid) return
    this.store.dispatch(
      new UpdateProductAction({
        ...this.productFormGroup?.value,
        id: this.productID,
      }),
    )
  }

  okProductUpdated() {
    this.router.navigateByUrl('/products')
  }
}
