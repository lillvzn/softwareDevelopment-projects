"use strict";

const sortThisArray = function (arr, order = "asc") {
  const arrLen = arr.length;
  const res = [];
  for (let i = 0; i < arrLen; i++) {
    let minVal = Math.min(...arr);
    res.push(minVal);
    arr.splice(arr.indexOf(minVal), 1);
  }
  if (order === "dsc") return res.reverse();
  return res;
};

sortThisArray([5, 3, 17, 24, 1, 7, 14, -2, 0], "dsc");

// or use: arr.sort((a,b) => a-b);
// arr.sort((a,b) => b-a);
