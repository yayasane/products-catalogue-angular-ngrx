import { Action } from '@ngrx/store'
import { Product } from '../models/product.model'
import { ProductsActions, ProductsActionsTypes } from './products.actions'

export enum ProductsStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
  NEW = 'NEW',
  EDIT = 'EDIT',
}

export interface ProductsState {
  products: Product[]
  errorMessage: string
  dataState: ProductsStateEnum
}

const initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL,
}

export function productsReducer(
  state: ProductsState = initState,
  action: Action,
): ProductsState {
  switch (action.type) {
    /* Get All products */
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return { ...state, dataState: ProductsStateEnum.LOADING }
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: (<ProductsActions>action).payload,
      }
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
      }

    /* Get Selected products */
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return { ...state, dataState: ProductsStateEnum.LOADING }
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: (<ProductsActions>action).payload,
      }
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
      }
    /* Search products */
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return { ...state, dataState: ProductsStateEnum.LOADING }
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: (<ProductsActions>action).payload,
      }
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
      }

    /* Select product */
    case ProductsActionsTypes.SELECT_PRODUCT:
      return { ...state, dataState: ProductsStateEnum.LOADING }
    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
      let product: Product = (action as ProductsActions).payload
      let productsList = [...state.products]
      const newProductsList = productsList.map((p) =>
        p.id === product.id ? product : p,
      )
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: newProductsList,
      }
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
      }

    /* Delect product */
    case ProductsActionsTypes.DELETE_PRODUCT:
      return { ...state, dataState: ProductsStateEnum.LOADING }
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS: {
      let product: Product = (action as ProductsActions).payload
      let productsList = [...state.products]
      const newProductsList = productsList.filter((p) => p.id !== product.id)
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: newProductsList,
      }
    }
    case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
      }

    /* New product */
    case ProductsActionsTypes.NEW_PRODUCT:
      return { ...state, dataState: ProductsStateEnum.LOADING }
    case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.NEW,
      }

    case ProductsActionsTypes.NEW_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
      }

    /* Save product */
    case ProductsActionsTypes.SAVE_PRODUCT:
      return { ...state, dataState: ProductsStateEnum.LOADING }
    case ProductsActionsTypes.SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: [...state.products, (action as ProductsActions).payload],
      }

    case ProductsActionsTypes.SAVE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
      }
    default:
      return state
  }
}
