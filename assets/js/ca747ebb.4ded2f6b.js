"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6430],{3585:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var t=n(4848),i=n(8453);const a={title:"Binary Search and Its Variants"},l=void 0,s={id:"tutorial-basics/BinarySearch",title:"Binary Search and Its Variants",description:"Binary Search",source:"@site/docs/tutorial-basics/BinarySearch.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/BinarySearch",permalink:"/docs/tutorial-basics/BinarySearch",draft:!1,unlisted:!1,editUrl:"https://github.com/carefree-ladka/docs/tutorial-basics/BinarySearch.mdx",tags:[],version:"current",frontMatter:{title:"Binary Search and Its Variants"},sidebar:"tutorialSidebar",previous:{title:"Backtracking Algorithm",permalink:"/docs/tutorial-basics/Backtracking"},next:{title:"Bit Manipulation Basics",permalink:"/docs/tutorial-basics/BitManipulation"}},h={},o=[{value:"Binary Search",id:"binary-search",level:2},{value:"Basic Binary Search",id:"basic-binary-search",level:3},{value:"Finds the first position where the target could be inserted without violating the order.",id:"finds-the-first-position-where-the-target-could-be-inserted-without-violating-the-order",level:3},{value:"Finds the first position where an element greater than the target appears.",id:"finds-the-first-position-where-an-element-greater-than-the-target-appears",level:3},{value:"Finds the index of the smallest element greater than the target.",id:"finds-the-index-of-the-smallest-element-greater-than-the-target",level:3},{value:"Finds the index of the largest element less than the target.",id:"finds-the-index-of-the-largest-element-less-than-the-target",level:3},{value:"Finds the index at which a target value should be inserted to maintain the sorted order.",id:"finds-the-index-at-which-a-target-value-should-be-inserted-to-maintain-the-sorted-order",level:3},{value:"Find Minimum in a Rotated Sorted Array",id:"find-minimum-in-a-rotated-sorted-array",level:3},{value:"Search in Rotated Sorted Array",id:"search-in-rotated-sorted-array",level:3},{value:"Binary Search on Answer Pattern:",id:"binary-search-on-answer-pattern",level:3},{value:"Binary Search on 2D Matrix:",id:"binary-search-on-2d-matrix",level:3}];function d(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"binary-search",children:"Binary Search"}),"\n",(0,t.jsx)(r.p,{children:"Binary Search is a classic algorithm for finding an element in a sorted array. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.\r\nBoth low + Math.floor((high - low) / 2) and Math.floor(left + (right - left) / 2) are valid ways to compute the mid index in binary search and can be used to avoid integer overflow."}),"\n",(0,t.jsx)(r.h3,{id:"basic-binary-search",children:"Basic Binary Search"}),"\n",(0,t.jsx)(r.p,{children:"Here is a basic implementation of Binary Search in JavaScript:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"function binarySearch(arr, target) {\r\n  let left = 0;\r\n  let right = arr.length - 1;\r\n\r\n  while (left <= right) {\r\n    const mid = Math.floor((left + right) / 2);\r\n\r\n    if (arr[mid] === target) {\r\n      return mid; // Target found at index mid\r\n    } else if (arr[mid] < target) {\r\n      left = mid + 1; // Search in the right half\r\n    } else {\r\n      right = mid - 1; // Search in the left half\r\n    }\r\n  }\r\n\r\n  return -1; // Target not found\r\n}\r\n\r\n// Example usage\r\nconst nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];\r\nconst target = 5;\r\nconsole.log(binarySearch(nums, target)); // Output: 4\n"})}),"\n",(0,t.jsx)(r.h3,{id:"finds-the-first-position-where-the-target-could-be-inserted-without-violating-the-order",children:"Finds the first position where the target could be inserted without violating the order."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"\r\nconst findLowerBound = (nums = [], target) => {\r\n  let left = 0;\r\n  let right = nums.length;\r\n\r\n  while (left < right) {\r\n    const mid = Math.floor((left + right) / 2);\r\n    if (nums[mid] < target) {\r\n      left = mid + 1;\r\n    } else {\r\n      right = mid;\r\n    }\r\n  }\r\n  return left;\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"finds-the-first-position-where-an-element-greater-than-the-target-appears",children:"Finds the first position where an element greater than the target appears."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"const findUpperBound = (nums = [], target) => {\r\n   let left = 0;\r\n  let right = nums.length;\r\n\r\n  while (left < right) {\r\n    let mid = Math.floor((left + right) / 2);\r\n    if (nums[mid] <= target) {\r\n      left = mid + 1;\r\n    } else {\r\n      right = mid;\r\n    }\r\n  }\r\n  return left;\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"finds-the-index-of-the-smallest-element-greater-than-the-target",children:"Finds the index of the smallest element greater than the target."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"const findLeastGreater = (nums, key) => {\r\n  const n = nums.length;\r\n  let low = 0;\r\n  let high = n - 1;\r\n  let result = -1;\r\n\r\n  while (low <= high) {\r\n    const mid = low + Math.floor((high - low) / 2);\r\n    if (nums[mid] > key) {\r\n      result = mid;\r\n      high = mid - 1;\r\n    } else low = mid + 1;\r\n  }\r\n  return result;\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"finds-the-index-of-the-largest-element-less-than-the-target",children:"Finds the index of the largest element less than the target."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"const findGreatestLess = (nums, key) => {\r\n  const n = nums.length;\r\n  let low = 0;\r\n  let high = n - 1;\r\n  let result = -1;\r\n\r\n  while (low <= high) {\r\n    const mid = low + Math.floor((high - low) / 2);\r\n    if (nums[mid] < key) {\r\n      result = mid;\r\n      low = mid + 1;\r\n    } else high = mid - 1;\r\n  }\r\n  return result;\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"finds-the-index-at-which-a-target-value-should-be-inserted-to-maintain-the-sorted-order",children:"Finds the index at which a target value should be inserted to maintain the sorted order."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"const searchInsert = (nums, target) => {\r\n    let left = 0;\r\n    let right = nums.length - 1;\r\n    while (left <= right) {\r\n        const mid = Math.floor((left + right) / 2);\r\n        if (nums[mid] === target) {\r\n            return mid;\r\n        } else if (nums[mid] < target) {\r\n            left = mid + 1;\r\n        } else {\r\n            right = mid - 1;\r\n        }\r\n    }\r\n    return left;\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"find-minimum-in-a-rotated-sorted-array",children:"Find Minimum in a Rotated Sorted Array"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"const findMin = (nums) => {\r\n    let left = 0;\r\n    let right = nums.length - 1;\r\n    while (left < right) {\r\n        let mid = Math.floor((left + right) / 2);\r\n        if (nums[mid] > nums[right]) {\r\n            left = mid + 1;\r\n        } else {\r\n            right = mid;\r\n        }\r\n    }\r\n    return nums[left];\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"search-in-rotated-sorted-array",children:"Search in Rotated Sorted Array"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"const search = (nums, target) => {\r\n    let left = 0;\r\n    let right = nums.length - 1;\r\n\r\n    while (left <= right) {\r\n        let mid = Math.floor((left + right) / 2);\r\n        if (nums[mid] === target) {\r\n            return mid;\r\n        }\r\n        if (nums[left] <= nums[mid]) {\r\n            if (nums[left] <= target && target < nums[mid]) {\r\n                right = mid - 1;\r\n            } else {\r\n                left = mid + 1;\r\n            }\r\n        } else {\r\n            if (nums[mid] < target && target <= nums[right]) {\r\n                left = mid + 1;\r\n            } else {\r\n                right = mid - 1;\r\n            }\r\n        }\r\n    }\r\n    return -1;\r\n};\n"})}),"\n",(0,t.jsx)(r.h3,{id:"binary-search-on-answer-pattern",children:"Binary Search on Answer Pattern:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"function binarySearchOnAnswer(rangeStart, rangeEnd, isValid) {\r\n    let left = rangeStart;\r\n    let right = rangeEnd;\r\n\r\n    while (left < right) {\r\n        const mid = Math.floor((left + right) / 2);\r\n\r\n        if (isValid(mid)) {\r\n            right = mid; // mid might be the answer, search in the left half\r\n        } else {\r\n            left = mid + 1; // mid is too small, search in the right half\r\n        }\r\n    }\r\n\r\n    return left; // or right, as left == right\r\n}\r\n\r\n// Example usage for a problem\r\nconst isValid = (value) => {\r\n    // Define what makes a value valid in your specific problem\r\n    // Return true if value meets the condition, false otherwise\r\n};\r\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"binary-search-on-2d-matrix",children:"Binary Search on 2D Matrix:"}),"\n",(0,t.jsx)(r.p,{children:"Consider a 2D matrix:"}),"\n",(0,t.jsx)(r.p,{children:"matrix = [\r\n[1, 3, 5, 7],\r\n[10, 11, 16, 20],\r\n[23, 30, 34, 60]\r\n]\r\nThis matrix has 3 rows and 4 columns."}),"\n",(0,t.jsx)(r.p,{children:"Row Calculation:\r\nMath.floor(mid / cols)\r\nHere, mid is the current index in the flattened perspective, and cols is the number of columns in each row of the matrix\r\nThis division gives the number of full rows completed before reaching the current element\r\nColumn Calculation:\r\nThe column number is calculated as mid % cols.\r\nThe modulus operation gives the remainder, which corresponds to the column index within the row.\r\nExplanation with an Example\r\nLet's take an example where mid = 5 and cols = 4."}),"\n",(0,t.jsx)(r.p,{children:"Row Calculation:"}),"\n",(0,t.jsx)(r.p,{children:"Math.floor(mid / cols) = Math.floor(5 / 4) = 1\r\nThis indicates that the element at index 5 in the flattened view is in row 1 of the matrix (0-based index).\r\nColumn Calculation:"}),"\n",(0,t.jsx)(r.p,{children:"mid % cols = 5 % 4 = 1\r\nThis indicates that the element is at column 1 in the matrix (0-based index).\r\nTherefore, matrix[Math.floor(mid / cols)][mid % cols] corresponds to matrix[1][1], which is 11 in the given matrix."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-JavaScript",children:"function searchMatrix(matrix, target) {\r\n    if (matrix.length === 0 || matrix[0].length === 0) {\r\n        return false;\r\n    }\r\n\r\n    const rows = matrix.length;\r\n    const cols = matrix[0].length;\r\n    let left = 0;\r\n    let right = rows * cols - 1;\r\n\r\n    while (left <= right) {\r\n        const mid = Math.floor((left + right) / 2);\r\n        const midValue = matrix[Math.floor(mid / cols)][mid % cols];\r\n\r\n        if (midValue === target) {\r\n            return true;\r\n        } else if (midValue < target) {\r\n            left = mid + 1;\r\n        } else {\r\n            right = mid - 1;\r\n        }\r\n    }\r\n\r\n    return false;\r\n}\r\n\r\n// Example usage\r\nconst matrix = [\r\n    [1, 3, 5, 7],\r\n    [10, 11, 16, 20],\r\n    [23, 30, 34, 60]\r\n];\r\nconst target = 3;\r\nconst result = searchMatrix(matrix, target);\r\nconsole.log(result); // Outputs: true\n"})})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>s});var t=n(6540);const i={},a=t.createContext(i);function l(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);