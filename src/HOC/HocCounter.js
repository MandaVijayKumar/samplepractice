import React, {useState} from 'react';

let HocCounter = (OriginalComponent,number) => {
      let NewComponent = (props) => {
          const [counter, setcounter] = useState(0);
          let increment = ()=> {
              setcounter((pc) => pc + number);
          }
          return(<>
                <OriginalComponent counter = {counter} increment = {increment} {...props}/>
            </>)
      }
    return NewComponent;
}
export default HocCounter;