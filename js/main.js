/* ==========================================================================
   VÂN TRÀM - Graphic Design Portfolio
   Main JavaScript | Multi-Image Slideshow Mapping 5 Real User Folders Exactly
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
   * HELPER: DYNAMIC IMAGE PATH NORMALIZATION (GITHUB PAGES & LOCAL COMPATIBILITY)
   * -------------------------------------------------------------------------- */
  const normalizeImgPath = (path) => {
    if (!path) return '../images/Bao bì/mocup 1.jpg';
    if (!window.location.pathname.includes('/html/')) {
      return path.replace(/^\.\.\/images\//, 'images/').replace(/^\.\.\//, '');
    }
    return path;
  };

  /* --------------------------------------------------------------------------
   * 1. PROJECT DATA STRUCTURE (EXACTLY 5 PROJECTS MATCHING USER'S 5 FOLDERS)
   * -------------------------------------------------------------------------- */
  const projectsData = {
    // 1. Folder: images/Bao bì (Bao Bì Sản Phẩm - Trọn bộ 9 ảnh)
    'project-1': {
      title: 'Bao Bì Làng Thái Hải',
      category: 'packaging',
      categoryLabel: 'Bao bì sản phẩm',
      description: 'Trải nghiệm bao bì quà tặng văn hóa độc đáo & sang trọng.',
      meta: {
        type: 'Packaging & Box Design',
        year: '2026',
        tools: 'Adobe Illustrator, Dimensions',
        concept: 'Eco Heritage Packaging'
      },
      images: [
        '../images/Bao bì/1.jpg',
        '../images/Bao bì/2.jpg',
        '../images/Bao bì/3.jpg',
        '../images/Bao bì/4.jpg',
        '../images/Bao bì/5.jpg',
        '../images/Bao bì/6.jpg',
        '../images/Bao bì/7.png',
        '../images/Bao bì/8.jpg',
        '../images/Bao bì/9.png'
      ]
    },

    // 2. Folder: images/bộ văn phòng (Bộ Ấn Phẩm Văn Phòng - Trọn bộ 13 ảnh)
    'project-2': {
      title: 'Bộ Ấn Phẩm Văn Phòng Làng Thái Hải',
      category: 'brand',
      categoryLabel: 'Bộ văn phòng',
      description: 'Quy chuẩn văn phòng chuyên nghiệp & nhất quán thương hiệu.',
      meta: {
        type: 'Stationery & Office Kit',
        year: '2026',
        tools: 'Adobe Illustrator, InDesign',
        concept: 'Heritage Corporate Kit'
      },
      images: [
        '../images/bộ văn phòng/1.png',
        '../images/bộ văn phòng/2.png',
        '../images/bộ văn phòng/3.png',
        '../images/bộ văn phòng/4.png',
        '../images/bộ văn phòng/5.jpg',
        '../images/bộ văn phòng/6.png',
        '../images/bộ văn phòng/7.png',
        '../images/bộ văn phòng/8.jpg',
        '../images/bộ văn phòng/9.jpg',
        '../images/bộ văn phòng/mockup a5.png',
        '../images/bộ văn phòng/mockup a6.png',
        '../images/bộ văn phòng/mocup kẹp.jpg',
        '../images/bộ văn phòng/thư A4.jpg'
      ]
    },

    // 3. Dedicated BrandBook Box: ONLY PDF (images/BrandBook/color up.pdf)
    'project-3': {
      title: 'BrandBook',
      category: 'brand',
      categoryLabel: 'BrandBook',
      pdfUrl: '../images/BrandBook/color up.pdf',
      description: 'Trọn bộ Cẩm nang nhận diện thương hiệu BrandBook trình bày chi tiết quy chuẩn hệ thống nhận diện di sản Làng Thái Hải.',
      meta: {
        type: 'BrandBook Design',
        year: '2026',
        tools: 'Adobe InDesign, Illustrator',
        concept: 'Heritage BrandBook'
      },
      images: []
    },

    // 4. Folder: images/đồng phục & quà tặng (Trọn bộ 6 ảnh)
    'project-4': {
      title: 'Thiết Kế Đồng Phục & Quà Tặng',
      category: 'apparel',
      categoryLabel: 'Đồng phục & Quà tặng',
      description: 'Đồng phục thổ cẩm & bộ quà tặng du lịch lưu niệm Thái Hải.',
      meta: {
        type: 'Apparel & Merchandise',
        year: '2026',
        tools: 'Adobe Illustrator, Photoshop',
        concept: 'Heritage Uniform & Gift'
      },
      images: [
        '../images/đồng phục/1.png',
        '../images/đồng phục/2.png',
        '../images/đồng phục/3.png',
        '../images/quà tặng/ly quà tặng.png',
        '../images/quà tặng/mũ quà tặng.png',
        '../images/quà tặng/ô quà tặng.png'
      ]
    },

    // 5. Folder: images/Truyền thông quảng cáo (Trọn bộ 9 ảnh)
    'project-5': {
      title: 'Ấn Phẩm Truyền Thông & Banner Thái Hải',
      category: 'media',
      categoryLabel: 'Ấn phẩm truyền thông',
      isStandee: true,
      description: 'Standee mới, Poster di sản & Banner truyền thông quảng cáo.',
      meta: {
        type: 'Standee & Media Campaign',
        year: '2026',
        tools: 'Adobe Photoshop, Illustrator',
        concept: 'Cultural Media Campaign'
      },
      images: [
        '../images/Truyền thông quảng cáo/standde moiqa.png',
        '../images/Truyền thông quảng cáo/mockup standee mới.png',
        '../images/Truyền thông quảng cáo/POSTER mới.png',
        '../images/Truyền thông quảng cáo/mockup póter moi.png',
        '../images/Truyền thông quảng cáo/BANNER.png',
        '../images/Truyền thông quảng cáo/mockup banner.png',
        '../images/Truyền thông quảng cáo/moc tờ rơi.jpg',
        '../images/Truyền thông quảng cáo/mocup gap 3.jpg',
        '../images/Truyền thông quảng cáo/Artboard 1.jpg'
      ]
    },

    // 6. Separate Catalogue Box: images/Truyền thông quảng cáo/câtlo (Trọn bộ 15 trang)
    'project-6': {
      title: 'Bộ Catalogue',
      category: 'media',
      categoryLabel: 'Bộ Catalogue',
      description: 'Cẩm nang thương hiệu 15 trang quy chuẩn di sản Thái Hải.',
      meta: {
        type: 'Catalogue Design',
        year: '2026',
        tools: 'Adobe InDesign, Illustrator',
        concept: 'Heritage Catalogue'
      },
      images: [
        '../images/Truyền thông quảng cáo/câtlo/1.png',
        '../images/Truyền thông quảng cáo/câtlo/2.png',
        '../images/Truyền thông quảng cáo/câtlo/3.png',
        '../images/Truyền thông quảng cáo/câtlo/4.png',
        '../images/Truyền thông quảng cáo/câtlo/5.png',
        '../images/Truyền thông quảng cáo/câtlo/6.png',
        '../images/Truyền thông quảng cáo/câtlo/7.png',
        '../images/Truyền thông quảng cáo/câtlo/8.png',
        '../images/Truyền thông quảng cáo/câtlo/9.png',
        '../images/Truyền thông quảng cáo/câtlo/10.png',
        '../images/Truyền thông quảng cáo/câtlo/11.png',
        '../images/Truyền thông quảng cáo/câtlo/12.png',
        '../images/Truyền thông quảng cáo/câtlo/13.png',
        '../images/Truyền thông quảng cáo/câtlo/14.png',
        '../images/Truyền thông quảng cáo/câtlo/15.png'
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
   * 8. PROJECT SHOWCASE MODAL & SLIDESHOW LOGIC
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
      const imgAttr = card.getAttribute('data-img') || card.querySelector('img')?.getAttribute('src') || '../images/Bao bì/mocup 1.jpg';
      const titleAttr = card.getAttribute('data-title') || card.querySelector('.project-title')?.textContent || 'Dự Án Vân Tràm';
      const descAttr = card.getAttribute('data-desc') || card.querySelector('.project-desc')?.textContent || 'Mô tả tác phẩm thiết kế đồ họa.';
      const catAttr = card.querySelector('.project-category')?.textContent || 'Nhận diện thương hiệu';

      data = {
        title: titleAttr,
        categoryLabel: catAttr,
        description: descAttr,
        meta: {
          type: 'Brand Identity Design',
          year: '2026',
          tools: 'Adobe Illustrator, Photoshop',
          concept: 'Hồn Việt Di Sản'
        },
        images: [imgAttr]
      };
    }

    // Toggle Standee / Tall Media Layout Class if project-5
    if (projectId === 'project-5' || data.isStandee || card.classList.contains('standee-card')) {
      showcaseModalCard.classList.add('is-standee-modal');
    } else {
      showcaseModalCard.classList.remove('is-standee-modal');
    }

    currentProjectImages = (data.images && data.images.length > 0) ? data.images : ['../images/Bao bì/mocup 1.jpg'];
    currentImageIndex = 0;

    const cardTitle = card.querySelector('.project-title')?.textContent.trim();
    const cardCategory = card.querySelector('.project-category')?.textContent.trim();
    const cardDesc = card.querySelector('.project-desc')?.textContent.trim();

    modalTitle.textContent = cardTitle || data.title || 'Dự Án Vân Tràm';
    modalCategory.textContent = cardCategory || data.categoryLabel || 'NHẬN DIỆN THƯƠNG HIỆU';
    modalDesc.textContent = cardDesc || data.description || 'Mô tả tác phẩm thiết kế đồ họa.';

    if (data.meta) {
      metaType.textContent = data.meta.type || 'Brand Identity Design';
      metaYear.textContent = data.meta.year || '2026';
      metaTools.textContent = data.meta.tools || 'Adobe Illustrator, Photoshop';
      metaConcept.textContent = data.meta.concept || 'Hồn Việt Di Sản';
    }

    // Handle Interactive PDF Viewer vs Image Slideshow
    const pdfWrapper = document.getElementById('modalPdfViewerWrapper');
    const pdfIframe = document.getElementById('modalPdfIframe');
    const slideshowContainer = document.getElementById('slideshowContainer');
    const pdfBtn = document.getElementById('modalPdfBtn');

    if (data.pdfUrl) {
      if (pdfWrapper && pdfIframe && slideshowContainer) {
        pdfWrapper.style.display = 'block';
        pdfIframe.src = data.pdfUrl + '#toolbar=1&view=FitH';
        slideshowContainer.style.display = 'none';
      }
      if (pdfBtn) {
        pdfBtn.href = data.pdfUrl;
        pdfBtn.style.display = 'flex';
      }
    } else {
      if (pdfWrapper && pdfIframe && slideshowContainer) {
        pdfWrapper.style.display = 'none';
        pdfIframe.src = '';
        slideshowContainer.style.display = 'block';
      }
      if (pdfBtn) {
        pdfBtn.style.display = 'none';
      }
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
    const pdfIframe = document.getElementById('modalPdfIframe');
    if (pdfIframe) pdfIframe.src = '';
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
