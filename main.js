const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function displayCurrentDayAndUTCTime() {
  const currentDayIndex = new Date().getDay();
  const currentDay = daysOfWeek[currentDayIndex];
  const utcMilliseconds = Date.now(); // Get the current UTC time in milliseconds
      
  document.getElementById('day').textContent = `${currentDay}`;
  document.getElementById('utcTime').textContent = `${utcMilliseconds}`;
}

    // Display the current day and UTC time immediately
displayCurrentDayAndUTCTime();

    // Update the UTC time and current day every second
setInterval(displayCurrentDayAndUTCTime, 1000);