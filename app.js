function App(){
     return React.createElement("h1", null, "oi");
  }
  let module = {exports: App};
function Render(r){
   module.exports = r;
}

const uri = "";

async function css(path){
   const link = document.createElement("link");
   link.rel = "stylesheet";
   link.href = path;
   const head = document.querySelector("head");
   head.append(link);
   return new Promise((resolve,reject)=>{
   link.addEventListener("load", ()=>{
      resolve();
   });
   });
   
   
}

css("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
css("https://fonts.googleapis.com/icon?family=Material+Icons");

async function require(path,func){

   
   
   const head = document.querySelector("head");
   const script = document.createElement("script");
   script.type = "module";
   script.src = path;
   head.append(script);
   
   return new Promise((resolve,reject)=>{
   script.addEventListener('load', (event)=>{
      if(func) func();
      
      resolve();
   });
   });
   
   
}

async function load(){
  await require("https://unpkg.com/react@17/umd/react.production.min.js");
  e = React.createElement;
  await require("https://unpkg.com/react-dom@17/umd/react-dom.production.min.js");
  
  await require("https://unpkg.com/@mui/material@latest/umd/material-ui.development.js");
  
  await require("https://cdn.jsdelivr.net/npm/polished@3.4.2/dist/polished.min.js")
  
  async function init(){
     const hash = location.hash;
     const url = hash.slice(2);
     
     
     
     //let App = _App;
     if(url !== ""){
         await require(uri+url+".js");
            ReactDOM.render(module.exports(), document.querySelector("body"));
     }else{
    
     ReactDOM.render(module.exports(), document.querySelector("body"))
     }
  }
  
  window.addEventListener("hashchange", ()=>{
     init();
  });
  try{
  init();
  }catch(err){
     alert(err);
  }
  
  
}
load();
