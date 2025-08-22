// const math = require("./math/index.js");

const main = async () => {
  const math = await import("./math/index.js");
  console.log(math.PI);
  console.log(math.GRAVITY);
  console.log(math.addOne(1));
  console.log(math.minusOne(1));
}
