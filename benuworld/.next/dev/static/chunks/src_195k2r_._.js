(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-content.ts [app-client] (ecmascript)");
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
const navItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Services',
        href: '/services',
        hasMenu: true
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Team',
        href: '/team'
    },
    {
        name: 'Gallery',
        href: '/gallery'
    },
    {
        name: 'News',
        href: '/news'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileServicesOpen, setMobileServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 24)
            }["Header.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setIsMobileMenuOpen(false);
            setServicesOpen(false);
            setMobileServicesOpen(false);
        }
    }["Header.useEffect"], [
        pathname
    ]);
    const isActive = (href)=>{
        if (href === '/') return pathname === '/';
        return pathname === href || pathname.startsWith(`${href}/`);
    };
    const solid = isScrolled || isMobileMenuOpen;
    const linkBase = solid ? 'text-text-ink/80 hover:text-primary-teal' : 'text-white/85 hover:text-white';
    const activeLink = solid ? 'text-primary-teal' : 'text-white';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden lg:block text-xs tracking-wide transition-colors duration-300 ${solid ? 'bg-bg-dark-teal text-white/80' : 'bg-black/25 text-white/80 backdrop-blur-sm'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 h-10 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phoneHref,
                                    className: "inline-flex items-center gap-2 hover:text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "w-3.5 h-3.5 text-primary-aqua"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].email}`,
                                    className: "inline-flex items-center gap-2 hover:text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-3.5 h-3.5 text-primary-aqua"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].email
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3.5 h-3.5 text-primary-aqua"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].hours
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `transition-all duration-300 ${solid ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(18,33,30,0.08)] border-b border-black/5' : 'bg-transparent'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-[72px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-3 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full brand-gradient flex items-center justify-center shrink-0 shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-lg font-display",
                                            children: "B"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `block text-xl font-bold font-display ${solid ? 'text-text-ink' : 'text-white'}`,
                                                children: "BenuWorld"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `hidden sm:block text-[10px] uppercase tracking-[0.2em] ${solid ? 'text-primary-teal' : 'text-white/70'}`,
                                                children: "Tourism · Investment · Education"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden lg:flex items-center gap-1",
                                children: navItems.map((item)=>item.hasMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        onMouseEnter: ()=>setServicesOpen(true),
                                        onMouseLeave: ()=>setServicesOpen(false),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: `flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${isActive(item.href) ? activeLink : linkBase}`,
                                                children: [
                                                    item.name,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 110,
                                                columnNumber: 21
                                            }, this),
                                            isActive(item.href) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute left-3 right-3 bottom-1 h-0.5 ${solid ? 'bg-primary-teal' : 'bg-secondary-sand'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 120,
                                                columnNumber: 23
                                            }, this),
                                            servicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[520px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl bg-white shadow-brand border border-black/5 p-3 grid grid-cols-2 gap-1",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navServices"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: service.href,
                                                            className: "rounded-xl px-4 py-3 hover:bg-bg-soft-tint transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-semibold text-text-ink",
                                                                    children: service.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500 mt-0.5 leading-snug",
                                                                    children: service.blurb
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, service.href, true, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 123,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: `relative px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${isActive(item.href) ? activeLink : linkBase}`,
                                        children: [
                                            item.name,
                                            isActive(item.href) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `absolute left-3 right-3 bottom-1 h-0.5 ${solid ? 'bg-primary-teal' : 'bg-secondary-sand'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 149,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "primary",
                                        size: "sm",
                                        children: "Book a Consultation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `lg:hidden p-2 rounded-lg ${solid ? 'hover:bg-bg-soft-tint' : 'hover:bg-white/10'}`,
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                "aria-label": isMobileMenuOpen ? 'Close menu' : 'Open menu',
                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: `w-6 h-6 ${solid ? 'text-text-ink' : 'text-white'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: `w-6 h-6 ${solid ? 'text-text-ink' : 'text-white'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[calc(100vh-72px)] overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-5 space-y-1",
                    children: [
                        navItems.map((item)=>item.hasMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full flex items-center justify-between py-3 text-text-ink font-medium",
                                        onClick: ()=>setMobileServicesOpen(!mobileServicesOpen),
                                        children: [
                                            "Services",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: `w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 198,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, this),
                                    mobileServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pl-3 pb-2 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                className: "block py-2 text-sm text-primary-teal",
                                                children: "All services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 202,
                                                columnNumber: 23
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navServices"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: service.href,
                                                    className: "block py-2 text-sm text-gray-600",
                                                    children: service.name
                                                }, service.href, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 25
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 201,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 192,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "block py-3 text-text-ink font-medium",
                                children: item.name
                            }, item.name, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 214,
                                columnNumber: 17
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 border-t border-gray-100 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        isMobile: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phoneHref,
                                    className: "flex items-center gap-2 text-sm text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "w-4 h-4 text-primary-teal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "primary",
                                        size: "md",
                                        fullWidth: true,
                                        children: "Book a Consultation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Header, "HjMaGPueO8navlUZXVoE2G2oFxE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/SiteFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cms-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const CHROMELESS = [
    "/admin",
    "/studio"
];
const WARM_COLLECTIONS = [
    "posts",
    "services",
    "routes",
    "contact",
    "team",
    "media",
    "slideshow"
];
function isChromeless(pathname) {
    return CHROMELESS.some((prefix)=>pathname === prefix || pathname.startsWith(`${prefix}/`));
}
function NavigationProgress() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationProgress.useEffect": ()=>{
            setActive(false);
            setProgress(0);
        }
    }["NavigationProgress.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationProgress.useEffect": ()=>{
            // Disable on home page to prevent blocking
            if (pathname === '/') return;
            const onClick = {
                "NavigationProgress.useEffect.onClick": (event)=>{
                    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                        return;
                    }
                    const anchor = event.target?.closest("a");
                    if (!anchor) return;
                    const href = anchor.getAttribute("href");
                    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
                    if (anchor.target && anchor.target !== "_self") return;
                    if (anchor.hasAttribute("download")) return;
                    try {
                        const url = new URL(anchor.href, window.location.href);
                        if (url.origin !== window.location.origin) return;
                        if (`${url.pathname}${url.search}` === `${window.location.pathname}${window.location.search}`) return;
                        setActive(true);
                        setProgress(0);
                        // Simulate progress
                        const progressInterval = setInterval({
                            "NavigationProgress.useEffect.onClick.progressInterval": ()=>{
                                setProgress({
                                    "NavigationProgress.useEffect.onClick.progressInterval": (prev)=>{
                                        if (prev >= 90) return prev;
                                        return prev + Math.random() * 15;
                                    }
                                }["NavigationProgress.useEffect.onClick.progressInterval"]);
                            }
                        }["NavigationProgress.useEffect.onClick.progressInterval"], 100);
                        // Complete after a short time
                        setTimeout({
                            "NavigationProgress.useEffect.onClick": ()=>{
                                clearInterval(progressInterval);
                                setProgress(100);
                                setTimeout({
                                    "NavigationProgress.useEffect.onClick": ()=>setActive(false)
                                }["NavigationProgress.useEffect.onClick"], 200);
                            }
                        }["NavigationProgress.useEffect.onClick"], 600);
                    } catch  {
                    /* ignore invalid href */ }
                }
            }["NavigationProgress.useEffect.onClick"];
            document.addEventListener("click", onClick);
            return ({
                "NavigationProgress.useEffect": ()=>document.removeEventListener("click", onClick)
            })["NavigationProgress.useEffect"];
        }
    }["NavigationProgress.useEffect"], [
        pathname
    ]);
    if (!active || pathname === '/') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed top-0 left-0 right-0 z-[70] h-1 overflow-hidden bg-primary-teal/15",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-primary-teal transition-all duration-100 ease-out",
            style: {
                width: `${progress}%`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/layout/SiteFrame.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/SiteFrame.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(NavigationProgress, "jdm5l3zqWfPvR/BaGOr01z95CYM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavigationProgress;
function SiteFrame({ header, footer, children }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const hideChrome = isChromeless(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteFrame.useEffect": ()=>{
            // Disable prefetch on home page to prevent blocking
            if (hideChrome || pathname === '/') return;
            const idle = window.requestIdleCallback ?? ({
                "SiteFrame.useEffect": (cb)=>window.setTimeout(cb, 400)
            })["SiteFrame.useEffect"];
            const cancel = window.cancelIdleCallback ?? ({
                "SiteFrame.useEffect": (id)=>window.clearTimeout(id)
            })["SiteFrame.useEffect"];
            const id = idle({
                "SiteFrame.useEffect.id": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefetchCms"])(WARM_COLLECTIONS)
            }["SiteFrame.useEffect.id"]);
            return ({
                "SiteFrame.useEffect": ()=>cancel(id)
            })["SiteFrame.useEffect"];
        }
    }["SiteFrame.useEffect"], [
        hideChrome,
        pathname
    ]);
    if (hideChrome) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationProgress, {}, void 0, false, {
                    fileName: "[project]/src/components/layout/SiteFrame.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/SiteFrame.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationProgress, {}, void 0, false, {
                fileName: "[project]/src/components/layout/SiteFrame.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            header,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/SiteFrame.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            footer
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/SiteFrame.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s1(SiteFrame, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = SiteFrame;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavigationProgress");
__turbopack_context__.k.register(_c1, "SiteFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/public/FloatingContact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site-content.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function FloatingContact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-40 flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].whatsapp,
                target: "_blank",
                rel: "noreferrer",
                className: "w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform",
                "aria-label": "WhatsApp",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/public/FloatingContact.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/public/FloatingContact.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContact"].phoneHref,
                className: "w-12 h-12 rounded-full bg-primary-teal text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform",
                "aria-label": "Call",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/public/FloatingContact.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/public/FloatingContact.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/contact",
                className: "hidden sm:flex h-12 px-4 rounded-full bg-text-ink text-white shadow-lg items-center text-sm font-medium hover:bg-primary-teal transition-colors",
                children: "Inquire"
            }, void 0, false, {
                fileName: "[project]/src/components/public/FloatingContact.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/public/FloatingContact.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = FloatingContact;
var _c;
__turbopack_context__.k.register(_c, "FloatingContact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref)=>{
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const variants = {
        primary: 'bg-primary-teal text-white hover:bg-primary-aqua shadow-lg hover:shadow-xl',
        secondary: 'bg-secondary-sand text-text-ink hover:bg-secondary-terracotta hover:text-white',
        outline: 'border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white',
        'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary-teal',
        ghost: 'text-primary-teal hover:bg-bg-soft-tint'
    };
    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-2xl'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 29,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/GlobalTranslator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalTranslator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GlobalTranslator({ children }) {
    _s();
    const { language, translate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(language);
    const originalTexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const pathname = ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalTranslator.useEffect": ()=>{
            // Skip translation on home page to prevent blocking
            if (pathname === '/') return;
            if (previousLanguage.current === language) {
                return;
            }
            previousLanguage.current = language;
            translateContent();
        }
    }["GlobalTranslator.useEffect"], [
        language,
        translate,
        pathname
    ]);
    const translateContent = async ()=>{
        if (!containerRef.current) return;
        const textNodes = getTextNodes(containerRef.current);
        try {
            if (language === 'en') {
                // Restore original texts
                textNodes.forEach((node)=>{
                    if (originalTexts.current.has(node)) {
                        node.textContent = originalTexts.current.get(node) || node.textContent;
                    }
                });
            } else {
                // Store original texts and translate
                textNodes.forEach((node)=>{
                    if (node.textContent && !originalTexts.current.has(node)) {
                        originalTexts.current.set(node, node.textContent);
                    }
                });
                // Batch translations to avoid overwhelming the API
                const BATCH_SIZE = 10; // Process 10 translations at a time for maximum speed
                const batches = [];
                for(let i = 0; i < textNodes.length; i += BATCH_SIZE){
                    batches.push(textNodes.slice(i, i + BATCH_SIZE));
                }
                for (const batch of batches){
                    const translationPromises = batch.map(async (node)=>{
                        const originalText = originalTexts.current.get(node) || node.textContent || '';
                        return await translate(originalText);
                    });
                    const translatedTexts = await Promise.all(translationPromises);
                    // Update text nodes with translations
                    batch.forEach((node, index)=>{
                        if (node.textContent) {
                            node.textContent = translatedTexts[index];
                        }
                    });
                    // Minimal delay between batches for maximum speed
                    await new Promise((resolve)=>setTimeout(resolve, 100));
                }
            }
        } catch (error) {
            console.error('Translation error:', error);
        }
    };
    const getTextNodes = (element)=>{
        const textNodes = [];
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
            acceptNode: (node)=>{
                const text = node.textContent?.trim();
                if (!text) return NodeFilter.FILTER_REJECT;
                // Skip scripts, styles, code, and other technical elements
                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                const tagName = parent.tagName.toLowerCase();
                const skipTags = [
                    'script',
                    'style',
                    'code',
                    'pre',
                    'noscript',
                    'template',
                    'button'
                ];
                if (skipTags.includes(tagName)) return NodeFilter.FILTER_REJECT;
                // Skip very short text (less than 2 characters)
                if (text.length < 2) return NodeFilter.FILTER_REJECT;
                // Skip numbers only
                if (/^\d+$/.test(text)) return NodeFilter.FILTER_REJECT;
                // Skip email addresses and URLs
                if (text.includes('@') || text.includes('http')) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        let node;
        while(node = walker.nextNode()){
            textNodes.push(node);
        }
        return textNodes;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/GlobalTranslator.tsx",
        lineNumber: 122,
        columnNumber: 10
    }, this);
}
_s(GlobalTranslator, "mHJHG7nUrlLWVM3zwfYA6u142Yk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = GlobalTranslator;
var _c;
__turbopack_context__.k.register(_c, "GlobalTranslator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const LANGUAGES = [
    {
        code: 'en',
        name: 'English',
        flag: '🇺🇸'
    },
    {
        code: 'bn',
        name: 'বাংলা',
        flag: '🇧🇩'
    },
    {
        code: 'zh',
        name: '中文',
        flag: '🇨🇳'
    }
];
function LanguageSwitcher({ className = '', isMobile = false }) {
    _s();
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const textColor = isMobile ? 'text-gray-600' : 'text-white';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1 ${className}`,
        children: LANGUAGES.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setLanguage(lang.code),
                className: `px-2 py-1 rounded text-[10px] uppercase tracking-[0.18em] transition-all ${language === lang.code ? `${textColor} font-medium` : `${textColor}/70 hover:${textColor}`}`,
                "aria-label": `Switch to ${lang.name}`,
                children: lang.name
            }, lang.code, false, {
                fileName: "[project]/src/components/ui/LanguageSwitcher.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/LanguageSwitcher.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "UZUYajh7f/ecAaqs8+JAYjvISYI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ToastProvider({ children }) {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[showToast]": (type, message, duration = 3000)=>{
            const id = Date.now().toString();
            setToasts({
                "ToastProvider.useCallback[showToast]": (prev)=>[
                        ...prev,
                        {
                            id,
                            type,
                            message,
                            duration
                        }
                    ]
            }["ToastProvider.useCallback[showToast]"]);
            if (duration > 0) {
                setTimeout({
                    "ToastProvider.useCallback[showToast]": ()=>{
                        removeToast(id);
                    }
                }["ToastProvider.useCallback[showToast]"], duration);
            }
        }
    }["ToastProvider.useCallback[showToast]"], []);
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[removeToast]": (id)=>{
            setToasts({
                "ToastProvider.useCallback[removeToast]": (prev)=>prev.filter({
                        "ToastProvider.useCallback[removeToast]": (toast)=>toast.id !== id
                    }["ToastProvider.useCallback[removeToast]"])
            }["ToastProvider.useCallback[removeToast]"]);
        }
    }["ToastProvider.useCallback[removeToast]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast,
            removeToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContainer, {
                toasts: toasts,
                removeToast: removeToast
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(ToastProvider, "pXAZjnBFZY5Qx0ETgnygSV3ABdc=");
_c = ToastProvider;
function useToast() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
_s1(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function ToastContainer({ toasts, removeToast }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastItem, {
                toast: toast,
                onRemove: removeToast
            }, toast.id, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c1 = ToastContainer;
function ToastItem({ toast, onRemove }) {
    const icons = {
        success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
            className: "w-5 h-5 text-green-500"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Toast.tsx",
            lineNumber: 68,
            columnNumber: 14
        }, this),
        error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
            className: "w-5 h-5 text-red-500"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Toast.tsx",
            lineNumber: 69,
            columnNumber: 12
        }, this),
        warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
            className: "w-5 h-5 text-yellow-500"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Toast.tsx",
            lineNumber: 70,
            columnNumber: 14
        }, this),
        info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
            className: "w-5 h-5 text-blue-500"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Toast.tsx",
            lineNumber: 71,
            columnNumber: 11
        }, this)
    };
    const backgrounds = {
        success: 'bg-green-50 border-green-200',
        error: 'bg-red-50 border-red-200',
        warning: 'bg-yellow-50 border-yellow-200',
        info: 'bg-blue-50 border-blue-200'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg ${backgrounds[toast.type]} animate-in slide-in-from-right-2 fade-in duration-300`,
        children: [
            icons[toast.type],
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-gray-800",
                children: toast.message
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onRemove(toast.id),
                className: "ml-auto p-1 rounded hover:bg-black/5 transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-4 h-4 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Toast.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Toast.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Toast.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c2 = ToastItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ToastProvider");
__turbopack_context__.k.register(_c1, "ToastContainer");
__turbopack_context__.k.register(_c2, "ToastItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Translation cache to avoid repeated API calls
const translationCache = new Map();
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
const fallbackTranslations = {
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
        'inquire': 'অনুসন্ধান করুন'
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
        'inquire': '咨询'
    }
};
// Pre-populate cache with common fallback translations for instant access
function prePopulateCache() {
    for (const [lang, translations] of Object.entries(fallbackTranslations)){
        const language = lang;
        for (const [text, translation] of Object.entries(translations)){
            const cacheKey = text.toLowerCase().trim();
            if (!translationCache.has(cacheKey)) {
                translationCache.set(cacheKey, new Map());
            }
            translationCache.get(cacheKey).set(language, translation);
        }
    }
}
// Initialize cache on load
prePopulateCache();
// Translation function using MyMemory Translation API (free, no API key required)
async function translateText(text, targetLang) {
    if (targetLang === 'en') return text; // No translation needed for English
    const cacheKey = text.toLowerCase().trim();
    if (translationCache.has(cacheKey) && translationCache.get(cacheKey)?.has(targetLang)) {
        return translationCache.get(cacheKey).get(targetLang);
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
            translationCache.get(cacheKey).set(targetLang, translated);
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
            await new Promise((resolve)=>setTimeout(resolve, MIN_TRANSLATION_INTERVAL - timeSinceLastTranslation));
        }
        lastTranslationTime = Date.now();
        // Map language codes to MyMemory format
        const langMap = {
            'en': 'en',
            'bn': 'bn',
            'zh': 'zh-CN'
        };
        const targetLangCode = langMap[targetLang];
        // Use MyMemory Translation API
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLangCode}`);
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
                await new Promise((resolve)=>setTimeout(resolve, backoffTime));
                // Retry once after backoff
                const retryResponse = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLangCode}`);
                if (retryResponse.ok) {
                    consecutiveFailures = 0; // Reset on success
                    const data = await retryResponse.json();
                    if (data.responseStatus === 200 && data.responseData) {
                        const translatedText = data.responseData.translatedText;
                        if (!translationCache.has(cacheKey)) {
                            translationCache.set(cacheKey, new Map());
                        }
                        translationCache.get(cacheKey).set(targetLang, translatedText);
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
            translationCache.get(cacheKey).set(targetLang, translatedText);
            return translatedText;
        } else {
            throw new Error(`Translation API returned status: ${data.responseStatus}`);
        }
    } catch (error) {
        // Only log errors occasionally to avoid console spam
        if (Math.random() < 0.1) {
            console.error('Translation error for text:', text.substring(0, 50) + '...', 'Error:', error);
        }
        // Return original text if all fails
        return text;
    }
}
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            // Load language from localStorage
            const savedLang = localStorage.getItem('language');
            if (savedLang && [
                'en',
                'bn',
                'zh'
            ].includes(savedLang)) {
                setLanguageState(savedLang);
            }
        }
    }["LanguageProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };
    const t = (text)=>{
        // For immediate synchronous translation, return original text
        // The actual translation happens asynchronously
        return text;
    };
    const translate = async (text)=>{
        if (language === 'en') return text;
        return translateText(text, language);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t,
            translate
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 467,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "OTAdLW39ujyBSsdkqvoXPqjz4Tc=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cms-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cmsGet",
    ()=>cmsGet,
    "cmsPost",
    ()=>cmsPost,
    "cmsPut",
    ()=>cmsPut,
    "peekCmsCache",
    ()=>peekCmsCache,
    "prefetchCms",
    ()=>prefetchCms,
    "subscribeCmsLive",
    ()=>subscribeCmsLive,
    "useLiveCms",
    ()=>useLiveCms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const cache = new Map();
const inflight = new Map();
const cacheListeners = new Set();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const cacheTimestamps = new Map();
function notifyCache(collection) {
    cacheListeners.forEach((listener)=>listener(collection));
}
function writeCache(collection, data) {
    cache.set(collection, data);
    cacheTimestamps.set(collection, Date.now());
    notifyCache(collection);
}
function peekCmsCache(collection) {
    const timestamp = cacheTimestamps.get(collection);
    if (timestamp && Date.now() - timestamp > CACHE_TTL) {
        cache.delete(collection);
        cacheTimestamps.delete(collection);
        return undefined;
    }
    return cache.get(collection);
}
async function cmsGet(collection, options) {
    const cached = peekCmsCache(collection);
    if (!options?.force && cached !== undefined) {
        return cached;
    }
    const pending = inflight.get(collection);
    if (pending) return pending;
    const request = fetch(`/api/cms/${collection}`, {
        cache: "no-store"
    }).then(async (res)=>{
        if (!res.ok) throw new Error(`Failed to load ${collection}`);
        const data = await res.json();
        writeCache(collection, data);
        return data;
    }).finally(()=>{
        inflight.delete(collection);
    });
    inflight.set(collection, request);
    return request;
}
function prefetchCms(collections) {
    collections.forEach((collection)=>{
        void cmsGet(collection).catch(()=>undefined);
    });
}
async function cmsPut(collection, data) {
    const res = await fetch(`/api/cms/${collection}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`Failed to save ${collection}`);
    const next = await res.json();
    // Invalidate cache to force fresh fetch
    cache.delete(collection);
    cacheTimestamps.delete(collection);
    writeCache(collection, next);
    // Notify all listeners that this collection was updated
    notifyCache(collection);
    return next;
}
async function cmsPost(collection, item) {
    const res = await fetch(`/api/cms/${collection}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });
    if (!res.ok) throw new Error(`Failed to add to ${collection}`);
    const body = await res.json();
    const { emailed: _e, emailError: _err, inbox: _box, ...created } = body;
    const current = cache.get(collection);
    if (Array.isArray(current)) {
        writeCache(collection, [
            created,
            ...current
        ]);
    } else {
        cache.delete(collection);
    }
    return body;
}
const liveHandlers = new Set();
let liveSource = null;
function ensureLiveStream() {
    if (("TURBOPACK compile-time value", "object") === "undefined" || liveSource) return;
    liveSource = new EventSource("/api/live");
    liveSource.onmessage = (event)=>{
        try {
            const payload = JSON.parse(event.data);
            const collection = payload.collection || "";
            liveHandlers.forEach((handler)=>handler(collection));
        } catch  {
        /* ignore */ }
    };
}
function subscribeCmsLive(handler) {
    ensureLiveStream();
    liveHandlers.add(handler);
    return ()=>{
        liveHandlers.delete(handler);
        if (liveHandlers.size === 0 && liveSource) {
            liveSource.close();
            liveSource = null;
        }
    };
}
function useLiveCms(collection, fallback, alsoWatch = []) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLiveCms.useState": ()=>peekCmsCache(collection) ?? fallback
    }["useLiveCms.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLiveCms.useState": ()=>!cache.has(collection)
    }["useLiveCms.useState"]);
    const reload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveCms.useCallback[reload]": async (force = true)=>{
            try {
                const next = await cmsGet(collection, {
                    force
                });
                setData(next);
            } catch (error) {
                console.error(error);
            } finally{
                setLoading(false);
            }
        }
    }["useLiveCms.useCallback[reload]"], [
        collection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLiveCms.useEffect": ()=>{
            const cached = peekCmsCache(collection);
            if (cached !== undefined) {
                setData(cached);
                setLoading(false);
                void reload(true);
            } else {
                setLoading(true);
                void reload(false);
            }
            const onCache = {
                "useLiveCms.useEffect.onCache": (updated)=>{
                    if (updated !== collection) return;
                    const next = peekCmsCache(collection);
                    if (next !== undefined) {
                        setData(next);
                        setLoading(false);
                    }
                }
            }["useLiveCms.useEffect.onCache"];
            cacheListeners.add(onCache);
            // Re-enable live updates with debounce to prevent navigation blocking
            const watched = new Set([
                collection,
                ...alsoWatch
            ]);
            let reloadTimeout = null;
            const unsubscribeLive = subscribeCmsLive({
                "useLiveCms.useEffect.unsubscribeLive": (updated)=>{
                    if (updated === "hello" || watched.has(updated)) {
                        // Debounce reload to prevent rapid successive updates
                        if (reloadTimeout) clearTimeout(reloadTimeout);
                        reloadTimeout = setTimeout({
                            "useLiveCms.useEffect.unsubscribeLive": ()=>void reload(true)
                        }["useLiveCms.useEffect.unsubscribeLive"], 50);
                    }
                }
            }["useLiveCms.useEffect.unsubscribeLive"]);
            return ({
                "useLiveCms.useEffect": ()=>{
                    cacheListeners.delete(onCache);
                    unsubscribeLive();
                    if (reloadTimeout) clearTimeout(reloadTimeout);
                }
            })["useLiveCms.useEffect"];
        }
    }["useLiveCms.useEffect"], [
        collection,
        reload,
        alsoWatch.join("|")
    ]);
    const save = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLiveCms.useCallback[save]": async (next)=>{
            setData(next);
            await cmsPut(collection, next);
            // Force reload to ensure fresh data from server
            void reload(true);
        }
    }["useLiveCms.useCallback[save]"], [
        collection,
        reload
    ]);
    return {
        data,
        setData,
        loading,
        reload: ()=>reload(true),
        save
    };
}
_s(useLiveCms, "hrEcrJZC9yWUsOnwrOpjLpw3HtY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/site-content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>courses,
    "faqs",
    ()=>faqs,
    "inboundDestinations",
    ()=>inboundDestinations,
    "investmentSectors",
    ()=>investmentSectors,
    "navServices",
    ()=>navServices,
    "outboundRegions",
    ()=>outboundRegions,
    "processEducation",
    ()=>processEducation,
    "processInbound",
    ()=>processInbound,
    "processInvestment",
    ()=>processInvestment,
    "processOutbound",
    ()=>processOutbound,
    "siteContact",
    ()=>siteContact
]);
const siteContact = {
    phone: "+880 1234-567890",
    phoneHref: "tel:+8801234567890",
    email: "msutsho5@gmail.com",
    address: "Jurain, Dhaka, Bangladesh",
    hours: "Sat–Thu · 9:00 AM – 6:00 PM",
    whatsapp: "https://wa.me/8801234567890"
};
const navServices = [
    {
        name: "Inbound Tourism",
        href: "/services/inbound-tourism",
        blurb: "Guided Bangladesh journeys, visas & local hosts"
    },
    {
        name: "Outbound Tourism",
        href: "/services/outbound-tourism",
        blurb: "International trips, flights & visa processing"
    },
    {
        name: "Foreign Investment",
        href: "/services/foreign-investment",
        blurb: "Market entry, partners & BRI advisory"
    },
    {
        name: "Teaching Curriculum",
        href: "/services/teaching-curriculum",
        blurb: "English, Mandarin & corporate training"
    }
];
const inboundDestinations = [
    {
        name: "Cox's Bazar",
        tag: "Coast",
        days: "3–5 days",
        summary: "The world's longest natural sea beach, fishing villages, and sunset walks."
    },
    {
        name: "Sundarbans",
        tag: "Wildlife",
        days: "3–4 days",
        summary: "UNESCO mangrove forest, river cruises, and Royal Bengal Tiger habitat."
    },
    {
        name: "Sylhet",
        tag: "Tea & Hills",
        days: "2–4 days",
        summary: "Tea estates, waterfalls, and shrine trails in the northeast."
    },
    {
        name: "Dhaka Heritage",
        tag: "City",
        days: "1–2 days",
        summary: "Old Dhaka, Lalbagh Fort, riverfront life, and craft markets."
    },
    {
        name: "Chittagong Hill Tracts",
        tag: "Culture",
        days: "4–6 days",
        summary: "Indigenous communities, lakes, and hill-road landscapes."
    },
    {
        name: "Rajshahi & Paharpur",
        tag: "History",
        days: "2–3 days",
        summary: "Buddhist ruins, silk weaving, and mango-country heritage."
    }
];
const outboundRegions = [
    {
        name: "China & East Asia",
        focus: "Business, study, family visits",
        visa: "Full visa file support"
    },
    {
        name: "Southeast Asia",
        focus: "Leisure & group tours",
        visa: "E-visa / on-arrival guidance"
    },
    {
        name: "Middle East",
        focus: "Umrah, work & family",
        visa: "Embassy coordination"
    },
    {
        name: "Europe",
        focus: "Study, tourism, Schengen",
        visa: "Appointment & documentation"
    }
];
const investmentSectors = [
    {
        name: "RMG & Textiles",
        note: "Joint ventures, sourcing, factory visits"
    },
    {
        name: "Infrastructure",
        note: "Logistics, energy, and BRI-linked projects"
    },
    {
        name: "Agribusiness",
        note: "Processing, cold chain, export partnerships"
    },
    {
        name: "ICT & Services",
        note: "Outsourcing, education tech, market entry"
    }
];
const courses = [
    {
        name: "Business English",
        level: "A2–C1",
        format: "In-person / online",
        weeks: "8–16 weeks"
    },
    {
        name: "Mandarin for Business",
        level: "HSK 1–4",
        format: "Small groups",
        weeks: "12 weeks"
    },
    {
        name: "Tourism Chinese",
        level: "Beginner+",
        format: "Workshops",
        weeks: "6 weeks"
    },
    {
        name: "Corporate Communication",
        level: "Custom",
        format: "On-site",
        weeks: "Flexible"
    }
];
const faqs = {
    home: [
        {
            q: "What does BenuWorld actually do?",
            a: "We are a Dhaka-based consultancy covering inbound and outbound travel, foreign investment introductions, and language / curriculum training especially for China – Bangladesh work."
        },
        {
            q: "Do you work with individuals or companies?",
            a: "Both. Families book tours and visas; companies use us for market visits, partner search, training, and bilingual coordination."
        },
        {
            q: "Which languages can you support?",
            a: "English, Bangla, and Mandarin. That is core to how we host Chinese clients and brief Bangladeshi teams."
        },
        {
            q: "How do I start?",
            a: "Send an inquiry on the Contact page with your dates, destination or sector, and group size. We reply with a scoped proposal."
        }
    ],
    inbound: [
        {
            q: "Can you arrange visas for visitors to Bangladesh?",
            a: "Yes. We advise on visa types, invitation letters, and itinerary documents, then coordinate local hosting once guests arrive."
        },
        {
            q: "Do you offer Chinese-speaking guides?",
            a: "Yes. Mandarin-speaking hosts are available for FIT and group tours, plus bilingual printed itineraries."
        },
        {
            q: "How far in advance should we book?",
            a: "Four to six weeks is comfortable for custom itineraries. Peak winter and festival dates need more lead time."
        }
    ],
    outbound: [
        {
            q: "Which destinations do you handle most?",
            a: "China, Southeast Asia, the Middle East, and selected European study or leisure routes, depending on season and visa windows."
        },
        {
            q: "Do you process visas in-house?",
            a: "We prepare complete files, book appointments where required, and track status. Consular decisions remain with the embassy."
        },
        {
            q: "Can you book flights and hotels?",
            a: "Yes — air, hotels, insurance, and local transfers can be packaged or billed separately."
        }
    ],
    investment: [
        {
            q: "Are you a licensed investment bank?",
            a: "No. We provide consultancy, introductions, due-diligence coordination, and government-liaison support. Legal and financial opinions come from licensed partners."
        },
        {
            q: "Who is this for?",
            a: "Foreign investors exploring Bangladesh, and Bangladeshi firms looking at BRI-linked or overseas partnerships."
        },
        {
            q: "What does a typical engagement look like?",
            a: "Discovery call, sector brief, partner shortlist, visit itinerary, and follow-up on permits or JV structure with your counsel."
        }
    ],
    education: [
        {
            q: "Are classes only in Dhaka?",
            a: "Most in-person sessions are in Dhaka. We also run live online cohorts and on-site corporate workshops."
        },
        {
            q: "Do you issue certificates?",
            a: "Yes, for completed BenuWorld programs. HSK and other external exams are arranged through authorized centers."
        },
        {
            q: "Can you train a company team?",
            a: "Yes. We design short courses around meetings, negotiations, tourism hosting, or factory visits."
        }
    ],
    about: [
        {
            q: "Where are you based?",
            a: "Jurain, Dhaka, with partners we activate in other districts and overseas as projects require."
        },
        {
            q: "How long have you operated?",
            a: "Since 2014, growing from tourism and education into investment facilitation."
        }
    ]
};
const processInbound = [
    {
        step: "01",
        title: "Tell us the brief",
        text: "Dates, group size, language, and must-see places."
    },
    {
        step: "02",
        title: "Receive an itinerary",
        text: "Day-by-day plan, hotels, and transparent costing."
    },
    {
        step: "03",
        title: "Confirm & arrive",
        text: "Visas, meet-and-greet, and a dedicated host."
    },
    {
        step: "04",
        title: "Travel supported",
        text: "24/7 local desk until departure."
    }
];
const processOutbound = [
    {
        step: "01",
        title: "Destination consult",
        text: "Season, budget, and visa likelihood."
    },
    {
        step: "02",
        title: "File & bookings",
        text: "Documents, flights, hotels, insurance."
    },
    {
        step: "03",
        title: "Embassy / e-visa",
        text: "We track appointments and follow-ups."
    },
    {
        step: "04",
        title: "Travel day",
        text: "Final briefing and emergency contacts."
    }
];
const processInvestment = [
    {
        step: "01",
        title: "Scope",
        text: "Sector, capital range, and timeline."
    },
    {
        step: "02",
        title: "Market brief",
        text: "Regulation snapshot and opportunity map."
    },
    {
        step: "03",
        title: "Introductions",
        text: "Vetted partners, site visits, interpreters."
    },
    {
        step: "04",
        title: "Follow-through",
        text: "Permits, structure notes, local coordination."
    }
];
const processEducation = [
    {
        step: "01",
        title: "Placement",
        text: "Level check and learning goals."
    },
    {
        step: "02",
        title: "Curriculum",
        text: "Custom syllabus and materials."
    },
    {
        step: "03",
        title: "Delivery",
        text: "Classes, workshops, or blended study."
    },
    {
        step: "04",
        title: "Review",
        text: "Assessment, certificate, next pathway."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "compressImage",
    ()=>compressImage,
    "generateId",
    ()=>generateId,
    "isImageFile",
    ()=>isImageFile,
    "isVideoFile",
    ()=>isVideoFile,
    "youtubeOrVimeoEmbed",
    ()=>youtubeOrVimeoEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function generateId() {
    // Generate a Sanity-compatible ID with a prefix to avoid conflicts
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 9);
    return `${timestamp}-${random}`;
}
function youtubeOrVimeoEmbed(url) {
    if (!url) return null;
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/) || url.match(/youtube\.com\/shorts\/([\w-]{11})/);
    if (yt?.[1]) return `https://www.youtube.com/embed/${yt[1]}`;
    const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeo?.[1]) return `https://player.vimeo.com/video/${vimeo[1]}`;
    return null;
}
function isVideoFile(url) {
    return /\.(mp4|webm|ogg|mov)(\?|$)/i.test(url);
}
function isImageFile(url) {
    return /\.(jpg|jpeg|png|gif|webp|avif|svg)(\?|$)/i.test(url) || url.startsWith("data:image");
}
async function compressImage(file, maxWidth = 1920, quality = 0.8) {
    if (!file.type.startsWith('image/')) return file;
    return new Promise((resolve)=>{
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        img.onload = ()=>{
            let width = img.width;
            let height = img.height;
            // Calculate new dimensions while maintaining aspect ratio
            if (width > maxWidth) {
                height = height * maxWidth / width;
                width = maxWidth;
            }
            canvas.width = width;
            canvas.height = height;
            // Draw and compress
            ctx?.drawImage(img, 0, 0, width, height);
            canvas.toBlob((blob)=>{
                if (blob) {
                    const compressedFile = new File([
                        blob
                    ], file.name, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });
                    resolve(compressedFile);
                } else {
                    resolve(file);
                }
            }, 'image/jpeg', quality);
        };
        img.onerror = ()=>resolve(file);
        img.src = URL.createObjectURL(file);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_195k2r_._.js.map