if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>i(e,r),c={module:{uri:r},exports:l,require:o};s[r]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AboutView-f8cc8371.js",revision:null},{url:"assets/ContactView-3f9f914f.css",revision:null},{url:"assets/ContactView-84d97520.js",revision:null},{url:"assets/HomeView-45e955ad.js",revision:null},{url:"assets/index-6ca09b7e.css",revision:null},{url:"assets/index-b0a9f51c.js",revision:null},{url:"index.html",revision:"eb68ac95c0f8a511a83a57a70cc0988e"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"09826c59aa47d8366b417d792eccbd47"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
