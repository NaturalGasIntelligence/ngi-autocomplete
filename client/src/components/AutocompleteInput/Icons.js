/* eslint max-len: 0 */
import React from 'react';
import PropTypes from 'prop-types';


const IconPropTypes = {
  className: PropTypes.string,
};


const SearchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      fill="currentColor"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);


SearchIcon.propTypes = IconPropTypes;


const RightArrowIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
  </svg>
);


RightArrowIcon.propTypes = IconPropTypes;


const RemoveIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
  </svg>
);


RemoveIcon.propTypes = IconPropTypes;


const LinkIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 10c-.563 0-1 .469-1 1v3H2V5h3c.531 0 1-.438 1-1 0-.531-.469-1-1-1H2C.875 3 0 3.906 0 5v9c0 1.125.875 2 2 2h9c1.094 0 2-.875 2-2v-3c0-.531-.469-1-1-1Zm3.25-10H11c-.406 0-.781.25-.938.625a1.01 1.01 0 0 0 .22 1.094L11.561 3l-6.28 6.313a.964.964 0 0 0 0 1.406A.99.99 0 0 0 6 11c.25 0 .5-.094.688-.281L13 4.438l1.281 1.28a1.01 1.01 0 0 0 1.094.22C15.75 5.78 16 5.405 16 5V.75a.76.76 0 0 0-.75-.75Z"></path>
  </svg>
);


LinkIcon.propTypes = IconPropTypes;


export {
  SearchIcon,
  RightArrowIcon,
  RemoveIcon,
  LinkIcon
};
