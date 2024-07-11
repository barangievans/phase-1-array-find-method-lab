// index.js

function superbowlWin(record) {
    const winningYearObj = record.find(entry => entry.result === 'W');
    return winningYearObj ? winningYearObj.year : undefined;
  }
  
  module.exports = {
    superbowlWin
  };
  
