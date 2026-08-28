import { Route, Routes } from 'react-router'
import { SiteLayout } from '../components/layout/SiteLayout.tsx'
import { ContactPage } from '../pages/ContactPage.tsx'
import { ExperiencePage } from '../pages/ExperiencePage.tsx'
import { HomePage } from '../pages/HomePage.tsx'
import { NotFoundPage } from '../pages/NotFoundPage.tsx'
import { WorkPage } from '../pages/WorkPage.tsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
