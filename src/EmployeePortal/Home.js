import Axios from "axios";
import React,{useState} from "react";
let Home = ()=>{
    let [data,setData] = useState({eid:'',ename:'',salary:null})
    let submitHandler = (e)=>{
        e.preventDefault();
        console.log(data);
        Axios
        .post('https://yes-yha-jobs-default-rtdb.firebaseio.com/register.json',{eid:data.eid,ename:data.ename,salary:data.salary}).then((Response)=>{
            console.log('successfully registered')
        }).catch((error)=>{
            console.log(error)
        })
    }
    const getData = async () => {
        let data = await Axios.get('https://yes-yha-jobs-default-rtdb.firebaseio.com/register.json');
        console.log(data)
    }
    return(<div style={{float:"clear"}}>
            <form onSubmit={submitHandler} >
                  <div className="form-group">
                      <input type="text" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} name="eid" value={data.eid} placeholder="employee id" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <input type="text" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} name="ename" value={data.ename} placeholder="employee name" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <input type="number" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} name="salary" value={data.salary} placeholder="employee salary" className="form-control"/>
                  </div>
                  <div>
                     <input type="submit" value="register" className="btn btn-danger"/>
                  </div>
            
            </form>
            <button onClick={getData} className="btn btn-primary">getData</button>
        </div>);
}
export default Home;