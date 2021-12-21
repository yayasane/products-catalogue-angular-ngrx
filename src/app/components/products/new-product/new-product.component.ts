import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import {
  NewProductAction,
  SaveProductAction,
} from '../../../ngrx/products.actions'
import {
  ProductsState,
  ProductsStateEnum,
} from '../../../ngrx/products.reducer'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  productFormGroup?: FormGroup
  state?: ProductsState
  readonly ProductsStateEnum = ProductsStateEnum
  submitted: boolean = false

  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction(undefined))
    this.store.subscribe((state) => {
      this.state = state.catalogState
      if (this.state?.dataState === ProductsStateEnum.NEW)
        this.productFormGroup = this.fb.group({
          name: ['', Validators.required],
          price: [0, Validators.required],
          quantity: [0, Validators.required],
          selected: [true, Validators.required],
          available: [true, Validators.required],
        })
    })
  }
  onSaveProduct() {
    this.submitted = true
    if (this.productFormGroup?.invalid) return
    this.store.dispatch(new SaveProductAction(this.productFormGroup?.value))
  }
  newProduct() {
    this.submitted = false
    this.store.dispatch(new NewProductAction(undefined))
  }
}
