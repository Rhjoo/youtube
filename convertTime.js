// Borrowed this from https://codepen.io/kucerajacob/pen/6b6a347c7d24edee15b3491420db4ecd?editors=0010

const convertTime = (duration) => {
  let a = duration.match(/\d+/g);

  if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
      a = [0, a[0], 0];
  }
  if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
      a = [a[0], 0, a[1]];
  }
  if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
      a = [a[0], 0, 0];
  }

  duration = 0;

  if (a.length == 3) {
      duration = duration + parseInt(a[0]) * 3600;
      duration = duration + parseInt(a[1]) * 60;
      duration = duration + parseInt(a[2]);
  }
  if (a.length == 2) {
      duration = duration + parseInt(a[0]) * 60;
      duration = duration + parseInt(a[1]);
  }
  if (a.length == 1) {
      duration = duration + parseInt(a[0]);
  }
  const h = Math.floor(duration / 3600);
  const m = Math.floor(duration % 3600 / 60);
  const s = Math.floor(duration % 3600 % 60);
  console.log((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
};

module.exports = convertTime;