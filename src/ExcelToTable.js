import React,{Fragment, useState} from "react";
import XLSX from 'xlsx';

let ExcelToTable = ()=>{
    let [Data,setData] = useState([]);
    let Colums = [];

    let readFile = (file)=>{
       
            let fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)
            fileReader.addEventListener('load',(e)=>{
                let bufferArray = e.target.result;
                let wb =  XLSX.read(bufferArray,{type:'buffer'});
                console.log('what is read workbook',wb);
                let workSheetName = wb.SheetNames[0];
                console.log('worksheet name is: ',workSheetName)
                let workSheet = wb.Sheets[workSheetName];
                console.log('work sheet data is: ',workSheet);
                let data = XLSX.utils.sheet_to_json(workSheet);
                
                setData(data);
               
               


            })
       
    }
    console.log(Data);
    if(Data.length>0){
        for (let i in Data[0]) {
            Colums.push(i);
        }
        console.log('my colums are:',Colums);
    }
  
    
    return(
        <div>
         <h2 className="text-center text-primary">welcome to Excel sheet to Table display</h2>
         <div className="input-group mb-3 p-5 bg-warning">
              
              <input type="file"
                     onChange={(e)=>{
                           let file = e.target.files[0];
                           readFile(file);
                         }} 

                     className="form-control text-danger"
                     id="excelFileOne"/>
         </div>
        
         <div>
         <table className="table table-success table-striped text-center">
            <thead className="bg-dark text-danger ">
              <tr>
                   {Colums.length>0?Colums.map((colum)=><th>{colum}</th>):null}
              </tr>
            
            </thead>
            <tbody>
                        {Data.length>0? Data.map((rowData)=>{
                           
                           return(<Fragment>
                               <tr>{Colums.map(colum=><td>{rowData[colum]}</td>)}</tr>
                            </Fragment>)
                        }) :null}    
            </tbody>
         </table>
         </div>
          
        </div>
    )
}
export default ExcelToTable;