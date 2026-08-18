/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  document.body.classList.toggle("menu-open", open);
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

/* =========================
   VIDEO SWITCHER
========================= */
const mainVideo = document.getElementById("mainVideo");
const mainVideoSource = document.getElementById("mainVideoSource");
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(card => {
  card.addEventListener("click", () => {
    const file = card.dataset.video;
    if (!file) return;

    mainVideoSource.src = file;
    mainVideo.load();

    mainVideo.play().catch(() => {});

    videoCards.forEach(item => item.classList.remove("active"));
    card.classList.add("active");
  });
});

/* =========================
   CHATBOT
========================= */
const chatbot = document.getElementById("chatbot");
const chatToggle = document.getElementById("chatToggle");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

chatToggle.addEventListener("click", () => {
  chatbot.classList.toggle("open");

  if (chatbot.classList.contains("open")) {
    setTimeout(() => chatInput.focus(), 100);
  }
});

chatClose.addEventListener("click", () => {
  chatbot.classList.remove("open");
});

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "message " + type;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

const knowledge = [
  {
    keys:["साझा मोर्चा क्या","साझा मोर्चा कौन","sajha morcha","what is sajha"],
    answer:"साझा मोर्चा एक राजनीतिक प्लेटफार्म है, कोई राजनीतिक पार्टी नहीं है। वेबसाइट के अनुसार इसका उद्देश्य युवाओं को संगठित करना, चुनाव लड़ने में सहायता करना और साझा प्रयासों से सिस्टम में बदलाव लाना है।"
  },
  {
    keys:["विजन","vision","उद्देश्य","लक्ष्य"],
    answer:"साझा मोर्चा का प्रमुख विचार जन से जुड़ाव, समाज से संवाद, युवाओं की भागीदारी और साझा प्रयासों के माध्यम से बदलाव से संबंधित है।"
  },
  {
    keys:["उम्मीदवार","candidate","आवेदन","apply","आयु","age"],
    answer:"वेबसाइट पर दी गई जानकारी के अनुसार 21 से 35 वर्ष के युवा साथी साझा उम्मीदवार आवेदन प्रक्रिया में हिस्सा ले सकते हैं। आवेदन के लिए वेबसाइट के 'साझा उम्मीदवार आवेदन' पेज पर जाएँ।"
  },
  {
    keys:["सदस्य","member","join","जुड़ें"],
    answer:"आप अपने क्षेत्र में साझा मोर्चा के अभियान से जुड़कर स्थानीय मुद्दों पर काम करने के विकल्प देख सकते हैं।"
  },
  {
    keys:["स्वयंसेवक","volunteer"],
    answer:"वेबसाइट पर स्वयंसेवक के रूप में जन-संवाद, चौपाल और जागरूकता कार्यक्रमों में समय और कौशल देने का विकल्प बताया गया है।"
  },
  {
    keys:["घोषणापत्र","manifesto","गाँव","गांव"],
    answer:"गाँव के घोषणा पत्र में स्कूल, बालिका शिक्षा, ड्रॉपआउट, स्वास्थ्य, पानी, पशुधन, आवास, स्टार्टअप ट्रेनिंग और प्रवासियों/भामाशाहों की भागीदारी जैसे विषय शामिल हैं।"
  },
  {
    keys:["नगर","नागरिक","citizen"],
    answer:"नागरिक मैनिफेस्टो में स्कूल, सड़क, पानी, मेडिकल चेकअप, मिलावट मुक्ति, सार्वजनिक परिवहन, स्टार्टअप ट्रेनिंग, प्रदूषण और महिला सुरक्षा जैसे विषय शामिल हैं।"
  },
  {
    keys:["गतिविधि","activities","काम"],
    answer:"वेबसाइट पर जन-संवाद, चौपाल, जागरूकता अभियान और सामाजिक कार्यक्रमों को गतिविधियों के रूप में प्रस्तुत किया गया है।"
  }
];

function getBotAnswer(question) {
  const q = question.toLowerCase().trim();

  if (!q) return "कृपया अपना सवाल लिखें।";

  if (
    q.includes("नमस्ते") ||
    q.includes("नमस्कार") ||
    q.includes("hello") ||
    q === "hi"
  ) {
    return "नमस्कार! 🙏 आप साझा मोर्चा के बारे में क्या जानना चाहते हैं?";
  }

  if (q.includes("धन्यवाद") || q.includes("thanks")) {
    return "आपका स्वागत है! 🙏";
  }

  for (const item of knowledge) {
    if (item.keys.some(key => q.includes(key.toLowerCase()))) {
      return item.answer;
    }
  }

  return "मुझे इस सवाल का सटीक उत्तर वेबसाइट में उपलब्ध जानकारी से नहीं मिला। आप विज़न, घोषणापत्र, गतिविधियों, सदस्यता या साझा उम्मीदवार के बारे में पूछ सकते हैं।";
}

function askQuestion(question) {
  addMessage(question, "user");

  setTimeout(() => {
    addMessage(getBotAnswer(question), "bot");
  }, 300);
}

