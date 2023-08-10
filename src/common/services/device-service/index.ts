import UAParser from 'ua-parser-js';

function getDeviceDetails(userAgentRaw: string) {
  const userAgent = new UAParser(userAgentRaw);
  const device = {
    isMobile: userAgent.getDevice().type?.toLocaleLowerCase() === 'mobile',
    isMac: userAgent.getOS().name?.toLocaleLowerCase() === 'mac os',
  };

  return device;
}

const DeviceService = {
  getDeviceDetails,
};

export default DeviceService;
