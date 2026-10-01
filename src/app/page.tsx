"use client";

import { useState } from "react";

type MenuItem = {
  id: string;
  label: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  { id: "home", label: "الرئيسية", icon: "⌂" },
  { id: "chat", label: "المحادثة القانونية", icon: "💬" },
  { id: "articles", label: "المقالات", icon: "⚖" },
  { id: "memos", label: "المذكرات", icon: "📄" },
  { id: "notices", label: "الإنذارات", icon: "⚠" },
  { id: "documents", label: "المستندات", icon: "▣" },
  { id: "templates", label: "القوالب", icon: "▤" },
];

export default function Home() {
  const [active, setActive] = useState("home");
  const [documentType, setDocumentType] = useState("مقال قانوني");
  const [court, setCourt] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [caseDate, setCaseDate] = useState("");
  const [claimant, setClaimant] = useState("");
  const [defendant, setDefendant] = useState("");
  const [facts, setFacts] = useState("");
  const [legalBasis, setLegalBasis] = useState("");
  const [requests, setRequests] = useState("");
  const [generated, setGenerated] = useState(false);

  const resetForm = () => {
    setCourt("");
    setCaseNumber("");
    setCaseDate("");
    setClaimant("");
    setDefendant("");
    setFacts("");
    setLegalBasis("");
    setRequests("");
    setGenerated(false);
  };

  const generateDocument = () => {
    if (!facts.trim()) {
      alert("يرجى إدخال وقائع القضية أولاً.");
      return;
    }

    setGenerated(true);
  };

  const activeLabel =
    menuItems.find((item) => item.id === active)?.label || "الرئيسية";

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f5f6f7] text-[#202428]"
    >
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-72 shrink-0 border-l border-gray-200 bg-white lg:flex lg:flex-col">
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 text-2xl">
                ⚖
              </div>

              <div>
                <h1 className="text-xl font-bold">ميزان</h1>
                <p className="text-xs text-gray-500">
                  المحرر القانوني
                </p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <p className="mb-3 px-3 text-xs font-semibold text-gray-400">
              القائمة الرئيسية
            </p>

            <div className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-right text-sm transition ${
                    active === item.id
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="w-6 text-center">
                    {item.icon}
                  </span>

                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="border-t border-gray-200 p-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-400">المستخدم</p>

              <p className="mt-1 font-semibold">
                الأستاذ سفيان صريط
              </p>

              <p className="mt-1 text-xs text-gray-500">
                محام بهيئة الرباط
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <section className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <header className="flex min-h-20 items-center justify-between border-b border-gray-200 bg-white px-5 py-4 md:px-8">
            <div>
              <p className="text-sm text-gray-500">مرحباً،</p>

              <h2 className="font-bold">
                الأستاذ سفيان صريط
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-400 md:block">
                ابحث في المستندات...
              </div>

              <button className="relative rounded-xl border border-gray-200 p-3 hover:bg-gray-50">
                🔔
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-gray-800" />
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                ص
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5 md:p-8">
            {/* HOME */}
            {active === "home" && (
              <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                  <p className="mb-2 text-sm text-gray-500">
                    منصة العمل القانوني
                  </p>

                  <h3 className="text-3xl font-bold tracking-tight">
                    ماذا تريد أن تُحرر اليوم؟
                  </h3>

                  <p className="mt-2 text-gray-500">
                    أنشئ المقالات والمذكرات والإنذارات القانونية
                    من مكان واحد.
                  </p>
                </div>

                {/* Quick actions */}
                <div className="grid gap-4 md:grid-cols-3">
                  <QuickCard
                    title="إنشاء مقال"
                    description="تحرير مقال قانوني جديد"
                    icon="⚖"
                    onClick={() => {
                      setDocumentType("مقال قانوني");
                      setActive("chat");
                    }}
                  />

                  <QuickCard
                    title="إنشاء مذكرة"
                    description="إعداد مذكرة قانونية"
                    icon="📄"
                    onClick={() => {
                      setDocumentType("مذكرة قانونية");
                      setActive("chat");
                    }}
                  />

                  <QuickCard
                    title="إنشاء إنذار"
                    description="تحرير إنذار أو مطالبة"
                    icon="⚠"
                    onClick={() => {
                      setDocumentType("إنذار قانوني");
                      setActive("chat");
                    }}
                  />
                </div>

                {/* Quick editor */}
                <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-xl text-white">
                      ⚖
                    </div>

                    <div>
                      <h4 className="font-bold">
                        المحرر القانوني الذكي
                      </h4>

                      <p className="text-xs text-gray-500">
                        ابدأ بكتابة وقائع القضية.
                      </p>
                    </div>
                  </div>

                  <textarea
                    value={facts}
                    onChange={(e) => setFacts(e.target.value)}
                    placeholder="مثال: أريد إعداد مقال يرمي إلى رفع الحجز التحفظي عن عقار موكلي..."
                    className="min-h-36 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-7 outline-none transition focus:border-gray-500 focus:bg-white"
                  />

                  <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <select
                      value={documentType}
                      onChange={(e) =>
                        setDocumentType(e.target.value)
                      }
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
                    >
                      <option>مقال قانوني</option>
                      <option>مذكرة قانونية</option>
                      <option>إنذار قانوني</option>
                      <option>طلب قانوني</option>
                      <option>شكاية</option>
                    </select>

                    <button
                      onClick={generateDocument}
                      className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
                    >
                      إنشاء الوثيقة ←
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid gap-4 md:grid-cols-4">
                  <Stat title="المستندات" value="0" />
                  <Stat title="المقالات" value="0" />
                  <Stat title="المذكرات" value="0" />
                  <Stat title="القوالب" value="0" />
                </div>
              </div>
            )}

            {/* CHAT / LEGAL EDITOR */}
            {active === "chat" && (
              <div className="mx-auto max-w-5xl">
                <div className="mb-8">
                  <p className="text-sm text-gray-400">
                    ميزان / المحرر القانوني
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    إعداد {documentType}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    أدخل معلومات القضية، ثم أنشئ مسودة قانونية
                    قابلة للتحرير.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  {/* Basic information */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold">
                      معلومات القضية
                    </h4>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <Field label="نوع الوثيقة">
                        <select
                          value={documentType}
                          onChange={(e) =>
                            setDocumentType(e.target.value)
                          }
                          className="input"
                        >
                          <option>مقال قانوني</option>
                          <option>مذكرة قانونية</option>
                          <option>إنذار قانوني</option>
                          <option>طلب قانوني</option>
                          <option>شكاية</option>
                        </select>
                      </Field>

                      <Field label="المحكمة">
                        <input
                          value={court}
                          onChange={(e) =>
                            setCourt(e.target.value)
                          }
                          placeholder="مثال: المحكمة الابتدائية بالرباط"
                          className="input"
                        />
                      </Field>

                      <Field label="رقم الملف">
                        <input
                          value={caseNumber}
                          onChange={(e) =>
                            setCaseNumber(e.target.value)
                          }
                          placeholder="رقم الملف إن وجد"
                          className="input"
                        />
                      </Field>

                      <Field label="تاريخ الملف">
                        <input
                          type="date"
                          value={caseDate}
                          onChange={(e) =>
                            setCaseDate(e.target.value)
                          }
                          className="input"
                        />
                      </Field>

                      <Field label="المدعي / الطالب">
                        <input
                          value={claimant}
                          onChange={(e) =>
                            setClaimant(e.target.value)
                          }
                          placeholder="اسم المدعي أو الطالب"
                          className="input"
                        />
                      </Field>

                      <Field label="المدعى عليه">
                        <input
                          value={defendant}
                          onChange={(e) =>
                            setDefendant(e.target.value)
                          }
                          placeholder="اسم المدعى عليه"
                          className="input"
                        />
                      </Field>
                    </div>
                  </div>

                  {/* Facts */}
                  <Field label="الوقائع">
                    <textarea
                      value={facts}
                      onChange={(e) =>
                        setFacts(e.target.value)
                      }
                      placeholder="اكتب وقائع القضية بالتفصيل: تاريخ الأحداث، العلاقة بين الأطراف، الإجراءات السابقة، والمستندات المتوفرة..."
                      className="textarea min-h-52"
                    />
                  </Field>

                  {/* Legal basis */}
                  <div className="mt-5">
                    <Field label="الأساس القانوني">
                      <textarea
                        value={legalBasis}
                        onChange={(e) =>
                          setLegalBasis(e.target.value)
                        }
                        placeholder="اكتب الفصول أو المواد القانونية التي تريد مناقشتها، أو اترك الخانة للمحرر القانوني."
                        className="textarea min-h-36"
                      />
                    </Field>
                  </div>

                  {/* Requests */}
                  <div className="mt-5">
                    <Field label="الطلبات">
                      <textarea
                        value={requests}
                        onChange={(e) =>
                          setRequests(e.target.value)
                        }
                        placeholder="اكتب الطلبات التي تريد تضمينها في المقال..."
                        className="textarea min-h-36"
                      />
                    </Field>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">
                    <button
                      onClick={resetForm}
                      className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold hover:bg-gray-50"
                    >
                      مسح النموذج
                    </button>

                    <button
                      onClick={generateDocument}
                      className="rounded-xl bg-gray-900 px-7 py-3 text-sm font-semibold text-white hover:bg-gray-700"
                    >
                      ⚖ إنشاء المسودة القانونية
                    </button>
                  </div>
                </div>

                {/* Draft */}
                {generated && (
                  <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold text-gray-400">
                          مسودة أولية
                        </p>

                        <h4 className="mt-1 text-xl font-bold">
                          {documentType}
                        </h4>
                      </div>

                      <button
                        onClick={() => window.print()}
                        className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        🖨 طباعة
                      </button>
                    </div>

                    <article className="mt-6 rounded-xl border border-gray-200 bg-white p-6 leading-8">
                      <h5 className="text-center text-xl font-bold">
                        {documentType}
                      </h5>

                      <p className="mt-8">
                        <strong>لفائدة:</strong>{" "}
                        {claimant || "................"}
                      </p>

                      <p>
                        <strong>ضد:</strong>{" "}
                        {defendant || "................"}
                      </p>

                      <p>
                        <strong>أمام:</strong>{" "}
                        {court || "................"}
                      </p>

                      <p>
                        <strong>رقم الملف:</strong>{" "}
                        {caseNumber || "................"}
                      </p>

                      <div className="mt-8">
                        <h6 className="font-bold">
                          أولاً: في الوقائع
                        </h6>

                        <p className="mt-3 whitespace-pre-wrap text-gray-700">
                          {facts}
                        </p>
                      </div>

                      <div className="mt-8">
                        <h6 className="font-bold">
                          ثانياً: في الأساس القانوني
                        </h6>

                        <p className="mt-3 whitespace-pre-wrap text-gray-700">
                          {legalBasis ||
                            "سيتم إدراج الأساس القانوني المناسب بعد ربط المحرر بقاعدة القوانين المغربية."}
                        </p>
                      </div>

                      <div className="mt-8">
                        <h6 className="font-bold">
                          ثالثاً: في الطلبات
                        </h6>

                        <p className="mt-3 whitespace-pre-wrap text-gray-700">
                          {requests ||
                            "سيتم إدراج الطلبات بناءً على وقائع القضية والمعطيات المدخلة."}
                        </p>
                      </div>

                      <div className="mt-10 border-t border-gray-200 pt-6 text-left">
                        <p className="font-semibold">
                          الإمضاء
                        </p>

                        <p className="mt-2">
                          الأستاذ سفيان صريط
                        </p>

                        <p className="text-sm text-gray-500">
                          محام بهيئة الرباط
                        </p>
                      </div>
                    </article>
                  </div>
                )}
              </div>
            )}

            {/* Other sections */}
            {active !== "home" && active !== "chat" && (
              <div className="mx-auto max-w-5xl">
                <div className="mb-8">
                  <p className="text-sm text-gray-400">
                    ميزان
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    {activeLabel}
                  </h3>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
                  <div className="text-5xl">
                    {menuItems.find(
                      (item) => item.id === active
                    )?.icon}
                  </div>

                  <h4 className="mt-5 text-xl font-bold">
                    {activeLabel}
                  </h4>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-gray-500">
                    هذه الوحدة موجودة في الواجهة، وسيتم ربطها
                    بقاعدة البيانات والوظائف الكاملة في المراحل
                    القادمة.
                  </p>

                  <button
                    onClick={() => setActive("chat")}
                    className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white"
                  >
                    إنشاء وثيقة قانونية
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Global styles for this page */}
      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1rem;
          outline: none;
          background: white;
          transition: border-color 0.2s;
        }

        .input:focus {
          border-color: #6b7280;
        }

        .textarea {
          width: 100%;
          resize: vertical;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          padding: 1rem;
          line-height: 1.8;
          outline: none;
          background: #f9fafb;
          transition:
            border-color 0.2s,
            background 0.2s;
        }

        .textarea:focus {
          border-color: #6b7280;
          background: white;
        }

        @media print {
          aside,
          header,
          button {
            display: none !important;
          }

          main {
            background: white !important;
          }

          article {
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        {label}
      </label>

      {children}
    </div>
  );
}

function QuickCard({
  title,
  description,
  icon,
  onClick,
}: {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group rounded-2xl border border-gray-200 bg-white p-5 text-right shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl group-hover:bg-gray-900 group-hover:text-white">
          {icon}
        </div>

        <span className="text-gray-400">←</span>
      </div>

      <h4 className="mt-5 font-bold">{title}</h4>

      <p className="mt-1 text-sm text-gray-500">
        {description}
      </p>
    </button>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-sm text-gray-500">{title}</p>

      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}