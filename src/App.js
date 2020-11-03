import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { UserList } from './components/users';
import { ProductCreate, ProductEdit, ProductList } from './components/products';
import { CategoryCreate, CategoryEdit, CategoryList } from './components/category';

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource options={{ label: "Registered User's" }} name="admin/users" list={UserList} />
      <Resource options={{ label: "Products" }} name="products" list={ProductList} create={ProductCreate} edit={ProductEdit}/>
      <Resource options={{ label: "Category" }} name="category" list={CategoryList} create={CategoryCreate} edit={CategoryEdit}/>
    </Admin>
  );
}

export default App;
