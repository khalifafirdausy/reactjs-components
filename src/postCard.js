import React from 'react';
import { Card, CardImg, CardDeck, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import molly from './molly.png';

const PostCard = () =>{
    return(
<React.Fragment>
<CardDeck>
      <Card>
        <CardImg top width="10%" src={molly} alt="img-name" />
          <CardBody>
            <CardTitle>Maulana Yusuf</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="info">Edit</Button>{' '}
            <Button color="danger">Delete</Button>{' '}
          </CardBody>
      </Card>

      <Card>
        <CardImg top width="10%" src={molly} alt="img-name" />
          <CardBody>
            <CardTitle>Maulana Yusuf</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="info">Edit</Button>{' '}
            <Button color="danger">Delete</Button>{' '}
          </CardBody>
      </Card>

      <Card>
        <CardImg top width="10%" src={molly} alt="img-name" />
          <CardBody>
            <CardTitle>Maulana Yusuf</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="info">Edit</Button>{' '}
            <Button color="danger">Delete</Button>{' '}
          </CardBody>
      </Card>

      <Card>
        <CardImg top width="10%" src={molly} alt="img-name" />
          <CardBody>
            <CardTitle>Maulana Yusuf</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="info">Edit</Button>{' '}
            <Button color="danger">Delete</Button>{' '}
          </CardBody>
      </Card>
      
    </CardDeck>
    
</React.Fragment>
    )
}

export default PostCard