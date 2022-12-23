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

let lea: string | number | boolean;

function leaMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }

  throw new TrypeError("value must be string or number");
}
