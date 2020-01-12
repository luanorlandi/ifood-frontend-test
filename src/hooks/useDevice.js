import { useState, useEffect } from 'react';
import constants from '../constants';

const { DESKTOP_DEVICE_BREAKPOINT } = constants;

const useDevice = () => {
  const [device, setDevice] = useState({});

  useEffect(() => {
    setDevice({
      isTouch: window.innerWidth < DESKTOP_DEVICE_BREAKPOINT,
      isDesktop: window.innerWidth >= DESKTOP_DEVICE_BREAKPOINT,
    });
  }, []);

  return device;
};

export default useDevice;
