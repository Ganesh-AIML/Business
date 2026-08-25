import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ErrorBoundary from './components/ui/ErrorBoundary'
import { PageTransition } from './components/animations'

const Home             = lazy(() => import('./pages/Home'))
const About            = lazy(() => import('./pages/About'))
const RealEstateServices = lazy(() => import('./pages/RealEstateServices'))
const Properties       = lazy(() => import('./pages/Properties'))
const CarLeasing       = lazy(() => import('./pages/CarLeasing'))
const Vehicles         = lazy(() => import('./pages/Vehicles'))
const Services         = lazy(() => import('./pages/Services'))
const Community        = lazy(() => import('./pages/Community'))
const Contact          = lazy(() => import('./pages/Contact'))

function PageLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function NotFound() {
  return (
    <div className="py-section-gap text-center">
      <div className="section-container">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          Page Not Found
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="#/"
          className="inline-block bg-primary text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoading />}>
        <PageTransition>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index             element={<Home />}             />
              <Route path="/about"     element={<About />}            />
              <Route path="/real-estate" element={<RealEstateServices />} />
              <Route path="/properties"  element={<Properties />}     />
              <Route path="/car-leasing" element={<CarLeasing />}     />
              <Route path="/vehicles"    element={<Vehicles />}       />
              <Route path="/services"    element={<Services />}       />
              <Route path="/community"   element={<Community />}      />
              <Route path="/contact"     element={<Contact />}        />
              <Route path="*"            element={<NotFound />}       />
            </Route>
          </Routes>
        </PageTransition>
      </Suspense>
    </ErrorBoundary>
  )
}
