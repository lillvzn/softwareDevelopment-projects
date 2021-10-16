function pigIt(str) {
  const strList = str.split(" ");
  let newStr = [];
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  for (let i = 0; i < strList.length; i++) {
    if (format.test(strList[i])) {
      newStr.push(strList[i].substring(1) + strList[i][0]);
      console.log(strList[i]);
      strList[i] = strList[i].replace(/[^a-zA-Z ]/g, "");
    } else if (strList[i] !== "") {
      newStr.push(strList[i].substring(1) + strList[i][0] + "ay");
    }
  }
  return newStr.join(" ");
}
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
