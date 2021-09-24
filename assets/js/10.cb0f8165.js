(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{399:function(e,t,s){"use strict";s.r(t);var a=s(46),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[e._v("#")]),e._v(" Log")]),e._v(" "),s("h2",{attrs:{id:"blocking-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blocking-log"}},[e._v("#")]),e._v(" Blocking Log")]),e._v(" "),s("p",[e._v("The blocking log is stored in "),s("code",[e._v("error.log")]),e._v(". The log level of the blocking log is "),s("code",[e._v("ALERT")]),e._v(".\nThe format is "),s("code",[e._v("ngx_waf: [rule type][specific rule triggered]")]),e._v(".")]),e._v(" "),s("p",[e._v("You can use the following command to quickly view the blocking log.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /path/to/error.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" ngx_waf:\n")])])]),s("p",[e._v("Here are two examples.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('2020/01/20 22:56:30 [alert] 6666#0: *30 ngx_waf: [BLACK-URL][(?i)(?:/\\.env$)], client: 192.168.1.1, server: example.com, request: "GET /v1/.env HTTP/1.1", host: "example.com", referrer: "http:/example.com/v1/.env"\n\n2020/01/20 22:58:40 [alert] 6667#0: *11 ngx_waf: [BLACK-POST][(?i)(?:select.+(?:from|limit))], client: 192.168.1.1, server: example.com, request: "POST /xmlrpc.php HTTP/1.1", host: "example.com", referrer: "https://example.com/"\n')])])]),s("h2",{attrs:{id:"debugging-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-log"}},[e._v("#")]),e._v(" Debugging Log")]),e._v(" "),s("p",[e._v("When you adjust the error log level to "),s("code",[e._v("debug")]),e._v(" in the nginx configuration file,\nthe debug log will be output in "),s("code",[e._v("error.log")]),e._v(" for troubleshooting purposes.\nfor troubleshooting purposes. The format is "),s("code",[e._v("ngx_waf_debug: debug information")]),e._v(".")]),e._v(" "),s("p",[e._v("You can use the following command to quickly view the debug log.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /path/to/error.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" ngx_waf_debug:\n")])])]),s("p",[e._v("Below is a typical modulation log that illustrates the flow of a CC defense detection.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2021/02/21 20:35:33 [debug] 6666#0: *1 ngx_waf_debug: Start the CC inspection process.\n2021/02/21 20:35:33 [debug] 6666#0: *1 ngx_waf_debug: The module context has been obtained.\n2021/02/21 20:35:33 [debug] 6666#0: *1 ngx_waf_debug: The configuration of the module has been obtained.\n2021/02/21 20:35:33 [debug] 6666#0: *1 ngx_waf_debug: Detection has begun.\n2021/02/21 20:35:33 [debug] 6666#0: *1 ngx_waf_debug: Shared memory is locked.\n2021/02/21 20:35:33 [debug] 6666#0: *1 ngx_waf_debug: Shared memory is unlocked.\n2021/02/21 20:35:33 [debug] 6666#0: *1 ngx_waf_debug: Detection is over.\n2021/02/21 20:35:33 [debug] 6666#0: *1 ngx_waf_debug: The CC detection process is fully completed.\n")])])]),s("h2",{attrs:{id:"customised-log-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customised-log-format"}},[e._v("#")]),e._v(" Customised Log Format")]),e._v(" "),s("p",[e._v("nginx allows custom log formats, and a server block can write to multiple log files at the same time,\ngiving us the opportunity to customise our log formats.\nThis module provides some "),s("RouterLink",{attrs:{to:"/advance/variable.html"}},[e._v("built-in Variables")]),e._v("\nthat can be used to customise the blocking log with a little effort.")],1),e._v(" "),s("p",[e._v("Here is an example.")]),e._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[e._v("...\n\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    ...\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("log_format")]),e._v("  main    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_addr")]),e._v(" - "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_user")]),e._v(" ["),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$time_local]")]),e._v(' "'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),e._v("\" '")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$status")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$body_bytes_sent")]),e._v(' "'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_referer")]),e._v("\" '")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'\""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_user_agent")]),e._v('" "'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_x_forwarded_for")]),e._v("\"'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("log_format")]),e._v(" yaml     "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'- remote_addr: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_addr")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  remote_user: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_user")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  time_local: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$time_local")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  request: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  status: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$status")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  body_bytes_sent: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$body_bytes_sent")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  http_referer: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_referer")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  http_user_agent: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_user_agent")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  http_x_forwarded_for: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_x_forwarded_for")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  waf_blocked: "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$waf_blocked")]),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  waf_spend: "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$waf_spend")]),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  waf_rule_type: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$waf_rule_type")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")]),e._v("\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'  waf_rule_details: \""),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$waf_rule_details")]),e._v('"'),s("span",{pre:!0,attrs:{class:"token escape entity"}},[e._v("\\n")]),e._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        ...\n\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v("  logs/access.log  main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v("  logs/access.yml  yaml   if="),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$waf_log")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v("  logs/waf.yml     yaml   if="),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$waf_blocking_log")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n...\n")])])]),s("p",[e._v("The above configuration stores the normal log format in "),s("code",[e._v("logs/access.log")]),e._v(",\nwhile the yaml format logs are stored in "),s("code",[e._v("logs/access.yml")]),e._v(".\nIt is worth noting that yaml format logs use the three built-in variables provided by the module.\nYou can easily read `logs/access.The above configuration will have the following effect.")]),e._v(" "),s("ul",[s("li",[e._v("normal access logs are written to "),s("code",[e._v("logs/access.log")]),e._v(".")]),e._v(" "),s("li",[e._v("YAML-formatted access logs are written to "),s("code",[e._v("logs/access.yml")]),e._v(".")]),e._v(" "),s("li",[e._v("YAML-formatted intercept logs are written to "),s("code",[e._v("logs/waf.yml")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Log analysis")]),e._v(" "),s("p",[e._v("You can customize the log format, and then programmatically analyze it and make statistical graphs.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("ABOUT YAML FORMAT")]),e._v(" "),s("p",[e._v("YAML is a highly readable data serialisation format that is very easy to learn.\nAs long as you can read JSON, learning YAML will be a snap.\nYou can search for a description of the YAML format yourself.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);