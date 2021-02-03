import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar,  Container, Form,FormControl,Button } from 'react-bootstrap'

const Header = ({onSearchChange}) => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>LeThang-Shop</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          
            <Form inline>
      <FormControl type="text" onChange={onSearchChange} placeholder="Search Your Product...." className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
          
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
