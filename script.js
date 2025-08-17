(function () {
  emailjs.init("VdgBd7pSvUnR9weol");
})();

const services = [
  {
    title: "Calendar Management",
    des: "Organizing and scheduling appointments, reminders, and deadlines to keep your day on track.",
  },
  {
    title: "Email Management",
    des: "Sorting, responding, and organizing emails to ensure effective communication and follow-ups.",
  },
  {
    title: "Travel Itinerary",
    des: "Planning and organizing travel details including flights, accommodations, and activities.",
  },
  {
    title: "Data Entry",
    des: "Accurate input of information into systems, spreadsheets, or databases for easy tracking.",
  },
  {
    title: "Task Coordination",
    des: "Managing and assigning tasks to ensure deadlines are met and priorities are clear.",
  },
  {
    title: "Presentation",
    des: "Creating polished, professional slides and visuals to support your ideas and messages.",
  },
  {
    title: "Research",
    des: "Gathering relevant information to support decision-making or provide insights for your business.",
  },
  {
    title: "Meeting & Appointment Scheduling",
    des: "Coordinating meeting times and booking appointments to fit everyone's calendar.",
  },
];

const portfolios = [
  {
    image: ["Travel_intinery.png", "Travel_intinery.png"],
    imageAlt: "Travel Itinerary Coordination",
    projectTitle: "Travel Itinerary Coordination",
    projectDes:
      "Planned and created a detailed travel itinerary for a CEO’s business trip. This included flight research, hotel booking options, meeting schedules, and transport arrangements. Designed a clear, professional layout using Canva, ensuring everything was organized, time-efficient, and easy to follow. The result? A stress-free, CEO-ready travel plan delivered on time.",
  },
  {
    image: ["Partnership_Response_Email.png", "Partnership_Response_Email.png"],
    imageAlt: "Partnership Email Response Drafting",
    projectTitle: "Partnership Email Response Drafting",
    projectDes:
      "Composed a professional email response to a partnership inquiry, ensuring the message was clear, polite, and aligned with brand tone.",
  },
  {
    image: ["CEO A Calendar.png", "CEO A Calendar.png"],
    imageAlt: "Calendar Management",
    projectTitle: "Calendar Management",
    projectDes:
      "Created a structured weekly calendar using screenshots and planning tools to help CEOs stay on top of meetings, deadlines, and key priorities.",
  },
  {
    image: ["Research_Event.png", "Research_Event.png"],
    imageAlt: "Quick Research Task",
    projectTitle: "Quick Research Task",
    projectDes:
      "Conducted fast, targeted online research to gather relevant info for business decisions — including tools, services, or vendors.",
  },
  {
    image: ["Daily Task Brief for CEO A.png", "Daily Task Brief for CEO A.png"],
    imageAlt: "Daily Brief Template Creation",
    projectTitle: "Daily Brief Template Creation",
    projectDes:
      "Designed a daily update format to keep executives informed on key tasks, priorities, and updates in a clean, digestible format.",
  },
  {
    image: ["Notion_Task.png", "Notion_2.png", "Notion_3.png"],
    imageAlt: "Notion Command Center Setup",
    projectTitle: "Notion Command Center Setup",
    projectDes:
      "Built a Notion-based Weekly Command Center for executive task tracking, priorities, and project overview — showcasing efficiency and system-building skills.",
  },
  {
    image: [
      "Customer_Complain_Resolution_Workflow_Trello.png",
      "Customer_Complain_Resolution_Workflow_Trello.png",
    ],
    imageAlt: "Customer Complaint Resolution Workflow",
    projectTitle: "Customer Complaint Resolution Workflow (Trello Board)",
    projectDes:
      "Developed and organized a Trello board to manage customer complaint resolutions efficiently. The workflow includes clear stages: <br> New Request → In Progress → Waiting on Customer → Resolved → Thank You Mail.<br> Each card tracks communication, feedback, and satisfaction status to ensure transparency and resolution. Visual labels and feedback forms were used to monitor service quality, follow-ups, and customer experience — helping improve support and build loyalty.",
  },
  {
    image: ["Email_Management.png", "Email_Management.png", "Email_2.png", "Email_3.png", "Email_4.png", "Email_Response to customer.png"],
    imageAlt: "Email Management",
    projectTitle: "Email Management",
    projectDes:
      "Efficiently handled professional email correspondence by organizing inboxes, responding to client inquiries, and ensuring timely follow-ups. Prioritized messages, flagged urgent requests, and maintained a clean, action-based email system to support smooth communication and decision-making.",
  },
  {
    image: ["Slack_Task.png", "Slack_Task.png"],
    imageAlt: "Slack",
    projectTitle: "Slack Task",
    projectDes: "I communicated with other team members via slack",
  },
];

