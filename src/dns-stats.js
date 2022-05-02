const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  const point = {};
  domains.forEach((domain) => {
    let nowDomain = '';
    domain.split('.').reverse().forEach((element) => {
      nowDomain += '.'.concat(element);
      if (point[nowDomain]) {
        point[nowDomain] += 1;
      } else {
        point[nowDomain] = 1;
      }
    });
  });
  return point;
}

module.exports = {
  getDNSStats
};
