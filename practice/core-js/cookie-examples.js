// //Do something only once

function doOnce() {
    if (
      !document.cookie
        .split("; ")
        .find((row) => row.startsWith("doSomethingOnlyOnce"))
    ) {
      // Note that we are setting `SameSite=None;` in this example because the example
      // needs to work cross-origin.
      // It is more common not to set the `SameSite` attribute, which results in the default,
      // and more secure, value of `SameSite=Lax;`
      document.cookie =
        "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
  
      const output = document.getElementById("do-once");
      output.textContent = "> Do something here!";
    }
  }
  
  function clearOutputDoOnce() {
    const output = document.getElementById("do-once");
    output.textContent = "";
  }
  


// // Check a cookie existence

//   // Note that we are setting `SameSite=None;` in this example because the example
// // needs to work cross-origin.
// // It is more common not to set the `SameSite` attribute, which results in the default,
// // and more secure, value of `SameSite=Lax;`

document.cookie = "reader=1; SameSite=None; Secure";

function checkACookieExists() {
  let cookieValue = "reader=1; SameSite=None; Secure";
  let cookieParts = cookieValue.split(';');
  let myConditionResult = cookieParts.some((item) => {
    let trimmedItem = item.trim();
    let myItemConditionResult = trimmedItem.startsWith("reader=");

    return myItemConditionResult;
  });

  if (myConditionResult) {
    const output = document.getElementById("a-cookie-existence");
    output.textContent = '> The cookie "reader" exists';
  }
}

function clearOutputACookieExists() {
  const output = document.getElementById("a-cookie-existence");
  output.textContent = "";
}



// Check that a cookie has a specific value

function checkCookieHasASpecificValue() {
    if (document.cookie.split(";").some((item) => item.includes("reader=1"))) {
      const output = document.getElementById("a-specific-value-of-the-cookie");
      output.textContent = '> The cookie "reader" has a value of "1"';
    }
  }
  
  function clearASpecificValueOfTheCookie() {
    const output = document.getElementById("a-specific-value-of-the-cookie");
    output.textContent = "";
  }
  

