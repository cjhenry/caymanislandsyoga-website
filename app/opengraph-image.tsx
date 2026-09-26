import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Cayman Yoga - Find Your Perfect Yoga Teacher in the Cayman Islands'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom, #f0fdfa, #ccfbf1)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#0f766e',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          🧘 Cayman Yoga
        </div>
        <div
          style={{
            fontSize: 48,
            color: '#134e4a',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.3,
          }}
        >
          Find Your Perfect Yoga Teacher in the Cayman Islands
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#115e59',
            marginTop: 40,
            textAlign: 'center',
          }}
        >
          caymanislandsyoga.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
