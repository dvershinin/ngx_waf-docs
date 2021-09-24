(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{412:function(t,e,a){"use strict";a.r(e);var r=a(46),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"compatibility-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-statement"}},[t._v("#")]),t._v(" Compatibility Statement")]),t._v(" "),a("h2",{attrs:{id:"os-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-compatibility"}},[t._v("#")]),t._v(" OS Compatibility")]),t._v(" "),a("p",[t._v("Compatibility with operating systems other than Linux is not guaranteed.")]),t._v(" "),a("h2",{attrs:{id:"nginx-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-compatibility"}},[t._v("#")]),t._v(" Nginx Compatibility")]),t._v(" "),a("p",[t._v("This module only guarantees compatibility with "),a("code",[t._v("nginx-1.18.0")]),t._v(" or newer versions.")]),t._v(" "),a("h2",{attrs:{id:"module-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-compatibility"}},[t._v("#")]),t._v(" Module Compatibility")]),t._v(" "),a("h3",{attrs:{id:"ngx-http-rewrite-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ngx-http-rewrite-module"}},[t._v("#")]),t._v(" ngx_http_rewrite_module")]),t._v(" "),a("p",[t._v("There is a compatibility issue between ngx_waf and\n"),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_rewrite_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngx_http_rewrite_module"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("The module does not take effect if the request directive "),a("code",[t._v("return")]),t._v(" takes effect.")]),t._v(" "),a("li",[t._v("The module does not take effect if the request directive "),a("code",[t._v("rewrite")]),t._v(" results in a return (e.g., a 302 redirect).")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Replace 'rewrite' with 'try_files'.")]),t._v(" "),a("p",[t._v("You may have the following configuration.")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" (! -e "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rewrite (.*) /index.php\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You can replace it with the following configuration.")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.php")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("See "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite",target:"_blank",rel:"noopener noreferrer"}},[t._v("rewrite"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_",target:"_blank",rel:"noopener noreferrer"}},[t._v("try_files"),a("OutboundLink")],1),t._v(" for details http_core_module.html#try_files).")])])])}),[],!1,null,null,null);e.default=i.exports}}]);