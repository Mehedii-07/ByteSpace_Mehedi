import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerLogos } from './components/PartnerLogos';
import { CoursesCatalog } from './components/CoursesCatalog';
import { COURSES_DATA } from './data/coursesData';
import { LearningPaths } from './components/LearningPaths';
import { PathToGrowth } from './components/PathToGrowth';
import { CreateAndManage } from './components/CreateAndManage';
import { CtaBanner } from './components/CtaBanner';
import { CommunityTestimonials } from './components/CommunityTestimonials';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { CourseDetailPage } from './components/CourseDetailPage';
import { NotFoundPage } from './components/NotFoundPage';
import { AuthModal } from './components/AuthModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckCircle2 } from 'lucide-react';
import './App.css';

export function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'course-detail' | '404'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalCourse, setSelectedModalCourse] = useState(null);
  const [selectedDetailCourse, setSelectedDetailCourse] = useState(COURSES_DATA[0]);
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

  const handleOpenCourseDetail = (course) => {
    setSelectedDetailCourse(course);
    setCurrentView('course-detail');
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

      {/* Navigation */}
      <Navbar 
        cartCount={cartItems.length}
        currentUser={currentUser}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={handleOpenAuth}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpen404={() => {
          setCurrentView('404');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentView={currentView}
      />

      {/* View Routing */}
      {currentView === 'home' && (
        <main>
          {/* Hero Section with Search and Visual Arch */}
          <Hero onSearch={(query) => setSearchQuery(query)} />

          {/* Partner Logos Strip */}
          <PartnerLogos />

          {/* Courses Catalog Section */}
          <CoursesCatalog 
            searchQuery={searchQuery}
            onSelectCourse={(course) => setSelectedModalCourse(course)}
            onAddToCart={handleAddToCart}
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

      {currentView === 'course-detail' && (
        <main>
          <CourseDetailPage 
            course={selectedDetailCourse}
            onBack={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAddToCart={handleAddToCart}
          />
        </main>
      )}

      {currentView === '404' && (
        <main>
          <NotFoundPage 
            onGoHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {/* Footer */}
      <Footer 
        onOpen404={() => {
          setCurrentView('404');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Course Details Modal (Quick Preview) */}
      <CourseModal 
        course={selectedModalCourse}
        onClose={() => setSelectedModalCourse(null)}
        onAddToCart={handleAddToCart}
        onViewFullDetail={handleOpenCourseDetail}
      />

      {/* Auth Modal (Sign In / Sign Up) */}
      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess}
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
