(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/news/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$CtaBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/CtaBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.mjs [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cms-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cms-helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$MediaBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/MediaBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$PostCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/PostCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const categories = [
    'All',
    'Inbound Tourism',
    'Outbound Tourism',
    'Foreign Investment',
    'Teaching Curriculum',
    'Company News'
];
const topics = [
    {
        title: 'Inbound hosting notes',
        href: '/services/inbound-tourism'
    },
    {
        title: 'Visa & outbound corridors',
        href: '/services/outbound-tourism'
    },
    {
        title: 'Bangladesh market visits',
        href: '/services/foreign-investment'
    },
    {
        title: 'Language programs',
        href: '/services/teaching-curriculum'
    }
];
function NewsPage() {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { data: allPosts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveCms"])('posts', []);
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publishedPosts"])(allPosts);
    const filteredPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewsPage.useMemo[filteredPosts]": ()=>{
            return posts.filter({
                "NewsPage.useMemo[filteredPosts]": (post)=>{
                    const inCat = selectedCategory === 'All' || post.section === selectedCategory || post.section?.toLowerCase() === selectedCategory.toLowerCase();
                    const q = query.trim().toLowerCase();
                    const inQ = !q || `${post.title} ${post.excerpt} ${post.author}`.toLowerCase().includes(q);
                    return inCat && inQ;
                }
            }["NewsPage.useMemo[filteredPosts]"]);
        }
    }["NewsPage.useMemo[filteredPosts]"], [
        posts,
        selectedCategory,
        query
    ]);
    const featuredPost = filteredPosts[0];
    const rest = featuredPost ? filteredPosts.slice(1) : filteredPosts;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "relative min-h-[50vh] flex items-end overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 hero-mesh"
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4",
                                    children: "Insights"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-6xl font-bold font-display mb-4",
                                    children: "News & briefings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-white/85 max-w-2xl",
                                    children: "Practice notes on travel, investment, and training published when there is something worth sending."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/news/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-8 bg-white border-b border-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-4 justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full lg:w-96 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "Search titles and excerpts…",
                                        className: "w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/news/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedCategory(category),
                                        className: `px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-primary-teal text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`,
                                        children: category
                                    }, category, false, {
                                        fileName: "[project]/src/app/news/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                featuredPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-12 bg-bg-warm-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postHref"])(featuredPost),
                            className: "block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid lg:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-h-[220px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$MediaBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: featuredPost.image || featuredPost.coverImage,
                                                video: featuredPost.video,
                                                alt: featuredPost.title,
                                                className: "h-full min-h-[220px] relative",
                                                controls: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/news/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-wider text-primary-teal",
                                                    children: featuredPost.section
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/news/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-display font-bold mt-3 mb-4",
                                                    children: featuredPost.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/news/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-6",
                                                    children: featuredPost.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/news/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-sm text-gray-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-4 h-4 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/news/page.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 66
                                                                }, this),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDate"])(featuredPost)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/news/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-primary-teal font-semibold inline-flex items-center",
                                                            children: [
                                                                "Read ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-4 h-4 ml-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/news/page.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 30
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/news/page.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/news/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/news/page.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-12 bg-bg-soft-tint",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: filteredPosts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-[1.2fr_0.8fr] gap-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl bg-white p-10 border border-black/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                            className: "w-10 h-10 text-primary-teal mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-display font-bold mb-3",
                                            children: "Nothing published in this filter yet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-6",
                                            children: "Articles appear here as soon as you publish them in the admin panel."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-3",
                                            children: topics.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: t.href,
                                                    className: "rounded-xl border border-gray-100 px-4 py-3 hover:border-primary-teal text-sm font-medium",
                                                    children: t.title
                                                }, t.href, false, {
                                                    fileName: "[project]/src/app/news/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl brand-gradient p-8 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-2xl font-semibold mb-3",
                                            children: "Request a briefing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/85 text-sm mb-6",
                                            children: "Need a visa, sector, or destination note that is not on the site? Ask the office for a one-pager."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "inline-flex px-4 py-4 rounded-lg bg-white text-primary-teal font-semibold",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/news/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: rest.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$PostCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    post: {
                                        ...post,
                                        date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postDate"])(post),
                                        image: post.image || post.coverImage
                                    }
                                }, post.id, false, {
                                    fileName: "[project]/src/app/news/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/news/page.tsx",
                            lineNumber: 145,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/page.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$CtaBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Stay on the briefing list",
                    text: "When we publish, it is usually a practice note not a newsletter blast. Inquire and we will include you."
                }, void 0, false, {
                    fileName: "[project]/src/app/news/page.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/news/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(NewsPage, "r75CobjI5ZTy37C1qv1KTWVxKsw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveCms"]
    ];
});
_c = NewsPage;
var _c;
__turbopack_context__.k.register(_c, "NewsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/public/CtaBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CtaBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-content.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function CtaBanner({ title, text, primary = {
    href: '/contact',
    label: 'Start an inquiry'
}, secondary }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 brand-gradient",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 16
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-5xl font-bold font-display text-white mb-4",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/CtaBanner.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-white/90 mb-8",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/CtaBanner.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: primary.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "secondary",
                                    size: "lg",
                                    children: primary.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/public/CtaBanner.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/CtaBanner.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: secondary.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "outline-white",
                                    size: "lg",
                                    children: secondary.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/public/CtaBanner.tsx",
                                    lineNumber: 33,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/CtaBanner.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phoneHref,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "outline-white",
                                    size: "lg",
                                    children: [
                                        "Call ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/public/CtaBanner.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/CtaBanner.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/public/CtaBanner.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/public/CtaBanner.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/public/CtaBanner.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/public/CtaBanner.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = CtaBanner;
var _c;
__turbopack_context__.k.register(_c, "CtaBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/public/MediaBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaStack",
    ()=>MediaStack,
    "default",
    ()=>MediaBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function MediaBlock({ src, video, alt = "", className = "", controls = true, autoPlay = false }) {
    const embed = video ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["youtubeOrVimeoEmbed"])(video) : src ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["youtubeOrVimeoEmbed"])(src) : null;
    const fileVideo = video && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(video) ? video : src && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(src) ? src : "";
    if (embed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative overflow-hidden bg-black ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: `${embed}${autoPlay ? "?autoplay=1&mute=1&loop=1" : ""}`,
                title: alt || "Video",
                className: "absolute inset-0 h-full w-full",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/src/components/public/MediaBlock.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/public/MediaBlock.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    if (fileVideo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            src: fileVideo,
            className: `h-full w-full object-cover ${className}`,
            controls: controls,
            playsInline: true,
            muted: autoPlay,
            autoPlay: autoPlay,
            loop: autoPlay,
            preload: "metadata"
        }, void 0, false, {
            fileName: "[project]/src/components/public/MediaBlock.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    if (src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            className: `h-full w-full object-cover ${className}`,
            loading: "lazy",
            decoding: "async"
        }, void 0, false, {
            fileName: "[project]/src/components/public/MediaBlock.tsx",
            lineNumber: 55,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `hero-mesh ${className}`
    }, void 0, false, {
        fileName: "[project]/src/components/public/MediaBlock.tsx",
        lineNumber: 58,
        columnNumber: 10
    }, this);
}
_c = MediaBlock;
function MediaStack({ image, video, gallery = [], alt = "", hrefFor }) {
    const extras = gallery.filter((url)=>url && url !== image);
    const hasVideo = Boolean(video);
    const hasImage = Boolean(image);
    const wrap = (url, node, className, key)=>{
        const href = url ? hrefFor?.(url) : "";
        if (!href) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: className,
                children: node
            }, key, false, {
                fileName: "[project]/src/components/public/MediaBlock.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: `${className} block hover:opacity-95`,
            children: node
        }, key, false, {
            fileName: "[project]/src/components/public/MediaBlock.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            hasVideo ? wrap(image, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaBlock, {
                src: image,
                video: video,
                alt: alt,
                className: "h-full aspect-video relative"
            }, void 0, false, {
                fileName: "[project]/src/components/public/MediaBlock.tsx",
                lineNumber: 99,
                columnNumber: 11
            }, this), "aspect-video rounded-2xl overflow-hidden shadow-xl bg-black") : null,
            hasImage ? wrap(image, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: image,
                alt: alt,
                className: "h-full w-full object-cover",
                loading: "lazy",
                decoding: "async"
            }, void 0, false, {
                fileName: "[project]/src/components/public/MediaBlock.tsx",
                lineNumber: 106,
                columnNumber: 11
            }, this), "aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-100") : null,
            !hasVideo && !hasImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-video rounded-2xl hero-mesh"
            }, void 0, false, {
                fileName: "[project]/src/components/public/MediaBlock.tsx",
                lineNumber: 110,
                columnNumber: 33
            }, this) : null,
            extras.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                children: extras.map((url)=>wrap(url, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaBlock, {
                        src: url,
                        video: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVideoFile"])(url) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["youtubeOrVimeoEmbed"])(url) ? url : undefined,
                        alt: alt,
                        className: "h-full relative"
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/MediaBlock.tsx",
                        lineNumber: 116,
                        columnNumber: 15
                    }, this), "aspect-video rounded-xl overflow-hidden bg-black", url))
            }, void 0, false, {
                fileName: "[project]/src/components/public/MediaBlock.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/public/MediaBlock.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c1 = MediaStack;
var _c, _c1;
__turbopack_context__.k.register(_c, "MediaBlock");
__turbopack_context__.k.register(_c1, "MediaStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/public/PostCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$MediaBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/MediaBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cms-helpers.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function PostCard({ post }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postHref"])(post),
        className: "block h-full group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-40 overflow-hidden bg-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$MediaBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: post.image || post.coverImage,
                        video: post.video,
                        alt: post.title,
                        className: "h-40 relative",
                        controls: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/PostCard.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/public/PostCard.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        post.section ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs uppercase tracking-wider text-primary-teal mb-2",
                            children: post.section
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/PostCard.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this) : null,
                        post.date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-gray-500",
                            children: post.date
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/PostCard.tsx",
                            lineNumber: 37,
                            columnNumber: 24
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-display font-semibold mt-2 mb-2 group-hover:text-primary-teal transition-colors",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/PostCard.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        post.excerpt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-4 line-clamp-3",
                            children: post.excerpt
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/PostCard.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-semibold text-primary-teal",
                            children: "Read article →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/PostCard.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/public/PostCard.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/public/PostCard.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/public/PostCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = PostCard;
