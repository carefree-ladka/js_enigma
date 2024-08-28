"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9849],{3499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=n(4848),r=n(8453);const s={},l="Fisher-Yates Shuffle Algorithm",a={id:"tutorial-basics/FisherYates",title:"Fisher-Yates Shuffle Algorithm",description:"The Fisher-Yates Shuffle algorithm is an efficient method for randomly shuffling a finite sequence of items. It ensures that each permutation of the sequence is equally likely.",source:"@site/docs/tutorial-basics/FisherYates.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/FisherYates",permalink:"/docs/tutorial-basics/FisherYates",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/FisherYates.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fenwick Tree Tutorial",permalink:"/docs/tutorial-basics/Fenwick"},next:{title:"Flood Fill Algorithm",permalink:"/docs/tutorial-basics/FloodFill"}},o={},h=[{value:"Overview",id:"overview",level:2},{value:"Algorithm Steps",id:"algorithm-steps",level:2},{value:"Time Complexity",id:"time-complexity",level:2},{value:"JavaScript Implementation",id:"javascript-implementation",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"fisher-yates-shuffle-algorithm",children:"Fisher-Yates Shuffle Algorithm"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Fisher-Yates Shuffle"})," algorithm is an efficient method for randomly shuffling a finite sequence of items. It ensures that each permutation of the sequence is equally likely."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The Fisher-Yates Shuffle algorithm iterates through the sequence from the end to the beginning, swapping each element with a randomly chosen element that comes before it (including itself). This ensures that all permutations of the sequence are equally probable."}),"\n",(0,i.jsx)(t.h2,{id:"algorithm-steps",children:"Algorithm Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Initialization"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Start with the last element of the sequence."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Iteration"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For each element, generate a random index from the current position to the beginning of the sequence."}),"\n",(0,i.jsx)(t.li,{children:"Swap the current element with the element at the random index."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Termination"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Continue until you have processed the entire sequence."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,i.jsx)(t.p,{children:"The time complexity of the Fisher-Yates Shuffle algorithm is O(n), where n is the number of items in the sequence. This is because each element is swapped exactly once."}),"\n",(0,i.jsx)(t.h2,{id:"javascript-implementation",children:"JavaScript Implementation"}),"\n",(0,i.jsx)(t.p,{children:"Here is a simple JavaScript implementation of the Fisher-Yates Shuffle algorithm:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"function fisherYatesShuffle(array) {\r\n  let m = array.length;\r\n  \r\n  // While there remain elements to shuffle\r\n  while (m > 1) {\r\n    // Pick a remaining element\r\n    const i = Math.floor(Math.random() * m--);\r\n    \r\n    // Swap it with the current element\r\n    [array[m], array[i]] = [array[i], array[m]];\r\n  }\r\n  \r\n  return array;\r\n}\r\n\r\n// Example usage\r\nconst array = [1, 2, 3, 4, 5];\r\nconst shuffledArray = fisherYatesShuffle(array);\r\nconsole.log(shuffledArray); // Output: [3, 1, 5, 4, 2] (random order)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);