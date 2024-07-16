import Experience from './pages/Experience/Experience.component'
import { StyleProviders } from './Providers/StyleProviders'

function App() {
  return (
    <>
      <StyleProviders>
        <main>
          <Experience />
        </main>
      </StyleProviders>
    </>
  )
}

export default App
