import DashboardLayout from './layouts/DashboardLayout.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'

function App() {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Everything important, in one place."
      activeItem="dashboard"
    >
      <Dashboard />
    </DashboardLayout>
  )
}

export default App
