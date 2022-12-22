import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { Input } from './components/input';
import * as math from 'mathjs';
import Header from '../src/components/Header';


const App=()=> {
  const buttons= [
 {id:7,symbol:"7"},{id:8,symbol:"8"},{id:9,symbol:"9"}]

  const buttons2=[{id:4,symbol:"4"},{id:5,symbol:"5"},{id:6,symbol:"6"},{id:'+',symbol:"+"}]
  
  const buttons3=[{id:1,symbol:"1"},{id:2,symbol:"2"},{id:3,symbol:"3"},{id:'-',symbol:"-"}]

  const buttons4=[{id:'.',symbol:"."},{id:0,symbol:"0"},{id:'/',symbol:"/"},{id:'*',symbol:"x"}

]


  const[text,setText]=useState("");
  const[result,setResult]=useState("");

  const addToText=(val)=>{
    setText((text)=>[...text, val+""]);
  }

  const resetInput=()=>{
    setText("");
    setResult("");
  }   

 

  const calculateResult=()=>{
    try{
  const input=text.join("");
  setResult(math.evaluate(input));
}catch(err){
setResult("Error")
}
  }


  // const calculateResult=()=>{
  //   try{
  //    setText(math.evaluate(text));
  //   }catch(error){
  //    setText("Error")
  //   }
  //  }



  const backspace=()=>{
    try{
      setText(text.slice(0,-1))
    }catch(error){

    }
  }

  return (
  
    <div className='header'>
<Header/>
   
     <div className='input'>
     <Input text={text} result={result}/>
     </div>
     <div className='calc-wrapper'>
      <div className='row'>
      {buttons.map((btn)=> (<Button key={btn.id} symbol={btn.symbol} color={btn.color} 
       handleClick={()=>addToText(btn.id)}/>))}
        <Button symbol="DEL"handleClick={backspace} color="#70819c"/>
       </div>
       <div className='row'>
      {buttons2.map((btn)=> (<Button key={btn.id} symbol={btn.symbol} color={btn.color}
       handleClick={()=>addToText(btn.id)}/>))}
       </div>
       <div className='row'>
      {buttons3.map((btn)=> (<Button key={btn.id} symbol={btn.symbol} color={btn.color}
       handleClick={()=>addToText(btn.id)}/>))}
       </div>
       <div className='row'>
      {buttons4.map((btn)=> (<Button key={btn.id} symbol={btn.symbol} color={btn.color}
       handleClick={()=>addToText(btn.id)}/>))}
       </div>
       <div className='row'>
       <Button symbol="Reset" color="#70819c" handleClick={resetInput}/> 
       <Button symbol="=" color="red" handleClick={calculateResult}/> 

</div>



      {/* <Button symbol="7" handleClick={addToText}/>
      <Button symbol="8"handleClick={addToText}/>
      <Button symbol="9" handleClick={addToText}/>
      <Button symbol="/" color="red" handleClick={addToText}/> */}
      </div>
  
        </div>
      

    
  );
}

export default App;