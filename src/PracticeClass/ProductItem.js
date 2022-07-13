import React from 'react'
class ProductItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item:{id:1,name:'pen',qty:4,cost:400}
        }
    }
    increase = ()=>{
        this.setState({
            item:{...this.state.item,qty:this.state.item.qty + 1}
        })
    }
    decrease = ()=>{
        this.setState({
            item:{...this.state.item,qty:(this.state.item.qty - 1<0) ? 0 :this.state.item.qty - 1}
        })
    }
    sumValue = ()=>{
        return(this.state.item.qty *this.state.item.cost)
    }
    render() {

        return(<div>
                <ul>
                    <li>{this.state.item.id}</li>
                    <li>{this.state.item.name}</li>
                    <li><button onClick={this.increase}>add</button>{this.state.item.qty}<button onClick={this.decrease}>decrease</button></li>
                    <li>{this.state.item.cost}</li>
                    <li>{this.sumValue()}</li>
                </ul>
            
              
            
            </div>)
    }
}
export default ProductItem;