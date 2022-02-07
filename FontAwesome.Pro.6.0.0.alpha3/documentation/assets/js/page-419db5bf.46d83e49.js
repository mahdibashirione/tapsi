(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{377:function(t,s,a){"use strict";a.r(s);var e=a(37),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("Have you ever wanted to be like Superman and change your look by jumping in a phone booth for a minute? Well, now you can! Or at least with your icons... Our new fast style switching feature is the icon equivalent.")])]),t._v(" "),a("div",{staticClass:"message warning with-icon"},[a("i",{staticClass:"fa-solid fa-exclamation-triangle decorative"}),a("h4",{staticClass:"title"},[t._v("Advanced Terrian Ahead!")]),a("p",[t._v("This method is not for the faint of heart or front-end development. If you go this route, you will have to be committed - or add the style classes back to your icons if you change your mind.")])]),a("p",[t._v("Now with Version 6, you can quickly "),a("strong",[t._v("swap the global default style")]),t._v(" you use for your site or app. Here's how to set your project up to do that.")]),t._v(" "),a("h3",{attrs:{id:"add-the-fa-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-the-fa-class"}},[t._v("#")]),t._v(" Add the "),a("code",[t._v("fa")]),t._v(" class")]),t._v(" "),a("p",[t._v("You'll need to add the "),a("code",[t._v("fa")]),t._v(" class and leave off any style classes from your icons, like this:")]),t._v(" "),a("div",{staticClass:"language-html codeblock line-numbers extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- add `fa` and leave off style classes --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa fa-mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"fast-style-switching-with-web-fonts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-style-switching-with-web-fonts"}},[t._v("#")]),t._v(" Fast Style Switching with Web Fonts")]),t._v(" "),a("h3",{attrs:{id:"setting-your-default-to-solid-regular-light-or-thin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-your-default-to-solid-regular-light-or-thin"}},[t._v("#")]),t._v(" Setting your default to Solid, Regular, Light, or Thin")]),t._v(" "),a("p",[t._v("To switch between any of the core Font Awesome styles, you'll set a couple of CSS custom properties on the "),a("code",[t._v(":root")]),t._v(" in your app or site's CSS, like this:")]),t._v(" "),a("div",{staticClass:"language-css codeblock line-numbers extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--fa-style-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Font Awesome 6 Pro"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--fa-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 900"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Change the value of "),a("code",[t._v("--fa-style")]),t._v(" to match the style you want. Here's a handy reference:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Style name")]),t._v(" "),a("th",[t._v("Font Weight")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Solid")]),t._v(" "),a("td",[t._v("900")])]),t._v(" "),a("tr",[a("td",[t._v("Regular")]),t._v(" "),a("td",[t._v("400")])]),t._v(" "),a("tr",[a("td",[t._v("Light")]),t._v(" "),a("td",[t._v("300")])]),t._v(" "),a("tr",[a("td",[t._v("Thin")]),t._v(" "),a("td",[t._v("100")])])])]),t._v(" "),a("p",[t._v("Note: The "),a("code",[t._v("fa")]),t._v(" class is initally set to default to the solid style.")]),t._v(" "),a("p",[t._v("If you set a style on an icon in addition to the "),a("code",[t._v("fa")]),t._v(" default, the style will override that default. Here's an example:")]),t._v(" "),a("div",{staticClass:"language-html codeblock line-numbers attached-bottom extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- with just the default `fa` --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa fa-mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- with the default `fa` and the `fa-regular` style --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa fa-regular fa-mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"live-example padding-lg margin-bottom-xl",staticStyle:{"background-color":"var(--white)","border-radius":"0 0 var(--border-radius-sm) var(--border-radius-sm)"}},[a("div",{staticClass:" display-flex flex-content-around flex-items-center",staticStyle:{"font-size":"2rem"}},[a("i",{staticClass:"fa fa-mask"}),t._v(" "),a("i",{staticClass:"fa fa-regular fa-mask"})])]),t._v(" "),a("h3",{attrs:{id:"setting-your-default-to-duotone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-your-default-to-duotone"}},[t._v("#")]),t._v(" Setting your default to Duotone")]),t._v(" "),a("p",[t._v("Duotone is a little special since it is made up of two parts. If you want to use Duotone as your default you'll "),a("strong",[t._v("need to use a preprocessor like Sass or Less")]),t._v(".")]),t._v(" "),a("p",[t._v("Add the root CSS variables but set the "),a("code",[t._v("--fa-style-family")]),t._v(" to Duotone, like this:")]),t._v(" "),a("div",{staticClass:"language-css codeblock line-numbers extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--fa-style-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Font Awesome 6 Duotone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--fa-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 900"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("And then extend the "),a("code",[t._v("fa")]),t._v(" class to include the duotone classes:")]),t._v(" "),a("h4",{attrs:{id:"with-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-sass"}},[t._v("#")]),t._v(" With Sass")]),t._v(" "),a("div",{staticClass:"language-scss codeblock line-numbers extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fa ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@extend")]),t._v(" .fa-duotone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"with-less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-less"}},[t._v("#")]),t._v(" With Less")]),t._v(" "),a("div",{staticClass:"language-less codeblock line-numbers extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fa")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  &"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".fa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("duotone all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"fast-style-switching-with-svg-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-style-switching-with-svg-js"}},[t._v("#")]),t._v(" Fast Style Switching with SVG+JS")]),t._v(" "),a("p",[t._v("In order to use fast switching with SVG+JS you'll need to set the "),a("code",[t._v("data-style-default")]),t._v(" config setting to whichever style you want to make default.")]),t._v(" "),a("p",[t._v("If you're using a "),a("code",[t._v("<script>")]),t._v(" tag you'll set the "),a("code",[t._v("data-style-default")]),t._v(" setting in the tag.")]),t._v(" "),a("div",{staticClass:"language-javascript codeblock line-numbers extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path_to_fontawesome_javascript"')]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desired_style"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For example, a default light style will look like this")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path_to_fontawesome_javascript"')]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fa-light"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("If you can’t add any attributes to a "),a("code",[t._v("<script>")]),t._v(" tag you can set the configuration like this:")]),t._v(" "),a("div",{staticClass:"language-html codeblock line-numbers extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" The settings you provide will be merged "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" settings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      FontAwesomeConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        styleDefault"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fa-light"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path_to_fontawesome_javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"more-styles-in-v6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-styles-in-v6"}},[t._v("#")]),t._v(" More Styles in v6")]),t._v(" "),a("p",[t._v("Now you're set to switch over to any of the new styles we release with Version 6. Check out "),a("RouterLink",{attrs:{to:"/docs/learn/styles/"}},[t._v("all the style options available")]),t._v(". Pretty super!")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);