chatForm.addEventListener("submit", event => {
  event.preventDefault();

  const question = chatInput.value.trim();
  if (!question) return;

  askQuestion(question);
  chatInput.value = "";
});

document.querySelectorAll(".quick button").forEach(button => {
  button.addEventListener("click", () => {
    askQuestion(button.dataset.question);
  });
});

/* =========================
   SCROLL REVEAL
========================= */
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {threshold:.12}
);

revealItems.forEach(item => observer.observe(item));

/* =========================
   HERO VIDEO FALLBACK
========================= */
const heroVideo = document.querySelector(".hero-video");

heroVideo.addEventListener("error", () => {
  heroVideo.style.display = "none";
});


/* =========================================================
   ABOUT PHOTO CAROUSEL
   ========================================================= */

const photoTrack = document.getElementById("photoTrack");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDots = document.getElementById("carouselDots");

const carouselPhotos =
    document.querySelectorAll(".carousel-photo");

let currentPhoto = 0;


/* Create dots */

carouselPhotos.forEach((photo, index) => {

    const dot = document.createElement("button");

    dot.className = "carousel-dot";

    dot.setAttribute(
        "aria-label",
        "फोटो " + (index + 1)
    );

    dot.addEventListener("click", () => {
        currentPhoto = index;
        updateCarousel();
    });

    carouselDots.appendChild(dot);

});


const dots =
    document.querySelectorAll(".carousel-dot");


/* Update carousel */

function updateCarousel() {

    const mobile =
        window.innerWidth <= 800;

    const visiblePhotos =
        mobile ? 1 : 2;

    const maxIndex =
        Math.max(
            0,
            carouselPhotos.length - visiblePhotos
        );

    if (currentPhoto > maxIndex) {
        currentPhoto = maxIndex;
    }

    if (currentPhoto < 0) {
        currentPhoto = 0;
    }

    const photoWidth =
        carouselPhotos[0].getBoundingClientRect().width;

    const gap =
        mobile ? 0 : 14;

    const move =
        currentPhoto * (photoWidth + gap);

    photoTrack.style.transform =
        `translateX(-${move}px)`;


    /* Active dot */

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    if (dots[currentPhoto]) {
        dots[currentPhoto].classList.add("active");
    }


    /* Button states */

    carouselPrev.disabled =
        currentPhoto === 0;

    carouselNext.disabled =
        currentPhoto >= maxIndex;

}


/* Previous */

carouselPrev.addEventListener("click", () => {

    currentPhoto--;

    updateCarousel();

});


/* Next */

carouselNext.addEventListener("click", () => {

    currentPhoto++;

    updateCarousel();

});


/* Resize */

window.addEventListener("resize", () => {

    updateCarousel();

});


/* Initial */

updateCarousel();


/* =========================================================
   ACTIVITIES CAROUSEL
========================================================= */

const activityTrack =
    document.getElementById("activityTrack");

const activityPrev =
    document.getElementById("activityPrev");

const activityNext =
    document.getElementById("activityNext");

const activityDots =
    document.getElementById("activityDots");

const activityImages =
    document.querySelectorAll(".activity-image");


let currentActivity = 0;


/* Create dots */

activityImages.forEach((image, index) => {

    const dot =
        document.createElement("button");

    dot.className = "activity-dot";

    dot.setAttribute(
        "aria-label",
        "गतिविधि " + (index + 1)
    );

    dot.addEventListener("click", () => {

        currentActivity = index;

        updateActivityCarousel();

    });

    activityDots.appendChild(dot);

});


const activityDotItems =
    document.querySelectorAll(".activity-dot");


/* Update carousel */

function updateActivityCarousel() {

    const mobile =
        window.innerWidth <= 800;

    const visibleImages =
        mobile ? 1 : 2;

    const maxIndex =
        Math.max(
            0,
            activityImages.length - visibleImages
        );


    if (currentActivity > maxIndex) {
        currentActivity = maxIndex;
    }

    if (currentActivity < 0) {
        currentActivity = 0;
    }


    const imageWidth =
        activityImages[0]
        .getBoundingClientRect()
        .width;


    const gap =
        mobile ? 0 : 14;


    const movement =
        currentActivity *
        (imageWidth + gap);


    activityTrack.style.transform =
        `translateX(-${movement}px)`;


    /* Active dot */

    activityDotItems.forEach(dot => {

        dot.classList.remove("active");

    });


    if (activityDotItems[currentActivity]) {

        activityDotItems[currentActivity]
            .classList.add("active");

    }


    /* Button states */

    activityPrev.disabled =
        currentActivity === 0;

    activityNext.disabled =
        currentActivity >= maxIndex;

}


/* Previous */

activityPrev.addEventListener("click", () => {

    currentActivity--;

    updateActivityCarousel();

});


/* Next */

activityNext.addEventListener("click", () => {

    currentActivity++;

    updateActivityCarousel();

});


/* Responsive resize */

window.addEventListener("resize", () => {

    updateActivityCarousel();

});


/* Initial */

updateActivityCarousel();
