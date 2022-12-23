// function logMessage(value: string): void {
//   console.log(value);
// }

// logMessage('hi');
// logMessage(100); //err

function logMessage(value: string | number): void {
  console.log(value);
}

logMessage("hi");
logMessage(100); //err
