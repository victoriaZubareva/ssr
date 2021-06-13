import React from 'react';

export default ({ data }) => {
  return (
    <section>
      <h1 style={{ color: 'red' }}>Home</h1>
      <p>test test test</p>
      <ul>
        {data.map(({ id, email }) => (
          <li key={id}>{email}</li>
        ))}
      </ul>
    </section>
  );
};
