import q from 'q';

const myAsyncFn = async() => {
  return q.resolve('whatever');
};

const main = async() => {

  const v = await myAsyncFn();

  console.log(v);
};

main();

console.log('waiting');