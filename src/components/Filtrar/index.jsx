import React,{ useContext } from "react"
import './index.css'
import { IndexContext } from "../../contexts/IndexContext"

function Filtrar(){

    const { handleSubmit, minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(IndexContext)
   
        return(
            <>
        <div className='filtrar'>
            <h4>Filtrar</h4>

            <form className='forms'>
              <h5>Preço</h5>
              <label htmlFor="preco">De</label><br/>
              <input type="number" id="preco1" name="preco" placeholder='R$ 0,00' value={minPrice} onChange={(e) => setMinPrice(e.target.value)}></input><br/>
              <label htmlFor="name">Até</label><br/>
              <input type="number" id="preco2" name="name" placeholder='R$ 0,00' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}></input>
              <br/>
              <br/>
              <h5>Ordenar</h5>
              {/* <label for="preco">Preço</label><br/> */}
              <select id='opcoesPreco' className='select' name='Menor preço'>
                  <option value={'menor_preco'}> Menor preço</option>
                  <option value={'maior_preco'}> Maior preço</option>
                  <option value={'recentes'}> Mais recente</option>
                  <option value={'antigo'}> Mais antigo</option>
              </select>
              <br/>
              {/* <label for="preco">Data de inclusão</label><br/>
              <select id='opcoesPreco' name='Maior preço'>
                  <option value={'Pao'}> Mais recente</option>
                  <option value={'Pao'}> Pão</option>
                  <option value={'Pao'}> Pão</option>
                </select> */}
              <button type='submit' onClick={handleSubmit}>Ordenar</button>
            </form>
        </div>
        </>
    )
}

export default Filtrar;