import { Action } from '@ngrx/store'
import { Product } from '../models/product.model'

export enum ProductsActionsTypes {
  /* Get All products */
  GET_ALL_PRODUCTS = '[Products] Get All products',
  GET_ALL_PRODUCTS_SUCCESS = '[Products] Get All products Success',
  GET_ALL_PRODUCTS_ERROR = '[Products] Get All products Error',

  /* Get Selected products */
  GET_SELECTED_PRODUCTS = '[Products] Get Selected products',
  GET_SELECTED_PRODUCTS_SUCCESS = '[Products] Get Selected products Success',
  GET_SELECTED_PRODUCTS_ERROR = '[Products] Get Selected products Error',

  /* Get Selected products */
  SEARCH_PRODUCTS = '[Products] Search products',
  SEARCH_PRODUCTS_SUCCESS = '[Products] Search products Success',
  SEARCH_PRODUCTS_ERROR = '[Products] Search products Error',
}

/* GET ALL Products actions*/

export class GetAllProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS

  constructor(public payload: any) {}
}
export class GetAllProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS

  constructor(public payload: Product[]) {}
}
export class GetAllProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR

  constructor(public payload: string) {}
}

/* GET Selected Products actions */
export class GetSelectedProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS

  constructor(public payload: any) {}
}
export class GetSelectedProductsActionSuccess implements Action {
  type: ProductsActionsTypes =
    ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS

  constructor(public payload: Product[]) {}
}
export class GetSelectedProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR

  constructor(public payload: string) {}
}

/* Search Products actions */
export class SearchProductsAction implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS

  constructor(public payload: string) {}
}
export class SearchProductsActionSuccess implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS

  constructor(public payload: Product[]) {}
}
export class SearchProductsActionError implements Action {
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_ERROR

  constructor(public payload: string) {}
}

export type ProductsActions =
  | GetAllProductsAction
  | GetAllProductsActionSuccess
  | GetAllProductsActionError
  | GetSelectedProductsAction
  | GetSelectedProductsActionSuccess
  | GetSelectedProductsActionError
  | SearchProductsAction
  | SearchProductsActionSuccess
  | SearchProductsActionError
