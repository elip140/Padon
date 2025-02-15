import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pagina from './pages/Pagina';
import { ProdutoIndex, ProdutoCreate, ProdutoEdit, ProdutoDelete } from './pages/Produtos';
import { CategoriaIndex, CategoriaCreate, CategoriaEdit, CategoriaDelete } from './pages/Categorias';

/*<Route exact path='/Teste' element={<Teste />}></Route>

<Route exact path='/Produtos/Create' element={<ProdutoCreate />}></Route>*/

export default function Main() {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/Pagina' element={<Pagina />}></Route>

      <Route exact path='/Produtos/' element={<ProdutoIndex />}></Route>
      <Route exact path='/Produtos/Index' element={<ProdutoIndex />}></Route>
      <Route exact path='/Produtos/Create' element={<ProdutoCreate />}></Route>
      <Route exact path='/Produtos/Edit' element={<ProdutoEdit />}></Route>
      <Route exact path='/Produtos/Delete' element={<ProdutoDelete />}></Route>
      
      <Route exact path='/Categorias/' element={<CategoriaIndex />}></Route>
      <Route exact path='/Categorias/Index' element={<CategoriaIndex />}></Route>
      <Route exact path='/Categorias/Create' element={<CategoriaCreate />}></Route>
      <Route exact path='/Categorias/Edit' element={<CategoriaEdit />}></Route>
      <Route exact path='/Categorias/Delete' element={<CategoriaDelete />}></Route>
    </Routes>
  );
}