import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './ItemListContainer.css'


const ItemListContainer = ({ productsData }) => {
    return (
        <div className="ItemListContainer">
            {productsData.map((product) => (
                <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        {/* <Card.Text></Card.Text> */}
                        <Link to={`/item/${product.id}`}>
                            <Button variant="primary">View product</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ItemListContainer;