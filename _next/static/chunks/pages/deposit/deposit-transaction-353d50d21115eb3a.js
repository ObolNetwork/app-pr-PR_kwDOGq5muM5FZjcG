(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{43050:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deposit/deposit-transaction",function(){return n(90385)}])},90385:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return D}});var s=n(34051),a=n.n(s),i=n(85893),o=n(67294),r=n(2593),c=n(64146),u=n(74905),l=n(79124),p=n(79225),d=n(8507),y=n(99353),x=n(43080),h=n(58423),b=function(t){var e=t.pubKey,n=t.onDeposit,s=(0,p.o)((function(t){return t.getDepositItem(e)})),a=(0,p.o)((function(t){return t.depositData})),r=Object.keys(a).some((function(t){return a[t].transactionStatus===d.LN.STARTED})),c=(0,o.useCallback)((function(){return s.depositStatus===d.Er.READY_FOR_DEPOSIT||s.transactionStatus===d.LN.READY||s.transactionStatus===d.LN.PENDING||s.transactionStatus===d.LN.REJECTED||s.transactionStatus===d.LN.FAILED?(0,i.jsx)(u.zx,{fullWidth:!0,onClick:function(){return n(e)},color:"secondary",css:{backgroundColor:"$bg04","&:hover":{backgroundColor:"$create",color:"$textCreateHover"}},disabled:s.transactionStatus===d.LN.PENDING||r,children:s.transactionStatus===d.LN.REJECTED||s.transactionStatus===d.LN.FAILED?"Try Again":"Deposit"}):s.depositStatus===d.Er.ALREADY_DEPOSITED?(0,i.jsx)(h.j,{link:"".concat(x.q2,"/validator/0x").concat(e),title:"Beaconchain"}):s.transactionStatus===d.LN.STARTED?(0,i.jsx)(h.j,{link:"".concat(x.t0,"/").concat(s.txHash),title:"Etherscan"}):s.transactionStatus===d.LN.SUCCEEDED?(0,i.jsxs)(l.kC,{direction:"column",css:{alignContent:"center"},children:[(0,i.jsx)(h.j,{link:"".concat(x.q2,"/validator/0x").concat(e),title:"Beaconchain"}),(0,i.jsx)(h.j,{link:"".concat(x.uM,"/0x").concat(e),title:"Beaconscan"})]}):void 0}),[s.depositStatus,s.transactionStatus,s.txHash,n,e]);return(0,i.jsx)(u.xu,{css:{display:"flex",gap:"$xxs",alignItems:"center"},children:c()})},m=n(48847),f=n(72534),v=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bytes",name:"pubkey",type:"bytes"},{indexed:!1,internalType:"bytes",name:"withdrawal_credentials",type:"bytes"},{indexed:!1,internalType:"bytes",name:"amount",type:"bytes"},{indexed:!1,internalType:"bytes",name:"signature",type:"bytes"},{indexed:!1,internalType:"bytes",name:"index",type:"bytes"}],name:"DepositEvent",type:"event"},{inputs:[{internalType:"bytes",name:"pubkey",type:"bytes"},{internalType:"bytes",name:"withdrawal_credentials",type:"bytes"},{internalType:"bytes",name:"signature",type:"bytes"},{internalType:"bytes32",name:"deposit_data_root",type:"bytes32"}],name:"deposit",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"get_deposit_count",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[],name:"get_deposit_root",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"}],E=n(72151);function g(t,e,n,s,a,i,o){try{var r=t[i](o),c=r.value}catch(u){return void n(u)}r.done?e(c):Promise.resolve(c).then(s,a)}var k=[{accessorKey:"validatorPublicKey",header:"Validator Public Key",css:{maxWidth:"70px","@sm":{width:"auto",maxWidth:"auto"},"@md":{maxWidth:"100px"}}},{accessorKey:"status",header:"Status"},{accessorKey:"action",header:"Action"}],j=function(){var t=(0,f.kR)().provider,e=(0,p.o)((function(t){return t.depositData})),n=(0,p.o)((function(t){return t.updateTxStatus})),s=(0,p.o)((function(t){return t.updateDepositStatus})),h=(0,p.o)((function(t){return t.getDepositItem})),j=(0,o.useState)(!1),D=j[0],N=j[1],C=Object.keys(null!==e&&void 0!==e?e:{}).length,S=function(){var e,i=(e=a().mark((function e(i){var o,u,l,p,y,b,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=h(i),e.prev=1,u=t.getSigner(),l=new c.CH(x.O5,v,u),p=r.O$.from(32),y=p.mul(x.sg),n(o.pubkey,d.LN.PENDING),e.next=9,l.deposit((0,m.Ox)(o.pubkey),(0,m.Ox)(o.withdrawal_credentials),(0,m.Ox)(o.signature),(0,m.Ox)(o.deposit_data_root),{value:y});case 9:return b=e.sent,n(o.pubkey,d.LN.STARTED,b.hash),s(o.pubkey,d.Er.VERIFYING),e.next=14,b.wait();case 14:f=e.sent,n(o.pubkey,d.LN.SUCCEEDED,b.transactionHash),console.log(f),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),(0,m.WW)(e.t0)?n(o.pubkey,d.LN.REJECTED):n(o.pubkey,d.LN.FAILED);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})),function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function o(t){g(i,s,a,o,r,"next",t)}function r(t){g(i,s,a,o,r,"throw",t)}o(void 0)}))});return function(t){return i.apply(this,arguments)}}();if(!e&&!D)return(0,i.jsxs)(u.xv,{variant:"h5",children:["Go to upload deposit step to upload the corresponding data step.. ",(0,i.jsx)(u.rU,{href:"/deposit/upload-deposits",children:"Upload Deposit Data"})]});var T=(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(E.qN,{heading:"Your stake has reached the deposit contract",subHeading:(0,i.jsxs)(u.xu,{css:{px:"$xl"},children:["You\u2019ve successfully set up a testnet validator! We recommend you\n            complete the checklist before validating on ",(0,i.jsx)(u.xv,{css:{display:"inline"},color:"obolGreen",children:"mainnet"})]})}),(0,i.jsxs)(u.W2,{className:"success-section",alignItems:"start",css:{gap:"$xl"},children:[(0,i.jsx)(u.xv,{variant:"h4",children:"Overview"}),(0,i.jsxs)(l.kC,{css:{gap:"$2xl"},children:[(0,i.jsx)(E.Mz,{heading:"Your Stake",subHeading:(0,i.jsxs)(l.kC,{css:{gap:"$xxs"},children:[(0,i.jsx)(u.Ee,{src:"/assets/eth-icon.svg",alt:"eth",width:24,height:24}),"".concat(C*x.lc," GoEth")]})}),(0,i.jsx)(E.Mz,{heading:"Your Validators",subHeading:"".concat(C)})]})]})]});return D?T:(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,i.jsx)(u.xv,{variant:"h3",children:"Transactions"}),(0,i.jsx)(l.kC,{direction:"column",css:{gap:"$2xl"},children:(0,i.jsxs)(u.W2,{dir:"col",className:"transactions-section",alignItems:"start",children:[(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$xxxs"},children:[(0,i.jsx)(u.xv,{variant:"h4",children:"Confirm Deposit"}),(0,i.jsx)(u.xv,{size:"4",color:"muted",children:"Submit a transaction to finish your deposit"})]}),(0,i.jsxs)(l.kC,{direction:"column",css:{gap:"$xl"},children:[(0,i.jsxs)(u.xu,{className:"deposit-table-container",css:{display:"flex",flexDirection:"column",p:"$sm",backgroundColor:"$bg03",borderRadius:"$1",gap:"$lg","& table":{backgroundColor:"transparent"},"& table tbody td":{whiteSpace:"normal"}},children:[(0,i.jsx)(u.xv,{variant:"h5",children:"Key List"}),(0,i.jsx)(u.iA,{rows:Object.keys(e).map((function(t){return{validatorPublicKey:(0,m.zN)(t,[0,10],10),status:(0,i.jsx)(y.D,{pubKey:t}),action:(0,i.jsx)(b,{pubKey:t,onDeposit:S})}})),columns:k})]}),(0,i.jsx)(E.wA,{onBackHref:"/deposit/summary",onContinue:function(){N(!0)},disableContinue:Object.keys(e).some((function(t){return null==e[t].txHash&&e[t].transactionStatus!==d.LN.SUCCEEDED}))})]})]})})]})},D=j;j.layout="DepositProgressTrackerLayout"}},function(t){t.O(0,[198,146,774,888,179],(function(){return e=43050,t(t.s=e);var e}));var e=t.O();_N_E=e}]);