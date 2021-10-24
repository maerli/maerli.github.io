css("app.css");

const styles = {
name:{
   fontWeight:"bold",
}
};

const {Button, Paper, Card, Icon} = MaterialUI;
   Render( ()=>{
    const link = e("a", {href:"#/test1"}, "test1");
    
    const Menu = ()=>{
       return e("div", {className:"menu", style:{background:polished.darken(0.2, "blue")}}, e(Icon,null, "store_front"), "Maerli Store");
    }
    
    let sections = [{
      price: 10,
      name: "carro",
    },
    {
    price: 11,
      name: "carro",
    }
    ];
    
    const goTo = (msg)=>{
       window.location.href = "https://wa.me/5588981628528?text="+escape(msg);
    }
    
    const Footer = (props)=> e("div", props);
    
    sections = sections.map(a=> e("div", {key:a, className:"section", style:{
    backgroundImage:`url(ca.jpg)`,
    }} , e(Footer, null, e("div",{style:styles.name}, a.name),e("div", null, "R$ "+a.price),e(Button, {variant:"contained", onClick:()=> goTo("Estou interessado em "+ a.name) }, "comprar"))) );

    

    return e(Paper, {className:"wrapper"}, Menu(), sections);
    
});


