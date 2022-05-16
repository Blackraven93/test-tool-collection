interface Timer {
  (): void;
}

const timerGame = (callback: Timer): void => {
  console.log('Ready...go!');
  setTimeout(() => {
    console.log("Time's up -- stop!!");
    callback && callback();
  }, 1000);
};

export default timerGame;
