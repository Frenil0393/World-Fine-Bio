// ============ LANGUAGE & TRANSLATION SYSTEM ============
const translations = {
  en: {
    // Header & Navigation
    home: "Overview",
    products: "Products",
    contact: "Contact",
    // Language selector
    selectLanguage: "Select Language",
    english: "English",
    gujarati: "ગુજરાતી",
    continue: "Continue",
    // Home page
    ecoResponsible: "Eco Responsible Bio Chemistry",
    chemistryTitle: "Chemistry for the field, the factory, and the shelf.",
    chemistryDesc: "WORLD FINE BIO CHEMICLES by Abhishek Bhanderi supplies agro chemicals, PGR, fertilizer, water soluble fertilizer, industrial chemicals, solvents, speciality chemicals, glassware, lab chemicals, food colour, and food preservatives with dependable bulk support.",
    exploreCatalog: "Explore Catalog",
    requestQuotation: "Request Quotation",
    coreCategories: "Core categories",
    bulkDealerSupply: "Dealer supply",
    fastResponse: "Response on inquiry",
    whoWeAre: "Who We Are",
    reliableSupplier: "Reliable chemical supplier for farm, factory, and lab requirements.",
    weWork: "We work with farmers, traders, laboratories, and industries through a focused product range and simple ordering flow.",
    coreFocus: "Core Focus",
    categories: "Agro chemicals, PGR, and crop support products|Fertilizer and water soluble fertilizer supply|Industrial chemicals and solvents|Speciality chemicals and lab chemicals|Food colour, food preservatives, and glassware",
    featuredProducts: "Featured Products",
    featuredDesc: "Popular items that give visitors a quick view of the catalog.",
    featuredDetails: "These selected products show the range at a glance and help customers jump straight into the most common categories.",
    founderStory: "Founder Story",
    founderHeading: "Family roots, local knowledge, and long-term trade experience.",
    // Products
    agroChemical: "Agro Chemical",
    agroPrimeBoost: "AgroPrime Boost",
    agroBoostDesc: "Crop support formulation for farm dealers and growers who need a dependable supply option.",
    bestSeller: "Best Seller",
    seeAgroRange: "See Agro Range",
    fertilizer: "Fertilizer",
    soluFeed: "SoluFeed WSF",
    soluFeedDesc: "Water soluble fertilizer for drip and foliar use across modern farm operations.",
    popular: "Popular",
    fastDissolving: "Fast dissolving",
    seeFertilizerRange: "See Fertilizer Range",
    labChemical: "Lab Chemical",
    labPure: "LabPure Grade A",
    labPureDesc: "Laboratory supply for testing, research, and quality control workflows.",
    trusted: "Trusted",
    qcReady: "QC ready",
    seeLabRange: "See Lab Range",
    onRequest: "₹On Request",
    customPricing: "custom pricing"
  },
  gu: {
    // Header & Navigation
    home: "ઘર",
    products: "ઉત્પાદનો",
    contact: "સંપર્ક",
    // Language selector
    selectLanguage: "ભાષા પસંદ કરો",
    english: "English",
    gujarati: "ગુજરાતી",
    continue: "આગળ વધો",
    // Home page
    ecoResponsible: "ઇકો જવાબદાર બાયો રસાયણ",
    chemistryTitle: "ખેતર, કારખાનો અને શેલ્ફ માટે રસાયણ.",
    chemistryDesc: "WORLD FINE BIO CHEMICLES એ અભિશેક ભંડેરી દ્વારા કૃષિ રસાયણો, PGR, ખાતર, જળ દ્રાવ્ય ખાતર, શિલ્પ રસાયણો, દ્રાવણો, વિશેષ રસાયણો, કાચ, પ્રયોગશાળા રસાયણો, ખોરાક રંગ અને ખાદ્ય સંરક્ષક વિશ્વસનીય બલ્ક સમર્થન સાથે પૂરી પાડે છે.",
    exploreCatalog: "કેટલોગ શોધો",
    requestQuotation: "અવતરણ માટે વિનંતી",
    coreCategories: "મુખ્ય શ્રેણીઓ",
    bulkDealerSupply: "વ્યાજારી સપ્લાય",
    fastResponse: "તેજ પ્રતિક્રિયા",
    whoWeAre: "આપણે કોણ છીએ",
    reliableSupplier: "ખેતર, કારખાનો અને પ્રયોગશાળાની જરૂરિયાતો માટે વિશ્વસનીય રસાયણ સપ્લાયર.",
    weWork: "અમે ખેડૂતો, વ્યાજારીઓ, પ્રયોગશાળાઓ અને ઉદ્યોગોની સાથે કેન્દ્રિત પણ્ય શ્રેણી અને સરળ ઓર્ડર પ્રવાહ દ્વારા કામ કરીએ છીએ.",
    coreFocus: "મુખ્ય ધ્યાન",
    categories: "કૃષિ રસાયણો, PGR અને પાક સમર્થન ઉત્પાદનો|ખાતર અને જળ દ્રાવ્ય ખાતર સપ્લાય|શિલ્પ રસાયણો અને દ્રાવણો|વિશેષ રસાયણો અને પ્રયોગશાળા રસાયણો|ખોરાક રંગ, ખાદ્ય સંરક્ષક અને કાચ",
    featuredProducts: "વિશેષ ઉત્પાદનો",
    featuredDesc: "લોકપ્રિય વસ્તુઓ જે મુલાકાતીઓને કેટલોગનો ઝડપી દૃશ્ય આપે છે.",
    featuredDetails: "આ પસંદ કરેલ ઉત્પાદનો શ્રેણી એક નજરમાં બતાવે છે અને ગ્રાહકોને સૌથી સામાન્ય શ્રેણીમાં સીધા જવામાં મદદ કરે છે.",
    founderStory: "સંસ્થાપક વર્ણન",
    founderHeading: "પારિવારિક મૂળ, સ્થાનિક જ્ઞાન અને લાંબા ગાળાનો વ્યાપાર અનુભવ.",
    // Products
    agroChemical: "કૃષિ રસાયણ",
    agroPrimeBoost: "AgroPrime Boost",
    agroBoostDesc: "પાક સમર્થન ફોર્મ્યુલેશન કૃષક વ્યાજારીઓ અને ઉગાડનારો માટે જેમણે વિશ્વસનીય સપ્લાય વિકલ્પની જરૂર છે.",
    bestSeller: "શ્રેષ્ઠ વિક્રેતા",
    seeAgroRange: "કૃષિ શ્રેણી જુઓ",
    fertilizer: "ખાતર",
    soluFeed: "SoluFeed WSF",
    soluFeedDesc: "ટીપક અને પર્ણ ઉપયોગ માટે આધુનિક ખેતર કામગીરીમાં જળ દ્રાવ્ય ખાતર.",
    popular: "લોકપ્રિય",
    fastDissolving: "ઝડપથી ગણવું",
    seeFertilizerRange: "ખાતર શ્રેણી જુઓ",
    labChemical: "પ્રયોગશાળા રસાયણ",
    labPure: "LabPure Grade A",
    labPureDesc: "પરીક્ષણ, સંશોધન અને ગુણવત્તા નિયંત્રણ વર્કફ્લો માટે પ્રયોગશાળા સપ્લાય.",
    trusted: "વિશ્વાસ કર્યા",
    qcReady: "QC તૈયાર",
    seeLabRange: "પ્રયોગશાળા શ્રેણી જુઓ",
    onRequest: "₹વિનંતી પર",
    customPricing: "કસ્ટમ મૂલ્ય નિર્ધારણ"
  }
};

