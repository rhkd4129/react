import { useState } from "react";



function A(prpos){
    return(
        <>
        <h2>{prpos.title}</h2>
        <h2>{prpos.body}</h2>
        </>
    )
}


function Pra(){

    return(
       <div>
            <A title='title'body = 'body'></A>
       </div>
    );
}

export default Pra;
