"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8061],{3116:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var t=r(4848),a=r(8453);const i={title:"Kadane's Algorithm Tutorial",description:"A comprehensive guide to Kadane's Algorithm with code examples in JavaScript."},o="Kadane's Algorithm Tutorial",s={id:"tutorial-basics/Kadane",title:"Kadane's Algorithm Tutorial",description:"A comprehensive guide to Kadane's Algorithm with code examples in JavaScript.",source:"@site/docs/tutorial-basics/Kadane.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Kadane",permalink:"/js_enigma/docs/tutorial-basics/Kadane",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/Kadane.mdx",tags:[],version:"current",frontMatter:{title:"Kadane's Algorithm Tutorial",description:"A comprehensive guide to Kadane's Algorithm with code examples in JavaScript."},sidebar:"tutorialSidebar",previous:{title:"K-Way Merge Pattern",permalink:"/js_enigma/docs/tutorial-basics/KWayMerge"},next:{title:"LRU Cache Design",permalink:"/js_enigma/docs/tutorial-basics/LRUcache"}},l={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Algorithm Overview",id:"algorithm-overview",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Kadane Algorithm on 2D Grid",id:"kadane-algorithm-on-2d-grid",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"kadanes-algorithm-tutorial",children:"Kadane's Algorithm Tutorial"})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Kadane's Algorithm is an efficient method for finding the maximum sum subarray in a given array of integers. It works in linear time, making it suitable for large arrays. The algorithm is often used in various applications, such as financial analysis and computer science problems."}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsx)(n.p,{children:"Given an array of integers, the task is to find the contiguous subarray with the maximum sum and return this sum."}),"\n",(0,t.jsx)(n.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Subarray"}),": A contiguous part of an array."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Maximum Sum"}),": The highest possible sum of a subarray."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"algorithm-overview",children:"Algorithm Overview"}),"\n",(0,t.jsx)(n.p,{children:"Kadane's Algorithm works by iterating through the array and maintaining two variables:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Current Sum (",(0,t.jsx)(n.code,{children:"currSum"}),")"]}),": The maximum sum of the subarray that ends at the current position."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Global Maximum (",(0,t.jsx)(n.code,{children:"maxSum"}),")"]}),": The maximum sum encountered so far across all subarrays."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For each element in the array, the algorithm updates ",(0,t.jsx)(n.code,{children:"currSum"})," and ",(0,t.jsx)(n.code,{children:"maxSum"})," as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"currSum"})," is updated to be the maximum of the current element alone or the current element plus the previous ",(0,t.jsx)(n.code,{children:"currSum"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maxSum"})," is updated to be the maximum of itself and ",(0,t.jsx)(n.code,{children:"currSum"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Here\u2019s a JavaScript implementation of Kadane's Algorithm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Javascript",children:"const kadane1D = (nums) => {\r\n  if (nums.length === 0) return 0;\r\n\r\n  let currSum = nums[0];\r\n  let maxSum = nums[0];\r\n\r\n  for (let i = 1; i < nums.length; i++) {\r\n    currSum = Math.max(nums[i], currSum + nums[i]);\r\n    maxSum = Math.max(maxSum, currSum);\r\n  }\r\n\r\n  return maxSum;\r\n}\r\n\r\n// Example Usage\r\nconst nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];\r\nconsole.log(kadane(nums)); // Output: 6 (4 + (-1) + 2 + 1)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"kadane-algorithm-on-2d-grid",children:"Kadane Algorithm on 2D Grid"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"function kadane2D(matrix) {\r\n  const rows = matrix.length;\r\n  const cols = matrix[0].length;\r\n  let maxSum = -Infinity;\r\n\r\n  for (let topRow = 0; topRow < rows; topRow++) {\r\n    // Initialize a 1D array to store the sum of elements between two rows\r\n    let temp = Array(cols).fill(0);\r\n\r\n    for (let bottomRow = topRow; bottomRow < rows; bottomRow++) {\r\n      // Add elements between topRow and bottomRow to the temp array\r\n      for (let col = 0; col < cols; col++) {\r\n        temp[col] += matrix[bottomRow][col];\r\n      }\r\n\r\n      // Find the maximum sum subarray in this 1D array using Kadane's Algorithm\r\n      const currentMaxSum = kadane1D(temp);\r\n      maxSum = Math.max(maxSum, currentMaxSum);\r\n    }\r\n  }\r\n\r\n  return maxSum;\r\n}\r\n\r\n// Example usage:\r\nconst matrix = [\r\n  [1, 2, -1, -4, -20],\r\n  [-8, -3, 4, 2, 1],\r\n  [3, 8, 10, 1, 3],\r\n  [-4, -1, 1, 7, -6]\r\n];\r\n\r\nconsole.log(kadane2D(matrix)); // Output: 29 (submatrix from (1, 1) to (3, 3))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(6540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);