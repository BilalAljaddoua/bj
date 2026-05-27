const stageContent = {
  person: {
    title: "ملف شخص واحد يمنع فوضى التكرار قبل أن تبدأ.",
    body:
      "يبدأ النظام من الرقم الوطني. إن لم يكن الشخص موجودًا، تتم إضافته أولًا مع بياناته الأساسية وصورته، ثم ترتبط كل الطلبات والرخص المستقبلية بهذا السجل.",
    points: [
      "بحث بالرقم الوطني قبل إنشاء أي طلب جديد.",
      "حفظ الاسم الرباعي والميلاد والجنسية والتواصل والصورة.",
      "منع تكرار الشخص نفسه داخل قاعدة البيانات."
    ]
  },
  application: {
    title: "كل خدمة تبدأ بطلب له رقم وحالة ورسوم واضحة.",
    body:
      "الطلب يجمع نوع الخدمة، مقدم الطلب، التاريخ، الرسوم، الحالة، وفئة الرخصة عند الحاجة. الحالة تتحرك من جديد إلى ملغي أو مكتمل حسب مسار الخدمة.",
    points: [
      "منع وجود طلب سابق غير مكتمل من نفس النوع للشخص نفسه.",
      "ربط الطلب بالشخص بدل نسخ بياناته في كل مرة.",
      "تمييز رسوم الطلب عن رسوم الرخصة أو الاختبارات."
    ]
  },
  eligibility: {
    title: "التحقق يحمي النظام من رخصة لا يجب أن تصدر.",
    body:
      "قبل فتح مسار الاختبارات، يراجع النظام شروط الفئة المطلوبة: العمر الأدنى، عدم امتلاك رخصة من نفس الفئة، وصلاحية مستندات مقدم الطلب.",
    points: [
      "رفض الطلب تلقائيًا عند مخالفة شرط العمر.",
      "السماح بأكثر من رخصة للشخص إذا كانت من فئات مختلفة.",
      "حفظ فئات الرخص كمرجع قابل لضبط العمر والمدة والرسوم."
    ]
  },
  tests: {
    title: "الاختبارات سلسلة، وليست قائمة يمكن القفز بينها.",
    body:
      "اختبار النظر يسبق النظري، والنظري يسبق العملي. كل اختبار له موعد ورسوم ونتيجة، وعند الرسوب يحتاج المتقدم إلى إعادة فحص برسوم جديدة.",
    points: [
      "تحديد الموعد يدويًا من الموظف المسؤول.",
      "حفظ النتيجة والدرجة في الاختبار النظري.",
      "منع إصدار الرخصة قبل نجاح كل الاختبارات المطلوبة."
    ]
  },
  issue: {
    title: "عند الإصدار يصبح الشخص سائقًا رسميًا داخل النظام.",
    body:
      "بعد اكتمال الشروط والاختبارات، تصدر الرخصة بمدة صلاحية حسب الفئة، مع رقم رخصة وصورة وبيانات حامل الرخصة وحالة الإصدار.",
    points: [
      "ربط الرخصة بالسائق وبفئة الرخصة وتاريخي الإصدار والانتهاء.",
      "الاستعلام عن الرخص بالرقم الوطني أو رقم الرخصة.",
      "دعم حالات جديد، تجديد، بدل فاقد، وبدل تالف."
    ]
  }
};

const tests = {
  vision: {
    title: "اختبار النظر",
    body:
      "بوابة السلامة الأولى. يحفظ النظام موعد الفحص، الرسوم، ونتيجة النجاح أو الرسوب قبل السماح بالانتقال إلى الاختبار النظري.",
    stats: [
      ["10 آلاف", "رسوم الفحص"],
      ["إلزامي", "قبل كل إصدار جديد"],
      ["إيقاف", "عند الرسوب"]
    ]
  },
  theory: {
    title: "الاختبار النظري",
    body:
      "بعد اجتياز النظر، يسجل النظام موعد الاختبار الورقي ودرجة المتقدم من 100 ونتيجة النجاح أو الرسوب.",
    stats: [
      ["20 ألف", "رسوم الفحص"],
      ["100", "درجة مرجعية"],
      ["إعادة", "عند الرسوب برسوم جديدة"]
    ]
  },
  practical: {
    title: "اختبار القيادة العملي",
    body:
      "المرحلة الأخيرة قبل الإصدار. يثبت النظام موعد الاختبار العملي ونتيجته بعد التحقق من اجتياز الاختبارات السابقة.",
    stats: [
      ["حسب الفئة", "رسوم الفحص"],
      ["نهائي", "قبل إصدار الرخصة"],
      ["موثق", "بالمستخدم والتاريخ"]
    ]
  }
};

