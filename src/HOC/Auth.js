import React , {useState} from 'react';
let withAuth = (WrapperComponent) => {
    let NewWrapperComponent = (props) => {
        const [auth, setauth] = useState(false);

        return(<>
                {
                    auth==true?<WrapperComponent/>:<h1>login is failed</h1>
                }
            
            </>)
    }

    return NewWrapperComponent;
}