// Additional UI strings
translations.en.productCatalog = "Product Catalog";
translations.en.requestQuote = "Request a Quote";
translations.en.backToOverview = "Back to Overview";
translations.en.contactUs = "Contact Us";

translations.gu.productCatalog = "ઉત્પાદન કેટલોગ";
translations.gu.requestQuote = "ક્વોટ માટે વિનંતી";
translations.gu.backToOverview = "વિહંગાવલોકન પર પાછા જાઓ";
translations.gu.contactUs = "અમારો સંપર્ક કરો";

// More site strings
translations.en.categories1 = "Agro chemicals, PGR, and crop support products";
translations.en.categories2 = "Fertilizer and water soluble fertilizer supply";
translations.en.categories3 = "Industrial chemicals and solvents";
translations.en.categories4 = "Speciality chemicals and lab chemicals";
translations.en.categories5 = "Food colour, food preservatives, and glassware";

translations.gu.categories1 = "કૃષિ રસાયણો, PGR અને પાક સમર્થન ઉત્પાદનો";
translations.gu.categories2 = "ખાતર અને જળ દ્રાવ્ય ખાતર સપ્લાય";
translations.gu.categories3 = "શિલ્પ રસાયણો અને દ્રાવણો";
translations.gu.categories4 = "વિશેષ રસાયણો અને પ્રયોગશાળા રસાયણો";
translations.gu.categories5 = "ખોરાક રંગ, ખાદ્ય સંરક્ષક અને કાચ";

