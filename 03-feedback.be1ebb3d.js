var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(S,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=i}function S(){var e=m();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return v?d(n,i-(e-c)):n}(e))}function w(e){return u=void 0,y&&r?b(e):(r=o=void 0,a)}function O(){var e=m(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(v)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(g(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(m())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),b=document.querySelector('input[name="email"]'),h=document.querySelector('textarea[name="message"');y.addEventListener("input",t((e=>{const t={email:b.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:b.value,message:h.value}),y.reset(),localStorage.removeItem("feedback-form-state")}));const j=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");j&&(b.value=j.email,h.value=j.message);
//# sourceMappingURL=03-feedback.be1ebb3d.js.map
