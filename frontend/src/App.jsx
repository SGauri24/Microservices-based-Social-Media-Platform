import React from 'react';
import { SocialMediaProvider } from './context/SocialMediaContext';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <SocialMediaProvider>
      <div className="App">
        <Navbar />
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem', display: 'grid', gridTemplateColumns: '250px 1fr 300px', gap: '2rem' }}>
          {/* Sidebar */}
          <aside className="glass-card" style={{ padding: '1.5rem', height: 'fit-content' }}>
            <h3 style={{ marginBottom: '1rem' }}>Menu</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Feed</li>
              <li style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Trending</li>
              <li style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Following</li>
              <li style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Saved</li>
            </ul>
          </aside>

          {/* Feed Content */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card fade-in" style={{ padding: '1.5rem' }}>
              <textarea
                placeholder="What's on your mind?"
                style={{ width: '100%', background: 'none', border: 'none', color: 'white', outline: 'none', resize: 'none', fontSize: '1.1rem', minHeight: '80px' }}
              ></textarea>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button className="btn btn-primary">Post</button>
              </div>
            </div>

            {/* Feed items will go here */}
            <div className="glass-card fade-in" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                <div>
                  <h4 style={{ margin: 0 }}>John Doe</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2 hours ago</span>
                </div>
              </div>
              <p>Just started building my microservices social media platform! 🚀 #socialmedia #microservices #react</p>
              <div style={{ padding: '10rem', borderRadius: 'var(--radius-md)', background: 'linear-gradient(45deg, #1e293b, #334155)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--text-muted)' }}>Post Image Placeholder</span>
              </div>
            </div>
          </section>

          {/* Right Sidebar - Suggestions/Trends */}
          <aside className="glass-card" style={{ padding: '1.5rem', height: 'fit-content' }}>
            <h3 style={{ marginBottom: '1rem' }}>Suggestions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                    <span style={{ fontSize: '0.9rem' }}>User_{i}</span>
                  </div>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }}>Follow</button>
                </div>
              ))}
            </div>
          </aside>
        </main>
      </div>
    </SocialMediaProvider>
  );
}

export default App;