// Story and expertise
translations.en.founderStory = translations.en.founderStory || "Founder Story";
translations.en.founderHeading = translations.en.founderHeading || "Family roots, local knowledge, and long-term trade experience.";
translations.en.storyPara1 = "WORLD FINE BIO CHEMICLES is a family-led business built on generations of trade expertise and local market knowledge. The company began with a traditional trading model and close dealer relationships, expanding over time into agro, industrial, lab, and food categories. Today, Abhishek Bhanderi leads the business with a cleaner brand identity, wider product display, and easier customer communication—while maintaining the trust and relationships his father established.";
translations.en.expertiseHeading = "Our Expertise & Credentials";
translations.en.expertisePara = "The family brings decades of field knowledge, direct product sourcing relationships, and comprehensive customer support experience. This foundation enables fast order fulfillment, reliable bulk supply, and industry-level expertise across all product categories.";
translations.en.productKnowledge = "Product Knowledge";
translations.en.dealerSupport = "Dealer Support";
translations.en.bulkSupply = "Bulk Supply";
translations.en.industryExperience = "Industry Experience";

translations.gu.founderStory = translations.gu.founderStory || "સંસ્થાપક વર્ણન";
translations.gu.founderHeading = translations.gu.founderHeading || "પારિવારિક મૂળ, સ્થાનિક જ્ઞાન અને લાંબા ગાળાનો વ્યાપાર અનુભવ.";
translations.gu.storyPara1 = "WORLD FINE BIO CHEMICLES પરિવાર-ચાલિત વ્યવસાય છે જે સદીના વેપાર અનુભવ અને સ્થાનિક બજાર જ્ઞાન પર નિર્મિત છે. કંપની પરંપરાગત વેપારી મોડલ અને નજીકના ડીલર સંબંધો સાથે શરૂ થઈ હતી અને સમય સાથે કૃષિ, શિલ્પ, પ્રયોગશાળા અને ખોરાક શ્રેણીઓને વિસ્તરાઇ છે. આજે, અભિશેક ભંડેરી વ્યવસાયનું નેતૃત્વ કરે છે અને વારસાગત વિશ્વાસ જાળવી રાખે છે.";
translations.gu.expertiseHeading = "અમારી નિષ્ણાતી અને પ્રમાણપત્ર";
translations.gu.expertisePara = "પરિવારે ક્ષેત્રીય જ્ઞાન, સીધા પ્રોડક્ટ સોર્સિંગ સંબંધો અને વ્યાપક ગ્રાહક સહાયના અનુભવનો દાયકાઓનો અનુભવ લાવવામાં આવે છે. આ પાયો ઝડપી ઓર્ડર પૂર્ણતા, વિશ્વસનીય બલ્ક સપ્લાઇ અને તમામ ઉત્પાદન કેટેગરીઓમાં ઉદ્યોગ-સ્તરના નિષ્ણાતી માટે સક્ષમ બનાવે છે.";
translations.gu.productKnowledge = "ઉત્પાદન જ્ઞાન";
translations.gu.dealerSupport = "ડિલર સપોર્ટ";
translations.gu.bulkSupply = "બલ્ક સપ્લાય";
translations.gu.industryExperience = "ઉદ્યોગ અનુભવ";

// Trust media and captions
translations.en.trustBuilder = "Trust Builder";
translations.en.trustBuilderH2 = "Swipe through farm photos and videos.";
translations.en.trustBuilderDesc = "A swipeable gallery gives visitors a fast way to see fields, growers, packing, and dispatch in motion.";
translations.en.farmView = "Farm View";
translations.en.farmViewDesc = "Healthy crop rows and field activity help visitors connect your products to real agricultural use.";
translations.en.growerConfidence = "Grower Confidence";
translations.en.growerConfidenceDesc = "Real farm activity makes the brand feel practical, personal, and dependable.";
translations.en.shortVideo = "Short Video";
translations.en.shortVideoDesc = "Use a quick walk-through video to show fields, storage, packing, or dispatch in motion.";
translations.en.fieldDetail = "Field Detail";
translations.en.fieldDetailDesc = "Close-up imagery helps customers feel closer to the work behind your supply chain.";
translations.en.farmAction = "Farm Action";
translations.en.farmActionDesc = "Movement, machinery, and scale help the page feel more real and commercial.";

