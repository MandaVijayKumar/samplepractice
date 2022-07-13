import React,{Fragment,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchallEmployeeusers} from './EmployeeAction';
import Spinner from './Spinner.js'
import {Link} from 'react-router-dom'
let EmployeesList = ()=>{
    let dispatch = useDispatch();
    let dataInfo = useSelector((state)=>{
        return state.emp;
    })
    useEffect(()=>{
        dispatch(fetchallEmployeeusers())
    },[])

    return(<Fragment>
        <div className=" bg-primary">
        <h1>Welcome to Employee list</h1>
        <p> this  is vijay kumar  computer science department kurnool</p>
        <button className="btn btn-danger">read more</button>
        {dataInfo.loading?<Spinner/>:
            <table className="table table-primary table-striped table-hover">
                   <thead>
                      <th>id</th>
                      <th>username</th>
                      <th>email</th>

                   </thead>
                   <tbody>
                        {
                            dataInfo.data.length>0? dataInfo.data.map((user)=>{
                                return(<tr><td>{user.id}</td>
                                    <td><Link to={`/EmployeeDetails/${user.id}`} >{user.username}</Link></td>
                                    <td>{user.email}</td> </tr>)
                            }) :null
                        }
                   </tbody>
            </table>
         
            
        
        }
        </div>
        
       
        
        </Fragment>)
}
export default EmployeesList;