var _c;
__turbopack_context__.k.register(_c, "PostCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, hover = true, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-white rounded-2xl shadow-card overflow-hidden', hover && 'transition-all duration-300 hover:shadow-brand hover:-translate-y-1', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Card;
Card.displayName = 'Card';
const __TURBOPACK__default__export__ = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card$forwardRef");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cms-helpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactHoursLabel",
    ()=>contactHoursLabel,
    "findRouteByPath",
    ()=>findRouteByPath,
    "findRouteForMedia",
    ()=>findRouteForMedia,
    "isPublished",
    ()=>isPublished,
    "mediaHref",
    ()=>mediaHref,
    "mergeServices",
    ()=>mergeServices,
    "normalizeSection",
    ()=>normalizeSection,
    "phoneHref",
    ()=>phoneHref,
    "postDate",
    ()=>postDate,
    "postHref",
    ()=>postHref,
    "publishedPosts",
    ()=>publishedPosts,
    "routeHref",
    ()=>routeHref,
    "routeSlug",
    ()=>routeSlug,
    "routesForSection",
    ()=>routesForSection,
    "serviceById",
    ()=>serviceById,
    "servicePathFromSection",
    ()=>servicePathFromSection,
    "slugify",
    ()=>slugify,
    "whatsappHref",
    ()=>whatsappHref
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-content.ts [app-client] (ecmascript)");
;
;
function isPublished(post) {
    return post.status === "published";
}
function publishedPosts(posts, section) {
    const wanted = normalizeSection(section);
    return posts.filter((post)=>{
        if (!isPublished(post)) return false;
        if (!wanted) return true;
        return normalizeSection(post.section) === wanted;
    });
}
function normalizeSection(value) {
    return (value || "").trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function slugify(value) {
    return (value || "").trim().toLowerCase().replace(/['’]/g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function routeSlug(route) {
    return slugify(route.slug) || slugify(route.name);
}
function servicePathFromSection(section) {
    return normalizeSection(section) || "inbound-tourism";
}
function routeHref(route) {
    return `/services/${servicePathFromSection(route.section)}/${routeSlug(route)}`;
}
function findRouteByPath(routes, service, slug) {
    const source = routes?.length ? routes : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_INBOUND_ROUTES"];
    const wantedService = normalizeSection(service);
    const wantedSlug = slugify(slug);
    return source.find((route)=>servicePathFromSection(route.section) === wantedService && routeSlug(route) === wantedSlug) || null;
}
function findRouteForMedia(item, routes) {
    const source = routes?.length ? routes : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_INBOUND_ROUTES"];
    if (item.routeId) {
        const byId = source.find((route)=>route.id === item.routeId);
        if (byId) return byId;
    }
    if (item.url) {
        const byImage = source.find((route)=>route.image && (route.image === item.url || item.url.includes(route.image) || route.image.includes(item.url)));
        if (byImage) return byImage;
    }
    const haystack = `${item.name || ""} ${item.caption || ""} ${item.alt || ""} ${item.url || ""}`.toLowerCase();
    const ranked = source.map((route)=>{
        const slug = routeSlug(route);
        const name = route.name.toLowerCase();
        const compact = name.replace(/['’]/g, "");
        let score = 0;
        if (haystack.includes(slug) || haystack.includes(slug.replace(/-/g, " "))) score += 4;
        if (haystack.includes(name) || haystack.includes(compact)) score += 3;
        if (item.section && normalizeSection(item.section) === normalizeSection(route.section)) score += 1;
        return {
            route,
            score
        };
    }).filter((row)=>row.score >= 3).sort((a, b)=>b.score - a.score);
    return ranked[0]?.route || null;
}
function mediaHref(item, routes) {
    const route = findRouteForMedia(item, routes);
    if (route) return routeHref(route);
    if (item.section) return `/services/${servicePathFromSection(item.section)}`;
    return "";
}
function postHref(post) {
    return `/news/${post.slug || post.id || ""}`;
}
function postDate(post) {
    return post.date || post.publishedAt || post.createdAt || "";
}
function mergeServices(saved) {
    const byId = new Map((saved || []).map((item)=>[
            item.id,
            item
        ]));
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"].map((fallback)=>({
            ...fallback,
            ...byId.get(fallback.id),
            id: fallback.id,
            title: fallback.title,
            section: fallback.section,
            gallery: byId.get(fallback.id)?.gallery || fallback.gallery || []
        }));
}
function serviceById(services, id) {
    return mergeServices(services).find((item)=>item.id === id) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SERVICES"].find((item)=>item.id === id);
}
function routesForSection(routes, section) {
    const source = routes?.length ? routes : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_INBOUND_ROUTES"];
    const wanted = normalizeSection(section);
    return source.filter((route)=>route.active !== false).filter((route)=>normalizeSection(route.section || "Inbound Tourism") === wanted).sort((a, b)=>(a.order || 0) - (b.order || 0));
}
function phoneHref(phone) {
    const value = phone || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phone;
    return `tel:${value.replace(/[^\d+]/g, "")}`;
}
function whatsappHref(contact) {
    if (contact?.whatsapp?.startsWith("http")) return contact.whatsapp;
    const digits = (contact?.whatsapp || contact?.phone || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phone).replace(/[^\d]/g, "");
    return `https://wa.me/${digits}`;
}
function contactHoursLabel(contact) {
    const firstOpen = contact?.businessHours?.find((row)=>!row.closed);
    if (!firstOpen) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].hours;
    const range = firstOpen.hours || `${firstOpen.open || ""} – ${firstOpen.close || ""}`.trim();
    return `${firstOpen.day} · ${range}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_INBOUND_ROUTES",
    ()=>DEFAULT_INBOUND_ROUTES,
    "DEFAULT_SERVICES",
    ()=>DEFAULT_SERVICES,
    "GALLERY_SECTIONS",
    ()=>GALLERY_SECTIONS,
    "SECTION_LABELS",
    ()=>SECTION_LABELS,
    "SERVICE_SECTIONS",
    ()=>SERVICE_SECTIONS
]);
const SECTION_LABELS = {
    "inbound-tourism": "Inbound Tourism",
    "outbound-tourism": "Outbound Tourism",
    "foreign-investment": "Foreign Investment",
    "teaching-curriculum": "Teaching Curriculum",
    news: "News & Insights"
};
const SERVICE_SECTIONS = [
    "inbound-tourism",
    "outbound-tourism",
    "foreign-investment",
    "teaching-curriculum"
];
const DEFAULT_SERVICES = [
    {
        id: "inbound-tourism",
        title: "Inbound Tourism",
        section: "Inbound Tourism",
        heroImage: "",
        heroVideo: "",
        gallery: [],
        order: 1
    },
    {
        id: "outbound-tourism",
        title: "Outbound Tourism",
        section: "Outbound Tourism",
        heroImage: "",
        heroVideo: "",
        gallery: [],
        order: 2
    },
    {
        id: "foreign-investment",
        title: "Foreign Investment",
        section: "Foreign Investment",
        heroImage: "",
        heroVideo: "",
        gallery: [],
        order: 3
    },
    {
        id: "teaching-curriculum",
        title: "Teaching Curriculum",
        section: "Teaching Curriculum",
        heroImage: "",
        heroVideo: "",
        gallery: [],
        order: 4
    },
    {
        id: "company-news",
        title: "Company News",
        section: "Company News",
        heroImage: "",
        heroVideo: "",
        gallery: [],
        order: 5
    }
];
const GALLERY_SECTIONS = DEFAULT_SERVICES.map(_c = (service)=>service.section);
_c1 = GALLERY_SECTIONS;
const DEFAULT_INBOUND_ROUTES = [
    {
        id: "route-coxs-bazar",
        name: "Cox's Bazar",
        slug: "coxs-bazar",
        tag: "Coast",
        days: "3–5 days",
        summary: "The world's longest natural sea beach, fishing villages, and sunset walks.",
        image: "",
        section: "Inbound Tourism",
        active: true,
        order: 1
    },
    {
        id: "route-sundarbans",
        name: "Sundarbans",
        slug: "sundarbans",
        tag: "Wildlife",
        days: "3–4 days",
        summary: "UNESCO mangrove forest, river cruises, and Royal Bengal Tiger habitat.",
        image: "",
        section: "Inbound Tourism",
        active: true,
        order: 2
    },
    {
        id: "route-sylhet",
        name: "Sylhet",
        slug: "sylhet",
        tag: "Tea & Hills",
        days: "2–4 days",
        summary: "Tea estates, waterfalls, and shrine trails in the northeast.",
        image: "",
        section: "Inbound Tourism",
        active: true,
        order: 3
    },
    {
        id: "route-dhaka",
        name: "Dhaka Heritage",
        slug: "dhaka-heritage",
        tag: "City",
        days: "1–2 days",
        summary: "Old Dhaka, Lalbagh Fort, riverfront life, and craft markets.",
        image: "",
        section: "Inbound Tourism",
        active: true,
        order: 4
    },
    {
        id: "route-cht",
        name: "Chittagong Hill Tracts",
        slug: "chittagong-hill-tracts",
        tag: "Culture",
        days: "4–6 days",
        summary: "Indigenous communities, lakes, and hill-road landscapes.",
        image: "",
        section: "Inbound Tourism",
        active: true,
        order: 5
    },
    {
        id: "route-rajshahi",
        name: "Rajshahi & Paharpur",
        slug: "rajshahi-and-paharpur",
        tag: "History",
        days: "2–3 days",
        summary: "Buddhist ruins, silk weaving, and mango-country heritage.",
        image: "",
        section: "Inbound Tourism",
        active: true,
        order: 6
    },
    {
        id: "route-china",
        name: "China & East Asia",
        slug: "china-and-east-asia",
        tag: "Visa",
        days: "Full visa file support",
        summary: "Business, study, and family visits.",
        image: "",
        section: "Outbound Tourism",
        active: true,
        order: 1
    },
    {
        id: "route-sea",
        name: "Southeast Asia",
        slug: "southeast-asia",
        tag: "Leisure",
        days: "E-visa / on-arrival guidance",
        summary: "Leisure and group tours.",
        image: "",
        section: "Outbound Tourism",
        active: true,
        order: 2
    },
    {
        id: "route-me",
        name: "Middle East",
        slug: "middle-east",
        tag: "Umrah",
        days: "Embassy coordination",
        summary: "Umrah, work, and family travel.",
        image: "",
        section: "Outbound Tourism",
        active: true,
        order: 3
    },
    {
        id: "route-europe",
        name: "Europe",
        slug: "europe",
        tag: "Schengen",
        days: "Appointment & documentation",
        summary: "Study, tourism, and Schengen files.",
        image: "",
        section: "Outbound Tourism",
        active: true,
        order: 4
    },
    {
        id: "route-rmg",
        name: "RMG & Textiles",
        slug: "rmg-and-textiles",
        tag: "Sector",
        days: "",
        summary: "Joint ventures, sourcing, factory visits.",
        image: "",
        section: "Foreign Investment",
        active: true,
        order: 1
    },
    {
        id: "route-infra",
        name: "Infrastructure",
        slug: "infrastructure",
        tag: "Sector",
        days: "",
        summary: "Logistics, energy, and BRI-linked projects.",
        image: "",
        section: "Foreign Investment",
        active: true,
        order: 2
    },
    {
        id: "route-agri",
        name: "Agribusiness",
        slug: "agribusiness",
        tag: "Sector",
        days: "",
        summary: "Processing, cold chain, export partnerships.",
        image: "",
        section: "Foreign Investment",
        active: true,
        order: 3
    },
    {
        id: "route-ict",
        name: "ICT & Services",
        slug: "ict-and-services",
        tag: "Sector",
        days: "",
        summary: "Outsourcing, education tech, market entry.",
        image: "",
        section: "Foreign Investment",
        active: true,
        order: 4
    },
    {
        id: "route-en",
        name: "Business English",
        slug: "business-english",
        tag: "A2–C1",
        days: "8–16 weeks",
        summary: "In-person and online business English.",
        image: "",
        section: "Teaching Curriculum",
        active: true,
        order: 1
    },
    {
        id: "route-mandarin",
        name: "Mandarin for Business",
        slug: "mandarin-for-business",
        tag: "HSK 1–4",
        days: "12 weeks",
        summary: "Small-group Mandarin for meetings and travel.",
        image: "",
        section: "Teaching Curriculum",
        active: true,
        order: 2
    },
    {
        id: "route-tourism-cn",
        name: "Tourism Chinese",
        slug: "tourism-chinese",
        tag: "Beginner+",
        days: "6 weeks",
        summary: "Workshops for hosts and guides.",
        image: "",
        section: "Teaching Curriculum",
        active: true,
        order: 3
    },
    {
        id: "route-corp",
        name: "Corporate Communication",
        slug: "corporate-communication",
        tag: "Custom",
        days: "Flexible",
        summary: "On-site workshops for company teams.",
        image: "",
        section: "Teaching Curriculum",
        active: true,
        order: 4
    },
    {
        id: "route-notes",
        name: "Practice notes",
        slug: "practice-notes",
        tag: "News",
        days: "",
        summary: "Travel, investment, and training updates worth sending to clients.",
        image: "",
        section: "Company News",
        active: true,
        order: 1
    },
    {
        id: "route-partners",
        name: "Partnerships",
        slug: "partnerships",
        tag: "News",
        days: "",
        summary: "Operator and institutional collaborations as they are signed.",
        image: "",
        section: "Company News",
        active: true,
        order: 2
    },
    {
        id: "route-office",
        name: "Office notices",
        slug: "office-notices",
        tag: "News",
        days: "",
        summary: "Hours, new desks, and how to reach a named coordinator.",
        image: "",
        section: "Company News",
        active: true,
        order: 3
    }
];
var _c, _c1;
__turbopack_context__.k.register(_c, "GALLERY_SECTIONS$DEFAULT_SERVICES.map");
__turbopack_context__.k.register(_c1, "GALLERY_SECTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_07-v2-d._.js.map