translations.gu.trustBuilder = "ટ્રસ્ટ બિલ્ડર";
translations.gu.trustBuilderH2 = "ખેતરની તસ્વીર અને વીડિયાઓ દ્વારા સ્વાઇપ કરો.";
translations.gu.trustBuilderDesc = "સ્વાઇપ કરવા યોગ્ય ગેલેરી મુલાકાતીઓને ફિલ્ડ્સ, ઉગાડનારો, પેકિંગ અને ડિસ્પેચને ઝડપથી બતાવે છે.";
translations.gu.farmView = "ફાર્મ દૃશ્ય";
translations.gu.farmViewDesc = "સ્વસ્થ પાક તકો અને ફિલ્ડ પ્રવૃત્તિ મુલાકાતીઓને તમારા ઉત્પાદનોને વાસ્તવિક કૃષિ ઉપયોગ સાથે જોડવામાં મદદ કરે છે.";
translations.gu.growerConfidence = "ઉગાડનારો વિશ્વાસ";
translations.gu.growerConfidenceDesc = "વાસ્તવિક ખેતરની પ્રવૃત્તિ બ્રાન્ડને વ્યાવહારિક, વ્યક્તિગત અને વિશ્વસનીય બનાવે છે.";
translations.gu.shortVideo = "ટૂંકુ વિડીયો";
translations.gu.shortVideoDesc = "ખેતરો, સ્ટોરેજ, પેકિંગ અથવા ડિસ્પોચ બતાવવા માટે ઝડપથી વોક-થ્રુ વિડીયોનો ઉપયોગ કરો.";
translations.gu.fieldDetail = "મైదાન વિગત";
translations.gu.fieldDetailDesc = "ક્લોઝ-અપ ઈમેજરી ગ્રાહકોને તમારા સપ્લાય ચેઇનની પાછળના કામથી વધારે નજીક લાગે છે.";
translations.gu.farmAction = "ખેતરની પ્રવૃત્તિ";
translations.gu.farmActionDesc = "ચળવળ, યંત્રસામગ્રી અને કદ પેજને વધારે વાસ્તવિક અને વાણિજ્યિક બનાવે છે.";

// CTA and footer
translations.en.startHere = "Start Here";
translations.en.ctaHeading = "Need a single supplier for farm, lab, food, and industrial products?";
translations.en.ctaDesc = "Explore the catalog or send your requirement and we’ll respond with a practical quotation.";
translations.en.openProducts = "Open Products";
translations.en.contactNow = "Contact Now";

translations.gu.startHere = "અહીંથી શરૂ કરો";
translations.gu.ctaHeading = "ખેતર, પ્રયોગશાળા, ખોરાક અને ઉદ્યોગ ઉત્પાદનો માટે એક એકલ સપ્લાયર જોઈએ છે?";
translations.gu.ctaDesc = "કેટલોગ તપાસો અથવા તમારી આવશ્યકતાઓ મોકલો અને અમે વ્યાવહારિક કોટેશન સાથે જવાબ આપીને મદદ કરીશું.";
translations.gu.openProducts = "ઉત્પાદનો ખોલો";
translations.gu.contactNow = "હવે સંપર્ક કરો";

translations.en.footerAboutHeading = "About Us";
translations.en.footerAboutPara = "Abhishek Bhanderi's WORLD FINE BIO CHEMICLES supplies farm, industrial, lab, and food industry products with a focus on quality and reliable service.";
translations.en.quickLinks = "Quick Links";
translations.en.connect = "Connect";
translations.en.contactHeading = "Contact";
translations.en.footerCopyright = "© 2026 WORLD FINE BIO CHEMICLES · Abhishek Bhanderi · All Rights Reserved · Privacy Policy";

translations.gu.footerAboutHeading = "અમારા વિશે";
translations.gu.footerAboutPara = "અભિશેક ભંડેરીની WORLD FINE BIO CHEMICLES ગુણવત્તા અને વિશ્વસનીય સેવા પર ધ્યાન કેન્દ્રિત કરીને ખેતર, ઉદ્યોગ, પ્રયોગશાળા અને ખોરાક ઉદ્યોગ ઉત્પાદનો પૂરાં પાડે છે.";
translations.gu.quickLinks = "ઝડપી લિંક્સ";
translations.gu.connect = "જોડી";
translations.gu.contactHeading = "સંપર્ક";
translations.gu.footerCopyright = "© 2026 WORLD FINE BIO CHEMICLES · Abhishek Bhanderi · તમામ અધિકાર રિઝર્વ્ડ · ગોપનીયતા નীতি";

// Small UI strings
translations.en.menu = "Menu";
translations.gu.menu = "મેનુ";

translations.en.founderPhotoPending = "Photo pending";
translations.gu.founderPhotoPending = "ફોટો બાકી";

// Initialize language
let currentLanguage = (() => {
  try {
    return localStorage.getItem("selectedLanguage") || "en";
  } catch (e) {
    return "en";
  }
})();

