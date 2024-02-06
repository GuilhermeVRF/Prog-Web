import { useState } from 'react'
import { Header } from './Header.jsx';
import './App.css'
import {comidas, sobremesas, bebidas} from "./cardapio.js";
import { ItemCardapio } from './ItemCardapio.jsx';

function App() {
  const todosProdutos = [comidas, sobremesas, bebidas];
  const [tipoProduto_selecionado, mudarTipo] = useState(0);

  return <>
          <Header mudarTipo={mudarTipo}/>
          <div id="div-todosProdutos">
            {
              todosProdutos[tipoProduto_selecionado].map(produto => <ItemCardapio nome={produto.nome} preco={produto.preco} descricao={produto.descricao} imagem={produto.imagem} />)
            }
          </div>  
        </>  
}

export default App
