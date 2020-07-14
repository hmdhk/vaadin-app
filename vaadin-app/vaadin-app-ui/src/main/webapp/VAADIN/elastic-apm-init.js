console.log(">>> CUSTOM APM SCRIPT CALLED!!!");
elasticApm.init({
  serviceName: 'tomcat-servlet-test',
  // serverUrl: '',
  environment: 'dev',
  breakdownMetrics: true,
  logLevel: 'trace'
})