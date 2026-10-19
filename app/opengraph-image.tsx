import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#2b1b12',
          color: '#f4e9dc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            opacity: 0.7,
            letterSpacing: 4,
          }}
        >
          КВАРТА · МИНСК
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 84,
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          <div style={{ display: 'flex' }}>Обжариваем по четвергам.</div>
          <div style={{ display: 'flex' }}>Доставляем в пятницу.</div>
        </div>
      </div>
    ),
    size
  );
}
