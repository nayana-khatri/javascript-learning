// Example asynchronous function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { name: 'John', age: 25 };

      // Resolve the promise with the fetched data
      resolve(data);

      // Reject the promise with an error (uncomment to see rejection in action)
      // reject(new Error('Failed to fetch data.'));
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the fetchData function with promises
fetchData()
  .then(data => {
    console.log('Fetched data:', data);
    // Perform additional operations with the fetched data

    // Returning a new promise to demonstrate promise chaining
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Additional operation completed.');
        resolve('Result of additional operation.');
      }, 1000);
    });
  })
  .then(result => {
    console.log('Chained result:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
