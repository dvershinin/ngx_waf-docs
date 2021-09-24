(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{454:function(t,e,a){"use strict";a.r(e);var r=a(46),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题与解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题与解答"}},[t._v("#")]),t._v(" 常见问题与解答")]),t._v(" "),a("h2",{attrs:{id:"本模块的性能如何"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本模块的性能如何"}},[t._v("#")]),t._v(" 本模块的性能如何？")]),t._v(" "),a("p",[t._v("IP 检查和 CC 防御花费常数时间，其它的检查花费 "),a("code",[t._v("O(nm)")]),t._v(" 的时间，其中 "),a("code",[t._v("n")]),t._v(" 是相关规则的条数，"),a("code",[t._v("m")]),t._v(" 为执行正则匹配的时间复杂度，但是每次检查过后会自动缓存本次检查的结果，下次检查相同的目标时就可以使用缓存而不是检查全部的规则。不会缓存 POST 请求体的检查结果。")]),t._v(" "),a("h2",{attrs:{id:"缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[t._v("#")]),t._v(" 缓存策略")]),t._v(" "),a("p",[t._v("LRU")]),t._v(" "),a("h2",{attrs:{id:"ngx-http-access-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ngx-http-access-module"}},[t._v("#")]),t._v(" ngx_http_access_module")]),t._v(" "),a("p",[t._v("当本模块与 "),a("code",[t._v("ngx_http_access_module")]),t._v(" 一起使用时，"),a("code",[t._v("ngx_http_access_module")]),t._v(" 会先于本模块运行。")]),t._v(" "),a("h2",{attrs:{id:"post检测失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post检测失效"}},[t._v("#")]),t._v(" post检测失效")]),t._v(" "),a("p",[t._v("本模块出于性能考虑只会在 Post 请求体在内存中时检查，若不在内存中则跳过检查。\n您可以通过修改配置文件来解决这个问题。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_body_buffer_size")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10M")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_body_in_file_only")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("off")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_buffer_size",target:"_blank",rel:"noopener noreferrer"}},[t._v("client_body_buffer_size 的说明"),a("OutboundLink")],1),t._v("\n和 "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_file_only",target:"_blank",rel:"noopener noreferrer"}},[t._v("client_body_in_file_only 的说明"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[t._v("#")]),t._v(' fork() failed while spawning "worker process" (12: Cannot allocate memory)')]),t._v(" "),a("p",[t._v("可能是过多地使用 "),a("code",[t._v("nginx -s reload")]),t._v(" 导致的，本模块会在读取配置的时候申请一些内存，但是不知为何 "),a("code",[t._v("nginx -s reload")]),t._v(" 之后这些内存不会立即释放，所以短时间内频繁 "),a("code",[t._v("nginx -s reload")]),t._v(" 就极可能导致这个错误。")]),t._v(" "),a("h2",{attrs:{id:"可以在运行时修改规则么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可以在运行时修改规则么"}},[t._v("#")]),t._v(" 可以在运行时修改规则么？")]),t._v(" "),a("p",[t._v("不可以，本模块只会在 nginx 读取配置时读取规则。nginx 会在启动和 reload 时读取配置。")]),t._v(" "),a("h2",{attrs:{id:"cdn-对-ip-检查的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn-对-ip-检查的影响"}},[t._v("#")]),t._v(" CDN 对 IP 检查的影响")]),t._v(" "),a("p",[t._v("如果你使用 "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_realip_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngx_http_realip_module"),a("OutboundLink")],1),t._v(" 获取真实 IP 的话，则本模块在检查 IP 时就会使用真实的 IP。")]),t._v(" "),a("h2",{attrs:{id:"正则表达式拒绝服务攻击-redos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式拒绝服务攻击-redos"}},[t._v("#")]),t._v(" 正则表达式拒绝服务攻击（ReDoS）")]),t._v(" "),a("p",[t._v("ReDoS 是指使用的正则表达式存在缺陷时，攻击者可以使用一个精心构造的字符串来大量地消耗服务器的资源，比如导致正则引擎的灾难性的回溯。")]),t._v(" "),a("p",[t._v("本模块有两种措施可以用来缓解此类攻击。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("本模块使用的 PCRE 库执行正则表达式，PCRE 在编译时即可指定主循环的计数器上限，超出上限自动停止。默认上限为 500000。你也可以在编译时手动调整，详见 "),a("a",{attrs:{href:"https://www.pcre.org/current/doc/html/pcre2build.html#SEC11",target:"_blank",rel:"noopener noreferrer"}},[t._v("pcre2 build man page"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("本模块会缓存所有正则的检查结果（POST 检查除外），这样在不触发缓存淘汰流程的情况下，下次遇到用于攻击的字符串也无需再次执行正则表达式。")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);