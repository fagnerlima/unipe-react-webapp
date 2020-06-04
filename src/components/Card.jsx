import React from 'react';

export default ({ title, description, value }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{value}</h3>
    </div>
  );
}
