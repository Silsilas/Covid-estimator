const factor = (data) => {
  let getFactor;
  if (data.periodType === 'days') {
    getFactor = (data.timeToElapse * 1) / 3;
  } else if (data.periodType === 'weeks') {
    getFactor = (data.timeToElapse * 7) / 3;
  } else if (data.periodType === 'months') {
    getFactor = (data.timeToElapse * 30) / 3;
  } else {
    getFactor = 0;
  }
  return getFactor;
};


const covid19ImpactEstimator = (data) => ({
  data,
  impact: {
    currentlyInfected: data.reportedCase * 10,
    infectionsByRequestedTime: (data.reportedCase * 10) * (2 ** factor(data))
  },
  suvereImpact: {
    currentlyInfected: data.reportedCase * 50,
    infectionsByRequestedTime: (data.reportedCase * 50) * (2 ** factor(data))
  }
});

export default covid19ImpactEstimator;
