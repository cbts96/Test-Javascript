import React,{useState}from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import products from "./products";
const App = () => {
  const [search,setSearch]=useState(" ");
  const onSearchChange = event => {
    
    setSearch(event.target.value)
  };
  const filteredProduct = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
    
  );
  
  return (
    <Router>
      <Header onSearchChange={onSearchChange}/>
      <main className='py-3'>
        <Container>
          <Route path='/' exact>
            <HomeScreen search={filteredProduct}/>
          </Route>
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
