const stageContent = {
  identity: {
    title: "هوية رقمية تمنع الخلل قبل أن يتحول إلى قافلة.",
    body:
      "يمنح النظام كل صهريج وسائق بطاقة تعريف مرتبطة بقاعدة مركزية، مع QR للتحقق، وتصنيف فني، وإمكانية حظر فورية عند الحاجة.",
    points: [
      "ربط بيانات الصهريج والسائق في سجل واحد.",
      "منع الصهاريج غير المؤهلة من المسارات الطويلة.",
      "تسجيل قرارات الحظر ضمن أثر رقابي غير قابل للحذف."
    ]
  },
  security: {
    title: "الرقابة الأمنية تعرف هل المادة نظامية أم خارج السجل.",
    body:
      "لا يتعامل النظام مع النفط ككمية فقط، بل كمادة لها مصدر وحركة ووجهة. عند وصول صهريج لا يطابق مهمة التحميل أو يملك مسارا غير مبرر، تظهر حالة تحقق أمني.",
    points: [
      "مطابقة المادة مع الحقل والمهمة ورمز القافلة.",
      "كشف أي حمولة لا تملك أثر تحميل نظامي.",
      "تقديم سجل واضح للجهات الرقابية لمعرفة أن المادة غير مسروقة."
    ]
  },
  mission: {
    title: "مهمة القافلة تتحول من ورق متفرق إلى سجل تشغيل واحد.",
    body:
      "تجمع مهمة القافلة رمز الحركة، الوجهة، الصهاريج، الشركات الناقلة، السائقين، وتوقيت الانطلاق داخل وثيقة قابلة للتصدير والتدقيق.",
    points: [
      "إنشاء رمز قافلة فريد لكل رحلة.",
      "توثيق الإضافات والحذف والتعديل أثناء تجهيز القافلة.",
      "توحيد قائمة الصهاريج قبل الانطلاق."
    ]
  },
  tracking: {
    title: "تتبع المسار يحدد أين توقفت القافلة ولماذا.",
    body:
      "يعرض النظام نقاط الحركة بين الحقل والوجهة، ويسمح بتمييز الصهريج المتعطل أو المتأخر عن بقية القافلة، بدل ضياع المعلومة في اتصالات منفصلة.",
    points: [
      "متابعة نقاط المرور بين الحقل والخزان.",
      "تمييز الصهريج المتعطل أو الخارج عن زمن القافلة.",
      "تسجيل سبب التوقف والموقع والتوقيت ضمن سجل الرحلة."
    ]
  },
  lab: {
    title: "التحليل يكشف تغير خصائص المادة قبل الاستلام النهائي.",
    body:
      "تدخل قراءات الحرارة والكثافة والأملاح ونسبة الماء والرواسب ضمن السجل، بحيث يمكن كشف أي تغير غير منطقي بين التحميل والاستلام.",
    points: [
      "مقارنة الخصائص المقاسة مع الخصائص المتوقعة.",
      "إظهار إنذار عند تغير الكثافة أو الماء والرواسب.",
      "ربط منفذ التحليل وتاريخه بالرحلة والقافلة."
    ]
  },
  scale: {
    title: "القبان يكشف الفرق بين الكمية المتوقعة والمستلمة.",
    body:
      "يربط النظام الوزن قبل التفريغ وبعده مع الوزن المتوقع، ويعرض فرق الكمية كنسبة ومقدار منطقي قابل للمراجعة، لا كرقم ضخم بلا سياق.",
    points: [
      "حساب وزن النفط الصافي لكل رحلة.",
      "إظهار فرق الكمية بالكيلوغرام والنسبة.",
      "تجميع الفروقات في ملخص إداري قابل للمتابعة."
    ]
  }
};

