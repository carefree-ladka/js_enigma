"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3240],{3861:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(4848),t=i(8453);i(2364);const s={title:"Prefix Sum",description:"A comprehensive guide to understanding and implementing Prefix Sum."},u="Prefix Sum",a={id:"tutorial-basics/PrefixSum",title:"Prefix Sum",description:"A comprehensive guide to understanding and implementing Prefix Sum.",source:"@site/docs/tutorial-basics/PrefixSum.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/PrefixSum",permalink:"/docs/tutorial-basics/PrefixSum",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/PrefixSum.mdx",tags:[],version:"current",frontMatter:{title:"Prefix Sum",description:"A comprehensive guide to understanding and implementing Prefix Sum."},sidebar:"tutorialSidebar",previous:{title:"Path Sum (Binary Tree)",permalink:"/docs/tutorial-basics/PathSumBinaryTree"},next:{title:"Queue",permalink:"/docs/tutorial-basics/Queue"}},o={},c=[{value:"How Prefix Sum Works",id:"how-prefix-sum-works",level:2},{value:"Pseudocode",id:"pseudocode",level:3}];function m(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"prefix-sum",children:"Prefix Sum"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.strong,{children:"Prefix Sum"})," is a technique used to simplify the computation of the sum of elements in a subarray. It is particularly useful in problems involving multiple queries about subarray sums, where recalculating the sum from scratch each time would be inefficient."]}),"\n",(0,n.jsx)(r.h2,{id:"how-prefix-sum-works",children:"How Prefix Sum Works"}),"\n",(0,n.jsxs)(r.p,{children:["The idea behind the prefix sum is to preprocess an array so that each element at index ",(0,n.jsx)(r.code,{children:"i"})," in a new array represents the sum of elements from the start of the array up to index ",(0,n.jsx)(r.code,{children:"i"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"pseudocode",children:"Pseudocode"}),"\n",(0,n.jsx)(r.p,{children:"Here\u2019s the pseudocode to compute the prefix sum array:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Javascript",children:'// Function to compute the prefix sum array\r\nfunction computePrefixSum(arr) {\r\n    const prefixSum = new Array(arr.length).fill(0);\r\n    prefixSum[0] = arr[0];\r\n    \r\n    for (let i = 1; i < arr.length; i++) {\r\n        prefixSum[i] = prefixSum[i - 1] + arr[i];\r\n    }\r\n    \r\n    return prefixSum;\r\n}\r\n\r\n// Function to calculate the sum of elements between indices l and r\r\nfunction subarraySum(prefixSum, l, r) {\r\n    if (l === 0) return prefixSum[r];\r\n    return prefixSum[r] - prefixSum[l - 1];\r\n}\r\n\r\n// Example usage:\r\nconst arr = [1, 2, 3, 4, 5];\r\nconst prefixSum = computePrefixSum(arr);\r\n\r\nconsole.log("Prefix Sum Array:", prefixSum); // Output: [1, 3, 6, 10, 15]\r\n\r\nconst sum = subarraySum(prefixSum, 1, 3);\r\nconsole.log("Sum of subarray arr[1..3]:", sum); // Output: 9\n'})})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);