const licenseClasses = [
  {
    title: "رخصة الدراجات النارية الصغيرة",
    description: "مناسبة للدراجات ذات السعة والقوة المحدودة، وتفتح مسارًا أبسط من الفئات الثقيلة.",
    age: "18 سنة",
    fee: "15 ألف",
    validity: "5 سنوات"
  },
  {
    title: "رخصة الدراجات النارية الثقيلة",
    description: "لفئة الدراجات الكبيرة والقوية، مع شرط عمر أعلى ورسوم أكثر من الفئة الأولى.",
    age: "21 سنة",
    fee: "30 ألف",
    validity: "5 سنوات"
  },
  {
    title: "رخصة القيادة العادية",
    description: "الفئة الثالثة للسيارات الشخصية والمركبات الخفيفة، وهي شرط إصدار الرخصة الدولية.",
    age: "18 سنة",
    fee: "20 ألف",
    validity: "10 سنوات"
  },
  {
    title: "رخصة القيادة التجارية",
    description: "لسيارات الأجرة والليموزين، وتحتاج ضوابط أعلى لأنها مرتبطة بنقل الركاب.",
    age: "21 سنة",
    fee: "200 ألف",
    validity: "10 سنوات"
  },
  {
    title: "رخصة المركبات الزراعية",
    description: "للمركبات الزراعية والآليات المرتبطة بالحراثة والعمل الحقلي.",
    age: "21 سنة",
    fee: "50 ألف",
    validity: "10 سنوات"
  },
  {
    title: "رخصة الحافلات الصغيرة والمتوسطة",
    description: "للحافلات ذات السعة الصغيرة والمتوسطة، حيث يصبح عامل السلامة والمسؤولية أعلى.",
    age: "21 سنة",
    fee: "250 ألف",
    validity: "10 سنوات"
  },
  {
    title: "رخصة الشاحنات والمركبات الثقيلة",
    description: "للشاحنات والحافلات والمركبات الثقيلة، وهي أعلى الفئات من ناحية الرسوم والمسؤولية.",
    age: "21 سنة",
    fee: "300 ألف",
    validity: "10 سنوات"
  }
];

const dashboards = {
  requests: {
    summary: [
      ["18", "طلبات جديدة"],
      ["9", "بانتظار فحص"],
      ["6", "جاهزة للإصدار"]
    ],
    rows: [
      ["طلب رخصة فئة ثالثة", "اجتاز النظر وينتظر النظري", "قيد المعالجة", ""],
      ["طلب تجديد", "الرخصة القديمة مسلمة", "جاهز للفحص", "amber"],
      ["طلب بدل فاقد", "يتطلب التحقق من الحجز", "مراجعة", "red"]
    ]
  },
  detained: {
    summary: [
      ["4", "رخص محجوزة"],
      ["2", "غرامات مدفوعة"],
      ["1", "جاهزة للفك"]
    ],
    rows: [
      ["رخصة محجوزة", "غرامة مسجلة مع سبب الحجز", "نشط", "red"],
      ["فك حجز", "تم الدفع وينتظر التسليم", "جاهز", ""],
      ["رخصة دولية", "رفض بسبب رخصة محجوزة", "مرفوض", "amber"]
    ]
  },
  audit: {
    summary: [
      ["42", "حركة اليوم"],
      ["7", "تعديلات حساسة"],
      ["3", "عمليات حذف"]
    ],
    rows: [
      ["تعديل فئة رخصة", "تغيير رسوم ومدة الصلاحية", "موثق", ""],
      ["تسجيل دخول", "موظف خدمات الرخص", "نجاح", "amber"],
      ["تراجع عن تعديل", "استعادة قيمة سابقة", "تم", ""]
    ]
  }
};

