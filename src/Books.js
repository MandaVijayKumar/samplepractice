import React,{useState} from 'react';
let Books = ()=>{

    let [bookName,setBookName]=useState(['c','c++','java','mle','software engineering']);


    return(<div>
        <h1>Books Names are</h1>
        <h3>number of books={bookName.length}</h3>
        <ul>
          {
              bookName.map((value)=>{
                  return(
                      <li>{value}</li>
                  );
              }

              )
          }
        </ul>
        </div>);
}

export default Books;