const { NotImplementedError } = require('../extensions/index.js');


function getEmailDomain(myEmail) {
  return myEmail.split("@").pop();
}

module.exports = {
  getEmailDomain
};
