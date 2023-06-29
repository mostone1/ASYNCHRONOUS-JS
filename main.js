//task 1
function getPromise(message, delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
  }
  
  getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
  });

//task 2
function calcArrProduct(arr) {
    return new Promise(function(resolve, reject) {
      let product = 1;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
          reject("Error! Incorrect array!");
          return;
        }
        product *= arr[i];
      }
      resolve(product);
    });
  }
  
  calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
  calcArrProduct([5, "user2", 7, 12]).catch(error => console.log(error)); // "Error! Incorrect array!"

//task 3
function promptNumber() {
    return new Promise(function(resolve, reject) {
      const number = prompt("Введіть число:");
      if (isNaN(number)) {
        reject();
      } else {
        resolve(Number(number));
      }
    });
  }
  
  function requestNumber() {
    return promptNumber().catch(requestNumber);
  }
  
  requestNumber().then(function(result) {
    console.log(result);
  });

//task 4
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i < 10; i++) {
    const number = await delay(i, Math.random() * 3000);
    console.log(number);
  }
}

showNumbers();
