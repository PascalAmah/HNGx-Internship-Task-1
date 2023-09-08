const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function displayCurrentDayAndUTCTime() {
  const currentDayIndex = new Date().getDay();
  const currentDay = daysOfWeek[currentDayIndex];
  const utcMilliseconds = Date.now();
      
  document.getElementById('day').textContent = `${currentDay}`;
  document.getElementById('utcTime').textContent = `${utcMilliseconds}`;
}

displayCurrentDayAndUTCTime();

setInterval(displayCurrentDayAndUTCTime, 1000);