webpackJsonp([1],{"/njE":function(e,t,s){"use strict";var n=s("mtWM"),a=s.n(n),r=s("wBWz"),i=s("YqeF");s("6A3X"),t.a={name:"WordSearch",components:{spinner:r.a,"message-container":i.a},data:function(){return{results:null,wordList:[],messages:[],phrase:"",soundsLike:"",startLetter:"",endLetter:"",showSpinner:!1}},methods:{addWord:function(e){-1===this.wordList.indexOf(e)?(this.wordList.push(e),this.messages.push({type:"success",text:e+" added to Word List."}),console.log("Added "+e+" to wordList.")):(this.messages.push({type:"info",text:e+" is already on the Word List."}),console.log("Word is already on wordlist."))},removeWord:function(e){this.wordList.splice(this.wordList.indexOf(e),1),this.messages.push({type:"success",text:e+" removed from Word List."})},findWords:function(){var e=this;this.showSpinner=!0,this.results=null,a.a.get("https://api.datamuse.com/words",{params:{ml:this.phrase,sl:this.soundsLike,sp:this.startLetter+"*"+this.endLetter}}).then(function(t){e.showSpinner=!1,e.results=t.data}).catch(function(t){e.showSpinner=!1,e.messages.push({type:"error",text:t.message})})}}}},"1S1c":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"messages"},[s("message-container",{attrs:{messages:e.messages}})],1),e._v(" "),s("div",{staticClass:"word-search"},[s("form",{on:{submit:function(t){t.preventDefault(),e.findWords(t)}}},[s("p",[s("label",[e._v("Find synonyms for "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phrase,expression:"phrase"}],attrs:{type:"text",placeholder:"word or phrase"},domProps:{value:e.phrase},on:{input:function(t){t.target.composing||(e.phrase=t.target.value)}}}),e._v(" that:")])]),e._v(" "),s("ul",[s("li",[s("label",[e._v("sounds like "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.soundsLike,expression:"soundsLike"}],attrs:{type:"text",placeholder:"word or phrase"},domProps:{value:e.soundsLike},on:{input:function(t){t.target.composing||(e.soundsLike=t.target.value)}}})])]),e._v(" "),s("li",[s("label",[e._v("start with the letter "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.startLetter,expression:"startLetter"}],attrs:{type:"text",placeholder:"single letter"},domProps:{value:e.startLetter},on:{input:function(t){t.target.composing||(e.startLetter=t.target.value)}}})])]),e._v(" "),s("li",[s("label",[e._v("end with the letter "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endLetter,expression:"endLetter"}],attrs:{type:"text",placeholder:"single letter"},domProps:{value:e.endLetter},on:{input:function(t){t.target.composing||(e.endLetter=t.target.value)}}})])])]),e._v(" "),e._m(0)])]),e._v(" "),s("div",{staticClass:"word-list-container"},[s("h2",[e._v("Word List")]),e._v(" "),s("ul",{staticClass:"word-list"},[s("transition-group",{attrs:{name:"slideRight",tag:"div",appear:""}},e._l(e.wordList,function(t){return s("li",{key:t},[e._v(e._s(t)+" "),s("button",{staticClass:"remove-word",on:{click:function(s){e.removeWord(t)}}},[e._v("x")])])}))],1)]),e._v(" "),s("div",{staticClass:"results-container"},[e.showSpinner?s("spinner"):e._e(),e._v(" "),e.results&&e.results.length>0?s("h2",[e._v(e._s(e.results.length)+" Words Found")]):e._e(),e._v(" "),e.results&&e.results.length>0?s("ul",{staticClass:"results"},[s("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.results,function(t){return s("li",{key:t.word,staticClass:"item"},[s("p",{staticClass:"result-word"},[e._v(e._s(t.word))]),e._v(" "),s("p",[s("button",{staticClass:"add-word",on:{click:function(s){e.addWord(t.word)}}},[e._v("Add to WordList")])])])}))],1):e.results&&0===e.results.length?s("div",{staticClass:"no-results"},[s("h2",[e._v("No Results Found")]),e._v(" "),s("p",[e._v("Please adjust your search to find more words.")])]):e._e()],1)])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("button",{attrs:{type:"submit"}},[e._v("Search")])])}],r={render:n,staticRenderFns:a};t.a=r},"21UZ":function(e,t,s){"use strict";var n=s("5mxT");s("6A3X"),t.a={name:"MessageContainer",props:{messages:Array},components:{"message-item":n.a}}},"3tc5":function(e,t,s){"use strict";function n(e){s("KTTC")}var a=s("/njE"),r=s("1S1c"),i=s("VU/8"),o=n,u=i(a.a,r.a,!1,o,"data-v-274cea6c",null);t.a=u.exports},"5mxT":function(e,t,s){"use strict";function n(e){s("vpob")}var a=s("xzJ+"),r=s("BNhT"),i=s("VU/8"),o=n,u=i(a.a,r.a,!1,o,"data-v-668771e0",null);t.a=u.exports},"6A3X":function(e,t){},"7iEi":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Loading...")]),e._v(" "),s("div",{staticClass:"sk-folding-cube"},[s("div",{staticClass:"sk-cube1 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube2 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube4 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube3 sk-cube"})])])}],r={render:n,staticRenderFns:a};t.a=r},ADF9:function(e,t){},BNhT:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[s("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],class:[e.message.type,"message"]},[e._v("\n    "+e._s(e.message.text)+"\n    "),s("button",{on:{click:e.close}},[e._v("close")])])])},a=[],r={render:n,staticRenderFns:a};t.a=r},HBtV:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.messages.length>0?s("ul",e._l(e.messages,function(e){return s("message-item",{key:e.text,attrs:{message:e}})})):e._e()])},a=[],r={render:n,staticRenderFns:a};t.a=r},Jo6n:function(e,t){},KCAG:function(e,t,s){"use strict";t.a={name:"CubeSpinner"}},KTTC:function(e,t){},M93x:function(e,t,s){"use strict";function n(e){s("wz1e")}var a=s("xJD8"),r=s("Po5P"),i=s("VU/8"),o=n,u=i(a.a,r.a,!1,o,null,null);t.a=u.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a=s("M93x"),r=s("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},Po5P:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("h1",[e._v("Word Search Toolset")]),e._v(" "),s("router-view")],1)},a=[],r={render:n,staticRenderFns:a};t.a=r},YaEn:function(e,t,s){"use strict";var n=s("7+uW"),a=s("/ocq"),r=s("3tc5");n.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"WordSearch",component:r.a}]})},YqeF:function(e,t,s){"use strict";function n(e){s("Jo6n")}var a=s("21UZ"),r=s("HBtV"),i=s("VU/8"),o=n,u=i(a.a,r.a,!1,o,"data-v-dbb02464",null);t.a=u.exports},vpob:function(e,t){},wBWz:function(e,t,s){"use strict";function n(e){s("ADF9")}var a=s("KCAG"),r=s("7iEi"),i=s("VU/8"),o=n,u=i(a.a,r.a,!1,o,"data-v-784d8db5",null);t.a=u.exports},wz1e:function(e,t){},xJD8:function(e,t,s){"use strict";t.a={name:"app"}},"xzJ+":function(e,t,s){"use strict";s("6A3X"),t.a={name:"MessageContainer",props:{message:Object},data:function(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}}}}},["NHnr"]);
//# sourceMappingURL=app.614f8998aed51091f0dd.js.map