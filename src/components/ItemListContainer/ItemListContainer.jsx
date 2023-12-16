import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.css'


const ItemListContainer = ({ productsData }) => {
    return (
        <div className="ItemListContainer">
            {productsData.map((products)=>{
                return (
                    <Card key={products.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ products.thumbnail } />
                        <Card.Body>
                            <Card.Title>{ products.title }</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default ItemListContainer;