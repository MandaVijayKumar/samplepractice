import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Col, Container, Row, Stack } from 'react-bootstrap';

function Employees() {
  const [checked, setChecked] = useState(false)
  const [state, setState ] = useState({
    loading: false,
    data: [],
    error: ''
  });
  useEffect(async () => {
    setState({...state, loading: true})
    try {
      let data = await axios.get('https://jsonplaceholder.typicode.com/users');
      
      setState({loading: false, data: data.data, error: ''})

    } catch(error) {
      setState({
        ...state,
        error
      });
      console.log(error)
    }
     
  },[]);
  const {loading, data, error} = state;
  return (
    <div>
        <Container>
          <Row>
            <Col>
            <Stack gap={3}>
            {
              !loading && data.map((employee)=>{
                return(
                    <div key={employee.id}>
                    <input type='checkbox' checked = {checked} onChange = {()=>setChecked(!checked)}/>
                    <label>{employee.name}</label>
                    
                    </div>
                )
              })
            }

            </Stack>
           
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Employees