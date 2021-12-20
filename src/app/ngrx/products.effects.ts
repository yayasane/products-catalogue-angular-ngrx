import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { catchError, map, mergeMap, Observable, of } from 'rxjs'
import { ProductService } from '../services/products.service'
import {
  NewProductActionSuccess,
  SaveProductActionError,
  SaveProductActionSuccess,
} from './products.actions'
import {
  ProductsActions,
  SelectProductActionSuccess,
  SelectProductActionError,
  DeleteProductActionSuccess,
  DeleteProductActionError,
} from './products.actions'
import {
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  ProductsActionsTypes,
  SearchProductsActionError,
  SearchProductsActionSuccess,
} from './products.actions'

@Injectable({ providedIn: 'root' })
export class ProductsEffects {
  constructor(
    private productsService: ProductService,
    private effectActions: Actions,
  ) {}

  getAllProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action) => {
        return this.productsService.getAllProducts().pipe(
          map((products) => new GetAllProductsActionSuccess(products)),
          catchError((err) => of(new GetAllProductsActionError(err.message))),
        )
      }),
    ),
  )

  /* Get Selected Products */
  getSelectedProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productsService.getSelectedProducts().pipe(
          map((products) => new GetSelectedProductsActionSuccess(products)),
          catchError((err) =>
            of(new GetSelectedProductsActionError(err.message)),
          ),
        )
      }),
    ),
  )
  /* Search Products */
  searchProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productsService.searchProducts(action.payload).pipe(
          map((products) => new SearchProductsActionSuccess(products)),
          catchError((err) => of(new SearchProductsActionError(err.message))),
        )
      }),
    ),
  )
  /* Search Products */
  selectProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductsActionsTypes.SELECT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.selectProduct(action.payload).pipe(
          map((product) => new SelectProductActionSuccess(product)),
          catchError((err) => of(new SelectProductActionError(err.message))),
        )
      }),
    ),
  )

  /* Delete Products */
  deleteProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductsActionsTypes.DELETE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.deleteProduct(action.payload).pipe(
          map((product) => new DeleteProductActionSuccess(action.payload)),
          catchError((err) => of(new DeleteProductActionError(err.message))),
        )
      }),
    ),
  )

  /* New Product */
  newProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductsActionsTypes.NEW_PRODUCT),
      map((action: ProductsActions) => {
        return new NewProductActionSuccess(undefined)
      }),
    ),
  )

  /* Search Products */
  saveProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductsActionsTypes.SAVE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.saveProduct(action.payload).pipe(
          map((product) => new SaveProductActionSuccess(product)),
          catchError((err) => of(new SaveProductActionError(err.message))),
        )
      }),
    ),
  )
}
