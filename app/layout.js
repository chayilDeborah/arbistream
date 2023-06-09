import './globals.css'


export const metadata = {
  title: 'Arbistream',
  description: 'Arbistream',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
