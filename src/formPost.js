import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FormPost extends React.Component {
  
  render(){
    return (
      <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
        <Form>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="text" name="txt-name" id="name" placeholder="Place your name here.." />
          </FormGroup>
          
          <FormGroup>
            <Label for="desc">Description</Label>
            <Input type="textarea" name="txt-desc" id="desc" placeholder="Please tell us you're at home rn" />
          </FormGroup>
          
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />
              I agree with terms and condition
            </Label>
          </FormGroup>
          
          <Button color="info">Submit</Button>
        </Form>
        
        <br></br>
        <br></br>
        <hr></hr>
      </React.Fragment>
    )
  }
}

export default FormPost