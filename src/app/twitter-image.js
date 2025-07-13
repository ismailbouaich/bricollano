import { ImageResponse } from 'next/og';
 
export const alt = 'bricollano - Servizi Domestici con Crypto';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 48,
          background: '#e2dacd',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 50,
            left: 50,
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: 40,
          }}
        >
          <div style={{ 
            width: 50, 
            height: 50, 
            backgroundColor: '#e0710d', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}>✋</div>
          <div style={{ color: '#292927' }}>bricollano</div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 100px',
        }}>
          <h1 style={{ 
            fontSize: 70, 
            fontWeight: 'bold', 
            marginBottom: 20,
            color: '#292927',
            lineHeight: 1.1,
          }}>
            Servizi Domestici con
            <span style={{ color: '#e0710d', display: 'block' }}>Pagamenti Crypto</span>
          </h1>
          <p style={{ 
            fontSize: 28, 
            color: 'rgba(41, 41, 39, 0.7)',
            maxWidth: 800,
          }}>
            Prenota servizi per la tua casa e paga in Bitcoin e altre criptovalute
          </p>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: 50,
          display: 'flex',
          gap: 20,
        }}>
          <div style={{ 
            background: '#e0710d', 
            color: 'white',
            padding: '10px 20px',
            borderRadius: 12,
            fontSize: 24,
          }}>
            Milano
          </div>
          <div style={{ 
            background: 'white', 
            color: '#292927',
            padding: '10px 20px',
            borderRadius: 12,
            fontSize: 24,
            border: '2px solid #292927',
          }}>
            bricollano.it
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
