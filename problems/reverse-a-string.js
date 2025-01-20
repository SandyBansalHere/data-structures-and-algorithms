function reverseAString(str) {
  let reverseStr = "";
  if (typeof str === "string" && str.length > 0) {
    const chars = [];

    for (let i = 0; i < str.length; i++) {
      chars.push(str[i]);
    }

    for (let i = chars.length - 1; i >= 0; i--) {
      reverseStr = reverseStr + chars[i];
    }

    return reverseStr;
  }

  return "Not a valid string";
}

console.log(reverseAString("Hello World!"));