function initLanguageSystem() {
  try {
    const remember = (() => {
      try { return localStorage.getItem('rememberLanguage'); } catch (e) { return null; }
    })();
    // Show selector every visit by default unless user chose "remember my choice"
    if (!remember) {
      showLanguageSelector();
    } else {
      applyLanguage(currentLanguage);
    }
  } catch (e) {
    // localStorage not available, just apply default language
    applyLanguage(currentLanguage);
  }
}

function showLanguageSelector() {
  const modal = document.createElement("div");
  modal.className = "language-selector-overlay";
  modal.id = "languageSelector";
  modal.innerHTML = `
    <div class="language-selector-modal">
      <div class="language-selector-content">
        <h2 class="language-selector-title">${translations.en.selectLanguage}</h2>
        <p class="language-selector-subtitle">Choose your preferred language</p>
        
        <div class="language-options">
          <button class="language-option" data-lang="en">
            <span class="language-option-name">${translations.en.english}</span>
            <span class="language-option-flag">🇺🇸</span>
          </button>
          <button class="language-option" data-lang="gu">
            <span class="language-option-name">${translations.gu.gujarati}</span>
            <span class="language-option-flag">🇮🇳</span>
          </button>
        </div>
        <label class="language-remember">
          <input type="checkbox" id="languageRemember" /> Remember my choice
        </label>
        <button class="language-continue-btn" id="languageContinueBtn">${translations.en.continue}</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const langButtons = modal.querySelectorAll(".language-option");
  let selectedLang = "en";
  
  langButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      langButtons.forEach(b => b.classList.remove("selected"));
      this.classList.add("selected");
      selectedLang = this.dataset.lang;
    });
  });
  
  document.getElementById("languageContinueBtn").addEventListener("click", function() {
    currentLanguage = selectedLang;
    const remember = modal.querySelector('#languageRemember')?.checked;
    try {
      localStorage.setItem("selectedLanguage", selectedLang);
      if (remember) {
        localStorage.setItem("rememberLanguage", "true");
      } else {
        localStorage.removeItem("rememberLanguage");
      }
    } catch (e) {
      // localStorage not available, continue anyway
    }
    modal.remove();
    applyLanguage(selectedLang);
    updateLanguageToggle();
  });
  
  // Select English by default
  langButtons[0].classList.add("selected");
}

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  updatePageContent(lang);
  updateLanguageToggle();
}

function updatePageContent(lang) {
  // Update all elements with data-i18n attributes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      if (el.tagName === "INPUT" && el.type === "button") {
        el.value = translations[lang][key];
      } else if (el.tagName === "INPUT" && el.placeholder) {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Fallback: scan visible text nodes and replace known phrases from translations
  // This helps translate content that wasn't annotated with data-i18n.
  const keys = Object.keys(translations.en);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, null, false);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    // translate element textContent if it exactly matches a translation value
    if (node.children.length === 0) {
      const text = (node.textContent || '').trim();
      if (text) {
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const enVal = translations.en[k];
          const guVal = translations.gu[k];
          if (text === enVal || text === guVal) {
            node.textContent = translations[lang][k] || node.textContent;
            break;
          }
        }
      }
    }
    // Translate attributes: alt, title, placeholder
    ['alt','title','placeholder'].forEach(attr => {
      if (node.hasAttribute && node.hasAttribute(attr)) {
        const val = (node.getAttribute(attr) || '').trim();
        if (val) {
          for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            const enVal = translations.en[k];
            const guVal = translations.gu[k];
            if (val === enVal || val === guVal) {
              node.setAttribute(attr, translations[lang][k] || val);
              break;
            }
          }
        }
      }
    });
  }
}

function updateLanguageToggle() {
  const toggle = document.getElementById("languageToggle");
  if (toggle) {
    // Icon-only toggle: set aria-label and dataset for next language (SVG in HTML)
    const next = currentLanguage === "en" ? 'gu' : 'en';
    toggle.dataset.nextLang = next;
    const label = currentLanguage === 'en' ? 'Switch to Gujarati' : 'Switch to English';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
  }
}

function toggleLanguage() {
  const nextLang = currentLanguage === "en" ? "gu" : "en";
  currentLanguage = nextLang;
  try {
    localStorage.setItem("selectedLanguage", nextLang);
    // When toggling manually, remember the user's choice for future visits
    localStorage.setItem("rememberLanguage", "true");
  } catch (e) {
    // localStorage not available, continue anyway
  }
  applyLanguage(nextLang);
  window.location.reload();
}

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const currentPage = document.body.dataset.page;

const productImageSets = {
  "product-image--agro": [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507310920229-5a6fb1b5f51c?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--agro-light": [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--agro-green": [
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507310920229-5a6fb1b5f51c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--pgr": [
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--pgr-alt": [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507310920229-5a6fb1b5f51c?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--fertilizer": [
    "https://images.unsplash.com/photo-1511735643442-503bb3bd348a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--wsf": [
    "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1513604207001-9d0be67adf45?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--fertilizer-alt": [
    "https://images.unsplash.com/photo-1511735643442-503bb3bd348a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--industrial": [
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--industrial-alt": [
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--solvent": [
    "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--speciality": [
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--lab": [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478171-2b6e0b69f7ec?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--lab-alt": [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478171-2b6e0b69f7ec?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--glassware": [
    "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1582719478171-2b6e0b69f7ec?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--foodcolor": [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80"
  ],
  "product-image--preserve": [
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
  ]
};

function createProductMedia(media) {
  if (media.dataset.mediaReady === "true") {
    return;
  }

  const card = media.closest(".product-card");
  const tag = media.querySelector(".tag")?.cloneNode(true);
  const existingImages = Array.from(media.querySelectorAll("img")).map((image) => ({
    src: image.getAttribute("src") || image.currentSrc || image.src,
    alt: image.getAttribute("alt") || "Product image"
  }));
  const mediaClass = Array.from(media.classList).find((className) => className.startsWith("product-image--"));
  const fallbackImages = mediaClass ? productImageSets[mediaClass] || [] : [];
  const imageSet = existingImages.length > 0 ? existingImages : fallbackImages.map((src) => ({ src, alt: "Product image" }));

  if (imageSet.length === 0) {
    media.dataset.mediaReady = "true";
    return;
  }

  const productName = card?.querySelector(".product-content h2")?.textContent?.trim() || "Product";

  media.replaceChildren();
  if (tag) {
    media.appendChild(tag);
  }

  const stage = document.createElement("div");
  stage.className = "product-media-stage";

  const slides = imageSet.map((image, index) => {
    const slide = document.createElement("img");
    slide.className = "product-slide";
    slide.src = image.src;
    slide.alt = image.alt || `${productName} image ${index + 1}`;
    slide.loading = index === 0 ? "eager" : "lazy";
    slide.decoding = "async";
    stage.appendChild(slide);
    return slide;
  });

  media.appendChild(stage);

  const controls = document.createElement("div");
  controls.className = "product-media-controls";
  controls.innerHTML = `
    <button type="button" class="product-media-control product-media-control--prev" aria-label="Previous product image">&lt;</button>
    <button type="button" class="product-media-control product-media-control--next" aria-label="Next product image">&gt;</button>
  `;
  media.appendChild(controls);

  const dots = document.createElement("div");
  dots.className = "product-media-dots";
  const dotButtons = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "product-media-dot";
    dot.setAttribute("aria-label", `Show ${productName} image ${index + 1}`);
    dots.appendChild(dot);
    return dot;
  });
  media.appendChild(dots);

  let activeIndex = 0;
  let hoverTimer = null;

  const setActive = (nextIndex) => {
    activeIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
    });
    dotButtons.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
    });
  };

  setActive(0);

  const prevButton = controls.querySelector(".product-media-control--prev");
  const nextButton = controls.querySelector(".product-media-control--next");

  prevButton?.addEventListener("click", () => setActive(activeIndex - 1));
  nextButton?.addEventListener("click", () => setActive(activeIndex + 1));
  dotButtons.forEach((dot, index) => {
    dot.addEventListener("click", () => setActive(index));
  });

  if (slides.length > 1) {
    media.addEventListener("mouseenter", () => {
      if (hoverTimer) {
        window.clearInterval(hoverTimer);
      }

      hoverTimer = window.setInterval(() => {
        setActive(activeIndex + 1);
      }, 1000);

      setActive(activeIndex + 1);
    });

    media.addEventListener("mouseleave", () => {
      if (hoverTimer) {
        window.clearInterval(hoverTimer);
        hoverTimer = null;
      }

      setActive(0);
    });
  }

  media.dataset.mediaReady = "true";
}

function createHeroSlideshow(slideshow) {
  if (slideshow.dataset.slideshowReady === "true") {
    return;
  }

  const slides = Array.from(slideshow.querySelectorAll('.hero-slide'));
  const prevButton = slideshow.querySelector('.hero-control--prev');
  const nextButton = slideshow.querySelector('.hero-control--next');
  const dots = Array.from(slideshow.querySelectorAll('.hero-dot'));
  const autoplay = slideshow.dataset.autoplay === 'true';
  const interval = Number.parseInt(slideshow.dataset.interval || '4000', 10);

  if (slides.length === 0) {
    slideshow.dataset.slideshowReady = 'true';
    return;
  }

  let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
  if (activeIndex < 0) {
    activeIndex = 0;
  }

  let timerId = null;

  const setActive = (nextIndex) => {
    activeIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === activeIndex);
    });
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeIndex);
    });
  };

  const stopAutoplay = () => {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
  };

  const startAutoplay = () => {
    if (!autoplay || slides.length <= 1 || timerId) {
      return;
    }

    timerId = window.setInterval(() => {
      setActive(activeIndex + 1);
    }, Number.isFinite(interval) && interval > 0 ? interval : 4000);
  };

  setActive(activeIndex);

  prevButton?.addEventListener('click', () => {
    setActive(activeIndex - 1);
    stopAutoplay();
    startAutoplay();
  });

  nextButton?.addEventListener('click', () => {
    setActive(activeIndex + 1);
    stopAutoplay();
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setActive(index);
      stopAutoplay();
      startAutoplay();
    });
  });

  slideshow.addEventListener('mouseenter', stopAutoplay);
  slideshow.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
  slideshow.dataset.slideshowReady = 'true';
}

let productModalState = null;

function getProductImages(card) {
  const media = card.querySelector(".product-gallery, .product-image");
  const title = card.querySelector(".product-content h2")?.textContent?.trim() || "Product";
  const images = Array.from(card.querySelectorAll(".product-gallery img, .product-image img")).map((image) => ({
    src: image.getAttribute("src") || image.currentSrc || image.src,
    alt: image.getAttribute("alt") || title
  }));

  if (images.length > 0) {
    return images;
  }

  const mediaClass = media ? Array.from(media.classList).find((className) => className.startsWith("product-image--") || className.startsWith("product-gallery--")) : null;
  const fallbackKey = mediaClass?.replace("product-gallery--", "product-image--") || mediaClass || "";
  const fallbackImages = (mediaClass && (productImageSets[mediaClass] || productImageSets[fallbackKey])) || [];

  return fallbackImages.map((src) => ({
    src,
    alt: `${title} image`
  }));
}

function ensureProductModal() {
  if (productModalState) {
    return productModalState;
  }

  const modal = document.createElement("div");
  modal.className = "product-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="product-modal__sheet" role="dialog" aria-modal="true" aria-labelledby="productModalTitle">
      <button type="button" class="product-modal__close" data-product-modal-close aria-label="Close product details">×</button>
      <div class="product-modal__media">
        <div class="product-modal__handle" aria-hidden="true"></div>
        <div class="product-modal__hero">
          <img class="product-modal__hero-image" alt="" />
        </div>
        <div class="product-modal__thumbs" aria-label="Product images"></div>
      </div>
      <div class="product-modal__body">
        <div class="product-modal__meta">
          <span class="tag product-modal__tag"></span>
          <span class="tag product-modal__pack"></span>
        </div>
        <h2 class="product-modal__title" id="productModalTitle"></h2>
        <p class="product-modal__summary"></p>
        <ul class="product-modal__specs"></ul>
        <div class="product-modal__pricing">
          <span class="product-price"></span>
          <span class="price-unit"></span>
        </div>
        <div class="product-modal__actions">
          <a class="btn btn-primary" href="contact.html">Request Quotation</a>
          <button type="button" class="btn btn-ghost" data-product-modal-close>Close</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const sheet = modal.querySelector(".product-modal__sheet");
  const closeButtons = Array.from(modal.querySelectorAll("[data-product-modal-close]") );
  const title = modal.querySelector(".product-modal__title");
  const summary = modal.querySelector(".product-modal__summary");
  const specs = modal.querySelector(".product-modal__specs");
  const heroImage = modal.querySelector(".product-modal__hero-image");
  const thumbs = modal.querySelector(".product-modal__thumbs");
  const tag = modal.querySelector(".product-modal__tag");
  const pack = modal.querySelector(".product-modal__pack");
  const price = modal.querySelector(".product-price");
  const unit = modal.querySelector(".price-unit");
  const closeButton = modal.querySelector(".product-modal__close");

  const state = {
    modal,
    sheet,
    closeButton,
    title,
    summary,
    specs,
    heroImage,
    thumbs,
    tag,
    pack,
    price,
    unit,
    closeButtons,
    images: [],
    activeIndex: 0,
    lastFocusedElement: null
  };

  const setActiveImage = (nextIndex) => {
    if (!state.images.length) {
      state.heroImage.removeAttribute("src");
      state.heroImage.alt = "";
      state.thumbs.replaceChildren();
      return;
    }

    state.activeIndex = (nextIndex + state.images.length) % state.images.length;
    const image = state.images[state.activeIndex];
    state.heroImage.src = image.src;
    state.heroImage.alt = image.alt || state.title.textContent || "Product image";

    Array.from(state.thumbs.querySelectorAll(".product-modal__thumb")).forEach((thumb, index) => {
      thumb.classList.toggle("is-active", index === state.activeIndex);
    });
  };

  state.render = (card) => {
    const titleText = card.querySelector(".product-content h2")?.textContent?.trim() || "Product";
    const summaryText = card.querySelector(".product-content p")?.textContent?.trim() || "";
    const specItems = Array.from(card.querySelectorAll(".spec-list li")).map((item) => item.textContent.trim());
    const pricing = card.querySelector(".product-pricing");
    const priceText = pricing?.querySelector(".product-price")?.textContent?.trim() || "";
    const unitText = pricing?.querySelector(".price-unit")?.textContent?.trim() || "";
    const categoryText = card.querySelector(".tag")?.textContent?.trim() || "Product";
    const packText = specItems.find((item) => item.toLowerCase().startsWith("pack:")) || "";

    state.title.textContent = titleText;
    state.summary.textContent = summaryText;
    state.tag.textContent = categoryText;
    state.pack.textContent = packText ? packText.replace(/^Pack:\s*/i, "") : "Custom order";
    state.price.textContent = priceText;
    state.unit.textContent = unitText;

    state.specs.replaceChildren();
    specItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      state.specs.appendChild(listItem);
    });

    state.images = getProductImages(card);
    state.thumbs.replaceChildren();

    if (state.images.length === 0) {
      state.images = [{ src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80", alt: titleText }];
    }

    state.images.forEach((image, index) => {
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = "product-modal__thumb";
      thumb.setAttribute("aria-label", `Show ${titleText} image ${index + 1}`);
      thumb.innerHTML = `<img src="${image.src}" alt="${image.alt || titleText}" />`;
      thumb.addEventListener("click", () => setActiveImage(index));
      state.thumbs.appendChild(thumb);
    });

    setActiveImage(0);
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (state.lastFocusedElement instanceof HTMLElement) {
      state.lastFocusedElement.focus();
    }
  };

  state.open = (card) => {
    state.lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    state.render(card);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    window.requestAnimationFrame(() => {
      closeButton?.focus();
    });
  };

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.hidden && event.key === "Escape") {
      closeModal();
    }
  });

  productModalState = state;
  return productModalState;
}

function wireProductCards(cards) {
  if (!cards.length) {
    return;
  }

  const modal = ensureProductModal();

  cards.forEach((card) => {
    if (card.dataset.productModalReady === "true") {
      return;
    }

    card.dataset.productModalReady = "true";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-haspopup", "dialog");

    const openCard = () => modal.open(card);

    card.addEventListener("click", openCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCard();
      }
    });
  });
}

if (currentPage) {
  const activeLink = document.querySelector(`.nav a[data-link="${currentPage}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();

    if (!name) {
      formNote.textContent = "Please provide your company name to continue.";
      return;
    }

    formNote.textContent = `Thank you ${name}. Your inquiry is received. Our team will contact you soon.`;
    contactForm.reset();
  });
}

