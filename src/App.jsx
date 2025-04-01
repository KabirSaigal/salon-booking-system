import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';
import Payment from './pages/Payment';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          {/* Navigation bar that appears on all pages except login */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <main className="container mx-auto px-4 py-8">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/booking" element={<Booking />} />
                      <Route
                        path="/admin"
                        element={
                          <ProtectedRoute>
                            <AdminDashboard />
                          </ProtectedRoute>
                        }
                      />
                      <Route path="/payment" element={<Payment />} />
                    </Routes>
                  </main>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 