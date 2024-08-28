"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7023],{4328:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(4848),t=n(8453);const s={title:"Reservoir Sampling"},a=void 0,l={id:"tutorial-basics/ReservoirSampling",title:"Reservoir Sampling",description:"Reservoir Sampling is an algorithm used for randomly selecting a fixed number of items from a stream or a large dataset when the total number of items is not known in advance. It ensures that each item in the stream has an equal probability of being included in the sample.",source:"@site/docs/tutorial-basics/ReservoirSampling.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/ReservoirSampling",permalink:"/docs/tutorial-basics/ReservoirSampling",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/ReservoirSampling.mdx",tags:[],version:"current",frontMatter:{title:"Reservoir Sampling"},sidebar:"tutorialSidebar",previous:{title:"Quick Sort",permalink:"/docs/tutorial-basics/QuickSort"},next:{title:"In-Place Reversal of a Linked List",permalink:"/docs/tutorial-basics/ReverseLinkedList"}},o={},m=[{value:"Overview",id:"overview",level:2},{value:"Algorithm Steps",id:"algorithm-steps",level:2},{value:"Time Complexity",id:"time-complexity",level:2},{value:"JavaScript Implementation",id:"javascript-implementation",level:2},{value:"Problems",id:"problems",level:3}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Reservoir Sampling"})," is an algorithm used for randomly selecting a fixed number of items from a stream or a large dataset when the total number of items is not known in advance. It ensures that each item in the stream has an equal probability of being included in the sample."]}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:'The Reservoir Sampling algorithm works by maintaining a "reservoir" of a fixed size and randomly replacing items in the reservoir as new items are encountered in the stream. The key idea is to ensure that each item in the stream has an equal chance of being included in the final sample.'}),"\n",(0,r.jsx)(i.h2,{id:"algorithm-steps",children:"Algorithm Steps"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Initialization"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Initialize a reservoir of size k where k is the number of items to be sampled."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Fill the Reservoir"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"For the first k items in the stream, simply add them to the reservoir."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Replace Items"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"For each subsequent item (i.e., for the (k+1)th item and beyond), generate a random number between 0 and the current index (inclusive)."}),"\n",(0,r.jsx)(i.li,{children:"If the random number is less than k, replace a randomly chosen item in the reservoir with the new item."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Output"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Continue until the end of the stream is reached. The reservoir will contain the sampled items."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,r.jsx)(i.p,{children:"The time complexity of Reservoir Sampling is O(1) for each item in the stream. This is because each item is processed in constant time, and the algorithm maintains a fixed-size reservoir."}),"\n",(0,r.jsx)(i.h2,{id:"javascript-implementation",children:"JavaScript Implementation"}),"\n",(0,r.jsx)(i.p,{children:"Here is a JavaScript implementation of Reservoir Sampling:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-javascript",children:"function reservoirSampling(stream, k) {\r\n  const reservoir = [];\r\n  \r\n  // Fill the reservoir with the first k items from the stream\r\n  for (let i = 0; i < k; i++) {\r\n    reservoir.push(stream[i]);\r\n  }\r\n  \r\n  // Process the rest of the items\r\n  for (let i = k; i < stream.length; i++) {\r\n    const j = Math.floor(Math.random() * (i + 1));\r\n    if (j < k) {\r\n      reservoir[j] = stream[i];\r\n    }\r\n  }\r\n  \r\n  return reservoir;\r\n}\r\n\r\n// Example usage\r\nconst stream = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\r\nconst k = 3;\r\nconsole.log(reservoirSampling(stream, k)); // Output: Random sample of 3 items from the stream\n"})}),"\n",(0,r.jsx)(i.h3,{id:"problems",children:"Problems"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://leetcode.com/problems/shuffle-an-array",children:"Random Pick Index"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"https://leetcode.com/problems/linked-list-random-node",children:"Linked List Random Node"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var r=n(6540);const t={},s=r.createContext(t);function a(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);