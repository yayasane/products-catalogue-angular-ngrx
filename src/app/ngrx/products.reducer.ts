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
  UPDATED = 'UPDATED',
}

export interface ProductsState {
  products: Product[]
  errorMessage: string
  dataState: ProductsStateEnum
  currentProduct?: Product
  currentAction?: ProductsActions
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
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }

    /* Get Selected products */
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }
    /* Search products */
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }

    /* Select product */
    case ProductsActionsTypes.SELECT_PRODUCT:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
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
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }

    /* Delect product */
    case ProductsActionsTypes.DELETE_PRODUCT:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS: {
      let product: Product = (action as ProductsActions).payload
      let productsList = [...state.products]
      const newProductsList = productsList.filter((p) => p.id !== product.id)
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: newProductsList,
        currentAction: action as ProductsActions,
      }
    }
    case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }

    /* New product */
    case ProductsActionsTypes.NEW_PRODUCT:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.NEW,
        currentAction: action as ProductsActions,
      }

    case ProductsActionsTypes.NEW_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }

    /* Save product */
    case ProductsActionsTypes.SAVE_PRODUCT:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        products: [...state.products, (action as ProductsActions).payload],
        currentAction: action as ProductsActions,
      }

    case ProductsActionsTypes.SAVE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }

    /* Edit product */
    case ProductsActionsTypes.EDIT_PRODUCT:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADED,
        currentProduct: (<ProductsActions>action).payload as Product,
        currentAction: action as ProductsActions,
      }

    case ProductsActionsTypes.EDIT_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }

    /* Update product */
    case ProductsActionsTypes.UPDATE_PRODUCT:
      return {
        ...state,
        dataState: ProductsStateEnum.LOADING,
        currentAction: action as ProductsActions,
      }
    case ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS: {
      let product: Product = (action as ProductsActions).payload
      let productsList = [...state.products]
      const newProductsList = productsList.map((p) =>
        p.id === product.id ? product : p,
      )
      return {
        ...state,
        dataState: ProductsStateEnum.UPDATED,
        products: newProductsList,
        currentAction: action as ProductsActions,
      }
    }
    case ProductsActionsTypes.UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        dataState: ProductsStateEnum.ERROR,
        errorMessage: (<ProductsActions>action).payload,
        currentAction: action as ProductsActions,
      }
    default:
      return state
  }
}
