import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Dashboard } from '@/pages/Dashboard'
import { AllSubmissions } from '@/pages/AllSubmissions'
import { Assignments } from '@/pages/Assignments'
import { OnlineDashboards } from '@/pages/OnlineDashboards'
import { About } from '@/pages/About'
import { CaseStudies } from '@/pages/CaseStudies'
import { Files } from '@/pages/Files'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="submissions" element={<AllSubmissions />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="online-dashboards" element={<OnlineDashboards />} />
          <Route path="files" element={<Files />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
