"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7585],{3329:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=n(4848),o=n(8453);const s={title:"N-ary Tree"},i=void 0,l={id:"tutorial-basics/NryTree",title:"N-ary Tree",description:"An N-ary Tree is a tree data structure where each node can have up to N children. This is a generalization of a binary tree where each node can have more than two children. N-ary trees are useful in scenarios where a hierarchical structure is required, but nodes can have more than two children.",source:"@site/docs/tutorial-basics/NryTree.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/NryTree",permalink:"/js_enigma/docs/tutorial-basics/NryTree",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/NryTree.mdx",tags:[],version:"current",frontMatter:{title:"N-ary Tree"},sidebar:"tutorialSidebar",previous:{title:"Multi-source BFS Algorithm",permalink:"/js_enigma/docs/tutorial-basics/MultiSourceBFS"},next:{title:"Path Sum (Binary Tree)",permalink:"/js_enigma/docs/tutorial-basics/PathSumBinaryTree"}},d={},a=[{value:"Properties of N-ary Trees",id:"properties-of-n-ary-trees",level:2},{value:"Basic Operations",id:"basic-operations",level:2},{value:"Example Structure",id:"example-structure",level:2}];function c(r){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["An ",(0,t.jsx)(e.strong,{children:"N-ary Tree"})," is a tree data structure where each node can have up to ",(0,t.jsx)(e.code,{children:"N"})," children. This is a generalization of a binary tree where each node can have more than two children. N-ary trees are useful in scenarios where a hierarchical structure is required, but nodes can have more than two children."]}),"\n",(0,t.jsx)(e.h2,{id:"properties-of-n-ary-trees",children:"Properties of N-ary Trees"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Nodes"}),": Each node in the tree has a value and a list of child nodes."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Root Node"}),": The topmost node in the tree, with no parent."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Leaf Nodes"}),": Nodes that do not have any children."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Height"}),": The length of the longest path from the root to a leaf node."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"basic-operations",children:"Basic Operations"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Insertion"}),": Adding a new node to the tree."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Deletion"}),": Removing a node from the tree."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Traversal"}),": Visiting all nodes in a specific order (e.g., pre-order, post-order)."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"example-structure",children:"Example Structure"}),"\n",(0,t.jsx)(e.p,{children:"An N-ary tree can be represented as:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-JavaScript",children:"class Node {\r\n\r\n  constructor(val, children = []) {\r\n    this.val = val;\r\n    this.children = children;\r\n  }\r\n\r\n  // Add a child node\r\n  addChild(child) {\r\n    if (child instanceof Node) {\r\n      this.children.push(child);\r\n    } else {\r\n      throw new Error(\"Invalid child node\");\r\n    }\r\n  }\r\n\r\n  // Remove a child node by value\r\n  removeChild(childVal) {\r\n    const index = this.children.findIndex(child => child.val === childVal);\r\n    if (index !== -1) {\r\n      this.children.splice(index, 1);\r\n    } else {\r\n      throw new Error(\"Child node not found\");\r\n    }\r\n  }\r\n\r\n  // Find a node by value using DFS\r\n  findNode(val) {\r\n    if (this.val === val) return this;\r\n\r\n    for (const child of this.children) {\r\n      const result = child.findNode(val);\r\n      if (result) return result;\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  // Pre-order DFS Traversal\r\n  dfsPreOrder(result = []) {\r\n    result.push(this.val);\r\n    for (const child of this.children) {\r\n      child.dfsPreOrder(result);\r\n    }\r\n    return result;\r\n  }\r\n\r\n  // Post-order DFS Traversal\r\n  dfsPostOrder(result = []) {\r\n    for (const child of this.children) {\r\n      child.dfsPostOrder(result);\r\n    }\r\n    result.push(this.val);\r\n    return result;\r\n  }\r\n\r\n  // In-order Traversal (customized for N-ary trees)\r\n  dfsInOrder(result = []) {\r\n    const half = Math.floor(this.children.length / 2);\r\n\r\n    for (let i = 0; i < half; i++) {\r\n      this.children[i].dfsInOrder(result);\r\n    }\r\n\r\n    result.push(this.val);\r\n\r\n    for (let i = half; i < this.children.length; i++) {\r\n      this.children[i].dfsInOrder(result);\r\n    }\r\n\r\n    return result;\r\n  }\r\n\r\n  bfs = (root) => {\r\n    const queue = [root]\r\n    const result = []\r\n\r\n    while (queue.length) {\r\n      const current = queue.shift()\r\n      result.push(current.val);\r\n      for (const child of current.children) {\r\n        queue.push(child)\r\n      }\r\n    }\r\n    return result\r\n  }\r\n\r\n  // Level-order BFS Traversal\r\n  static bfsLevelOrder(root) {\r\n    const result = [];\r\n    if (!root) return result;\r\n\r\n    const queue = [root];\r\n\r\n    while (queue.length > 0) {\r\n      const levelSize = queue.length;\r\n      const currentLevel = [];\r\n\r\n      for (let i = 0; i < levelSize; i++) {\r\n        const node = queue.shift();\r\n        currentLevel.push(node.val);\r\n\r\n        for (const child of node.children) {\r\n          queue.push(child);\r\n        }\r\n      }\r\n      result.push(currentLevel);\r\n    }\r\n    return result;\r\n  }\r\n\r\n  // Maximum Depth of the N-ary Tree\r\n  maxDepth() {\r\n    if (this.children.length === 0) return 1;\r\n\r\n    let depth = 0;\r\n    for (const child of this.children) {\r\n      depth = Math.max(depth, child.maxDepth());\r\n    }\r\n\r\n    return depth + 1; // Add 1 to account for the current node\r\n  }\r\n}\r\n\r\n// Create a sample N-ary tree\r\nconst root = new Node(1);\r\nconst child1 = new Node(3);\r\nconst child2 = new Node(2);\r\nconst child3 = new Node(4);\r\n\r\nroot.addChild(child1);\r\nroot.addChild(child2);\r\nroot.addChild(child3);\r\n\r\nconst grandchild1 = new Node(5);\r\nconst grandchild2 = new Node(6);\r\n\r\nchild1.addChild(grandchild1);\r\nchild1.addChild(grandchild2);\r\n\r\n\r\n/* \r\n        1\r\n       /|\\\r\n      / | \\\r\n     3  2  4\r\n    / \\\r\n   5   6\r\n*/\r\n\r\n\r\n// Perform traversals\r\nconsole.log('DFS Pre-order:', root.dfsPreOrder([])); // Output: [1, 3, 5, 6, 2, 4]\r\nconsole.log('DFS Post-order:', root.dfsPostOrder([])); // Output: [5, 6, 3, 2, 4, 1]\r\nconsole.log('DFS In-order:', root.dfsInOrder([])); // Output: [5, 6, 3, 1, 2, 4]\r\nconsole.log('BFS', root.bfs(root)); //[ 1, 3, 2, 4, 5, 6 ]\r\nconsole.log('BFS Level-order:', Node.bfsLevelOrder(root)); // Output: [[1], [3, 2, 4], [5, 6]]\r\nconsole.log('Maximum Depth of the Tree:', root.maxDepth()); // Output: 3\n"})})]})}function h(r={}){const{wrapper:e}={...(0,o.R)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(c,{...r})}):c(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>i,x:()=>l});var t=n(6540);const o={},s=t.createContext(o);function i(r){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function l(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:i(r.components),t.createElement(s.Provider,{value:e},r.children)}}}]);