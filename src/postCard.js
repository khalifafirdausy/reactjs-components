import React from 'react';
import { Card, CardImg, CardDeck, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import molly from './molly.png';

class PostCard extends React.Component {

  render(){
    return(
      <React.Fragment>
        <CardDeck>
          {this.props.bioData.bio.map((data) => {
            return(
              <Card>
                <CardImg top width="10%" src={molly} alt="img-name" />
                <CardBody>
                  <CardTitle>{data.name}</CardTitle>
                  <CardText>{data.description}</CardText>
                  <Button color="info">Edit</Button>{' '}
                  <Button color="danger">Delete</Button>{' '}
                </CardBody>
              </Card>
            )
          })}
        </CardDeck>
      </React.Fragment>
    )
  }
}

export default PostCard