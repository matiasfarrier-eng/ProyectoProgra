import { createBrowserRouter, Navigate } from 'react-router-dom'
import DashboardPage from '@app/pages/DashboardPage'
import LoginPage from '@features/auth/pages/LoginPage'
import ProductsPage from '@features/products/pages/ProductsPage'
import UsersPage from '@features/users/pages/UsersPage'
import MainLayout from '../layouts/MainLayout'
import { AppRoutes as ROUTE_PATHS } from '@shared/constants/routes'

export const appRouter = createBrowserRouter([
  {
    path: ROUTE_PATHS.dashboard,
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: ROUTE_PATHS.login.slice(1), element: <LoginPage /> },
      { path: ROUTE_PATHS.users.slice(1), element: <UsersPage /> },
      { path: ROUTE_PATHS.products.slice(1), element: <ProductsPage /> },
      { path: '*', element: <Navigate replace to={ROUTE_PATHS.dashboard} /> },
    ],
  },
])
