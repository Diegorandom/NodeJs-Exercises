const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2]);
    }, 2000);
  });
};

const main = async () => {
  let arr = await asyncFunc();
  arr.map((item) => {
    console.log(item);
  });
};

//main();

// function waitTo(ms, callback) {
//   setTimeout(() => callback("done!"), ms);
// }

// waitTo(1200, (result) => {
//   console.log(result);
// });

const promise = new Promise((res, rej) => {
  try {
    setTimeout(() => res("done!"), 1200);
  } catch (e) {
    rej(e);
  }
});

//promise.then((res) => console.log(res));

const incrementator = (num) => {
  return new Promise((resolve) => {
    setInterval(() => {
      console.log(num++);
    }, 1200);
  });
};

const main2 = async () => {
  let num = 0;
  await incrementator(num);
};

main2();
