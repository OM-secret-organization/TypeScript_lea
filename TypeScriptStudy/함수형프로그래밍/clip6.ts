function getPrice(name: string): number | undefined {
  if (name === 'tomato') {
    return 7000;
  } else if (name === 'orange') {
    return 15000;
  } else if (name === 'apple') {
    return 10000;
  }
}

export const isExpensive = (price: number | undefined) => {
  if (price === undefined) {
    return false;
  }
  return price > 10000;
};

export function isExpensivePrice(name: string): boolean {
  return isExpensive(getPrice(name));
}
