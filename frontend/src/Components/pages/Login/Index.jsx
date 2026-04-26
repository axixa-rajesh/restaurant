import React from 'react';

function Index(props) {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px', width: '350px', background: '#fff' }}>
        <h2 style={{ textAlign: 'center' }}>RMS Login</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="email" placeholder="Email" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="password" placeholder="Password" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
    );
}

export default Index;