import React from 'react';

import { light } from '../styled/constants';

const PowerButtonSvg = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <path
      fill={props.on ? props.theme.primary : props.theme.secondary}
      fillRule="evenodd"
      d="M24.5173333,14.68 C25.2764482,15.3271143 25.8799978,16.1111065 26.328,17.032 C26.7760022,17.9777825 27,18.9671059 27,20 C27,21.2693397 26.6826698,22.4453279 26.048,23.528 C25.4257747,24.5857831 24.5857831,25.4257747 23.528,26.048 C22.4453279,26.6826698 21.2693397,27 20,27 C18.7306603,27 17.5546721,26.6826698 16.472,26.048 C15.4142169,25.4257747 14.5742253,24.5857831 13.952,23.528 C13.3173302,22.4453279 13,21.2693397 13,20 C13,18.9671059 13.2302199,17.9777825 13.6906667,17.032 C14.1262244,16.1111065 14.7235518,15.3271143 15.4826667,14.68 L16.5653333,15.7626667 C15.9555525,16.2728914 15.4764462,16.8888853 15.128,17.6106667 C14.7546648,18.3697816 14.568,19.1662181 14.568,20 C14.568,20.9955605 14.8106642,21.9102181 15.296,22.744 C15.7813358,23.5653374 16.4346626,24.2186642 17.256,24.704 C18.0897819,25.1893358 19.0044395,25.432 20,25.432 C20.9955605,25.432 21.9102181,25.1893358 22.744,24.704 C23.5653374,24.2186642 24.2186642,23.5653374 24.704,22.744 C25.1893358,21.9102181 25.432,20.9955605 25.432,20 C25.432,19.1537735 25.2546684,18.3666703 24.9,17.6386667 C24.5453316,16.910663 24.056892,16.2977803 23.4346667,15.8 L24.5173333,14.68 Z M20.7653333,13 L20.7653333,20.7653333 L19.2346667,20.7653333 L19.2346667,13 L20.7653333,13 Z"
      transform="translate(-13 -13)"
    />
  </svg>
);

PowerButtonSvg.defaultProps = {
  theme: light
};

export default PowerButtonSvg;
