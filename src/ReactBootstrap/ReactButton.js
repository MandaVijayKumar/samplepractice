import React from 'react'
import { Navbar, Container, Row, Col, Stack} from 'react-bootstrap'
import Counter from './Counter'
import Login from './Login'

export default function ReactButton() {
  return ( 
    <>
       <Navbar bg='primary' expand='lg' variant='secondary'>
           <Container>
               <Navbar.Brand href="#">React bootstrap</Navbar.Brand>


           </Container>

       </Navbar>
       <Container>
           <Row className='bg-primary'>
               <Col>vijay</Col>
               <Col>kumar</Col>
               <Col>naidu</Col>
           </Row>
       </Container>
       <Stack style={{width: 500, margin: 'auto', backgroundColor:'cyan'}} gap={5} direction='horizontal'>
           <div style={{width:500, margin: 'auto', backgroundColor:'red'}}>vijay</div>
           <div style={{width:500, margin: 'auto', backgroundColor:'red'}}>vijay</div>

           <div style={{width:500, margin: 'auto', backgroundColor:'red'}}>vijay</div>


       </Stack>
       <Row>
           <Col xs={4}></Col>
           <Col xs={4}>
               <Login/>
           </Col>
           <Col xs={4}></Col>
       </Row>
    </>
  )
}
