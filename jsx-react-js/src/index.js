import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import srcImg from './logo.png'
import App from './App';
import reportWebVitals from './reportWebVitals';


var text = "mugesh";

//array used

const product = ["tv", "mobile", "ac"];


//object used

const obj = {
  fname:"mugesh",
  age:22,
  gender:"male",
};



const element = (
  <div className={'textstyle'}>
<div style={{color:"blue", backgroundColor:"yellow"}}>
react
<h1>js</h1>{text}
{3+4}  {true ? "true":"false"}
<img src={srcImg}/>
{product.map((name, index) => (


<div key = {index}>

  <p>{name}</p>

</div>

))}

{Object.keys(obj).map((item, i) => (
  <p key={i}>
  {item}: {obj[item]}
  </p>
))}

</div>
</div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(element)
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
