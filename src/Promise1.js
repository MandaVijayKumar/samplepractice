import React from 'react';


let Promise1 = (props)=>{
    // promise one
        let maniplate1 = (a,b)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let c = a+b;
                    resolve(c);
                },6000);
            })
        }
   //promise two
        let maniplate2 = (a,b)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let c = a*b;
                    resolve(c);
                },6000);
            })
        }
    //promise three
        let maniplate3 = (a,b)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let c = a-b;
                    resolve(c);
                },6000);
            })
        }
    // arthmatic operations

        let arthmatic = async (a,b)=>{
            let r1 = await maniplate1(a,b);
            console.log('result of sum:',r1);
            let r2 = await maniplate2(a,b);
            let r3 = await maniplate3(a,b);
            console.log('result of multiplications',r2);
            console.log('result of subtraction',r3);
            console.log('i am the boss');

        
        }

  
   arthmatic(20,30);
    return (
        <div>
            <h1>i am using fetch() function</h1>
        </div>
    )
}

export default Promise1
