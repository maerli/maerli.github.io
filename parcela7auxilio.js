
Render(()=>{
   document.body.style.margin = 0;0
   const {Icon,Table, TableHead,TableCell,TableRow} = MaterialUI;
   
   const menu = e("div", {style:{
   display:"flex",
   alignItems:"center",
   justifyContent:"center",
   witdh:"100%",
   height:"10%",
   backgroundColor:"black",
   color:"white",
   padding:5,
   }}, e(Icon, null, "store_front"), "Maerli News");
   
   const title = e("h3", null, "Calendário Auxílio Emergencial: confira as datas de pagamento da 7ª parcela.");
   
   const subtitle = e("div", null, "Veja calendário do auxílio emergencial referente à sétima e última parcela do benefício para público geral");
   
   const body = e("div", null, e("p", null,"A Caixa Econômica Federal já começou a fazer os pagamentos da sétima e última parcela do auxílio emergencial." ), e("p", null, "Lembrando que, para o público em geral, os valores do auxílio emergencial podem ser movimentados pelo app Caixa Tem antes das datas para liberação dos saques. Na plataforma, é possível fazer transferências, Pix, compras online, pagamentos de contas e em maquininhas de cartão."));
   
   const a1 = e("div", null, e("h4", null, "Calendário auxílio emergencial: 7ª parcela para público geral"), 
   e("div",null,"Veja calendário auxílio emergencial referente à sétima e última parcela do benefício em 2021:"));
   
   const table = [
  [ 'Janeiro', '20/10', '01/11' ],
  [ 'Fevereiro', '21/10', '03/11' ],
  [ 'Março', '22/10', '04/11' ],
  [ 'Abril', '23/10', '05/11' ],
  [ 'Maio', '23/10', '09/11' ],
  [ 'Junho', '26/10', '10/11' ],
  [ 'Julho', '27/10', '11/11' ],
  [ 'Agosto', '28/10', '12/11' ],
  [ 'Setembro', '29/10', '16/11' ],
  [ 'Outubro', '30/10', '17/11' ],
  [ 'Novembro', '30/10', '18/11' ],
  [ 'Dezembro', '31/10', '19/11' ] ];
  
  const t = table.map(a=>{
    return e(TableRow, null,  a.map(b=> e(TableCell, null, b)));
    });
   
   return e("div", null, menu, e("div", {style:{padding:10,}}, title, subtitle, body, a1,e(Table,null,e(TableHead, null, ['Mês de aniversário', 'Data de depósito', 'Data para saque' ].map(c=> e(TableCell, null, c) ) ), t)));
   
   
});
