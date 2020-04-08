const task = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
});

const run = async () => {
  const result = await task();
  console.log(result);
};

export default run;
