import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import React,{ useContext } from "react" 
import { IndexContext } from "../../contexts/IndexContext"


function CardCompra({ imgProduto, nomeProduto, precoProduto, dataInclusao,categoria }) {
  const { handleAddItem } = useContext(IndexContext)
  return (
    <>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={imgProduto}  style={{ width: '17.9rem', height: '18rem'}}/>
      <Card.Body>
        <Card.Title>{nomeProduto}</Card.Title>
        <Card.Text>
          R$<span className="cardPrice">{precoProduto}</span> <br/>
          Data: <span className="cardData">{dataInclusao} </span><br/>
          Categoria: <span className="cardCategory">{categoria}</span>

        </Card.Text>
        <Button variant="primary" onClick={handleAddItem}>Adicionar Carrinho</Button>
        <div>

        {/* <Link to="/">Adicionar ao carrinho</Link> */}
        </div>
      </Card.Body>
    </Card>
        
    </>
  );
}

export default CardCompra;