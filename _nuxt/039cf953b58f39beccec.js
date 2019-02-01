(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{482:function(t,s,e){"use strict";e.r(s);var a={name:"KtSwitchDoc",data:function(){return{checkbox1:!1,checkbox2:!1,checkbox3:!1}}},l=e(0),i=Object(l.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Switch")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Default")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtSwitch",{attrs:{label:"Show Message"},model:{value:t.checkbox1,callback:function(s){t.checkbox1=s},expression:"checkbox1"}},[t._v("\n\t\tClick me to switch\n\t")]),t._v(" "),t.checkbox1?e("div",[e("h2",[t._v("Hello World")])]):t._e()],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("h2",[t._v("Indicate Message")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtSwitch",{attrs:{activeMessage:"Show Message",inactiveMessage:"Close"},model:{value:t.checkbox2,callback:function(s){t.checkbox2=s},expression:"checkbox2"}}),t._v(" "),t.checkbox2?e("div",[e("h2",[t._v("Hello World")])]):t._e()],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("h2",[t._v("Postion")]),t._v(" "),e("div",{staticClass:"element-example"},[e("KtSwitch",{attrs:{right:!0},model:{value:t.checkbox3,callback:function(s){t.checkbox3=s},expression:"checkbox3"}},[t._v("\n\t\tRight Swtich\n\t")])],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("h2",[t._v("Usage")]),t._v(" "),e("h3",[t._v("Attributes")]),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Using swtich to change the value between "),s("code",[this._v("true")]),this._v(" or "),s("code",[this._v("false")]),this._v(" quickly.\nSince switch only has two values, using radio or select when values are more than two.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Using "),s("code",[this._v("label")]),this._v(" to define the upper text of switch.\nDefault slot is for customize template.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtSwitch")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"checkbox1"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Show Message"')]),t._v(">")]),t._v("\n\tClick me to switch\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("KtSwitch")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-if")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"checkbox1"')]),t._v(">")]),t._v("\n\t"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("h2")]),t._v(">")]),t._v("Hello World"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("h2")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("activeMessage")]),this._v(" shows when switch value is true.\n"),s("code",[this._v("inactiveMessage")]),this._v(" behaves opposite.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtSwitch")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"checkbox1"')]),t._v("\n\t"),e("span",{staticClass:"hljs-attr"},[t._v("activeMessage")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Show Message"')]),t._v("\n\t"),e("span",{staticClass:"hljs-attr"},[t._v("inactiveMessage")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Close"')]),t._v(" />")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-if")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"checkbox1"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("h2")]),t._v(">")]),t._v("Hello World"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("h2")]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("By default swicth button is located left side of the text,\nusing "),s("code",[this._v("right")]),this._v(" to change the position.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("KtSwitch")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"checkbox3"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":right")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),t._v("\n\tRight Switch\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("KtSwitch")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Accepted values")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("activeMessage")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("text when "),e("code",[t._v("value")]),t._v(" is true")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("String")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inactiveMessage")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("text when "),e("code",[t._v("value")]),t._v(" is false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("String")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("label")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("add label to switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("String")]),t._v(", "),e("code",[t._v("Number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("right")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("set switch button to the right")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("value of switch")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("—")])])])])}],!1,null,null,null);i.options.__file="switches.vue";s.default=i.exports}}]);