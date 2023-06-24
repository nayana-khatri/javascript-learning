console.log('Before promise creation');

const myPromise = new Promise((resolve, reject) => {
  console.log('Inside promise executor');

  setTimeout(() => {
    console.log('Async operation completed');
    resolve('Promise fulfilled');
  }, 2000);
});

console.log('After promise creation');

myPromise
  .then(result => {
    console.log('Promise fulfilled with result:', result);
  })
  .catch(error => {
    console.log('Promise rejected with error:', error);
  });

console.log('After promise usage');
