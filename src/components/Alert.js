import React from "react";

export default function Alert(props) {
    const capitalise=(word)=>{
        let t=word.toLowerCase();
        return t.charAt(0).toUpperCase()+ t.slice(1);
    }
  return (
    <div style={{height: '40px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
      </div>}
     </div>
  );
}
