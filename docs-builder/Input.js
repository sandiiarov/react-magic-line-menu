import React from 'react';

const labelStyle = {
  background: '#fff',
  boxShadow:
    '0 6px 8px rgba(102,119,136,0.03), 0 1px 2px rgba(102,119,136,0.3)',
  display: 'flex',
  height: 48,
  alignItems: 'center',
  cursor: 'text',
  width: 600,
};

const prefixStyle = {
  fontSize: 16,
  display: 'block',
  color: 'rgba(102,119,136,0.5)',
  fontWeight: 400,
  userSelect: 'none',
  lineHeight: '1.5em',
  padding: '2px 8px',
  borderRadius: 3,
  background: 'rgba(241,243,245,0.5)',
  margin: '0 0 0 16px',
  boxShadow: '0 1px 1px rgba(102,119,136,0.25)',
  whiteSpace: 'nowrap',
};

const sepStyle = {
  fontSize: 16,
  color: 'rgba(102,119,136,0.5)',
  fontWeight: 400,
  margin: '0 8px',
};

const Input = props => (
  <label style={labelStyle} htmlFor="#">
    <span style={prefixStyle}>{props.label}</span>
    <span style={sepStyle}>:</span>
    <input type={props.type || 'text'} {...props} />
  </label>
);

export default Input;
