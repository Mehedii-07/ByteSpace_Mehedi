import React, { useState, useEffect } from 'react';
// Layout Components (Navbar/Header & Footer)
import { Navbar, Footer } from './components/layout';

// Landing Page Components
import { 
  Hero, 
  PartnerLogos, 
  LearningPaths, 
  PathToGrowth, 
  CreateAndManage, 
  CtaBanner, 
  CommunityTestimonials 
} from './components/landing';

// Courses Catalog & Course Detail
import { CoursesCatalog, CourseDetailPage } from './components/courses';

// Creator Profile & Search Pages
import { CreatorProfilePage } from './components/creator';
import { SearchPage } from './components/search';

// Auth Pages & Modals
import { LoginPage, RegisterPage, AuthModal, CartDrawer } from './components/auth';

// Error Pages
import { NotFoundPage } from './components/errors';

// Data & Icons
import { COURSES_DATA } from './data/coursesData';
import { CheckCircle2 } from 'lucide-react';
import './App.css';

export function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#home') return 'home';
      if (window.location.hash === '#course-detail') return 'course-detail';
      if (window.location.hash === '#courses') return 'courses';
      if (window.location.hash === '#creator-profile' || window.location.hash === '#creators') return 'creator-profile';
      if (window.location.hash === '#404') return '404';
      if (window.location.hash === '#register' || window.location.hash === '#signup') return 'register';
      if (window.location.hash === '#login' || window.location.hash === '#signin') return 'login';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#login' || hash === '#signin') setCurrentView('login');
      else if (hash === '#register' || hash === '#signup') setCurrentView('register');
      else if (hash === '#404') setCurrentView('404');
      else if (hash === '#creator-profile' || hash === '#creators') setCurrentView('creator-profile');
      else if (hash === '#course-detail') setCurrentView('course-detail');
      else if (hash === '#courses') setCurrentView('courses');
      else if (hash === '#home' || hash === '' || hash === '#') setCurrentView('home');
      else setCurrentView('404');
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDetailCourse, setSelectedDetailCourse] = useState(COURSES_DATA[1] || COURSES_DATA[0]);
  const [cartItems, setCartItems] = useState([COURSES_DATA[0]]); // Default 1 item so cart icon has badge like in photo
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [toastMessage, setToastMessage] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToCart = (course) => {
    if (!cartItems.find(item => item.id === course.id)) {
      setCartItems(prev => [...prev, course]);
      showToast(`Added "${course.title}" to your cart!`);
    } else {
      showToast(`"${course.title}" is already in your cart.`);
    }
  };

  const handleRemoveFromCart = (courseId) => {
    setCartItems(prev => prev.filter(item => item.id !== courseId));
    showToast('Course removed from cart.');
  };

  const handleCheckout = () => {
    showToast('Proceeding to secure checkout! 🚀');
    setTimeout(() => {
      setIsCartOpen(false);
    }, 1200);
  };

  const handleSelectCategoryFromPaths = (_category) => {
    setCurrentView('home');
    setTimeout(() => {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleJoinTutor = () => {
    showToast('Welcome future instructor! Creator registration opened.');
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleOpenAuth = (mode = 'signin') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = ({ name, mode }) => {
    setCurrentUser(name);
    showToast(mode === 'signin' ? `Welcome back, ${name}!` : `Account created for ${name}!`);
  };

  const handleOpen404 = () => {
    setCurrentView('404');
    if (typeof window !== 'undefined') window.location.hash = '#404';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    if (typeof window !== 'undefined') window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCourses = () => {
    setCurrentView('courses');
    if (typeof window !== 'undefined') window.location.hash = '#courses';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCreators = () => {
    setCurrentView('creator-profile');
    if (typeof window !== 'undefined') window.location.hash = '#creator-profile';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateRegister = () => {
    setCurrentView('register');
    if (typeof window !== 'undefined') window.location.hash = '#register';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateLogin = () => {
    setCurrentView('login');
    if (typeof window !== 'undefined') window.location.hash = '#login';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCourseDetail = (course) => {
    setSelectedDetailCourse(course);
    setCurrentView('course-detail');
    if (typeof window !== 'undefined') window.location.hash = '#course-detail';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bytespace-app">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 size={18} color="#ccff00" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Login View (Dedicated Fullscreen Artboard) */}
      {currentView === 'login' ? (
        <LoginPage 
          onNavigateHome={handleNavigateHome}
          onNavigateRegister={handleNavigateRegister}
          onAuthSuccess={handleAuthSuccess}
          onOpen404={handleOpen404}
        />
      ) : currentView === 'register' ? (
        <RegisterPage 
          onNavigateHome={handleNavigateHome}
          onNavigateLogin={handleNavigateLogin}
          onAuthSuccess={handleAuthSuccess}
          onOpenLogin={handleNavigateLogin}
          onOpen404={handleOpen404}
        />
      ) : (
        <>
          {/* Navigation */}
          <Navbar 
            cartCount={cartItems.length}
            currentUser={currentUser}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenAuth={handleOpenAuth}
            onNavigateHome={handleNavigateHome}
            onNavigateCourses={handleNavigateCourses}
            onNavigateCreators={handleNavigateCreators}
            onNavigateRegister={handleNavigateRegister}
            onNavigateLogin={handleNavigateLogin}
            onOpen404={handleOpen404}
            currentView={currentView}
          />

          {/* View Routing */}
          {currentView === 'home' && (
            <main>
              {/* Hero Section with Search and Visual Arch */}
              <Hero onSearch={(query) => {
                setSearchQuery(query);
                setCurrentView('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} />

              {/* Partner Logos Strip */}
              <PartnerLogos />

              {/* Courses Catalog Section */}
              <CoursesCatalog 
                searchQuery={searchQuery}
                onSelectCourse={(course) => handleOpenCourseDetail(course)}
                onAddToCart={handleAddToCart}
                onOpen404={handleOpen404}
              />

              {/* Learning Paths / Category Icons */}
              <LearningPaths onSelectCategory={handleSelectCategoryFromPaths} />

              {/* Path to Professional Growth Section */}
              <PathToGrowth />

              {/* Create and Manage Courses Section */}
              <CreateAndManage />

              {/* CTA Banner: Unlock Your Potential as a Creator */}
              <CtaBanner onJoinClick={handleJoinTutor} />

              {/* Community Testimonials */}
              <CommunityTestimonials />
            </main>
          )}

          {currentView === 'courses' && (
            <main>
              <SearchPage 
                initialSearchQuery={searchQuery}
                onSelectCourse={(course) => handleOpenCourseDetail(course)}
                onAddToCart={handleAddToCart}
                onNavigateHome={handleNavigateHome}
              />
            </main>
          )}

          {currentView === 'creator-profile' && (
            <main>
              <CreatorProfilePage 
                onSelectCourse={handleOpenCourseDetail}
                onAddToCart={handleAddToCart}
              />
            </main>
          )}

          {currentView === 'course-detail' && (
            <main>
              <CourseDetailPage 
                course={selectedDetailCourse}
                onBack={() => {
                  setCurrentView('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onAddToCart={handleAddToCart}
                onNavigateCreators={handleNavigateCreators}
              />
            </main>
          )}

          {currentView === '404' && (
            <main>
              <NotFoundPage 
                onGoHome={handleNavigateHome}
              />
            </main>
          )}

          {/* Footer */}
          <Footer 
            onNavigateCreators={handleNavigateCreators}
            onNavigateHome={handleNavigateHome}
            onNavigateCourses={handleNavigateCourses}
            onOpen404={handleOpen404}
          />
        </>
      )}

      {/* Auth Modal (Sign In / Sign Up) */}
      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess}
        onOpen404={handleOpen404}
      />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
