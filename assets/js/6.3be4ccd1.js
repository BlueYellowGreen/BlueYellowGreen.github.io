(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{405:function(t,e,a){},462:function(t,e,a){"use strict";a(405)},476:function(t,e,a){"use strict";a.r(e);var n=a(84),s=(a(121),{data:function(){return{haveMetamask:"Connect Metamask Wallet",isMetamask:0,account:{}}},methods:{loginRequest:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isMetamask){e.next=4;break}return e.next=3,ethereum.request({method:"eth_requestAccounts",params:[{eth_accounts:t.account}]});case 3:t.account=e.sent;case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){window.ethereum?this.isMetamask=1:(this.haveMetamask="You don't have Metamask Wallet",this.isMetamask=0)}}),c=(a(462),a(33)),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{attrs:{disabled:0==this.isMetamask},on:{click:t.loginRequest}},[t._v(t._s(t.haveMetamask))]),t._v(" "),0!==Object.keys(this.account).length?a("div",{staticClass:"account"},[a("span",{staticClass:"account-title"},[t._v("Account:  ")]),t._v(" "),a("span",{staticClass:"account-value"},[t._v(t._s(this.account[0]))])]):t._e()])}),[],!1,null,"4eece534",null);e.default=u.exports}}]);