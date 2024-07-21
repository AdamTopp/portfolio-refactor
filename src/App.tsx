import Footer from '@components/Footer/Footer.component';
import Experience from './pages/Experience/Experience.component';
import { StyleProviders } from './Providers/StyleProviders';

function App() {
  return (
    <>
      <StyleProviders>
        <main>
          <Experience />
        </main>
        <Footer />
      </StyleProviders>
    </>
  )
}

export default App
