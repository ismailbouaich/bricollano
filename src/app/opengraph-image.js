import { ImageResponse } from 'next/og';
export const alt = 'Bricollano - Servizi per la Casa con Pagamenti Crypto';
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
            backgroundColor: '#2563eb', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}>✋</div>
          <div style={{ color: '#292927' }}>Bricollano</div>
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
            fontSize: 80, 
            fontWeight: 'bold', 
            marginBottom: 20,
            color: '#292927',
            lineHeight: 1.1,
          }}>
            Servizi per la Casa con
            <span style={{ color: '#2563eb', display: 'block' }}>Bricollano</span>
          </h1>
          <p style={{ 
            fontSize: 28, 
            color: 'rgba(41, 41, 39, 0.7)',
            maxWidth: 800,
          }}>
            La prima piattaforma italiana che unisce servizi domestici professionali con pagamenti in criptovalute e sistema di credito integrato
          </p>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: 50,
          display: 'flex',
          gap: 20,
        }}>
          <div style={{ 
            background: '#2563eb', 
            color: 'white',
            padding: '10px 20px',
            borderRadius: 12,
            fontSize: 24,
          }}>
            Pagamenti Crypto
          </div>
          <div style={{ 
            background: '#bb6a48', 
            color: 'white',
            padding: '10px 20px',
            borderRadius: 12,
            fontSize: 24,
          }}>
            Servizi Domestici
          </div>
          <div style={{ 
            background: '#9a1118', 
            color: 'white',
            padding: '10px 20px',
            borderRadius: 12,
            fontSize: 24,
          }}>
            Milano
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
