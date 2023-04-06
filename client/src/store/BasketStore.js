import {makeAutoObservable} from 'mobx'

export default class BasketStore {
  constructor () {
    this._basket = []
    // this._totalCount = 0
    makeAutoObservable(this)
  }

  // setDevices (devices) {
  //   this._devices = devices
  // }
  setBasket (basket) {
    this._basket = basket
  }
  // setTotalCount (count) {
  //   this._totalCount = count
  // }

  get basket () {
    return this._basket
  }

  // get devices () {
  //   return this._devices
  // }
  // get totalCount () {
  //   return this._totalCount
  // }
}