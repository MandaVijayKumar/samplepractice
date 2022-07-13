import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchallusers } from './useractions';

let UserList = ()=>{
    let datainfo = useSelector((state)=>{
        return state.userdata;
    })
    let dispatch = useDispatch()

    return(<div>
        <h1>{JSON.stringify(datainfo.user)} </h1>
        <button className="btn btn-danger" onClick={()=>dispatch(fetchallusers())}>getData</button>
        {
            datainfo.user.map((data)=>{
                return(<ul>
                        <li>{data.name}</li>
                    </ul>)
            })
        }
        </div>)

}
export default UserList;
