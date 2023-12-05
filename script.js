// write js code here if required
function updateTimer() {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}, ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
      document.getElementById('timer').innerText = formattedDate;
    }

    // Call the updateTimer function initially
    updateTimer();

    // Update the timer every second (1000 milliseconds)
    setInterval(updateTimer, 1000);