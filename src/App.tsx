import TitleScreen from './TitleScreen/TitleScreen.component'
import { StyleProviders } from './Providers/StyleProviders'

function App() {
  return (
    <>
      <StyleProviders>
        <main>
          <TitleScreen />
        </main>
      </StyleProviders>
    </>
  )
}

export default App
