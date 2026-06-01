import React, { useState } from "react";
import { 
  Folder, Award, Star, Quote, Lightbulb, PenTool, Flame, Compass, 
  Download, ArrowRight, ChevronLeft, ChevronRight, Globe, Moon, Sun
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  PROFILE, WORK_EXPERIENCES, EDUCATIONS, SKILLS, ACHIEVEMENTS, CLIENTS 
} from "../data";

export default function ResumeDeck() {
  const [skillCategory, setSkillCategory] = useState<"All" | "MarTech" | "Data" | "Strategy">("All");
  const [activeRightPanel, setActiveRightPanel] = useState<"achievements" | "clients">("achievements");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
  
  // Custom rotating Tweet status
  const tweets = [
    "MarTech Pro-tip: WordPress Technical SEO isn't just keywords. Core Web Vitals and clean schema architecture determine 65% of organic crawler indexations. 📈",
    "Data-driven spending means matching Meta & Google Ads budgets directly to hourly conversion spikes. Stop burning budget on flat cycles. 📊",
    "Enterprise web deployment requires lockstep QA. Salesforce SFMC integrations fail if database schemas aren't audited in staging first. 🔍",
    "My secret to over 10M impressions? Deep customer empathy coupled with strict analytical logic. Science + creative content = victory. 🧪✨"
  ];
  const [tweetIndex, setTweetIndex] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleNextTweet = () => {
    setTweetIndex((prev) => (prev + 1) % tweets.length);
  };

  const handlePrevTweet = () => {
    setTweetIndex((prev) => (prev - 1 + tweets.length) % tweets.length);
  };

  const avatarImageFile = "/src/assets/images/natthaporn_avatar_1780297181486.png";

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f7f7f6] dark:bg-[#1d1715] text-[#1d1715] dark:text-[#f7f7f6] transition-colors duration-200 font-sans relative pb-16 selection:bg-[#a5634a] selection:text-white">
      
      {/* Structural Border Grid Overlay mimicking technical blueprint/drafting layouts */}
      <div className="fixed inset-0 pointer-events-none border border-[#1d1715]/10 dark:border-[#f7f7f6]/5 m-4 z-40 hidden md:block" />

      {/* HEADER SECTION (Swiss Minimalist Grid Layout) */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-b border-[#1d1715] dark:border-[#f7f7f6] relative z-30">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-[#a5634a]" />
            <span className="font-mono text-xs tracking-widest text-[#a5634a] font-bold">PORTFOLIO INDEX_</span>
          </div>
          <h1 className="font-sans font-extrabold text-3xl tracking-tighter uppercase leading-none mt-2">
            {PROFILE.name}
          </h1>
          <span className="font-mono text-[10px] tracking-widest mt-1.5 opacity-80 uppercase font-black text-[#a5634a]">
            {PROFILE.title}
          </span>
        </div>

        {/* Global Toolbar */}
        <div className="flex items-center gap-3">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 border-2 border-[#1d1715] dark:border-[#f7f7f6] bg-transparent text-[#1d1715] dark:text-[#f7f7f6] hover:bg-[#a5634a] hover:border-[#a5634a] hover:text-white transition-all duration-150 cursor-pointer rounded-none"
            title="Toggle color theme"
          >
            {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          {/* Quick PDF CV Print */}
          <button
            onClick={handlePrintCV}
            className="hidden sm:flex items-center gap-2 border-2 border-[#1d1715] dark:border-[#f7f7f6] text-xs font-mono px-5 py-2.5 bg-[#1d1715] text-[#f7f7f6] dark:bg-[#f7f7f6] dark:text-[#1d1715] hover:bg-[#a5634a] hover:border-[#a5634a] hover:text-white dark:hover:bg-[#a5634a] dark:hover:border-[#a5634a] dark:hover:text-white transition-all duration-150 cursor-pointer font-bold uppercase rounded-none"
          >
            <Download className="w-4 h-4" />
            <span>Print PDF</span>
          </button>
        </div>
      </header>

      {/* MAIN PORTFOLIO CANVAS STAGE - VERTICALLY SCROLLABLE WITHOUT 3 SLIDES */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-20 space-y-16">
        
        {/* SECTION 1: IDENTITY INTRO & PROFILE CARD (HERO) */}
        <section id="section-profile" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* LEFT: About details, Hobbies & Twitter wisdom card */}
          <div className="lg:col-span-7 bg-[#f7f7f6] dark:bg-[#1d1715] border-2 border-[#1d1715] dark:border-[#f7f7f6] p-6 md:p-8 relative flex flex-col justify-between rounded-none overflow-hidden h-full">
            <div className="absolute right-4 bottom-4 text-[7rem] md:text-[9rem] font-black font-mono leading-none opacity-[0.03] dark:opacity-[0.05] text-[#1d1715] dark:text-[#f7f7f6] select-none pointer-events-none tracking-tighter uppercase">
              about
            </div>

            <div className="relative z-10 space-y-6">
              {/* Card Section Header */}
              <div className="flex items-start gap-4 mb-4 border-b border-[#1d1715] dark:border-[#f7f7f6] pb-5">
                <div className="p-2 border-2 border-[#1d1715] dark:border-[#f7f7f6] text-white bg-[#a5634a] rounded-none shrink-0">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-[#1d1715] dark:text-white leading-none">01 / BRAND IDENTITY</h2>
                  <p className="font-mono text-[10px] text-[#a5634a] font-bold uppercase tracking-wider mt-1.5">INTRODUCING NATTHAPORN MAIONMUE_</p>
                </div>
              </div>

              {/* Bio summary */}
              <p className="font-sans text-sm text-[#1d1715] dark:text-zinc-200 leading-relaxed max-w-2xl font-light">
                {PROFILE.bio}
              </p>

              {/* Hobbies / Interests */}
              <div className="space-y-3 pt-4 border-t border-[#1d1715]/10 dark:border-[#f7f7f6]/10">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#a5634a]" />
                  <h4 className="font-sans font-bold text-xs text-[#1d1715] dark:text-white uppercase tracking-widest leading-none">
                    Engagements & Hobbies_
                  </h4>
                </div>
                <div className="bg-[#1d1715]/5 dark:bg-[#f7f7f6]/5 p-3.5 border border-[#1d1715] dark:border-[#f7f7f6] font-mono text-xs font-bold uppercase tracking-wide leading-relaxed text-center text-[#a5634a]">
                  {PROFILE.hobbies.join("  |  ")}
                </div>
              </div>

              {/* Rotating Tweets */}
              <div className="space-y-3 pt-4 border-t border-[#1d1715]/10 dark:border-[#f7f7f6]/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-[#a5634a]" />
                    <h4 className="font-sans font-bold text-xs text-[#1d1715] dark:text-white uppercase tracking-widest leading-none">
                      Interactive Analyst Insight_
                    </h4>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={handlePrevTweet}
                      className="p-1 border border-[#1d1715] dark:border-[#f7f7f6] bg-transparent hover:bg-[#a5634a] hover:text-white dark:hover:bg-[#a5634a] transition-all cursor-pointer rounded-none"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNextTweet}
                      className="p-1 border border-[#1d1715] dark:border-[#f7f7f6] bg-transparent hover:bg-[#a5634a] hover:text-white dark:hover:bg-[#a5634a] transition-all cursor-pointer rounded-none"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1d1715] border-2 border-dashed border-[#1d1715]/40 dark:border-[#f7f7f6]/40 p-5 rounded-none shadow-sm text-zinc-700 dark:text-zinc-200 font-sans text-xs italic leading-relaxed relative min-h-[5rem] flex items-center">
                  <Quote className="absolute top-2 right-3 w-8 h-8 text-[#a5634a]/10 pointer-events-none" />
                  <p className="relative z-10">"{tweets[tweetIndex]}"</p>
                </div>
              </div>
            </div>

            <div className="font-mono text-[9px] text-[#a5634a] font-bold mt-8 pt-4 border-t border-[#1d1715]/10 dark:border-[#f7f7f6]/10 flex items-center justify-between uppercase">
              <span>SYSTEM: ONLINE</span>
              <span>@natthaporn_twin</span>
            </div>
          </div>

          {/* RIGHT: High-contrast headshot and quick facts table */}
          <div className="lg:col-span-5 pattern-stripes-light dark:pattern-stripes-dark border-2 border-[#1d1715] dark:border-[#f7f7f6] rounded-none p-6 md:p-8 flex flex-col justify-between bg-white dark:bg-[#1d1715] h-full">
            <div className="relative z-10 w-full space-y-6">
              {/* Styled NM Monogram */}
              <div className="flex flex-col items-center pt-2">
                <div className="relative p-2.5 border-2 border-dashed border-[#a5634a] rounded-full bg-white dark:bg-[#1d1715] shrink-0">
                  <div className="w-40 h-40 rounded-full bg-[#f7f7f6] dark:bg-[#1d1715]/40 border-2 border-[#1d1715] dark:border-[#f7f7f6] flex items-center justify-center shadow-md select-none">
                    <span className="font-sans font-extrabold text-5xl tracking-widest text-[#a5634a] pl-1.5">
                      NM
                    </span>
                  </div>
                </div>
                <span className="w-12 h-[2.5px] bg-[#a5634a] rounded-none mt-4" />
              </div>

              {/* Data Table */}
              <div className="space-y-3 bg-[#f7f7f6] dark:bg-[#1d1715] border-2 border-[#1d1715] dark:border-[#f7f7f6] p-4.5 rounded-none uppercase font-mono text-[11px] leading-tight text-zinc-800 dark:text-zinc-100">
                <div className="flex justify-between border-b border-[#1d1715]/10 dark:border-[#f7f7f6]/10 pb-2.5">
                  <span className="text-[#a5634a] font-bold font-mono">Fact:</span>
                  <span className="text-[#1d1715] dark:text-white font-bold">Natthaporn Maionmue</span>
                </div>

                <div className="flex justify-between border-b border-[#1d1715]/10 dark:border-[#f7f7f6]/10 pb-2.5">
                  <span className="text-[#a5634a] font-bold font-mono">Born:</span>
                  <span className="text-[#1d1715] dark:text-white font-bold">{PROFILE.birthDate}</span>
                </div>

                <div className="flex justify-between border-b border-[#1d1715]/10 dark:border-[#f7f7f6]/10 pb-2.5">
                  <span className="text-[#a5634a] font-bold font-mono">Natl:</span>
                  <span className="text-[#1d1715] dark:text-white font-bold">{PROFILE.nationality}</span>
                </div>

                <div className="flex justify-between border-b border-[#1d1715]/10 dark:border-[#f7f7f6]/10 pb-2.5">
                  <span className="text-[#a5634a] font-bold font-mono">Mail:</span>
                  <a href={`mailto:${PROFILE.email}`} className="text-[#1d1715] dark:text-white hover:text-[#a5634a] dark:hover:text-[#a5634a] hover:underline lowercase font-bold break-all font-sans">
                    {PROFILE.email}
                  </a>
                </div>

                <div className="flex justify-between pb-1">
                  <span className="text-[#a5634a] font-bold font-mono font-bold">Call:</span>
                  <span className="text-[#1d1715] dark:text-white font-bold font-mono">{PROFILE.phone}</span>
                </div>
              </div>
            </div>

            {/* Social handles links */}
            <div className="relative z-10 pt-5 border-t border-[#1d1715]/20 dark:border-[#f7f7f6]/20 flex items-center justify-between mt-8">
              <div className="flex items-center gap-4 font-mono text-xs font-bold text-[#1d1715] dark:text-[#f7f7f6]">
                <a
                  href={PROFILE.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#a5634a] hover:underline transition-all"
                  title="LinkedIn"
                >
                  LINKEDIN
                </a>
                <span className="text-zinc-300">•</span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#a5634a] hover:underline transition-all"
                  title="GitHub"
                >
                  GITHUB
                </a>
              </div>

              <span>🇹🇭 TH_</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: WORK EXPERIENCE & CAMPAIGNS (CONTINUOUS DECK RENDER) */}
        <section id="section-experience" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Complete Career Timeline */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1d1715] border-2 border-[#1d1715] dark:border-[#f7f7f6] p-6 md:p-8 relative flex flex-col justify-between rounded-none overflow-hidden">
            <div className="absolute right-4 bottom-4 text-[7rem] md:text-[9rem] font-black font-mono leading-none opacity-[0.03] dark:opacity-[0.05] text-[#1d1715] dark:text-[#f7f7f6] select-none pointer-events-none tracking-tighter uppercase">
              career
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-8 border-b border-[#1d1715] dark:border-[#f7f7f6] pb-5">
                <div className="p-2 border-2 border-[#1d1715] dark:border-[#f7f7f6] text-white bg-[#a5634a] rounded-none shrink-0" id="experience-icon-wrap">
                  <Folder className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-[#1d1715] dark:text-white leading-none">02 / Work Experience</h2>
                  <p className="font-mono text-[10px] text-[#a5634a] font-bold uppercase tracking-wider mt-1.5">PROFESSIONAL RECORD & SPEARHEADED CAMPAIGNS_</p>
                </div>
              </div>

              {/* TIMELINE TIMELINE TIMELINE */}
              <div className="relative border-[#1d1715] dark:border-[#f7f7f6] border-l ml-3 pl-6 space-y-10 my-6">
                {WORK_EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="relative group">
                    {/* Bullet marker */}
                    <span className="absolute left-[-30px] top-1.5 w-4.5 h-4.5 rounded-none border-2 border-[#1d1715] dark:border-[#f7f7f6] bg-[#f7f7f6] dark:bg-[#1d1715] group-hover:bg-[#a5634a] group-hover:border-[#a5634a] transition-all duration-150 z-10" />

                    {/* Faint Year Stamp */}
                    <div className="absolute right-0 top-1 font-sans font-black text-[2rem] md:text-[2.5rem] tracking-tighter text-[#1d1715]/5 dark:text-[#f7f7f6]/5 pointer-events-none select-none">
                      {exp.period.split(" ")[0]}
                    </div>

                    <div className="relative z-10">
                      <span className="font-mono text-xs text-[#a5634a] font-black tracking-widest uppercase">{exp.period}</span>
                      <h3 className="font-sans font-bold text-lg text-[#1d1715] dark:text-white mt-1 uppercase tracking-tight">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-bold mt-0.5">{exp.role}</p>
                      <p className="font-sans text-xs text-zinc-650 dark:text-zinc-300 leading-relaxed mt-3 max-w-xl font-light">
                        {exp.description}
                      </p>

                      {/* Incremental Bullet Details */}
                      <ul className="mt-3.5 space-y-2">
                        {exp.highlights.map((hlt, hidx) => (
                          <li key={hidx} className="flex gap-2.5 items-start text-xs text-zinc-700 dark:text-zinc-300 font-light">
                            <span className="font-mono text-[#a5634a] font-black select-none mt-0.5 shrink-0">→</span>
                            <span>{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="font-mono text-[9px] text-[#a5634a] font-bold mt-10 pt-4 border-t border-[#1d1715]/10 dark:border-[#f7f7f6]/10 relative z-10 flex items-center justify-between uppercase">
              <span>BANGKOK, TH</span>
              <span>15+ WORLD-CLASS BRANDS</span>
            </div>
          </div>

          {/* RIGHT: Stackable Achievements + Target Clients Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Control Tabs between Awards and Client Footprint */}
            <div className="flex bg-[#1d1715]/5 dark:bg-[#f7f7f6]/5 p-1 border-2 border-[#1d1715] dark:border-[#f7f7f6] rounded-none">
              <button
                onClick={() => setActiveRightPanel("achievements")}
                className={`flex-1 text-[10px] font-mono tracking-widest uppercase py-2.5 cursor-pointer font-extrabold transition-all text-center rounded-none ${
                  activeRightPanel === "achievements"
                    ? "bg-[#1d1715] text-[#f7f7f6] dark:bg-[#f7f7f6] dark:text-[#1d1715]"
                    : "text-zinc-500 hover:text-[#1d1715]"
                }`}
              >
                ADMAN Achievements
              </button>
              <button
                onClick={() => setActiveRightPanel("clients")}
                className={`flex-1 text-[10px] font-mono tracking-widest uppercase py-2.5 cursor-pointer font-extrabold transition-all text-center rounded-none ${
                  activeRightPanel === "clients"
                    ? "bg-[#1d1715] text-[#f7f7f6] dark:bg-[#f7f7f6] dark:text-[#1d1715]"
                    : "text-zinc-500 hover:text-[#1d1715]"
                }`}
              >
                Brand Footprint
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeRightPanel === "achievements" && (
                <motion.div
                  key="achievements-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="pattern-stripes-light dark:pattern-stripes-dark border-2 border-[#1d1715] dark:border-[#f7f7f6] rounded-none p-6 md:p-8 min-h-[30rem] relative overflow-hidden flex flex-col justify-between bg-white dark:bg-[#1d1715]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 dark:text-zinc-650 select-none tracking-tighter">////</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 dark:text-zinc-650 select-none tracking-tighter">////</div>

                  <div className="relative z-10 w-full space-y-6">
                    <div className="flex items-center gap-3 border-b border-[#1d1715] dark:border-[#f7f7f6] pb-4">
                      <div className="p-2 border-2 border-[#1d1715] dark:border-[#f7f7f6] text-white bg-[#a5634a] rounded-none">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-md uppercase tracking-tight text-[#1d1715] dark:text-white">Awards</h3>
                        <p className="font-mono text-[9px] text-[#a5634a] font-bold uppercase tracking-wider">AWARDS & RECOGNITIONS_</p>
                      </div>
                    </div>

                    {/* Achievements List */}
                    <div className="space-y-4 max-h-[19rem] overflow-y-auto custom-scrollbar pr-1">
                      {ACHIEVEMENTS.map((ach) => (
                        <div 
                          key={ach.id} 
                          className="bg-[#f7f7f6] dark:bg-[#1d1715] border border-[#1d1715] dark:border-[#f7f7f6] p-4 rounded-none shadow-sm"
                        >
                          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-850 pb-1.5 mb-2">
                            <span className="font-mono text-[10px] text-white bg-[#a5634a] font-black px-2 py-0.5 uppercase tracking-wider rounded-none">
                              {ach.year}
                            </span>
                            <span className="font-sans text-[11px] font-bold text-[#a5634a] uppercase tracking-wide">
                              {ach.title}
                            </span>
                          </div>
                          <h4 className="font-sans font-extrabold text-xs text-[#1d1715] dark:text-white uppercase tracking-tight">{ach.subtitle}</h4>
                          <p className="font-sans text-[11px] text-zinc-600 dark:text-zinc-300 leading-normal mt-2 font-light">
                            {ach.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="font-mono text-[9px] text-zinc-400 mt-4 relative z-10 border-t border-[#1d1715]/10 dark:border-[#f7f7f6]/10 pt-2.5 flex items-center justify-between uppercase">
                    <span>TAT & UNIQLO TH_</span>
                    <span>10M+ IMPRESSIONS</span>
                  </div>
                </motion.div>
              )}

              {activeRightPanel === "clients" && (
                <motion.div
                  key="clients-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="pattern-stripes-light dark:pattern-stripes-dark border-2 border-[#1d1715] dark:border-[#f7f7f6] rounded-none p-6 md:p-8 min-h-[30rem] relative overflow-hidden flex flex-col justify-between bg-white dark:bg-[#1d1715]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 dark:text-zinc-650 select-none tracking-tighter">////</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 dark:text-zinc-650 select-none tracking-tighter">////</div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3 border-b border-[#1d1715] dark:border-[#f7f7f6] pb-4">
                      <div className="p-2 border-2 border-[#1d1715] dark:border-[#f7f7f6] text-white bg-[#a5634a] rounded-none">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-md uppercase tracking-tight text-[#1d1715] dark:text-white">Brand Footprint</h3>
                        <p className="font-mono text-[9px] text-[#a5634a] font-bold uppercase tracking-wider font-mono">PORTFOLIO CLIENT DATABASE_</p>
                      </div>
                    </div>

                    <p className="font-sans text-zinc-600 dark:text-zinc-300 text-xs leading-relaxed bg-[#f7f7f6] dark:bg-zinc-900 border border-[#1d1715] dark:border-[#f7f7f6] p-3 rounded-none font-light">
                      Spearheaded campaigns, web deployments, and agile project management schedules for world-class enterprises:
                    </p>
                    
                    <div className="grid grid-cols-2 gap-1.5 max-h-[14rem] overflow-y-auto custom-scrollbar pr-1">
                      {CLIENTS.map((cl, cIdx) => (
                        <div
                          key={cIdx}
                          className="text-[#1d1715] dark:text-zinc-300 text-[10px] font-mono px-2.5 py-1.5 bg-[#f7f7f6] dark:bg-zinc-900 border-2 border-[#1d1715]/15 dark:border-[#f7f7f6]/10 rounded-none font-extrabold hover:bg-[#a5634a] hover:text-white dark:hover:bg-[#a5634a] dark:hover:text-white transition-all cursor-default"
                        >
                          ▪ {cl}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="font-mono text-[9px] text-[#a5634a] mt-4 relative z-15 border-t border-[#1d1715]/10 dark:border-[#f7f7f6]/10 pt-2.5 flex justify-between uppercase">
                    <span>REGIONAL AUTOMOTIVE & RETAIL</span>
                    <span>ENTERPRISE MARKETING schemas</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 3: SKILLS INVENTORY & EDUCATION TIMELINE (CONTINUOUS DECK RENDER) */}
        <section id="section-skills" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Skills sliders */}
          <div className="lg:col-span-5 pattern-stripes-light dark:pattern-stripes-dark border-2 border-[#1d1715] dark:border-[#f7f7f6] rounded-none p-6 md:p-8 min-h-[36rem] relative overflow-hidden flex flex-col justify-between bg-white dark:bg-[#1d1715]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 dark:text-zinc-650 select-none tracking-tighter">////</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-300 dark:text-zinc-650 select-none tracking-tighter">////</div>

            <div className="relative z-10 w-full">
              <div className="flex items-center gap-3 mb-6 border-b border-[#1d1715] dark:border-[#f7f7f6] pb-4">
                <div className="p-2 border-2 border-[#1d1715] dark:border-[#f7f7f6] text-white bg-[#a5634a] rounded-none">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-sans font-bold text-md uppercase tracking-tight text-[#1d1715] dark:text-white">Skills Inventory</h2>
                  <p className="font-mono text-[9px] text-[#a5634a] font-bold uppercase tracking-wider font-mono">TECHNICAL METRICS & CAPABILITIES_</p>
                </div>
              </div>

              {/* Header underline double dots */}
              <div className="inline-block mb-6">
                <h3 className="font-sans font-bold text-xs text-[#1d1715] dark:text-white tracking-widest uppercase pb-1 leading-none">
                  Technical Stack
                </h3>
                <div className="h-[1px] bg-[#a5634a] w-full" />
                <div className="h-[1px] bg-[#a5634a] w-full mt-[2px]" />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-1 mb-6 bg-[#1d1715]/5 dark:bg-[#f7f7f6]/5 p-1 border border-[#1d1715] dark:border-[#f7f7f6] rounded-none">
                {(["All", "MarTech", "Data", "Strategy"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSkillCategory(cat)}
                    className={`text-[9px] font-mono tracking-wider px-3 py-1.5 rounded-none cursor-pointer font-extrabold uppercase ${
                      skillCategory === cat 
                        ? "bg-[#1d1715] text-white dark:bg-[#f7f7f6] dark:text-[#1d1715]" 
                        : "text-zinc-500 hover:bg-[#a5634a]/10 dark:hover:bg-zinc-805"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Skills rating sliders with the newly integrated AI Tools */}
              <div className="space-y-5">
                {SKILLS
                  .filter((sk) => skillCategory === "All" || sk.category === skillCategory)
                  .map((sk, skIdx) => (
                    <div key={skIdx} className="space-y-1 bg-[#f7f7f6] dark:bg-[#1d1715] border border-[#1d1715] dark:border-[#f7f7f6] p-3.5 rounded-none relative">
                      {/* Label values above bar rating trail */}
                      <div className="flex items-center justify-between font-mono text-[10.5px] font-bold uppercase">
                        <span className="text-[#1d1715] dark:text-white tracking-wide">{sk.name}</span>
                        <span className="text-[#a5634a]">{sk.level}%</span>
                      </div>

                      {/* Accent rating bar tracker */}
                      <div className="h-[7px] bg-[#1d1715]/10 dark:bg-zinc-800 relative rounded-none overflow-hidden mt-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${sk.level}%` }}
                          transition={{ duration: 0.8, delay: skIdx * 0.05 }}
                          className="h-full bg-[#a5634a]"
                        />
                      </div>

                      {/* Detail Tags list */}
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {sk.details.map((dl, dlIdx) => (
                          <span 
                            key={dlIdx} 
                            className="text-[8.5px] font-mono bg-white dark:bg-zinc-900 border border-[#1d1715]/10 dark:border-[#f7f7f6]/10 px-2 py-0.5 text-[#a5634a] rounded-none uppercase font-bold"
                          >
                            {dl}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#1d1715]/10 dark:border-[#f7f7f6]/10 pt-4 mt-8">
              <button
                onClick={() => setSkillCategory("All")}
                className="p-1 px-3.5 border-2 border-[#1d1715] dark:border-[#f7f7f6] text-[10px] font-mono uppercase bg-transparent text-[#1d1715] dark:text-[#f7f7f6] hover:bg-[#a5634a] hover:border-[#a5634a] hover:text-white transition-all cursor-pointer font-bold"
              >
                Reset Filter
              </button>
              <span className="font-mono text-[9px] text-[#a5634a] font-extrabold uppercase">SEC: 03 / CAPABILITIES_</span>
            </div>
          </div>

          {/* RIGHT: Academy (with Scientific Core removed completely) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1d1715] border-2 border-[#1d1715] dark:border-[#f7f7f6] p-6 md:p-8 relative min-h-[36rem] flex flex-col justify-between rounded-none overflow-hidden">
            <div className="absolute right-4 bottom-4 text-[7rem] md:text-[9rem] font-black font-mono leading-none opacity-[0.03] dark:opacity-[0.05] text-[#1d1715] dark:text-[#f7f7f6] select-none pointer-events-none tracking-tighter uppercase">
              academy
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-8 border-b border-[#1d1715] dark:border-[#f7f7f6] pb-5">
                <div className="p-2 border-2 border-[#1d1715] dark:border-[#f7f7f6] text-white bg-[#a5634a] rounded-none shrink-0" id="education-icon-wrap">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-sans font-bold text-xl uppercase tracking-tight text-[#1d1715] dark:text-white leading-none">03 / Education</h2>
                  <p className="font-mono text-[10px] text-[#a5634a] font-bold uppercase tracking-wider mt-1.5">ACADEMIC FOUNDATIONS & STUDY_</p>
                </div>
              </div>

              {/* Education timeline */}
              <div className="relative border-[#1d1715] dark:border-[#f7f7f6] border-l ml-3 pl-6 space-y-12 my-6">
                {EDUCATIONS.map((edu) => (
                  <div key={edu.id} className="relative group">
                    {/* Bullet dot */}
                    <span className="absolute left-[-30px] top-1.5 w-4.5 h-4.5 rounded-none border-2 border-[#1d1715] dark:border-[#f7f7f6] bg-[#f7f7f6] dark:bg-[#1d1715] group-hover:bg-[#a5634a] group-hover:border-[#a5634a] transition-all duration-150 z-10" />

                    {/* year stamp background */}
                    <div className="absolute right-0 top-1 font-sans font-black text-[2rem] md:text-[2.5rem] tracking-tighter text-[#1d1715]/5 dark:text-[#f7f7f6]/5 pointer-events-none select-none">
                      {edu.period.split(" ")[0]}
                    </div>

                    <div className="relative z-10">
                      <span className="font-mono text-xs text-[#a5634a] font-black tracking-widest uppercase">{edu.period}</span>
                      <h3 className="font-sans font-extrabold text-lg text-[#1d1715] dark:text-white mt-1 uppercase tracking-tight leading-snug">
                        {edu.institution}
                      </h3>
                      <p className="font-sans text-xs text-[#1d1715] dark:text-zinc-200 font-bold tracking-wide mt-1.5">🎓 {edu.degree}</p>
                      
                      <p className="font-sans text-xs text-zinc-600 dark:text-zinc-350 leading-relaxed mt-3 max-w-xl font-light">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="font-mono text-[9px] text-[#a5634a] mt-6 pt-4 border-t border-[#1d1715]/10 dark:border-[#f7f7f6]/10 relative z-10 flex items-center justify-between uppercase">
              <span>KMITL ACADEMY</span>
              <span>BANGKOK, THAILAND</span>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER STATS */}
      <footer className="max-w-7xl mx-auto px-6 pt-8 mt-12 border-t border-[#1d1715] dark:border-[#f7f7f6] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500 pb-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#a5634a]" />
          <span>© 1983 – 2026 NATTHAPORN MAIONMUE • SYSTEM: VIBE RUNNING_</span>
        </div>
        <div className="flex items-center gap-4 text-[#a5634a] font-bold">
          <span>LATENCY: ZERO</span>
          <span>•</span>
          <span>INTEGRITY: 100%</span>
        </div>
      </footer>
    </div>
  );
}
