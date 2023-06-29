function a(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  b(i - 1);
  console.log(`end: ${i}`);
}

function b(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  c(i - 1);
  console.log(`end: ${i}`);
}

function c(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  d(i - 1);
  console.log(`end: ${i}`);
}

function d(i) {
  if (i < 0) {
    return;
  }
}

function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  a(i - 1);
  console.log(`end: ${i}`);
}

foo(3);
console.log(`complete`);

