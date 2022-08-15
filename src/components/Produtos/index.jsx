import "./styles.css"
import CardCompra from '../Card'
import React,{ useContext } from "react" 
import { IndexContext } from "../../contexts/IndexContext"

function Produtos(){

    const { products, filteredNames, setFilteredNames, handleFilteredItems } = useContext(IndexContext)
    
    return(
        <>
            <div className='secao__produto'>
            <div className="container">
            <input placeholder='Buscar' value={filteredNames} onChange={(e) => setFilteredNames(e.target.value)}></input>
            <button className="btn" onClick={handleFilteredItems}>Pesquisinha</button>
            <h4>Produtos</h4>
            <div className="produtos">
              {products.map((product) => (
                  <CardCompra
                  key={product.nomeProduto}
                  imgProduto={product.imgProduto}
                  nomeProduto={product.nomeProduto}
                  precoProduto={product.precoProduto}
                  dataInclusao={product.dataInclusao}
                  categoria={product.categoria}
                  />
                ))}
            </div>
          </div>
        </div>
        </>
    )
}


export default Produtos;