const service_list = document.getElementById("sub_services");
services.forEach((service) => {
  service_list.innerHTML += `
                <div
                  class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <h3 class="text-xl font-semibold mb-2">
                    ${service.title}
                  </h3>
                  <p class="text-gray-600">
                    ${service.des}
                  </p>
                </div>
              `;
});


const portfolio_list = document.getElementById("sub_portfolio");

portfolios.forEach((portfolio, index) => {
  portfolio_list.innerHTML += `
          <div class="group hover:shadow-2xl border border-gray-200 rounded-2xl focus:outline-none overflow-hidden transition-all duration-300 cursor-pointer" onclick="openModalHandler(${index})">
            <div class="overflow-hidden">
              <img
                src="./images/${portfolio.image[0]}" // Show first image as thumbnail
                class="object-cover w-full h-56 mb-5 bg-center rounded transform group-hover:scale-105 transition-transform duration-300"
                alt="${portfolio.image[0]}"
                loading="lazy"
              />
            </div>
            <div class="p-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900">
                <a href="#" class="text-gray-900 hover:text-purple-700">
                  ${portfolio.projectTitle}
                </a>
              </h2>
              <p class="mb-3 text-sm font-normal text-gray-500">
                ${portfolio.projectDes}
              </p>
            </div>
          </div>
        `;
});


// Modal functions
let currentImageIndex = 0;
let startX = 0;
let isDragging = false;

