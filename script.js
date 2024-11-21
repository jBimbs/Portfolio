// JavaScript to handle scroll-based navbar transition
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Scrolled down, shrink navbar to line and hide logo
    navbar.classList.add('shrink');
    logo.style.visibility = 'hidden';
    logo.style.opacity = '0';
  } else {
    // Scrolled up, expand navbar back to full and show logo
    navbar.classList.remove('shrink');
    logo.style.visibility = 'visible';
    logo.style.opacity = '1';
  }
  lastScrollY = window.scrollY;
});
 // Smooth scrolling functionality
 const links = document.querySelectorAll('.navbar a');

 links.forEach(link => {
   link.addEventListener('click', function(e) {
     e.preventDefault(); // Prevent default anchor click behavior
     const targetId = this.getAttribute('href'); // Get the target section id
     const targetElement = document.querySelector(targetId); // Get the target element

     // Smooth scroll to the target section
     targetElement.scrollIntoView({
       behavior: 'smooth' // Enable smooth scrolling
     });
   });
 });

let currentSlide = 0; // Start from the first slide
  const totalSlides = 4; // Total number of slides
  const sliderContainer = document.querySelector('.slider-container');

  function moveSlide(direction) {
    if (direction === 'left') {
      currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1; // Move left
    } else {
      currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1; // Move right
    }
    sliderContainer.style.transform = `translateX(-${currentSlide * 25}%)`; // Move slider by 25% for each slide
  }

    document.addEventListener('DOMContentLoaded', () => {
      const projectSlides = {
          0: ["img/cvsu.png", "img/project1slider1.jpg", "img/project1slider2.jpg", "img/project1slider3.jpg", "img/project1slider4.jpg"],
          1: ["img/checklist.jpg", "img/project2slider1.jpg", "img/project2slider2.jpg"],
          2: ["img/Quinqueware.png", "img/project3slider1.jpg", "img/project3slider2.jpg", "img/project3slider3.jpg", "img/project3slider4.jpg", "img/project3slider5.jpg"],
          3: ["img/batangkalye.jpg", "img/project4slider1.jpg", "img/project4slider2.jpg", "img/project4slider3.jpg"],
          4: ["img/adminsystem.jpg", "img/project5slider1.jpg", "img/project5slider2.jpg", "img/project5slider3.jpg"]
      };
  
      let slideIndex = 1;  // Initial slide index
  
      function openModal(projectId) {
          const modal = document.getElementById("projectModal");
          const modalSlider = document.getElementById("modalSlider");
  
          // Clear previous slides
          modalSlider.innerHTML = '';
  
          // Add slides for the selected project
          projectSlides[projectId].forEach((src, index) => {
              const slideDiv = document.createElement("div");
              slideDiv.classList.add("modal-slide");
              if (index === 0) slideDiv.classList.add("active-slide");
  
              const img = document.createElement("img");
              img.src = src;
              img.alt = `Project ${projectId + 1} Detail ${index + 1}`;
              slideDiv.appendChild(img);
  
              modalSlider.appendChild(slideDiv);
          });
  
          // Reset slide index and show modal
          slideIndex = 1;
          showSlide(slideIndex);
          modal.style.display = "flex";
      }
  
      // Show the slide based on the index
      function showSlide(n) {
          const slides = document.getElementsByClassName("modal-slide");
          if (n > slides.length) { slideIndex = 1; }
          if (n < 1) { slideIndex = slides.length; }
          Array.from(slides).forEach(slide => slide.style.display = "none");
          slides[slideIndex - 1].style.display = "block";
      }
  
      // Change the slide when Next or Prev is clicked
      function changeSlide(n) {
          showSlide(slideIndex += n);
      }
  
      // Add event listeners for Prev and Next buttons in the modal
      document.getElementById("modalPrev").addEventListener("click", () => changeSlide(-1));
      document.getElementById("modalNext").addEventListener("click", () => changeSlide(1));
  
      // Attach openModal to project cards
      document.querySelectorAll('.project-card').forEach((card, index) => {
          card.addEventListener('click', () => openModal(index));
      });
  
      // Attach event listener for closing the modal
      document.getElementById("closeModal").addEventListener('click', () => {
          document.getElementById("projectModal").style.display = "none";
      });
  });
  