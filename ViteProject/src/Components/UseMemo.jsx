import React from "react";
import { useState } from "react";
var slowFunction=(number)=>{

    for(let i=0;i<10000000000;i++){
        return number*i;
    }
}
var UseMemo=()=>{
    var [num,setNum]=useState(0)
    var [theme,setTheme]=useState(true)
    var darklight={
        backgroundColor : theme ? 'black' : 'White',
        color : theme ? 'white' : 'black'
    };
    
}
export default UseMemo;