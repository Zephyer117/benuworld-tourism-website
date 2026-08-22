(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/gallery/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$CtaBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/CtaBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$MediaBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/MediaBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cms-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cms-helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)");
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
function GalleryPage() {
    _s();
    const { data: media, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveCms"])('media', []);
    const { data: routes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveCms"])('routes', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_INBOUND_ROUTES"]);
    const items = media.filter((item)=>item.type !== 'document' && item.featured);
    const sections = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALLERY_SECTIONS"].map((section)=>({
            section,
            items: items.filter((item)=>item.section === section)
        })).filter((group)=>group.items.length > 0);
    const unassigned = items.filter((item)=>!item.section);
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
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-bg-dark-teal to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 pt-40 pb-16 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-[0.2em] text-secondary-sand mb-4",
                                    children: "Media"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-6xl font-bold font-display mb-4",
                                    children: "Images & video"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-white/85 max-w-2xl",
                                    children: "Explore our collection of images and videos showcasing the beauty and culture of Bangladesh."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                sections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-6 bg-white border-b border-gray-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2",
                        children: sections.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${group.section.toLowerCase().replace(/\s+/g, '-')}`,
                                className: "px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-primary-teal hover:text-white transition-colors",
                                children: group.section
                            }, group.section, false, {
                                fileName: "[project]/src/app/gallery/page.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-16 bg-bg-soft-tint",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: Array.from({
                                length: 6
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "aspect-video rounded-2xl"
                                }, i, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 55,
                            columnNumber: 15
                        }, this) : sections.length === 0 && unassigned.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-white p-12 text-center border border-dashed border-primary-teal/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-4",
                                    children: "No public media yet. Upload in Admin → Media, choose a service section, and mark as featured."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "text-primary-teal font-semibold",
                                    children: "Ask for a briefing instead"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                sections.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: group.section.toLowerCase().replace(/\s+/g, '-'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.18em] text-primary-teal mb-2",
                                                        children: "Service"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/gallery/page.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-3xl font-bold font-display text-text-ink",
                                                        children: group.section
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/gallery/page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                                children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryCard, {
                                                        item: item,
                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mediaHref"])(item, routes)
                                                    }, item.id, false, {
                                                        fileName: "[project]/src/app/gallery/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/gallery/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, group.section, true, {
                                        fileName: "[project]/src/app/gallery/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)),
                                unassigned.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "other",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-[0.18em] text-primary-teal mb-2",
                                                    children: "Unassigned"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/gallery/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold font-display text-text-ink",
                                                    children: "Other files"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/gallery/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 mt-2",
                                                    children: "Assign a service in Admin → Media to move these into a section. Only featured images are shown."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/gallery/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                            children: unassigned.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryCard, {
                                                    item: item,
                                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mediaHref"])(item, routes)
                                                }, item.id, false, {
                                                    fileName: "[project]/src/app/gallery/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/gallery/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/gallery/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/gallery/page.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$CtaBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Use these in a trip brief",
                    text: "Tell us which destinations or sectors you need photographed or filmed next."
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/gallery/page.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/gallery/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(GalleryPage, "9kI0BDtrpCgeB2Hvwc5eIbzR7f4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveCms"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cms$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveCms"]
    ];
});
_c = GalleryPage;
function GalleryCard({ item, href }) {
    const card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-2xl overflow-hidden bg-white shadow-card ${href ? 'hover:shadow-brand transition-shadow' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-video bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$MediaBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: item.url,
                    video: item.type === 'video' ? item.embedUrl || item.url : undefined,
                    alt: item.alt || item.name,
                    className: "h-full min-h-[180px]"
                }, void 0, false, {
                    fileName: "[project]/src/app/gallery/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/gallery/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-sm",
                        children: item.caption || item.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 capitalize mt-1",
                        children: [
                            item.type,
                            href ? ' · Open destination' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/gallery/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/gallery/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/gallery/page.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
    if (!href) return card;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "block",
        children: card
    }, void 0, false, {
        fileName: "[project]/src/app/gallery/page.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c1 = GalleryCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "GalleryPage");
__turbopack_context__.k.register(_c1, "GalleryCard");
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
"[project]/src/components/ui/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSkeleton",
    ()=>CardSkeleton,
    "TextSkeleton",
    ()=>TextSkeleton,
    "default",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Skeleton({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `animate-pulse bg-gray-200 rounded ${className}`
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Skeleton.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
function CardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl overflow-hidden bg-white shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                className: "aspect-video w-full"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Skeleton.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-4 w-3/4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Skeleton.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                        className: "h-3 w-1/2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Skeleton.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Skeleton.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Skeleton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c1 = CardSkeleton;
function TextSkeleton({ lines = 3 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: Array.from({
            length: lines
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skeleton, {
                className: `h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`
            }, i, false, {
                fileName: "[project]/src/components/ui/Skeleton.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Skeleton.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c2 = TextSkeleton;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Skeleton");
__turbopack_context__.k.register(_c1, "CardSkeleton");
__turbopack_context__.k.register(_c2, "TextSkeleton");
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

//# sourceMappingURL=src_1xbcgpp._.js.map