const html = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const stagePanel = document.querySelector("[data-stage-panel]");
const testBody = document.querySelector("[data-test-body]");
const classPanel = document.querySelector("[data-class-panel]");
const dashboardBody = document.querySelector("[data-dashboard-body]");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setTheme(theme) {
  html.dataset.theme = theme;
  localStorage.setItem("dvld-theme", theme);
  themeToggle.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}"></i>`;
  refreshIcons();
}

function renderStage(key) {
  const content = stageContent[key];
  if (!content || !stagePanel) return;
  stagePanel.innerHTML = `
    <span class="status-pill">مرحلة نشطة</span>
    <h3>${content.title}</h3>
    <p>${content.body}</p>
    <ul>${content.points.map((point) => `<li>${point}</li>`).join("")}</ul>
  `;
}

function renderTest(key) {
  const test = tests[key];
  if (!test || !testBody) return;
  testBody.innerHTML = `
    <h3>${test.title}</h3>
    <p>${test.body}</p>
    <div class="test-stats">
      ${test.stats.map(([value, label]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div>
  `;
}

function renderClass(index) {
  const item = licenseClasses[index];
  if (!item || !classPanel) return;
  classPanel.innerHTML = `
    <div class="class-hero">
      <p class="section-eyebrow">الفئة ${Number(index) + 1}</p>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
    <div class="class-facts">
      <div><span>العمر الأدنى</span><strong>${item.age}</strong></div>
      <div><span>رسوم الرخصة</span><strong>${item.fee}</strong></div>
      <div><span>مدة الصلاحية</span><strong>${item.validity}</strong></div>
    </div>
  `;
}

function renderDashboard(key) {
  const board = dashboards[key];
  if (!board || !dashboardBody) return;
  dashboardBody.innerHTML = `
    <div class="panel-summary">
      ${board.summary.map(([value, label]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div>
    <div class="status-table">
      ${board.rows
        .map(
          ([title, note, status, tone]) => `
            <div class="status-row">
              <strong>${title}</strong>
              <span>${note}</span>
              <em class="row-pill ${tone}">${status}</em>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function activateButton(button, selector) {
  document.querySelectorAll(selector).forEach((item) => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", String(active));
  });
}

document.querySelectorAll("[data-stage]").forEach((button) => {
  button.addEventListener("click", () => {
    activateButton(button, "[data-stage]");
    renderStage(button.dataset.stage);
  });
});

document.querySelectorAll("[data-test]").forEach((button) => {
  button.addEventListener("click", () => {
    activateButton(button, "[data-test]");
    renderTest(button.dataset.test);
  });
});

document.querySelectorAll("[data-class-index]").forEach((button) => {
  button.addEventListener("click", () => {
    activateButton(button, "[data-class-index]");
    renderClass(button.dataset.classIndex);
  });
});

document.querySelectorAll("[data-dashboard]").forEach((button) => {
  button.addEventListener("click", () => {
    activateButton(button, "[data-dashboard]");
    renderDashboard(button.dataset.dashboard);
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".service-card").forEach((card) => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.type !== filter);
    });
  });
});

themeToggle?.addEventListener("click", () => {
  setTheme(html.dataset.theme === "dark" ? "light" : "dark");
});

menuToggle?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
  menuToggle.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
  refreshIcons();
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح القائمة");
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    refreshIcons();
  });
});

const countTargets = document.querySelectorAll("[data-count]");
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.count || "0");
      let current = 0;
      const timer = window.setInterval(() => {
        current = Math.min(target, current + 1);
        element.textContent = current.toLocaleString("ar-SY");
        if (current >= target) window.clearInterval(timer);
      }, 46);
      countObserver.unobserve(element);
    });
  },
  { threshold: 0.5 }
);

countTargets.forEach((target) => countObserver.observe(target));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(item);
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-links a")];
const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
);

sections.forEach((section) => navObserver.observe(section));

setTheme(localStorage.getItem("dvld-theme") === "dark" ? "dark" : "light");
renderStage("person");
renderTest("vision");
renderClass(0);
renderDashboard("requests");
refreshIcons();
