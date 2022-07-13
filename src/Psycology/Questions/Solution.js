import React ,{Fragment,useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Solution.css'
let Solution = ()=>{
    let [conclusion,setConclusion] = useState('')
    let  pshycoInfo = useSelector((state)=>{
        return state.pshyco;
    });
    let [infoCount,setInfoCount]=useState(pshycoInfo.Count);
  
  useEffect(()=>{
    let Count=infoCount;
    console.log()
    let Range=20/4;
    if((Count>=0) && (Count<=Range)){
        setConclusion('Solution one ');

    }
    if((Count>Range) &&( Count<= Range*2)){
        setConclusion('Solution two');
    }
    if((Count>Range*2) && (Count<=Range*3)) {
        setConclusion('Solution Three');
    }
    if((Count>Range*3) && (Count<=Range*4)) {
        setConclusion('Solution Four');
    }
  
},[]);
    let dispatch = useDispatch();
    console.log(pshycoInfo);
    console.log(conclusion)
    return(<div>
           <div className="card ">
              <div className="card-body " id="solId" ><h3>Conclusion:<span className="text-muted text-warning h5"> {conclusion}</span></h3></div>
           </div>
           
           <table className="table table-striped table-primary text-center text-secondary">
              <thead>
                  <th>Sno</th>
                  <th>Question</th>
                  <th>Selected</th>
              </thead>
              <tbody>
                 {pshycoInfo.Questions.map((question)=>{
                     return(<Fragment>
                             <tr>
                                <td>{question.qid}</td>
                                <td>{question.title}</td>
                                <td>{question.answer}</td>
                             </tr>
                        </Fragment>)
                 })}
              </tbody>
           
           </table>
        </div>)
}
export default Solution;