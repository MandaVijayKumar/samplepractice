import React from 'react';
import image1 from './Attendence/image1.jpeg'
import image2 from './Attendence/image2.jpeg'
import image3 from './Attendence/image3.jpeg'
import image4 from './Attendence/image4.jpeg'
import image5 from './Attendence/image5.jpeg'
import image6 from './Attendence/image6.jpeg'
//import image7 from './Attendence/image7.jpeg'
let images = [image4,image5,image6,image1,image2,image3];

let Chiti = ()=>{
    let styles = {
        width:'400px',
        height:'400px',
        border:'3px groove yellow',
        padding:'20px',
        marigin:'20px',
        background:'lightgreen'

    }
    
    return(<div>
               <h1 className='bg-success text-center text-danger p-2'>My Chiti is forEver my Heart</h1>
             <div className='row'>
             {
                 images.map((image)=>{
                   return( <div className='col-md-4 '>
                       <div className='card bg-warning p-3'>
                          <div className='card-body bg-primary  text-center p'>
                            <img style={styles} src={image} alt='no data' className='img-thumbinal '/>
                          </div>

                       </div>
                 
                    </div>)

                 })
                }
               
             
             </div>
        </div>)
}
export default Chiti;