(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0cfd":function(t,n,e){"use strict";var o=e("76e2"),a=e.n(o);a.a},"0d65":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("a34a")),a=r(e("76ab"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,o,a,r,i){try{var s=t[r](i),u=s.value}catch(c){return void e(c)}s.done?n(u):Promise.resolve(u).then(o,a)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var r=t.apply(n,e);function s(t){i(r,o,a,s,u,"next",t)}function u(t){i(r,o,a,s,u,"throw",t)}s(void 0)}))}}var u={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],n=a.default.list();this.menuList=n;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&(t.push(this.menuList[e].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.randomString(4),this.styleChange()},methods:{randomString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,n=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],o=["28","30","32","34","36"],a=0;a<t;a++){var r=Math.floor(Math.random()*n.length);this.codes[a].num=n[r];for(var i="#",s=0;s<6;s++){var u=Math.floor(Math.random()*e.length);i+=e[u]}this.codes[a].color=i;var c=Math.floor(30*Math.random()),f=Math.floor(2*Math.random());1==f&&(c="-"+c),this.codes[a].rotate="rotate("+c+"deg)";var d=Math.floor(Math.random()*o.length);this.codes[a].size=o[d]+"rpx"}},styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(n){t.setStorageSync("loginTable",n),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var n=this;return s(o.default.mark((function e(){var a;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.optionsValues[n.index]){e.next=3;break}return n.$utils.msg("请选择登陆用户类型"),e.abrupt("return");case 3:return e.next=5,n.$api.login("".concat(n.optionsValues[n.index]),{username:n.username,password:n.password});case 5:return a=e.sent,t.removeStorageSync("useridTag"),t.setStorageSync("token",a.token),t.setStorageSync("nickname",n.username),t.setStorageSync("nowTable","".concat(n.optionsValues[n.index])),e.next=12,n.$api.session("".concat(n.optionsValues[n.index]));case 12:a=e.sent,t.setStorageSync("userid",a.data.id),a.data.vip&&t.setStorageSync("vip",a.data.vip),t.setStorageSync("role","".concat(n.options[n.index])),n.$utils.tab("../index/index");case 17:case"end":return e.stop()}}),e)})))()},optionsChange:function(t){this.index=t.target.value}}};n.default=u}).call(this,e("543d")["default"])},"6b3f":function(t,n,e){},"6ebb":function(t,n,e){"use strict";e.r(n);var o=e("0d65"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=a.a},"76e2":function(t,n,e){},8198:function(t,n,e){"use strict";(function(t){e("9482");o(e("66fd"));var n=o(e("afa9"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a2a9:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},r=[]},afa9:function(t,n,e){"use strict";e.r(n);var o=e("a2a9"),a=e("6ebb");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("bf8f"),e("0cfd");var i,s=e("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"31b8c388",null,!1,o["a"],i);n["default"]=u.exports},bf8f:function(t,n,e){"use strict";var o=e("6b3f"),a=e.n(o);a.a}},[["8198","common/runtime","common/vendor"]]]);