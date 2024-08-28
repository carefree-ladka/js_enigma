"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9123],{1225:(t,r,e)=>{e.r(r),e.d(r,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=e(4848),i=e(8453);const s={title:"Knuth-Morris-Pratt (KMP) Algorithm"},a=void 0,o={id:"tutorial-basics/KMPAlgo",title:"Knuth-Morris-Pratt (KMP) Algorithm",description:"Brute-Force String Matching",source:"@site/docs/tutorial-basics/KMPAlgo.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/KMPAlgo",permalink:"/js_enigma/docs/tutorial-basics/KMPAlgo",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/KMPAlgo.mdx",tags:[],version:"current",frontMatter:{title:"Knuth-Morris-Pratt (KMP) Algorithm"},sidebar:"tutorialSidebar",previous:{title:"Interval Problems",permalink:"/js_enigma/docs/tutorial-basics/Intervals"},next:{title:"K-Way Merge Pattern",permalink:"/js_enigma/docs/tutorial-basics/KWayMerge"}},h={},l=[{value:"Brute-Force String Matching",id:"brute-force-string-matching",level:3},{value:"Algorithm Steps",id:"algorithm-steps",level:4},{value:"Knuth-Morris-Pratt (KMP) Algorithm",id:"knuth-morris-pratt-kmp-algorithm",level:2},{value:"Overview",id:"overview",level:3},{value:"Algorithm Steps",id:"algorithm-steps-1",level:3},{value:"Preprocessing the Pattern",id:"preprocessing-the-pattern",level:3}];function c(t){const r={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"brute-force-string-matching",children:"Brute-Force String Matching"}),"\n",(0,n.jsx)(r.p,{children:"The brute-force string matching algorithm is the simplest approach to solving the problem. It checks for the presence of the pattern at every possible position in the text."}),"\n",(0,n.jsx)(r.h4,{id:"algorithm-steps",children:"Algorithm Steps"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Iterate through the Text"}),": For each position in the text, check if the pattern matches starting from that position."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Check for Match"}),": Compare the characters of the pattern with the corresponding characters in the text."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Record Matches"}),": If a match is found, record the starting index of the match."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Code Example"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"/**\r\n * Perform brute-force string matching to find the pattern in the text.\r\n * @param {string} text - The text string.\r\n * @param {string} pattern - The pattern string.\r\n * @return {number[]} - The starting indices of occurrences of the pattern.\r\n */\r\nconst bruteForceSearch = (text, pattern) => {\r\n  const result = [];\r\n  const m = pattern.length;\r\n  const n = text.length;\r\n\r\n  for (let i = 0; i <= n - m; i++) {\r\n    let j;\r\n    for (j = 0; j < m; j++) {\r\n      if (text[i + j] !== pattern[j]) break;\r\n    }\r\n    if (j === m) {\r\n      result.push(i);\r\n    }\r\n  }\r\n  \r\n  return result;\r\n};\n"})}),"\n",(0,n.jsx)(r.h2,{id:"knuth-morris-pratt-kmp-algorithm",children:"Knuth-Morris-Pratt (KMP) Algorithm"}),"\n",(0,n.jsx)(r.p,{children:'The Knuth-Morris-Pratt (KMP) algorithm is an efficient string searching algorithm that finds occurrences of a "pattern" string within a "text" string. It improves upon the naive string matching algorithm by avoiding redundant comparisons.'}),"\n",(0,n.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:'The KMP algorithm uses information gained from previous comparisons to avoid redundant checking. It preprocesses the pattern to create a partial match table (also known as the "longest prefix suffix" or LPS array), which helps in skipping unnecessary comparisons when a mismatch occurs.'}),"\n",(0,n.jsx)(r.h3,{id:"algorithm-steps-1",children:"Algorithm Steps"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Preprocess the Pattern"}),": Construct the LPS array for the pattern."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Search for the Pattern"}),": Use the LPS array to efficiently search for the pattern in the text."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"preprocessing-the-pattern",children:"Preprocessing the Pattern"}),"\n",(0,n.jsx)(r.p,{children:"The LPS array (Longest Prefix Suffix) stores the length of the longest proper prefix of the pattern which is also a suffix. This allows the algorithm to skip unnecessary comparisons in the search phase."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Code Example"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Javascript",children:"/**\r\n * Build the LPS (Longest Prefix Suffix) array for the pattern.\r\n * @param {string} pattern - The pattern string.\r\n * @return {number[]} - The LPS array.\r\n */\r\nconst buildLPSArray = (pattern) => {\r\n  const lps = Array(pattern.length).fill(0);\r\n  let length = 0;\r\n  let i = 1;\r\n\r\n  while (i < pattern.length) {\r\n    if (pattern[i] === pattern[length]) {\r\n      length++;\r\n      lps[i] = length;\r\n      i++;\r\n    } else {\r\n      if (length > 0) {\r\n        length = lps[length - 1];\r\n      } else {\r\n        lps[i] = 0;\r\n        i++;\r\n      }\r\n    }\r\n  }\r\n  \r\n  return lps;\r\n};\r\n\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:"/**\r\n * Perform KMP search to find the pattern in the text.\r\n * @param {string} text - The text string.\r\n * @param {string} pattern - The pattern string.\r\n * @return {number[]} - The starting indices of occurrences of the pattern.\r\n */\r\nconst kmpSearch = (text, pattern) => {\r\n  const lps = buildLPSArray(pattern);\r\n  const result = [];\r\n  let i = 0; // Index for text\r\n  let j = 0; // Index for pattern\r\n\r\n  while (i < text.length) {\r\n    if (pattern[j] === text[i]) {\r\n      i++;\r\n      j++;\r\n    }\r\n    \r\n    if (j === pattern.length) {\r\n      result.push(i - j);\r\n      j = lps[j - 1];\r\n    } else if (i < text.length && pattern[j] !== text[i]) {\r\n      if (j > 0) {\r\n        j = lps[j - 1];\r\n      } else {\r\n        i++;\r\n      }\r\n    }\r\n  }\r\n  \r\n  return result;\r\n};\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Javascript",children:'const text = "ababcababcabc";\r\nconst pattern = "abc";\r\n\r\nconsole.log(kmpSearch(text, pattern)); // Output: [2, 7, 10]\n'})})]})}function p(t={}){const{wrapper:r}={...(0,i.R)(),...t.components};return r?(0,n.jsx)(r,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}},8453:(t,r,e)=>{e.d(r,{R:()=>a,x:()=>o});var n=e(6540);const i={},s=n.createContext(i);function a(t){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(r):{...r,...t}}),[r,t])}function o(t){let r;return r=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),n.createElement(s.Provider,{value:r},t.children)}}}]);