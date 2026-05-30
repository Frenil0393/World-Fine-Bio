document.write(`
  <style>
    /* -------------------------------------------------------------
       DESKTOP NAVIGATION (Unchanged)
    ------------------------------------------------------------- */
    .site-nav-link {
      border-radius: 9999px;
      padding: 8px 16px;
      transition: background-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
    }

    .site-nav-link:hover {
      background: rgba(216, 232, 216, 0.45);
      color: #0f231b;
      box-shadow: 0 6px 16px rgba(15, 35, 27, 0.08);
    }

    .site-nav-link.nav-active {
      background: #d8e8d8;
      color: #0f231b;
      font-weight: 700;
      box-shadow: 0 8px 18px rgba(15, 35, 27, 0.18);
    }

    .site-nav-link.nav-active:hover {
      background: #d8e8d8;
    }

    /* Toggle Button visibility */
    .shared-menu-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 8px;
      transition: background-color 200ms ease;
    }
    .shared-menu-toggle:hover {
      background: rgba(6, 78, 59, 0.08);
    }

    @media (min-width: 768px) {
      .shared-menu-toggle {
        display: none;
      }
    }

    /* -------------------------------------------------------------
       MOBILE HAMBURGER ANIMATION
    ------------------------------------------------------------- */
    .hamburger-icon {
      width: 22px;
      height: 16px;
      position: relative;
      display: block;
    }
    
    .hamburger-icon span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: currentColor;
      border-radius: 2px;
      opacity: 1;
      left: 0;
      transition: 250ms ease-in-out;
      transform-origin: center;
    }
    
    .hamburger-icon span:nth-child(1) { top: 0px; }
    .hamburger-icon span:nth-child(2) { top: 7px; }
    .hamburger-icon span:nth-child(3) { top: 14px; }

    /* Animated to Close (X) state */
    .shared-menu-toggle[aria-expanded="true"] .hamburger-icon span:nth-child(1) {
      top: 7px;
      transform: rotate(135deg);
    }
    .shared-menu-toggle[aria-expanded="true"] .hamburger-icon span:nth-child(2) {
      opacity: 0;
      transform: translateX(10px);
    }
    .shared-menu-toggle[aria-expanded="true"] .hamburger-icon span:nth-child(3) {
      top: 7px;
      transform: rotate(-135deg);
    }

    /* -------------------------------------------------------------
       NEW MOBILE SIDEBAR & BACKDROP
    ------------------------------------------------------------- */
    /* The backdrop covers the entire page and blurs it. 
       Z-index 100 sits below the header (120) but above content. */
    .mobile-sidebar-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(10, 26, 18, 0.5);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      opacity: 0;
      pointer-events: none;
      transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 100;
    }

    .mobile-sidebar-backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    /* The sidebar sliding in from the right 
       Z-index 110 sits below the header (120) but above backdrop. */
    .mobile-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 80%;
      max-width: 300px;
      background: #ffffff;
      box-shadow: -12px 0 40px rgba(0, 0, 0, 0.15);
      z-index: 110;
      transform: translateX(100%);
      transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      padding-top: 80px; /* Space to not overlap the fixed header */
      overflow-y: auto;
    }

    .mobile-sidebar.open {
      transform: translateX(0);
    }

    /* Prevent Sidebar from showing on desktop */
    @media (min-width: 768px) {
      .mobile-sidebar-backdrop, .mobile-sidebar {
        display: none !important;
      }
    }

    /* Sidebar Internal Styling */
    .mobile-sidebar-links {
      display: flex;
      flex-direction: column;
      padding: 12px 16px 24px;
      gap: 8px;
    }

    .mobile-sidebar-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 18px;
      border-radius: 12px;
      font-weight: 600;
      color: #121c2a;
      font-size: 1.05rem;
      transition: all 200ms ease;
      text-decoration: none;
      font-family: 'Inter', sans-serif;
    }

    .mobile-sidebar-link:hover {
      background: rgba(216, 232, 216, 0.4);
    }

    .mobile-sidebar-link.nav-active {
      background: #d8e8d8;
      color: #004a36;
      box-shadow: inset 0 0 0 1px rgba(15, 35, 27, 0.05);
    }
    
    .mobile-sidebar-link.nav-active::after {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #006c49;
    }

    @media (max-width: 640px) {
      nav.sticky > div {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 16px !important;
        padding-right: 16px !important;
      }

      nav.sticky img {
        width: 38px;
        height: 38px;
      }
    }
  </style>

  <!-- z-[120] ensures the fixed header is always above the backdrop (100) and sidebar (110) -->
  <nav class="sticky top-0 w-full z-[120] bg-surface/90 backdrop-blur-md shadow-[0_10px_30px_rgba(6,78,59,0.05)] transition-all duration-300">
    <div class="flex justify-between items-center px-xl py-md max-w-container-max mx-auto md:px-lg">
      
      <!-- Brand Logo & Name -->
      <div class="flex items-center gap-sm">
        <a href="index.html" class="flex items-center gap-sm relative z-10">
          <img alt="WORLD FINE BIO CHEMICLES logo" class="h-10 w-10 rounded-full object-cover border-2 border-white/60 shadow-[0_8px_20px_rgba(15,35,27,0.22)] md:h-12 md:w-12" src="image.png" />
          <span class="block max-w-[calc(100vw-112px)] overflow-hidden text-ellipsis whitespace-nowrap font-headline-md text-[1.02rem] font-bold leading-tight text-primary md:max-w-none md:text-headline-md">World Fine Bio Chemicals</span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-lg">
        <a class="site-nav-link font-label-caps text-[0.9rem] md:text-[0.94rem] text-on-surface-variant hover:text-primary transition-colors duration-200" href="index.html">Overview</a>
        <a class="site-nav-link font-label-caps text-[0.9rem] md:text-[0.94rem] text-on-surface-variant hover:text-primary transition-colors duration-200" href="products.html">Products</a>
        <a class="site-nav-link font-label-caps text-[0.9rem] md:text-[0.94rem] text-on-surface-variant hover:text-primary transition-colors duration-200" href="contact.html">Contact</a>
      </nav>

      <!-- Mobile Menu Toggle Button (Animates 3 lines to Cross) -->
      <button class="shared-menu-toggle text-primary" id="mobileMenuToggle" type="button" aria-expanded="false" aria-controls="mobileSidebar" aria-label="Open navigation menu">
        <div class="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </nav>

  <!-- Background Backdrop Blur for Mobile Sidebar -->
  <!-- Clicking it dismisses the menu smoothly without following any links -->
  <div class="mobile-sidebar-backdrop" id="mobileMenuBackdrop" aria-hidden="true" onclick="window.WorldFineBioMenu.close(event)"></div>
  
  <!-- Mobile Sidebar Menu -->
  <!-- Sliding in under the sticky header -->
  <aside class="mobile-sidebar" id="mobileSidebar" aria-hidden="true">
    <div class="mobile-sidebar-links">
      <a class="mobile-sidebar-link" href="index.html">Overview</a>
      <a class="mobile-sidebar-link" href="products.html">Products</a>
      <a class="mobile-sidebar-link" href="contact.html">Contact</a>
    </div>
  </aside>
`);

(() => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const getMenuElements = () => ({
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    mobileSidebar: document.getElementById('mobileSidebar'),
    mobileMenuBackdrop: document.getElementById('mobileMenuBackdrop'),
  });

  const closeMobileMenu = () => {
    const { mobileMenuToggle, mobileSidebar, mobileMenuBackdrop } = getMenuElements();
    if (!mobileSidebar || !mobileMenuBackdrop) return;
    
    // Animate Out
    mobileSidebar.classList.remove('open');
    mobileMenuBackdrop.classList.remove('open');
    
    // Accessibility & Body Scroll
    mobileSidebar.setAttribute('aria-hidden', 'true');
    mobileMenuBackdrop.setAttribute('aria-hidden', 'true');
    if(mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const openMobileMenu = () => {
    const { mobileMenuToggle, mobileSidebar, mobileMenuBackdrop } = getMenuElements();
    if (!mobileSidebar || !mobileMenuBackdrop) return;
    
    // Animate In
    mobileSidebar.classList.add('open');
    mobileMenuBackdrop.classList.add('open');
    
    // Accessibility & Body Scroll
    mobileSidebar.setAttribute('aria-hidden', 'false');
    mobileMenuBackdrop.setAttribute('aria-hidden', 'false');
    if(mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  window.WorldFineBioMenu = {
    toggle(event) {
      if (event) event.preventDefault();
      const { mobileSidebar } = getMenuElements();
      if (!mobileSidebar) return;
      if (mobileSidebar.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    },
    close(event) {
      if (event) event.preventDefault();
      closeMobileMenu();
    },
  };

  const updateActiveLinks = () => {
    // Desktop site nav links
    document.querySelectorAll('.site-nav-link').forEach((link) => {
      const isActive = link.getAttribute('href') === currentPath;
      link.classList.toggle('nav-active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });

    // Mobile sidebar links
    document.querySelectorAll('.mobile-sidebar-link').forEach((link) => {
      const isActive = link.getAttribute('href') === currentPath;
      link.classList.toggle('nav-active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
      
      // Auto-close menu when navigating inside the page (e.g. hash links)
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  };

  const init = () => {
    updateActiveLinks();

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', (event) => {
        window.WorldFineBioMenu.toggle(event);
      });
    }

    // Close on Escape key press
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
