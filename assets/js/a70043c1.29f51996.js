"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1084],{3141:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(4848),o=t(8453);const s={title:"Depth-First Search (DFS) for Trees"},i=void 0,a={id:"tutorial-basics/DFSTree",title:"Depth-First Search (DFS) for Trees",description:"Depth-First Search (DFS) for Trees",source:"@site/docs/tutorial-basics/DFSTree.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/DFSTree",permalink:"/js_enigma/docs/tutorial-basics/DFSTree",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/DFSTree.mdx",tags:[],version:"current",frontMatter:{title:"Depth-First Search (DFS) for Trees"},sidebar:"tutorialSidebar",previous:{title:"DFS & BFS on Graphs",permalink:"/js_enigma/docs/tutorial-basics/DFSBFSGraph"},next:{title:"Dijkstra's Algorithm",permalink:"/js_enigma/docs/tutorial-basics/Dijkstra"}},l={},c=[{value:"Depth-First Search (DFS) for Trees",id:"depth-first-search-dfs-for-trees",level:2},{value:"Overview",id:"overview",level:3},{value:"Algorithm Steps",id:"algorithm-steps",level:3},{value:"Example Implementation",id:"example-implementation",level:3}];function d(e){const r={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"depth-first-search-dfs-for-trees",children:"Depth-First Search (DFS) for Trees"}),"\n",(0,n.jsx)(r.p,{children:"Depth-First Search (DFS) is an algorithm used to traverse or search through tree or graph structures. It explores as far as possible along each branch before backtracking. DFS is useful for problems where you need to explore all possible paths or need to visit nodes in a specific order."}),"\n",(0,n.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:"DFS starts from the root (or any arbitrary node in a graph) and explores as far as possible along each branch before backtracking. It can be implemented using recursion or a stack. DFS is useful for tasks such as searching paths, topological sorting, and solving puzzles."}),"\n",(0,n.jsx)(r.h3,{id:"algorithm-steps",children:"Algorithm Steps"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Initialize"}),": Start at the root node and mark it as visited."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Explore"}),": Recursively or iteratively visit all unvisited child nodes (or neighbors) of the current node."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Backtrack"}),": Once all nodes at the current branch have been explored, backtrack to explore other branches."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"example-implementation",children:"Example Implementation"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Code Example"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"//TreeNode\r\nclass TreeNode {\r\n  constructor(val) {\r\n    this.val = val;   //Node value\r\n    this.left = null; // Left node\r\n    this.right = null; //Right node\r\n  }\r\n}\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:"/**\r\n * Perform DFS traversal on a tree using Preorder (Root, Left, Right).\r\n * @param {TreeNode} root - The root of the tree.\r\n * @return {number[]} - The values of the nodes in DFS order.\r\n */\r\nconst dfsPreorder = (root) => {\r\n  const result = [];\r\n  \r\n  const traverse = (node) => {\r\n    if (!node) return;\r\n    result.push(node.val); // Process the node\r\n    traverse(node.left);  // Visit left subtree\r\n    traverse(node.right); // Visit right subtree\r\n  };\r\n  \r\n  traverse(root);\r\n  return result;\r\n};\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:"/**\r\n * Perform DFS traversal on a tree using Inorder (Left, Root, Right).\r\n * @param {TreeNode} root - The root of the tree.\r\n * @return {number[]} - The values of the nodes in DFS Inorder order.\r\n */\r\nconst dfsInorder = (root) => {\r\n  const result = [];\r\n  \r\n  const traverse = (node) => {\r\n    if (!node) return;\r\n    traverse(node.left);  // Visit left subtree\r\n    result.push(node.val); // Process the node\r\n    traverse(node.right); // Visit right subtree\r\n  };\r\n  \r\n  traverse(root);\r\n  return result;\r\n};\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:"\r\n/**\r\n * Perform DFS traversal on a tree using Postorder (Left, Right, Root).\r\n * @param {TreeNode} root - The root of the tree.\r\n * @return {number[]} - The values of the nodes in DFS Postorder order.\r\n */\r\nconst dfsPostorder = (root) => {\r\n  const result = [];\r\n  \r\n  const traverse = (node) => {\r\n    if (!node) return;\r\n    traverse(node.left);  // Visit left subtree\r\n    traverse(node.right); // Visit right subtree\r\n    result.push(node.val); // Process the node\r\n  };\r\n  \r\n  traverse(root);\r\n  return result;\r\n};\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-JavaScript",children:"const root = new TreeNode(1);\r\nroot.left = new TreeNode(2);\r\nroot.right = new TreeNode(3);\r\nroot.left.left = new TreeNode(4);\r\nroot.left.right = new TreeNode(5);\r\nroot.right.left = new TreeNode(6);\r\nroot.right.right = new TreeNode(7);\r\n\r\n/* \r\n                     1\r\n                    / \\\r\n                   2   3\r\n                  / \\ / \\\r\n                 4  5 6  7\r\n*/\r\n\r\nconsole.log(dfsPreorder(root));  // Output: [1, 2, 4, 5, 3, 6, 7]\r\nconsole.log(dfsInorder(root));   // Output: [4, 2, 5, 1, 6, 3, 7]\r\nconsole.log(dfsPostorder(root)); // Output: [4, 5, 2, 6, 7, 3, 1]\n"})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(6540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);