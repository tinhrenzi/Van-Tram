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
    if (!path) return '../images/gallery-1.jpg';
    if (!window.location.pathname.includes('/html/')) {
      return path.replace(/^\.\.\/images\//, 'images/').replace(/^\.\.\//, '');
    }
    return path;
  };

  /* --------------------------------------------------------------------------
   * 1. PROJECT DATA STRUCTURE (INCLUDES BOX 7 FOR STANDEE: standde.png)
   * -------------------------------------------------------------------------- */
  const projectsData = {
    'project-1': {
      title: 'Poster Vân Tràm - Sắc Tràm Tự Nhiên',
      category: 'poster',
      categoryLabel: 'Poster & Typography',
      description: 'Tác phẩm thiết kế poster nghệ thuật quảng bá du lịch sinh thái Làng Thái Hải kết hợp kiểu chữ mộc mạc và họa tiết lá tràm.',
      meta: {
        type: 'Poster & Graphic Print',
        year: '2026',
        tools: 'Adobe Illustrator, Photoshop',
        concept: 'Sắc Tràm Tự Nhiên'
      },
      images: [
        '../images/gallery-1.jpg',
        '../images/standde.png',
        '../images/gallery-1-2.jpg',
        '../images/gallery-1-3.jpg',
        '../images/gallery-1-4.jpg'
      ]
    },
    'project-2': {
      title: 'Nhận Diện Thương Hiệu Làng Thái Hải',
      category: 'brand',
      categoryLabel: 'Nhận diện thương hiệu',
      description: 'Thiết kế hệ thống nhận diện thương hiệu cao cấp gồm Logo biểu trưng nhà sàn Thái Hải, danh thiếp ép kim gold foil và cẩm nang thương hiệu.',
      meta: {
        type: 'Brand Identity System',
        year: '2026',
        tools: 'Adobe Illustrator, InDesign',
        concept: 'Hồn Việt Di Sản'
      },
      images: [
        '../images/gallery-2.jpg',
        '../images/standde.png',
        '../images/gallery-2-2.jpg',
        '../images/gallery-2-3.jpg',
        '../images/gallery-2-4.jpg'
      ]
    },
    'project-3': {
      title: 'Bao Bì Trà Thảo Mộc Làng Thái Hải',
      category: 'packaging',
      categoryLabel: 'Bao bì sản phẩm',
      description: 'Thiết kế bao bì trà thảo mộc đặc sản Làng Thái Hải sử dụng giấy mỹ thuật tái chế và dập nổi họa tiết lá trà truyền thống.',
      meta: {
        type: 'Packaging & Product Design',
        year: '2026',
        tools: 'Adobe Illustrator, Dimensions',
        concept: 'Eco Heritage Packaging'
      },
      images: [
        '../images/gallery-3.jpg',
        '../images/standde.png',
        '../images/gallery-3-2.jpg',
        '../images/gallery-3-3.jpg',
        '../images/gallery-3-4.jpg'
      ]
    },
    'project-4': {
      title: 'Ấn Phẩm Typography Văn Hóa Thái Hải',
      category: 'poster',
      categoryLabel: 'Poster & Typography',
      description: 'Nghiên cứu cấu trúc kiểu chữ Serif mộc mạc kết hợp họa tiết hoa văn thổ cẩm Thái Hải trên các ấn phẩm văn hóa nghệ thuật.',
      meta: {
        type: 'Editorial Typography',
        year: '2026',
        tools: 'Adobe InDesign, Photoshop',
        concept: 'Typography Layout Art'
      },
      images: [
        '../images/gallery-4.jpg',
        '../images/standde.png',
        '../images/gallery-4-2.jpg',
        '../images/gallery-4-3.jpg',
        '../images/gallery-4-4.jpg'
      ]
    },
    'project-5': {
      title: 'Minh Họa Làng Nhà Sàn Thái Hải',
      category: 'art',
      categoryLabel: 'Minh họa nghệ thuật',
      description: 'Tác phẩm vẽ minh họa kỹ thuật số tái hiện cảnh quan làng nhà sàn Thái Hải trong không gian núi rừng sương mờ và các mảng nét mạ vàng.',
      meta: {
        type: 'Digital Art Illustration',
        year: '2026',
        tools: 'Procreate, Illustrator',
        concept: 'Misty Stilt Village Art'
      },
      images: [
        '../images/gallery-5.jpg',
        '../images/standde.png',
        '../images/gallery-5-2.jpg',
        '../images/gallery-5-3.jpg',
        '../images/gallery-5-4.jpg'
      ]
    },
    'project-6': {
      title: 'Giao Diện Truyền Thông Banner Làng Thái Hải',
      category: 'brand',
      categoryLabel: 'Nhận diện thương hiệu',
      description: 'Thiết kế bộ Banner kỹ thuật số quảng bá du lịch sinh thái và sự kiện văn hóa Làng Thái Hải trên các kênh truyền thông số.',
      meta: {
        type: 'Digital Media Visual',
        year: '2026',
        tools: 'Adobe Photoshop, Figma',
        concept: 'Heritage Campaign'
      },
      images: [
        '../images/gallery-6.jpg',
        '../images/standde.png',
        '../images/gallery-6-2.jpg',
        '../images/gallery-6-3.jpg',
        '../images/gallery-6-4.jpg'
      ]
    },
    'project-7': {
      title: 'Thiết Kế Standee Khổ Dọc Làng Thái Hải',
      category: 'brand',
      categoryLabel: 'Standee & Quảng Cáo Dọc',
      isStandee: true,
      description: 'Ấn phẩm thiết kế Standee khổ dọc chuyên biệt phục vụ các sự kiện du lịch, triển lãm di sản và giới thiệu nét đẹp văn hóa Khu bảo tồn Làng nhà sàn Thái Hải.',
      meta: {
        type: 'Vertical Standee Design',
        year: '2026',
        tools: 'Adobe Illustrator, Photoshop',
        concept: 'Khổ Dọc Di Sản'
      },
      images: [
        '../images/standde.png',
        '../images/gallery-2.jpg',
        '../images/gallery-6.jpg',
        '../images/gallery-1-2.jpg'
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
  const showcaseModalCard = document.querySelector('.showcase-modal');
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
   * 8. PROJECT SHOWCASE MODAL & FAIL-SAFE SLIDESHOW LOGIC
   * -------------------------------------------------------------------------- */
  const updateSlideshowUI = (index) => {
    if (!currentProjectImages || currentProjectImages.length === 0) return;

    if (index < 0) index = currentProjectImages.length - 1;
    if (index >= currentProjectImages.length) index = 0;
    currentImageIndex = index;

    const rawSrc = currentProjectImages[currentImageIndex];
    const finalSrc = normalizeImgPath(rawSrc);

    modalImage.classList.add('fade-out');
    setTimeout(() => {
      modalImage.src = finalSrc;
      modalImage.alt = modalTitle.textContent || 'Tác phẩm Vân Tràm';
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

  const openProjectModal = (card, index) => {
    let projectId = card.getAttribute('data-project-id');
    if (!projectId) {
      projectId = `project-${index + 1}`;
    }

    let data = projectsData[projectId];

    if (!data) {
      const imgAttr = card.getAttribute('data-img') || card.querySelector('img')?.getAttribute('src') || '../images/standde.png';
      const titleAttr = card.getAttribute('data-title') || card.querySelector('.project-title')?.textContent || 'Dự Án Vân Tràm';
      const descAttr = card.getAttribute('data-desc') || card.querySelector('.project-desc')?.textContent || 'Mô tả tác phẩm thiết kế đồ họa.';
      const catAttr = card.querySelector('.project-category')?.textContent || 'Nhận diện thương hiệu';

      data = {
        title: titleAttr,
        categoryLabel: catAttr,
        description: descAttr,
        meta: {
          type: 'Vertical Standee Design',
          year: '2026',
          tools: 'Adobe Illustrator, Photoshop',
          concept: 'Khổ Dọc Di Sản'
        },
        images: [imgAttr]
      };
    }

    // Toggle Standee Vertical Layout Class if it's the Standee Project
    if (projectId === 'project-7' || data.isStandee || card.classList.contains('standee-card')) {
      showcaseModalCard.classList.add('is-standee-modal');
    } else {
      showcaseModalCard.classList.remove('is-standee-modal');
    }

    currentProjectImages = (data.images && data.images.length > 0) ? data.images : ['../images/standde.png'];
    currentImageIndex = 0;

    modalTitle.textContent = data.title || 'Dự Án Vân Tràm';
    modalCategory.textContent = data.categoryLabel || 'NHẬN DIỆN THƯƠNG HIỆU';
    modalDesc.textContent = data.description || 'Mô tả tác phẩm thiết kế đồ họa.';

    if (data.meta) {
      metaType.textContent = data.meta.type || 'Vertical Standee Design';
      metaYear.textContent = data.meta.year || '2026';
      metaTools.textContent = data.meta.tools || 'Adobe Illustrator, Photoshop';
      metaConcept.textContent = data.meta.concept || 'Khổ Dọc Di Sản';
    }

    renderDots(currentProjectImages.length);
    updateSlideshowUI(0);

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    showcaseModalCard.classList.remove('is-standee-modal');
    document.body.style.overflow = '';
  };

  projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      openProjectModal(card, index);
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
