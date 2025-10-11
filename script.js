document.addEventListener("DOMContentLoaded", () => {
  // Initialize page fade-in animation
  document.body.classList.add("fade-enter-active")

  // --- THEME TOGGLE ---
  const themeToggle = document.getElementById("themeToggle")
  const body = document.body

  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-mode")
    } else {
      body.classList.remove("dark-mode")
    }
  }

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light"
  applyTheme(savedTheme)

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = body.classList.contains("dark-mode")
      const newTheme = isDark ? "light" : "dark"

      applyTheme(newTheme)
      localStorage.setItem("theme", newTheme)

      // Add a subtle animation effect
      themeToggle.style.transform = "scale(0.95)"
      setTimeout(() => {
        themeToggle.style.transform = "scale(1)"
      }, 150)
    })
  }

  // --- HEADER SCROLL ---
  const header = document.querySelector("header")
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 10)
    })
  }

  // --- MOBILE MENU ---
  const menuToggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector("nav")
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      nav.classList.toggle("active")
    })

    // Close menu when clicking on nav links
    nav.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav-link")) {
        menuToggle.classList.remove("active")
        nav.classList.remove("active")
      }
    })
  }

  // --- PROJECT FILTER FUNCTIONALITY (ACCORDION STYLE) ---
  const filterToggle = document.getElementById("filterToggle")
  const filterDropdown = document.getElementById("filterDropdown")
  const filterCurrent = document.getElementById("filterCurrent")
  const filterOptions = document.querySelectorAll(".filter-option")
  const projectCards = document.querySelectorAll(".project-card")
  const filterAccordion = document.querySelector('.filter-accordion')

  function updateAccordionOpenState() {
    if (filterAccordion) {
      if (filterToggle.classList.contains("active") || filterDropdown.classList.contains("active")) {
        filterAccordion.classList.add("open")
      } else {
        filterAccordion.classList.remove("open")
      }
    }
  }

  if (filterToggle && filterDropdown) {
    // Toggle dropdown
    filterToggle.addEventListener("click", () => {
      filterToggle.classList.toggle("active")
      filterDropdown.classList.toggle("active")
      updateAccordionOpenState()
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!filterToggle.contains(e.target) && !filterDropdown.contains(e.target)) {
        filterToggle.classList.remove("active")
        filterDropdown.classList.remove("active")
        updateAccordionOpenState()
      }
    })

    // Handle filter selection
    filterOptions.forEach((option) => {
      option.addEventListener("click", () => {
        // Remove active class from all options
        filterOptions.forEach((opt) => opt.classList.remove("active"))
        // Add active class to clicked option
        option.classList.add("active")

        // Update current filter text
        filterCurrent.textContent = option.textContent

        // Close dropdown
        filterToggle.classList.remove("active")
        filterDropdown.classList.remove("active")
        updateAccordionOpenState()

        const filter = option.getAttribute("data-filter")

        // Filter project cards with smooth animation
        projectCards.forEach((card, index) => {
          const category = card.getAttribute("data-category")

          if (filter === "all" || category === filter) {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px)"

            setTimeout(() => {
              card.classList.remove("hidden")
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, index * 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px)"

            setTimeout(() => {
              card.classList.add("hidden")
            }, 300)
          }
        })
      })
    })
  }

  // --- EXPERIENCE ACCORDION ---
  document.querySelectorAll(".experience-header").forEach((header) => {
    header.addEventListener("click", () => {
      const card = header.closest(".experience-card")
      const isExpanded = card.classList.contains("expanded")

      // Close all other cards with smooth animation
      document.querySelectorAll(".experience-card").forEach((c) => {
        if (c !== card) {
          c.classList.remove("expanded")
        }
      })

      // Toggle current card
      if (!isExpanded) {
        card.classList.add("expanded")
      } else {
        card.classList.remove("expanded")
      }
    })
  })

  // --- TYPEWRITER EFFECT (Optimized) ---
  const typewriterText = document.getElementById("typewriter-text")
  if (typewriterText) {
    const phrases = ["Electrical Engineer", "Problem Solver", "Tech Enthusiast"]
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 80

    function typeWriter() {
      const currentPhrase = phrases[phraseIndex]

      if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 30
      } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = Math.random() * 80 + 40
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true
        typingSpeed = 1500
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        typingSpeed = 300
      }

      setTimeout(typeWriter, typingSpeed)
    }

    // Start typewriter effect after page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => setTimeout(typeWriter, 500))
    } else {
      setTimeout(typeWriter, 500)
    }
  }

  // --- CONTACT FORM (WEB3FORMS) ---
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const formData = new FormData(contactForm)
      const object = {}
      formData.forEach((value, key) => {
        object[key] = value
      })
      const json = JSON.stringify(object)

      const result = document.getElementById("form-result")
      const submitButton = contactForm.querySelector(".submit-button-modern")
      const buttonText = submitButton.querySelector("span")
      const originalText = buttonText.textContent

      // Show loading state
      buttonText.textContent = "Sending..."
      result.style.display = "block"
      result.innerHTML = "Sending your message..."
      result.classList.remove("success", "error")
      submitButton.disabled = true

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        })

        const jsonResponse = await response.json()

        if (response.status === 200) {
          result.innerHTML = "✅ Message sent successfully! I'll get back to you soon."
          result.classList.add("success")
          contactForm.reset()
        } else {
          result.innerHTML = "❌ " + (jsonResponse.message || "Something went wrong!")
          result.classList.add("error")
        }
      } catch (error) {
        result.innerHTML = "❌ Network error. Please try again later."
        result.classList.add("error")
      } finally {
        buttonText.textContent = originalText
        submitButton.disabled = false

        // Hide result after 5 seconds
        setTimeout(() => {
          result.style.display = "none"
          result.classList.remove("success", "error")
        }, 5000)
      }
    })
  }

  // --- LIGHTBOX ---
  const lightbox = document.getElementById("lightbox")
  if (lightbox) {
    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"))
    const lightboxImage = lightbox.querySelector(".lightbox-image")
    const lightboxTitle = lightbox.querySelector(".lightbox-title")
    let currentIndex

    const showImage = (index) => {
      const item = galleryItems[index]
      const img = item.querySelector("img")
      const caption = item.querySelector(".gallery-caption")

      lightboxImage.src = img.src
      lightboxTitle.textContent = caption ? caption.textContent : img.alt
      currentIndex = index
    }

    galleryItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        lightbox.classList.add("active")
        showImage(index)
      })
    })

    const closeBtn = lightbox.querySelector(".lightbox-close")
    const prevBtn = lightbox.querySelector(".lightbox-prev")
    const nextBtn = lightbox.querySelector(".lightbox-next")

    if (closeBtn) {
      closeBtn.addEventListener("click", () => lightbox.classList.remove("active"))
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
        showImage(newIndex)
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const newIndex = (currentIndex + 1) % galleryItems.length
        showImage(newIndex)
      })
    }

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active")
      }
    })

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (lightbox.classList.contains("active")) {
        if (e.key === "Escape") {
          lightbox.classList.remove("active")
        } else if (e.key === "ArrowLeft" && prevBtn) {
          prevBtn.click()
        } else if (e.key === "ArrowRight" && nextBtn) {
          nextBtn.click()
        }
      }
    })
  }

  // --- SMOOTH SCROLLING ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerHeight = header ? header.offsetHeight : 0
        const targetPosition = target.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (nav && nav.classList.contains("active")) {
          nav.classList.remove("active")
          if (menuToggle) menuToggle.classList.remove("active")
        }
      }
    })
  })

  // --- SCROLL ANIMATIONS (Optimized) ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target) // Stop observing once animated
      }
    })
  }, observerOptions)

  // Observe elements for scroll animations (reduced set for performance)
  const animatedElements = document.querySelectorAll(
    ".section-title, .experience-card, .project-card, .cert-card"
  )

  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(15px)"
    element.style.transition = "opacity 0.4s ease, transform 0.4s ease"
    observer.observe(element)
  })

  // --- ENHANCED HOVER EFFECTS ---
  // Add ripple effect to buttons
  document.querySelectorAll(".filter-btn, .cta-button-enhanced, .submit-button-modern").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // --- PERFORMANCE OPTIMIZATIONS ---
  // Lazy load images
  const images = document.querySelectorAll('img[src*="placeholder.svg"]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        // Add loading animation
        img.style.opacity = "0.5"
        img.style.transition = "opacity 0.3s ease"

        setTimeout(() => {
          img.style.opacity = "1"
        }, 200)

        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))

  // --- KEYBOARD NAVIGATION ---
  document.addEventListener("keydown", (e) => {
    // ESC key closes mobile menu
    if (e.key === "Escape" && nav && nav.classList.contains("active")) {
      menuToggle.classList.remove("active")
      nav.classList.remove("active")
    }

    // Space or Enter toggles theme
    if ((e.key === " " || e.key === "Enter") && e.target === themeToggle) {
      e.preventDefault()
      themeToggle.click()
    }
  })

  // --- INITIAL ANIMATIONS ---
  // Stagger animation for project cards
  setTimeout(() => {
    document.querySelectorAll(".project-card, .cert-card").forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`
      card.style.animation = "fadeInUp 0.6s ease forwards"
    })
  }, 300)

  console.log("🚀 Portfolio site loaded successfully!")
})

window.addEventListener('load', function() {
  const loader = document.getElementById('loader-overlay');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 300);
  }
});

// --- CSS ANIMATIONS (added via JavaScript) ---
const style = document.createElement("style")
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Smooth focus styles */
  *:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  /* Loading states */
  .loading {
    position: relative;
    overflow: hidden;
  }

  .loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: loading-shimmer 1.5s infinite;
  }

  @keyframes loading-shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`
document.head.appendChild(style)
