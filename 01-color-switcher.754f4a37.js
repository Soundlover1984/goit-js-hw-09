const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let r=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}t.addEventListener("click",(function(){r=setInterval(n,1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.754f4a37.js.map
