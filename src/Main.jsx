import { IndexContextProvider } from "../src/contexts/IndexContext"

import Header from '../src/components/Menu'
import Filtrar from '../src/components/Filtrar'
import Produtos  from '../src/components/Produtos'
import Carrinho from '../src/components/Carrinho'

import './Main.css'
function Main(){
    
    return(
        <>
        <Header/>

        
        <main className="App">
            <IndexContextProvider>
            <Filtrar />
            <Produtos />
            </IndexContextProvider>
        </main>
        </>
    )
}

export default Main;