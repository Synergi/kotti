webpackJsonp([4],{"/8sh":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"color"},[o("h1",[e._v("Colors")]),o("h2",[e._v("Primay Color")]),e._m(0),o("h2",[e._v("Color Palettes")]),o("h3",[e._v("Name convention")]),e._m(1),e._m(2),o("div",{staticClass:"columns"},[o("color-palette",{staticClass:"column col-md-12 col-4",attrs:{colorName:"Pirmary Blue",colors:e.primaryColor}}),o("color-palette",{staticClass:"column col-md-12 col-4",attrs:{colorName:"Green",colors:e.greenColor}}),o("color-palette",{staticClass:"column col-md-12 col-4",attrs:{colorName:"Red",colors:e.redColor}}),o("color-palette",{staticClass:"column col-md-12 col-4",attrs:{colorName:"Purple",colors:e.purpleColor}}),o("color-palette",{staticClass:"column col-md-12 col-4",attrs:{colorName:"Dark Grey",colors:e.darkGrey}}),o("color-palette",{staticClass:"column col-md-12 col-4",attrs:{colorName:"Light Grey",colors:e.lightGrey}})],1),o("color-usage")],1)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",[e._v("Youi uses "),o("code",[e._v("Pirmary Blue")]),e._v(" as main design color which also match to 3YOURMIND brand color. \n  We don't strongly against multiple colors used in one page, but should be limited to less than 20%.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",[e._v("The colors in same palettes has same hue but diffrent saturation and lightness. Color start with primary color, \n      then fills in the spectrum to create a complete and usable palette. Each color name as \n      "),o("code",[e._v("ColorName-number")]),e._v(". "),o("code",[e._v("ColorName")]),e._v(" represents the hue, and "),o("code",[e._v("number")]),e._v(" represents the lightness.\n      Smaller number means lighter, and greater number means darker. \n    ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",[e._v("\n    Palettes\n    "),o("span",{staticClass:"tooltip c-hand",attrs:{"data-tooltip":"Click color to copy"}},[o("i",{staticClass:"yoco"},[e._v("circle_question")])])])}],c={render:a,staticRenderFns:r};t.a=c},Abjh:function(e,t,o){var a=o("xk4t");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o("rjj0")("91d2f78a",a,!0)},"DQ+x":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"color-palette"},[o("div",{staticClass:"color-palette__title",domProps:{textContent:e._s(e.colorName)}}),e._l(e.colors,function(t){return o("div",{key:t.name,staticClass:"color-palette__block c-hand",style:{background:t.code,color:e.textColor(t.name)},on:{click:function(o){e.copyColor(t.code)}}},[o("div",{staticClass:"color-palette__name",domProps:{textContent:e._s(t.name)}}),o("div",{staticClass:"color-palette__code",domProps:{textContent:e._s(t.code)}})])}),e.copySuccess?o("div",{staticClass:"success-message"},[e._v("Copy Successed")]):e._e()],2)},r=[],c={render:a,staticRenderFns:r};t.a=c},XEtb:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Color Usage")]),o("h3",[e._v("Meaning")]),o("ul",[o("li",[o("b",[e._v("Primay Blue:")]),e._v(" primay color, brand color, deliver brand value.")]),o("li",[o("b",[e._v("Green:")]),e._v(" success and process, postivie feedback.")]),o("li",[o("b",[e._v("Red:")]),e._v(" need attention, danger.")]),o("li",[o("b",[e._v("Darkgrey:")]),e._v(" neutral color")]),o("li",[o("b",[e._v("Lightgrey:")]),e._v(" neutral color.")])]),o("h3",[e._v("Dark text on light background")]),o("div",{staticClass:"example-wrapper"},[o("div",{staticClass:"example-content light"},[o("div",{staticStyle:{color:"#3D3D3D"}},[e._v("\n        Default text "),o("code",[e._v("Darkgrey-500")])]),o("div",{staticStyle:{color:"#575757"}},[e._v("\n        Seconday text "),o("code",[e._v("Darkgrey-400")])]),o("div",{staticStyle:{color:"#8A8A8A"}},[e._v("\n        Disabled / hint text "),o("code",[e._v("Darkgrey-300")])])])]),o("p",[e._v("Depends on text meaning and hierarchy, there are three different types:")]),o("ul",[o("li",[o("b",[e._v("Default text")]),e._v(" should be "),o("code",[e._v("Darkgrey-500")])]),o("li",[o("b",[e._v("Secondary text, which is lower in the visual hierarchy,")]),e._v(" uses "),o("code",[e._v("Darkgrey-400")]),e._v(".")]),o("li",[o("b",[e._v("Disabled / hint text")]),e._v(" should be "),o("code",[e._v("Darkgrey-300")]),e._v(".")])]),o("h3",[e._v("Light text on dark background")]),o("div",{staticClass:"example-wrapper"},[o("div",{staticClass:"example-content dark"},[o("div",{staticStyle:{color:"#F8F8F8"}},[e._v("\n        Default text "),o("code",[e._v("LightGrey-300")])]),o("div",{staticStyle:{color:"#DBDBDB"}},[e._v("\n        Seconday text "),o("code",[e._v("Lightgrey-400")])]),o("div",{staticStyle:{color:"#A8A8A8"}},[e._v("\n        Disabled / hint text "),o("code",[e._v("Lightgrey-500")])])])]),o("p",[e._v("Similar to light text, there are three different types:")]),o("ul",[o("li",[o("b",[e._v("Default text")]),e._v(" should be "),o("code",[e._v("Lightgrey-300")])]),o("li",[o("b",[e._v("Secondary text")]),e._v(" uses "),o("code",[e._v("Lightgrey-400")]),e._v(".")]),o("li",[o("b",[e._v("Disabled / hint text")]),e._v(" should be "),o("code",[e._v("Lightgrey-500")]),e._v(".")])]),o("h3",[e._v("Light text on color background")]),o("div",{staticClass:"example-wrapper"},[o("div",{staticClass:"example-content color"},[o("div",{staticStyle:{color:"#FFFFFF"}},[e._v("\n        Default text "),o("code",[e._v("White, Opacity: 100%")])]),o("div",{staticStyle:{color:"#FFFFFF",opacity:".68"}},[e._v("\n        Seconday text "),o("code",[e._v("White, Opacity: 68%")])]),o("div",{staticStyle:{color:"#FFFFFF",opacity:".46"}},[e._v("\n        Disabled / hint text "),o("code",[e._v("White, Opacity: 46%")])])])]),o("p",[e._v("Same as light text, there are three different types:")]),o("ul",[o("li",[o("b",[e._v("Default text")]),e._v(" should be "),o("code",[e._v("white color with opacity 100%")])]),o("li",[o("b",[e._v("Secondary text")]),e._v(" uses "),o("code",[e._v("white color with opacity 68%")]),e._v(".")]),o("li",[o("b",[e._v("Disabled / hint text")]),e._v(" should be "),o("code",[e._v("white color with opacity 46%")]),e._v(".")])]),o("h3",[e._v("Icon color")]),o("div",{staticClass:"example-wrapper"},[o("div",{staticClass:"example-content icon"},[o("div",{staticStyle:{background:"#f8f8f8"}},[o("i",{staticClass:"yoco",staticStyle:{color:"#8A8A8A"}},[e._v("file")]),e._v(" file_name.pdf\n      ")]),o("div",{staticStyle:{color:"#fff",background:"#2C66C4"}},[o("i",{staticClass:"yoco"},[e._v("announce")]),e._v(" Announce new icons.\n      ")]),o("div",{staticStyle:{color:"#2C66C4"}},[o("i",{staticClass:"yoco"},[e._v("print")]),e._v(" Print invoice.\n      ")])])]),o("p",[e._v("Depends on the meaning and visual hierarchy, icon should match the following rules:")]),o("ul",[o("li",[o("b",[e._v("If icon is supplementary to default text:")]),e._v(" Icon color should be "),o("code",[e._v("Darkgrey-300")]),e._v(".")]),o("li",[o("b",[e._v("If icon has color background:")]),e._v(" Icon color is "),o("code",[e._v("White")]),e._v(".")]),o("li",[o("b",[e._v("If text has color or status:")]),e._v(" Icon color should math to its text.")])])])}],c={render:a,staticRenderFns:r};t.a=c},YneK:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("hqhu"),r=o("/8sh"),c=o("K60R"),l=c(a.a,r.a,!1,null,null,null);t.default=l.exports},aUQU:function(e,t,o){"use strict";t.a={name:"color-palette",props:{colorName:String,colors:Array,copySuccess:!1},methods:{copyColor:function(e){var t=this,o=""+e;this.$copyText(o).then(function(e){console.log("success"),t.copySuccess=!0,setTimeout(function(){t.copySuccess=!1},2e3)},function(e){alert("failed")})},textColor:function(e){if("LightGrey-300"===e||"LightGrey-400"===e)return"#3d3d3d"}}}},"cS+/":function(e,t,o){"use strict";function a(e){o("Abjh")}var r=o("XEtb"),c=o("K60R"),l=a,n=c(null,r.a,!1,l,"data-v-0cea15b6",null);t.a=n.exports},hqhu:function(e,t,o){"use strict";var a=o("cS+/"),r=o("mwRC");t.a={components:{ColorPalette:r.a,ColorUsage:a.a},data:function(){return{primaryColor:[{name:"Primay-300",code:"#AFC5E8"},{name:"Primay-400",code:"#3173DE"},{name:"Primay-500",code:"#2C66C4"},{name:"Primay-600",code:"#2659AB"}],greenColor:[{name:"Green-300",code:"#C4E0A5"},{name:"Green-400",code:"#71C716"},{name:"Green-500",code:"#64AD13"},{name:"Green-600",code:"#549410"}],redColor:[{name:"Red-300",code:"#F0A8A8"},{name:"Red-400",code:"#F21D1D"},{name:"Red-500",code:"#D91919"},{name:"Red-600",code:"#BF1717"}],purpleColor:[{name:"Purple-300",code:"#B995CA"},{name:"Purple-400",code:"#932DC2"},{name:"Purple-500",code:"#6C218F"},{name:"Purple-600",code:"#591B75"}],darkGrey:[{name:"Darkgrey-300",code:"#8A8A8A"},{name:"Darkgrey-400",code:"#575757"},{name:"Darkgrey-500",code:"#3D3D3D"},{name:"Darkgrey-600",code:"#242424"}],lightGrey:[{name:"LightGrey-300",code:"#F8F8F8"},{name:"LightGrey-400",code:"#DBDBDB"},{name:"LightGrey-500",code:"#A8A8A8"},{name:"LightGrey-600",code:"#5C5C5C"}]}}}},mwRC:function(e,t,o){"use strict";function a(e){o("xObX")}var r=o("aUQU"),c=o("DQ+x"),l=o("K60R"),n=a,i=l(r.a,c.a,!1,n,"data-v-41d470e7",null);t.a=i.exports},s70n:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".color-palette[data-v-41d470e7]{margin:16px 0;margin:1rem 0}.color-palette__title[data-v-41d470e7]{font-size:1em;color:#8f8f8f;line-height:1.55em}.color-palette__block[data-v-41d470e7]{-webkit-box-sizing:border-box;box-sizing:border-box;height:38.4px;height:2.4rem;font-size:.875em;padding:0 12.8px;padding:0 .8rem;color:#fff;margin:1.6px 0;margin:.1rem 0;display:block}.color-palette__block:hover .color-palette__code[data-v-41d470e7]{display:inline}.color-palette__name[data-v-41d470e7]{line-height:38.4px;line-height:2.4rem;float:left}.color-palette__code[data-v-41d470e7]{text-align:right;line-height:38.4px;line-height:2.4rem;width:50%;float:right;display:none}",""])},xObX:function(e,t,o){var a=o("s70n");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o("rjj0")("291814f0",a,!0)},xk4t:function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".example-wrapper[data-v-0cea15b6]{padding:32px 0;padding:2rem 0;background:#f8f8f8;margin-bottom:16px;margin-bottom:1rem}.example-content[data-v-0cea15b6]{width:90%;padding:12.8px;padding:.8rem;max-width:480px;margin:0 auto}.example-content div[data-v-0cea15b6]{padding:12.8px;padding:.8rem}.example-content.light[data-v-0cea15b6]{background:#fff;border:1px solid #dbdbdb}.example-content.color[data-v-0cea15b6]{background:#2c66c4}.example-content.dark[data-v-0cea15b6]{background:#3d3d3d}.example-content.icon[data-v-0cea15b6]{padding:0;background:#fff;border:1px solid #dbdbdb}",""])}});
//# sourceMappingURL=color.8190e5882e928cffd118.js.map