function openModalHandler(index) {
  currentPortfolioIndex = index;
  const portfolio = portfolios[index];
  currentImageIndex = 0;

  // Create modal with blur background and swipe functionality
  const modalHTML = `
          <div id="portfolioModal" class="fixed inset-0 z-50">
            
            
            <!-- Main modal content at bottom -->
            <div class="fixed bottom-0 left-0 right-0 flex justify-center">
              <div class="relative w-[80vw] h-[80vh] bg-white rounded-t-xl rounded-b-none overflow-hidden flex flex-col shadow-2xl">
                <!-- Close button -->
                <button onclick="closeModalHandler()" class="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <!-- Image gallery with swipe -->
                <div 
                  class="flex-1 relative overflow-hidden"
                  id="imageContainer"
                  ontouchstart="handleTouchStart(event)"
                  ontouchmove="handleTouchMove(event)"
                  ontouchend="handleTouchEnd()"
                  onmousedown="handleMouseDown(event)"
                  onmousemove="handleMouseMove(event)"
                  onmouseup="handleMouseEnd()"
                  onmouseleave="handleMouseEnd()"
                >
                 <!-- Blurred background with current image -->
                  <div class="absolute inset-0 overflow-hidden">
                    <div class="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg">
                      <img 
                        src="./images/${portfolio.image[currentImageIndex]}" 
                        alt="${portfolio.imageAlt}" 
                        class="w-full h-full object-cover opacity-10 backdrop-blur-lg"
                        id="modalBlurBg"
                      >
                    </div>
                  </div>
                  <div class="absolute inset-0 flex transition-transform duration-300" id="portfolioImageSlider">
                    ${portfolio.image
                      .map(
                        (img, i) => `
                      <div class="min-w-full h-full flex items-center justify-center">
                        <img 
                          src="./images/${img}" 
                          alt="${portfolio.imageAlt}" 
                          class="object-contain max-h-full max-w-full select-none"
                          draggable="false"
                        >
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
                
                <!-- Content section -->
                <div class="p-6 bg-gray-100 border-t border-gray-200">
                  <h2 class="text-2xl font-bold text-gray-800 mb-2">${
                    portfolio.projectTitle
                  }</h2>
                  <p class="text-gray-600 mb-4">${portfolio.projectDes}</p>
                  
                  <!-- Image navigation dots -->
                  <div class="flex justify-center space-x-2 mt-4">
                    ${portfolio.image
                      .map(
                        (_, i) => `
                      <button onclick="goToImage(${i})" class="w-3 h-3 rounded-full ${
                          i === 0 ? "bg-gray-800" : "bg-gray-300"
                        }"></button>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

  // Add modal to body
  document.body.insertAdjacentHTML("beforeend", modalHTML);
  document.body.style.overflow = "hidden";

  // Initialize swipe functionality
  setupSwipe();
}

// Swipe/touch handlers
function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  isDragging = true;
}

function handleTouchMove(e) {
  if (!isDragging) return;
  const slider = document.getElementById("portfolioImageSlider");
  const currentX = e.touches[0].clientX;
  const diff = startX - currentX;
  slider.style.transform = `translateX(calc(-${
    currentImageIndex * 100
  }% - ${diff}px))`;
}

function handleTouchEnd() {
  if (!isDragging) return;
  isDragging = false;
  const slider = document.getElementById("portfolioImageSlider");
  const sliderRect = slider.getBoundingClientRect();
  const threshold = sliderRect.width * 0.2;
  const diff = startX - event.changedTouches[0].clientX;

  if (
    diff > threshold &&
    currentImageIndex < portfolios[currentPortfolioIndex].image.length - 1
  ) {
    goToImage(currentImageIndex + 1);
  } else if (diff < -threshold && currentImageIndex > 0) {
    goToImage(currentImageIndex - 1);
  } else {
    goToImage(currentImageIndex);
  }
}

// Mouse drag handlers (for desktop)
function handleMouseDown(e) {
  startX = e.clientX;
  isDragging = true;
}

function handleMouseMove(e) {
  if (!isDragging) return;
  const slider = document.getElementById("portfolioImageSlider");
  const currentX = e.clientX;
  const diff = startX - currentX;
  slider.style.transform = `translateX(calc(-${
    currentImageIndex * 100
  }% - ${diff}px))`;
}

function handleMouseEnd() {
  if (!isDragging) return;
  isDragging = false;
  const slider = document.getElementById("portfolioImageSlider");
  const sliderRect = slider.getBoundingClientRect();
  const threshold = sliderRect.width * 0.2;
  const diff = startX - event.clientX;

  if (
    diff > threshold &&
    currentImageIndex < portfolios[currentPortfolioIndex].image.length - 1
  ) {
    goToImage(currentImageIndex + 1);
  } else if (diff < -threshold && currentImageIndex > 0) {
    goToImage(currentImageIndex - 1);
  } else {
    goToImage(currentImageIndex);
  }
}

function goToImage(index) {
  const portfolio = portfolios[currentPortfolioIndex];
  if (index < 0 || index >= portfolio.image.length) return;

  currentImageIndex = index;
  const slider = document.getElementById("portfolioImageSlider");
  const blurBg = document.getElementById("modalBlurBg");

  // Update slider position
  slider.style.transform = `translateX(-${index * 100}%)`;

  // Update blur background
  if (blurBg) {
    blurBg.src = portfolio.image[index];
  }

  // Update active dots
  document.querySelectorAll("#portfolioModal .bg-gray-800").forEach((dot) => {
    dot.classList.remove("bg-gray-800");
    dot.classList.add("bg-gray-300");
  });
  const dots = document.querySelectorAll("#portfolioModal .bg-gray-300");
  if (dots[index]) {
    dots[index].classList.remove("bg-gray-300");
    dots[index].classList.add("bg-gray-800");
  }
}

function closeModalHandler() {
  const modal = document.getElementById("portfolioModal");
  if (modal) {
    modal.remove();
    document.body.style.overflow = "";
  }
}
// Helper to show alert
function showAlert(message, color = "#7608c5") {
  const alertBox = document.getElementById("formAlert");
  alertBox.textContent = message;
  alertBox.style.backgroundColor = color;
  alertBox.style.display = "block";
  alertBox.style.opacity = 1;

  setTimeout(() => {
    alertBox.style.opacity = 0;
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 300);
  }, 1000); // 1 second timeout
}

// Form submission
const submitForm = document.getElementById("contactForm");
submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get values from the form
  const fname = contactForm.fname.value.trim();
  const lname = contactForm.lname.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  // Check for empty fields
  if (!fname || !lname || !email || !company || !message) {
    showAlert("Please fill in all fields.", "#e63946"); // red alert
    return;
  }

  try {
    const mailer = await emailjs.sendForm(
      "service_pvmfrll",
      "template_it4qbmh",
      submitForm
    );
    const mailer2 = await emailjs.sendForm(
      "service_pvmfrll",
      "template_hemedh9",
      submitForm
    );

    if (!mailer || !mailer2) {
      showAlert("Failed to contact Funmilola.", "#e63946");
    } else {
      showAlert("Submitted successfully!");
      submitForm.reset();
    }
  } catch (err) {
    console.error(err);
    showAlert("Something went wrong. Please try again.", "#e63946");
  }
});
const toggleButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickOnToggle = toggleButton.contains(e.target);
  if (!isClickInsideMenu && !isClickOnToggle) {
    mobileMenu.classList.add("hidden");
  }
});

lucide.createIcons();
