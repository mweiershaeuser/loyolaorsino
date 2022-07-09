// Fisher-Yates shuffle (Durstenfeld version), see: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
export function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = a[i];
    a[i] = a[randomIndex];
    a[randomIndex] = temp;
  }
  return a;
}
