import {$authHost} from './index'
import jwt_decode from 'jwt-decode'

export const fetchBasket = async () => {
  const token = localStorage.getItem('token')
  const decodeToken = jwt_decode(token)
  const basketId = decodeToken.id
  const {data} = await $authHost.get('api/basket_device', {
    params: {basketId}
  })
  return data
}
