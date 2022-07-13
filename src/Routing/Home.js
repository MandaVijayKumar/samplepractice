import React from "react";
let Home = ()=>{
    return(<div>
        <h1>this is home component</h1>
        <div>
        <div style={{float:"clear"}}>
<BrowserRouter>
    <Navbar/>
      <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/About" element={<About/>}/>
           <Route exact path="/AddEmployee" element={<AddEmployee/>}/>
           <Route exact path="/UpdateEmployee" element={<UpdateEmployee/>}/>
      </Routes>
</BrowserRouter>
</div>
     
    </div>
        </div>)
}
export default Home;