const previews = {
  report: `
    <article class="preview-panel">
      <div class="preview-header">
        <div>
          <h3>معاينة التقرير الإداري لحركة النفط</h3>
          <p>ملخص تنفيذي من المنبع إلى الخزان مع قيم تشغيلية منطقية للعرض.</p>
        </div>
        <span class="preview-status">تقرير مطابقات</span>
      </div>
      <div class="preview-stats">
        <div><span>عدد الرحلات</span><strong>10</strong></div>
        <div><span>الكمية المتوقعة</span><strong>410,000 كغ</strong></div>
        <div><span>المستلم الصافي</span><strong>407,860 كغ</strong></div>
        <div><span>فرق المطابقة</span><strong>-2,140 كغ</strong></div>
      </div>
      <table class="preview-table">
        <thead>
          <tr>
            <th>البند</th>
            <th>القراءة</th>
            <th>دلالة النظام</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>نسبة الفرق</td>
            <td>0.52%</td>
            <td>ضمن هامش مراجعة تشغيلية قابل للتفسير.</td>
          </tr>
          <tr>
            <td>حالة المادة</td>
            <td>مطابقة مشروطة</td>
            <td>لا يوجد مؤشر سرقة، لكن توجد مراجعة كمية.</td>
          </tr>
          <tr>
            <td>تغير الخصائص</td>
            <td>مراقب</td>
            <td>أي تغير في الكثافة أو الماء والرواسب يظهر كإنذار.</td>
          </tr>
          <tr class="alert-row">
            <td>إجراء مقترح</td>
            <td>مراجعة قبان</td>
            <td>إعادة مطابقة الوزن قبل اعتماد التقرير النهائي.</td>
          </tr>
        </tbody>
      </table>
    </article>
  `,
  tim: `
    <article class="preview-panel">
      <div class="preview-header">
        <div>
          <h3>معاينة قافلة حقل التيم إلى حمص</h3>
          <p>مثال عملي لقافلة بتاريخ 27-04-2026 مع صهاريج ووجهات قابلة للتتبع.</p>
        </div>
        <span class="preview-status">CNV-FULL-HOMS-20260427-001</span>
      </div>
      <div class="manifest-grid">
        <div><span>حالة القافلة</span><strong>جاهزة للانطلاق</strong></div>
        <div><span>عدد الصهاريج</span><strong>3</strong></div>
        <div><span>إجمالي تقريبي</span><strong>129 م³</strong></div>
        <div><span>الوجهة</span><strong>حمص</strong></div>
      </div>
      <table class="preview-table">
        <thead>
          <tr>
            <th>الصهريج</th>
            <th>الكمية</th>
            <th>المصدر</th>
            <th>حالة التتبع</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001393</td>
            <td>41 م³</td>
            <td>حقل التيم</td>
            <td>على المسار</td>
          </tr>
          <tr>
            <td>001479</td>
            <td>45 م³</td>
            <td>حقل الهسة</td>
            <td>على المسار</td>
          </tr>
          <tr class="alert-row">
            <td>40750</td>
            <td>43 م³</td>
            <td>حقل الثورة</td>
            <td>قابل لتمييز التعطل أو التأخير</td>
          </tr>
        </tbody>
      </table>
    </article>
  `
};

const stageButtons = document.querySelectorAll(".stage");
const stageView = document.querySelector("#stageView");

stageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = stageContent[button.dataset.stage];
    if (!content) return;

    stageButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    stageView.innerHTML = `
      <span class="status-pill">نشط</span>
      <h3>${content.title}</h3>
      <p>${content.body}</p>
      <ul>${content.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    `;
  });
});

const filterButtons = document.querySelectorAll(".filter");
const docCards = document.querySelectorAll(".doc-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    docCards.forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.type !== filter);
    });
  });
});

const inlinePreview = document.querySelector("#inlinePreview");
const previewButtons = document.querySelectorAll("[data-preview]");

previewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const preview = previews[button.dataset.preview];
    if (!preview || !inlinePreview) return;

    inlinePreview.innerHTML = preview;
    inlinePreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("spc-tsos-theme");

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("spc-tsos-theme", nextTheme);
});

const countTargets = document.querySelectorAll("[data-count]");

const animateCount = (element) => {
  const target = Number(element.dataset.count || "0");
  let current = 0;
  const steps = 28;
  const increment = Math.max(1, Math.ceil(target / steps));

  const timer = window.setInterval(() => {
    current = Math.min(target, current + increment);
    element.textContent = current.toLocaleString("ar-SY");
    if (current >= target) window.clearInterval(timer);
  }, 32);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCount(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.45 }
);

countTargets.forEach((target) => observer.observe(target));
