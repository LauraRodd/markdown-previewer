(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{13:function(e,a,t){e.exports=t(20)},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),i=t.n(o),l=t(8),c=t(9),s=t(12),m=t(10),d=t(5),u=t(11),h=t(18);h.setOptions({breaks:!0});var v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={markdown:w},n}return Object(c.a)(t,[{key:"updateMarkdown",value:function(e){this.setState({markdown:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container mb-3"},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h1",null," ",r.a.createElement(d.a,{className:"text-align-center",variant:"light"},"Markdown Previewer")),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-6"}," ",r.a.createElement("div",{className:"col text-center"},r.a.createElement("h4",null,r.a.createElement(d.a,{className:"text-align-center",variant:"dark"},"Markdown Editor")),r.a.createElement("div",{className:"mark-input"},r.a.createElement("textarea",{id:"editor",className:"input",style:{width:"100%",height:"400px",margin:"1em auto",padding:"2em",backgroundColor:"#19191a",color:"#f0f0f0",borderRadius:"5px",fontFamily:"Source Code Pro",fontSize:"0.8rem"},value:this.state.markdown,onChange:function(a){e.updateMarkdown(a.target.value)}}," ")))),r.a.createElement("div",{className:"col-md-6"}," ",r.a.createElement("div",{className:"col text-center"},r.a.createElement("h4",null,r.a.createElement(d.a,{className:"text-align-center",variant:"info"},"Preview"))),r.a.createElement("div",{id:"preview",style:{width:"100%",backgroundColor:"#95d2de",margin:"1.2em auto",padding:"1.5em",borderRadius:"5px",overflow:"auto",height:"400px"},dangerouslySetInnerHTML:{__html:h(this.state.markdown)}}))),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col text-center"},r.a.createElement(u.a,{variant:"danger",onClick:function(a){e.updateMarkdown("")}},"Clear all")))))}}]),t}(r.a.Component),w="# This is a heading\n\n## This is a sub-heading...\n  \nHere is some in-linecode: `<h1>Hello World</h1>`.\n\nAnd here some multi-line code:\n```\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can add style to your text by making it **bold**...\n_italic_.\nOr... **_both!_**\nAnd! ~~crossing stuff out~~.\n\nThere are also\n> Block Quotes!\n\nand much more! Give it a try ;)\n\n---\n\n_Built by [Laura](https://codepen.io/laura-rodd) with [**React**](https://reactjs.org/)_\n";Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(19);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.fb37bf4f.chunk.js.map