const revealItems = Array.from(document.querySelectorAll(".reveal"));
const productMediaItems = Array.from(document.querySelectorAll(".product-image, .product-gallery"));

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 360)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

productMediaItems.forEach((media) => createProductMedia(media));

document.querySelectorAll('.hero-slideshow').forEach((slideshow) => createHeroSlideshow(slideshow));

wireProductCards(Array.from(document.querySelectorAll(".product-card")));

// Product filter functionality
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      productCards.forEach((card) => {
        const categoryTag = card.querySelector(".tag");
        if (!categoryTag) return;

        const categoryText = categoryTag.textContent.trim().toLowerCase();
        let categoryClass;

        if (categoryText === "industrial") categoryClass = "industrial";
        else if (categoryText === "water") categoryClass = "water";
        else if (categoryText === "agriculture") categoryClass = "agriculture";
        else if (categoryText === "fertilizer") categoryClass = "fertilizer";

        if (filter === "all" || categoryClass === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ============ LANGUAGE SYSTEM INITIALIZATION ============
try {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initLanguageSystem();
      const languageToggle = document.getElementById("languageToggle");
      if (languageToggle) languageToggle.addEventListener("click", toggleLanguage);
    });
  } else {
    initLanguageSystem();
    const languageToggle = document.getElementById("languageToggle");
    if (languageToggle) languageToggle.addEventListener("click", toggleLanguage);
  }
} catch(e) {
  console.error('Error initializing language system:', e);
}
