let SampleToken = artifacts.require('SampleToken.sol');

module.exports = ((deployer) => {
    deployer.deploy(SampleToken, "UdacityExampleToken", "UET", 18, 1000);
});