// CDN - Content Delivery Network

// const newYearDate = new Date(2023,11,31,23,59,59);
const newYearDate = moment("31-12-2023 23:59:59", "DD-MM-YYYY HH:mm:ss");

const getRemainsTime = (finalDate) => {
  const dateNow = moment();

  const daysRemains = finalDate.diff(dateNow, "days");

  const hoursRemains = finalDate.diff(
    dateNow.add(daysRemains, "days"),
    "hours"
  );
  const minutesRemains = finalDate.diff(
    dateNow.add(hoursRemains, "hours"),
    "minutes"
  );
  const secondsRemains = finalDate.diff(
    dateNow.add(minutesRemains, "minutes"),
    "seconds"
  );

  //   console.log(
  //     `${daysRemains}:${hoursRemains}:${minutesRemains}:${secondsRemains}`
  //   );

  return {
    days: daysRemains,
    hours: hoursRemains,
    minutes: minutesRemains,
    seconds: secondsRemains,
  };
};

const formatTimeValue = (value) => String(value).padStart(2, "0");

const renderCountdown = (remainTime) => {
  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");

  days.innerText = formatTimeValue(remainTime.days);
  hours.innerText = formatTimeValue(remainTime.hours);
  minutes.innerText = formatTimeValue(remainTime.minutes);
  seconds.innerText = formatTimeValue(remainTime.seconds);
};

setInterval(() => {
  const newYearTimeRemain = getRemainsTime(newYearDate);
  renderCountdown(newYearTimeRemain);
}, 1000);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const buildSnowflake = () => {
  const snowflake = document.createElement("i");
  // snowflake.className = "fa-solid fa-snowflake";
  snowflake.classList.add("fa-solid", "fa-snowflake", "snowflake");
  snowflake.style.left = `${getRandomInt(5, 95)}vw`;
  const size = getRandomInt(25, 60);
  snowflake.style.fontSize = `${size}px`;
  snowflake.style.opacity = Math.min(Math.random() + 0.2, 1);
  const duration = getRandomInt(2, 5);
  snowflake.style.animationDuration = `${duration}s`;

  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);

  return snowflake;
};

function renderSnowflake(){
    const snowflake = buildSnowflake();
    document.body.append(snowflake);

}

setInterval(renderSnowflake, 50);

const points = [5,4,2,7,4,0,0,3,5,4,7,7];

console.log(points.map(() => 0));
console.log(points.map(point => formatTimeValue(point)));
console.log(points.map(point => Boolean(point)));
