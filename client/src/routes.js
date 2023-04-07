
import {
  ADMIN_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE
} from './utils/consts'
import AdminPage from './pages/AdminPage'
import AuthPage from './pages/AuthPage'
import DevicePage from './pages/DevicePage'
import ShopPage from './pages/ShopPage'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage
  }
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: ShopPage
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage
  },
  {
    path: REGISTRATION_ROUTE,
    Component: AuthPage
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
]
