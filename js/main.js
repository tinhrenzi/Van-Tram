/* ==========================================================================
   VÂN TRÀM - Graphic Design Portfolio
   Main JavaScript | Pure JS Interactivity & Showcase Modal Slideshow
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
   * HELPER: DYNAMIC IMAGE PATH NORMALIZATION (GITHUB PAGES & LOCAL COMPATIBILITY)
   * -------------------------------------------------------------------------- */
  const normalizeImgPath = (path) => {
    if (!path) return '';
    // Nếu trang đang chạy ở root (như GitHub Pages /index.html) và không nằm trong folder /html/
    if (!window.location.pathname.includes('/html/')) {
      return path.replace(/^\.\.\/images\//, 'images/').replace(/^\.\.\//, '');
    }
    return path;
  };

  /* --------------------------------------------------------------------------
   * 1. PROJECT DATA STRUCTURE (FULL 5-IMAGE SHOWCASE PER PROJECT)
   * -------------------------------------------------------------------------- */
  const projectsData = {
    'project-1': {
      title: 'Poster Vân Tràm - Sắc Tràm Tự Nhiên',
      category: 'poster',
      categoryLabel: 'Poster & Typography',
      description: 'Tác phẩm thiết kế poster nghệ thuật truyền tải thông điệp thiên nhiên với kiểu chữ sang trọng và họa tiết lá tràm tinh tế.',
      meta: {
        type: 'Poster & Graphic Print',
        year: '2026',
        tools: 'Adobe Illustrator, Photoshop',
        concept: 'Sắc Tràm Tự Nhiên'
      },
      images: [
        '../images/gallery-1.jpg',
        '../images/gallery-1-2.jpg',
        '../images/gallery-1-3.jpg',
        '../images/gallery-1-4.jpg',
        '../images/gallery-1-5.jpg'
      ]
    },
    'project-2': {
      title: 'Bộ Nhận Diện Brand Visual Identity',
      category: 'brand',
      categoryLabel: 'Nhận diện thương hiệu',
      description: 'Thiết kế hệ thống nhận diện thương hiệu cao cấp gồm Logo monogram, danh thiếp ép kim gold foil và bộ văn phòng phẩm đồng bộ.',
      meta: {
        type: 'Brand Identity System',
        year: '2026',
        tools: 'Adobe Illustrator, InDesign',
        concept: 'Bản sắc Độc bản'
      },
      images: [
        '../images/gallery-2.jpg',
        '../images/gallery-2-2.jpg',
        '../images/gallery-2-3.jpg',
        '../images/gallery-2-4.jpg',
        '../images/gallery-2-5.jpg'
      ]
    },
    'project-3': {
      title: 'Bao Bì Trà Thảo Mộc Vân Tràm',
      category: 'packaging',
      categoryLabel: 'Bao bì sản phẩm',
      description: 'Thiết kế hộp bao bì trà cao cấp sử dụng chất liệu giấy mỹ thuật thân thiện với môi trường và họa tiết dập nổi sang trọng.',
      meta: {
        type: 'Packaging & Product Design',
        year: '2026',
        tools: 'Adobe Illustrator, Dimensions',
        concept: 'Eco Luxury Packaging'
      },
      images: [
        '../images/gallery-3.jpg',
        '../images/gallery-3-2.jpg',
        '../images/gallery-3-3.jpg',
        '../images/gallery-3-4.jpg',
        '../images/gallery-3-5.jpg'
      ]
    },
    'project-4': {
      title: 'Artistic Editorial Typography',
      category: 'poster',
      categoryLabel: 'Poster & Typography',
      description: 'Nghiên cứu cấu trúc font chữ Serif cổ điển kết hợp tương phản hiện đại mang lại cảm xúc thị giác mạnh mẽ trên các ấn phẩm.',
      meta: {
        type: 'Editorial Typography',
        year: '2026',
        tools: 'Adobe InDesign, Photoshop',
        concept: 'Typography Layout Art'
      },
      images: [
        '../images/gallery-4.jpg',
        '../images/gallery-4-2.jpg',
        '../images/gallery-4-3.jpg',
        '../images/gallery-4-4.jpg',
        '../images/gallery-4-5.jpg'
      ]
    },
    'project-5': {
      title: 'Minh Họa Rừng Tràm Mờ Sương',
      category: 'art',
      categoryLabel: 'Minh họa nghệ thuật',
      description: 'Tác phẩm vẽ minh họa kỹ thuật số thể hiện khung cảnh thiên nhiên hoang sơ với những đường nét mạ vàng quý phái.',
      meta: {
        type: 'Digital Art Illustration',
        year: '2026',
        tools: 'Procreate, Illustrator',
        concept: 'Misty Forest Art'
      },
      images: [
        '../images/gallery-5.jpg',
        '../images/gallery-5-2.jpg',
        '../images/gallery-5-3.jpg',
        '../images/gallery-5-4.jpg',
        '../images/gallery-5-5.jpg'
      ]
    },
    'project-6': {
      title: 'Giao Diện Banner Digital Media',
      category: 'brand',
      categoryLabel: 'Nhận diện thương hiệu',
      description: 'Thiết kế hệ thống Banner truyền thông kỹ thuật số tối ưu hiển thị trên các nền tảng mạng xã hội và website.',
      meta: {
        type: 'Digital Media Visual',
        year: '2026',
        tools: 'Adobe Photoshop, Figma',
        concept: 'Social Media Campaign'
      },
      images: [
        '../images/gallery-6.jpg',
        '../images/gallery-6-2.jpg',
        '../images/gallery-6-3.jpg',
        '../images/gallery-6-4.jpg',
        '../images/gallery-6-5.jpg'
      ]
    }
  };

  /* --------------------------------------------------------------------------
   * 2. DOM ELEMENTS SELECTION
   * -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const contactForm = document.getElementById('contactForm');
  const toastContainer = document.getElementById('toastContainer');
  const backToTopBtn = document.getElementById('backToTop');
  const statNumbers = document.querySelectorAll('.stat-box .count');

  /* Modal & Slideshow Elements */
  const lightboxModal = document.getElementById('lightboxModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContactBtn = document.getElementById('modalContactBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const metaType = document.getElementById('metaType');
  const metaYear = document.getElementById('metaYear');
  const metaTools = document.getElementById('metaTools');
  const metaConcept = document.getElementById('metaConcept');
  const slideshowContainer = document.getElementById('slideshowContainer');
  const slideshowPrev = document.getElementById('slideshowPrev');
  const slideshowNext = document.getElementById('slideshowNext');
  const slideshowDots = document.getElementById('slideshowDots');
  const slideshowCounter = document.getElementById('slideshowCounter');

  /* Slideshow State Variables */
  let currentProjectImages = [];
  let currentImageIndex = 0;

  /* --------------------------------------------------------------------------
   * 3. HEADER SCROLL EFFECT & BACK-TO-TOP BUTTON
   * -------------------------------------------------------------------------- */
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* --------------------------------------------------------------------------
   * 4. MOBILE NAVIGATION MENU TOGGLE
   * -------------------------------------------------------------------------- */
  const toggleMobileMenu = () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    mobileToggle.classList.remove('active');
    navMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  /* --------------------------------------------------------------------------
   * 5. ACTIVE NAV LINK HIGHLIGHTING (IntersectionObserver)
   * -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  /* --------------------------------------------------------------------------
   * 6. STATS ANIMATED COUNTER EFFECT
   * -------------------------------------------------------------------------- */
  let animatedStats = false;
  const statsSection = document.querySelector('.stats-counter-grid');

  const animateCounters = () => {
    statNumbers.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1500;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + (target > 10 ? '+' : '');
          clearInterval(timer);
        } else {
          counter.textContent = Math.ceil(current);
        }
      }, stepTime);
    });
  };

  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animatedStats) {
        animatedStats = true;
        animateCounters();
      }
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  /* --------------------------------------------------------------------------
   * 7. GALLERY CATEGORY FILTER
   * -------------------------------------------------------------------------- */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hide');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
   * 8. PROJECT SHOWCASE MODAL & SLIDESHOW LOGIC
   * -------------------------------------------------------------------------- */
  const updateSlideshowUI = (index) => {
    if (currentProjectImages.length === 0) return;

    if (index < 0) index = currentProjectImages.length - 1;
    if (index >= currentProjectImages.length) index = 0;
    currentImageIndex = index;

    modalImage.classList.add('fade-out');
    setTimeout(() => {
      modalImage.src = normalizeImgPath(currentProjectImages[currentImageIndex]);
      modalImage.classList.remove('fade-out');
    }, 150);

    const currentNumStr = String(currentImageIndex + 1).padStart(2, '0');
    const totalNumStr = String(currentProjectImages.length).padStart(2, '0');
    slideshowCounter.textContent = `${currentNumStr} / ${totalNumStr}`;

    const dots = slideshowDots.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
      if (idx === currentImageIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (currentProjectImages.length <= 1) {
      slideshowPrev.classList.add('disabled');
      slideshowNext.classList.add('disabled');
      slideshowDots.style.display = 'none';
      slideshowCounter.style.display = 'none';
    } else {
      slideshowPrev.classList.remove('disabled');
      slideshowNext.classList.remove('disabled');
      slideshowDots.style.display = 'flex';
      slideshowCounter.style.display = 'block';
    }
  };

  const renderDots = (total) => {
    slideshowDots.innerHTML = '';
    if (total <= 1) return;

    for (let i = 0; i < total; i++) {
      const dot = document.createElement('span');
      dot.className = `dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Chuyển tới ảnh ${i + 1}`);
      dot.addEventListener('click', () => {
        updateSlideshowUI(i);
      });
      slideshowDots.appendChild(dot);
    }
  };

  const openProjectModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    currentProjectImages = data.images || [];
    currentImageIndex = 0;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.categoryLabel;
    modalDesc.textContent = data.description;
    metaType.textContent = data.meta.type;
    metaYear.textContent = data.meta.year;
    metaTools.textContent = data.meta.tools;
    metaConcept.textContent = data.meta.concept;

    renderDots(currentProjectImages.length);
    updateSlideshowUI(0);

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      openProjectModal(projectId);
    });
  });

  slideshowNext.addEventListener('click', (e) => {
    e.stopPropagation();
    updateSlideshowUI(currentImageIndex + 1);
  });

  slideshowPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    updateSlideshowUI(currentImageIndex - 1);
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeProjectModal();
      }
    });
  }

  if (modalContactBtn) {
    modalContactBtn.addEventListener('click', () => {
      closeProjectModal();
    });
  }

  /* --------------------------------------------------------------------------
   * 9. TOUCH / POINTER SWIPE SUPPORT FOR MOBILE SLIDESHOW
   * -------------------------------------------------------------------------- */
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  if (slideshowContainer) {
    slideshowContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    slideshowContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });
  }

  const handleSwipe = () => {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        updateSlideshowUI(currentImageIndex + 1);
      } else {
        updateSlideshowUI(currentImageIndex - 1);
      }
    }
  };

  /* --------------------------------------------------------------------------
   * 10. KEYBOARD ACCESSIBILITY (ESC & ARROW KEYS)
   * -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowRight') {
      updateSlideshowUI(currentImageIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      updateSlideshowUI(currentImageIndex - 1);
    }
  });

  /* --------------------------------------------------------------------------
   * 11. FORM VALIDATION & TOAST NOTIFICATION
   * -------------------------------------------------------------------------- */
  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">✨</span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      let isValid = true;

      if (!nameInput.value.trim()) {
        nameInput.style.borderColor = '#e74c3c';
        isValid = false;
      } else {
        nameInput.style.borderColor = '';
      }

      if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        emailInput.style.borderColor = '#e74c3c';
        isValid = false;
      } else {
        emailInput.style.borderColor = '';
      }

      if (!messageInput.value.trim()) {
        messageInput.style.borderColor = '#e74c3c';
        isValid = false;
      } else {
        messageInput.style.borderColor = '';
      }

      if (isValid) {
        showToast(`Cảm ơn ${nameInput.value.trim()}! Lời nhắn của bạn đã được gửi thành công.`);
        contactForm.reset();
      } else {
        showToast('Vui lòng điền đầy đủ các thông tin bắt buộc (*)', 'error');
      }
    });
  }
});
