import React,{memo} from "react"
const 
memo1=(props)=>{console.warn('inner componenet',props.data)
return(
    <div>
        <h1>Memo1 Component</h1>
    </div>
);
}
export default Memo1;
 