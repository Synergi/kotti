(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{459:function(n,e){n.exports='<section><h1>Kotti Design System</h1>\n<h2>Overview</h2>\n<p>This design system helps to unify our design language and provides the\ndocumentation for further product design decisions. The Kotti design system has\ntwo main parts: foundation and components.</p>\n<p>The foundation is higher level and works as a guideline for the whole system,\nwhich defines the layout, color, icons, typography and writing style. It also\ncreates styles and characteristics which are different from other design\nsystems.</p>\n<p>Components are more concrete elements. They are pre-defined and cannot be\nchanged in most cases. These components include banners, buttons, drawers and\nmore.</p>\n<h2>Design Principles</h2>\n<p><strong>Keen:</strong> The design should encourage users to engage with the product.</p>\n<p><strong>Okay:</strong> It’s okay not to follow the foundation if there\'s good reason. It’s\nokay to break the design principles when it’s the only way to solve the\nrequirement.</p>\n<p><strong>Transparent:</strong> Making the design easy to perceive or detect, user can process\nsmoothly without being aware of its presence.</p>\n<p><strong>Timely:</strong> The design need to response and help user finish their task in a\ntimely matter.</p>\n<p><strong>Intuitive:</strong> The design should be intuitive and easy to understand, and\ndecrease the learning curve.</p>\n<p><a href="https://3yourmind.github.io/kotti/">Read the document online</a></p>\n<h2>Project Scope</h2>\n<p>Kotti Design System includes:</p>\n<table>\n<thead>\n<tr>\n<th style="text-align:left">Item</th>\n<th style="text-align:left">Meaning</th>\n<th style="text-align:left">Purpose</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:left">Design Guideline</td>\n<td style="text-align:left">A suggestion documentation for non-developer to understand the design system</td>\n<td style="text-align:left">Give UX/UI designer a single source of truth and make sure design is consistent</td>\n</tr>\n<tr>\n<td style="text-align:left">Kotti-UI Components</td>\n<td style="text-align:left">Modular and functional components based on design guideline</td>\n<td style="text-align:left">Replace the shared components in our project</td>\n</tr>\n<tr>\n<td style="text-align:left">Usage Documents</td>\n<td style="text-align:left">Example based documentation</td>\n<td style="text-align:left">Help developer to use the component</td>\n</tr>\n<tr>\n<td style="text-align:left">Test</td>\n<td style="text-align:left">UI Test</td>\n<td style="text-align:left">—</td>\n</tr>\n</tbody>\n</table>\n<h2>Folder Structure</h2>\n<pre><code class="language-text">kotti\n├─ docs // nuxt.js managed design guideline &amp; usage documentation\n│  ├─ assets\n|  ├─ pages\n├─ packages\n│  ├─ kotti-style // scss file documentation\n│  └─ kotti-button\n│     ├─ src\n│     ├─ index.js\n├─ package.json\n├─ CHANGELOG.md\n└─ README.md\n</code></pre>\n<h2>Install</h2>\n<p><a href="https://www.npmjs.com/package/@3yourmind/kotti-ui"><img src="https://badge.fury.io/js/%403yourmind%2Fkotti-ui.svg" alt="npm version"></a></p>\n<pre><code class="language-bash"><span class="hljs-comment"># add kotti-ui package to your project</span>\nyarn add @3yourmind/kotti-ui\n</code></pre>\n<pre><code class="language-js"><span class="hljs-comment">// in main.js</span>\n<span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>\n<span class="hljs-keyword">import</span> KottiUI <span class="hljs-keyword">from</span> <span class="hljs-string">\'kotti-ui\'</span>\n\n<span class="hljs-comment">// from v.0.0.4 kotti-ui includes kotti-style</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'@3yourmind/kotti-ui/dist/KottiUI.css\'</span>\n\nVue.use(KottiUI)\n</code></pre>\n<h2>Build</h2>\n<pre><code class="language-bash"><span class="hljs-comment"># install dependencies</span>\nyarn install\n\n<span class="hljs-comment"># build kott-ui</span>\nyarn run build:kotti\n\n<span class="hljs-comment"># generate kotti-docs for github pages to /gh-pages</span>\nyarn run build:gh-pages\n</code></pre>\n<h2>Develop</h2>\n<pre><code class="language-bash"><span class="hljs-comment"># install dependencies</span>\nyarn install\n\n<span class="hljs-comment"># serve with hot reload at localhost:3000</span>\nyarn dev:docs\n\n<span class="hljs-comment"># deploy documents on github</span>\nyarn deploy:docs\n</code></pre>\n</section>\n'},495:function(n,e,t){"use strict";t.r(e);var s=t(459),a=t.n(s),o={name:"IndexPage",layout:"fullpage",computed:{KottiReadMe:function(){return a.a}}},i=t(0),l=Object(i.a)(o,function(){var n=this.$createElement;return(this._self._c||n)("div",{domProps:{innerHTML:this._s(this.KottiReadMe)}})},[],!1,null,null,null);l.options.__file="index.vue";e.default=l.exports}}]);