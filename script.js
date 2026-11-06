const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxCaption = document.querySelector(".lightbox__caption");

const translations = {
  en: {
    pageTitle: "Athénée Retreat | Palaio Faliro Apartment in Athens",
    metaTitle: "Athénée Retreat | Palaio Faliro Apartment in Athens",
    metaDescription: "Book Athénée Retreat, a stylish short-term rental in Palaio Faliro, Athens. Enjoy two king bedrooms, a private balcony and easy tram access.",
    localizedUrl: "?lang=en",
    openGraphLocale: "en_GB",
    alternateOpenGraphLocale: "el_GR",
    shareImage: "assets/living.webp",
    structuredDescription: "A stylish short-term rental apartment in Palaio Faliro, Athens, with two king bedrooms, a sofa bed, a private furnished balcony, a fully equipped kitchen and one bathroom. The Amphitheas tram stop is a one-minute walk away.",
    skipContent: "Skip to content",
    home: "Athénée Retreat home",
    footerHome: "Athénée Retreat, back to top",
    wordmarkCaption: "RETREAT · ATHENS",
    mainNavigation: "Main navigation",
    navStay: "The stay",
    navSpaces: "The spaces",
    navNeighbourhood: "The neighbourhood",
    navContact: "Get in touch",
    selectLanguage: "Select language",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    heroEyebrow: "PALAIO FALIRO · ATHENS",
    heroTitle: "A softer<br>stay in <em>Athens.</em>",
    heroDescription: "A light-filled retreat where the rhythm of the city meets the ease of the seaside.",
    airbnbPlatform: "Airbnb",
    bookingPlatform: "Booking.com",
    bookOnAirbnb: "Book on Airbnb",
    bookOnBooking: "Book on Booking.com",
    discoverApartment: "Discover the apartment",
    directContact: "DIRECT CONTACT",
    heroNote: "Thoughtfully made for slower mornings and easy arrivals.",
    heroImageAlt: "The airy living room, styled in warm neutral tones",
    heroImageCaption: "YOUR PRIVATE ATHENS RETREAT",
    highlights: "Apartment highlights",
    highlightBedrooms: "King bedrooms",
    highlightBalcony: "Private balcony",
    highlightTram: "Minute to the tram",
    highlightApartment: "Whole apartment",
    balconyAlt: "The private balcony with a dining table, greenery and outdoor seating",
    photoIndex: "01 / A LITTLE OUTDOORS",
    storyEyebrow: "A PLACE TO UNWIND",
    storyTitle: "The best of both worlds, at your own pace.",
    storyParagraphOne: "Settle into a considered, comfortable home in Palaio Faliro. Soft textures, calm colours and thoughtful details make it easy to feel at home, whether you’re here for a weekend away or a longer stay.",
    storyParagraphTwo: "Start the day with coffee on your private balcony, then take the tram towards central Athens or head for the coastal promenade.",
    storyLink: "Get to know the area",
    spacesEyebrow: "MADE FOR COMFORT",
    spacesTitle: "Room to settle in.",
    spacesAside: "A private second-floor apartment, with the little things already thought of.",
    photoGallery: "Apartment photo gallery",
    galleryLivingCaption: "A bright, welcoming living room",
    galleryLivingAlt: "The bright living room with a comfortable sofa",
    galleryLivingLabel: "A place to put your feet up",
    galleryBedroomCaption: "One of two restful bedrooms",
    galleryBedroomAlt: "A calm bedroom with a king-size bed",
    galleryBedroomLabel: "Rest, and reset",
    galleryDiningCaption: "The dining area, ready for a meal together",
    galleryDiningAlt: "The dining area set for a meal",
    galleryDiningLabel: "Gather around",
    galleryKitchenCaption: "The fully equipped kitchen",
    galleryKitchenAlt: "The apartment's fully equipped kitchen",
    galleryKitchenLabel: "Make yourself at home",
    galleryBalconyCaption: "Your own furnished balcony",
    galleryBalconyAlt: "Outdoor dining and seating on the private balcony",
    galleryBalconyLabel: "A breath of fresh air",
    galleryBathroomCaption: "The modern bathroom",
    galleryBathroomAlt: "The bright, modern bathroom",
    galleryBathroomLabel: "A fresh start",
    detailsEyebrow: "THE DETAILS",
    detailsTitle: "Everything you need.<br>Nothing you don’t.",
    detailsIntro: "Make yourself at home in a space that feels easy from the moment you arrive.",
    detailSleepTitle: "Sleep well",
    detailSleepText: "Two bedrooms with king-size beds, plus a sofa bed in the living room.",
    detailKitchenTitle: "Make it yours",
    detailKitchenText: "A fully equipped kitchen, dining space and a comfortable, light-filled living room.",
    detailBalconyTitle: "Step outside",
    detailBalconyText: "Your own furnished balcony, with space to sit, dine and slow down.",
    locationEyebrow: "PALAIO FALIRO, ATHENS",
    locationTitle: "Close to the city.<br>Closer to the coast.",
    locationText: "In a welcoming seaside neighbourhood, with cafés, bakeries and everyday essentials nearby. Amphitheas tram stop is just a one-minute walk away; Eden Beach, Flisvos Marina and the Stavros Niarchos Foundation Cultural Center are all within easy reach.",
    locationLink: "Explore Palaio Faliro",
    locationImageAlt: "A leafy walkway near the apartment",
    locationImageLabel: "THE ATHENS RIVIERA, AT YOUR DOORSTEP",
    contactEyebrow: "YOUR STAY STARTS HERE",
    contactTitle: "We’d love to welcome you.",
    contactText: "For availability and reservations, book through Airbnb or Booking.com, or get in touch directly.",
    sendEmail: "Send us an email",
    footerPlace: "Palaio Faliro, Athens",
    backToTop: "Back to top ↑",
    expandedPhoto: "Expanded apartment photo",
    closePhoto: "Close photo",
  },
  el: {
    pageTitle: "Athénée Retreat | Διαμέρισμα στο Παλαιό Φάληρο",
    metaTitle: "Athénée Retreat | Διαμέρισμα στο Παλαιό Φάληρο",
    metaDescription: "Κάντε κράτηση στο Athénée Retreat, ένα κομψό διαμέρισμα βραχυχρόνιας μίσθωσης στο Παλαιό Φάληρο. Δύο king υπνοδωμάτια, ιδιωτικό μπαλκόνι και τραμ σε 1 λεπτό.",
    localizedUrl: "?lang=el",
    openGraphLocale: "el_GR",
    alternateOpenGraphLocale: "en_GB",
    shareImage: "assets/living.webp",
    structuredDescription: "Ένα κομψό διαμέρισμα βραχυχρόνιας μίσθωσης στο Παλαιό Φάληρο της Αθήνας, με δύο υπνοδωμάτια με king κρεβάτια, καναπέ-κρεβάτι, ιδιωτικό επιπλωμένο μπαλκόνι, πλήρως εξοπλισμένη κουζίνα και ένα μπάνιο. Η στάση τραμ Αμφιθέας απέχει ένα λεπτό με τα πόδια.",
    skipContent: "Μετάβαση στο περιεχόμενο",
    home: "Αρχική σελίδα Athénée Retreat",
    footerHome: "Athénée Retreat, επιστροφή στην αρχή",
    wordmarkCaption: "ΑΠΟΔΡΑΣΗ · ΑΘΗΝΑ",
    mainNavigation: "Κεντρική πλοήγηση",
    navStay: "Η διαμονή",
    navSpaces: "Οι χώροι",
    navNeighbourhood: "Η γειτονιά",
    navContact: "Επικοινωνία",
    selectLanguage: "Επιλογή γλώσσας",
    menuOpen: "Άνοιγμα πλοήγησης",
    menuClose: "Κλείσιμο πλοήγησης",
    heroEyebrow: "ΠΑΛΑΙΟ ΦΑΛΗΡΟ · ΑΘΗΝΑ",
    heroTitle: "Μια ήρεμη<br>απόδραση στην <em>Αθήνα.</em>",
    heroDescription: "Ένα φωτεινό καταφύγιο, εκεί όπου ο ρυθμός της πόλης συναντά την αύρα της θάλασσας.",
    airbnbPlatform: "Airbnb",
    bookingPlatform: "Booking.com",
    bookOnAirbnb: "Κράτηση μέσω Airbnb",
    bookOnBooking: "Κράτηση μέσω Booking.com",
    discoverApartment: "Ανακαλύψτε το διαμέρισμα",
    directContact: "ΑΜΕΣΗ ΕΠΙΚΟΙΝΩΝΙΑ",
    heroNote: "Φτιαγμένο με φροντίδα, για ήρεμα πρωινά και ξέγνοιαστη άφιξη.",
    heroImageAlt: "Φωτεινό καθιστικό σε ζεστές, γήινες αποχρώσεις",
    heroImageCaption: "Η ΔΙΚΗ ΣΑΣ ΑΠΟΔΡΑΣΗ ΣΤΗΝ ΑΘΗΝΑ",
    highlights: "Χαρακτηριστικά διαμερίσματος",
    highlightBedrooms: "Υπνοδωμάτια με king κρεβάτια",
    highlightBalcony: "Ιδιωτικό μπαλκόνι",
    highlightTram: "1 λεπτό από το τραμ",
    highlightApartment: "Ολόκληρο διαμέρισμα",
    balconyAlt: "Ιδιωτικό μπαλκόνι με τραπέζι φαγητού, φυτά και καθιστικό",
    photoIndex: "01 / ΜΙΑ ΜΙΚΡΗ ΑΠΟΔΡΑΣΗ ΣΤΟ ΥΠΑΙΘΡΟ",
    storyEyebrow: "ΕΝΑΣ ΧΩΡΟΣ ΓΙΑ ΝΑ ΧΑΛΑΡΩΣΕΤΕ",
    storyTitle: "Τα καλύτερα και των δύο κόσμων, με τον δικό σας ρυθμό.",
    storyParagraphOne: "Σας περιμένει ένα προσεγμένο και άνετο σπίτι στο Παλαιό Φάληρο. Απαλές υφές, ήρεμα χρώματα και λεπτομέρειες με φροντίδα δημιουργούν μια αίσθηση οικειότητας, είτε έρχεστε για ένα σαββατοκύριακο είτε για μεγαλύτερη διαμονή.",
    storyParagraphTwo: "Ξεκινήστε τη μέρα με καφέ στο ιδιωτικό σας μπαλκόνι και έπειτα πάρτε το τραμ για το κέντρο της Αθήνας ή κατευθυνθείτε προς τον παραλιακό πεζόδρομο.",
    storyLink: "Γνωρίστε τη γειτονιά",
    spacesEyebrow: "ΑΝΕΣΗ ΜΕ ΚΑΘΕ ΛΕΠΤΟΜΕΡΕΙΑ",
    spacesTitle: "Ένας χώρος για να νιώσετε σαν στο σπίτι σας.",
    spacesAside: "Ιδιωτικό διαμέρισμα στον δεύτερο όροφο, με φροντίδα σε κάθε λεπτομέρεια.",
    photoGallery: "Φωτογραφίες του διαμερίσματος",
    galleryLivingCaption: "Ένα φωτεινό και φιλόξενο καθιστικό",
    galleryLivingAlt: "Φωτεινό καθιστικό με άνετο καναπέ",
    galleryLivingLabel: "Χαλαρώστε με την άνεσή σας",
    galleryBedroomCaption: "Ένα από τα δύο ξεκούραστα υπνοδωμάτια",
    galleryBedroomAlt: "Ήρεμο υπνοδωμάτιο με κρεβάτι king size",
    galleryBedroomLabel: "Ξεκούραση και ανανέωση",
    galleryDiningCaption: "Η τραπεζαρία, έτοιμη για ένα γεύμα μαζί",
    galleryDiningAlt: "Η τραπεζαρία στρωμένη για φαγητό",
    galleryDiningLabel: "Μαζευτείτε γύρω από το τραπέζι",
    galleryKitchenCaption: "Πλήρως εξοπλισμένη κουζίνα",
    galleryKitchenAlt: "Η πλήρως εξοπλισμένη κουζίνα του διαμερίσματος",
    galleryKitchenLabel: "Νιώστε σαν στο σπίτι σας",
    galleryBalconyCaption: "Το δικό σας επιπλωμένο μπαλκόνι",
    galleryBalconyAlt: "Εξωτερική τραπεζαρία και καθιστικό στο ιδιωτικό μπαλκόνι",
    galleryBalconyLabel: "Μια ανάσα δροσιάς",
    galleryBathroomCaption: "Το μοντέρνο μπάνιο",
    galleryBathroomAlt: "Φωτεινό, μοντέρνο μπάνιο",
    galleryBathroomLabel: "Μια νέα αρχή",
    detailsEyebrow: "ΟΙ ΛΕΠΤΟΜΕΡΕΙΕΣ",
    detailsTitle: "Όλα όσα χρειάζεστε.<br>Τίποτα περιττό.",
    detailsIntro: "Νιώστε αμέσως σαν στο σπίτι σας, σε έναν χώρο που σας υποδέχεται με άνεση.",
    detailSleepTitle: "Ήρεμος ύπνος",
    detailSleepText: "Δύο υπνοδωμάτια με king size κρεβάτια και καναπές-κρεβάτι στο καθιστικό.",
    detailKitchenTitle: "Όλα στη διάθεσή σας",
    detailKitchenText: "Πλήρως εξοπλισμένη κουζίνα, τραπεζαρία και άνετο, φωτεινό καθιστικό.",
    detailBalconyTitle: "Μια ανάσα έξω",
    detailBalconyText: "Το δικό σας επιπλωμένο μπαλκόνι, για να καθίσετε, να γευματίσετε και να χαλαρώσετε.",
    locationEyebrow: "ΠΑΛΑΙΟ ΦΑΛΗΡΟ, ΑΘΗΝΑ",
    locationTitle: "Κοντά στην πόλη.<br>Μια ανάσα από τη θάλασσα.",
    locationText: "Σε μια φιλόξενη παραθαλάσσια γειτονιά, με καφέ, φούρνους και ό,τι χρειάζεστε καθημερινά κοντά σας. Η στάση τραμ Αμφιθέας απέχει μόλις ένα λεπτό με τα πόδια, ενώ η παραλία Εδέμ, η Μαρίνα Φλοίσβου και το Κέντρο Πολιτισμού Ίδρυμα Σταύρος Νιάρχος βρίσκονται σε κοντινή απόσταση.",
    locationLink: "Ανακαλύψτε το Παλαιό Φάληρο",
    locationImageAlt: "Καταπράσινο δρομάκι κοντά στο διαμέρισμα",
    locationImageLabel: "Η ΑΘΗΝΑΪΚΗ ΡΙΒΙΕΡΑ, ΔΙΠΛΑ ΣΑΣ",
    contactEyebrow: "Η ΔΙΑΜΟΝΗ ΣΑΣ ΞΕΚΙΝΑ ΕΔΩ",
    contactTitle: "Θα χαρούμε να σας φιλοξενήσουμε.",
    contactText: "Για διαθεσιμότητα και κρατήσεις, επιλέξτε Airbnb ή Booking.com ή επικοινωνήστε απευθείας μαζί μας.",
    sendEmail: "Στείλτε μας email",
    footerPlace: "Παλαιό Φάληρο, Αθήνα",
    backToTop: "Πίσω στην αρχή ↑",
    expandedPhoto: "Μεγεθυμένη φωτογραφία διαμερίσματος",
    closePhoto: "Κλείσιμο φωτογραφίας",
  },
};

