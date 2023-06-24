// Service Provider
function fetchData(url, callback) {
    // Simulating asynchronous data fetching
    setTimeout(function() {
      const data = {id:1, name:"oh", age:22};
      callback(url, data);
    }, 2000);
  }
  
  // Consumer
  function processData(url, data) {
    // Process the fetched data
    console.log("Processing data:", url, data);
  }
  
  // Dependency Injection
  function performDataFetchAndProcess(url, callback) {
    fetchData(url, callback);
  }
  
  // Usage
  const apiUrl = "https://api.example.com/data";
  performDataFetchAndProcess(apiUrl, processData);
  
  