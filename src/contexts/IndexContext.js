import { createContext, useState } from "react"

export const IndexContext = createContext()

export function IndexContextProvider({ children }) {

    const pro = [{
        imgProduto: "https://img.itdg.com.br/tdg/images/blog/uploads/2018/02/shutterstock_1115705399.jpg",
        nomeProduto: "Maçã",
        precoProduto: 20.00,
        dataInclusao: "10/02/2022",
        categoria: "Fruta"
    },
    {
        imgProduto: "https://www.pensenatural.com.br/wp-content/uploads/2018/09/pera-1.jpg",
        nomeProduto: "Pera",
        precoProduto: 10.00,
        dataInclusao: "20/06/2023",
        categoria: "Fruta"
    },
    {
        imgProduto: "https://upload.wikimedia.org/wikipedia/commons/a/af/Bananas_%28Alabama_Extension%29.jpg",
        nomeProduto: "Banana",
        precoProduto: 15.00,
        dataInclusao: "03/10/2021",
        categoria: "Fruta"
    }]

    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [products, setProducts] = useState(pro)
    const [productsAddedToCard, setProductsAddedToCard] = useState([])
    const [filteredNames, setFilteredNames] = useState('')
    // console.log(filteredNames)

    function handleFilteredItems() {
        const newProducts = []
        const namesFiltered = pro
            .filter((proItem) => {
                if (proItem.nomeProduto.toLowerCase().includes(filteredNames.toLowerCase())) newProducts.push(proItem)
            })
        setProducts(newProducts)
    }


    function obterQuizzPersistino(){
        let dados = localStorage.getItem("Fruta")
        if(dados !== null){
            const dadosDesentralizados = JSON.parse(dados)
            return dadosDesentralizados
        }
        else{
            return []
        }
    }


function handleAddItem(e){
        const item = e.target.parentNode
        const cardName = item.querySelector('.card-title').innerHTML
        const cardPrice = item.querySelector('.cardPrice').innerHTML
        const cardData = item.querySelector('.cardData').innerHTML
        const cardCategory = item.querySelector('.cardCategory').innerHTML
        const dadosLocalStorage =  obterQuizzPersistino()
        dadosLocalStorage.push({
            productName: cardName,
            productPrice: cardPrice,
            productData: cardData,
            productCategory: cardCategory
        })

    //      enviar para o localStorage o dados salvo do dadosLocalStorage
    const storageItem = localStorage.getItem("Fruta")
    const storageArray = JSON.parse(storageItem)
    
    if(dadosLocalStorage !== null){
        for(let i in storageArray){
            for(let a in dadosLocalStorage){
                console.log(storageArray[i].productName == dadosLocalStorage[a].productName)
                if(storageArray[i] == dadosLocalStorage[a]){
                    alert('conteudo igual')
                    console.log('chegou aqui')
                }
            }
            // storageArray[i]
        }
    } else {
        localStorage.setItem("Fruta",JSON.stringify(dadosLocalStorage))
    }
}




    //verificar se ja existe algum item no localstorege
    // const local = localStorage.getItem("cardName")
    // const lista = JSON.parse(a)  //transforma em array novamente
    // if(lista != null){
        // se lista conter algo dentro, faz algo
    // }




    function handleSubmit(e) {
        e.preventDefault()
        const option = document.getElementById('opcoesPreco')

        const newProducts = []
        for (let i in pro) {
            if (minPrice === '' && maxPrice === '') {
                newProducts.push(pro[i])
            } else {
                if (minPrice === '') {
                    if (pro[i].precoProduto < maxPrice) {
                        newProducts.push(pro[i])
                    }
                } else if (maxPrice === '') {
                    if (pro[i].precoProduto > minPrice) {
                        newProducts.push(pro[i])
                    }
                }
                if ((minPrice && maxPrice !== '') && (minPrice < maxPrice)) {
                    if (pro[i].precoProduto >= minPrice && pro[i].precoProduto <= maxPrice) {
                        newProducts.push(pro[i])
                    }
                }
            }
        }
        
        var lista = []
        
        
        if (option.value === "menor_preco") {
            for (let i = 0; i < newProducts.length; i++) {
                lista.push(newProducts[i])
            }

            for (let i = 0; i < lista.length; i++) {


                var changed = true
                while (changed === true) {
                    changed = false
                    for (let j = 0; j < lista.length; j++) {
                        try {
                            if (lista[j].precoProduto > lista[j + 1].precoProduto) {

                                let temp = lista[j]
                                lista[j] = lista[j + 1]
                                lista[j + 1] = temp
                                console.log('Produto caro')
                                changed = true
                            }
                        } catch {
                            console.log('err')
                        }
                    }
                }
            }

        } else if (option.value === "maior_preco") {
            for (let i = 0; i < newProducts.length; i++) {
                lista.push(newProducts[i])
            }

            for (let i = 0; i < lista.length; i++) {


                var changed = true
                while (changed === true) {
                    changed = false
                    for (let j = 0; j < lista.length; j++) {
                        try {
                            if (lista[j].precoProduto < lista[j + 1].precoProduto) {

                                let temp = lista[j]
                                lista[j] = lista[j + 1]
                                lista[j + 1] = temp
                                console.log('Produto caro')
                                changed = true
                            }
                        } catch {
                            console.log('err')
                        }
                    }
                }
            }
        } else if(option.value === "recentes"){
            for (let i = 0; i < newProducts.length; i++) {
                lista.push(newProducts[i])
            }
            console.log(lista)
            console.log('lista acima')
            for(let i = 0; i < lista.length; i++){
                lista[i].dataInversa = newProducts[i].dataInclusao.split('/').reverse().join('');
                console.log(lista[i])
            }
            for (let i = 0; i < lista.length; i++) {

                var changed = true
                while (changed === true) {
                    changed = false
                    for (let j = 0; j < lista.length; j++) {
                        try {
                            if (lista[j].dataInversa < lista[j + 1].dataInversa) {

                                let temp = lista[j]
                                lista[j] = lista[j + 1]
                                lista[j + 1] = temp
                                console.log('Produto caro')
                                changed = true
                            }
                        } catch {
                            console.log('err')
                        }
                    }
                }
            }
        } else if(option.value === "antigo"){
            for (let i = 0; i < newProducts.length; i++) {
                lista.push(newProducts[i])
            }
            console.log(lista)
            console.log('lista acima')
            for(let i = 0; i < lista.length; i++){
                lista[i].dataInversa = newProducts[i].dataInclusao.split('/').reverse().join('');
                console.log(lista[i])
            }
            for (let i = 0; i < lista.length; i++) {

                var changed = true
                while (changed === true) {
                    changed = false
                    for (let j = 0; j < lista.length; j++) {
                        try {
                            if (lista[j].dataInversa > lista[j + 1].dataInversa) {

                                let temp = lista[j]
                                lista[j] = lista[j + 1]
                                lista[j + 1] = temp
                                console.log('Produto caro')
                                changed = true
                            }
                        } catch {
                            console.log('err')
                        }
                    }
                }
            }
        } else{ lista = newProducts }

        
        setProducts(lista)
    }
    return (
        <IndexContext.Provider
            value={{
                products,
                setProducts,
                handleSubmit,
                minPrice,
                setMinPrice,
                maxPrice,
                setMaxPrice,
                productsAddedToCard,
                filteredNames,
                setFilteredNames,
                handleFilteredItems,
                handleAddItem
            }}>
            {children}
        </IndexContext.Provider>
    )
}



////////////////////////////////////////////

