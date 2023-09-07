// Function to display the current day and UTC time
function displayCurrentDayAndUTCTime() {
    const currentDate = new Date();

    const currentDayElement = document.getElementById("day");
    currentDayElement.textContent = currentDate.toLocaleDateString("en-US", { weekday: "long" });

    const currentTimeElement = document.getElementById("time");
    currentTimeElement.textContent = currentDate.toISOString();
}

displayCurrentDayAndUTCTime();