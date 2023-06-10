import './globals.css'


export const metadata = {
  title: 'Astrava',
  description: 'Astrava',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
