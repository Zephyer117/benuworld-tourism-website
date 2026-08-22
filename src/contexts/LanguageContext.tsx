'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'bn' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: string) => string;
  translate: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation cache to avoid repeated API calls
const translationCache = new Map<string, Map<Language, string>>();

// Rate limiting to prevent API overload
let lastTranslationTime = 0;
const MIN_TRANSLATION_INTERVAL = 50; // Reduced to 50ms between translations for maximum speed

// Track consecutive failures to implement exponential backoff
let consecutiveFailures = 0;
const MAX_CONSECUTIVE_FAILURES = 10; // Increased threshold to 10 for more tolerance

// API cooldown when rate limited - disabled for maximum speed
let apiCooldownUntil = 0;
const API_COOLDOWN_DURATION = 5000; // Reduced to 5 seconds cooldown for quick recovery

// Simple fallback translations for common terms
const fallbackTranslations: Record<string, Record<string, string>> = {
  bn: {
    'home': 'হোম',
    'about': 'সম্পর্কে',
    'contact': 'যোগাযোগ',
    'services': 'সেবাসমূহ',
    'tourism': 'পর্যটন',
    'investment': 'বিনিয়োগ',
    'education': 'শিক্ষা',
    'benuworld': 'বেনুওয়ার্ল্ড',
    'gallery': 'গ্যালারি',
    'news': 'খবর',
    'team': 'দল',
    'book': 'বুক',
    'consultation': 'পরামর্শ',
    'read more': 'আরও পড়ুন',
    'learn more': 'আরও জানুন',
    'contact us': 'আমাদের সাথে যোগাযোগ করুন',
    'submit': 'জমা দিন',
    'search': 'অনুসন্ধান',
    'menu': 'মেনু',
    'close': 'বন্ধ',
    'open': 'খুলুন',
    'loading': 'লোড হচ্ছে',
    'error': 'ত্রুটি',
    'success': 'সফল',
    // Navigation
    'inbound tourism': 'ইনবাউন্ড পর্যটন',
    'outbound tourism': 'আউটবাউন্ড পর্যটন',
    'foreign investment': 'বিদেশী বিনিয়োগ',
    'teaching curriculum': 'শিক্ষা পাঠ্যক্রম',
    'inbound tours': 'ইনবাউন্ড ট্যুর',
    'outbound travel': 'আউটবাউন্ড ভ্রমণ',
    'investment desk': 'বিনিয়োগ ডেস্ক',
    'language school': 'ভাষা স্কুল',
    // Hero
    'plan a project': 'একটি প্রকল্প পরিকল্পনা করুন',
    'browse services': 'সেবাসমূহ ব্রাউজ করুন',
    'explore': 'অভিযান',
    'dhaka': 'ঢাকা',
    'bangladesh': 'বাংলাদেশ',
    // Stats
    'established': 'প্রতিষ্ঠিত',
    'working languages': 'কর্মরত ভাষা',
    'practices': 'অনুশীলন',
    'home office': 'হোম অফিস',
    // About section
    'the firm': 'ফার্ম',
    'read the story': 'গল্পটি পড়ুন',
    'inbound': 'ইনবাউন্ড',
    'outbound': 'আউটবাউন্ড',
    'curriculum': 'পাঠ্যক্রম',
    'heritage, wildlife, coast': 'ঐতিহ্য, বন্যপ্রাণী, উপকূল',
    'visa files & group travel': 'ভিসা ফাইল এবং গ্রুপ ভ্রমণ',
    'intros & site programs': 'পরিচিতি এবং সাইট প্রোগ্রাম',
    'en / 中文 training': 'ইংরেজি / চীনা প্রশিক্ষণ',
    // Services
    'four desks. one brief.': 'চারটি ডেস্ক। একটি ব্রিফ।',
    'compare services': 'সেবাসমূহ তুলনা করুন',
    'open practice': 'অনুশীলন খুলুন',
    'company news': 'কোম্পানি খবর',
    'open news desk': 'নিউজ ডেস্ক খুলুন',
    'no published articles in this practice yet.': 'এই অনুশীলনে এখনো কোনো প্রকাশিত নিবন্ধ নেই।',
    'no company news published yet.': 'এখনো কোনো কোম্পানি খবর প্রকাশিত হয়নি।',
    // Routes
    'bangladesh, hosted': 'বাংলাদেশ, হোস্টেড',
    'sample inbound routes': 'নমুনা ইনবাউন্ড রুট',
    'build a custom itinerary': 'কাস্টম ইতিনারি তৈরি করুন',
    // Gallery
    'from the library': 'লাইব্রেরি থেকে',
    'photos & video': 'ছবি এবং ভিডিও',
    'open gallery': 'গ্যালারি খুলুন',
    // Why choose us
    'why clients stay with one office': 'কেন ক্লায়েন্টরা এক অফিসে থাকে',
    'three-language desk': 'তিন-ভাষা ডেস্ক',
    'scoped proposals': 'স্কোপড প্রস্তাব',
    'dhaka-rooted': 'ঢাকা-ভিত্তিক',
    'four practices, one office': 'চারটি অনুশীলন, এক অফিস',
    // Testimonials
    'client notes': 'ক্লায়েন্ট নোট',
    // FAQ
    'before you write to us': 'আমাদের লেখার আগে',
    // CTA
    'send a one-page brief': 'এক-পৃষ্ঠার ব্রিফ পাঠান',
    'dates, destination or sector, language, and group size. we reply with a scoped next step.': 'তারিখ, গন্তব্য বা সেক্টর, ভাষা, এবং গ্রুপের আকার। আমরা একটি স্কোপড পরবর্তী ধাপ দিয়ে উত্তর দিই।',
    'see practices': 'অনুশীলন দেখুন',
    // Footer
    'plan with us': 'আমাদের সাথে পরিকল্পনা করুন',
    'tell us where you want to go or invest.': 'আমাদের বলুন আপনি কোথায় যেতে চান বা বিনিয়োগ করতে চান।',
    'request a proposal': 'একটি প্রস্তাব অনুরোধ করুন',
    'company': 'কোম্পানি',
    'dhaka office': 'ঢাকা অফিস',
    'jurain, dhaka · tourism, investment & education consultancy': 'জুরাইন, ঢাকা · পর্যটন, বিনিয়োগ এবং শিক্ষা পরামর্শ',
    'all rights reserved.': 'সর্বস্বত্ব সংরক্ষিত।',
    // Common phrases
    'sat–thu · 9:00 am – 6:00 pm': 'শনি–বৃহঃ · সকাল ৯:০০ – সন্ধ্যা ৬:০০',
    'tourism · investment · education': 'পর্যটন · বিনিয়োগ · শিক্ষা',
    'dhaka · bangladesh': 'ঢাকা · বাংলাদেশ',
    'host guests in bangladesh with bilingual guides, visas, and day-by-day itineraries.': 'দ্বিভাষিক গাইড, ভিসা এবং দিন-দিনের ইতিনারি সহ বাংলাদেশে অতিথিদের হোস্ট করুন।',
    'flights, hotels, insurance, and embassy files for asia, the middle east, and europe.': 'এশিয়া, মধ্যপ্রাচ্য এবং ইউরোপের জন্য ফ্লাইট, হোটেল, বীমা এবং দূতাবাস ফাইল।',
    'open practice →': 'অনুশীলন খুলুন →',
    'slider 1': 'স্লাইডার ১',
    'slider 2': 'স্লাইডার ২',
    'slider 3': 'স্লাইডার ৩',
    'new slider 2': 'নতুন স্লাইডার ২',
    'preparing your view': 'আপনার দৃশ্য প্রস্তুত করা হচ্ছে',
    'benuworld hosts inbound guests, sends outbound travelers, introduces investment partners, and trains teams in english and mandarin.': 'বেনুওয়ার্ল্ড ইনবাউন্ড অতিথিদের হোস্ট করে, আউটবাউন্ড ভ্রমণকারীদের পাঠায়, বিনিয়োগ অংশীদারদের পরিচয় করিয়ে দেয়, এবং ইংরেজি এবং ম্যান্ডারিনে দলগুলিকে প্রশিক্ষণ দেয়।',
    '+880 1234-567890': '+880 1234-567890',
    // Additional texts that were failing
    'english, bangla, and mandarin in the same conversation not a translation afterthought.': 'একই কথোপকথনে ইংরেজি, বাংলা এবং ম্যান্ডারিন - অনুবাদের পরে নয়।',
    'you receive itineraries, sector briefs, or course outlines before you commit.': 'আপনি প্রতিশ্রুতি দেওয়ার আগে ইতিনারি, সেক্টর ব্রিফ বা কোর্স রূপরেখা পান।',
    'local operators, hotels, and introductions we actually use not generic packages.': 'আমরা যে স্থানীয় অপারেটর, হোটেল এবং পরিচয় ব্যবহার করি - সাধারণ প্যাকেজ নয়।',
    'travel, capital, and training can sit in one project when a client visit needs all three.': 'যখন ক্লায়েন্ট ভিজিটে তিনটিরই প্রয়োজন হয়, তখন ভ্রমণ, মূলধন এবং প্রশিক্ষণ এক প্রকল্পে থাকতে পারে।',
    'factory visits, interpreters, and a realistic regulatory brief in one week. that is rare in dhaka.': 'এক সপ্তাহে কারখানা পরিদর্শন, দোভাষী এবং বাস্তবসম্মত নিয়ন্ত্রক ব্রিফ। ঢাকায় এটি বিরল।',
    'they built a sundarbans-plus-old-dhaka itinerary that felt local, not a brochure copy.': 'তারা একটি সুন্দরবন-প্লাস-পুরানো-ঢাকা ইতিনারি তৈরি করেছিল যা স্থানীয় মনে হয়েছিল, ব্রোশার কপি নয়।',
    'market-entry advisor': 'বাজার-প্রবেশ উপদেষ্টা',
    'michael rahman': 'মাইকেল রহমান',
    'sarah chen': 'সারা চেন',
    'inbound tour host': 'ইনবাউন্ড ট্যুর হোস্ট',
    'business english tied to actual emails and calls. i used it the same week in client meetings.': 'ব্যবসায়িক ইংরেজি যা প্রকৃত ইমেল এবং কলের সাথে যুক্ত। আমি একই সপ্তাহে ক্লায়েন্ট মিটিংয়ে এটি ব্যবহার করেছি।',
    'li wei': 'লি ওয়েই',
    'language student': 'ভাষা শিক্ষার্থী',
    'faq': 'প্রশ্নাবলী',
    'what does benuworld actually do?': 'বেনুওয়ার্ল্ড আসলে কী করে?',
    'which languages can you support?': 'আপনি কোন ভাষাগুলি সমর্থন করতে পারেন?',
    'we are a dhaka-based consultancy covering inbound and outbound travel, foreign investment introductions, and language / curriculum training especially for china – bangladesh work.': 'আমরা একটি ঢাকা-ভিত্তিক পরামর্শদাতা যা ইনবাউন্ড এবং আউটবাউন্ড ভ্রমণ, বিদেশী বিনিয়োগ পরিচয় এবং ভাষা / পাঠ্যক্রম প্রশিক্ষণ কভার করে, বিশেষ করে চীন – বাংলাদেশ কাজের জন্য।',
    'do you work with individuals or companies?': 'আপনি কি ব্যক্তি বা কোম্পানির সাথে কাজ করেন?',
    'how do i start?': 'আমি কীভাবে শুরু করব?',
    'dhaka consultancy for inbound and outbound travel, foreign investment introductions, and language training with mandarin, english, and bangla desks.': 'ইনবাউন্ড এবং আউটবাউন্ড ভ্রমণ, বিদেশী বিনিয়োগ পরিচয় এবং ম্যান্ডারিন, ইংরেজি এবং বাংলা ডেস্ক সহ ভাষা প্রশিক্ষণের জন্য ঢাকা পরামর্শদাতা।',
    'english · বাংলা · 中文': 'ইংরেজি · বাংলা · 中文',
    'jurain, dhaka, bangladesh': 'জুরাইন, ঢাকা, বাংলাদেশ',
    ' benuworld. all rights reserved.': ' বেনুওয়ার্ল্ড। সর্বস্বত্ব সংরক্ষিত।',
    'inquire': 'অনুসন্ধান করুন',
  },
  zh: {
    'home': '首页',
    'about': '关于',
    'contact': '联系',
    'services': '服务',
    'tourism': '旅游',
    'investment': '投资',
    'education': '教育',
    'benuworld': 'BenuWorld',
    'gallery': '画廊',
    'news': '新闻',
    'team': '团队',
    'book': '预订',
    'consultation': '咨询',
    'read more': '阅读更多',
    'learn more': '了解更多',
    'contact us': '联系我们',
    'submit': '提交',
    'search': '搜索',
    'menu': '菜单',
    'close': '关闭',
    'open': '打开',
    'loading': '加载中',
    'error': '错误',
    'success': '成功',
    // Navigation
    'inbound tourism': '入境旅游',
    'outbound tourism': '出境旅游',
    'foreign investment': '外国投资',
    'teaching curriculum': '教学课程',
    'inbound tours': '入境旅游',
    'outbound travel': '出境旅行',
    'investment desk': '投资部',
    'language school': '语言学校',
    // Hero
    'plan a project': '规划项目',
    'browse services': '浏览服务',
    'explore': '探索',
    'dhaka': '达卡',
    'bangladesh': '孟加拉国',
    // Stats
    'established': '成立',
    'working languages': '工作语言',
    'practices': '业务',
    'home office': '总部',
    // About section
    'the firm': '公司',
    'read the story': '阅读故事',
    'inbound': '入境',
    'outbound': '出境',
    'curriculum': '课程',
    'heritage, wildlife, coast': '遗产、野生动物、海岸',
    'visa files & group travel': '签证文件和团体旅行',
    'intros & site programs': '介绍和现场项目',
    'en / 中文 training': '英语/中文培训',
    // Services
    'four desks. one brief.': '四个部门。一个简报。',
    'compare services': '比较服务',
    'open practice': '打开业务',
    'company news': '公司新闻',
    'open news desk': '打开新闻台',
    'no published articles in this practice yet.': '该业务尚未发布文章。',
    'no company news published yet.': '尚未发布公司新闻。',
    // Routes
    'bangladesh, hosted': '孟加拉国，主办',
    'sample inbound routes': '入境路线示例',
    'build a custom itinerary': '定制行程',
    // Gallery
    'from the library': '来自资料库',
    'photos & video': '照片和视频',
    'open gallery': '打开画廊',
    // Why choose us
    'why clients stay with one office': '客户为何选择一个办公室',
    'three-language desk': '三语服务台',
    'scoped proposals': '范围明确的提案',
    'dhaka-rooted': '扎根达卡',
    'four practices, one office': '四项业务，一个办公室',
    // Testimonials
    'client notes': '客户评价',
    // FAQ
    'before you write to us': '在写信给我们之前',
    // CTA
    'send a one-page brief': '发送一页简报',
    'dates, destination or sector, language, and group size. we reply with a scoped next step.': '日期、目的地或行业、语言和团队规模。我们会回复明确的下一步。',
    'see practices': '查看业务',
    // Footer
    'plan with us': '与我们规划',
    'tell us where you want to go or invest.': '告诉我们您想去哪里或投资。',
    'request a proposal': '请求提案',
    'company': '公司',
    'dhaka office': '达卡办公室',
    'jurain, dhaka · tourism, investment & education consultancy': '朱赖恩，达卡 · 旅游、投资和教育咨询',
    'all rights reserved.': '版权所有。',
    // Common phrases
    'sat–thu · 9:00 am – 6:00 pm': '周六–周四 · 上午9:00 – 下午6:00',
    'tourism · investment · education': '旅游 · 投资 · 教育',
    'dhaka · bangladesh': '达卡 · 孟加拉国',
    'host guests in bangladesh with bilingual guides, visas, and day-by-day itineraries.': '用双语导游、签证和每日行程在孟加拉国接待客人。',
    'flights, hotels, insurance, and embassy files for asia, the middle east, and europe.': '为亚洲、中东和欧洲提供航班、酒店、保险和使馆文件。',
    'open practice →': '打开业务 →',
    'slider 1': '滑块1',
    'slider 2': '滑块2',
    'slider 3': '滑块3',
    'new slider 2': '新滑块2',
    'preparing your view': '准备您的视图',
    'benuworld hosts inbound guests, sends outbound travelers, introduces investment partners, and trains teams in english and mandarin.': 'BenuWorld接待入境客人，安排出境旅行，介绍投资合作伙伴，并用英语和普通话培训团队。',
    '+880 1234-567890': '+880 1234-567890',
    // Additional texts that were failing
    'english, bangla, and mandarin in the same conversation not a translation afterthought.': '同一场对话中的英语、孟加拉语和普通话——不是事后翻译。',
    'you receive itineraries, sector briefs, or course outlines before you commit.': '在您承诺之前，您会收到行程、行业简报或课程大纲。',
    'local operators, hotels, and introductions we actually use not generic packages.': '我们实际使用的当地运营商、酒店和介绍——不是通用套餐。',
    'travel, capital, and training can sit in one project when a client visit needs all three.': '当客户访问需要这三者时，旅行、资本和培训可以放在一个项目中。',
    'factory visits, interpreters, and a realistic regulatory brief in one week. that is rare in dhaka.': '一周内工厂参观、口译和现实的监管简报。这在达卡很少见。',
    'they built a sundarbans-plus-old-dhaka itinerary that felt local, not a brochure copy.': '他们建立了一个松达班加老达卡的行程，感觉是当地的，不是宣传册复制品。',
    'market-entry advisor': '市场进入顾问',
    'michael rahman': '迈克尔·拉赫曼',
    'sarah chen': '莎拉·陈',
    'inbound tour host': '入境游主人',
    'business english tied to actual emails and calls. i used it the same week in client meetings.': '与实际电子邮件和电话相关的商务英语。我在客户会议中在同一周使用了它。',
    'li wei': '李伟',
    'language student': '语言学生',
    'faq': '常见问题',
    'what does benuworld actually do?': 'BenuWorld实际上做什么？',
    'which languages can you support?': '你可以支持哪些语言？',
    'we are a dhaka-based consultancy covering inbound and outbound travel, foreign investment introductions, and language / curriculum training especially for china – bangladesh work.': '我们是一家位于达卡的咨询公司，涵盖入境和出境旅行、外国投资介绍以及语言/课程培训，特别是针对中国-孟加拉国工作。',
    'do you work with individuals or companies?': '你与个人还是公司合作？',
    'how do i start?': '我如何开始？',
    'dhaka consultancy for inbound and outbound travel, foreign investment introductions, and language training with mandarin, english, and bangla desks.': '达卡咨询公司，为入境和出境旅行、外国投资介绍以及普通话、英语和孟加拉语台的语言培训提供服务。',
    'english · বাংলা · 中文': '英语 · বাংলা · 中文',
    'jurain, dhaka, bangladesh': '朱赖恩，达卡，孟加拉国',
    ' benuworld. all rights reserved.': ' BenuWorld。版权所有。',
    'inquire': '咨询',
  },
};

