import '../styles/globals.css'
import NavBar from './components/nav-bar'
import Provider from './provider'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
