import React from 'react';
let ThirdQ = ()=>{
    return(<div>
        <h1 className="bg-secondary text-danger">Ques:Do you have any following symptoms?</h1>
        
        <div className="form-check-inline">
        <input type="checkbox" className="form-check-input" name="symtoms" value="cough" /> Cough
      </div>
      <div className="form-check-inline">
      <input type="checkbox" className="form-check-input" name="symtoms" value="cold" /> Cold
    </div>
    <div className="form-check-line">
    <input type="checkbox" className="form-check-input" name="symtoms" value="BodyPains" /> Body Pains
  </div>
  <div className="form-check-line">
  <input type="checkbox" className="form-check-input" name="symtoms" value="others" /> Others
</div>
        
        
        </div>)
}
export default ThirdQ;