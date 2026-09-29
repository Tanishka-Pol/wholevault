import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Documents from './pages/documents/Documents.jsx'
import Bills from './pages/bills/Bills.jsx'
import Assets from './pages/assets/Assets.jsx'
import Reminders from './pages/reminders/Reminders.jsx'
import LifeEvents from './pages/life-events/LifeEvents.jsx'
import Settings from './pages/settings/Settings.jsx'
import NotFound from './pages/not-found/NotFound.jsx'

function App() {
  return (
    <Routes>
      {/* Every page renders inside the shared shell via the layout's <Outlet /> */}
      <Route element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="documents" element={<Documents />} />
        <Route path="bills" element={<Bills />} />
        <Route path="assets" element={<Assets />} />
        <Route path="reminders" element={<Reminders />} />
        <Route path="life-events" element={<LifeEvents />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
