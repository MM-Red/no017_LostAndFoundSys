(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-renlingyanzheng-add-or-update"],{"145f":function(r,e,i){"use strict";i.r(e);var a=i("6339"),t=i.n(a);for(var o in a)"default"!==o&&function(r){i.d(e,r,(function(){return a[r]}))}(o);e["default"]=t.a},2714:function(r,e,i){var a=i("3cf3");"string"===typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);var t=i("4f06").default;t("72410707",a,!0,{sourceMap:!1,shadowMode:!1})},"3cf3":function(r,e,i){var a=i("24fb");e=a(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-4ab3f5c4]{padding:%?20?%}.content[data-v-4ab3f5c4]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220213/4e09d53e8f3e4a9e88cf87ecedcf7ca0.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-4ab3f5c4]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-4ab3f5c4]{width:%?180?%}.avator[data-v-4ab3f5c4]{width:%?150?%;height:%?60?%}.right-input[data-v-4ab3f5c4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-4ab3f5c4]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-4ab3f5c4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-4ab3f5c4]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-4ab3f5c4]{border:0}.cu-form-group uni-input[data-v-4ab3f5c4]{padding:0 %?30?%}.uni-input[data-v-4ab3f5c4]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-4ab3f5c4]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-4ab3f5c4]::after{line-height:%?80?%}.select .uni-input[data-v-4ab3f5c4]{line-height:%?80?%}.input .right-input[data-v-4ab3f5c4]{line-height:%?88?%}',""]),r.exports=e},6339:function(r,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var t=a(i("3b8d")),o=a(i("e2b1")),n={data:function(){return{cross:"",ruleForm:{renlingbianhao:this.getUUID(),wupinmingcheng:"",wupintezheng:"",wupinyanse:"",tupian:"",wupindaxiao:"",renlingshijian:"",yonghuzhanghao:"",yonghuxingming:"",dianhuahaoma:"",faburenzhanghao:"",faburenxingming:"",sfsh:"",shhf:""},wupindaxiaoOptions:[],wupindaxiaoIndex:0,user:{},ro:{renlingbianhao:!1,wupinmingcheng:!1,wupintezheng:!1,wupinyanse:!1,tupian:!1,wupindaxiao:!1,renlingshijian:!1,yonghuzhanghao:!1,yonghuxingming:!1,dianhuahaoma:!1,faburenzhanghao:!1,faburenxingming:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(e){var i,a,t,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.ruleForm.renlingshijian=this.$utils.getCurDate(),i=uni.getStorageSync("nowTable"),r.next=4,this.$api.session(i);case 4:if(a=r.sent,this.user=a.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.dianhuahaoma=this.user.dianhuahaoma,this.ro.dianhuahaoma=!0,this.wupindaxiaoOptions="大,小".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=21;break}return this.ruleForm.id=e.id,r.next=19,this.$api.info("renlingyanzheng",this.ruleForm.id);case 19:a=r.sent,this.ruleForm=a.data;case 21:if(this.cross=e.cross,!e.cross){r.next=77;break}t=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(t);case 25:if((r.t1=r.t0()).done){r.next=77;break}if(o=r.t1.value,"renlingbianhao"!=o){r.next=31;break}return this.ruleForm.renlingbianhao=t[o],this.ro.renlingbianhao=!0,r.abrupt("continue",25);case 31:if("wupinmingcheng"!=o){r.next=35;break}return this.ruleForm.wupinmingcheng=t[o],this.ro.wupinmingcheng=!0,r.abrupt("continue",25);case 35:if("wupintezheng"!=o){r.next=39;break}return this.ruleForm.wupintezheng=t[o],this.ro.wupintezheng=!0,r.abrupt("continue",25);case 39:if("wupinyanse"!=o){r.next=43;break}return this.ruleForm.wupinyanse=t[o],this.ro.wupinyanse=!0,r.abrupt("continue",25);case 43:if("tupian"!=o){r.next=47;break}return this.ruleForm.tupian=t[o],this.ro.tupian=!0,r.abrupt("continue",25);case 47:if("wupindaxiao"!=o){r.next=51;break}return this.ruleForm.wupindaxiao=t[o],this.ro.wupindaxiao=!0,r.abrupt("continue",25);case 51:if("renlingshijian"!=o){r.next=55;break}return this.ruleForm.renlingshijian=t[o],this.ro.renlingshijian=!0,r.abrupt("continue",25);case 55:if("yonghuzhanghao"!=o){r.next=59;break}return this.ruleForm.yonghuzhanghao=t[o],this.ro.yonghuzhanghao=!0,r.abrupt("continue",25);case 59:if("yonghuxingming"!=o){r.next=63;break}return this.ruleForm.yonghuxingming=t[o],this.ro.yonghuxingming=!0,r.abrupt("continue",25);case 63:if("dianhuahaoma"!=o){r.next=67;break}return this.ruleForm.dianhuahaoma=t[o],this.ro.dianhuahaoma=!0,r.abrupt("continue",25);case 67:if("faburenzhanghao"!=o){r.next=71;break}return this.ruleForm.faburenzhanghao=t[o],this.ro.faburenzhanghao=!0,r.abrupt("continue",25);case 71:if("faburenxingming"!=o){r.next=75;break}return this.ruleForm.faburenxingming=t[o],this.ro.faburenxingming=!0,r.abrupt("continue",25);case 75:r.next=25;break;case 77:this.styleChange();case 78:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},renlingshijianChange:function(r){this.ruleForm.renlingshijian=r.target.value,this.$forceUpdate()},wupindaxiaoChange:function(r){this.wupindaxiaoIndex=r.target.value,this.ruleForm.wupindaxiao=this.wupindaxiaoOptions[this.wupindaxiaoIndex]},tupianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.tupian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var e,i,a,t,o,n,d,l,u,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.cross){r.next=16;break}if(t=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==t){r.next=16;break}if(n=uni.getStorageSync("crossObj"),t.startsWith("[")){r.next=12;break}for(d in n)d==t&&(n[d]=o);return l=uni.getStorageSync("crossTable"),r.next=10,this.$api.update("".concat(l),n);case 10:r.next=16;break;case 12:e=Number(uni.getStorageSync("userid")),i=n["id"],a=uni.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!e){r.next=38;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,u={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=22,this.$api.list("renlingyanzheng",u);case 22:if(s=r.sent,!(s.data.total>=a)){r.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 28:if(!this.ruleForm.id){r.next=33;break}return r.next=31,this.$api.update("renlingyanzheng",this.ruleForm);case 31:r.next=35;break;case 33:return r.next=35,this.$api.add("renlingyanzheng",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:r.next=46;break;case 38:if(!this.ruleForm.id){r.next=43;break}return r.next=41,this.$api.update("renlingyanzheng",this.ruleForm);case 41:r.next=45;break;case 43:return r.next=45,this.$api.add("renlingyanzheng",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,t=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(i,"-").concat(a,"-").concat(t)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},a5ed:function(r,e,i){"use strict";var a,t=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("认领编号")]),i("v-uni-view",{staticClass:"right-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.renlingbianhao))])],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("物品名称")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.wupinmingcheng,placeholder:"物品名称"},model:{value:r.ruleForm.wupinmingcheng,callback:function(e){r.$set(r.ruleForm,"wupinmingcheng",e)},expression:"ruleForm.wupinmingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("物品特征")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.wupintezheng,placeholder:"物品特征"},model:{value:r.ruleForm.wupintezheng,callback:function(e){r.$set(r.ruleForm,"wupintezheng",e)},expression:"ruleForm.wupintezheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("物品颜色")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.wupinyanse,placeholder:"物品颜色"},model:{value:r.ruleForm.wupinyanse,callback:function(e){r.$set(r.ruleForm,"wupinyanse",e)},expression:"ruleForm.wupinyanse"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.tupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.tupian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.tupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("物品大小")]),i("v-uni-picker",{attrs:{value:r.wupindaxiaoIndex,range:r.wupindaxiaoOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.wupindaxiaoChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(0,0,0,.6)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.wupindaxiao?r.ruleForm.wupindaxiao:"请选择物品大小"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("认领时间")]),i("v-uni-picker",{attrs:{mode:"date",value:r.ruleForm.renlingshijian},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.renlingshijianChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(0,0,0,.6)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.renlingshijian?r.ruleForm.renlingshijian:"请选择认领时间"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:r.ruleForm.yonghuzhanghao,callback:function(e){r.$set(r.ruleForm,"yonghuzhanghao",e)},expression:"ruleForm.yonghuzhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("用户姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:r.ruleForm.yonghuxingming,callback:function(e){r.$set(r.ruleForm,"yonghuxingming",e)},expression:"ruleForm.yonghuxingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("电话号码")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.dianhuahaoma,placeholder:"电话号码"},model:{value:r.ruleForm.dianhuahaoma,callback:function(e){r.$set(r.ruleForm,"dianhuahaoma",e)},expression:"ruleForm.dianhuahaoma"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("发布人账号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.faburenzhanghao,placeholder:"发布人账号"},model:{value:r.ruleForm.faburenzhanghao,callback:function(e){r.$set(r.ruleForm,"faburenzhanghao",e)},expression:"ruleForm.faburenzhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("发布人姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 20rpx 0 0",borderWidth:"0",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.faburenxingming,placeholder:"发布人姓名"},model:{value:r.ruleForm.faburenxingming,callback:function(e){r.$set(r.ruleForm,"faburenxingming",e)},expression:"ruleForm.faburenxingming"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(37, 147, 230, 1)",borderColor:"rgba(37, 147, 230, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[];i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},bf37:function(r,e,i){"use strict";i.r(e);var a=i("a5ed"),t=i("145f");for(var o in t)"default"!==o&&function(r){i.d(e,r,(function(){return t[r]}))}(o);i("c551");var n,d=i("f0c5"),l=Object(d["a"])(t["default"],a["b"],a["c"],!1,null,"4ab3f5c4",null,!1,a["a"],n);e["default"]=l.exports},c551:function(r,e,i){"use strict";var a=i("2714"),t=i.n(a);t.a}}]);