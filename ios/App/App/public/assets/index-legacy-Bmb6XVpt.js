System.register(["./index-legacy-S-raS_qo.js"],(function(e,t){"use strict";var a,n,l,o,i,d,s,r,c,u,f,p,y,m,v,g,b,h,x,k,I,_,C,w,T,A,q,F;return{setters:[e=>{a=e.d,n=e.I,l=e.h,o=e.i,i=e.j,d=e.k,s=e.l,r=e.m,c=e.n,u=e.p,f=e.q,p=e.s,y=e.u,m=e.v,v=e.x,g=e.y,b=e.z,h=e._,x=e.c,k=e.w,I=e.r,_=e.o,C=e.a,w=e.b,T=e.e,A=e.f,q=e.A,F=e.t}],execute:function(){var t=document.createElement("style");t.textContent=".coffee-btn-outline[data-v-85e20d39]{border:2px solid #b5723a;color:#b5723a;font-weight:700;border-radius:20px;transition:background-color .3s ease,color .3s ease}.coffee-btn-outline[data-v-85e20d39]:hover{background-color:#b5723a;color:#fff}.coffee-btn-primary[data-v-85e20d39]{background-color:#b5723a;color:#fff;font-weight:700;border-radius:25px;font-size:1rem;padding:.75rem 1.5rem;transition:background-color .3s ease,transform .3s ease}.coffee-btn-primary[data-v-85e20d39]:disabled{background-color:#d3d3d3;color:#fff}.coffee-btn-primary[data-v-85e20d39]:hover:not(:disabled){background-color:#a1622d;transform:scale(1.05)}.order-toggle[data-v-85e20d39]{margin:16px 0}.delivery-address-section[data-v-85e20d39]{padding:16px}.section-title[data-v-85e20d39]{font-weight:700;margin-bottom:8px}.order-item[data-v-85e20d39]{padding:8px 16px;display:flex;align-items:center}.quantity[data-v-85e20d39]{display:flex;align-items:center;gap:8px}.discount-section[data-v-85e20d39]{padding:16px;display:flex;align-items:center;gap:8px}.payment-summary[data-v-85e20d39]{padding:16px}.payment-detail[data-v-85e20d39]{display:flex;justify-content:space-between;margin-bottom:8px}.footer-content[data-v-85e20d39]{display:flex;justify-content:space-between;align-items:center;padding:8px 16px}.wallet-info[data-v-85e20d39]{text-align:left}.refresh-container[data-v-85e20d39]{position:absolute;top:5px;left:90%;transform:translate(-50%);z-index:10;cursor:pointer;display:flex;justify-content:center;align-items:center}.coffee-cup[data-v-85e20d39]{position:relative;background-color:#6f4e37;width:50px;height:50px;border-radius:50%;box-shadow:0 4px 8px rgba(0,0,0,.2);display:flex;align-items:center;justify-content:center;transition:transform .3s ease,background-color .3s ease}.coffee-cup[data-v-85e20d39]:hover{background-color:#5a3d2c;transform:scale(1.1)}.coffee-icon[data-v-85e20d39]{font-size:1.5rem;color:#fff}.steam[data-v-85e20d39]{position:absolute;width:8px;height:20px;background:rgba(255,255,255,.6);top:-15px;left:50%;transform:translate(-50%);border-radius:50%;animation:rise-85e20d39 2s infinite ease-in-out}.steam1[data-v-85e20d39]{animation-delay:0s}.steam2[data-v-85e20d39]{animation-delay:.2s;left:40%}.steam3[data-v-85e20d39]{animation-delay:.4s;left:60%}@keyframes rise-85e20d39{0%{opacity:1;transform:translate(-50%) translateY(0)}to{opacity:0;transform:translate(-50%) translateY(-30px)}}\n",document.head.appendChild(t);const z=a({name:"order",components:{IonAvatar:n,IonContent:l,IonHeader:o,IonIcon:i,IonItem:d,IonItemOptions:s,IonItemOption:r,IonItemSliding:c,IonLabel:u,IonList:f,IonTitle:p,IonToolbar:y,IonBackButton:m,IonButtons:v,IonPage:g,IonFooter:b},data:()=>({quantity:1,price:4.53,deliveryFee:1,walletBalance:1e3,discountApplied:!0,deliveryType:"delivery"}),computed:{grandTotal(){let e=this.price*this.quantity;return"delivery"===this.deliveryType&&(e+=this.deliveryFee),e}},methods:{decreaseQuantity(){this.quantity>1&&(this.quantity-=1)},increaseQuantity(){this.quantity+=1},toggleDeliveryType(e){this.deliveryType=e.detail.value},placeOrder(){this.grandTotal<=this.walletBalance?alert("Order placed successfully!"):alert("Insufficient wallet balance.")},async editAddress(){this.$router.push("/deliver")},addNote(){console.log("Add Note Clicked")},refreshPage(){console.log("Refreshing content..."),location.reload()}}}),D={class:"coffee-cup"},B={key:0,class:"delivery-address-section"},P={class:"quantity"},j={class:"mx-2"},O={class:"discount-section"},N={class:"payment-summary"},S={class:"payment-detail"},$={class:"payment-detail"},Q={key:0},L={key:1},E={key:0},H={class:"footer-content"},K={class:"wallet-info"};e("default",h(z,[["render",function(e,t,a,n,l,o){const i=I("ion-back-button"),d=I("ion-buttons"),s=I("ion-title"),r=I("ion-toolbar"),c=I("ion-icon"),u=I("ion-header"),f=I("ion-label"),p=I("ion-segment-button"),y=I("ion-segment"),m=I("ion-button"),v=I("ion-thumbnail"),g=I("ion-item"),b=I("ion-content"),h=I("ion-footer"),z=I("ion-page");return _(),x(z,null,{default:k((()=>[C(u,null,{default:k((()=>[C(r,{color:"primary"},{default:k((()=>[C(d,{slot:"start"},{default:k((()=>[C(i,{defaultHref:"/home"})])),_:1}),C(s,null,{default:k((()=>t[2]||(t[2]=[w("Order")]))),_:1})])),_:1}),T("div",{class:"refresh-container",onClick:t[0]||(t[0]=(...t)=>e.refreshPage&&e.refreshPage(...t))},[T("div",D,[t[3]||(t[3]=T("div",{class:"steam steam1"},null,-1)),t[4]||(t[4]=T("div",{class:"steam steam2"},null,-1)),t[5]||(t[5]=T("div",{class:"steam steam3"},null,-1)),C(c,{name:"cafe-outline",class:"coffee-icon"})])])])),_:1}),C(b,null,{default:k((()=>[C(y,{value:"delivery",class:"order-toggle",onIonChange:e.toggleDeliveryType},{default:k((()=>[C(p,{value:"delivery"},{default:k((()=>[C(f,null,{default:k((()=>t[6]||(t[6]=[w("Deliver")]))),_:1})])),_:1}),C(p,{value:"pickup"},{default:k((()=>[C(f,null,{default:k((()=>t[7]||(t[7]=[w("Pick Up")]))),_:1})])),_:1})])),_:1},8,["onIonChange"]),"delivery"===e.deliveryType?(_(),A("div",B,[t[10]||(t[10]=T("h4",{class:"section-title"},"Delivery Address",-1)),t[11]||(t[11]=T("p",null,[T("strong",null,"Jl. Kpg Sutoyo"),T("br"),w(" Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai ")],-1)),C(m,{expand:"clear",size:"small",class:"coffee-btn-outline",onClick:t[1]||(t[1]=t=>e.editAddress())},{default:k((()=>t[8]||(t[8]=[w("Edit Address")]))),_:1}),C(m,{expand:"clear",size:"small",class:"coffee-btn-outline",onClick:e.addNote},{default:k((()=>t[9]||(t[9]=[w("Add Note")]))),_:1},8,["onClick"])])):q("",!0),C(g,{class:"order-item"},{default:k((()=>[C(v,{slot:"start"},{default:k((()=>t[12]||(t[12]=[T("img",{src:"/assets/coffee-CwDPkwyL.png",alt:"Caffe Mocha"},null,-1)]))),_:1}),C(f,null,{default:k((()=>t[13]||(t[13]=[T("h3",null,"Caffe Mocha",-1),T("p",null,"Deep Foam",-1)]))),_:1}),T("div",P,[C(m,{expand:"clear",onClick:e.decreaseQuantity,class:"coffee-btn-outline",size:"small"},{default:k((()=>t[14]||(t[14]=[w("-")]))),_:1},8,["onClick"]),T("span",j,F(e.quantity),1),C(m,{expand:"clear",onClick:e.increaseQuantity,class:"coffee-btn-outline",size:"small"},{default:k((()=>t[15]||(t[15]=[w("+")]))),_:1},8,["onClick"])])])),_:1}),T("div",O,[C(c,{name:"pricetag-outline"}),T("p",null,F(e.discountApplied?"1 Discount is Applied":"No Discounts Applied"),1)]),T("div",N,[t[19]||(t[19]=T("h4",null,"Payment Summary",-1)),T("div",S,[t[16]||(t[16]=T("p",null,"Price",-1)),T("p",null,[T("strong",null,"$"+F((e.price*e.quantity).toFixed(2)),1)])]),T("div",$,[t[18]||(t[18]=T("p",null,"Delivery Fee",-1)),T("p",null,["delivery"===e.deliveryType?(_(),A("s",Q,"$2.00")):q("",!0),"delivery"===e.deliveryType?(_(),A("strong",L,"$"+F(e.deliveryFee.toFixed(2)),1)):q("",!0)]),"pickup"===e.deliveryType?(_(),A("p",E,t[17]||(t[17]=[T("strong",null,"Free",-1)]))):q("",!0)])])])),_:1}),C(h,null,{default:k((()=>[C(r,null,{default:k((()=>[T("div",H,[T("div",K,[t[20]||(t[20]=T("h5",null,"Cash/Wallet",-1)),T("p",null,[T("strong",null,"$"+F(e.walletBalance.toFixed(2)),1)])]),C(m,{disabled:e.grandTotal>e.walletBalance,class:"coffee-btn-primary",expand:"clear",onClick:e.placeOrder},{default:k((()=>t[21]||(t[21]=[w(" Order ")]))),_:1},8,["disabled","onClick"])])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-85e20d39"]]))}}}));