"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6437],{14:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(4848),s=t(8453);const o={title:"Morris Traversal for Binary Trees"},l=void 0,a={id:"tutorial-basics/MorrisTraversal",title:"Morris Traversal for Binary Trees",description:"Morris Traversal",source:"@site/docs/tutorial-basics/MorrisTraversal.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/MorrisTraversal",permalink:"/js_enigma/docs/tutorial-basics/MorrisTraversal",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/MorrisTraversal.mdx",tags:[],version:"current",frontMatter:{title:"Morris Traversal for Binary Trees"},sidebar:"tutorialSidebar",previous:{title:"Merge Sort",permalink:"/js_enigma/docs/tutorial-basics/MergeSort"},next:{title:"Multi-source BFS Algorithm",permalink:"/js_enigma/docs/tutorial-basics/MultiSourceBFS"}},i={},c=[{value:"Morris Traversal",id:"morris-traversal",level:2},{value:"Types of Morris Traversal",id:"types-of-morris-traversal",level:3},{value:"Code Implementation",id:"code-implementation",level:3},{value:"TreeNode Class",id:"treenode-class",level:4},{value:"Inorder Traversal",id:"inorder-traversal",level:3},{value:"Preorder Traversal",id:"preorder-traversal",level:3},{value:"Postorder Traversal",id:"postorder-traversal",level:3}];function d(e){const r={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"morris-traversal",children:"Morris Traversal"}),"\n",(0,n.jsx)(r.p,{children:"Morris Traversal is a tree traversal algorithm that does not use any additional space for storing the traversal result, unlike other traversal methods that typically use stacks or recursion. It achieves this by temporarily modifying the tree structure."}),"\n",(0,n.jsx)(r.h3,{id:"types-of-morris-traversal",children:"Types of Morris Traversal"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Inorder Traversal"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Preorder Traversal"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"Postorder Traversal"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"code-implementation",children:"Code Implementation"}),"\n",(0,n.jsx)(r.p,{children:"Here's a detailed explanation of each traversal method using Morris Traversal."}),"\n",(0,n.jsx)(r.h4,{id:"treenode-class",children:"TreeNode Class"}),"\n",(0,n.jsxs)(r.p,{children:["First, let's define a simple ",(0,n.jsx)(r.code,{children:"TreeNode"})," class to represent nodes in the binary tree:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"class TreeNode {\r\n  constructor(val) {\r\n    this.val = val;\r\n    this.left = null;\r\n    this.right = null;\r\n  }\r\n}\r\n\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:'//In the context of Morris Traversal and binary tree traversal, the term "predecessor" refers to a specific node related to the current node being processed. \r\n//Its role varies depending on the type of traversal being used\r\nconst findPredecessor = (root) => {\r\n  // Start with the left child of the root node\r\n  let node = root.left;\r\n  // Traverse to the rightmost node of the left subtree\r\n  // This rightmost node is the predecessor in Morris Traversal\r\n  while (node.right && node.right !== root) {\r\n    node = node.right;\r\n  }\r\n  // Return the rightmost node (predecessor) or the node where the cycle should be created\r\n  return node;\r\n}\n'})}),"\n",(0,n.jsx)(r.h3,{id:"inorder-traversal",children:"Inorder Traversal"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:"const inorderTraversal = (root) => {\r\n  let node = root;\r\n  const result = [];\r\n  while (node) {\r\n    if (!node.left) {\r\n      result.push(node.val);\r\n      node = node.right;\r\n    } else {\r\n      const predecessor = findPredecessor(node);\r\n      if (predecessor.right === node) {\r\n        // We have a cycle\r\n        predecessor.right = null; // Break the cycle\r\n        result.push(node.val);\r\n        node = node.right;\r\n      } else {\r\n        predecessor.right = node; // Create a cycle\r\n        node = node.left;\r\n      }\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\n"})}),"\n",(0,n.jsx)(r.h3,{id:"preorder-traversal",children:"Preorder Traversal"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:"const preorderTraversal = (root) => {\r\n  let node = root;\r\n  const result = [];\r\n  while (node) {\r\n    if (!node.left) {\r\n      result.push(node.val);  // Visit the node\r\n      node = node.right;\r\n    } else {\r\n      const predecessor = findPredecessor(node);\r\n      if (predecessor.right === node) {\r\n        // We have a cycle\r\n        predecessor.right = null; // Break the cycle\r\n        node = node.right;\r\n      } else {\r\n        result.push(node.val); // Visit the node\r\n        predecessor.right = node; // Create a cycle\r\n        node = node.left;\r\n      }\r\n    }\r\n  }\r\n  return result;\r\n}\r\n\n"})}),"\n",(0,n.jsx)(r.h3,{id:"postorder-traversal",children:"Postorder Traversal"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:"const postorderTraversal = (root) => {\r\n  const result = [];  // Array to store the result of the traversal\r\n  let current = root; // Start with the root node\r\n\r\n  // Iterate until all nodes are processed\r\n  while (current) {\r\n    // If there is no right child, process the current node and move to the left child\r\n    if (!current.right) {\r\n      result.push(current.val); // Visit the current node\r\n      current = current.left;   // Move to the left child\r\n    } else {\r\n      // Find the leftmost node in the right subtree (predecessor)\r\n      let successor = current.right;\r\n      while (successor.left && successor.left !== current) {\r\n        successor = successor.left;\r\n      }\r\n      \r\n      // If the predecessor's left pointer is null, set it to the current node\r\n      if (!successor.left) {\r\n        result.push(current.val); // Visit the current node\r\n        successor.left = current; // Create a temporary link\r\n        current = current.right;  // Move to the right child\r\n      } else {\r\n        // If the predecessor's left pointer points to the current node, remove the temporary link\r\n        successor.left = null; // Remove the temporary link\r\n        current = current.left; // Move to the left child\r\n      }\r\n    }\r\n  }\r\n  \r\n  // Reverse the result array to get the correct postorder sequence\r\n  return result.reverse();\r\n}\r\n\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>a});var n=t(6540);const s={},o=n.createContext(s);function l(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);