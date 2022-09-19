import { getUnixTime } from 'date-fns';

// 👇 Current timestamp in milliseconds
function getCurrentTimestamp() {
  return Date.now();
}

// 👇 To get UNIX timestamp, divide by 1000
function getCurrentUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

const exactDate = '09/19/2022 10:58:13';

// 👇 Get the timestamp when you already have the date object
const exactDateTimestamp = new Date(exactDate).getTime();

function Example() {
  return (
    <div>
      <div>Milliseconds: {getCurrentTimestamp()}</div>

      <div>Unix: {getCurrentUnixTimestamp()}</div>

      <div>Unix date-fns: {getUnixTime(new Date())}</div>

      <div>
        For {exactDate}: {exactDateTimestamp}
      </div>
    </div>
  );
}

export default Example;
