import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import { ClipReveal, FadeIn, MaskImage } from '../components/motion/Reveal';
import { JOURNAL, pick } from '../data/projects';
import { useT } from '../contexts/LanguageContext';

function formatDate(iso, lang) {
  const d = new Date(iso);
  return d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

const BODY_EN = {
  'the-quiet-brief': [
    `Every founder I've worked with has used the phrase 'something different' in the first kickoff call. None of them have meant the same thing by it. Some mean unfamiliar — they've seen their entire competitive set and they want a visual route that isn't on the board. Some mean memorable — they don't care about the route, they care about being recognised at fifty paces. And some mean me — they want the brand to feel like the founder, and 'different' is just the word they have to hand.`,
    `Treating those three meanings the same is a fast way to make work the client doesn't recognise as theirs. So in the first call I now ask, gently, which one of these we're in. The conversation that follows is almost always more interesting than the one we'd have had if I'd just nodded.`,
    `'Different' is rarely the actual brief. It's a placeholder for a feeling. Our job is to find the noun underneath.`,
  ],
  'type-as-territory': [
    `A brand's typographic territory is the part of the type landscape it can credibly occupy. Most identities try to occupy too much. They mix a display serif with a humanist sans with a monospace caption font, and the result is a brand that reads as everyone and no-one at once.`,
    `The argument for one typeface is partly practical (fewer files, faster decisions) and partly philosophical: when you can only say it one way, you have to mean it. Every weight, every italic, every alternate becomes a tool — not a decoration.`,
    `The brands I keep returning to as references almost all do this. One face, deeply used. Everything else is restraint.`,
  ],
  'designing-for-print-in-2025': [
    `What I tell clients who ask whether print is 'still worth it' is: only if you're going to treat it as a different medium, not a backup channel. Print is not a PDF on paper. It is a different relationship with attention.`,
    `When print is treated as the surface where the brand is most itself — heaviest, slowest, most considered — it rewards the investment many times over. When it's treated as a digital asset that happens to be on paper, it almost always disappoints.`,
    `2025 is, surprisingly, a great moment for print. Costs are stable, paper stocks are good, and the surrounding digital noise makes the physical object feel rarer. Use it.`,
  ],
  'the-six-month-rebrand': [
    `I no longer take rebrands shorter than ten weeks. The project that taught me the rule was a 'three-week refresh' I took on in 2022. It was technically possible, and I'd done similar before — but at the end of it both the client and I knew we'd shipped a version we could have improved in another two weeks of distance.`,
    `What changed: I now build a mandatory two-week pause into every brand engagement. Mid-project, everything stops. No new directions, no client reviews. Just time for the work to settle and for me to come back to it with fresh eyes.`,
    `It feels expensive when the calendar is staring you down. It is, every time, the most valuable two weeks of the project.`,
  ],
};

const BODY_AR = {
  'the-quiet-brief': [
    `كلّ مؤسّس عملت معه استخدم عبارة «شيء مختلف» في مكالمة الانطلاق الأولى. لم يقصد أيٌّ منهم الشيء نفسه. بعضهم يقصد «غير مألوف» — رأى كامل المنافسين ويريد مساراً بصرياً ليس على اللوحة. بعضهم يقصد «يُتذكَّر» — لا يهمّه المسار، يهمّه أن يُعرَف من خمسين خطوة. وبعضهم يقصد «أنا» — يريد للعلامة أن تشبه المؤسِّس، و«مختلف» مجرّد كلمةٍ في متناول يده.`,
    `معاملة هذه المعاني الثلاثة كأنّها واحدة طريقٌ سريع لصنع عملٍ لا يتعرّف عليه العميل. لذلك صرتُ في المكالمة الأولى أسأل، بلطف، أيّ هذه نحن فيه. المحادثة التي تلي ذلك أكثر إثارةً للاهتمام من تلك التي كنّا سنخوضها لو اكتفيتُ بالإيماء.`,
    `«مختلف» نادراً ما يكون البرّيف الحقيقي. إنّه ركيزة لمشاعر. مهمّتنا أن نجد الاسم تحتها.`,
  ],
  'type-as-territory': [
    `أرض الخطّ لعلامةٍ ما هي الجزء الذي تستطيع احتلاله بمصداقية من مشهد الخطوط. أغلب الهويّات تحاول احتلال الكثير. تخلط سيريف عرض مع سان إنساني مع خطّ تعليق أحادي العرض، فتكون النتيجة علامةً تُقرأ كأنّها الجميع ولا أحد في الوقت نفسه.`,
    `الحُجّة لخطٍّ واحد عملية جزئياً (ملفّات أقلّ، قرارات أسرع) وفلسفية جزئياً: حين لا تستطيع قولها إلا بطريقة واحدة، عليك أن تعنيها. كلّ وزن، كلّ مائل، كلّ بديل يصبح أداةً — لا زينة.`,
    `العلامات التي أعود إليها كمراجع تفعل هذا تقريباً جميعها. خطٌّ واحد، مستخدَم بعمق. وكل ما عداه اقتضاب.`,
  ],
  'designing-for-print-in-2025': [
    `ما أقوله للعملاء الذين يسألون إن كانت المطبوعات «لا تزال تستحق» هو: فقط إن تعاملت معها كوسيطٍ مختلف، لا قناةٍ احتياطية. المطبوعات ليست PDF على ورق. إنّها علاقة مختلفة مع الانتباه.`,
    `حين تُعامَل المطبوعات كالسطح الذي تكون فيه العلامة في أكثر صورها صدقاً — الأثقل، الأبطأ، الأكثر تأمّلاً — فإنّها تكافئ الاستثمار أضعافاً. وحين تُعامَل كأصلٍ رقمي وقع على ورق، فإنّها تخيّب الأمل تقريباً دائماً.`,
    `2025 — لحسن الحظّ — لحظة جيّدة للمطبوعات. التكاليف ثابتة، الأوراق جيّدة، والضجيج الرقمي المحيط يجعل الشيء المادّي يبدو أندر. استخدمها.`,
  ],
  'the-six-month-rebrand': [
    `لم أعد آخذ مشاريع إعادة علامة أقصر من عشرة أسابيع. المشروع الذي علّمني القاعدة كان «تحديثاً في ثلاثة أسابيع» قبلتُه في 2022. كان ممكناً تقنياً، وفعلتُ مثله من قبل — لكن في نهايته عرفنا أنا والعميل أنّنا شحنّا نسخةً كان يمكن تحسينها بأسبوعين إضافيّين من المسافة.`,
    `ما تغيّر: صرتُ أبني توقّفاً إجبارياً لأسبوعين في كلّ ارتباط هويّة. في منتصف المشروع، يتوقّف كلّ شيء. لا توجيهات جديدة، لا مراجعات مع العميل. مجرّد وقت لكي يستقرّ العمل ولأعود إليه بعينٍ جديدة.`,
    `يبدو الأمر مكلِفاً حين يحدّق فيك التقويم. هذان الأسبوعان، في كلّ مرّة، أثمن أسبوعين في المشروع.`,
  ],
};

export default function JournalEntry() {
  const { slug } = useParams();
  const { t, lang, dir } = useT();
  const post = JOURNAL.find(p => p.slug === slug);
  if (!post) return <Navigate to="/journal" replace />;

  const paragraphs = (lang === 'ar' ? BODY_AR : BODY_EN)[slug] || [];
  const index = JOURNAL.findIndex(p => p.slug === slug);
  const prev  = JOURNAL[(index - 1 + JOURNAL.length) % JOURNAL.length];
  const next  = JOURNAL[(index + 1) % JOURNAL.length];

  const PrevIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;
  const NextIcon = dir === 'rtl' ? ArrowLeft  : ArrowRight;

  return (
    <PageTransition>
      <Seo title={pick(post, 'title', lang)} description={pick(post, 'excerpt', lang)} />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="pt-28 lg:pt-36 pb-12 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn y={8}>
            <Link to="/journal" className="inline-flex items-center gap-2 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.2em] text-muted hover:text-bright transition-colors mb-10">
              <PrevIcon size={12} /> {t('journal.entry.back')}
            </Link>
          </FadeIn>

          <FadeIn y={10} delay={0.05}>
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
              {pick(post, 'category', lang)}
            </p>
          </FadeIn>

          <ClipReveal as="h1" delay={0.1} className="font-display text-[clamp(2.6rem,7vw,5.5rem)] text-bright leading-[0.95] tracking-[-0.01em]">
            {pick(post, 'title', lang)}
          </ClipReveal>

          <FadeIn delay={0.2} className="mt-5">
            <p className={`font-serif ${lang === 'ar' ? '' : 'italic'} text-xl lg:text-2xl text-soft leading-snug`}>
              {pick(post, 'subtitle', lang)}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-8 flex items-center gap-4 font-mono text-[11px] lg:text-[10px] text-muted uppercase tracking-[0.16em]">
            <span>{formatDate(post.date, lang)}</span>
            <span className="w-1 h-1 bg-muted rounded-full" />
            <span className="flex items-center gap-1.5"><Clock size={11} /> {pick(post, 'readingTime', lang)}</span>
          </FadeIn>
        </div>
      </header>

      {/* ── Cover ──────────────────────────────────────────── */}
      <div className="px-6 lg:px-10 pb-4">
        <div className="max-w-5xl mx-auto">
          <MaskImage
            src={post.cover}
            alt={pick(post, 'title', lang)}
            aspect="aspect-[16/9]"
          />
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16">
        <article className="max-w-3xl mx-auto space-y-7">
          {paragraphs.map((para, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <p className="font-body text-bright text-lg leading-[1.8]">
                {para}
              </p>
            </FadeIn>
          ))}

          <FadeIn className="mt-12 pt-8 border-t border-line">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.2em] text-muted mb-3">
              {t('journal.entry.by')}
            </p>
            <p className="font-heading font-semibold text-bright">{lang === 'ar' ? 'محمد عثمان' : 'Mohamad Othman'}</p>
            <p className="font-body text-soft text-sm mt-1">{t('journal.entry.byline')}</p>
          </FadeIn>
        </article>
      </section>

      {/* ── Prev / Next ────────────────────────────────────── */}
      <section className="border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[color:var(--color-line)]">
          <Link to={`/journal/${prev.slug}`} className="group p-10 hover:bg-panel transition-colors">
            <p className="flex items-center gap-2 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.2em] text-muted mb-3">
              <PrevIcon size={12} /> {t('journal.entry.prev')}
            </p>
            <p className="font-display text-2xl md:text-3xl text-bright tracking-[-0.01em] group-hover:text-soft transition-colors">
              {pick(prev, 'title', lang)}
            </p>
          </Link>
          <Link to={`/journal/${next.slug}`} className="group p-10 hover:bg-panel transition-colors text-end">
            <p className="flex items-center justify-end gap-2 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.2em] text-muted mb-3">
              {t('journal.entry.next')} <NextIcon size={12} />
            </p>
            <p className="font-display text-2xl md:text-3xl text-bright tracking-[-0.01em] group-hover:text-soft transition-colors">
              {pick(next, 'title', lang)}
            </p>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
