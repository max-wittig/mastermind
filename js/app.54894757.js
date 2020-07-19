(function(t){function e(e){for(var n,i,u=e[0],a=e[1],s=e[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/mastermind/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"1d18":function(t,e,r){},"3b6e":function(t,e,r){"use strict";var n=r("f400"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("Mastermind")]),r("Grid"),r("color-bar"),r("turn-button"),r("game-over",{directives:[{name:"show",rawName:"v-show",value:t.isGameOver(),expression:"isGameOver()"}],attrs:{playerWon:t.isGameWon()}})],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.rows,(function(t){return r("b-container",{key:"row-"+t},[r("Row",{attrs:{"row-number":t}})],1)})),1)},u=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",[r("b-col",{attrs:{cols:"1",xl:"2"}},[t.isCurrent?r("div",[t._v(" ►► ")]):t._e()]),t._l(t.totalCells,(function(e){return r("b-col",{key:"cell-"+t.rowNumber+"-"+e,attrs:{cols:"2",xl:"2"}},[r("Cell",{attrs:{"row-number":t.rowNumber,"cell-number":e}})],1)})),r("b-col",{attrs:{cols:"3",xl:"2"}},[t.isCurrent?t._e():r("div",[t.result?r("Indicator",{attrs:{correct:t.result.correct,wrong:t.result.wrongPosition,none:t.totalCells-t.result.correct-t.result.wrongPosition}}):t._e()],1)])],2)],1)},s=[],l=(r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.correct,(function(t){return r("font-awesome-icon",{key:"correct-"+t,attrs:{icon:["fas","circle"]}})})),t._l(t.wrong,(function(t){return r("font-awesome-icon",{key:"wrong-"+t,style:{color:"white"},attrs:{icon:["fas","circle"]}})})),t._l(t.none,(function(t){return r("font-awesome-icon",{key:"none-"+t,style:{color:"white"},attrs:{icon:["fas","ban"]}})}))],2)}),f=[],d={name:"Indicator",props:{correct:{type:Number,default:0,required:!0},wrong:{type:Number,default:0,required:!0},none:{type:Number,default:0,required:!0}}},m=d,b=(r("5bcb"),r("2877")),v=Object(b["a"])(m,l,f,!1,null,"3dc90ad0",null),p=v.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",[r("div",{on:{click:function(e){return t.cellClicked(t.rowNumber)}}},[r("p",{class:t.color})])])],1)},w=[],C={name:"Cell",props:{cellNumber:{type:Number,default:-1,required:!0},rowNumber:{type:Number,default:-1,required:!0}},data:function(){return{color:"",game:this.$store.state.game}},methods:{cellClicked:function(t){t===this.$store.state.currentRow&&(this.$store.commit("SET_CURRENT_COMBINATION",{cell:this.cellNumber,selectedColor:this.$store.state.selectedColor}),this.color=this.$store.getters.currentCombination(this.cellNumber))}},created:function(){var t=this;this.$store.watch((function(t){return t.game}),(function(e){t.color="",t.game=e}))}},_=C,y=(r("3b6e"),Object(b["a"])(_,h,w,!1,null,"41caf07b",null)),g=y.exports,O={name:"Row",components:{Cell:g,Indicator:p},data:function(){return{totalCells:4,correct:0,wrongPosition:0}},props:{rowNumber:{type:Number,default:-1,required:!0}},computed:{isCurrent:function(){return this.$store.state.currentRow===this.rowNumber},resultTest:function(){return this.$store.state.results[this.rowNumber]},result:function(){var t=this.$store.state.results[this.rowNumber];return t||null}}},$=O,R=(r("bcc3"),Object(b["a"])($,a,s,!1,null,"007b1908",null)),E=R.exports,N={name:"Grid",components:{Row:E},data:function(){return{rows:12}}},T=N,x=Object(b["a"])(T,i,u,!1,null,null,null),j=x.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{offset:"5"}},[r("b-button-group",t._l(this.colors,(function(e){return r("div",{key:"color-"+e},[t.isSelected(e)?r("button",{class:[e,"selected"]}):r("button",{class:e,on:{click:function(r){return t.colorSelected(e)}}})])})),0)],1)},k=[],G=["red","green","blue","yellow","orange"],M=4,P=12,W={name:"ColorBar",data:function(){return{colors:G}},methods:{colorSelected:function(t){this.$store.commit("SET_SELECTED_COLOR",t)},isSelected:function(t){return t===this.$store.state.selectedColor}}},q=W,B=(r("b167"),Object(b["a"])(q,S,k,!1,null,"701586c9",null)),I=B.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{on:{click:t.nextTurn}},[t._v(" Next turn ")]),r("b-modal",{attrs:{"hide-footer":"",id:"cannot-continue"}},[r("p",[t._v("Not all cells are filled out")]),r("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(e){return t.$bvModal.hide("cannot-continue")}}},[t._v("Continue")])],1)],1)},A=[],U=(r("a4d3"),r("e01a"),r("d28b"),r("caad"),r("c975"),r("d3b7"),r("2532"),r("3ca3"),r("ddb0"),r("284c")),D=r("e587"),F=function(t){for(var e=[],r=1;r<t.state.correctCombination.length+1;r++)e.push(t.getters.currentCombination(r));return e},J=function(t){return{currentCombination:F(t),correctCombination:t.state.correctCombination}},X=function(t){var e=0,r=!0,n=!1,o=void 0;try{for(var c,i=t.currentCombination.entries()[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var u=Object(D["a"])(c.value,2),a=u[0],s=u[1];t.correctCombination[a]===s&&(e+=1)}}catch(l){n=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return e},Y=function(t){var e=0,r=Object(U["a"])(t.correctCombination),n=!0,o=!1,c=void 0;try{for(var i,u=t.currentCombination.values()[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var a=i.value;if(r.includes(a)){e+=1;var s=r.indexOf(a);r[s]="x"}}}catch(l){o=!0,c=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw c}}return e},z=function(t){var e=X(t),r=Y(t)-e;return{wrongPosition:r,correct:e}},H={name:"TurnButton",methods:{nextTurn:function(){if(!this.$store.state.gameOver)if(this.$store.getters.rowFinished){var t=J(this.$store),e=z(t);this.$store.commit("NEXT_TURN",e)}else this.$bvModal.show("cannot-continue")}}},K=H,Q=(r("81a0"),Object(b["a"])(K,L,A,!1,null,"1a17e7fb",null)),V=Q.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"outer"},[t.playerWon?r("div",[r("p",[t._v("You've won in "+t._s(t.turnsToWin)+" tries!")])]):r("div",{staticClass:"solution"},[r("p",[t._v("You've lost")]),r("p",[t._v("The right combination was")]),r("b-container",{staticClass:"combination"},[r("b-col",{attrs:{offset:"2","offset-xl":"4"}},[r("b-row",t._l(t.correctCombination,(function(t,e){return r("div",{key:"lost-"+t+"-"+e},[r("p",{staticClass:"color-block",class:t})])})),0)],1)],1)],1),r("game-over-retry")],1)},tt=[],et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{on:{click:t.retryGame}},[t._v("Retry")])],1)},rt=[],nt={name:"GameOverRetry",methods:{retryGame:function(){this.$store.commit("RESET_GAME")}}},ot=nt,ct=Object(b["a"])(ot,et,rt,!1,null,null,null),it=ct.exports,ut={name:"GameOver",props:{playerWon:{type:Boolean,default:!1,required:!1}},components:{GameOverRetry:it},computed:{correctCombination:function(){return this.$store.state.correctCombination},turnsToWin:function(){return P-this.$store.state.currentRow}}},at=ut,st=(r("cd0c"),Object(b["a"])(at,Z,tt,!1,null,"5e08ad70",null)),lt=st.exports,ft={name:"app",components:{Grid:j,ColorBar:I,TurnButton:V,GameOver:lt},data:function(){return{winRow:-10}},methods:{isGameWon:function(){var t=this.$store.state.currentRow+1,e=this.$store.state.results;return!(!e||!e[t]||e[t].correct!==M)},isGameLost:function(){return 0===this.$store.state.currentRow},isGameOver:function(){return!(!this.isGameLost()&&!this.isGameWon())&&(this.$store.state.gameOver=!0,!0)}},beforeMount:function(){this.$store.commit("RESET_GAME")}},dt=ft,mt=(r("034f"),Object(b["a"])(dt,o,c,!1,null,null,null)),bt=mt.exports,vt=r("5f5b"),pt=(r("b64b"),r("2f62"));n["default"].use(pt["a"]);var ht=function(){for(var t=[],e=0;e<M;e++){var r=Math.floor(Math.random()*G.length);t.push(G[r])}return t},wt=new pt["a"].Store({state:{selectedColor:"",currentRow:P,correctCombination:[],currentCombination:[],results:{},gameOver:!1,game:0},mutations:{SET_SELECTED_COLOR:function(t,e){t.selectedColor=e},NEXT_TURN:function(t,e){n["default"].set(t.results,t.currentRow,e),t.currentRow-=1,t.currentCombination={}},SET_CURRENT_COMBINATION:function(t,e){var r=e.cell,o=e.selectedColor;t.currentCombination[t.currentRow]||n["default"].set(t.currentCombination,t.currentRow,{}),n["default"].set(t.currentCombination[t.currentRow],r,o)},RESET_GAME:function(t){t.currentRow=P,t.correctCombination=ht(),t.results={},t.gameOver=!1,t.game+=1}},getters:{rowFinished:function(t){return!!t.currentCombination[t.currentRow]&&!(Object.keys(t.currentCombination[t.currentRow]).length<M)},currentCombination:function(t){return function(e){return t.currentCombination[t.currentRow][e]}}},actions:{}}),Ct=r("ad3d"),_t=r("ecee"),yt=r("c074");r("f9e3"),r("2dd8"),r("845f");n["default"].config.productionTip=!1,n["default"].use(vt["a"]),n["default"].component("font-awesome-icon",Ct["a"]),_t["c"].add(yt["b"]),_t["c"].add(yt["a"]),n["default"].prototype.$store=wt,new n["default"]({store:wt,render:function(t){return t(bt)}}).$mount("#app")},"5bcb":function(t,e,r){"use strict";var n=r("1d18"),o=r.n(n);o.a},"81a0":function(t,e,r){"use strict";var n=r("c211"),o=r.n(n);o.a},"845f":function(t,e,r){},"85ec":function(t,e,r){},"8acf":function(t,e,r){},"968c":function(t,e,r){},"9c4e":function(t,e,r){},b167:function(t,e,r){"use strict";var n=r("968c"),o=r.n(n);o.a},bcc3:function(t,e,r){"use strict";var n=r("8acf"),o=r.n(n);o.a},c211:function(t,e,r){},cd0c:function(t,e,r){"use strict";var n=r("9c4e"),o=r.n(n);o.a},f400:function(t,e,r){}});
//# sourceMappingURL=app.54894757.js.map