// Pre-populate cache with common fallback translations for instant access
function prePopulateCache() {
  for (const [lang, translations] of Object.entries(fallbackTranslations)) {
    const language = lang as Language;
    for (const [text, translation] of Object.entries(translations)) {
      const cacheKey = text.toLowerCase().trim();
      if (!translationCache.has(cacheKey)) {
        translationCache.set(cacheKey, new Map());
      }
      translationCache.get(cacheKey)!.set(language, translation);
    }
  }
}

// Initialize cache on load
prePopulateCache();

// Translation function using MyMemory Translation API (free, no API key required)
async function translateText(text: string, targetLang: Language): Promise<string> {
  if (targetLang === 'en') return text; // No translation needed for English
  
  const cacheKey = text.toLowerCase().trim();
  if (translationCache.has(cacheKey) && translationCache.get(cacheKey)?.has(targetLang)) {
    return translationCache.get(cacheKey)!.get(targetLang)!;
  }

  try {
    // Check fallback dictionary first to avoid unnecessary API calls
    const lowerText = text.toLowerCase().trim();
    const fallbackDict = fallbackTranslations[targetLang] || {};
    
    if (fallbackDict[lowerText]) {
      const translated = fallbackDict[lowerText];
      if (!translationCache.has(cacheKey)) {
        translationCache.set(cacheKey, new Map());
      }
      translationCache.get(cacheKey)!.set(targetLang, translated);
      return translated;
    }

    // Check if API is in cooldown period
    const now = Date.now();
    if (now < apiCooldownUntil) {
      console.log('API in cooldown, using fallback for:', text);
      return text; // Return original text during cooldown
    }

    // Rate limiting: wait minimum time between translations
    const timeSinceLastTranslation = now - lastTranslationTime;
    if (timeSinceLastTranslation < MIN_TRANSLATION_INTERVAL) {
      await new Promise(resolve => setTimeout(resolve, MIN_TRANSLATION_INTERVAL - timeSinceLastTranslation));
    }
    lastTranslationTime = Date.now();

    // Map language codes to MyMemory format
    const langMap: Record<Language, string> = {
      'en': 'en',
      'bn': 'bn',
      'zh': 'zh-CN'
    };
    
    const targetLangCode = langMap[targetLang];
    
    // Use MyMemory Translation API
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLangCode}`
    );

    if (!response.ok) {
      // Handle rate limiting specifically
      if (response.status === 429) {
        consecutiveFailures++;
        console.warn(`Rate limited. Consecutive failures: ${consecutiveFailures}`);
        
        // Activate cooldown if we've had multiple failures
        if (consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
          apiCooldownUntil = Date.now() + API_COOLDOWN_DURATION;
          console.log('Activating API cooldown for 1 minute');
          return text; // Return original text
        }
        
        // Exponential backoff: wait longer if we've had multiple failures
        const backoffTime = Math.min(1000 * Math.pow(2, consecutiveFailures), 10000);
        await new Promise(resolve => setTimeout(resolve, backoffTime));
        
        // Retry once after backoff
        const retryResponse = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLangCode}`
        );
        
        if (retryResponse.ok) {
          consecutiveFailures = 0; // Reset on success
          const data = await retryResponse.json();
          if (data.responseStatus === 200 && data.responseData) {
            const translatedText = data.responseData.translatedText;
            if (!translationCache.has(cacheKey)) {
              translationCache.set(cacheKey, new Map());
            }
            translationCache.get(cacheKey)!.set(targetLang, translatedText);
            return translatedText;
          }
        }
        
        // If retry also fails, continue to fallback
      }
      
      throw new Error(`Translation API failed with status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.responseStatus === 200 && data.responseData) {
      const translatedText = data.responseData.translatedText;
      
      // Reset failure counter on success
      consecutiveFailures = 0;
      
      // Cache the translation
      if (!translationCache.has(cacheKey)) {
        translationCache.set(cacheKey, new Map());
      }
      translationCache.get(cacheKey)!.set(targetLang, translatedText);
      
      return translatedText;
    } else {
      throw new Error(`Translation API returned status: ${data.responseStatus}`);
    }
  } catch (error) {
    // Only log errors occasionally to avoid console spam
    if (Math.random() < 0.1) { // Log 10% of errors
      console.error('Translation error for text:', text.substring(0, 50) + '...', 'Error:', error);
    }
    
    // Return original text if all fails
    return text;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['en', 'bn', 'zh'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (text: string): string => {
    // For immediate synchronous translation, return original text
    // The actual translation happens asynchronously
    return text;
  };

  const translate = async (text: string): Promise<string> => {
    if (language === 'en') return text;
    return translateText(text, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
