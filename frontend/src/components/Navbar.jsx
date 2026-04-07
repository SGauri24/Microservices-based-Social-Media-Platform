import React from 'react';
import { Home, MessageSquare, Bell, User, Search, PlusSquare } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="glass-card" style={{
            position: 'sticky',
            top: '1rem',
            margin: '1rem',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 2rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <h2 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.5rem' }}>Socialize</h2>
                <div className="glass-card" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', gap: '0.5rem', background: 'rgba(255,255,255,0.05)' }}>
                    <Search size={18} color="var(--text-muted)" />
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{ background: 'none', border: 'none', color: 'white', outline: 'none', width: '200px' }}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Home className="nav-icon" style={{ cursor: 'pointer' }} />
                <MessageSquare className="nav-icon" style={{ cursor: 'pointer' }} />
                <PlusSquare className="nav-icon" style={{ cursor: 'pointer', color: 'var(--primary)' }} />
                <Bell className="nav-icon" style={{ cursor: 'pointer' }} />
                <div style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    cursor: 'pointer'
                }}></div>
            </div>
        </nav>
    );
};

export default Navbar;