const languageLinks = document.querySelectorAll(".language-switch__button");
const preferredLanguage = navigator.language.toLowerCase().startsWith("el") ? "el" : "en";
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
let currentLanguage = translations[requestedLanguage] ? requestedLanguage : preferredLanguage;

function setLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  const localizedUrl = new URL(window.location.pathname, window.location.origin);
  localizedUrl.searchParams.set("lang", language);
  const canonicalUrl = localizedUrl.href;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation !== undefined) element.innerHTML = translation;
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const translation = dictionary[element.dataset.i18nContent];
    if (translation !== undefined) element.setAttribute("content", translation);
    if (element.dataset.i18nContent === "shareImage" && translation !== undefined) {
      element.setAttribute("content", new URL(translation, document.baseURI).href);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const translation = dictionary[element.dataset.i18nAlt];
    if (translation !== undefined) element.setAttribute("alt", translation);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const translation = dictionary[element.dataset.i18nAriaLabel];
    if (translation !== undefined) element.setAttribute("aria-label", translation);
  });

  document.querySelectorAll("[data-i18n-caption]").forEach((element) => {
    element.dataset.caption = dictionary[element.dataset.i18nCaption];
  });

  const imageUrls = [...new Set(
    [...document.querySelectorAll("img[src]")]
      .filter((image) => image.getAttribute("src"))
      .map((image) => new URL(image.getAttribute("src"), document.baseURI).href),
  )];
  document.querySelector("#structured-data").textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Athénée Retreat",
    description: dictionary.structuredDescription,
    url: canonicalUrl,
    image: imageUrls,
    email: "atheneeretreat@gmail.com",
    telephone: "+306940311888",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palaio Faliro",
      addressRegion: "Attica",
      addressCountry: "GR",
    },
    containsPlace: {
      "@type": "Apartment",
      numberOfBedrooms: 2,
      numberOfBathroomsTotal: 1,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Private balcony", value: true },
        { "@type": "LocationFeatureSpecification", name: "Fully equipped kitchen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      ],
    },
    sameAs: [
      "https://www.airbnb.gr/rooms/1467581060781598960",
      "https://www.booking.com/hotel/gr/fresh-faliro.el.html",
    ],
  });

  languageLinks.forEach((link) => {
    link.setAttribute("aria-current", String(link.dataset.language === language));
  });

  document.querySelector('link[rel="canonical"]').href = canonicalUrl;
  document.querySelector(`link[rel="alternate"][hreflang="${language}"]`).href = canonicalUrl;
  document.querySelector('meta[property="og:url"]').content = canonicalUrl;
  document.querySelector('meta[property="og:image"]').content = new URL(dictionary.shareImage, document.baseURI).href;
  document.querySelector('meta[name="twitter:image"]').content = new URL(dictionary.shareImage, document.baseURI).href;

  const otherLanguage = language === "en" ? "el" : "en";
  const alternateUrl = new URL(window.location.pathname, window.location.origin);
  alternateUrl.searchParams.set("lang", otherLanguage);
  document.querySelector(`link[rel="alternate"][hreflang="${otherLanguage}"]`).href = alternateUrl.href;

  const menuLabel = dictionary[menuToggle.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen"];
  menuToggle.setAttribute("aria-label", menuLabel);
  menuToggle.querySelector(".sr-only").textContent = menuLabel;
}

languageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set("lang", link.dataset.language);
    window.history.pushState({ language: link.dataset.language }, "", url);
    setLanguage(link.dataset.language);
  });
});

window.addEventListener("popstate", () => {
  const language = new URLSearchParams(window.location.search).get("lang");
  setLanguage(translations[language] ? language : preferredLanguage);
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  const menuLabel = isExpanded ? "menuOpen" : "menuClose";
  menuToggle.setAttribute("aria-label", translations[currentLanguage][menuLabel]);
  menuToggle.querySelector(".sr-only").textContent = translations[currentLanguage][menuLabel];
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[currentLanguage].menuOpen);
    menuToggle.querySelector(".sr-only").textContent = translations[currentLanguage].menuOpen;
  }
});

document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("click", () => {
    lightboxImage.src = card.dataset.image;
    lightboxImage.alt = card.querySelector("img").alt;
    lightboxCaption.textContent = card.dataset.caption;
    lightbox.showModal();
  });
});

document.querySelector(".lightbox__close").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("close", () => {
  lightboxImage.src = "";
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
const initialUrl = new URL(window.location.href);
initialUrl.searchParams.set("lang", currentLanguage);
window.history.replaceState({ language: currentLanguage }, "", initialUrl);
setLanguage(translations[currentLanguage] ? currentLanguage : "en");
