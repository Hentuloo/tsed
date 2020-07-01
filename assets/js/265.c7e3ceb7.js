(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{704:function(n,s,a){"use strict";a.r(s);var t=a(44),p=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"handlercontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlercontext"}},[n._v("#")]),n._v(" HandlerContext "),a("Badge",{attrs:{text:"Class",type:"class"}})],1),n._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[n._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[n._v("import")]),n._v(" { HandlerContext } "),a("span",{staticClass:"token keyword"},[n._v("from")]),n._v(" "),a("span",{staticClass:"token string"},[n._v('"@tsed/common"')])])])]),a("tr",[a("th",[n._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.59.4/packages/common/src/platform/domain/HandlerContext.ts#L0-L0"}},[n._v("/packages/common/src/platform/domain/HandlerContext.ts")])])])])])]),n._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[n._v("#")]),n._v(" Overview")]),n._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" HandlerContext "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    injector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("a",{pre:!0,attrs:{href:"/api/di/services/InjectorService.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[n._v("InjectorService")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("a",{pre:!0,attrs:{href:"/api/common/mvc/models/HandlerMetadata.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[n._v("HandlerMetadata")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" TsED."),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Request.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[n._v("Request")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" TsED."),a("a",{pre:!0,attrs:{href:"/api/common/mvc/decorators/params/Response.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[n._v("Response")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n    args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[n._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> injector<span class="token punctuation">,</span> request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> next<span class="token punctuation">,</span> err<span class="token punctuation">,</span> metadata<span class="token punctuation">,</span> args <span class="token punctuation">}</span><span class="token punctuation">:</span> <a href="/api/common/platform/interfaces/IHandlerContext.html"><span class="token">IHandlerContext</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\nget <span class="token function">isDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\nget <span class="token function">container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span>"@tsed/di"<span class="token punctuation">)</span>.<a href="/api/di/class/LocalsContainer.html"><span class="token">LocalsContainer</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n<span class="token function">done</span><span class="token punctuation">(</span>error<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> result?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token function">handle</span><span class="token punctuation">(</span>process<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n *\n */\n<span class="token function">callHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">void</span>&gt;<span class="token punctuation">;</span>\n<span class="token function">next</span><span class="token punctuation">(</span>error?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n<span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")])])])])]),a("p")])}),[],!1,null,null,null);s.default=p.exports}}]);