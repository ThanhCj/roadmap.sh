webpackHotUpdate("static/development/pages/[roadmap]/[page].js",{

/***/ "./components/detailed-roadmap/index.js":
/*!**********************************************!*\
  !*** ./components/detailed-roadmap/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/detailed-roadmap/style.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var lib_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/url */ "./lib/url.js");
/* harmony import */ var components_share_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/share-icon */ "./components/share-icon/index.js");
/* harmony import */ var content_site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! content/site */ "./content/site.json");
var content_site__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! content/site */ "./content/site.json", 1);
/* harmony import */ var components_md_renderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/md-renderer */ "./components/md-renderer/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var DetailedRoadmap = function DetailedRoadmap(_ref) {
  var roadmap = _ref.roadmap;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuActive = _useState[0],
      setMenuState = _useState[1];

  var _roadmap$sidebar = roadmap.sidebar,
      sidebar = _roadmap$sidebar === void 0 ? {} : _roadmap$sidebar,
      _roadmap$page = roadmap.page,
      currentPage = _roadmap$page === void 0 ? {} : _roadmap$page,
      _roadmap$author = roadmap.author,
      author = _roadmap$author === void 0 ? {} : _roadmap$author;

  var roadmapPages = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sidebar || {}).map(function (groupTitle) {
    if (groupTitle.startsWith('_')) {
      return;
    }

    return __jsx("div", {
      className: "links-group",
      key: groupTitle
    }, __jsx("h3", null, groupTitle), __jsx("ul", null, sidebar[groupTitle].map(function (page) {
      var isActivePage = page.url === currentPage.url; // e.g. /frontend should mark `/frontend/summary` as active

      var isSummaryPage = page.url === "".concat(currentPage.url, "/summary");
      return __jsx("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          active: isActivePage || isSummaryPage
        }),
        key: page.url
      }, __jsx("a", {
        href: page.url
      }, __jsx("span", {
        className: "bullet"
      }), page.title));
    })));
  });

  var filePath = currentPage.path.replace(/^\//, '');

  var RoadmapContent = __webpack_require__("./content sync recursive ^\\.\\/.*$")("./".concat(filePath))["default"];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["SummaryContainer"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    className: "border-top border-bottom text-center text-md-left"
  }, __jsx("div", {
    className: "container d-flex align-items-center flex-column flex-md-row"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["RoadmapMeta"], null, __jsx("h3", null, roadmap.title), __jsx("p", null, "Roadmap contributed by ", __jsx("a", {
    href: author.url,
    target: "_blank"
  }, author.name), roadmap.contributorsCount > 1 && " and <a href=\"".concat(roadmap.contributorsUrl, "\">").concat(roadmap.contributorsCount, " others</a>"))), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["ShareRoadmap"], {
    className: "mt-2 mt-md-0"
  }, __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], {
    href: content_site__WEBPACK_IMPORTED_MODULE_9__.url.repo,
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithubSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_7__["getFacebookShareUrl"])({
      text: roadmap.title,
      url: roadmap.url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebookSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_7__["getTwitterShareUrl"])({
      text: roadmap.title,
      url: roadmap.url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTwitterSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_7__["getRedditShareUrl"])({
      text: roadmap.title,
      url: roadmap.url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRedditSquare"]
  }))))), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MobileNavHeader"], {
    className: "border-bottom d-block d-md-none"
  }, __jsx("div", {
    className: "container"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["SidebarButton"], {
    onClick: function onClick() {
      return setMenuState(function (prevMenuActive) {
        return !prevMenuActive;
      });
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBars"]
  }), currentPage.title)), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MobileSidebarWrap"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      visible: menuActive
    })
  }, __jsx("div", {
    className: "container"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MobileSidebar"], null, roadmapPages)))), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Summary"], {
    className: "container"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["DesktopSidebarWrap"], {
    className: "d-none d-md-block"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Sidebar"], null, roadmapPages)), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["PageDetail"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["PageTitle"], null, currentPage.title), __jsx(components_md_renderer__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(RoadmapContent, null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailedRoadmap);

/***/ }),

/***/ "./components/guide-body/index.js":
/*!****************************************!*\
  !*** ./components/guide-body/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_md_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/md-renderer */ "./components/md-renderer/index.js");
/* harmony import */ var components_share_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/share-page */ "./components/share-page/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/guide-body/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var GuideBody = function GuideBody(_ref) {
  var guide = _ref.guide;

  var GuideContent = __webpack_require__("./content/guides sync recursive ^\\.\\/.*\\.md$")("./".concat(guide.fileName, ".md"))["default"];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__["GuideBodyWrap"], null, __jsx(components_md_renderer__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(GuideContent, null), guide.author && __jsx(components_share_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: guide.title,
    url: guide.url,
    twitterUsername: guide.author.twitter
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GuideBody);

/***/ }),

/***/ "./components/helmet/index.js":
/*!************************************!*\
  !*** ./components/helmet/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var content_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! content/site */ "./content/site.json");
var content_site__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! content/site */ "./content/site.json", 1);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var prepareTitle = function prepareTitle(givenTitle) {
  givenTitle = givenTitle || content_site__WEBPACK_IMPORTED_MODULE_2__.title;
  return "".concat(givenTitle, " - ").concat(content_site__WEBPACK_IMPORTED_MODULE_2__.name);
};

var prepareDescription = function prepareDescription(givenDescription) {
  return givenDescription || content_site__WEBPACK_IMPORTED_MODULE_2__.description;
}; // noinspection JSUnresolvedLibraryURL


var Helmet = function Helmet(props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    charSet: "UTF-8"
  }), __jsx("title", null, prepareTitle(props.title)), __jsx("meta", {
    name: "description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    name: "author",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.author
  }), __jsx("meta", {
    name: "keywords",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.keywords.join(',')
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"
  }), props.canonical && __jsx("link", {
    rel: "canonical",
    href: props.canonical
  }), __jsx("meta", {
    httpEquiv: "Content-Language",
    content: "en"
  }), __jsx("meta", {
    property: "og:title",
    content: prepareTitle(props.title)
  }), __jsx("meta", {
    property: "og:description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(content_site__WEBPACK_IMPORTED_MODULE_2__.url.web).concat(content_site__WEBPACK_IMPORTED_MODULE_2__.logoSquare)
  }), __jsx("meta", {
    property: "og:url",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.url.web
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    property: "article:publisher",
    content: "https://facebook.com/".concat(content_site__WEBPACK_IMPORTED_MODULE_2__.facebook)
  }), __jsx("meta", {
    property: "og:site_name",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.name
  }), __jsx("meta", {
    property: "article:author",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.author
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@".concat(content_site__WEBPACK_IMPORTED_MODULE_2__.twitter)
  }), __jsx("meta", {
    name: "twitter:title",
    content: prepareTitle(props.title)
  }), __jsx("meta", {
    name: "twitter:description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    name: "twitter:image",
    content: "".concat(content_site__WEBPACK_IMPORTED_MODULE_2__.url.web).concat(content_site__WEBPACK_IMPORTED_MODULE_2__.logoSquare)
  }), __jsx("meta", {
    name: "twitter:image:alt",
    content: "roadmap.sh"
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/manifest/apple-touch-icon.png"
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#101010"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#848a9a"
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest/manifest.json"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/manifest/icon32.png"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/manifest/icon16.png"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/manifest/favicon.ico",
    type: "image/x-icon"
  }), __jsx("link", {
    rel: "icon",
    href: "/manifest/favicon.ico",
    type: "image/x-icon"
  }), "" && false);
};

/* harmony default export */ __webpack_exports__["default"] = (Helmet);

/***/ }),

/***/ "./components/page-footer/index.js":
/*!*****************************************!*\
  !*** ./components/page-footer/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var content_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! content/site */ "./content/site.json");
var content_site__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! content/site */ "./content/site.json", 1);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.js */ "./components/page-footer/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PageFooter = function PageFooter() {
  return __jsx(_style_js__WEBPACK_IMPORTED_MODULE_3__["FooterWrap"], {
    className: "border-top"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "foot-cols-wrap row"
  }, __jsx("div", {
    className: "site-meta-wrap col-12 col-sm-12 col-lg col-xl col-md-12"
  }, __jsx("div", {
    className: "site-meta"
  }, __jsx("div", {
    className: "brand-detail"
  }, __jsx("a", {
    href: "/",
    className: "brand"
  }, __jsx("img", {
    src: "/brand.png",
    alt: ""
  }), " roadmap.sh"), __jsx("span", {
    className: "preposition"
  }, "by"), __jsx("a", {
    href: "https://twitter.com/kamranahmedse",
    target: "_blank",
    className: "follow-author"
  }, "@kamranahmedse")), __jsx("div", {
    className: "brand-explanation"
  }, __jsx("p", null, "Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career.")), __jsx("p", {
    className: "meta-links"
  }, "\xA9 roadmap.sh \xB7 \xA0 ", __jsx("a", {
    href: "/about"
  }, "FAQ"), " \xB7 \xA0 ", __jsx("a", {
    href: "/terms"
  }, "Terms"), " \xB7 \xA0 ", __jsx("a", {
    href: "/privacy"
  }, "Privacy")))), __jsx("div", {
    className: "site-contribute foot-col col-12 col-sm-4 col-lg-2"
  }, __jsx("ul", null, __jsx("li", {
    className: "foot-header"
  }, "Contribute"), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.addGuide,
    target: "_blank"
  }, "Write a Guide")), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.addRoadmap,
    target: "_blank"
  }, "Submit a Roadmap")), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.addResources,
    target: "_blank"
  }, "Add resources")), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.repo,
    target: "_blank"
  }, "Codebase")))), __jsx("div", {
    className: "site-learn foot-col col-12 col-sm-4 col-lg-2"
  }, __jsx("ul", null, __jsx("li", {
    className: "foot-header"
  }, "Learn"), __jsx("li", null, __jsx("a", {
    href: "/guides"
  }, "Read Guides")), __jsx("li", null, __jsx("a", {
    href: "/roadmaps"
  }, "View Roadmaps")), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.contribute,
    target: "_blank"
  }, "Contribute")))), __jsx("div", {
    className: "site-learn foot-col col-12 col-sm-4 col-lg-2"
  }, __jsx("ul", null, __jsx("li", {
    className: "foot-header"
  }, "Most Visited"), __jsx("li", null, __jsx("a", {
    href: "/frontend"
  }, "Frontend Roadmap")), __jsx("li", null, __jsx("a", {
    href: "/backend"
  }, "Backend Roadmap")), __jsx("li", null, __jsx("a", {
    href: "/devops"
  }, "DevOps Roadmap")), __jsx("li", null, __jsx("a", {
    href: "/roadmaps"
  }, "Upcoming")))))), "" && false);
};

/* harmony default export */ __webpack_exports__["default"] = (PageFooter);

/***/ }),

/***/ "./components/roadmap-header/index.js":
/*!********************************************!*\
  !*** ./components/roadmap-header/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var components_badges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/badges */ "./components/badges/index.js");
/* harmony import */ var content_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! content/site */ "./content/site.json");
var content_site__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! content/site */ "./content/site.json", 1);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/roadmap-header/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var RoadmapHeader = function RoadmapHeader(_ref) {
  var roadmap = _ref.roadmap;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    className: "border-bottom"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Title"], null, roadmap.title), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Description"], null, roadmap.description), __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgesList"], {
    className: "mt-4"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "/roadmaps"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["DarkBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "d-none d-md-block",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowLeft"]
  }), "Other Roadmaps")), roadmap.upcoming && __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "/signup"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["SecondaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "d-none d-md-block",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"]
  }), "Upcoming Roadmap")), !roadmap.upcoming && __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "".concat(content_site__WEBPACK_IMPORTED_MODULE_4__.url.issue, "?title=[").concat(roadmap.title, "] - Title Here"),
    target: "_blank",
    className: "d-none d-md-block"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["SecondaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHandshake"]
  }), "Suggest Changes")), __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "/signup"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["PrimaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "d-none d-md-block",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"]
  }), "Send me Updates"))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadmapHeader);

/***/ }),

/***/ "./components/roadmap-summary/index.js":
/*!*********************************************!*\
  !*** ./components/roadmap-summary/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/roadmap-summary/style.js");
/* harmony import */ var components_guide_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/guide-body */ "./components/guide-body/index.js");
/* harmony import */ var components_roadmap_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/roadmap-header */ "./components/roadmap-header/index.js");
/* harmony import */ var components_share_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/share-page */ "./components/share-page/index.js");
/* harmony import */ var components_md_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/md-renderer */ "./components/md-renderer/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var RoadmapSummary = function RoadmapSummary(_ref) {
  var roadmap = _ref.roadmap;

  if (roadmap.upcoming) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_roadmap_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      roadmap: roadmap
    }), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["UpcomingContainer"], null, __jsx(components_guide_body__WEBPACK_IMPORTED_MODULE_2__["default"], {
      guide: {
        fileName: 'upcoming'
      }
    })));
  }

  var filePath = roadmap.path.replace(/^\//, '');

  var RoadmapContent = __webpack_require__("./content sync recursive ^\\.\\/.*$")("./".concat(filePath))["default"];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["SummaryContainer"], null, __jsx(components_roadmap_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    roadmap: roadmap
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Summary"], {
    className: "container"
  }, __jsx(components_md_renderer__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(RoadmapContent, null)), __jsx(components_share_page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: roadmap.description,
    url: roadmap.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadmapSummary);

/***/ }),

/***/ "./components/site-nav/index.js":
/*!**************************************!*\
  !*** ./components/site-nav/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/site-nav/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SiteNav = function SiteNav() {
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["HeaderWrap"], null, __jsx("div", {
    className: "top-row container"
  }, __jsx("div", {
    className: "flex-grow-1 brand"
  }, __jsx("a", {
    href: "/"
  }, __jsx("img", {
    src: "/brand.png",
    alt: ""
  }))), __jsx("div", {
    className: "nav-links"
  }, __jsx("a", {
    href: "/roadmaps"
  }, "Roadmaps"), __jsx("a", {
    href: "/guides"
  }, "Guides"), __jsx("a", {
    href: "/sponsors"
  }, "Sponsors"), __jsx("a", {
    href: "/about",
    className: "d-none d-md-inline-block"
  }, "FAQ"), __jsx("a", {
    href: "/signup",
    className: "signup"
  }, "Subscribe"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SiteNav);

/***/ }),

/***/ "./content sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./content sync ^\.\/.*$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authors": "./content/authors.json",
	"./authors.json": "./content/authors.json",
	"./guides": "./content/guides.json",
	"./guides.json": "./content/guides.json",
	"./guides/design-patterns-for-humans.md": "./content/guides/design-patterns-for-humans.md",
	"./guides/dns-in-one-picture.md": "./content/guides/dns-in-one-picture.md",
	"./guides/history-of-javascript.md": "./content/guides/history-of-javascript.md",
	"./guides/http-caching.md": "./content/guides/http-caching.md",
	"./guides/journey-to-http2.md": "./content/guides/journey-to-http2.md",
	"./guides/levels-of-seniority.md": "./content/guides/levels-of-seniority.md",
	"./guides/torrent-client.md": "./content/guides/torrent-client.md",
	"./guides/upcoming.md": "./content/guides/upcoming.md",
	"./pages/about.md": "./content/pages/about.md",
	"./project/backend-map": "./content/project/backend-map.json",
	"./project/backend-map.json": "./content/project/backend-map.json",
	"./project/devops-map": "./content/project/devops-map.json",
	"./project/devops-map.json": "./content/project/devops-map.json",
	"./project/disclaimer": "./content/project/disclaimer.json",
	"./project/disclaimer.json": "./content/project/disclaimer.json",
	"./project/frontend-map": "./content/project/frontend-map.json",
	"./project/frontend-map.json": "./content/project/frontend-map.json",
	"./project/intro-map": "./content/project/intro-map.json",
	"./project/intro-map.json": "./content/project/intro-map.json",
	"./roadmaps": "./content/roadmaps.json",
	"./roadmaps.json": "./content/roadmaps.json",
	"./roadmaps/1-frontend/0-About/0-Summary-detailed.md": "./content/roadmaps/1-frontend/0-About/0-Summary-detailed.md",
	"./roadmaps/1-frontend/0-About/0-Summary.md": "./content/roadmaps/1-frontend/0-About/0-Summary.md",
	"./roadmaps/1-frontend/0-About/1-Skill-Summary.md": "./content/roadmaps/1-frontend/0-About/1-Skill-Summary.md",
	"./roadmaps/1-frontend/0-About/2-Job-Titles.md": "./content/roadmaps/1-frontend/0-About/2-Job-Titles.md",
	"./roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md": "./content/roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md",
	"./roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md": "./content/roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md",
	"./roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md": "./content/roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md",
	"./roadmaps/1-frontend/2-Learn/1-Job-Ready.md": "./content/roadmaps/1-frontend/2-Learn/1-Job-Ready.md",
	"./roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md": "./content/roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md",
	"./roadmaps/1-frontend/2-Learn/3-Build-Tools.md": "./content/roadmaps/1-frontend/2-Learn/3-Build-Tools.md",
	"./roadmaps/1-frontend/2-Learn/4-Modern-Applications.md": "./content/roadmaps/1-frontend/2-Learn/4-Modern-Applications.md",
	"./roadmaps/1-frontend/2-Learn/5-Automated-Testing.md": "./content/roadmaps/1-frontend/2-Learn/5-Automated-Testing.md",
	"./roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md": "./content/roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md",
	"./roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md": "./content/roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md",
	"./roadmaps/1-frontend/2-Learn/8-Go-Beyond.md": "./content/roadmaps/1-frontend/2-Learn/8-Go-Beyond.md",
	"./roadmaps/1-frontend/meta": "./content/roadmaps/1-frontend/meta.json",
	"./roadmaps/1-frontend/meta.json": "./content/roadmaps/1-frontend/meta.json",
	"./roadmaps/2-backend/0-About/0-Summary.md": "./content/roadmaps/2-backend/0-About/0-Summary.md",
	"./roadmaps/2-backend/1-Landscape/0-Summary.md": "./content/roadmaps/2-backend/1-Landscape/0-Summary.md",
	"./roadmaps/2-backend/1-Landscape/1-Junior.md": "./content/roadmaps/2-backend/1-Landscape/1-Junior.md",
	"./roadmaps/2-backend/1-Landscape/2-Intermediate.md": "./content/roadmaps/2-backend/1-Landscape/2-Intermediate.md",
	"./roadmaps/2-backend/1-Landscape/3-Senior.md": "./content/roadmaps/2-backend/1-Landscape/3-Senior.md",
	"./roadmaps/2-backend/meta": "./content/roadmaps/2-backend/meta.json",
	"./roadmaps/2-backend/meta.json": "./content/roadmaps/2-backend/meta.json",
	"./roadmaps/3-devops/0-About/0-Summary.md": "./content/roadmaps/3-devops/0-About/0-Summary.md",
	"./roadmaps/3-devops/1-Landscape/1-Junior.md": "./content/roadmaps/3-devops/1-Landscape/1-Junior.md",
	"./roadmaps/3-devops/1-Landscape/2-Intermediate.md": "./content/roadmaps/3-devops/1-Landscape/2-Intermediate.md",
	"./roadmaps/3-devops/1-Landscape/3-Senior.md": "./content/roadmaps/3-devops/1-Landscape/3-Senior.md",
	"./roadmaps/3-devops/meta": "./content/roadmaps/3-devops/meta.json",
	"./roadmaps/3-devops/meta.json": "./content/roadmaps/3-devops/meta.json",
	"./roadmaps/4-fullstack/0-About/0-Summary.md": "./content/roadmaps/4-fullstack/0-About/0-Summary.md",
	"./roadmaps/4-fullstack/meta": "./content/roadmaps/4-fullstack/meta.json",
	"./roadmaps/4-fullstack/meta.json": "./content/roadmaps/4-fullstack/meta.json",
	"./roadmaps/5-qa/0-About/0-Summary.md": "./content/roadmaps/5-qa/0-About/0-Summary.md",
	"./roadmaps/5-qa/meta": "./content/roadmaps/5-qa/meta.json",
	"./roadmaps/5-qa/meta.json": "./content/roadmaps/5-qa/meta.json",
	"./site": "./content/site.json",
	"./site.json": "./content/site.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./content sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./content/authors.json":
/*!******************************!*\
  !*** ./content/authors.json ***!
  \******************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"username\":\"kamranahmedse\",\"name\":\"Kamran Ahmed\",\"twitter\":\"kamranahmedse\",\"picture\":\"/authors/kamranahmedse.jpeg\",\"bio\":\"Lead engineer at Tajawal. Lover of all things web and opensource. Created roadmap.sh to help the confused ones.\"},{\"username\":\"jesse\",\"name\":\"Jesse Li\",\"twitter\":\"__jesse_li\",\"picture\":\"/authors/jesse.png\",\"bio\":\"Software engineer.\"}]");

/***/ }),

/***/ "./content/guides sync recursive ^\\.\\/.*\\.md$":
/*!******************************************!*\
  !*** ./content/guides sync ^\.\/.*\.md$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./design-patterns-for-humans.md": "./content/guides/design-patterns-for-humans.md",
	"./dns-in-one-picture.md": "./content/guides/dns-in-one-picture.md",
	"./history-of-javascript.md": "./content/guides/history-of-javascript.md",
	"./http-caching.md": "./content/guides/http-caching.md",
	"./journey-to-http2.md": "./content/guides/journey-to-http2.md",
	"./levels-of-seniority.md": "./content/guides/levels-of-seniority.md",
	"./torrent-client.md": "./content/guides/torrent-client.md",
	"./upcoming.md": "./content/guides/upcoming.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./content/guides sync recursive ^\\.\\/.*\\.md$";

/***/ }),

/***/ "./content/guides.json":
/*!*****************************!*\
  !*** ./content/guides.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Building a BitTorrent Client\",\"description\":\"Learn everything you need to know about BitTorrent by writing a client in Go\",\"url\":\"/guides/torrent-client\",\"fileName\":\"torrent-client\",\"featured\":true,\"author\":\"jesse\",\"updatedAt\":\"2020-01-17T15:48:21.191Z\",\"createdAt\":\"2020-01-17T15:48:21.191Z\",\"canonical\":\"https://blog.jse.li/posts/torrent/\"},{\"title\":\"Levels of Seniority\",\"description\":\"How to Step Up as a Junior, Mid Level or a Senior Developer?\",\"url\":\"/guides/levels-of-seniority\",\"fileName\":\"levels-of-seniority\",\"featured\":true,\"author\":\"kamranahmedse\",\"updatedAt\":\"2019-12-03T12:13:00.860Z\",\"createdAt\":\"2019-12-03T12:13:00.860Z\"},{\"title\":\"Design Patterns for Humans\",\"description\":\"A language agnostic, ultra-simplified explanation to design patterns\",\"url\":\"/guides/design-patterns-for-humans\",\"fileName\":\"design-patterns-for-humans\",\"featured\":true,\"author\":\"kamranahmedse\",\"updatedAt\":\"2019-10-09T12:00:00.860Z\",\"createdAt\":\"2019-01-23T17:00:00.860Z\"},{\"title\":\"Journey to HTTP/2\",\"description\":\"The evolution of HTTP. How it all started and where we stand today\",\"url\":\"/guides/journey-to-http2\",\"fileName\":\"journey-to-http2\",\"featured\":true,\"author\":\"kamranahmedse\",\"createdAt\":\"2018-12-04T12:00:00.860Z\",\"updatedAt\":\"2018-12-04T12:00:00.860Z\",\"draft\":true},{\"title\":\"DNS in One Picture\",\"description\":\"Quick illustrative guide on how a website is found on the internet.\",\"url\":\"/guides/dns-in-one-picture\",\"fileName\":\"dns-in-one-picture\",\"featured\":true,\"author\":\"kamranahmedse\",\"updatedAt\":\"2018-12-04T12:00:00.860Z\",\"createdAt\":\"2018-12-04T17:00:00.860Z\"},{\"title\":\"HTTP Caching\",\"description\":\"Everything you need to know about web caching\",\"url\":\"/guides/http-caching\",\"fileName\":\"http-caching\",\"featured\":true,\"author\":\"kamranahmedse\",\"createdAt\":\"2018-11-29T17:00:00.860Z\",\"updatedAt\":\"2018-11-29T17:00:00.860Z\"},{\"title\":\"Brief History of JavaScript\",\"description\":\"How JavaScript was introduced and evolved over the years\",\"url\":\"/guides/history-of-javascript\",\"fileName\":\"history-of-javascript\",\"featured\":true,\"author\":\"kamranahmedse\",\"createdAt\":\"2017-10-28T17:00:00.860Z\",\"updatedAt\":\"2017-10-28T17:00:00.860Z\"}]");

/***/ }),

/***/ "./content/guides/design-patterns-for-humans.md":
/*!******************************************************!*\
  !*** ./content/guides/design-patterns-for-humans.md ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

/***/ }),

/***/ "./content/guides/dns-in-one-picture.md":
/*!**********************************************!*\
  !*** ./content/guides/dns-in-one-picture.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "DNS or Domain Name System is one of the fundamental blocks of the internet. As a developer, you should have at-least the basic understanding of how it works. This article is a brief introduction to what is DNS and how it works."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "DNS at its simplest is like a phonebook on your mobile phone. Whenever you have to call one of your contacts, you can either dial their number from your memory or use their name which will then be used by your mobile phone to search their number in your phone book to call them. Every time you make a new friend, or your existing friend gets a mobile phone, you have to memorize their phone number or save it in your phonebook to be able to call them later on. DNS or Domain Name System, in a similar fashion, is a mechanism that allows you to browse websites on the internet. Just like your mobile phone does not know how to call without knowing the phone number, your browser does not know how to open a website just by the domain name; it needs to know the IP Address for the website to open. You can either type the IP Address to open, or provide the domain name and press enter which will then be used by your browser to find the IP address by going through several hoops. The picture below is the illustration of how your browser finds a website on the internet."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/z9rwm5A.png",
    "alt": null
  }))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./content/guides/history-of-javascript.md":
/*!*************************************************!*\
  !*** ./content/guides/history-of-javascript.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Around 10 years ago, Jeff Atwood (the founder of stackoverflow) made a case that JavaScript is going to be the future and he coined the \u201CAtwood Law\u201D which states that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "Any application that can be written in JavaScript will eventually be written in JavaScript"), ". Fast-forward to today, 10 years later, if you look at it it rings truer than ever. JavaScript is continuing to gain more and more adoption."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "JavaScript is announced"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript was initially created by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://twitter.com/BrendanEich"
  }), "Brendan Eich"), " of NetScape and was first announced in a press release by Netscape in 1995. It has a bizarre history of naming; initally it was named ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Mocha"), " by the creator, which was later renamed to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "LiveScript"), ".  In 1996, about a year later after the release, NetScape decided to rename it to be ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "JavaScript"), " with hopes of capitalizing on the Java community (although JavaScript did not have any relationship with Java) and released Netscape 2.0 with the official support of JavaScript."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "ES1, ES2 and ES3"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In 1996, Netscape decided to submit it to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Ecma_International"
  }), "ECMA International"), " with the hopes of getting it standardized. First edition of the standard specification was released in 1997 and the language was standardized. After the initial release, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ECMAScript"), " was continued to be worked upon and in no-time two more versions were released ECMAScript 2 in 1998 and ECMAScript 3 in 1999."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Decade of Silence and ES4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "After the release of ES3 in 1999, there was a complete silence for a decade and no changes were made to the official standard. There was some work on the fourth edition in the initial days; some of the features that were being discussed included classes, modules, static typings, destructuring etc. It was being targeted to be released by 2008 but was abandoned due to political differences concerning language complexity. However, the vendors kept introducing the extensions to the language and the developers were left scratching their heads \u2014 adding polyfills to battle compatibility issues between different browsers."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "From silence to ES5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Google, Microsoft, Yahoo and other disputers of ES4 came together and decided to work on a less ambition update to ES3 tentatively named ES3.1. But the teams were still fighting about what to include from ES4 and what not. Finally, in 2009 ES5 was released mainly focusing on fixing the compabitility and security issues etc. But there wasn\u2019t much of a splash in the water \u2014 it took ages for the vendors to incorporate the standards and many developers were still using ES3 without being aware of the \u201Cmodern\u201D standards."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Release of ES6 \u2014 ECMASript 2015"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "After a few years of the release of ES5, things started to change, TC39 (the committee under ECMA international responsible for ECMAScript standardization) kept working on the next version of ECMAScript (ES6) which was originally named ES Harmony, before being eventually released with the name ES2015. ES2015 adds significant features and syntactic sugar to allow writing complex applications. Some of the features that ES6 has to offer, include Classes, Modules, Arrows, Enhanced object literals, Template strings, Destructuring, Default param values + rest + spread, Let and Const, Iterators + for..of, Generators, Maps + Sets, Proxies, Symbols, Promises, math + number + string + array + object APIs ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "http://es6-features.org/#Constants"
  }), "etc")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Browser support for ES6 is still scarce but everything that ES6 has to offer is still available to developers by transpiling the ES6 code to ES5. With the release of 6th version of ECMAScript, TC39 decided to move to yearly model of releasing updates to ECMAScript so to make sure that the new features are added as soon as they are approved and we don\u2019t have to wait for the full specification to be drafted and approved \u2014 thus 6th version of ECMAScript was renamed as ECMAScript 2015 or ES2015 before the release in June 2015. And the next versions of ECMAScript were decided to published in June of every year."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Release of ES7 \u2014 ECMASript 2016"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In June 2016, seventh version of ECMAScript was released. As ECMAScript has been moved to an yearly release model, ECMAScript 2016 (ES2016) comparatively did not have much to offer. ES2016 includes just two new features"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Exponentiation operator ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "**")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Array.prototype.includes"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Release of ES8 \u2014 ECMAScript 2017"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The eighth version of ECMAScript was released in June 2017. The key highlight of ES8 was the addition of async functions. Here is the list of new features in ES8"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Object.values()"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Object.entries()")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "String padding i.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "String.prototype.padEnd()"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "String.prototype.padStart()")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "Object.getOwnPropertyDescriptors")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Trailing commas in function parameter lists and calls"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Async functions")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "What is ESNext then?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "ESNext is a dynamic name that refers to whatever the current version of ECMAScript is at the given time. For example, at the time of this writing ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ES2017"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ES8"), " is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ESNext"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "What does the future hold?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Since the release of ES6, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/tc39"
  }), "TC39"), " has quite streamlined their process. TC39operates through a Github organization now and there are ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/tc39/proposals"
  }), "several proposals"), " for new features or syntax to be added to the next versions of ECMAScript. Any one can go ahead and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/tc39/proposals"
  }), "submit a proposal"), " thus resulting in increasing the participation from the community. Every proposal goes through ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://tc39.github.io/process-document/"
  }), "four stages of maturity"), " before it makes it into the specification."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "And that about wraps it up. Feel free to leave your feedback in the comments section below. Also here are the links to original language specifications ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://www.ecma-international.org/ecma-262/6.0/"
  }), "ES6"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://www.ecma-international.org/ecma-262/7.0/"
  }), "ES7"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://www.ecma-international.org/ecma-262/8.0/"
  }), "ES8"), "."));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./content/guides/http-caching.md":
/*!****************************************!*\
  !*** ./content/guides/http-caching.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "As users, we easily get frustrated by the buffering videos, the images that take seconds to load, pages that got stuck because the content is being loaded. Loading the resources from some cache is much faster than fetching the same from the originating server. It reduces latency, speeds up the loading of resources, decreases the load on server, cuts down the bandwidth costs etc. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Introduction"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "What is web cache? It is something that sits somewhere between the client and the server, continuously looking at the requests and their responses, looking for any responses that can be cached. So that there is less time consumed when the same request is made again. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/mJYVvTh.png",
    "alt": "Web Cache"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Note that this image is just to give you an idea. Depending upon the type of cache, the place where it is implemented could vary. More on this later.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before we get into further details, let me give you an overview of the terms that will be used, further in the article"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Client"), " could be your browser or any application requesting the server for some resource"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Origin Server"), ", the source of truth, houses all the content required by the client and is responsible for fulfilling the client requests."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Stale Content"), " is the cached but expired content"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Fresh Content"), " is the content available in cache that hasn't expired yet"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Cache Validation"), " is the process of contacting the server to check the validity of the cached content and get it updated for when it is going to expire"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Cache Invalidation"), " is the process of removing any stale content available in the cache")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/9MjlzvW.png",
    "alt": null
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Caching Locations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Web cache can be shared or private depending upon the location where it exists. Here is the list of different caching locations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#browser-cache"
  }), "Browser Cache")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#proxy-cache"
  }), "Proxy Cache")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#reverse-proxy-cache"
  }), "Reverse Proxy Cache"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Browser Cache"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You might have noticed that when you click the back button in your browser it takes less time to load the page than the time that it took during the first load; this is the browser cache in play. Browser cache is the most common location for caching and browsers usually reserve some space for it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/mJYVvTh.png",
    "alt": "Web Cache"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A browser cache is limited to just one user and unlike other caches, it can store the \"private\" responses. More on it later."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Proxy Cache"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Unlike browser cache which serves a single user, proxy caches may serve hundreds of different users accessing the same content. They are usually implemented on a broader level by ISPs or any other independent entities for example."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "https://i.imgur.com/3mj6e1O.png",
    "alt": "Proxy Cache"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Reverse Proxy Cache"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Reverse proxy cache or surrogate cache is implemented close to the origin servers in order to reduce the load on server. Unlike proxy caches which are implemented by ISPs etc to reduce the bandwidth usage in a network, surrogates or reverse proxy caches are implemented near to the origin servers by the server administrators to reduce the load on server."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "http://i.imgur.com/Eg4Cru3.png",
    "alt": "Reverse Proxy Cache"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Although you can control the reverse proxy caches (since it is implemented by you on your server) you can not avoid or control browser and proxy caches. And if your website is not configured to use these caches properly, it will still be cached using whatever the defaults are set on these caches."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Caching Headers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "So, how do we control the web cache? Whenever the server emits some response, it is accompanied with some HTTP headers to guide the caches whether and how to cache this response. Content provider is the one that has to make sure to return proper HTTP headers to force the caches on how to cache the content."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#expires"
  }), "Expires")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#pragma"
  }), "Pragma")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#cache-control"
  }), "Cache-Control"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#private"
  }), "private")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#public"
  }), "public")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#no-store"
  }), "no-store")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#no-cache"
  }), "no-cache")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#max-age"
  }), "max-age: seconds")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#s-maxage"
  }), "s-maxage: seconds")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#must-revalidate"
  }), "must-revalidate")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#proxy-revalidate"
  }), "proxy-revalidate")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#mixing-values"
  }), "Mixing Values")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#validators"
  }), "Validators"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#etag"
  }), "ETag")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "#last-modified"
  }), "Last-Modified"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Expires"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before HTTP/1.1 and introduction of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Cache-Control"), ", there was ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Expires"), " header which is simply a timestamp telling the caches how long should some content be considered fresh. Possible value to this header is absolute expiry date; where date has to be in GMT. Below is the sample header"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Expires: Mon, 13 Mar 2017 12:22:00 GMT\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It should be noted that the date cannot be more than a year and if the date format is wrong, content will be considered stale. Also, the clock on cache has to be in sync with the clock on server, otherwise the desired results might not be achieved. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Although, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Expires"), " header is still valid and is supported widely by the caches, preference should be given to HTTP/1.1 successor of it i.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Cache-Control"), ".  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Pragma"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Another one from the old, pre HTTP/1.1 days, is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Pragma"), ". Everything that it could do is now possible using the cache-control header given below. However, one thing I would like to point out about it is, you might see ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Pragma: no-cache"), " being used here and there in hopes of stopping the response from being cached. It might not necessarily work; as HTTP specification discusses it in the request headers and there is no mention of it in the response headers. Rather ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Cache-Control"), " header should be used to control the caching."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Cache-Control"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Cache-Control specifies how long and in what manner should the content be cached. This family of headers was introduced in HTTP/1.1 to overcome the limitations of the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Expires"), " header."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Value for the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Cache-Control"), " header is composite i.e. it can have multiple directive/values. Let's look at the possible values that this header may contain. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "private"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Setting the cache to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "private"), " means that the content will not be cached in any of the proxies and it will only be cached by the client (i.e. browser)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: private\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Having said that, don't let it fool you in to thinking that setting this header will make your data any secure; you still have to use SSL for that purpose. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "public"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If set to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "public"), ", apart from being cached by the client, it can also be cached by the proxies; serving many other users"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: public\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "no-store"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "no-store")), " specifies that the content is not to be cached by any of the caches"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: no-store\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "no-cache"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "no-cache")), " indicates that the cache can be maintained but the cached content is to be re-validated (using ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ETag"), " for example) from the server before being served. That is, there is still a request to server but for validation and not to download the cached content."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: max-age=3600, no-cache, public\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "max-age: seconds"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "max-age")), " specifies the number of seconds for which the content will be cached. For example, if the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "cache-control"), " looks like below:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: max-age=3600, public\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "it would mean that the content is publicly cacheable and will be considered stale after 60 minutes"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "s-maxage: seconds"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "s-maxage")), " here ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "s-"), " prefix stands for shared. This directive specifically targets the shared caches. Like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "max-age"), " it also gets the number of seconds for which something is to be cached. If present, it will override ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "max-age"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "expires"), " headers for shared caching."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: s-maxage=3600, public\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "must-revalidate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "must-revalidate")), " it might happen sometimes that if you have network problems and the content cannot be retrieved from the server, browser may serve stale content without validation. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "must-revalidate"), " avoids that. If this directive is present, it means that stale content cannot be served in any case and the data must be re-validated from the server before serving. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Cache-Control: max-age=3600, public, must-revalidate\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "proxy-revalidate"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "strong"
  }, "proxy-revalidate")), " is similar to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "must-revalidate"), " but it specifies the same for shared or proxy caches. In other words ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "proxy-revalidate"), " is to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "must-revalidate"), " as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "s-maxage"), " is to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "max-age"), ". But why did they not call it ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "s-revalidate"), "?. I have no idea why, if you have any clue please leave a comment below. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "Mixing Values"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You can combine these directives in different ways to achieve different caching behaviors, however ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-cache/no-store"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "public/private"), " are mutually exclusive. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If you specify both ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-store"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-cache"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-store"), " will be given precedence over ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "no-cache"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "; If specified both\nCache-Control: no-store, no-cache\n\n; Below will be considered\nCache-Control: no-store\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "For ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "private/public"), ", for any unauthenticated requests cache is considered ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "public"), " and for any authenticated ones cache is considered ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "private"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Validators"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Up until now we only discussed how the content is cached and how long the cached content is to be considered fresh but we did not discuss how the client does the validation from the server. Below we discuss the headers used for this purpose."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "ETag"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Etag or \"entity tag\" was introduced in HTTP/1.1 specs. Etag is just a unique identifier that the server attaches with some resource. This ETag is later on used by the client to make conditional HTTP requests stating ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"give me this resource if ETag is not same as the ETag that I have\""), " and the content is downloaded only if the etags do not match. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Method by which ETag is generated is not specified in the HTTP docs and usually some collision-resistant hash function is used to assign etags to each version of a resource. There could be two types of etags i.e. strong and weak"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "ETag: \"j82j8232ha7sdh0q2882\" - Strong Etag\nETag: W/\"j82j8232ha7sdh0q2882\" - Weak Etag (prefixed with `W/`)\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A strong validating ETag means that two resources are ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "exactly"), " same and there is no difference between them at all. While a weak ETag means that two resources are although not strictly same but could be considered same. Weak etags might be useful for dynamic content, for example."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now you know what etags are but how does the browser make this request? by making a request to server while sending the available Etag in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "If-None-Match"), " header."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Consider the scenario, you opened a web page which loaded a logo image with caching period of 60 seconds and ETag of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "abc123xyz"), ". After about 30 minutes you reload the page, browser will notice that the logo which was fresh for 60 seconds is now stale; it will trigger a request to server, sending the ETag of the stale logo image in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "if-none-match"), " header"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "If-None-Match: \"abc123xyz\"\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Server will then compare this ETag with the ETag of the current version of resource. If both etags are matched, server will send back the response of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "304 Not Modified"), " which will tell the client that the copy that it has is still good and it will be considered fresh for another 60 seconds. If both the etags do not match i.e. the logo has likely changed and client will be sent the new logo which it will use to replace the stale logo that it has."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Last-Modified"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Server might include the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " header indicating the date and time at which some content was last modified on."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "Last-Modified: Wed, 15 Mar 2017 12:30:26 GMT\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When the content gets stale, client will make a conditional request including the last modified date that it has inside the header called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "If-Modified-Since"), " to server to get the updated ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " date; if it matches the date that the client has, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " date for the content is updated to be considered fresh for another ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "n"), " seconds. If the received ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " date does not match the one that the client has, content is reloaded from the server and replaced with the content that client has."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "If-Modified-Since: Wed, 15 Mar 2017 12:30:26 GMT\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You might be questioning now, what if the cached content has both the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ETag"), " assigned to it? Well, in that case both are to be used i.e. there will not be any re-downloading of the resource if and only if ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ETag"), " matches the newly retrieved one and so does the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " date. If either the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ETag"), " does not match or the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Last-Modified"), " is greater than the one from the server, content has to be downloaded again. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Where do I start?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now that we have got ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "everything"), " covered, let us put everything in perspective and see how you can use this information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Utilizing Server"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before we get into the possible caching strategies , let me add the fact that most of the servers including Apache and Nginx allow you to implement your caching policy through the server so that you don't have to juggle with headers in your code. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "For example"), ", if you are using Apache and you have your static content placed at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "/static"), ", you can put below ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".htaccess"), " file in the directory to make all the content in it be cached for an year using below"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "# Cache everything for an year\nHeader set Cache-Control \"max-age=31536000, public\"\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You can further use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "filesMatch"), " directive to add conditionals and use different caching strategy for different kinds of files e.g."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "# Cache any images for one year\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), "<"), "filesMatch"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }), "\".(png|jpg|jpeg|gif)$\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), ">")), "\n    Header set Cache-Control \"max-age=31536000, public\"\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), "</"), "filesMatch"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), ">")), "\n\n# Cache any CSS and JS files for a month\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), "<"), "filesMatch"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token attr-name"
  }), "\".(css|js)$\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), ">")), "\n    Header set Cache-Control \"max-age=2628000, public\"\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token tag"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), "</"), "filesMatch"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "span"
  }, {
    "className": "token punctuation"
  }), ">")), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Or if you don't want to use the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".htaccess"), " file you can modify Apache's configuration file ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "http.conf"), ". Same goes for Nginx, you can add the caching information in the location or server block.  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Caching Recommendations"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "There is no golden rule or set standards about how your caching policy should look like, each of the application is different and you have to look and find what suits your application the best. However, just to give you a rough idea"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "You can have aggressive caching (e.g. cache for an year) on any static content and use fingerprinted filenames (e.g. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "style.ju2i90.css"), ") so that the cache is automatically rejected whenever the files are updated.\nAlso it should be noted that you should not cross the upper limit of one year as it ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9"
  }), "might not be honored"), " "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Look and decide do you even need caching for any dynamic content, if yes how long it should be. For example, in case of some RSS feed of a blog there could be the caching of a few hours but there couldn't be any caching for inventory items in an ERP."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Always add the validators (preferably ETags) in your response."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Pay attention while choosing the visibility (private or public) of the cached content. Make sure that you do not accidentally cache any user-specific or sensitive content in any public proxies. When in doubt, do not use cache at all."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Separate the content that changes often from the content that doesn't change that often (e.g. in javascript bundles) so that when it is updated it doesn't need to make the whole cached content stale.  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Test and monitor the caching headers being served by your site. You can use the browser console or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "curl -I http://some-url.com"), " for that purpose. ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "And that about wraps it up. Stay tuned for more!"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./content/guides/journey-to-http2.md":
/*!********************************************!*\
  !*** ./content/guides/journey-to-http2.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "HTTP is the protocol that every web developer should know as it powers the whole web and knowing it is definitely going to help you develop better applications. In this guide, I am going to be discussing what HTTP is, how it came to be, where it is today and how did we get here."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "What is HTTP?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "First things first, what is HTTP? HTTP is the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TCP/IP"), " based application layer communication protocol which standardizes how the client and server communicate with each other. It defines how the content is requested and transmitted across the internet. By application layer protocol, I mean it's just an abstraction layer that standardizes how the hosts (clients and servers) communicate and itself it depends upon ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TCP/IP"), " to get request and response between the client and server. By default TCP port ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "80"), " is used but other ports can be used as well. HTTPS, however, uses port ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "443"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "HTTP/0.9 \u2013 The One Liner (1991)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The first documented version of HTTP was ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://www.w3.org/Protocols/HTTP/AsImplemented.html"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "a"
  }, "HTTP/0.9")), " which was put forward in 1991. It was the simplest protocol ever; having a single method called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "GET"), ". If a client had to access some webpage on the server, it would have made the simple request like below"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "GET /index.html\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "And the response from server would have looked as follows"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "(response body)\n(connection closed)\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "That is, the server would get the request, reply with the HTML in response and as soon as the content has been transferred, the connection will be closed. There were "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "No headers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "GET"), " was the only allowed method "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Response had to be HTML")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "As you can see, the protocol really had nothing more than being a stepping stone for what was to come."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "HTTP/1.0 - 1996"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In 1996, the next version of HTTP i.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " evolved that vastly improved over the original version. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Unlike ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/0.9"), " which was only designed for HTML response, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " could now deal with other response formats i.e. images, video files, plain text or any other content type as well. It added more methods (i.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "POST"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HEAD"), "), request/response formats got changed, HTTP headers got added to both the request and responses, status codes were added to identify the response, character set support was introduced, multi-part types, authorization, caching, content encoding and more was included."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Here is how a sample ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " request and response might have looked like:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "GET / HTTP/1.0\nHost: kamranahmed.info\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)\nAccept: */*\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "As you can see, alongside the request, client has also sent it's personal information, required response type etc. While in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/0.9"), " client could never send such information because there were no headers."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Example response to the request above may have looked like below"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-html"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-html"
  }), "HTTP/1.0 200 OK \nContent-Type: text/plain\nContent-Length: 137582\nExpires: Thu, 05 Dec 1997 16:00:00 GMT\nLast-Modified: Wed, 5 August 1996 15:55:28 GMT\nServer: Apache 0.84\n\n(response body)\n(connection closed)\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In the very beginning of the response there is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " (HTTP followed by the version number), then there is the status code ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "200"), " followed by the reason phrase (or description of the status code, if you will). "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In this newer version, request and response headers were still kept as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ASCII"), " encoded, but the response body could have been of any type i.e. image, video, HTML, plain text or any other content type. So, now that server could send any content type to the client; not so long after the introduction, the term \"Hyper Text\" in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP"), " became misnomer. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HMTP"), " or Hypermedia transfer protocol might have made more sense but, I guess, we are stuck with the name for life."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "One of the major drawbacks of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " were you couldn't have multiple requests per connection. That is, whenever a client will need something from the server, it will have to open a new TCP connection and after that single request has been fulfilled, connection will be closed. And for any next requirement, it will have to be on a new connection. Why is it bad? Well, let's assume that you visit a webpage having ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "10"), " images, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "5"), " stylesheets and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "5"), " javascript files, totalling to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "20"), " items that needs to fetched when request to that webpage is made. Since the server closes the connection as soon as the request has been fulfilled, there will be a series of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "20"), " separate connections where each of the items will be served one by one on their separate connections. This large number of connections results in a serious performance hit as requiring a new ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TCP"), " connection imposes a significant performance penalty because of three-way handshake followed by slow-start."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Three-way Handshake"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Three-way handshake in it's simples form is that all the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TCP"), " connections begin with a three-way handshake in which the client and the server share a series of packets before starting to share the application data. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "SYN"), " - Client picks up a random number, let's say ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "x"), ", and sends it to the server."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "SYN ACK"), " - Server acknowledges the request by sending an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "ACK"), " packet back to the client which is made up of a random number, let's say ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "y"), " picked up by server and the number ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "x+1"), " where ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "x"), " is the number that was sent by the client"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "ACK"), " - Client increments the number ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "y"), " received from the server and sends an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "ACK"), " packet back with the number ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "y+1"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Once the three-way handshake is completed, the data sharing between the client and server may begin. It should be noted that the client may start sending the application data as soon as it dispatches the last ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ACK"), " packet but the server will still have to wait for the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ACK"), " packet to be recieved in order to fulfill the request."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "http://i.imgur.com/uERG2G2.png",
    "alt": null
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Please note that there is a minor issue with the image, the last ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ACK"), " packet sent by the client to end the handshake contains only ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "y+1"), " i.e. it should have been ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ACK:y+1"), " instead of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ACK: x+1, y+1"), " ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "However, some implementations of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " tried to overcome this issue by introducing a new header called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Connection: keep-alive"), " which was meant to tell the server \"Hey server, do not close this connection, I need it again\". But still, it wasn't that widely supported and the problem still persisted."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Apart from being connectionless, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP"), " also is a stateless protocol i.e. server doesn't maintain the information about the client and so each of the requests has to have the information necessary for the server to fulfill the request on it's own without any association with any old requests. And so this adds fuel to the fire i.e. apart from the large number of connections that the client has to open, it also has to send some redundant data on the wire causing increased bandwidth usage."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "HTTP/1.1 - 1999"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "After merely 3 years of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), ", the next version i.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " was released in 1999; which made alot of improvements over it's predecessor. The major improvements over ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " included"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "New HTTP methods"), " were added, which introduced ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "PUT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "PATCH"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "OPTIONS"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "DELETE"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Hostname Identification"), " In ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Host"), " header wasn't required but ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " made it required.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Persistent Connections"), " As discussed above, in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " there was only one request per connection and the connection was closed as soon as the request was fulfilled which resulted in accute performance hit and latency problems. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " introduced the persistent connections i.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "connections weren't closed by default"), " and were kept open which allowed multiple sequential requests. To close the connections, the header ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Connection: close"), " had to be available on the request. Clients usually send this header in the last request to safely close the connection.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Pipelining"), " It also introduced the support for pipelining, where the client could send multiple requests to the server without waiting for the response from server on the same connection and server had to send the response in the same sequence in which requests were received. But how does the client know that this is the point where first response download completes and the content for next response starts, you may ask! Well, to solve this, there must be ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Content-Length"), " header present which clients can use to identify where the response ends and it can start waiting for the next response."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "It should be noted that in order to benefit from persistent connections or pipelining, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Content-Length"), " header must be available on the response, because this would let the client know when the transmission completes and it can send the next request (in normal sequential way of sending requests) or start waiting for the the next response (when pipelining is enabled). ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "But there was still an issue with this approach. And that is, what if the data is dynamic and server cannot find the content length before hand? Well in that case, you really can't benefit from persistent connections, could you?! In order to solve this ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " introduced chunked encoding. In such cases server may omit content-Length in favor of chunked encoding (more to it in a moment). However, if none of them are available, then the connection must be closed at the end of request."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Chunked Transfers"), " In case of dynamic content, when the server cannot really find out the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Content-Length"), " when the transmission starts, it may start sending the content in pieces (chunk by chunk) and add the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Content-Length"), " for each chunk when it is sent. And when all of the chunks are sent i.e. whole transmission has completed, it sends an empty chunk i.e. the one with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Content-Length"), " set to zero in order to identify the client that transmission has completed. In order to notify the client about the chunked transfer, server includes the header ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Transfer-Encoding: chunked"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "Unlike ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.0"), " which had Basic authentication only, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " included digest and proxy authentication")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "Caching")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "Byte Ranges")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "Character sets")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "Language negotiation")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "Client cookies")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "Enhanced compression support")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "New status codes")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li"
  }, "..and more "))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I am not going to dwell about all the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " features in this post as it is a topic in itself and you can already find a lot about it. The one such document that I would recommend you to read is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "http://www.ra.ethz.ch/cdstore/www8/data/2136/pdf/pd1.pdf"
  }), "Key differences between ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "a"
  }, "HTTP/1.0"), " and HTTP/1.1"), " and here is the link to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://tools.ietf.org/html/rfc2616"
  }), "original RFC"), " for the overachievers."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " was introduced in 1999 and it had been a standard for many years. Although, it improved alot over it's predecessor; with the web changing everyday, it started to show it's age. Loading a web page these days is more resource-intensive than it ever was. A simple webpage these days has to open more than 30 connections. Well ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " has persistent connections, then why so many connections? you say! The reason is, in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " it can only have one outstanding connection at any moment of time. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " tried to fix this by introducing pipelining but it didn't completely address the issue because of the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "head-of-line blocking"), " where a slow or heavy request may block the requests behind and once a request gets stuck in a pipeline, it will have to wait for the next requests to be fulfilled. To overcome these shortcomings of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), ", the developers started implementing the workarounds, for example use of spritesheets, encoded images in CSS, single humungous CSS/Javascript files, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://www.maxcdn.com/one/visual-glossary/domain-sharding-2/"
  }), "domain sharding"), " etc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "SPDY - 2009"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Google went ahead and started experimenting with alternative protocols to make the web faster and improving web security while reducing the latency of web pages. In 2009, they announced ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "SPDY"), ". "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "SPDY"), " is a trademark of Google and isn't an acronym.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It was seen that if we keep increasing the bandwidth, the network performance increases in the beginning but a point comes when there is not much of a performance gain. But if you do the same with latency i.e. if we keep dropping the latency, there is a constant performance gain. This was the core idea for performance gain behind ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "SPDY"), ", decrease the latency to increase the network performance."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "For those who don't know the difference, latency is the delay i.e. how long it takes for data to travel between the source and destination (measured in milliseconds) and bandwidth is the amount of data transfered per second (bits per second).")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The features of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "SPDY"), " included, multiplexing, compression, prioritization, security etc. I am not going to get into the details of SPDY, as you will get the idea when we get into the nitty gritty of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " in the next section as I said ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " is mostly inspired from SPDY."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "SPDY"), " didn't really try to replace HTTP; it was a translation layer over HTTP which existed at the application layer and modified the request before sending it over to the wire. It started to become a defacto standards and majority of browsers started implementing it. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In 2015, at Google, they didn't want to have two competing standards and so they decided to merge it into HTTP while giving birth to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " and deprecating SPDY. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "HTTP/2 - 2015"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "By now, you must be convinced that why we needed another revision of the HTTP protocol. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " was  designed for low latency transport of content. The key features or differences from the old version of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " include"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Binary instead of Textual"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Multiplexing - Multiple asynchronous HTTP requests over a single connection"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Header compression using HPACK"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Server Push - Multiple responses for single request"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Request Prioritization"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Security")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "http://i.imgur.com/S85j8gg.png",
    "alt": null
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "1. Binary Protocol"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " tends to address the issue of increased latency that existed in HTTP/1.x by making it a binary protocol. Being a binary protocol, it easier to parse but unlike ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.x"), " it is no longer readable by the human eye. The major building blocks of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " are Frames and Streams"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h5", null, "Frames and Streams"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "HTTP messages are now composed of one or more frames. There is a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HEADERS"), " frame for the meta data and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "DATA"), " frame for the payload and there exist several other types of frames (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HEADERS"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "DATA"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "RST_STREAM"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "SETTINGS"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "PRIORITY"), " etc) that you can check through ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://http2.github.io/http2-spec/#FrameTypes"
  }), "the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "a"
  }, "HTTP/2"), " specs"), ". "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Every ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " request and response is given a unique stream ID and it is divided into frames. Frames are nothing but binary pieces of data. A collection of frames is called a Stream. Each frame has a stream id that identifies the stream to which it belongs and each frame has a common header. Also, apart from stream ID being unique, it is worth mentioning that, any request initiated by client uses odd numbers and the response from server has even numbers stream IDs."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Apart from the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HEADERS"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "DATA"), ", another frame type that I think worth mentioning here is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "RST_STREAM"), " which is a special frame type that is used to abort some stream i.e. client may send this frame to let the server know that I don't need this stream anymore. In ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/1.1"), " the only way to make the server stop sending the response to client was closing the connection which resulted in increased latency because a new connection had to be opened for any consecutive requests. While in HTTP/2, client can use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "RST_STREAM"), " and stop receiving a specific stream while the connection will still be open and the other streams will still be in play."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "2. Multiplexing"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Since ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " is now a binary protocol and as I said above that it uses frames and streams for requests and responses, once a TCP connection is opened, all the streams are sent asynchronously through the same connection without opening any additional connections. And in turn, the server responds in the same asynchronous way i.e. the response has no order and the client uses the assigned stream id to identify the stream to which a specific packet belongs. This also solves the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "head-of-line blocking"), " issue that existed in HTTP/1.x i.e. the client will not have to wait for the request that is taking time and other requests will still be getting processed."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "3. HPACK Header Compression"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It was part of a separate RFC which was specifically aimed at optimizing the sent headers. The essence of it is that when we are constantly accessing the server from a same client there is alot of redundant data that we are sending in the headers over and over, and sometimes there might be cookies increasing the headers size which results in bandwidth usage and increased latency. To overcome this, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " introduced header compression."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "http://i.imgur.com/3IPWXvR.png",
    "alt": null
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Unlike request and response, headers are not compressed in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gzip"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "compress"), " etc formats but there is a different mechanism in place for header compression which is literal values are encoded using Huffman code and a headers table is maintained by the client and server and both the client and server omit any repetitive headers (e.g. user agent etc) in the subsequent requests and reference them using the headers table maintained by both."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "While we are talking headers, let me add here that the headers are still the same as in HTTP/1.1, except for the addition of some pseudo headers i.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":method"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":scheme"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":host"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":path")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "4. Server Push"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Server push is another tremendous feature of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " where the server, knowing that the client is going to ask for a certain resource, can push it to the client without even client asking for it. For example, let's say a browser loads a web page, it parses the whole page to find out the remote content that it has to load from the server and then sends consequent requests to the server to get that content."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Server push allows the server to decrease the roundtrips by pushing the data that it knows that client is going to demand. How it is done is, server sends a special frame called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "PUSH_PROMISE"), " notifying the client that, \"Hey, I am about to send this resource to you! Do not ask me for it.\" The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "PUSH_PROMISE"), " frame is associated with the stream that caused the push to happen and it contains the promised stream ID i.e. the stream on which the server will send the resource to be pushed."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "5. Request Prioritization"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A client can assign a priority to a stream by including the prioritization information in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HEADERS"), " frame by which a stream is opened. At any other time, client can send a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "PRIORITY"), " frame to change the priority of a stream."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Without any priority information, server processes the requests asynchronously i.e. without any order. If there is priority assigned to a stream, then based on this prioritization information, server decides how much of the resources need to be given to process which request."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "6. Security"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "There was extensive discussion on whether security (through ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TLS"), ") should be made mandatory for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " or not. In the end, it was decided not to make it mandatory. However, most vendors stated that they will only support ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " when it is used over ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TLS"), ". So, although ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " doesn't require encryption by specs but it has kind of become mandatory by default anyway. With that out of the way, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " when implemented over ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TLS"), " does impose some requirementsi.e. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TLS"), " version ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "1.2"), " or higher must be used, there must be a certain level of minimum keysizes, ephemeral keys are required etc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " is here and it has already ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "http://caniuse.com/#search=http2"
  }), "surpassed SPDY in adaption"), " which is gradually increasing. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "HTTP/2"), " has alot to offer in terms of performance gain and it is about time we should start using it. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "For anyone interested in further details here is the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://http2.github.io/http2-spec"
  }), "link to specs"), " and a link ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "http://www.http2demo.io/"
  }), "demonstrating the performance benefits of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "a"
  }, "HTTP/2")), ". "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "And that about wraps it up. Until next time! stay tuned."));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./content/guides/levels-of-seniority.md":
/*!***********************************************!*\
  !*** ./content/guides/levels-of-seniority.md ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I have been working on redoing the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://roadmap.sh"
  }), "roadmaps"), " \u2013 splitting the skillset based on the seniority levels to make them easier to follow and not scare the new developers away. Since the roadmaps are going to be just about the technical knowledge, I thought it would be a good idea to reiterate and have an article on what I think of different seniority roles."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I have seen many organizations decide the seniority of developers by giving more significance to the years of experience than they should. I have seen developers labeled \"Junior\" doing the work of Senior Developers and I have seen \"Lead\" developers who weren't even qualified to be called \"Senior\". The seniority of a developer cannot just be decided by their age, years of experience or technical knowledge that they have got. There are other factors in play here -- their perception of work, how they interact with their peers and how they approach problems. We discuss these three key factors in detail for each of the seniority levels below."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Different Seniority Titles"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Different organizations might have different seniority titles but they mainly fall into three categories:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Junior Developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Mid Level Developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Senior Developer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Junior Developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Junior developers are normally fresh graduates and it's either they don't have or they have minimal industry experience. Not only they have weak coding skills but there are also a few other things that give Junior developers away:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Their main mantra is \"making it work\" without giving much attention to how the solution is achieved. To them, a working software and good software are equivalent. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They usually require very specific and structured directions to achieve something. They suffer from tunnel vision, need supervision and continuous guidance to be effective team members."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Most of the Junior developers just try to live up to the role and, when stuck, they might leave work for a senior developer instead of at least trying to take a stab at something."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They don't know about the business side of the company and don't realize how management/sales/marketing/etc think and they don't realize how much rework, wasted effort, and end-user aggravation could be saved by getting to know the business domain."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Over-engineering is a major problem, often leading to fragility and bugs."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "When given a problem, they often try to fix just the current problem a.k.a. fixing the symptoms instead of fixing the root problem."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "You might notice the \"", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "https://en.wikipedia.org/wiki/Somebody_else%27s_problem"
  }), "Somebody Else's Problem"), "\" behavior from them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They don't know what or how much they don't know, thanks to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect"
  }), "Dunning Kruger Effect"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They don't take initiatives and they might be afraid to work on an unfamiliar codebase."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They don't participate in team discussions.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Being a Junior developer in the team is not necessarily a bad thing; since you are just starting out, you are not expected to be a know-it-all person. However, it is your responsibility to learn, gain experience, not get stuck with the \"Junior\" title and improve yourself. Here are a few tips for Junior developers to help move up the ladder of seniority:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "All sorts of problems can be solved if you work on them long enough. Do not give up if Stack Overflow or an issue on GitHub doesn't have an answer. Saying \"I am stuck, but I have tried X, Y, and Z. Do you have any pointers?\" to your lead is much better than saying \"This is beyond me.\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Read a lot of code, not just code in the projects that you are working on, but reference/framework source code, open-source. Ask your fellow developers, perhaps on Reddit too, about the good open-source examples for the language/tools of your choice. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Do personal side-projects, share them with people, contribute to the open-source community. Reach out to people for help. You will be surprised how much support you can get from the community. I still remember my first open-source project on GitHub from around 6 years ago which was a small PHP script (a library) that fetched details for a given address from Google's Geocoding API. The codebase was super messy, it did not have any tests, did not have any linters or sniffers, and it did not have any CI because I didn't know about any of this at that time. I am not sure how but one kind soul somehow found the project, forked it, refactored it, \"modernized\" it, added linting, code sniffing, added CI and opened the pull request. This one pull request taught me so many things that I might have never learned that fast on my own because I was still in college, working for a small service-based company and doing just small websites all on my own without knowing what is right and what is not. This one PR on GitHub was my introduction to open-source and I owe everything to that. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Avoid what is known as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "https://en.wikipedia.org/wiki/Somebody_else%27s_problem"
  }), "\"Somebody Else's Problem Field\""), " behavior. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "When given a problem to solve, try to identify the root cause and fix that instead of fixing the symptoms. And remember, not being able to reproduce means not solved. It is solved when you understand why it occurred and why it no longer does."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Have respect for the code that was written before you. Be generous when passing judgment on the architecture or the design decisions made in the codebase. Understand that code is often ugly and weird for a reason other than incompetence. Learning to live with and thrive with legacy code is a great skill. Never assume anybody is stupid. Instead, figure out how these intelligent, well-intentioned and experienced people have come to a decision that is stupid now. Approach inheriting legacy code with an \"opportunity mindset\" rather than a complaining one."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "It's okay to not know things. You don't need to be ashamed of not knowing things already. There are no stupid questions, ask however many questions that would allow you to work effectively."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Don't let yourself be limited by the job title that you have. Keep working on your self-improvement."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Do your homework. Predict what\u2019s coming down the pipe. Be involved in the team discussions. Even if you are wrong, you will learn something."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Learn about the domain that you are working with. Understand the product end-to-end as an end-user. Do not assume things, ask questions and get things cleared when in doubt."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Learn to communicate effectively - soft skills matter. Learn how to write good emails, how to present your work, how to phrase your questions in a thoughtful manner."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Sit with the senior developers, watch them work, find a mentor. No one likes a know-it-all. Get hold of your ego and be humble enough to take lessons from experienced people."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Don't just blindly follow the advice of \"experts\", take it with a grain of salt."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "If you are asked to provide an estimate for some work, do not give an answer unless you have all the details to make a reasonable estimate. If you are forced to do that, pad it 2x or more depending on how much you don't know about what needs to be done for the task to be marked 'done'."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Take some time to learn how to use a debugger. Debuggers are quite beneficial when navigating new, undocumented or poorly documented codebase, or to debug weird issues. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Avoid saying \"it works on my machine\" -- yes, I have heard that a lot."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Try to turn any feelings of inadequacy or imposter syndrome into energy to push yourself forward and increase your skills and knowledge.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Mid Level Developers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The next level after the Junior developers is Mid Level developers. They are technically stronger than the Junior developers and can work with minimal supervision. They still have some issues to address in order to jump to Senior level."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Intermediate developers are more competent than the Junior developer. They start to see the flaws in their old codebase. They gain the knowledge but they get trapped into the next chain i.e. messing things up while trying to do them \"the right way\" e.g. hasty abstractions, overuse or unnecessary usage of Design Patterns -- they may be able to provide solution faster than the Junior developers but the solution might put you into another rabbit-hole in the long run. Without supervision, they might delay the execution while trying to \"do things properly\". They don't know when to make tradeoffs and they still don't know when to be dogmatic and when to be pragmatic. They can easily become attached to their solution, become myopic, and be unable to take feedback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Mid-level developers are quite common. Most of the organizations wrongly label them as \"Senior Developers\". However, they need further mentoring in order to become Senior Developers. The next section describes the responsibilities of a senior developer and how you can become one."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Senior Developers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Senior developers are the next level after the Mid-level developers. They are the people who can get things done on their own without any supervision and without creating any issues down the road. They are more mature, have gained experience by delivering both good and bad software in the past and have learned from it \u2014 they know how to be pragmatic. Here is the list of things that are normally expected of a Senior Developer:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "With their past experiences, mistakes made, issues faced by over-designed or under-designed software, they can foresee the problems and persuade the direction of the codebase or the architecture. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They don't have a \"Shiny-Toy\" syndrome. They are pragmatic in the execution. They can make the tradeoffs when required, and they know why. They know where to be dogmatic and where to be pragmatic."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They have a good picture of the field, know what the best tool for the job is in most cases (even if they don't know the tool). They have the innate ability to pick up a new tool/language/paradigm/etc in order to solve a problem that requires it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They are aware they're on a team. They view it as a part of their responsibility to mentor others. This can range from pair programming with junior devs to taking un-glorious tasks of writing docs or tests or whatever else needs to be done."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They have a deep understanding of the domain - they know about the business side of the company and realize how management/sales/marketing/etc think and benefit from their knowledge of the business domain during the development."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They don't make empty complaints, they make judgments based on the empirical evidence and they have suggestions for solutions."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They think much more than the code - they know that their job is to provide solutions to the problems and not just to write code."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They have the ability to take on large ill-defined problems, define them, break them up, and execute the pieces. A senior developer can take something big and abstract, and run with it. They will come up with a few options, discuss them with the team and implement them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They have respect for the code that was written before them. They are generous when passing judgment on the architecture or the design decisions made in the codebase. They approach inheriting legacy code with an \"opportunity mindset\" rather than a complaining one."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "They know how to give feedback without hurting anyone.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Conclusion"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "All teams are made up of a mix of all these seniority roles. Being content with your role is a bad thing and you should always strive to improve yourself for the next step. This article is based on my beliefs and observations in the industry. Lots of companies care more for the years of experience to decide the seniority which is a crappy metric -- you don't gain experience just by spending years. You gain it by continuously solving different sorts of problems, irrespective of the number of years you spend in the industry. I have seen fresh graduates having no industry experience get up to speed quickly and producing work of a Senior Engineer and I have seen Senior developers labeled \"senior\" merely because of their age and \"years of experience\". "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The most important traits that you need to have in order to step up in your career are: not settling with mediocrity, having an open mindset, being humble, learning from your mistakes, working on the challenging problems and having an opportunity mindset rather than a complaining one."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "With that said, this post comes to an end. What are your thoughts on the levels of seniority of developers? Feel free to send improvements to this guide. Until next time, stay tuned!"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./content/guides/torrent-client.md":
/*!******************************************!*\
  !*** ./content/guides/torrent-client.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "BitTorrent is a protocol for downloading and distributing files across the Internet. In contrast with the traditional client/server relationship, in which downloaders connect to a central server (for example: watching a movie on Netflix, or loading the web page you're reading now), participants in the BitTorrent network, called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "peers"), ", download pieces of files from ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "each other"), "\u2014this is what makes it a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "peer-to-peer"), " protocol. In this article we will investigate how this works, and build our own client that can find peers and exchange data between them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/client-server-p2p.png",
    "alt": "diagram showing the difference between client/server (all clients connecting to one server) and peer-to-peer (peers connecting to each other) relationships"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The protocol evolved organically over the past 20 years, and various people and organizations added extensions for features like encryption, private torrents, and new ways of finding peers. We'll be implementing the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://www.bittorrent.org/beps/bep_0003.html"
  }), "original spec"), " from 2001 to keep this a weekend-sized project."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I'll be using a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://cdimage.debian.org/debian-cd/current/amd64/bt-cd/#indexlist"
  }), "Debian ISO"), " file as my guinea pig because it's big, but not huge, at 350MB. As a popular Linux distribution, there will be lots of fast and cooperative peers for us to connect to. And we'll avoid the legal and ethical issues related to downloading pirated content."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", null, "Finding peers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Here\u2019s a problem: we want to download a file with BitTorrent, but it\u2019s a peer-to-peer protocol and we have no idea where to find peers to download it from. This is a lot like moving to a new city and trying to make friends\u2014maybe we\u2019ll hit up a local pub or a meetup group! Centralized locations like these are the big idea behind trackers, which are central servers that introduce peers to each other. They\u2019re just web servers running over HTTP, and you can find Debian\u2019s at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "http://bttracker.debian.org:6969/"
  }), "http://bttracker.debian.org:6969/")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/trackers.png",
    "alt": "illustration of a desktop computer and laptop sitting at a pub"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Of course, these central servers are liable to get raided by the feds if they facilitate peers exchanging illegal content. You may remember reading about trackers like TorrentSpy, Popcorn Time, and KickassTorrents getting seized and shut down. New methods cut out the middleman by making even ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "peer discovery"), " a distributed process. We won't be implementing them, but if you're interested, some terms you can research are ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "DHT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "PEX"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "magnet links"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Parsing a .torrent file"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A .torrent file describes the contents of a torrentable file and information for connecting to a tracker. It's all we need in order to kickstart the process of downloading a torrent. Debian's .torrent file looks like this:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-markdown"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-markdown"
  }), "d8:announce41:http://bttracker.debian.org:6969/announce7:comment35:\"Debian CD from cdimage.debian.org\"13:creation datei1573903810e9:httpseedsl145:https://cdimage.debian.org/cdimage/release/10.2.0//srv/cdbuilder.debian.org/dst/deb-cd/weekly-builds/amd64/iso-cd/debian-10.2.0-amd64-netinst.iso145:https://cdimage.debian.org/cdimage/archive/10.2.0//srv/cdbuilder.debian.org/dst/deb-cd/weekly-builds/amd64/iso-cd/debian-10.2.0-amd64-netinst.isoe4:infod6:lengthi351272960e4:name31:debian-10.2.0-amd64-netinst.iso12:piece lengthi262144e6:pieces26800:\uFFFD\x1F\uFFFD\x0F\uFFFD\uFFFD\uFFFDPS\uFFFD^\uFFFD\uFFFD (binary blob of the hashes of each piece)ee\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "That mess is encoded in a format called ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Bencode"), " (pronounced ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "bee-encode"), "), and we'll need to decode it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Bencode can encode roughly the same types of structures as JSON\u2014strings, integers, lists, and dictionaries. Bencoded data is not as human-readable/writable as JSON, but it can efficiently handle binary data and it's really simple to parse from a stream. Strings come with a length prefix, and look like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "4:spam"), ". Integers go between ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "start"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "end"), " markers, so ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "7"), " would encode to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "i7e"), ". Lists and dictionaries work in a similar way: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "l4:spami7ee"), " represents ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "['spam', 7]"), ", while ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "d4:spami7ee"), " means ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "{spam: 7}"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In a prettier format, our .torrent file looks like this:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-markdown"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-markdown"
  }), "d\n  8:announce\n    41:http://bttracker.debian.org:6969/announce\n  7:comment\n    35:\"Debian CD from cdimage.debian.org\"\n  13:creation date\n    i1573903810e\n  4:info\n    d\n      6:length\n        i351272960e\n      4:name\n        31:debian-10.2.0-amd64-netinst.iso\n      12:piece length\n        i262144e\n      6:pieces\n        26800:\uFFFD\x1F\uFFFD\x0F\uFFFD\uFFFD\uFFFDPS\uFFFD^\uFFFD\uFFFD (binary blob of the hashes of each piece)\n    e\ne\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In this file, we can spot the URL of the tracker, the creation date (as a Unix timestamp), the name and size of the file, and a big binary blob containing the SHA-1 hashes of each ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "piece"), ", which are equally-sized parts of the file we want to download. The exact size of a piece varies between torrents, but they are usually somewhere between 256KB and 1MB. This means that a large file might be made up of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "thousands"), " of pieces. We'll download these pieces from our peers, check them against the hashes from our torrent file, assemble them together, and boom, we've got a file!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/pieces.png",
    "alt": "\"illustration of a file being cut with scissors into multiple pieces, starting with piece 0"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "This mechanism allows us to verify the integrity of each piece as we go. It makes BitTorrent resistant to accidental corruption or intentional ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "torrent poisoning"), ". Unless an attacker is capable of breaking SHA-1 with a preimage attack, we will get exactly the content we asked for."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It would be really fun to write a bencode parser, but parsing isn't our focus today. But I found Fredrik Lundh's ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://effbot.org/zone/bencode.htm"
  }), "50 line parser"), " to be especially illuminating. For this project, I used ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/jackpal/bencode-go"
  }), "github.com/jackpal/bencode-go"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "import"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"github.com/jackpal/bencode-go\""), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " bencodeInfo ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "struct"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    Pieces      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "`bencode:\"pieces\"`"), "\n    PieceLength ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), "    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "`bencode:\"piece length\"`"), "\n    Length      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), "    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "`bencode:\"length\"`"), "\n    Name        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "`bencode:\"name\"`"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " bencodeTorrent ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "struct"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    Announce ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), "      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "`bencode:\"announce\"`"), "\n    Info     bencodeInfo ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "`bencode:\"info\"`"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Open parses a torrent file"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Open"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "r io", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Reader", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "bencodeTorrent", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    bto ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " bencodeTorrent", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " bencode", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Unmarshal"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "r", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "&"), "bto", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "&"), "bto", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Because I like to keep my structures relatively flat, and I like to keep my application structs separate from my serialization structs, I exported a different, flatter struct named ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "TorrentFile"), " and wrote a few helper functions to convert between the two."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Notably, I split ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "pieces"), " (previously a string) into a slice of hashes (each ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "[20]byte"), ") so that I can easily access individual hashes later. I also computed the SHA-1 hash of the entire bencoded ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "info"), " dict (the one which contained the name, size, and piece hashes). We know this as the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "infohash"), " and it uniquely identifies files when we talk to trackers and peers. More on this later."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/info-hash.png",
    "alt": "a name tag saying 'Hello my name is 86d4c80024a469be4c50bc5a102cf71780310074'"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " TorrentFile ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "struct"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    Announce    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), "\n    InfoHash    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "20"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), "\n    PieceHashes ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "20"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), "\n    PieceLength ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), "\n    Length      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), "\n    Name        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "bto ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "bencodeTorrent", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "toTorrentFile"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "TorrentFile", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// ..."), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Retrieving peers from the tracker"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now that we have information about the file and its tracker, let's talk to the tracker to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "announce"), " our presence as a peer and to retrieve a list of other peers. We just need to make a GET request to the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "announce"), " URL supplied in the .torrent file, with a few query parameters:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "t ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "TorrentFile", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "buildTrackerURL"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peerID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "20"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " port ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "uint16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    base", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " url", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Parse"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Announce", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    params ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " url", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Values", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"info_hash\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "InfoHash", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"peer_id\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peerID", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"port\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "       ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "strconv", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Itoa"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "int"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "Port", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"uploaded\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "   ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"0\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"downloaded\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"0\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"compact\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"1\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"left\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "       ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "strconv", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Itoa"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Length", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    base", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "RawQuery ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " params", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Encode"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " base", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "String"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The important ones:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "info_hash"), ": Identifies the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "li"
  }, "file"), " we're trying to download. It's the infohash we calculated earlier from the bencoded ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "info"), " dict. The tracker will use this to figure out which peers to show us."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "peer_id"), ": A 20 byte name to identify ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "li"
  }, "ourselves"), " to trackers and peers. We'll just generate 20 random bytes for this. Real BitTorrent clients have IDs like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "-TR2940-k8hj0wgej6ch"), " which identify the client software and version\u2014in this case, TR2940 stands for Transmission client 2.94.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/info-hash-peer-id.png",
    "alt": "a file with a name tag saying 'info_hash' and a person with a name tag 'peer_id'"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Parsing the tracker response"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "We get back a bencoded response:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-markdown"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-markdown"
  }), "d\n  8:interval\n    i900e\n  5:peers\n    252:(another long binary blob)\ne\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Interval"), " tells us how often we're supposed to connect to the tracker again to refresh our list of peers. A value of 900 means we should reconnect every 15 minutes (900 seconds)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Peers"), " is another long binary blob containing the IP addresses of each peer. It's made out of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "groups of six bytes"), ". The first four bytes in each group represent the peer's IP address\u2014each byte represents a number in the IP. The last two bytes represent the port, as a big-endian ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "uint16"), ". ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Big-endian"), ", or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "network order"), ", means that we can interpret a group of bytes as an integer by just squishing them together left to right. For example, the bytes ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "0x1A"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "0xE1"), " make ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "0x1AE1"), ", or 6881 in decimal."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/address.png",
    "alt": "diagram showing how 192, 0, 2, 123, 0x1A, 0xE1 can be interpreted as 192.0.1.123:6881"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Peer encodes connection information for a peer"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " Peer ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "struct"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    IP   net", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "IP\n    Port ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "uint16"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Unmarshal parses peer IP addresses and ports from a buffer"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Unmarshal"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peersBin ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), "Peer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "const"), " peerSize ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "6"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// 4 for IP, 2 for port"), "\n    numPeers ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "len"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peersBin", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "/"), " peerSize\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "len"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peersBin", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "%"), "peerSize ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " fmt", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Errorf"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"Received malformed peers\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    peers ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), "Peer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " numPeers", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "for"), " i ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ";"), " i ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<"), " numPeers", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ";"), " i", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "++"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        offset ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " i ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), " peerSize\n        peers", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "i", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "IP ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " net", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "IP"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peersBin", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "offset ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), " offset", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        peers", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "i", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Port ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " binary", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "BigEndian", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Uint16"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peersBin", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "offset", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "4"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), " offset", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "6"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " peers", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", null, "Downloading from peers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now that we have a list of peers, it's time to connect with them and start downloading pieces! We can break down the process into a few steps. For each peer, we want to:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "Start a TCP connection with the peer. This is like starting a phone call."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "Complete a two-way BitTorrent ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "handshake"), ". ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "li"
  }, "\"Hello?\" \"Hello.\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "Exchange ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "messages"), " to download ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "pieces"), ". ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "li"
  }, "\"I'd like piece #231 please.\""))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Start a TCP connection"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), "conn", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " net", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "DialTimeout"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"tcp\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " peer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "String"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "3"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "time", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Second", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I set a timeout so that I don't waste too much time on peers that aren't going to let me connect. For the most part, it's a pretty standard TCP connection."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Complete the handshake"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "We've just set up a connection with a peer, but we want do a handshake to validate our assumptions that the peer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "can communicate using the BitTorrent protocol"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "is able to understand and respond to our messages"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "has the file that we want, or at least knows what we're talking about")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/handshake.png",
    "alt": "Two computers communicating. One asks 'do you speak BitTorrent and have this file?' and the other replies 'I speak BitTorrent and have that file'"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "My father told me that the secret to a good handshake is a firm grip and eye contact. The secret to a good BitTorrent handshake is that it's made up of five parts:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ol", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "The length of the protocol identifier, which is always 19 (0x13 in hex)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "The protocol identifier, called the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "pstr"), " which is always ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "li"
  }, "BitTorrent protocol")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "Eight ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "reserved bytes"), ", all set to 0. We'd flip some of them to 1 to indicate that we support certain ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "http://www.bittorrent.org/beps/bep_0010.html"
  }), "extensions"), ". But we don't, so we'll keep them at 0."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "infohash"), " that we calculated earlier to identify which file we want"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ol"
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Peer ID"), " that we made up to identify ourselves")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Put together, a handshake string might look like this:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-markdown"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-markdown"
  }), "\\x13BitTorrent protocol\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x86\\xd4\\xc8\\x00\\x24\\xa4\\x69\\xbe\\x4c\\x50\\xbc\\x5a\\x10\\x2c\\xf7\\x17\\x80\\x31\\x00\\x74-TR2940-k8hj0wgej6ch\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "After we send a handshake to our peer, we should receive a handshake back in the same format. The infohash we get back should match the one we sent so that we know that we're talking about the same file. If everything goes as planned, we're good to go. If not, we can sever the connection because there's something wrong. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "\"Hello?\" \"\u8FD9\u662F\u8C01\uFF1F \u4F60\u60F3\u8981\u4EC0\u4E48\uFF1F\" \"Okay, wow, wrong number.\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In our code, let's make a struct to represent a handshake, and write a few methods for serializing and reading them:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// A Handshake is a special message that a peer uses to identify itself"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " Handshake ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "struct"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    Pstr     ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "string"), "\n    InfoHash ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "20"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), "\n    PeerID   ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "20"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Serialize serializes the handshake to a buffer"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "h ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "Handshake", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Serialize"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    buf ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "len"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "h", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Pstr", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "49"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "len"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "h", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Pstr", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    curr ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "1"), "\n    curr ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "copy"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "curr", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " h", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Pstr", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    curr ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "copy"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "curr", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "8"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// 8 reserved bytes"), "\n    curr ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "copy"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "curr", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " h", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "InfoHash", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    curr ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "copy"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "curr", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " h", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "PeerID", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " buf\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Read parses a handshake from a stream"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Read"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "r io", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Reader", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "Handshake", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Do Serialize(), but backwards"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// ..."), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Send and receive messages"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Once we've completed the initial handshake, we can send and receive ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "messages"), ". Well, not quite\u2014if the other peer isn't ready to accept messages, we can't send any until they tell us they're ready. In this state, we're considered ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "choked"), " by the other peer. They'll send us an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "unchoke"), " message to let us know that we can begin asking them for data. By default, we assume that we're choked until proven otherwise."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Once we've been unchoked, we can then begin sending ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "requests"), " for pieces, and they can send us messages back containing pieces."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/choke.png",
    "alt": "\"A cartoon in which person 1 says 'hello I would like piece number—' and person 2 grabs him by the neck and says '00 00 00 01 00 (choke)'"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Interpreting messages"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A message has a length, an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "ID"), " and a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "payload"), ". On the wire, it looks like:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/message.png",
    "alt": "A message with 4 byte for the length, 1 byte for ID, and an optional payload"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A message starts with a length indicator which tells us how many bytes long the message will be. It's a 32-bit integer, meaning it's made out of four bytes smooshed together in big-endian order. The next byte, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "ID"), ", tells us which type of message we're receiving\u2014for example, a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "2"), " byte means \"interested.\" Finally, the optional ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "payload"), " fills out the remaining length of the message."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "uint8"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "const"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "\n    MsgChoke         messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), "\n    MsgUnchoke       messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "1"), "\n    MsgInterested    messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "2"), "\n    MsgNotInterested messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "3"), "\n    MsgHave          messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "4"), "\n    MsgBitfield      messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "5"), "\n    MsgRequest       messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "6"), "\n    MsgPiece         messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "7"), "\n    MsgCancel        messageID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "8"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Message stores ID and payload of a message"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " Message ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "struct"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    ID      messageID\n    Payload ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Serialize serializes a message into a buffer of the form"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// <length prefix><message ID><payload>"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Interprets `nil` as a keep-alive message"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "m ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "Message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Serialize"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " m ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "=="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    length ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "uint32"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "len"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "m", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Payload", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// +1 for id"), "\n    buf ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+"), "length", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    binary", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "BigEndian", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "PutUint32"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " length", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "m", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "ID", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "copy"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " m", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Payload", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " buf\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "To read a message from a stream, we just follow the format of a message. We read four bytes and interpret them as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "uint32"), " to get the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "length"), " of the message. Then, we read that number of bytes to get the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "ID"), " (the first byte) and the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "payload"), " (the remaining bytes)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Read parses a message from a stream. Returns `nil` on keep-alive message"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Read"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "r io", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Reader", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "Message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    lengthBuf ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "_"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " io", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "ReadFull"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "r", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " lengthBuf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    length ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " binary", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "BigEndian", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Uint32"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "lengthBuf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// keep-alive message"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " length ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "=="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n    messageBuf ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " length", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "_"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " io", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "ReadFull"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "r", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " messageBuf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n    m ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " Message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ID", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "messageID"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "messageBuf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        Payload", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), " messageBuf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "&"), "m", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Bitfields"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "One of the most interesting types of message is the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "bitfield"), ", which is a data structure that peers use to efficiently encode which pieces they are able to send us. A bitfield looks like a byte array, and to check which pieces they have, we just need to look at the positions of the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "bits"), " set to 1. You can think of it like the digital equivalent of a coffee shop loyalty card. We start with a blank card of all ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "0"), ", and flip bits to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "1"), " to mark their positions as \"stamped.\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/bitfield.png",
    "alt": "a coffee shop loyalty card with eight slots, with stamps on the first four slots and a stamp on the second to last slot, represented as 11110010"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "By working with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "bits"), " instead of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "bytes"), ", this data structure is super compact. We can stuff information about eight pieces in the space of a single byte\u2014the size of a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "bool"), ". The tradeoff is that accessing values becomes a little more tricky. The smallest unit of memory that computers can address are bytes, so to get to our bits, we have to do some bitwise manipulation:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// A Bitfield represents the pieces that a peer has"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " Bitfield ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// HasPiece tells if a bitfield has a particular index set"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "bf Bitfield", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "HasPiece"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "index ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "bool"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    byteIndex ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " index ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "/"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "8"), "\n    offset ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " index ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "%"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "8"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " bf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "byteIndex", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ">>"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "7"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "-"), "offset", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "&"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "1"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// SetPiece sets a bit in the bitfield"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "bf Bitfield", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "SetPiece"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "index ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    byteIndex ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " index ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "/"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "8"), "\n    offset ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " index ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "%"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "8"), "\n    bf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "byteIndex", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "|="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "1"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<<"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "7"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "-"), " offset", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Putting it all together"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "We now have all the tools we need to download a torrent: we have a list of peers obtained from the tracker, and we can communicate with them by dialing a TCP connection, initiating a handshake, and sending and receiving messages. Our last big problems are handling the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "concurrency"), " involved in talking to multiple peers at once, and managing the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "state"), " of our peers as we interact with them. These are both classically Hard problems."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Managing concurrency: channels as queues"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In Go, we ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://blog.golang.org/share-memory-by-communicating"
  }), "share memory by communicating"), ", and we can think of a Go channel as a cheap thread-safe queue."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "We'll set up two channels to synchronize our concurrent workers: one for dishing out work (pieces to download) between peers, and another for collecting downloaded pieces. As downloaded pieces come in through the results channel, we can copy them into a buffer to start assembling our complete file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Init queues for workers to retrieve work and send results"), "\nworkQueue ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "chan"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "pieceWork", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "len"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "PieceHashes", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\nresults ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "chan"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "pieceResult", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "for"), " index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " hash ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "range"), " t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "PieceHashes ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    length ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "calculatePieceSize"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    workQueue ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<-"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "&"), "pieceWork", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " hash", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " length", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Start workers"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "for"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "_"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " peer ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "range"), " t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Peers ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "go"), " t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "startDownloadWorker"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " workQueue", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " results", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Collect results into a buffer until full"), "\nbuf ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Length", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\ndonePieces ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "0"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "for"), " donePieces ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "len"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "PieceHashes", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    res ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<-"), "results\n    begin", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " end ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "calculateBoundsForPiece"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "res", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "copy"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), "begin", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "end", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " res", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    donePieces", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "++"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "close"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "workQueue", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "We'll spawn a worker goroutine for each peer we've received from the tracker. It'll connect and handshake with the peer, and then start retrieving work from the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "workQueue"), ", attempting to download it, and sending downloaded pieces back through the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "results"), " channel."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/download.png",
    "alt": "a flow chart of the download strategy"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "t ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "Torrent", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "startDownloadWorker"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peer peers", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Peer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " workQueue ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "chan"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "pieceWork", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " results ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "chan"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "pieceResult", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "New"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "peer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "PeerID", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " t", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "InfoHash", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        log", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Printf"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"Could not handshake with %s. Disconnecting\\n\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " peer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "IP", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "defer"), " c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Conn", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Close"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    log", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Printf"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"Completed handshake with %s\\n\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " peer", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "IP", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n\n    c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "SendUnchoke"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "SendInterested"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "for"), " pw ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "range"), " workQueue ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!"), "c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Bitfield", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "HasPiece"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n            workQueue ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<-"), " pw ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Put piece back on the queue"), "\n            ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "continue"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Download the piece"), "\n        buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "attemptDownloadPiece"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n            log", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Println"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"Exiting\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n            workQueue ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<-"), " pw ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Put piece back on the queue"), "\n            ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n        err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "checkIntegrity"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n            log", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Printf"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"Piece #%d failed integrity check\\n\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n            workQueue ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<-"), " pw ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Put piece back on the queue"), "\n            ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "continue"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n        c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "SendHave"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        results ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<-"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "&"), "pieceResult", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Managing state"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "We'll keep track of each peer in a struct, and modify that struct as we read messages. It'll include data like how much we've downloaded from the peer, how much we've requested from them, and whether we're choked. If we wanted to scale this further, we could formalize this as a finite state machine. But a struct and a switch are good enough for now."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "type"), " pieceProgress ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "struct"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    index      ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), "\n    client     ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Client\n    buf        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), "\n    downloaded ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), "\n    requested  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), "\n    backlog    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "int"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "state ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "pieceProgress", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "readMessage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "error"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    msg", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Read"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// this call blocks"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "switch"), " msg", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "ID ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "case"), " message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "MsgUnchoke", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "\n        state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Choked ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "false"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "case"), " message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "MsgChoke", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "\n        state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Choked ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "true"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "case"), " message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "MsgHave", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "\n        index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "ParseHave"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "msg", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Bitfield", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "SetPiece"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "case"), " message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "MsgPiece", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "\n        n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " message", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "ParsePiece"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " msg", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "downloaded ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+="), " n\n        state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "backlog", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "--"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Time to make requests!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Files, pieces, and piece hashes aren't the full story\u2014we can go further by breaking down pieces into ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "blocks"), ". A block is a part of a piece, and we can fully define a block by the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "index"), " of the piece it's part of, its byte ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "offset"), " within the piece, and its ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "length"), ". When we make requests for data from peers, we are actually requesting ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "blocks"), ". A block is usually 16KB large, meaning that a single 256 KB piece might actually require 16 requests."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A peer is supposed to sever the connection if they receive a request for a block larger than 16KB. However, based on my experience, they're often perfectly happy to satisfy requests up to 128KB. I only got moderate gains in overall speed with larger block sizes, so it's probably better to stick with the spec."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Pipelining"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Network round-trips are expensive, and requesting each block one by one will absolutely tank the performance of our download. Therefore, it's important to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "pipeline"), " our requests such that we keep up a constant pressure of some number of unfulfilled requests. This can increase the throughput of our connection by an order of magnitude."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/guides/torrent-client/pipelining.png",
    "alt": "Two email threads simulating peer connections. The thread on the left shows a request followed by a reply, repeated three times. The thread on the left sends three requests, and receives three replies in quick succession."
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Classically, BitTorrent clients kept a queue of five pipelined requests, and that's the value I'll be using. I found that increasing it can up to double the speed of a download. Newer clients use an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://luminarys.com/posts/writing-a-bittorrent-client.html"
  }), "adaptive"), " queue size to better accommodate modern network speeds and conditions. This is definitely a parameter worth tweaking, and it's pretty low hanging fruit for future performance optimization."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// MaxBlockSize is the largest number of bytes a request can ask for"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "const"), " MaxBlockSize ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "16384"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// MaxBacklog is the number of unfulfilled requests a client can have in its pipeline"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "const"), " MaxBacklog ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "5"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "attemptDownloadPiece"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "c ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " pw ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), "pieceWork", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "error"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    state ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " pieceProgress", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "  pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), " c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n        buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ":"), "    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "make"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token builtin"
  }), "byte"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "length", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Setting a deadline helps get unresponsive peers unstuck."), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// 30 seconds is more than enough time to download a 262 KB piece"), "\n    c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Conn", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "SetDeadline"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "time", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Now"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Add"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "30"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "*"), " time", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Second", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "defer"), " c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Conn", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "SetDeadline"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "time", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Time", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Disable the deadline"), "\n\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "for"), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "downloaded ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<"), " pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "length ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// If unchoked, send requests until we have enough unfulfilled requests"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!"), "state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "client", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Choked ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n            ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "for"), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "backlog ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<"), " MaxBacklog ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "&&"), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "requested ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<"), " pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "length ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n                blockSize ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " MaxBlockSize\n                ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token comment"
  }), "// Last block might be shorter than the typical block"), "\n                ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "length", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "-"), "state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "requested ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "<"), " blockSize ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n                    blockSize ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "length ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "-"), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "requested\n                ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n                err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " c", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "SendRequest"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "pw", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "index", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "requested", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " blockSize", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n                ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n                    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err\n                ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n                state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "backlog", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "++"), "\n                state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "requested ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "+="), " blockSize\n            ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n        err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "readMessage"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n            ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err\n        ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "return"), " state", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "buf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "main.go"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "This is a short one. We're almost there."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    "className": "language-go"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-go"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "package"), " main\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "import"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"log\""), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"os\""), "\n\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token string"
  }), "\"github.com/veggiedefender/torrent-client/torrentfile\""), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "func"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "main"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n    inPath ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " os", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Args", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), "\n    outPath ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " os", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), "Args", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "["), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token number"
  }), "2"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "]"), "\n\n    tf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ","), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), ":="), " torrentfile", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Open"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "inPath", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        log", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Fatal"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "err", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n\n    err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "="), " tf", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "DownloadToFile"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "outPath", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token keyword"
  }), "if"), " err ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token operator"
  }), "!="), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token boolean"
  }), "nil"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "{"), "\n        log", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token function"
  }), "Fatal"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "("), "err", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), ")"), "\n    ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "code"
  }, {
    "className": "token punctuation"
  }), "}"), "\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("script", {
    id: "asciicast-xqRSB0Jec8RN91Zt89rbb9PcL",
    src: "https://asciinema.org/a/xqRSB0Jec8RN91Zt89rbb9PcL.js",
    async: true
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h1", null, "This isn't the full story"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "For brevity, I included only a few of the important snippets of code. Notably, I left out all the glue code, parsing, unit tests, and the boring parts that build character. View my ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/veggiedefender/torrent-client"
  }), "full implementation"), " if you're interested."));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./content/guides/upcoming.md":
/*!************************************!*\
  !*** ./content/guides/upcoming.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Roadmap is not ready yet"), ". Please check back later or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/signup"
  }), "subscribe to get notified"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "While we prepare the roadmap, follow this simple advice to learn anything"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Just ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "pick a project and start working on it"), ", you will learn all that you need along the way.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u2192"), " ", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/roadmaps"
  }), "All Roadmaps"), " ", "\xA0", "\u2022", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/guides"
  }), "Programming guides"), " ", "\xA0", "\u2022", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/signup"
  }), "Subscribe"), " "));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./content/pages/about.md":
/*!********************************!*\
  !*** ./content/pages/about.md ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "What is roadmap.sh?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Roadmap.sh is the place containing community curated roadmaps, study plans, paths and resources for the budding developers. It started as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/developer-roadmap"
  }), "set of charts to guide the developers"), " who are confused about what should they learn next but that alone wasn't enough so I expanded it into the website to get more contributors involved."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "What are the plans for roadmap.sh?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The website started off as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/developer-roadmap"
  }), "simple repository containing a few charts"), " for developers and based on my personal opinions but it could have been much more than that so I decided to expand it to a website where people can contribute to study plans with their areas of expertise as well, add more roadmaps, write guides etc. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "We haven't opened up the sign ups for now but we will be doing. My long term plans for this website are to turn it into a goto place for the developers to seek guidance about their careers, help others, share their journeys, incentivize the learnings, get feedbacks on their projects etc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "How did you build roadmap.sh?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The basic version of the website has been built with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/zeit/next.js/"
  }), "Next.js"), ", is opensource and can be found on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/roadmap.sh"
  }), "github"), ". It was hastily done to get it out in front of the people and get people to start contributing so it might be rough on the edges, but that is where we need your help."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "How does it make money?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It doesn't make any money. I have been using my personal time and budget to build it. I did not create this website with any intentions of monetization but as a good will, to help the people get out of the frustration that I was once in. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Having said that, I love teaching and my future plans are to be able to work full-time on roadmap.sh for which it has to make enough money to pay for my rent, groceries, bills, travel expenses, etc but even if it doesn't it's likely I'll continue growing the site however I can. My focus at the moment is not making money from it and just add content that creates value for the people."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Sponsor the efforts by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "http://gum.co/roadmap-sh"
  }), "paying as little as 3$ per month"), " or with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://paypal.me/kamranahmedse"
  }), "one time payment via paypal"), ". Alternatively, reach out to me at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "mailto:kamran@roadmap.sh"
  }), "kamran@roadmap.sh"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Can I contribute?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You definitely can, infact you are encouraged to do that. Even your minor contributions such as typo fixes count. The source code of the website can be ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/roadmap.sh"
  }), "found on Github"), ". Your contributions can be: "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Adding a new roadmap"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Updating existing roadmap"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Suggesting changes to the existing roadmaps"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Writing a Guide"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Updating an existing guide"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Fixing grammar mistakes, typos on the website or the content"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Updating the UI of the website"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Refactoring the codebase"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Becoming a sponsor")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Just make sure to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing"
  }), "follow the contribution guidelines"), " when you decide to contribute. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Can I redistribute the content?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "No, the license of the content on this website does not allow you to redistribute any of the content on this website anywhere. You can use it for personal use or share the link to the content if you have to but redistribution is not allowed."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "What is the best way to contact you?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Tweet or send me a message ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://twitter.com/kamranahmedse"
  }), "@kamranahmedse"), " or email me at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "kamran@roadmap.sh"
  }), "kamran@roadmap.sh"), ". I get lots of messages so apologies in advance if you don't hear back from me soon but I do reply to everyone."));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./content/project/backend-map.json":
/*!******************************************!*\
  !*** ./content/project/backend-map.json ***!
  \******************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mockup\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"typeID\":\"Arrow\",\"zOrder\":\"276\",\"w\":\"26\",\"h\":\"112\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"642\",\"y\":\"287\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":26,\"y\":0},\"p1\":{\"x\":0.540933899332929,\"y\":-0.1946634323832626},\"p2\":{\"x\":18,\"y\":112},\"rightArrow\":\"false\"}},{\"ID\":\"1\",\"typeID\":\"Label\",\"zOrder\":\"277\",\"measuredW\":\"132\",\"measuredH\":\"40\",\"x\":\"614\",\"y\":\"233\",\"properties\":{\"bold\":\"true\",\"size\":\"32\",\"text\":\"Backend\"}},{\"ID\":\"2\",\"typeID\":\"Arrow\",\"zOrder\":\"278\",\"w\":\"19\",\"h\":\"80\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"711\",\"y\":\"146\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":17,\"y\":0},\"p1\":{\"x\":0.4835868694955965,\"y\":0.10168134507606086},\"p2\":{\"x\":0,\"y\":79},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"121\",\"typeID\":\"Arrow\",\"zOrder\":\"275\",\"w\":\"42\",\"h\":\"152\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"714\",\"y\":\"483\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.44703401743041876,\"y\":0.25307843688501525},\"p2\":{\"x\":9,\"y\":151.5},\"rightArrow\":\"false\"}},{\"ID\":\"308\",\"typeID\":\"Arrow\",\"zOrder\":\"301\",\"w\":\"41\",\"h\":\"264\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"688\",\"y\":\"645\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":28,\"y\":-0.5},\"p1\":{\"x\":0.4709081800615472,\"y\":-0.12924926644242468},\"p2\":{\"x\":41,\"y\":263.5},\"rightArrow\":\"false\"}},{\"ID\":\"341\",\"typeID\":\"Arrow\",\"zOrder\":\"302\",\"w\":\"87\",\"h\":\"151\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"657\",\"y\":\"921\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":72,\"y\":0},\"p1\":{\"x\":0.4164731105949616,\"y\":0.25156333750223336},\"p2\":{\"x\":0,\"y\":151},\"rightArrow\":\"false\"}},{\"ID\":\"544\",\"typeID\":\"Arrow\",\"zOrder\":\"303\",\"w\":\"43\",\"h\":\"82\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"800\",\"y\":\"826\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":82},\"p1\":{\"x\":0.5274187832250412,\"y\":-0.12252805670406891},\"p2\":{\"x\":42.5,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"545\",\"typeID\":\"Arrow\",\"zOrder\":\"304\",\"w\":\"48\",\"h\":\"73\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"582\",\"y\":\"836\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":48,\"y\":72.5},\"p1\":{\"x\":0.5228612603170445,\"y\":0.14935150006550507},\"p2\":{\"x\":0,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"547\",\"typeID\":\"Arrow\",\"zOrder\":\"352\",\"w\":\"154\",\"h\":\"40\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"814\",\"y\":\"470\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.42993874425727413,\"y\":0.06087289433384378},\"p2\":{\"x\":154,\"y\":40},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"548\",\"typeID\":\"Arrow\",\"zOrder\":\"353\",\"w\":\"152\",\"h\":\"83\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"822\",\"y\":\"472\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.5124862467909179,\"y\":-0.09515553629180143},\"p2\":{\"x\":152,\"y\":83},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"549\",\"typeID\":\"Arrow\",\"zOrder\":\"354\",\"w\":\"124\",\"h\":\"57\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"458\",\"y\":\"474\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":124,\"y\":0},\"p1\":{\"x\":0.4977437042068999,\"y\":-0.11213547479256634},\"p2\":{\"x\":0,\"y\":57},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"550\",\"typeID\":\"Arrow\",\"zOrder\":\"355\",\"w\":\"151\",\"h\":\"29\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"822\",\"y\":\"424\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":150,\"y\":28},\"p1\":{\"x\":0.4823054457996908,\"y\":0.02336368321594228},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"551\",\"typeID\":\"Arrow\",\"zOrder\":\"356\",\"w\":\"153\",\"h\":\"13\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"824\",\"y\":\"407\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":152,\"y\":0},\"p1\":{\"x\":0.4798692360633173,\"y\":-0.004989676531314521},\"p2\":{\"x\":0,\"y\":12},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"552\",\"typeID\":\"Arrow\",\"zOrder\":\"357\",\"h\":\"60\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"822\",\"y\":\"358\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":149,\"y\":0},\"p1\":{\"x\":0.4552212800557556,\"y\":-0.05494250203275647},\"p2\":{\"x\":0,\"y\":59},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"553\",\"typeID\":\"Arrow\",\"zOrder\":\"358\",\"w\":\"129\",\"h\":\"36\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"443\",\"y\":\"426\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":129,\"y\":0},\"p1\":{\"x\":0.4772874058127019,\"y\":0.05888051668460705},\"p2\":{\"x\":0,\"y\":36},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"554\",\"typeID\":\"Arrow\",\"zOrder\":\"359\",\"w\":\"131\",\"h\":\"9\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"443\",\"y\":\"415\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":129,\"y\":7},\"p1\":{\"x\":0.4652789342214826,\"y\":-0.001332223147377271},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"555\",\"typeID\":\"Arrow\",\"zOrder\":\"360\",\"w\":\"143\",\"h\":\"53\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"433\",\"y\":\"368\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":141,\"y\":51},\"p1\":{\"x\":0.45522128005575574,\"y\":-0.054942502032756434},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"556\",\"typeID\":\"TextArea\",\"zOrder\":\"361\",\"w\":\"272\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"562\",\"y\":\"394\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"557\",\"typeID\":\"Label\",\"zOrder\":\"362\",\"w\":\"69\",\"measuredW\":\"69\",\"measuredH\":\"25\",\"x\":\"663\",\"y\":\"407\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Internet\"}},{\"ID\":\"558\",\"typeID\":\"TextArea\",\"zOrder\":\"363\",\"w\":\"299\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"166\",\"y\":\"345\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"559\",\"typeID\":\"Label\",\"zOrder\":\"364\",\"w\":\"223\",\"measuredW\":\"222\",\"measuredH\":\"25\",\"x\":\"204\",\"y\":\"355\",\"properties\":{\"size\":\"17\",\"text\":\"How does the internet work?\"}},{\"ID\":\"560\",\"typeID\":\"TextArea\",\"zOrder\":\"365\",\"w\":\"299\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"166\",\"y\":\"395\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"561\",\"typeID\":\"Label\",\"zOrder\":\"366\",\"w\":\"119\",\"measuredW\":\"118\",\"measuredH\":\"25\",\"x\":\"256\",\"y\":\"403\",\"properties\":{\"size\":\"17\",\"text\":\"What is HTTP?\"}},{\"ID\":\"562\",\"typeID\":\"TextArea\",\"zOrder\":\"367\",\"w\":\"299\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"166\",\"y\":\"441\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"563\",\"typeID\":\"Label\",\"zOrder\":\"368\",\"w\":\"230\",\"measuredW\":\"230\",\"measuredH\":\"25\",\"x\":\"200\",\"y\":\"449\",\"properties\":{\"size\":\"17\",\"text\":\"Browsers and how they work?\"}},{\"ID\":\"564\",\"typeID\":\"TextArea\",\"zOrder\":\"369\",\"w\":\"280\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"340\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"565\",\"typeID\":\"Label\",\"zOrder\":\"370\",\"w\":\"179\",\"measuredW\":\"179\",\"measuredH\":\"25\",\"x\":\"1010\",\"y\":\"348\",\"properties\":{\"size\":\"17\",\"text\":\"DNS and how it works?\"}},{\"ID\":\"566\",\"typeID\":\"TextArea\",\"zOrder\":\"371\",\"w\":\"280\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"958\",\"y\":\"386\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"567\",\"typeID\":\"Label\",\"zOrder\":\"372\",\"w\":\"179\",\"measuredW\":\"180\",\"measuredH\":\"25\",\"x\":\"1009\",\"y\":\"394\",\"properties\":{\"size\":\"17\",\"text\":\"What is Domain Name?\"}},{\"ID\":\"568\",\"typeID\":\"TextArea\",\"zOrder\":\"373\",\"w\":\"280\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"432\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"569\",\"typeID\":\"Label\",\"zOrder\":\"374\",\"w\":\"133\",\"measuredW\":\"130\",\"measuredH\":\"25\",\"x\":\"1033\",\"y\":\"440\",\"properties\":{\"size\":\"17\",\"text\":\"What is hosting?\"}},{\"ID\":\"570\",\"typeID\":\"Icon\",\"zOrder\":\"375\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"556\",\"y\":\"384\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"571\",\"typeID\":\"Icon\",\"zOrder\":\"376\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"556\",\"y\":\"384\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"572\",\"typeID\":\"Icon\",\"zOrder\":\"377\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"159\",\"y\":\"336\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"573\",\"typeID\":\"Icon\",\"zOrder\":\"378\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"159\",\"y\":\"336\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"574\",\"typeID\":\"Icon\",\"zOrder\":\"379\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"158\",\"y\":\"388\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"575\",\"typeID\":\"Icon\",\"zOrder\":\"380\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"158\",\"y\":\"388\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"576\",\"typeID\":\"Icon\",\"zOrder\":\"381\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"158\",\"y\":\"433\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"577\",\"typeID\":\"Icon\",\"zOrder\":\"382\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"158\",\"y\":\"433\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"578\",\"typeID\":\"Icon\",\"zOrder\":\"383\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1225\",\"y\":\"331\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"579\",\"typeID\":\"Icon\",\"zOrder\":\"384\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1225\",\"y\":\"331\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"580\",\"typeID\":\"Icon\",\"zOrder\":\"385\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1224\",\"y\":\"381\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"581\",\"typeID\":\"Icon\",\"zOrder\":\"386\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1224\",\"y\":\"381\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"582\",\"typeID\":\"Icon\",\"zOrder\":\"387\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1224\",\"y\":\"426\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"583\",\"typeID\":\"Icon\",\"zOrder\":\"388\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1224\",\"y\":\"426\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"584\",\"typeID\":\"TextArea\",\"zOrder\":\"389\",\"w\":\"272\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"562\",\"y\":\"450\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"585\",\"typeID\":\"Label\",\"zOrder\":\"390\",\"w\":\"221\",\"measuredW\":\"216\",\"measuredH\":\"25\",\"x\":\"590\",\"y\":\"462\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Basic Frontend Knowledge\"}},{\"ID\":\"586\",\"typeID\":\"TextArea\",\"zOrder\":\"391\",\"w\":\"142\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"323\",\"y\":\"506\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"587\",\"typeID\":\"Label\",\"zOrder\":\"392\",\"w\":\"49\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"369\",\"y\":\"516\",\"properties\":{\"size\":\"17\",\"text\":\"HTML\"}},{\"ID\":\"588\",\"typeID\":\"TextArea\",\"zOrder\":\"393\",\"w\":\"142\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"485\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"589\",\"typeID\":\"Label\",\"zOrder\":\"394\",\"w\":\"38\",\"measuredW\":\"37\",\"measuredH\":\"25\",\"x\":\"1011\",\"y\":\"495\",\"properties\":{\"size\":\"17\",\"text\":\"CSS\"}},{\"ID\":\"590\",\"typeID\":\"TextArea\",\"zOrder\":\"395\",\"w\":\"142\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"536\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"591\",\"typeID\":\"Arrow\",\"zOrder\":\"396\",\"w\":\"135\",\"h\":\"195\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"837\",\"y\":\"644\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":134.5,\"y\":195},\"p1\":{\"x\":0.5227813114793675,\"y\":0.0017380179353795957},\"p2\":{\"x\":-0.5,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"592\",\"typeID\":\"Arrow\",\"zOrder\":\"397\",\"w\":\"136\",\"h\":\"131\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"842\",\"y\":\"642\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":135.5,\"y\":131},\"p1\":{\"x\":0.5227813114793675,\"y\":0.0017380179353796794},\"p2\":{\"x\":-0.5,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"593\",\"typeID\":\"Arrow\",\"zOrder\":\"398\",\"w\":\"138\",\"h\":\"76\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"835\",\"y\":\"636\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":137.5,\"y\":76},\"p1\":{\"x\":0.524315747719159,\"y\":-0.026418088060293544},\"p2\":{\"x\":-0.5,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"594\",\"typeID\":\"Arrow\",\"zOrder\":\"399\",\"w\":\"141\",\"h\":\"30\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"834\",\"y\":\"630\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":140.5,\"y\":30},\"p1\":{\"x\":0.5227813114793672,\"y\":0.0017380179353795478},\"p2\":{\"x\":-0.5,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"595\",\"typeID\":\"Arrow\",\"zOrder\":\"400\",\"w\":\"144\",\"h\":\"5\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"831\",\"y\":\"619\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":143.5,\"y\":0},\"p1\":{\"x\":0.5227813114793672,\"y\":0.001738017935379522},\"p2\":{\"x\":-0.5,\"y\":5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"596\",\"typeID\":\"TextArea\",\"zOrder\":\"401\",\"w\":\"267\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"596\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"597\",\"typeID\":\"Label\",\"zOrder\":\"402\",\"w\":\"170\",\"measuredW\":\"168\",\"measuredH\":\"25\",\"x\":\"1009\",\"y\":\"606\",\"properties\":{\"size\":\"17\",\"text\":\"Memory Management\"}},{\"ID\":\"598\",\"typeID\":\"TextArea\",\"zOrder\":\"403\",\"w\":\"268\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"645\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"599\",\"typeID\":\"Label\",\"zOrder\":\"404\",\"w\":\"224\",\"measuredW\":\"222\",\"measuredH\":\"25\",\"x\":\"982\",\"y\":\"654\",\"properties\":{\"size\":\"17\",\"text\":\"Interprocess Communication\"}},{\"ID\":\"600\",\"typeID\":\"TextArea\",\"zOrder\":\"405\",\"w\":\"268\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"695\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"601\",\"typeID\":\"Label\",\"zOrder\":\"406\",\"w\":\"135\",\"measuredW\":\"133\",\"measuredH\":\"25\",\"x\":\"1025\",\"y\":\"705\",\"properties\":{\"size\":\"17\",\"text\":\"I/O Management\"}},{\"ID\":\"602\",\"typeID\":\"TextArea\",\"zOrder\":\"407\",\"w\":\"268\",\"h\":\"65\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"745\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"603\",\"typeID\":\"Label\",\"zOrder\":\"408\",\"w\":\"115\",\"measuredW\":\"114\",\"measuredH\":\"25\",\"x\":\"1037\",\"y\":\"756\",\"properties\":{\"size\":\"17\",\"text\":\"POSIX Basics\",\"bold\":\"true\"}},{\"ID\":\"604\",\"typeID\":\"Label\",\"zOrder\":\"409\",\"w\":\"180\",\"measuredW\":\"180\",\"measuredH\":\"23\",\"x\":\"1003\",\"y\":\"777\",\"properties\":{\"size\":\"15\",\"text\":\"stdin, stdout, stderr, pipes\"}},{\"ID\":\"605\",\"typeID\":\"TextArea\",\"zOrder\":\"410\",\"w\":\"268\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"959\",\"y\":\"817\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"606\",\"typeID\":\"Label\",\"zOrder\":\"411\",\"w\":\"218\",\"measuredW\":\"216\",\"measuredH\":\"25\",\"x\":\"984\",\"y\":\"826\",\"properties\":{\"size\":\"17\",\"text\":\"Basic Networking Concepts\"}},{\"ID\":\"607\",\"typeID\":\"Arrow\",\"zOrder\":\"412\",\"w\":\"128\",\"h\":\"151\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"456\",\"y\":\"648\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":128,\"y\":0},\"p1\":{\"x\":0.4075757037878519,\"y\":-0.014129007064503547},\"p2\":{\"x\":0,\"y\":151},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"608\",\"typeID\":\"Arrow\",\"zOrder\":\"413\",\"w\":\"125\",\"h\":\"107\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"457\",\"y\":\"641\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":125,\"y\":0},\"p1\":{\"x\":0.4291571249168944,\"y\":-0.03135849892886164},\"p2\":{\"x\":0,\"y\":107},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"609\",\"typeID\":\"Arrow\",\"zOrder\":\"414\",\"w\":\"119\",\"h\":\"55\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"459\",\"y\":\"639\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":119,\"y\":0},\"p1\":{\"x\":0.513033864773653,\"y\":-0.03543581985336902},\"p2\":{\"x\":0,\"y\":55},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"610\",\"typeID\":\"Arrow\",\"zOrder\":\"415\",\"w\":\"131\",\"h\":\"11\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"452\",\"y\":\"633\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":131,\"y\":0},\"p1\":{\"x\":0.44012908969508124,\"y\":-0.005675495214778532},\"p2\":{\"x\":0,\"y\":11},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"611\",\"typeID\":\"Arrow\",\"zOrder\":\"416\",\"w\":\"138\",\"h\":\"32\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"447\",\"y\":\"599\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":138,\"y\":32},\"p1\":{\"x\":0.4566473988439307,\"y\":-0.03179190751445087},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"612\",\"typeID\":\"Label\",\"zOrder\":\"417\",\"w\":\"84\",\"measuredW\":\"83\",\"measuredH\":\"25\",\"x\":\"993\",\"y\":\"545\",\"properties\":{\"size\":\"17\",\"text\":\"JavaScript\"}},{\"ID\":\"613\",\"typeID\":\"TextArea\",\"zOrder\":\"418\",\"w\":\"272\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"575\",\"y\":\"613\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"614\",\"typeID\":\"TextArea\",\"zOrder\":\"419\",\"w\":\"269\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"198\",\"y\":\"573\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"615\",\"typeID\":\"Label\",\"zOrder\":\"420\",\"w\":\"123\",\"measuredW\":\"122\",\"measuredH\":\"25\",\"x\":\"271\",\"y\":\"583\",\"properties\":{\"size\":\"17\",\"text\":\"Terminal Usage\"}},{\"ID\":\"616\",\"typeID\":\"TextArea\",\"zOrder\":\"421\",\"w\":\"269\",\"h\":\"101\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"198\",\"y\":\"772\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"617\",\"typeID\":\"Label\",\"zOrder\":\"422\",\"w\":\"210\",\"measuredW\":\"215\",\"measuredH\":\"25\",\"x\":\"228\",\"y\":\"784\",\"properties\":{\"size\":\"17\",\"text\":\"Basic Terminal Commands\",\"bold\":\"true\"}},{\"ID\":\"618\",\"typeID\":\"Label\",\"zOrder\":\"423\",\"w\":\"238\",\"measuredW\":\"235\",\"measuredH\":\"25\",\"x\":\"214\",\"y\":\"810\",\"properties\":{\"size\":\"17\",\"text\":\"grep, awk, sed, lsof, curl, wget\"}},{\"ID\":\"619\",\"typeID\":\"Label\",\"zOrder\":\"424\",\"w\":\"216\",\"measuredW\":\"216\",\"measuredH\":\"25\",\"x\":\"225\",\"y\":\"836\",\"properties\":{\"size\":\"17\",\"text\":\"tail, head, less, find, ssh, kill\"}},{\"ID\":\"620\",\"typeID\":\"Label\",\"zOrder\":\"425\",\"w\":\"222\",\"measuredW\":\"221\",\"measuredH\":\"25\",\"x\":\"603\",\"y\":\"625\",\"properties\":{\"size\":\"17\",\"text\":\"OS and General Knowledge\",\"bold\":\"true\"}},{\"ID\":\"621\",\"typeID\":\"TextArea\",\"zOrder\":\"426\",\"w\":\"267\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"199\",\"y\":\"672\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"622\",\"typeID\":\"Label\",\"zOrder\":\"427\",\"w\":\"172\",\"measuredW\":\"170\",\"measuredH\":\"25\",\"x\":\"247\",\"y\":\"681\",\"properties\":{\"size\":\"17\",\"text\":\"Process Management\"}},{\"ID\":\"623\",\"typeID\":\"TextArea\",\"zOrder\":\"428\",\"w\":\"268\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"199\",\"y\":\"722\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"624\",\"typeID\":\"Label\",\"zOrder\":\"429\",\"w\":\"202\",\"measuredW\":\"202\",\"measuredH\":\"25\",\"x\":\"232\",\"y\":\"732\",\"properties\":{\"size\":\"17\",\"text\":\"Threads and Concurrency\"}},{\"ID\":\"625\",\"typeID\":\"TextArea\",\"zOrder\":\"430\",\"w\":\"268\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"199\",\"y\":\"622\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"626\",\"typeID\":\"Label\",\"zOrder\":\"431\",\"w\":\"197\",\"measuredW\":\"197\",\"measuredH\":\"25\",\"x\":\"234\",\"y\":\"631\",\"properties\":{\"size\":\"17\",\"text\":\"How OSs work in General\"}},{\"ID\":\"629\",\"typeID\":\"Arrow\",\"zOrder\":\"305\",\"w\":\"118\",\"h\":\"74\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"427\",\"y\":\"932\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":118,\"y\":-0.5},\"p1\":{\"x\":0.5873541588257404,\"y\":0.06127211140383051},\"p2\":{\"x\":0,\"y\":73.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"630\",\"typeID\":\"Arrow\",\"zOrder\":\"306\",\"w\":\"91\",\"h\":\"61\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"910\",\"y\":\"930\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":91,\"y\":60},\"p1\":{\"x\":0.48631883875436893,\"y\":0.01448408325199147},\"p2\":{\"x\":0,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"631\",\"typeID\":\"Arrow\",\"zOrder\":\"307\",\"w\":\"93\",\"h\":\"24\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"906\",\"y\":\"919\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":93,\"y\":23},\"p1\":{\"x\":0.47986923606331733,\"y\":-0.0049896765313145654},\"p2\":{\"x\":0,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"632\",\"typeID\":\"Arrow\",\"zOrder\":\"308\",\"w\":\"115\",\"h\":\"18\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"901\",\"y\":\"892\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":115,\"y\":0},\"p1\":{\"x\":0.4495149461236092,\"y\":-0.004886187015480865},\"p2\":{\"x\":0,\"y\":17.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"633\",\"typeID\":\"Arrow\",\"zOrder\":\"309\",\"w\":\"131\",\"h\":\"45\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"417\",\"y\":\"916\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":131,\"y\":-0.5},\"p1\":{\"x\":0.5873541588257396,\"y\":0.061272111403828454},\"p2\":{\"x\":0,\"y\":44.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"634\",\"typeID\":\"Arrow\",\"zOrder\":\"310\",\"w\":\"141\",\"h\":\"5\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"428\",\"y\":\"907\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":141,\"y\":0},\"p1\":{\"x\":0.5,\"y\":0},\"p2\":{\"x\":0,\"y\":5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"635\",\"typeID\":\"TextArea\",\"zOrder\":\"311\",\"w\":\"136\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"770\",\"y\":\"797\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"636\",\"typeID\":\"TextArea\",\"zOrder\":\"312\",\"w\":\"136\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"299\",\"y\":\"891\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"637\",\"typeID\":\"Label\",\"zOrder\":\"313\",\"w\":\"38\",\"measuredW\":\"37\",\"measuredH\":\"25\",\"x\":\"348\",\"y\":\"899\",\"properties\":{\"size\":\"17\",\"text\":\"Java\"}},{\"ID\":\"638\",\"typeID\":\"TextArea\",\"zOrder\":\"314\",\"w\":\"136\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"512\",\"y\":\"801\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"639\",\"typeID\":\"Label\",\"zOrder\":\"315\",\"w\":\"39\",\"measuredW\":\"38\",\"measuredH\":\"25\",\"x\":\"560\",\"y\":\"809\",\"properties\":{\"size\":\"17\",\"text\":\"Rust\"}},{\"ID\":\"640\",\"typeID\":\"Label\",\"zOrder\":\"316\",\"w\":\"26\",\"measuredW\":\"23\",\"measuredH\":\"25\",\"x\":\"825\",\"y\":\"804\",\"properties\":{\"size\":\"17\",\"text\":\"Go\"}},{\"ID\":\"641\",\"typeID\":\"TextArea\",\"zOrder\":\"317\",\"w\":\"136\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"299\",\"y\":\"940\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"642\",\"typeID\":\"Label\",\"zOrder\":\"318\",\"w\":\"27\",\"measuredW\":\"25\",\"measuredH\":\"25\",\"x\":\"353\",\"y\":\"948\",\"properties\":{\"size\":\"17\",\"text\":\"C#\"}},{\"ID\":\"648\",\"typeID\":\"TextArea\",\"zOrder\":\"333\",\"w\":\"136\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"299\",\"y\":\"987\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"649\",\"typeID\":\"Label\",\"zOrder\":\"334\",\"w\":\"34\",\"measuredW\":\"34\",\"measuredH\":\"25\",\"x\":\"350\",\"y\":\"995\",\"properties\":{\"size\":\"17\",\"text\":\"PHP\"}},{\"ID\":\"668\",\"typeID\":\"Canvas\",\"zOrder\":\"288\",\"w\":\"408\",\"h\":\"162\",\"measuredW\":\"100\",\"measuredH\":\"70\",\"x\":\"107\",\"y\":\"129\"},{\"ID\":\"671\",\"typeID\":\"Label\",\"zOrder\":\"294\",\"w\":\"324\",\"measuredW\":\"320\",\"measuredH\":\"24\",\"x\":\"167\",\"y\":\"215\",\"properties\":{\"size\":\"16\",\"text\":\"Order in roadmap not strict (Learn anytime)\"}},{\"ID\":\"674\",\"typeID\":\"Icon\",\"zOrder\":\"319\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"762\",\"y\":\"789\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"675\",\"typeID\":\"Icon\",\"zOrder\":\"320\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"762\",\"y\":\"789\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"676\",\"typeID\":\"Icon\",\"zOrder\":\"321\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"762\",\"y\":\"789\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"677\",\"typeID\":\"Icon\",\"zOrder\":\"322\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"884\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"678\",\"typeID\":\"Icon\",\"zOrder\":\"323\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"884\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"679\",\"typeID\":\"Icon\",\"zOrder\":\"324\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"884\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"680\",\"typeID\":\"Icon\",\"zOrder\":\"325\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"504\",\"y\":\"792\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"681\",\"typeID\":\"Icon\",\"zOrder\":\"326\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"504\",\"y\":\"792\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"682\",\"typeID\":\"Icon\",\"zOrder\":\"327\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"504\",\"y\":\"792\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"683\",\"typeID\":\"Icon\",\"zOrder\":\"328\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"934\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"684\",\"typeID\":\"Icon\",\"zOrder\":\"329\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"934\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"685\",\"typeID\":\"Icon\",\"zOrder\":\"330\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"934\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"686\",\"typeID\":\"TextArea\",\"zOrder\":\"331\",\"w\":\"380\",\"h\":\"98\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"536\",\"y\":\"890\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"687\",\"typeID\":\"Label\",\"zOrder\":\"332\",\"w\":\"149\",\"measuredW\":\"147\",\"measuredH\":\"25\",\"x\":\"651\",\"y\":\"903\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn a Language\"}},{\"ID\":\"688\",\"typeID\":\"Icon\",\"zOrder\":\"335\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"983\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"689\",\"typeID\":\"Icon\",\"zOrder\":\"336\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"983\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"690\",\"typeID\":\"Icon\",\"zOrder\":\"337\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"291\",\"y\":\"983\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"692\",\"typeID\":\"Icon\",\"zOrder\":\"344\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1110\",\"y\":\"869\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"693\",\"typeID\":\"Icon\",\"zOrder\":\"345\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1110\",\"y\":\"869\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"694\",\"typeID\":\"Icon\",\"zOrder\":\"346\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1111\",\"y\":\"917\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"695\",\"typeID\":\"Icon\",\"zOrder\":\"347\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1111\",\"y\":\"917\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"696\",\"typeID\":\"Icon\",\"zOrder\":\"348\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1111\",\"y\":\"917\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"697\",\"typeID\":\"Icon\",\"zOrder\":\"349\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1111\",\"y\":\"961\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"698\",\"typeID\":\"Icon\",\"zOrder\":\"350\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1111\",\"y\":\"961\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"699\",\"typeID\":\"Icon\",\"zOrder\":\"351\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1111\",\"y\":\"961\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"773\",\"typeID\":\"Canvas\",\"zOrder\":\"279\",\"w\":\"350\",\"h\":\"141\",\"measuredW\":\"100\",\"measuredH\":\"70\",\"x\":\"919\",\"y\":\"139\"},{\"ID\":\"774\",\"typeID\":\"Label\",\"zOrder\":\"280\",\"measuredW\":\"315\",\"measuredH\":\"25\",\"x\":\"933\",\"y\":\"156\",\"properties\":{\"size\":\"17\",\"text\":\"Find the detailed version of this roadmap\"}},{\"ID\":\"775\",\"typeID\":\"Label\",\"zOrder\":\"281\",\"measuredW\":\"323\",\"measuredH\":\"25\",\"x\":\"933\",\"y\":\"184\",\"properties\":{\"size\":\"17\",\"text\":\"along with resources and other roadmaps\"}},{\"ID\":\"776\",\"typeID\":\"Canvas\",\"zOrder\":\"282\",\"w\":\"320\",\"h\":\"45\",\"measuredW\":\"100\",\"measuredH\":\"70\",\"x\":\"934\",\"y\":\"220\",\"properties\":{\"borderColor\":\"4273622\",\"color\":\"4273622\"}},{\"ID\":\"779\",\"typeID\":\"Label\",\"zOrder\":\"291\",\"measuredW\":\"264\",\"measuredH\":\"24\",\"x\":\"166\",\"y\":\"150\",\"properties\":{\"size\":\"16\",\"text\":\"Personal Recommendation / Opinion\"}},{\"ID\":\"781\",\"typeID\":\"Icon\",\"zOrder\":\"295\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"130\",\"y\":\"215\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"782\",\"typeID\":\"Icon\",\"zOrder\":\"296\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"130\",\"y\":\"215\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"783\",\"typeID\":\"Label\",\"zOrder\":\"297\",\"measuredW\":\"278\",\"measuredH\":\"24\",\"x\":\"166\",\"y\":\"183\",\"properties\":{\"size\":\"16\",\"text\":\"Alternative Option - Pick this or purple\"}},{\"ID\":\"801\",\"typeID\":\"Label\",\"zOrder\":\"283\",\"measuredW\":\"104\",\"measuredH\":\"28\",\"x\":\"1075\",\"y\":\"228\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"roadmap.sh\"}},{\"ID\":\"802\",\"typeID\":\"Label\",\"zOrder\":\"284\",\"measuredW\":\"37\",\"measuredH\":\"28\",\"x\":\"1010\",\"y\":\"228\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"http\"}},{\"ID\":\"803\",\"typeID\":\"Label\",\"zOrder\":\"285\",\"measuredW\":\"6\",\"measuredH\":\"28\",\"x\":\"1047\",\"y\":\"228\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"size\":\"20\",\"text\":\":\"}},{\"ID\":\"804\",\"typeID\":\"Label\",\"zOrder\":\"286\",\"measuredW\":\"10\",\"measuredH\":\"28\",\"x\":\"1054\",\"y\":\"229\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"}},{\"ID\":\"805\",\"typeID\":\"Label\",\"zOrder\":\"287\",\"measuredW\":\"10\",\"measuredH\":\"28\",\"x\":\"1062\",\"y\":\"229\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"}},{\"ID\":\"806\",\"typeID\":\"Icon\",\"zOrder\":\"289\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"130\",\"y\":\"150\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"807\",\"typeID\":\"Icon\",\"zOrder\":\"290\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"130\",\"y\":\"150\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"808\",\"typeID\":\"Label\",\"zOrder\":\"292\",\"measuredW\":\"160\",\"measuredH\":\"24\",\"x\":\"166\",\"y\":\"247\",\"properties\":{\"size\":\"16\",\"text\":\"I wouldn't recommend\"}},{\"ID\":\"809\",\"typeID\":\"Icon\",\"zOrder\":\"293\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"130\",\"y\":\"247\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"810\",\"typeID\":\"Icon\",\"zOrder\":\"298\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"130\",\"y\":\"182\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"811\",\"typeID\":\"Icon\",\"zOrder\":\"299\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"130\",\"y\":\"182\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"812\",\"typeID\":\"Icon\",\"zOrder\":\"300\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"130\",\"y\":\"182\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"813\",\"typeID\":\"TextArea\",\"zOrder\":\"338\",\"w\":\"136\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"989\",\"y\":\"876\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"814\",\"typeID\":\"Label\",\"zOrder\":\"339\",\"w\":\"85\",\"measuredW\":\"83\",\"measuredH\":\"25\",\"x\":\"1016\",\"y\":\"884\",\"properties\":{\"size\":\"17\",\"text\":\"JavaScript\"}},{\"ID\":\"815\",\"typeID\":\"TextArea\",\"zOrder\":\"340\",\"w\":\"136\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"989\",\"y\":\"922\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"816\",\"typeID\":\"Label\",\"zOrder\":\"341\",\"w\":\"56\",\"measuredW\":\"54\",\"measuredH\":\"25\",\"x\":\"1029\",\"y\":\"930\",\"properties\":{\"size\":\"17\",\"text\":\"Python\"}},{\"ID\":\"817\",\"typeID\":\"TextArea\",\"zOrder\":\"342\",\"w\":\"136\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"989\",\"y\":\"968\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"818\",\"typeID\":\"Label\",\"zOrder\":\"343\",\"w\":\"42\",\"measuredW\":\"40\",\"measuredH\":\"25\",\"x\":\"1036\",\"y\":\"976\",\"properties\":{\"size\":\"17\",\"text\":\"Ruby\"}},{\"ID\":\"819\",\"typeID\":\"Label\",\"zOrder\":\"432\",\"w\":\"347\",\"measuredW\":\"347\",\"measuredH\":\"23\",\"x\":\"552\",\"y\":\"931\",\"properties\":{\"size\":\"15\",\"text\":\"Make sure to learn it’s quirks. Core detail about it's\"}},{\"ID\":\"820\",\"typeID\":\"Label\",\"zOrder\":\"433\",\"w\":\"306\",\"measuredW\":\"302\",\"measuredH\":\"23\",\"x\":\"573\",\"y\":\"954\",\"properties\":{\"size\":\"15\",\"text\":\"runtime e.g. concurrency, memory model etc.\"}},{\"ID\":\"844\",\"typeID\":\"Arrow\",\"zOrder\":\"434\",\"w\":\"58\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1094\",\"y\":\"1090\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":58,\"y\":1},\"p1\":{\"x\":0.48727519511367484,\"y\":-0.011876484560570062},\"p2\":{\"x\":0,\"y\":1},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"845\",\"typeID\":\"Arrow\",\"zOrder\":\"435\",\"w\":\"85\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"757\",\"y\":\"1086\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":83,\"y\":1},\"p1\":{\"x\":0.4872751951136748,\"y\":-0.01187648456057007},\"p2\":{\"x\":0,\"y\":1},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"846\",\"typeID\":\"Arrow\",\"zOrder\":\"436\",\"w\":\"56\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"390\",\"y\":\"1092\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":0},\"p1\":{\"x\":0.4872751951136748,\"y\":-0.011876484560570066},\"p2\":{\"x\":55,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"847\",\"typeID\":\"TextArea\",\"zOrder\":\"437\",\"w\":\"216\",\"h\":\"54\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"180\",\"y\":\"1064\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"848\",\"typeID\":\"Label\",\"zOrder\":\"438\",\"w\":\"155\",\"measuredW\":\"154\",\"measuredH\":\"25\",\"x\":\"211\",\"y\":\"1079\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Basic Usage of Git\"}},{\"ID\":\"849\",\"typeID\":\"TextArea\",\"zOrder\":\"439\",\"w\":\"131\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1148\",\"y\":\"966\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"850\",\"typeID\":\"Label\",\"zOrder\":\"440\",\"w\":\"64\",\"measuredW\":\"58\",\"measuredH\":\"25\",\"x\":\"1182\",\"y\":\"979\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"GitHub\"}},{\"ID\":\"851\",\"typeID\":\"TextArea\",\"zOrder\":\"441\",\"w\":\"319\",\"h\":\"78\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"803\",\"y\":\"1049\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"852\",\"typeID\":\"Label\",\"zOrder\":\"442\",\"w\":\"189\",\"measuredW\":\"181\",\"measuredH\":\"25\",\"x\":\"869\",\"y\":\"1064\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Repo hosting services\"}},{\"ID\":\"853\",\"typeID\":\"Label\",\"zOrder\":\"443\",\"w\":\"279\",\"measuredW\":\"279\",\"measuredH\":\"23\",\"x\":\"824\",\"y\":\"1090\",\"properties\":{\"size\":\"15\",\"text\":\"Create account and Learn to use GitHub\"}},{\"ID\":\"854\",\"typeID\":\"TextArea\",\"zOrder\":\"444\",\"w\":\"336\",\"h\":\"77\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"434\",\"y\":\"1050\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"855\",\"typeID\":\"Label\",\"zOrder\":\"445\",\"w\":\"201\",\"measuredW\":\"200\",\"measuredH\":\"25\",\"x\":\"499\",\"y\":\"1065\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Version Control Systems\"}},{\"ID\":\"856\",\"typeID\":\"Label\",\"zOrder\":\"446\",\"w\":\"292\",\"measuredW\":\"291\",\"measuredH\":\"23\",\"x\":\"453\",\"y\":\"1090\",\"properties\":{\"size\":\"15\",\"text\":\"What are they and why you should use one\"}},{\"ID\":\"857\",\"typeID\":\"TextArea\",\"zOrder\":\"447\",\"w\":\"131\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1148\",\"y\":\"1074\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"858\",\"typeID\":\"Label\",\"zOrder\":\"448\",\"w\":\"80\",\"measuredW\":\"79\",\"measuredH\":\"25\",\"x\":\"1174\",\"y\":\"1086\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"Bitbucket\"}},{\"ID\":\"859\",\"typeID\":\"TextArea\",\"zOrder\":\"449\",\"w\":\"131\",\"h\":\"48\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1148\",\"y\":\"1074\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"861\",\"typeID\":\"__group__\",\"zOrder\":\"453\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"w\":\"24\",\"h\":\"24\",\"x\":\"172\",\"y\":\"1056\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"typeID\":\"Icon\",\"zOrder\":\"0\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"0\",\"y\":\"0\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1\",\"typeID\":\"Icon\",\"zOrder\":\"1\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"0\",\"y\":\"0\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}}]}}},{\"ID\":\"862\",\"typeID\":\"__group__\",\"zOrder\":\"454\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"w\":\"24\",\"h\":\"24\",\"x\":\"1262\",\"y\":\"958\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"typeID\":\"Icon\",\"zOrder\":\"0\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"0\",\"y\":\"0\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1\",\"typeID\":\"Icon\",\"zOrder\":\"1\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"0\",\"y\":\"0\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}}]}}},{\"ID\":\"866\",\"typeID\":\"TextArea\",\"zOrder\":\"450\",\"w\":\"131\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1148\",\"y\":\"1020\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"867\",\"typeID\":\"Label\",\"zOrder\":\"451\",\"w\":\"52\",\"measuredW\":\"50\",\"measuredH\":\"25\",\"x\":\"1188\",\"y\":\"1032\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"Gitlab\"}},{\"ID\":\"868\",\"typeID\":\"TextArea\",\"zOrder\":\"452\",\"w\":\"131\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1148\",\"y\":\"1020\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"869\",\"typeID\":\"Arrow\",\"zOrder\":\"101\",\"w\":\"85\",\"h\":\"75\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"572\",\"y\":\"1107\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":85,\"y\":0},\"p1\":{\"x\":0.6098445595854923,\"y\":-0.20259067357512958},\"p2\":{\"x\":0,\"y\":74.5},\"rightArrow\":\"false\"}},{\"ID\":\"877\",\"typeID\":\"Arrow\",\"zOrder\":\"102\",\"w\":\"14\",\"h\":\"62\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"560\",\"y\":\"1953\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":12,\"y\":62},\"p1\":{\"x\":0.5415800415800416,\"y\":0.21101871101871103},\"p2\":{\"x\":14,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"878\",\"typeID\":\"Arrow\",\"zOrder\":\"103\",\"w\":\"78\",\"h\":\"48\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"434\",\"y\":\"1945\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":48},\"p1\":{\"x\":0.469926650366748,\"y\":-0.0004889975550122233},\"p2\":{\"x\":78,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"879\",\"typeID\":\"Arrow\",\"zOrder\":\"104\",\"w\":\"81\",\"h\":\"4\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"425\",\"y\":\"1943\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":4},\"p1\":{\"x\":0.4699266503667479,\"y\":-0.0004889975550122077},\"p2\":{\"x\":81,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"880\",\"typeID\":\"Arrow\",\"zOrder\":\"105\",\"w\":\"86\",\"h\":\"33\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"427\",\"y\":\"1902\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.469926650366748,\"y\":-0.0004889975550122311},\"p2\":{\"x\":86,\"y\":33},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"881\",\"typeID\":\"Arrow\",\"zOrder\":\"106\",\"w\":\"107\",\"h\":\"129\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"653\",\"y\":\"1809\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":128},\"p1\":{\"x\":0.47671351663836425,\"y\":-0.2605051125483238},\"p2\":{\"x\":106,\"y\":-0.5},\"rightArrow\":\"false\"}},{\"ID\":\"882\",\"typeID\":\"Arrow\",\"zOrder\":\"107\",\"w\":\"80\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"929\",\"y\":\"1803\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":-0.5},\"p1\":{\"x\":0.5633394785356862,\"y\":-0.002106926520937582},\"p2\":{\"x\":80,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"883\",\"typeID\":\"Arrow\",\"zOrder\":\"108\",\"w\":\"123\",\"h\":\"5\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"612\",\"y\":\"1809\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":123,\"y\":0},\"p1\":{\"x\":0.5029666818804199,\"y\":0.002738475581926061},\"p2\":{\"x\":0,\"y\":4.5},\"rightArrow\":\"false\"}},{\"ID\":\"884\",\"typeID\":\"Arrow\",\"zOrder\":\"109\",\"w\":\"94\",\"h\":\"52\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"663\",\"y\":\"1600\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":51.5},\"p1\":{\"x\":0.44142114384748704,\"y\":-0.10589254766031196},\"p2\":{\"x\":94,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"885\",\"typeID\":\"Arrow\",\"zOrder\":\"110\",\"w\":\"70\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"356\",\"y\":\"1652\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":1},\"p1\":{\"x\":0.46992665036674797,\"y\":-0.0004889975550122329},\"p2\":{\"x\":70,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"886\",\"typeID\":\"TextArea\",\"zOrder\":\"111\",\"w\":\"248\",\"h\":\"282\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"135\",\"y\":\"1442\"},{\"ID\":\"887\",\"typeID\":\"TextInput\",\"zOrder\":\"112\",\"w\":\"223\",\"measuredW\":\"64\",\"measuredH\":\"32\",\"x\":\"147\",\"y\":\"1494\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"OAuth\"}},{\"ID\":\"888\",\"typeID\":\"TextInput\",\"zOrder\":\"113\",\"w\":\"223\",\"measuredW\":\"181\",\"measuredH\":\"32\",\"x\":\"147\",\"y\":\"1530\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Basic Authentication\"}},{\"ID\":\"889\",\"typeID\":\"TextInput\",\"zOrder\":\"114\",\"w\":\"223\",\"measuredW\":\"184\",\"measuredH\":\"32\",\"x\":\"147\",\"y\":\"1566\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Token Authentication\"}},{\"ID\":\"890\",\"typeID\":\"TextInput\",\"zOrder\":\"115\",\"w\":\"223\",\"measuredW\":\"56\",\"measuredH\":\"32\",\"x\":\"147\",\"y\":\"1603\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"JWT\"}},{\"ID\":\"891\",\"typeID\":\"TextInput\",\"zOrder\":\"116\",\"w\":\"223\",\"measuredW\":\"78\",\"measuredH\":\"32\",\"x\":\"148\",\"y\":\"1639\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"OpenID\"}},{\"ID\":\"892\",\"typeID\":\"TextInput\",\"zOrder\":\"117\",\"w\":\"223\",\"measuredW\":\"64\",\"measuredH\":\"32\",\"x\":\"148\",\"y\":\"1676\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"SAML\"}},{\"ID\":\"893\",\"typeID\":\"Arrow\",\"zOrder\":\"118\",\"w\":\"57\",\"h\":\"33\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"426\",\"y\":\"1813\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":33},\"p1\":{\"x\":0.49200523633643467,\"y\":-0.09642807050352985},\"p2\":{\"x\":57,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"894\",\"typeID\":\"Arrow\",\"zOrder\":\"119\",\"w\":\"95\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"397\",\"y\":\"1802\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":3},\"p1\":{\"x\":0.4699266503667481,\"y\":-0.000488997555012226},\"p2\":{\"x\":95,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"895\",\"typeID\":\"Arrow\",\"zOrder\":\"120\",\"w\":\"81\",\"h\":\"20\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"239\",\"y\":\"1806\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":19.5},\"p1\":{\"x\":0.48167634252539915,\"y\":-0.05932510885341123},\"p2\":{\"x\":80,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"896\",\"typeID\":\"Arrow\",\"zOrder\":\"121\",\"w\":\"87\",\"h\":\"23\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"232\",\"y\":\"1779\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":1},\"p1\":{\"x\":0.5043513295729252,\"y\":0.08807413376309427},\"p2\":{\"x\":86,\"y\":23},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"897\",\"typeID\":\"Arrow\",\"zOrder\":\"122\",\"w\":\"242\",\"h\":\"203\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"616\",\"y\":\"1592\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":242,\"y\":0},\"p1\":{\"x\":0.5151777033596199,\"y\":0.14994058550286277},\"p2\":{\"x\":0,\"y\":202.5},\"rightArrow\":\"false\"}},{\"ID\":\"898\",\"typeID\":\"TextArea\",\"zOrder\":\"123\",\"w\":\"159\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"472\",\"y\":\"1779\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"899\",\"typeID\":\"Label\",\"zOrder\":\"124\",\"w\":\"70\",\"measuredW\":\"66\",\"measuredH\":\"25\",\"x\":\"515\",\"y\":\"1792\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Caching\"}},{\"ID\":\"900\",\"typeID\":\"TextArea\",\"zOrder\":\"125\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"115\",\"y\":\"1760\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"901\",\"typeID\":\"Label\",\"zOrder\":\"126\",\"w\":\"46\",\"measuredW\":\"45\",\"measuredH\":\"25\",\"x\":\"164\",\"y\":\"1768\",\"properties\":{\"size\":\"17\",\"text\":\"Redis\"}},{\"ID\":\"902\",\"typeID\":\"TextArea\",\"zOrder\":\"127\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"115\",\"y\":\"1806\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"903\",\"typeID\":\"Label\",\"zOrder\":\"128\",\"w\":\"96\",\"measuredW\":\"94\",\"measuredH\":\"25\",\"x\":\"143\",\"y\":\"1814\",\"properties\":{\"size\":\"17\",\"text\":\"Memcached\"}},{\"ID\":\"904\",\"typeID\":\"TextArea\",\"zOrder\":\"129\",\"w\":\"129\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"311\",\"y\":\"1784\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"905\",\"typeID\":\"Label\",\"zOrder\":\"130\",\"w\":\"95\",\"measuredW\":\"94\",\"measuredH\":\"25\",\"x\":\"330\",\"y\":\"1792\",\"properties\":{\"size\":\"17\",\"text\":\"Server Side\"}},{\"ID\":\"906\",\"typeID\":\"TextArea\",\"zOrder\":\"131\",\"w\":\"128\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"311\",\"y\":\"1829\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"907\",\"typeID\":\"Label\",\"zOrder\":\"132\",\"w\":\"88\",\"measuredW\":\"86\",\"measuredH\":\"25\",\"x\":\"332\",\"y\":\"1837\",\"properties\":{\"size\":\"17\",\"text\":\"Client Side\"}},{\"ID\":\"908\",\"typeID\":\"Arrow\",\"zOrder\":\"27\",\"w\":\"67\",\"h\":\"36\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"422\",\"y\":\"1757\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0.5},\"p1\":{\"x\":0.3904422315954255,\"y\":0.08001043614384486},\"p2\":{\"x\":67,\"y\":36},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"909\",\"typeID\":\"TextArea\",\"zOrder\":\"133\",\"w\":\"129\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"312\",\"y\":\"1742\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"910\",\"typeID\":\"Label\",\"zOrder\":\"134\",\"w\":\"40\",\"measuredW\":\"37\",\"measuredH\":\"25\",\"x\":\"357\",\"y\":\"1749\",\"properties\":{\"size\":\"17\",\"text\":\"CDN\"}},{\"ID\":\"911\",\"typeID\":\"Arrow\",\"zOrder\":\"135\",\"w\":\"98\",\"h\":\"73\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"962\",\"y\":\"1343\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":-0.5},\"p1\":{\"x\":0.4615951248911806,\"y\":0.017310654255675347},\"p2\":{\"x\":97.5,\"y\":72.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"912\",\"typeID\":\"Arrow\",\"zOrder\":\"136\",\"w\":\"90\",\"h\":\"108\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"972\",\"y\":\"1353\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":-0.5},\"p1\":{\"x\":0.45604025566412953,\"y\":-0.030700026684625844},\"p2\":{\"x\":89,\"y\":107.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"913\",\"typeID\":\"Arrow\",\"zOrder\":\"137\",\"w\":\"100\",\"h\":\"15\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"658\",\"y\":\"1592\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":15},\"p1\":{\"x\":0.4699266503667482,\"y\":-0.000488997555012225},\"p2\":{\"x\":100,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"914\",\"typeID\":\"Arrow\",\"zOrder\":\"138\",\"w\":\"109\",\"h\":\"24\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"646\",\"y\":\"1562\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":1},\"p1\":{\"x\":0.5043513295729251,\"y\":0.08807413376309428},\"p2\":{\"x\":108.5,\"y\":24},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"915\",\"typeID\":\"Arrow\",\"zOrder\":\"139\",\"w\":\"103\",\"h\":\"49\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"965\",\"y\":\"1535\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":49},\"p1\":{\"x\":0.5126056879323597,\"y\":0.05710991544965412},\"p2\":{\"x\":103,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"916\",\"typeID\":\"Arrow\",\"zOrder\":\"140\",\"w\":\"97\",\"h\":\"23\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"971\",\"y\":\"1585\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":0},\"p1\":{\"x\":0.550747876032069,\"y\":0.03340911810458298},\"p2\":{\"x\":96,\"y\":22.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"917\",\"typeID\":\"Arrow\",\"zOrder\":\"141\",\"w\":\"94\",\"h\":\"57\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"974\",\"y\":\"1595\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":0},\"p1\":{\"x\":0.4911460073504843,\"y\":-0.03174072836618785},\"p2\":{\"x\":93.5,\"y\":56.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"918\",\"typeID\":\"Arrow\",\"zOrder\":\"142\",\"w\":\"31\",\"h\":\"234\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"860\",\"y\":\"1348\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.5150179959193967,\"y\":0.1283510235895555},\"p2\":{\"x\":2,\"y\":233.5},\"rightArrow\":\"false\"}},{\"ID\":\"919\",\"typeID\":\"Arrow\",\"zOrder\":\"143\",\"w\":\"102\",\"h\":\"36\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"956\",\"y\":\"1333\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":-0.5},\"p1\":{\"x\":0.43648681345269785,\"y\":0.055165739172513925},\"p2\":{\"x\":101.5,\"y\":35.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"920\",\"typeID\":\"Arrow\",\"zOrder\":\"144\",\"w\":\"43\",\"h\":\"106\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"838\",\"y\":\"1221\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":43,\"y\":0},\"p1\":{\"x\":0.5713540621865597,\"y\":-0.17199598796389168},\"p2\":{\"x\":6.5,\"y\":105.5},\"rightArrow\":\"false\"}},{\"ID\":\"921\",\"typeID\":\"Arrow\",\"zOrder\":\"145\",\"w\":\"79\",\"h\":\"150\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"660\",\"y\":\"1349\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":79,\"y\":-0.5},\"p1\":{\"x\":0.6458011220568096,\"y\":0.05946017581835049},\"p2\":{\"x\":0,\"y\":149},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"922\",\"typeID\":\"Arrow\",\"zOrder\":\"146\",\"w\":\"80\",\"h\":\"99\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"659\",\"y\":\"1349\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":80,\"y\":-0.5},\"p1\":{\"x\":0.5775782957636026,\"y\":-0.025361653846795687},\"p2\":{\"x\":0,\"y\":98.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"923\",\"typeID\":\"Arrow\",\"zOrder\":\"147\",\"w\":\"85\",\"h\":\"66\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"655\",\"y\":\"1341\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":85,\"y\":-0.5},\"p1\":{\"x\":0.6101477809142017,\"y\":-0.07187418459567801},\"p2\":{\"x\":0,\"y\":65.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"924\",\"typeID\":\"Arrow\",\"zOrder\":\"148\",\"w\":\"96\",\"h\":\"22\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"645\",\"y\":\"1334\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":96,\"y\":-0.5},\"p1\":{\"x\":0.6157054508845105,\"y\":0.012944052926794184},\"p2\":{\"x\":0,\"y\":21.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"925\",\"typeID\":\"Arrow\",\"zOrder\":\"149\",\"w\":\"77\",\"h\":\"17\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"663\",\"y\":\"1313\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":77,\"y\":16.5},\"p1\":{\"x\":0.6010928961748633,\"y\":-0.054644808743169335},\"p2\":{\"x\":0,\"y\":0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"926\",\"typeID\":\"Arrow\",\"zOrder\":\"150\",\"w\":\"106\",\"h\":\"123\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"681\",\"y\":\"1197\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":-0.5},\"p1\":{\"x\":0.582486593282529,\"y\":0.12242449901213664},\"p2\":{\"x\":106,\"y\":122.5},\"rightArrow\":\"false\"}},{\"ID\":\"927\",\"typeID\":\"Arrow\",\"zOrder\":\"151\",\"w\":\"92\",\"h\":\"36\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"982\",\"y\":\"1172\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":92,\"y\":0},\"p1\":{\"x\":0.525,\"y\":-0.075},\"p2\":{\"x\":0,\"y\":36},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"928\",\"typeID\":\"Arrow\",\"zOrder\":\"152\",\"w\":\"83\",\"h\":\"16\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"991\",\"y\":\"1209\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":83,\"y\":16},\"p1\":{\"x\":0.5,\"y\":0},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"929\",\"typeID\":\"Arrow\",\"zOrder\":\"153\",\"w\":\"83\",\"h\":\"54\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"991\",\"y\":\"1214\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":83,\"y\":54},\"p1\":{\"x\":0.4292707802141765,\"y\":0.062417134115247325},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"930\",\"typeID\":\"Arrow\",\"zOrder\":\"154\",\"w\":\"78\",\"h\":\"102\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"987\",\"y\":\"1210\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":78,\"y\":102},\"p1\":{\"x\":0.37091195922577513,\"y\":0.09137795036708933},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"931\",\"typeID\":\"Arrow\",\"zOrder\":\"155\",\"w\":\"67\",\"h\":\"111\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"398\",\"y\":\"1211\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":67,\"y\":0},\"p1\":{\"x\":0.5,\"y\":0},\"p2\":{\"x\":0,\"y\":111},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"932\",\"typeID\":\"Arrow\",\"zOrder\":\"156\",\"w\":\"78\",\"h\":\"157\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"396\",\"y\":\"1212\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":78,\"y\":0},\"p1\":{\"x\":0.4932456861133936,\"y\":0.07316351684470009},\"p2\":{\"x\":0,\"y\":157},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"933\",\"typeID\":\"Arrow\",\"zOrder\":\"157\",\"w\":\"73\",\"h\":\"79\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"391\",\"y\":\"1199\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":73,\"y\":0},\"p1\":{\"x\":0.5,\"y\":0},\"p2\":{\"x\":0,\"y\":79},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"934\",\"typeID\":\"Arrow\",\"zOrder\":\"158\",\"w\":\"86\",\"h\":\"32\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"384\",\"y\":\"1192\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":86,\"y\":0},\"p1\":{\"x\":0.5,\"y\":0},\"p2\":{\"x\":0,\"y\":32},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"935\",\"typeID\":\"Arrow\",\"zOrder\":\"159\",\"w\":\"125\",\"h\":\"14\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"375\",\"y\":\"1177\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":125,\"y\":14},\"p1\":{\"x\":0.5,\"y\":0},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"936\",\"typeID\":\"TextArea\",\"zOrder\":\"160\",\"w\":\"229\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"458\",\"y\":\"1171\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"937\",\"typeID\":\"Label\",\"zOrder\":\"161\",\"w\":\"174\",\"measuredW\":\"173\",\"measuredH\":\"25\",\"x\":\"486\",\"y\":\"1184\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Relational Databases\"}},{\"ID\":\"938\",\"typeID\":\"TextArea\",\"zOrder\":\"162\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"213\",\"y\":\"1162\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"939\",\"typeID\":\"Label\",\"zOrder\":\"163\",\"w\":\"96\",\"measuredW\":\"96\",\"measuredH\":\"25\",\"x\":\"261\",\"y\":\"1170\",\"properties\":{\"size\":\"17\",\"text\":\"PostgreSQL\"}},{\"ID\":\"940\",\"typeID\":\"Icon\",\"zOrder\":\"164\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1155\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"941\",\"typeID\":\"Icon\",\"zOrder\":\"165\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1155\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"942\",\"typeID\":\"Icon\",\"zOrder\":\"166\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1155\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"943\",\"typeID\":\"TextArea\",\"zOrder\":\"167\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"213\",\"y\":\"1208\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"944\",\"typeID\":\"Label\",\"zOrder\":\"168\",\"w\":\"60\",\"measuredW\":\"59\",\"measuredH\":\"25\",\"x\":\"279\",\"y\":\"1216\",\"properties\":{\"size\":\"17\",\"text\":\"MySQL\"}},{\"ID\":\"945\",\"typeID\":\"Icon\",\"zOrder\":\"169\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1205\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"946\",\"typeID\":\"Icon\",\"zOrder\":\"170\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1205\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"947\",\"typeID\":\"Icon\",\"zOrder\":\"171\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1205\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"948\",\"typeID\":\"TextArea\",\"zOrder\":\"172\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"213\",\"y\":\"1253\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"949\",\"typeID\":\"Label\",\"zOrder\":\"173\",\"w\":\"68\",\"measuredW\":\"66\",\"measuredH\":\"25\",\"x\":\"275\",\"y\":\"1261\",\"properties\":{\"size\":\"17\",\"text\":\"MariaDB\"}},{\"ID\":\"950\",\"typeID\":\"Icon\",\"zOrder\":\"174\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1250\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"951\",\"typeID\":\"Icon\",\"zOrder\":\"175\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1250\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"952\",\"typeID\":\"Icon\",\"zOrder\":\"176\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1250\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"953\",\"typeID\":\"TextArea\",\"zOrder\":\"177\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"213\",\"y\":\"1299\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"954\",\"typeID\":\"Label\",\"zOrder\":\"178\",\"w\":\"67\",\"measuredW\":\"67\",\"measuredH\":\"25\",\"x\":\"275\",\"y\":\"1307\",\"properties\":{\"size\":\"17\",\"text\":\"MS SQL\"}},{\"ID\":\"955\",\"typeID\":\"Icon\",\"zOrder\":\"179\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1296\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"956\",\"typeID\":\"Icon\",\"zOrder\":\"180\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1296\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"957\",\"typeID\":\"Icon\",\"zOrder\":\"181\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1296\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"958\",\"typeID\":\"TextArea\",\"zOrder\":\"182\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"213\",\"y\":\"1345\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"959\",\"typeID\":\"Label\",\"zOrder\":\"183\",\"w\":\"54\",\"measuredW\":\"52\",\"measuredH\":\"25\",\"x\":\"282\",\"y\":\"1353\",\"properties\":{\"size\":\"17\",\"text\":\"Oracle\"}},{\"ID\":\"960\",\"typeID\":\"Icon\",\"zOrder\":\"184\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1342\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"961\",\"typeID\":\"Icon\",\"zOrder\":\"185\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1342\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"962\",\"typeID\":\"Icon\",\"zOrder\":\"186\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"205\",\"y\":\"1342\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"963\",\"typeID\":\"TextArea\",\"zOrder\":\"187\",\"w\":\"229\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"767\",\"y\":\"1190\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"964\",\"typeID\":\"Label\",\"zOrder\":\"188\",\"w\":\"151\",\"measuredW\":\"150\",\"measuredH\":\"25\",\"x\":\"806\",\"y\":\"1203\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"NoSQL Databases\"}},{\"ID\":\"965\",\"typeID\":\"TextArea\",\"zOrder\":\"189\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1057\",\"y\":\"1156\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"966\",\"typeID\":\"Label\",\"zOrder\":\"190\",\"w\":\"75\",\"measuredW\":\"74\",\"measuredH\":\"25\",\"x\":\"1116\",\"y\":\"1164\",\"properties\":{\"size\":\"17\",\"text\":\"MongoDB\"}},{\"ID\":\"967\",\"typeID\":\"Icon\",\"zOrder\":\"191\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1232\",\"y\":\"1148\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"968\",\"typeID\":\"Icon\",\"zOrder\":\"192\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1232\",\"y\":\"1148\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"969\",\"typeID\":\"Icon\",\"zOrder\":\"193\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1232\",\"y\":\"1148\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"970\",\"typeID\":\"TextArea\",\"zOrder\":\"194\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1056\",\"y\":\"1202\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"971\",\"typeID\":\"Label\",\"zOrder\":\"195\",\"w\":\"84\",\"measuredW\":\"81\",\"measuredH\":\"25\",\"x\":\"1112\",\"y\":\"1210\",\"properties\":{\"size\":\"17\",\"text\":\"RethinkDB\"}},{\"ID\":\"972\",\"typeID\":\"Icon\",\"zOrder\":\"196\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1198\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"973\",\"typeID\":\"Icon\",\"zOrder\":\"197\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1198\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"974\",\"typeID\":\"Icon\",\"zOrder\":\"198\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1198\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"975\",\"typeID\":\"TextArea\",\"zOrder\":\"199\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1056\",\"y\":\"1248\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"976\",\"typeID\":\"Label\",\"zOrder\":\"200\",\"w\":\"73\",\"measuredW\":\"72\",\"measuredH\":\"25\",\"x\":\"1117\",\"y\":\"1256\",\"properties\":{\"size\":\"17\",\"text\":\"CouchDB\"}},{\"ID\":\"977\",\"typeID\":\"Icon\",\"zOrder\":\"201\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1244\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"978\",\"typeID\":\"Icon\",\"zOrder\":\"202\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1244\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"979\",\"typeID\":\"Icon\",\"zOrder\":\"203\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1244\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"980\",\"typeID\":\"TextArea\",\"zOrder\":\"204\",\"w\":\"191\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1056\",\"y\":\"1293\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"981\",\"typeID\":\"Label\",\"zOrder\":\"205\",\"w\":\"88\",\"measuredW\":\"86\",\"measuredH\":\"25\",\"x\":\"1110\",\"y\":\"1301\",\"properties\":{\"size\":\"17\",\"text\":\"DynamoDB\"}},{\"ID\":\"982\",\"typeID\":\"Icon\",\"zOrder\":\"206\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1289\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"983\",\"typeID\":\"Icon\",\"zOrder\":\"207\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1289\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"984\",\"typeID\":\"Icon\",\"zOrder\":\"208\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1231\",\"y\":\"1289\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"985\",\"typeID\":\"TextArea\",\"zOrder\":\"209\",\"w\":\"171\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"498\",\"y\":\"1296\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"986\",\"typeID\":\"Label\",\"zOrder\":\"210\",\"w\":\"43\",\"measuredW\":\"42\",\"measuredH\":\"25\",\"x\":\"562\",\"y\":\"1304\",\"properties\":{\"size\":\"17\",\"text\":\"ACID\"}},{\"ID\":\"987\",\"typeID\":\"TextArea\",\"zOrder\":\"211\",\"w\":\"238\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"732\",\"y\":\"1312\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"988\",\"typeID\":\"Label\",\"zOrder\":\"212\",\"w\":\"186\",\"measuredW\":\"185\",\"measuredH\":\"25\",\"x\":\"762\",\"y\":\"1325\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"More about Databases\"}},{\"ID\":\"989\",\"typeID\":\"TextArea\",\"zOrder\":\"213\",\"w\":\"171\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"498\",\"y\":\"1340\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"990\",\"typeID\":\"Label\",\"zOrder\":\"214\",\"w\":\"105\",\"measuredW\":\"101\",\"measuredH\":\"25\",\"x\":\"538\",\"y\":\"1347\",\"properties\":{\"size\":\"17\",\"text\":\"Transactions\"}},{\"ID\":\"991\",\"typeID\":\"TextArea\",\"zOrder\":\"215\",\"w\":\"171\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"498\",\"y\":\"1384\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"992\",\"typeID\":\"Label\",\"zOrder\":\"216\",\"w\":\"98\",\"measuredW\":\"97\",\"measuredH\":\"25\",\"x\":\"541\",\"y\":\"1391\",\"properties\":{\"size\":\"17\",\"text\":\"N+1 Problem\"}},{\"ID\":\"993\",\"typeID\":\"TextArea\",\"zOrder\":\"217\",\"w\":\"206\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1050\",\"y\":\"1395\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"994\",\"typeID\":\"Label\",\"zOrder\":\"218\",\"w\":\"155\",\"measuredW\":\"154\",\"measuredH\":\"25\",\"x\":\"1077\",\"y\":\"1402\",\"properties\":{\"size\":\"17\",\"text\":\"Sharding Strategies\"}},{\"ID\":\"995\",\"typeID\":\"TextArea\",\"zOrder\":\"219\",\"w\":\"266\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"405\",\"y\":\"1430\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"996\",\"typeID\":\"Label\",\"zOrder\":\"220\",\"w\":\"188\",\"measuredW\":\"185\",\"measuredH\":\"25\",\"x\":\"452\",\"y\":\"1438\",\"properties\":{\"size\":\"17\",\"text\":\"Database Normalization\"}},{\"ID\":\"997\",\"typeID\":\"TextArea\",\"zOrder\":\"221\",\"w\":\"207\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1050\",\"y\":\"1350\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"998\",\"typeID\":\"Label\",\"zOrder\":\"222\",\"w\":\"129\",\"measuredW\":\"127\",\"measuredH\":\"25\",\"x\":\"1092\",\"y\":\"1357\",\"properties\":{\"size\":\"17\",\"text\":\"Data Replication\"}},{\"ID\":\"999\",\"typeID\":\"TextArea\",\"zOrder\":\"223\",\"w\":\"268\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"404\",\"y\":\"1476\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1000\",\"typeID\":\"Label\",\"zOrder\":\"224\",\"w\":\"214\",\"measuredW\":\"211\",\"measuredH\":\"25\",\"x\":\"436\",\"y\":\"1484\",\"properties\":{\"size\":\"17\",\"text\":\"Indexes and how they work\"}},{\"ID\":\"1001\",\"typeID\":\"TextArea\",\"zOrder\":\"225\",\"w\":\"238\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"746\",\"y\":\"1562\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1002\",\"typeID\":\"Label\",\"zOrder\":\"226\",\"w\":\"143\",\"measuredW\":\"143\",\"measuredH\":\"25\",\"x\":\"793\",\"y\":\"1575\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn about APIs\"}},{\"ID\":\"1003\",\"typeID\":\"TextArea\",\"zOrder\":\"227\",\"w\":\"188\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1055\",\"y\":\"1513\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1004\",\"typeID\":\"Label\",\"zOrder\":\"228\",\"w\":\"49\",\"measuredW\":\"47\",\"measuredH\":\"25\",\"x\":\"1125\",\"y\":\"1521\",\"properties\":{\"size\":\"17\",\"text\":\"REST\"}},{\"ID\":\"1005\",\"typeID\":\"TextArea\",\"zOrder\":\"229\",\"w\":\"188\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1055\",\"y\":\"1583\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1006\",\"typeID\":\"Label\",\"zOrder\":\"230\",\"w\":\"90\",\"measuredW\":\"90\",\"measuredH\":\"25\",\"x\":\"1104\",\"y\":\"1591\",\"properties\":{\"size\":\"17\",\"text\":\"JSON APIs\"}},{\"ID\":\"1007\",\"typeID\":\"TextArea\",\"zOrder\":\"231\",\"w\":\"188\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1055\",\"y\":\"1629\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1008\",\"typeID\":\"Label\",\"zOrder\":\"232\",\"w\":\"49\",\"measuredW\":\"46\",\"measuredH\":\"25\",\"x\":\"1124\",\"y\":\"1637\",\"properties\":{\"size\":\"17\",\"text\":\"SOAP\"}},{\"ID\":\"1009\",\"typeID\":\"Label\",\"zOrder\":\"233\",\"w\":\"179\",\"measuredW\":\"169\",\"measuredH\":\"22\",\"x\":\"1062\",\"y\":\"1556\",\"properties\":{\"size\":\"14\",\"text\":\"Read Roy Fielding’s Paper\"}},{\"ID\":\"1010\",\"typeID\":\"TextArea\",\"zOrder\":\"234\",\"w\":\"268\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"404\",\"y\":\"1540\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1011\",\"typeID\":\"Label\",\"zOrder\":\"235\",\"w\":\"78\",\"measuredW\":\"77\",\"measuredH\":\"25\",\"x\":\"499\",\"y\":\"1548\",\"properties\":{\"size\":\"17\",\"text\":\"HATEOAS\"}},{\"ID\":\"1012\",\"typeID\":\"TextArea\",\"zOrder\":\"236\",\"w\":\"268\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"404\",\"y\":\"1586\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1013\",\"typeID\":\"Label\",\"zOrder\":\"237\",\"w\":\"230\",\"measuredW\":\"228\",\"measuredH\":\"25\",\"x\":\"426\",\"y\":\"1593\",\"properties\":{\"size\":\"17\",\"text\":\"Open API Spec and Swagger\"}},{\"ID\":\"1014\",\"typeID\":\"TextArea\",\"zOrder\":\"238\",\"w\":\"206\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1051\",\"y\":\"1441\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1015\",\"typeID\":\"Label\",\"zOrder\":\"239\",\"w\":\"109\",\"measuredW\":\"107\",\"measuredH\":\"25\",\"x\":\"1099\",\"y\":\"1448\",\"properties\":{\"size\":\"17\",\"text\":\"CAP Theorem\"}},{\"ID\":\"1016\",\"typeID\":\"TextArea\",\"zOrder\":\"240\",\"w\":\"268\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"404\",\"y\":\"1633\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1017\",\"typeID\":\"Label\",\"zOrder\":\"241\",\"w\":\"111\",\"measuredW\":\"110\",\"measuredH\":\"25\",\"x\":\"482\",\"y\":\"1641\",\"properties\":{\"size\":\"17\",\"text\":\"Authentication\"}},{\"ID\":\"1018\",\"typeID\":\"Arrow\",\"zOrder\":\"242\",\"w\":\"1\",\"h\":\"156\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"890\",\"y\":\"1802\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":-0.5},\"p1\":{\"x\":0.4652565385165071,\"y\":0.0007431756467057314},\"p2\":{\"x\":0,\"y\":155},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1019\",\"typeID\":\"TextArea\",\"zOrder\":\"243\",\"w\":\"240\",\"h\":\"54\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"709\",\"y\":\"1778\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1020\",\"typeID\":\"Label\",\"zOrder\":\"244\",\"w\":\"203\",\"measuredW\":\"203\",\"measuredH\":\"25\",\"x\":\"732\",\"y\":\"1793\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Web Security Knowledge\"}},{\"ID\":\"1021\",\"typeID\":\"TextArea\",\"zOrder\":\"245\",\"w\":\"456\",\"h\":\"171\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"804\",\"y\":\"1885\"},{\"ID\":\"1022\",\"typeID\":\"TextArea\",\"zOrder\":\"246\",\"w\":\"163\",\"h\":\"42\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"819\",\"y\":\"1949\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1023\",\"typeID\":\"Label\",\"zOrder\":\"247\",\"w\":\"51\",\"measuredW\":\"50\",\"measuredH\":\"25\",\"x\":\"875\",\"y\":\"1958\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CORS\"}},{\"ID\":\"1024\",\"typeID\":\"TextArea\",\"zOrder\":\"248\",\"w\":\"166\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"818\",\"y\":\"1899\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1025\",\"typeID\":\"Label\",\"zOrder\":\"249\",\"w\":\"63\",\"measuredW\":\"58\",\"measuredH\":\"25\",\"x\":\"869\",\"y\":\"1909\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"HTTPS\"}},{\"ID\":\"1026\",\"typeID\":\"TextArea\",\"zOrder\":\"250\",\"w\":\"257\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"989\",\"y\":\"1899\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1027\",\"typeID\":\"Label\",\"zOrder\":\"251\",\"w\":\"196\",\"measuredW\":\"192\",\"measuredH\":\"25\",\"x\":\"1020\",\"y\":\"1909\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Content Security Policy\"}},{\"ID\":\"1028\",\"typeID\":\"TextArea\",\"zOrder\":\"252\",\"w\":\"427\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"818\",\"y\":\"1997\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1029\",\"typeID\":\"Label\",\"zOrder\":\"253\",\"w\":\"187\",\"measuredW\":\"184\",\"measuredH\":\"25\",\"x\":\"938\",\"y\":\"2007\",\"properties\":{\"size\":\"17\",\"text\":\"OWASP Security Risks\",\"bold\":\"true\"}},{\"ID\":\"1030\",\"typeID\":\"TextArea\",\"zOrder\":\"254\",\"w\":\"270\",\"h\":\"193\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"988\",\"y\":\"1681\"},{\"ID\":\"1031\",\"typeID\":\"TextArea\",\"zOrder\":\"255\",\"w\":\"239\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1003\",\"y\":\"1697\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1032\",\"typeID\":\"Label\",\"zOrder\":\"256\",\"w\":\"203\",\"measuredW\":\"202\",\"measuredH\":\"25\",\"x\":\"1023\",\"y\":\"1705\",\"properties\":{\"size\":\"17\",\"text\":\"MD5 and why not to use it\"}},{\"ID\":\"1033\",\"typeID\":\"TextArea\",\"zOrder\":\"257\",\"w\":\"237\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1004\",\"y\":\"1742\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1034\",\"typeID\":\"Label\",\"zOrder\":\"258\",\"w\":\"93\",\"measuredW\":\"88\",\"measuredH\":\"25\",\"x\":\"1076\",\"y\":\"1749\",\"properties\":{\"size\":\"17\",\"text\":\"SHA Family\"}},{\"ID\":\"1035\",\"typeID\":\"TextArea\",\"zOrder\":\"259\",\"w\":\"119\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1005\",\"y\":\"1788\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1036\",\"typeID\":\"Label\",\"zOrder\":\"260\",\"w\":\"62\",\"measuredW\":\"51\",\"measuredH\":\"25\",\"x\":\"1043\",\"y\":\"1795\",\"properties\":{\"size\":\"17\",\"text\":\"scrypt\"}},{\"ID\":\"1037\",\"typeID\":\"TextArea\",\"zOrder\":\"261\",\"w\":\"111\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1131\",\"y\":\"1788\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1038\",\"typeID\":\"Label\",\"zOrder\":\"262\",\"w\":\"53\",\"measuredW\":\"52\",\"measuredH\":\"25\",\"x\":\"1166\",\"y\":\"1795\",\"properties\":{\"size\":\"17\",\"text\":\"bcrypt\"}},{\"ID\":\"1039\",\"typeID\":\"Label\",\"zOrder\":\"263\",\"w\":\"155\",\"measuredW\":\"151\",\"measuredH\":\"25\",\"x\":\"1045\",\"y\":\"1836\",\"properties\":{\"size\":\"17\",\"text\":\"Hashing Algorithms\"}},{\"ID\":\"1040\",\"typeID\":\"TextInput\",\"zOrder\":\"264\",\"w\":\"223\",\"measuredW\":\"128\",\"measuredH\":\"32\",\"x\":\"147\",\"y\":\"1456\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Cookie Based\"}},{\"ID\":\"1041\",\"typeID\":\"TextArea\",\"zOrder\":\"265\",\"w\":\"258\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"988\",\"y\":\"1949\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1042\",\"typeID\":\"Label\",\"zOrder\":\"266\",\"w\":\"75\",\"measuredW\":\"74\",\"measuredH\":\"25\",\"x\":\"1079\",\"y\":\"1958\",\"properties\":{\"size\":\"17\",\"text\":\"SSL/TLS\",\"bold\":\"true\"}},{\"ID\":\"1043\",\"typeID\":\"TextArea\",\"zOrder\":\"267\",\"w\":\"159\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"497\",\"y\":\"1915\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1044\",\"typeID\":\"Label\",\"zOrder\":\"268\",\"w\":\"63\",\"measuredW\":\"61\",\"measuredH\":\"25\",\"x\":\"545\",\"y\":\"1928\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Testing\"}},{\"ID\":\"1045\",\"typeID\":\"TextArea\",\"zOrder\":\"269\",\"w\":\"192\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"249\",\"y\":\"1884\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1046\",\"typeID\":\"Label\",\"zOrder\":\"270\",\"w\":\"150\",\"measuredW\":\"147\",\"measuredH\":\"25\",\"x\":\"270\",\"y\":\"1892\",\"properties\":{\"size\":\"17\",\"text\":\"Integration Testing\"}},{\"ID\":\"1047\",\"typeID\":\"TextArea\",\"zOrder\":\"271\",\"w\":\"193\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"248\",\"y\":\"1931\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1048\",\"typeID\":\"Label\",\"zOrder\":\"272\",\"w\":\"99\",\"measuredW\":\"96\",\"measuredH\":\"25\",\"x\":\"295\",\"y\":\"1938\",\"properties\":{\"size\":\"17\",\"text\":\"Unit Testing\"}},{\"ID\":\"1049\",\"typeID\":\"TextArea\",\"zOrder\":\"273\",\"w\":\"193\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"248\",\"y\":\"1972\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1050\",\"typeID\":\"Label\",\"zOrder\":\"274\",\"w\":\"151\",\"measuredW\":\"143\",\"measuredH\":\"25\",\"x\":\"269\",\"y\":\"1979\",\"properties\":{\"size\":\"17\",\"text\":\"Functional Testing\"}},{\"ID\":\"1057\",\"typeID\":\"TextArea\",\"zOrder\":\"461\",\"w\":\"171\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"498\",\"y\":\"1252\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1058\",\"typeID\":\"Label\",\"zOrder\":\"462\",\"w\":\"49\",\"measuredW\":\"49\",\"measuredH\":\"25\",\"x\":\"562\",\"y\":\"1260\",\"properties\":{\"size\":\"17\",\"text\":\"ORMs\"}},{\"ID\":\"1136\",\"typeID\":\"TextArea\",\"zOrder\":\"463\",\"w\":\"140\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"503\",\"y\":\"1999\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1137\",\"typeID\":\"Label\",\"zOrder\":\"464\",\"w\":\"62\",\"measuredW\":\"62\",\"measuredH\":\"25\",\"x\":\"542\",\"y\":\"2012\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CI / CD\"}},{\"ID\":\"1214\",\"typeID\":\"Icon\",\"zOrder\":\"455\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1264\",\"y\":\"1015\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1215\",\"typeID\":\"Icon\",\"zOrder\":\"456\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1264\",\"y\":\"1015\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1216\",\"typeID\":\"Icon\",\"zOrder\":\"457\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1264\",\"y\":\"1015\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1217\",\"typeID\":\"Icon\",\"zOrder\":\"458\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1264\",\"y\":\"1070\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1218\",\"typeID\":\"Icon\",\"zOrder\":\"459\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1264\",\"y\":\"1070\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1219\",\"typeID\":\"Icon\",\"zOrder\":\"460\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1264\",\"y\":\"1070\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1307\",\"typeID\":\"TextArea\",\"zOrder\":\"465\",\"w\":\"324\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"471\",\"y\":\"2083\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1308\",\"typeID\":\"Label\",\"zOrder\":\"466\",\"w\":\"292\",\"measuredW\":\"285\",\"measuredH\":\"25\",\"x\":\"495\",\"y\":\"2096\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Design and Development Principles\"}},{\"ID\":\"1311\",\"typeID\":\"Arrow\",\"zOrder\":\"32\",\"w\":\"57\",\"h\":\"105\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"711\",\"y\":\"2102\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":56,\"y\":105},\"p1\":{\"x\":0.4999836027940837,\"y\":-0.17754894565965978},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1316\",\"typeID\":\"TextArea\",\"zOrder\":\"33\",\"w\":\"317\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"857\",\"y\":\"2081\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1317\",\"typeID\":\"Label\",\"zOrder\":\"34\",\"w\":\"183\",\"measuredW\":\"180\",\"measuredH\":\"25\",\"x\":\"924\",\"y\":\"2094\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Architectural Patterns\"}},{\"ID\":\"1318\",\"typeID\":\"TextArea\",\"zOrder\":\"35\",\"w\":\"243\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"928\",\"y\":\"2149\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1319\",\"typeID\":\"Label\",\"zOrder\":\"36\",\"w\":\"123\",\"measuredW\":\"122\",\"measuredH\":\"25\",\"x\":\"988\",\"y\":\"2157\",\"properties\":{\"size\":\"17\",\"text\":\"Monolithic Apps\"}},{\"ID\":\"1320\",\"typeID\":\"TextArea\",\"zOrder\":\"37\",\"w\":\"244\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"928\",\"y\":\"2194\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1321\",\"typeID\":\"Label\",\"zOrder\":\"38\",\"w\":\"112\",\"measuredW\":\"110\",\"measuredH\":\"25\",\"x\":\"994\",\"y\":\"2201\",\"properties\":{\"size\":\"17\",\"text\":\"Microservices\"}},{\"ID\":\"1322\",\"typeID\":\"TextArea\",\"zOrder\":\"39\",\"w\":\"245\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"927\",\"y\":\"2276\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1323\",\"typeID\":\"Label\",\"zOrder\":\"40\",\"w\":\"209\",\"measuredW\":\"208\",\"measuredH\":\"25\",\"x\":\"945\",\"y\":\"2282\",\"properties\":{\"size\":\"17\",\"text\":\"CQRS and Event Sourcing\"}},{\"ID\":\"1325\",\"typeID\":\"Arrow\",\"zOrder\":\"41\",\"w\":\"1\",\"h\":\"63\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"552\",\"y\":\"2215\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":-0.5},\"p1\":{\"x\":0.5029239766081871,\"y\":0},\"p2\":{\"x\":0,\"y\":62},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1326\",\"typeID\":\"Arrow\",\"zOrder\":\"42\",\"w\":\"1\",\"h\":\"181\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"769\",\"y\":\"2205\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":1,\"y\":181},\"p1\":{\"x\":0.5094807194082528,\"y\":0.00566965794315323},\"p2\":{\"x\":1,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1327\",\"typeID\":\"TextArea\",\"zOrder\":\"43\",\"w\":\"313\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"482\",\"y\":\"2180\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1328\",\"typeID\":\"Label\",\"zOrder\":\"44\",\"w\":\"126\",\"measuredW\":\"125\",\"measuredH\":\"25\",\"x\":\"576\",\"y\":\"2192\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Search Engines\"}},{\"ID\":\"1329\",\"typeID\":\"TextArea\",\"zOrder\":\"45\",\"w\":\"160\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"484\",\"y\":\"2260\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1330\",\"typeID\":\"Label\",\"zOrder\":\"46\",\"w\":\"106\",\"measuredW\":\"105\",\"measuredH\":\"25\",\"x\":\"516\",\"y\":\"2268\",\"properties\":{\"size\":\"17\",\"text\":\"Elasticsearch\"}},{\"ID\":\"1331\",\"typeID\":\"TextArea\",\"zOrder\":\"47\",\"w\":\"157\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"484\",\"y\":\"2304\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1332\",\"typeID\":\"Label\",\"zOrder\":\"48\",\"w\":\"36\",\"measuredW\":\"32\",\"measuredH\":\"25\",\"x\":\"545\",\"y\":\"2312\",\"properties\":{\"size\":\"17\",\"text\":\"Solr\"}},{\"ID\":\"1333\",\"typeID\":\"TextArea\",\"zOrder\":\"49\",\"w\":\"244\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"928\",\"y\":\"2235\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1334\",\"typeID\":\"Label\",\"zOrder\":\"50\",\"w\":\"38\",\"measuredW\":\"36\",\"measuredH\":\"25\",\"x\":\"1031\",\"y\":\"2242\",\"properties\":{\"size\":\"17\",\"text\":\"SOA\"}},{\"ID\":\"1335\",\"typeID\":\"Arrow\",\"zOrder\":\"51\",\"w\":\"4\",\"h\":\"109\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"568\",\"y\":\"2600\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":4,\"y\":-0.5},\"p1\":{\"x\":0.5130929473772274,\"y\":-0.0344683343093784},\"p2\":{\"x\":3,\"y\":108.5},\"rightArrow\":\"false\"}},{\"ID\":\"1336\",\"typeID\":\"Arrow\",\"zOrder\":\"52\",\"w\":\"96\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"364\",\"y\":\"2592\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":96,\"y\":-0.5},\"p1\":{\"x\":0.6163558106169299,\"y\":0.017503586800573956},\"p2\":{\"x\":0,\"y\":2},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1337\",\"typeID\":\"TextArea\",\"zOrder\":\"53\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"229\",\"y\":\"2573\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1338\",\"typeID\":\"Label\",\"zOrder\":\"54\",\"w\":\"51\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"275\",\"y\":\"2581\",\"properties\":{\"size\":\"17\",\"text\":\"Neo4j\"}},{\"ID\":\"1340\",\"typeID\":\"Arrow\",\"zOrder\":\"55\",\"w\":\"120\",\"h\":\"29\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"821\",\"y\":\"2507\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":119.5,\"y\":0},\"p1\":{\"x\":0.6629629629629628,\"y\":-0.06296296296296298},\"p2\":{\"x\":0,\"y\":29},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1341\",\"typeID\":\"Arrow\",\"zOrder\":\"56\",\"w\":\"121\",\"h\":\"13\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"819\",\"y\":\"2540\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":120.5,\"y\":11},\"p1\":{\"x\":0.567277856135402,\"y\":0.05867418899858959},\"p2\":{\"x\":-0.5,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1342\",\"typeID\":\"Arrow\",\"zOrder\":\"57\",\"w\":\"188\",\"h\":\"66\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"589\",\"y\":\"2529\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":-0.5,\"y\":62},\"p1\":{\"x\":0.4529742373542121,\"y\":-0.12147103732822194},\"p2\":{\"x\":187,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1343\",\"typeID\":\"Arrow\",\"zOrder\":\"58\",\"w\":\"75\",\"h\":\"25\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"281\",\"y\":\"2432\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":75,\"y\":25},\"p1\":{\"x\":0.6629629629629629,\"y\":-0.06296296296296301},\"p2\":{\"x\":0,\"y\":1},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1344\",\"typeID\":\"Arrow\",\"zOrder\":\"59\",\"w\":\"78\",\"h\":\"4\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"280\",\"y\":\"2468\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":78,\"y\":0},\"p1\":{\"x\":0.6163558106169298,\"y\":0.017503586800573952},\"p2\":{\"x\":0,\"y\":3},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1345\",\"typeID\":\"Arrow\",\"zOrder\":\"60\",\"w\":\"96\",\"h\":\"47\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"274\",\"y\":\"2469\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":96,\"y\":0},\"p1\":{\"x\":0.6026715722139769,\"y\":0.08829985157932198},\"p2\":{\"x\":0,\"y\":47},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1346\",\"typeID\":\"Arrow\",\"zOrder\":\"61\",\"w\":\"199\",\"h\":\"84\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"855\",\"y\":\"2715\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":199,\"y\":84},\"p1\":{\"x\":0.4955621301775147,\"y\":0.03934911242603547},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1347\",\"typeID\":\"Arrow\",\"zOrder\":\"62\",\"w\":\"199\",\"h\":\"42\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"857\",\"y\":\"2716\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":199,\"y\":42},\"p1\":{\"x\":0.4825515947467167,\"y\":0.004502814258911812},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1348\",\"typeID\":\"Arrow\",\"zOrder\":\"63\",\"w\":\"196\",\"h\":\"5\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"864\",\"y\":\"2706\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":196,\"y\":5},\"p1\":{\"x\":0.4695991671004685,\"y\":-0.020718375845913586},\"p2\":{\"x\":0,\"y\":3},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1349\",\"typeID\":\"Arrow\",\"zOrder\":\"64\",\"w\":\"197\",\"h\":\"42\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"862\",\"y\":\"2666\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":197,\"y\":2},\"p1\":{\"x\":0.44620243269441234,\"y\":-0.0644132453644352},\"p2\":{\"x\":0,\"y\":42},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1350\",\"typeID\":\"Arrow\",\"zOrder\":\"65\",\"w\":\"199\",\"h\":\"54\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"510\",\"y\":\"2477\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":199,\"y\":48},\"p1\":{\"x\":0.6485783579517326,\"y\":0.15106944331292413},\"p2\":{\"x\":0,\"y\":-0.5},\"rightArrow\":\"false\"}},{\"ID\":\"1351\",\"typeID\":\"Arrow\",\"zOrder\":\"66\",\"w\":\"192\",\"h\":\"55\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"496\",\"y\":\"2407\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":55.5},\"p1\":{\"x\":0.432369591589163,\"y\":0.09644156894460167},\"p2\":{\"x\":192,\"y\":0.5},\"rightArrow\":\"false\"}},{\"ID\":\"1352\",\"typeID\":\"Arrow\",\"zOrder\":\"67\",\"w\":\"149\",\"h\":\"15\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"846\",\"y\":\"2411\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":149,\"y\":14},\"p1\":{\"x\":0.47363590855998655,\"y\":-0.003754380110128476},\"p2\":{\"x\":0,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1353\",\"typeID\":\"Arrow\",\"zOrder\":\"68\",\"w\":\"106\",\"h\":\"9\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"880\",\"y\":\"2392\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":106,\"y\":0},\"p1\":{\"x\":0.42286675073560326,\"y\":0.002311895754518704},\"p2\":{\"x\":0,\"y\":8.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1354\",\"typeID\":\"TextInput\",\"zOrder\":\"69\",\"w\":\"183\",\"measuredW\":\"96\",\"measuredH\":\"32\",\"x\":\"976\",\"y\":\"2373\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"RabbitMQ\"}},{\"ID\":\"1355\",\"typeID\":\"TextInput\",\"zOrder\":\"70\",\"w\":\"183\",\"measuredW\":\"64\",\"measuredH\":\"32\",\"x\":\"976\",\"y\":\"2409\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Kafka\"}},{\"ID\":\"1356\",\"typeID\":\"TextArea\",\"zOrder\":\"71\",\"w\":\"221\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"671\",\"y\":\"2383\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1357\",\"typeID\":\"Label\",\"zOrder\":\"72\",\"w\":\"141\",\"measuredW\":\"140\",\"measuredH\":\"25\",\"x\":\"711\",\"y\":\"2395\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Message Brokers\"}},{\"ID\":\"1358\",\"typeID\":\"TextArea\",\"zOrder\":\"73\",\"w\":\"294\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"353\",\"y\":\"2440\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1359\",\"typeID\":\"Label\",\"zOrder\":\"74\",\"w\":\"270\",\"measuredW\":\"270\",\"measuredH\":\"25\",\"x\":\"366\",\"y\":\"2453\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Containerization vs Virtualization\"}},{\"ID\":\"1360\",\"typeID\":\"TextArea\",\"zOrder\":\"75\",\"w\":\"163\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"720\",\"y\":\"2686\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1361\",\"typeID\":\"Label\",\"zOrder\":\"76\",\"w\":\"108\",\"measuredW\":\"105\",\"measuredH\":\"25\",\"x\":\"754\",\"y\":\"2699\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Web Servers\"}},{\"ID\":\"1362\",\"typeID\":\"TextArea\",\"zOrder\":\"77\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1023\",\"y\":\"2645\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1363\",\"typeID\":\"Label\",\"zOrder\":\"78\",\"w\":\"46\",\"measuredW\":\"44\",\"measuredH\":\"25\",\"x\":\"1072\",\"y\":\"2653\",\"properties\":{\"size\":\"17\",\"text\":\"Nginx\"}},{\"ID\":\"1364\",\"typeID\":\"TextArea\",\"zOrder\":\"79\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1023\",\"y\":\"2691\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1365\",\"typeID\":\"Label\",\"zOrder\":\"80\",\"w\":\"60\",\"measuredW\":\"59\",\"measuredH\":\"25\",\"x\":\"1065\",\"y\":\"2699\",\"properties\":{\"size\":\"17\",\"text\":\"Apache\"}},{\"ID\":\"1366\",\"typeID\":\"TextArea\",\"zOrder\":\"81\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1023\",\"y\":\"2736\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1367\",\"typeID\":\"Label\",\"zOrder\":\"82\",\"w\":\"53\",\"measuredW\":\"51\",\"measuredH\":\"25\",\"x\":\"1068\",\"y\":\"2744\",\"properties\":{\"size\":\"17\",\"text\":\"Caddy\"}},{\"ID\":\"1368\",\"typeID\":\"TextArea\",\"zOrder\":\"83\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1023\",\"y\":\"2780\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1369\",\"typeID\":\"Label\",\"zOrder\":\"84\",\"w\":\"55\",\"measuredW\":\"54\",\"measuredH\":\"25\",\"x\":\"1072\",\"y\":\"2788\",\"properties\":{\"size\":\"17\",\"text\":\"MS IIS\"}},{\"ID\":\"1370\",\"typeID\":\"TextArea\",\"zOrder\":\"85\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"140\",\"y\":\"2406\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1371\",\"typeID\":\"Label\",\"zOrder\":\"86\",\"w\":\"58\",\"measuredW\":\"56\",\"measuredH\":\"25\",\"x\":\"187\",\"y\":\"2414\",\"properties\":{\"size\":\"17\",\"text\":\"Docker\"}},{\"ID\":\"1372\",\"typeID\":\"TextArea\",\"zOrder\":\"87\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"140\",\"y\":\"2452\",\"properties\":{\"color\":\"15658734\",\"borderColor\":\"6710886\",\"textColor\":\"6710886\"}},{\"ID\":\"1373\",\"typeID\":\"Label\",\"zOrder\":\"88\",\"w\":\"24\",\"measuredW\":\"23\",\"measuredH\":\"25\",\"x\":\"200\",\"y\":\"2460\",\"properties\":{\"size\":\"17\",\"text\":\"rkt\",\"color\":\"3355443\"}},{\"ID\":\"1374\",\"typeID\":\"TextArea\",\"zOrder\":\"89\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"140\",\"y\":\"2497\",\"properties\":{\"color\":\"14540253\",\"borderColor\":\"6710886\",\"textColor\":\"6710886\"}},{\"ID\":\"1375\",\"typeID\":\"Label\",\"zOrder\":\"90\",\"w\":\"37\",\"measuredW\":\"35\",\"measuredH\":\"25\",\"x\":\"193\",\"y\":\"2505\",\"properties\":{\"size\":\"17\",\"text\":\"LXC\",\"color\":\"3355443\"}},{\"ID\":\"1376\",\"typeID\":\"TextArea\",\"zOrder\":\"91\",\"w\":\"163\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"665\",\"y\":\"2505\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1377\",\"typeID\":\"Label\",\"zOrder\":\"92\",\"w\":\"79\",\"measuredW\":\"73\",\"measuredH\":\"25\",\"x\":\"707\",\"y\":\"2518\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"GraphQL\"}},{\"ID\":\"1378\",\"typeID\":\"TextArea\",\"zOrder\":\"93\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"927\",\"y\":\"2488\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1379\",\"typeID\":\"Label\",\"zOrder\":\"94\",\"w\":\"50\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"974\",\"y\":\"2496\",\"properties\":{\"size\":\"17\",\"text\":\"Apollo\"}},{\"ID\":\"1380\",\"typeID\":\"TextArea\",\"zOrder\":\"95\",\"w\":\"144\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"927\",\"y\":\"2534\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1381\",\"typeID\":\"Label\",\"zOrder\":\"96\",\"w\":\"108\",\"measuredW\":\"107\",\"measuredH\":\"25\",\"x\":\"945\",\"y\":\"2542\",\"properties\":{\"size\":\"17\",\"text\":\"Relay Modern\"}},{\"ID\":\"1382\",\"typeID\":\"TextArea\",\"zOrder\":\"97\",\"w\":\"184\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"424\",\"y\":\"2567\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1383\",\"typeID\":\"Label\",\"zOrder\":\"98\",\"w\":\"143\",\"measuredW\":\"141\",\"measuredH\":\"25\",\"x\":\"444\",\"y\":\"2580\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Graph Databases\"}},{\"ID\":\"1384\",\"typeID\":\"TextArea\",\"zOrder\":\"99\",\"w\":\"159\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"519\",\"y\":\"2688\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1385\",\"typeID\":\"Label\",\"zOrder\":\"100\",\"w\":\"104\",\"measuredW\":\"102\",\"measuredH\":\"25\",\"x\":\"547\",\"y\":\"2701\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"WebSockets\"}},{\"ID\":\"1386\",\"typeID\":\"TextArea\",\"zOrder\":\"467\",\"w\":\"261\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"125\",\"y\":\"2173\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1387\",\"typeID\":\"Label\",\"zOrder\":\"468\",\"w\":\"55\",\"measuredW\":\"54\",\"measuredH\":\"25\",\"x\":\"228\",\"y\":\"2180\",\"properties\":{\"size\":\"17\",\"text\":\"SOLID\"}},{\"ID\":\"1388\",\"typeID\":\"TextArea\",\"zOrder\":\"469\",\"w\":\"261\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"125\",\"y\":\"2215\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1389\",\"typeID\":\"Label\",\"zOrder\":\"470\",\"w\":\"44\",\"measuredW\":\"41\",\"measuredH\":\"25\",\"x\":\"234\",\"y\":\"2222\",\"properties\":{\"size\":\"17\",\"text\":\"KISS\"}},{\"ID\":\"1390\",\"typeID\":\"TextArea\",\"zOrder\":\"471\",\"w\":\"260\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"126\",\"y\":\"2256\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1391\",\"typeID\":\"Label\",\"zOrder\":\"472\",\"w\":\"53\",\"measuredW\":\"50\",\"measuredH\":\"25\",\"x\":\"229\",\"y\":\"2264\",\"properties\":{\"size\":\"17\",\"text\":\"YAGNI\"}},{\"ID\":\"1392\",\"typeID\":\"TextArea\",\"zOrder\":\"473\",\"w\":\"260\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"126\",\"y\":\"2300\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1393\",\"typeID\":\"Label\",\"zOrder\":\"474\",\"w\":\"38\",\"measuredW\":\"36\",\"measuredH\":\"25\",\"x\":\"237\",\"y\":\"2308\",\"properties\":{\"size\":\"17\",\"text\":\"DRY\"}},{\"ID\":\"1395\",\"typeID\":\"TextArea\",\"zOrder\":\"475\",\"w\":\"260\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"126\",\"y\":\"2037\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1396\",\"typeID\":\"Label\",\"zOrder\":\"476\",\"w\":\"168\",\"measuredW\":\"166\",\"measuredH\":\"25\",\"x\":\"172\",\"y\":\"2044\",\"properties\":{\"size\":\"17\",\"text\":\"GOF Design Patterns\"}},{\"ID\":\"1399\",\"typeID\":\"Arrow\",\"zOrder\":\"31\",\"w\":\"105\",\"h\":\"128\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"372\",\"y\":\"2106\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":105,\"y\":-0.5},\"p1\":{\"x\":0.6569739866467219,\"y\":0.04673647342113905},\"p2\":{\"x\":0,\"y\":127.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1400\",\"typeID\":\"Arrow\",\"zOrder\":\"30\",\"w\":\"107\",\"h\":\"38\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"371\",\"y\":\"2056\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":107,\"y\":37.5},\"p1\":{\"x\":0.5259135372707648,\"y\":-0.007273293012582408},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1401\",\"typeID\":\"TextArea\",\"zOrder\":\"477\",\"w\":\"260\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"126\",\"y\":\"2082\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1402\",\"typeID\":\"Label\",\"zOrder\":\"478\",\"w\":\"175\",\"measuredW\":\"172\",\"measuredH\":\"25\",\"x\":\"168\",\"y\":\"2089\",\"properties\":{\"size\":\"17\",\"text\":\"Domain Driven Design\"}},{\"ID\":\"1404\",\"typeID\":\"Arrow\",\"zOrder\":\"29\",\"w\":\"121\",\"h\":\"4\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"357\",\"y\":\"2098\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":121,\"y\":-0.5},\"p1\":{\"x\":0.5411972474270752,\"y\":0.004810912855489929},\"p2\":{\"x\":0,\"y\":3},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1405\",\"typeID\":\"TextArea\",\"zOrder\":\"479\",\"w\":\"260\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"126\",\"y\":\"2127\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1406\",\"typeID\":\"Label\",\"zOrder\":\"480\",\"w\":\"196\",\"measuredW\":\"195\",\"measuredH\":\"25\",\"x\":\"158\",\"y\":\"2134\",\"properties\":{\"size\":\"17\",\"text\":\"Test Driven Development\"}},{\"ID\":\"1407\",\"typeID\":\"Arrow\",\"zOrder\":\"28\",\"w\":\"103\",\"h\":\"46\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"374\",\"y\":\"2102\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":103,\"y\":-0.5},\"p1\":{\"x\":0.4965025071914738,\"y\":-0.0092742505933948},\"p2\":{\"x\":0,\"y\":45.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1409\",\"typeID\":\"Arrow\",\"zOrder\":\"26\",\"w\":\"99\",\"h\":\"91\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"380\",\"y\":\"2105\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":99,\"y\":-0.5},\"p1\":{\"x\":0.5321867050105077,\"y\":-0.014434243999557572},\"p2\":{\"x\":0,\"y\":90.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1410\",\"typeID\":\"Arrow\",\"zOrder\":\"25\",\"w\":\"108\",\"h\":\"80\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"619\",\"y\":\"2023\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":108,\"y\":79.5},\"p1\":{\"x\":0.5603029663253457,\"y\":-0.07492346669481689},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1411\",\"typeID\":\"Arrow\",\"zOrder\":\"24\",\"w\":\"95\",\"h\":\"160\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"379\",\"y\":\"2117\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":95,\"y\":-0.5},\"p1\":{\"x\":0.6657039711191336,\"y\":0.05776173285198556},\"p2\":{\"x\":0,\"y\":159.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1412\",\"typeID\":\"Arrow\",\"zOrder\":\"23\",\"w\":\"98\",\"h\":\"196\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"377\",\"y\":\"2126\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":98,\"y\":-0.5},\"p1\":{\"x\":0.6528545119705341,\"y\":0.09576427255985268},\"p2\":{\"x\":0,\"y\":195.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1413\",\"typeID\":\"Arrow\",\"zOrder\":\"22\",\"w\":\"88\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"781\",\"y\":\"2107\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":88,\"y\":-0.5},\"p1\":{\"x\":0.50296668188042,\"y\":0.0027384755819260557},\"p2\":{\"x\":0,\"y\":-0.5},\"rightArrow\":\"false\"}},{\"ID\":\"1414\",\"typeID\":\"Arrow\",\"zOrder\":\"21\",\"w\":\"2\",\"h\":\"80\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1048\",\"y\":\"2099\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.465256538516507,\"y\":0.0007431756467057328},\"p2\":{\"x\":2,\"y\":80},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1421\",\"typeID\":\"TextArea\",\"zOrder\":\"481\",\"w\":\"245\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"927\",\"y\":\"2317\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1422\",\"typeID\":\"Label\",\"zOrder\":\"482\",\"w\":\"87\",\"measuredW\":\"85\",\"measuredH\":\"25\",\"x\":\"1006\",\"y\":\"2323\",\"properties\":{\"size\":\"17\",\"text\":\"Serverless\"}},{\"ID\":\"1426\",\"typeID\":\"Arrow\",\"zOrder\":\"20\",\"w\":\"162\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"593\",\"y\":\"2712\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":162,\"y\":0.5},\"p1\":{\"x\":0.6028331464402591,\"y\":-0.0019680984964642882},\"p2\":{\"x\":0,\"y\":0.5},\"rightArrow\":\"false\"}},{\"ID\":\"1427\",\"typeID\":\"Arrow\",\"zOrder\":\"19\",\"w\":\"35\",\"h\":\"95\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"772\",\"y\":\"2724\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":95},\"p1\":{\"x\":0.4529742373542117,\"y\":-0.12147103732822093},\"p2\":{\"x\":35,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1428\",\"typeID\":\"TextArea\",\"zOrder\":\"483\",\"w\":\"318\",\"h\":\"129\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"541\",\"y\":\"2803\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1429\",\"typeID\":\"Label\",\"zOrder\":\"484\",\"w\":\"147\",\"measuredW\":\"144\",\"measuredH\":\"25\",\"x\":\"626\",\"y\":\"2819\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Building for Scale\"}},{\"ID\":\"1430\",\"typeID\":\"Label\",\"zOrder\":\"485\",\"w\":\"264\",\"measuredW\":\"261\",\"measuredH\":\"24\",\"x\":\"568\",\"y\":\"2847\",\"properties\":{\"size\":\"16\",\"text\":\"General topics that you should learn\"}},{\"ID\":\"1431\",\"typeID\":\"Label\",\"zOrder\":\"486\",\"w\":\"270\",\"measuredW\":\"264\",\"measuredH\":\"24\",\"x\":\"565\",\"y\":\"2870\",\"properties\":{\"size\":\"16\",\"text\":\"and care about for the sustainability\"}},{\"ID\":\"1432\",\"typeID\":\"Label\",\"zOrder\":\"487\",\"w\":\"108\",\"measuredW\":\"107\",\"measuredH\":\"24\",\"x\":\"646\",\"y\":\"2894\",\"properties\":{\"size\":\"16\",\"text\":\"of the product.\"}},{\"ID\":\"1440\",\"typeID\":\"Arrow\",\"zOrder\":\"16\",\"w\":\"83\",\"h\":\"112\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"471\",\"y\":\"2750\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":-0.5},\"p1\":{\"x\":0.5543793266543408,\"y\":-0.07832480543492278},\"p2\":{\"x\":83,\"y\":111.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1445\",\"typeID\":\"Arrow\",\"zOrder\":\"15\",\"w\":\"131\",\"h\":\"2\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"432\",\"y\":\"2884\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0.5},\"p1\":{\"x\":0.4113947465778763,\"y\":0.00850906400295968},\"p2\":{\"x\":131,\"y\":2},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1464\",\"typeID\":\"Label\",\"zOrder\":\"490\",\"w\":\"299\",\"measuredW\":\"295\",\"measuredH\":\"23\",\"x\":\"927\",\"y\":\"2972\",\"properties\":{\"size\":\"15\",\"text\":\"Metrics logging and other observable items\"}},{\"ID\":\"1465\",\"typeID\":\"Label\",\"zOrder\":\"491\",\"w\":\"305\",\"measuredW\":\"303\",\"measuredH\":\"23\",\"x\":\"924\",\"y\":\"2995\",\"properties\":{\"size\":\"15\",\"text\":\"that could help you in debugging and solving\"}},{\"ID\":\"1466\",\"typeID\":\"Label\",\"zOrder\":\"492\",\"w\":\"229\",\"measuredW\":\"226\",\"measuredH\":\"23\",\"x\":\"962\",\"y\":\"3019\",\"properties\":{\"size\":\"15\",\"text\":\"the issues when things go wrong\"}},{\"ID\":\"1468\",\"typeID\":\"TextArea\",\"zOrder\":\"17\",\"w\":\"335\",\"h\":\"123\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"908\",\"y\":\"2932\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1469\",\"typeID\":\"Label\",\"zOrder\":\"18\",\"w\":\"281\",\"measuredW\":\"277\",\"measuredH\":\"25\",\"x\":\"938\",\"y\":\"2944\",\"properties\":{\"size\":\"17\",\"text\":\"Building with Observability in mind\",\"bold\":\"true\"}},{\"ID\":\"1471\",\"typeID\":\"TextArea\",\"zOrder\":\"488\",\"w\":\"199\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"285\",\"y\":\"2728\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1472\",\"typeID\":\"Label\",\"zOrder\":\"489\",\"w\":\"159\",\"measuredW\":\"158\",\"measuredH\":\"25\",\"x\":\"305\",\"y\":\"2735\",\"properties\":{\"size\":\"17\",\"text\":\"Mitigation Strategies\"}},{\"ID\":\"1475\",\"typeID\":\"TextArea\",\"zOrder\":\"493\",\"w\":\"198\",\"h\":\"36\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"286\",\"y\":\"2865\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1476\",\"typeID\":\"Label\",\"zOrder\":\"494\",\"w\":\"84\",\"measuredW\":\"82\",\"measuredH\":\"25\",\"x\":\"139\",\"y\":\"2876\",\"properties\":{\"size\":\"17\",\"text\":\"Monitoring\"}},{\"ID\":\"1479\",\"typeID\":\"Arrow\",\"zOrder\":\"14\",\"w\":\"84\",\"h\":\"11\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"207\",\"y\":\"2731\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":-0.5},\"p1\":{\"x\":0.5429934072099873,\"y\":0.020760274933370754},\"p2\":{\"x\":84,\"y\":10.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1480\",\"typeID\":\"Label\",\"zOrder\":\"495\",\"w\":\"78\",\"measuredW\":\"76\",\"measuredH\":\"25\",\"x\":\"132\",\"y\":\"2719\",\"properties\":{\"size\":\"17\",\"text\":\"Throttling\"}},{\"ID\":\"1481\",\"typeID\":\"Label\",\"zOrder\":\"496\",\"w\":\"109\",\"measuredW\":\"108\",\"measuredH\":\"25\",\"x\":\"101\",\"y\":\"2747\",\"properties\":{\"size\":\"17\",\"text\":\"Backpressure\"}},{\"ID\":\"1482\",\"typeID\":\"Arrow\",\"zOrder\":\"13\",\"w\":\"92\",\"h\":\"15\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"208\",\"y\":\"2745\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":14.5},\"p1\":{\"x\":0.4816429170159262,\"y\":-0.01441743503772003},\"p2\":{\"x\":92,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1483\",\"typeID\":\"Label\",\"zOrder\":\"497\",\"w\":\"100\",\"measuredW\":\"98\",\"measuredH\":\"25\",\"x\":\"110\",\"y\":\"2775\",\"properties\":{\"size\":\"17\",\"text\":\"Loadshifting\"}},{\"ID\":\"1485\",\"typeID\":\"Arrow\",\"zOrder\":\"12\",\"w\":\"88\",\"h\":\"39\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"208\",\"y\":\"2749\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":38.5},\"p1\":{\"x\":0.447876447876448,\"y\":-0.02702702702702703},\"p2\":{\"x\":88,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1486\",\"typeID\":\"Label\",\"zOrder\":\"498\",\"w\":\"70\",\"measuredW\":\"67\",\"measuredH\":\"25\",\"x\":\"138\",\"y\":\"2669\",\"properties\":{\"size\":\"17\",\"text\":\"Graceful\"}},{\"ID\":\"1488\",\"typeID\":\"Arrow\",\"zOrder\":\"11\",\"w\":\"87\",\"h\":\"35\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"206\",\"y\":\"2702\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.41139137510170876,\"y\":-0.0006509357200978165},\"p2\":{\"x\":87,\"y\":34.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1496\",\"typeID\":\"Arrow\",\"zOrder\":\"10\",\"w\":\"81\",\"h\":\"52\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"208\",\"y\":\"2761\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":80,\"y\":-0.5},\"p1\":{\"x\":0.5609364241450541,\"y\":0.021803993573559728},\"p2\":{\"x\":-0.5,\"y\":51.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1497\",\"typeID\":\"Label\",\"zOrder\":\"499\",\"w\":\"84\",\"measuredW\":\"79\",\"measuredH\":\"25\",\"x\":\"137\",\"y\":\"2901\",\"properties\":{\"size\":\"17\",\"text\":\"Telemetry\"}},{\"ID\":\"1499\",\"typeID\":\"Label\",\"zOrder\":\"500\",\"w\":\"124\",\"measuredW\":\"123\",\"measuredH\":\"25\",\"x\":\"99\",\"y\":\"2851\",\"properties\":{\"size\":\"17\",\"text\":\"Instrumentation\"}},{\"ID\":\"1500\",\"typeID\":\"Label\",\"zOrder\":\"501\",\"w\":\"155\",\"measuredW\":\"155\",\"measuredH\":\"25\",\"x\":\"308\",\"y\":\"2871\",\"properties\":{\"size\":\"17\",\"text\":\"Understand the Diff.\"}},{\"ID\":\"1501\",\"typeID\":\"Arrow\",\"zOrder\":\"9\",\"w\":\"64\",\"h\":\"17\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"226\",\"y\":\"2864\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.5429504182819833,\"y\":0.006529279738828819},\"p2\":{\"x\":64,\"y\":16.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1502\",\"typeID\":\"Arrow\",\"zOrder\":\"7\",\"w\":\"71\",\"h\":\"11\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"226\",\"y\":\"2880\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":10},\"p1\":{\"x\":0.47411668036154464,\"y\":-0.018898931799506993},\"p2\":{\"x\":71,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1503\",\"typeID\":\"Arrow\",\"zOrder\":\"8\",\"w\":\"71\",\"h\":\"31\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"225\",\"y\":\"2882\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":30},\"p1\":{\"x\":0.49956039355243875,\"y\":-0.017416788779568766},\"p2\":{\"x\":71,\"y\":-0.5},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1504\",\"typeID\":\"Label\",\"zOrder\":\"502\",\"w\":\"118\",\"measuredW\":\"116\",\"measuredH\":\"25\",\"x\":\"92\",\"y\":\"2800\",\"properties\":{\"size\":\"17\",\"text\":\"Circuit Breaker\"}},{\"ID\":\"1507\",\"typeID\":\"TextArea\",\"zOrder\":\"503\",\"w\":\"333\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"908\",\"y\":\"2838\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1508\",\"typeID\":\"Label\",\"zOrder\":\"504\",\"w\":\"154\",\"measuredW\":\"153\",\"measuredH\":\"25\",\"x\":\"1001\",\"y\":\"2845\",\"properties\":{\"size\":\"17\",\"text\":\"Migration Strategies\"}},{\"ID\":\"1509\",\"typeID\":\"Arrow\",\"zOrder\":\"6\",\"w\":\"131\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"820\",\"y\":\"2860\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.39125530258496044,\"y\":-0.00886544541713669},\"p2\":{\"x\":131,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1511\",\"typeID\":\"TextArea\",\"zOrder\":\"505\",\"w\":\"332\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"909\",\"y\":\"2884\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1512\",\"typeID\":\"Label\",\"zOrder\":\"506\",\"w\":\"230\",\"measuredW\":\"229\",\"measuredH\":\"25\",\"x\":\"963\",\"y\":\"2891\",\"properties\":{\"size\":\"17\",\"text\":\"Horizontal vs Vertical Scaling\"}},{\"ID\":\"1513\",\"typeID\":\"Label\",\"zOrder\":\"507\",\"w\":\"96\",\"measuredW\":\"94\",\"measuredH\":\"25\",\"x\":\"112\",\"y\":\"2689\",\"properties\":{\"size\":\"17\",\"text\":\"Degradation\"}},{\"ID\":\"1515\",\"typeID\":\"Arrow\",\"zOrder\":\"2\",\"w\":\"2\",\"h\":\"89\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"697\",\"y\":\"3093\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":1,\"y\":88},\"p1\":{\"x\":0.40724273933309435,\"y\":0.00953746862674794},\"p2\":{\"x\":1,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1516\",\"typeID\":\"Arrow\",\"zOrder\":\"3\",\"w\":\"8\",\"h\":\"166\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"697\",\"y\":\"2915\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":7,\"y\":165},\"p1\":{\"x\":0.4072427393330943,\"y\":0.009537468626747932},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1517\",\"typeID\":\"TextArea\",\"zOrder\":\"4\",\"w\":\"207\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"602\",\"y\":\"3064\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1518\",\"typeID\":\"Label\",\"zOrder\":\"5\",\"measuredW\":\"118\",\"measuredH\":\"25\",\"x\":\"647\",\"y\":\"3077\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Keep Learning\"}},{\"ID\":\"1522\",\"typeID\":\"Arrow\",\"zOrder\":\"1\",\"w\":\"133\",\"h\":\"34\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"810\",\"y\":\"2870\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.3912553025849605,\"y\":-0.008865445417136665},\"p2\":{\"x\":133,\"y\":34},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1523\",\"typeID\":\"Arrow\",\"zOrder\":\"0\",\"w\":\"116\",\"h\":\"68\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"820\",\"y\":\"2880\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.39125530258496044,\"y\":-0.008865445417136677},\"p2\":{\"x\":116,\"y\":68},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1526\",\"typeID\":\"Icon\",\"zOrder\":\"508\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"557\",\"y\":\"445\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1527\",\"typeID\":\"Icon\",\"zOrder\":\"509\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"557\",\"y\":\"445\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1528\",\"typeID\":\"Icon\",\"zOrder\":\"510\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"571\",\"y\":\"603\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1529\",\"typeID\":\"Icon\",\"zOrder\":\"511\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"571\",\"y\":\"603\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1530\",\"typeID\":\"Icon\",\"zOrder\":\"512\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"564\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1531\",\"typeID\":\"Icon\",\"zOrder\":\"513\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"564\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1532\",\"typeID\":\"Icon\",\"zOrder\":\"514\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"617\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1533\",\"typeID\":\"Icon\",\"zOrder\":\"515\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"617\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1534\",\"typeID\":\"Icon\",\"zOrder\":\"516\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"665\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1535\",\"typeID\":\"Icon\",\"zOrder\":\"517\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"665\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1536\",\"typeID\":\"Icon\",\"zOrder\":\"518\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"716\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1537\",\"typeID\":\"Icon\",\"zOrder\":\"519\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"716\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1538\",\"typeID\":\"Icon\",\"zOrder\":\"520\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"767\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1539\",\"typeID\":\"Icon\",\"zOrder\":\"521\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"192\",\"y\":\"767\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1540\",\"typeID\":\"Icon\",\"zOrder\":\"522\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"317\",\"y\":\"497\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1541\",\"typeID\":\"Icon\",\"zOrder\":\"523\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"317\",\"y\":\"497\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1542\",\"typeID\":\"Icon\",\"zOrder\":\"524\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1085\",\"y\":\"478\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1543\",\"typeID\":\"Icon\",\"zOrder\":\"525\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1085\",\"y\":\"478\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1544\",\"typeID\":\"Icon\",\"zOrder\":\"526\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1085\",\"y\":\"531\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1545\",\"typeID\":\"Icon\",\"zOrder\":\"527\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1085\",\"y\":\"531\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1546\",\"typeID\":\"Icon\",\"zOrder\":\"528\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"588\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1547\",\"typeID\":\"Icon\",\"zOrder\":\"529\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"588\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1548\",\"typeID\":\"Icon\",\"zOrder\":\"530\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"641\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1549\",\"typeID\":\"Icon\",\"zOrder\":\"531\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"641\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1550\",\"typeID\":\"Icon\",\"zOrder\":\"532\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"691\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1551\",\"typeID\":\"Icon\",\"zOrder\":\"533\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"691\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1552\",\"typeID\":\"Icon\",\"zOrder\":\"534\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"741\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1553\",\"typeID\":\"Icon\",\"zOrder\":\"535\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"741\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1554\",\"typeID\":\"Icon\",\"zOrder\":\"536\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"816\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1555\",\"typeID\":\"Icon\",\"zOrder\":\"537\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1211\",\"y\":\"816\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1556\",\"typeID\":\"Icon\",\"zOrder\":\"538\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"491\",\"y\":\"1244\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1557\",\"typeID\":\"Icon\",\"zOrder\":\"539\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"491\",\"y\":\"1244\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1558\",\"typeID\":\"Icon\",\"zOrder\":\"540\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"491\",\"y\":\"1292\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1559\",\"typeID\":\"Icon\",\"zOrder\":\"541\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"491\",\"y\":\"1292\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1560\",\"typeID\":\"Icon\",\"zOrder\":\"542\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"491\",\"y\":\"1335\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1561\",\"typeID\":\"Icon\",\"zOrder\":\"543\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"491\",\"y\":\"1335\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1562\",\"typeID\":\"Icon\",\"zOrder\":\"544\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"491\",\"y\":\"1381\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1563\",\"typeID\":\"Icon\",\"zOrder\":\"545\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"491\",\"y\":\"1381\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1564\",\"typeID\":\"Icon\",\"zOrder\":\"546\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"399\",\"y\":\"1421\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1565\",\"typeID\":\"Icon\",\"zOrder\":\"547\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"399\",\"y\":\"1421\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1566\",\"typeID\":\"Icon\",\"zOrder\":\"548\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"401\",\"y\":\"1471\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1567\",\"typeID\":\"Icon\",\"zOrder\":\"549\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"401\",\"y\":\"1471\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1568\",\"typeID\":\"Icon\",\"zOrder\":\"550\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1241\",\"y\":\"1341\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1569\",\"typeID\":\"Icon\",\"zOrder\":\"551\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1241\",\"y\":\"1341\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1570\",\"typeID\":\"Icon\",\"zOrder\":\"552\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1241\",\"y\":\"1391\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1571\",\"typeID\":\"Icon\",\"zOrder\":\"553\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1241\",\"y\":\"1391\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1572\",\"typeID\":\"Icon\",\"zOrder\":\"554\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1241\",\"y\":\"1436\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1573\",\"typeID\":\"Icon\",\"zOrder\":\"555\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1241\",\"y\":\"1436\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1574\",\"typeID\":\"Icon\",\"zOrder\":\"556\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"398\",\"y\":\"1532\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1575\",\"typeID\":\"Icon\",\"zOrder\":\"557\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"398\",\"y\":\"1532\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1576\",\"typeID\":\"Icon\",\"zOrder\":\"558\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"398\",\"y\":\"1580\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1577\",\"typeID\":\"Icon\",\"zOrder\":\"559\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"398\",\"y\":\"1580\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1578\",\"typeID\":\"Icon\",\"zOrder\":\"560\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"399\",\"y\":\"1627\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1579\",\"typeID\":\"Icon\",\"zOrder\":\"561\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"399\",\"y\":\"1627\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1580\",\"typeID\":\"Icon\",\"zOrder\":\"562\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1227\",\"y\":\"1504\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1581\",\"typeID\":\"Icon\",\"zOrder\":\"563\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1227\",\"y\":\"1504\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1582\",\"typeID\":\"Icon\",\"zOrder\":\"564\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1228\",\"y\":\"1576\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1583\",\"typeID\":\"Icon\",\"zOrder\":\"565\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1228\",\"y\":\"1576\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1584\",\"typeID\":\"Icon\",\"zOrder\":\"566\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1228\",\"y\":\"1624\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1585\",\"typeID\":\"Icon\",\"zOrder\":\"567\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1228\",\"y\":\"1624\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1586\",\"typeID\":\"Icon\",\"zOrder\":\"568\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1490\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1587\",\"typeID\":\"Icon\",\"zOrder\":\"569\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1490\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1588\",\"typeID\":\"Icon\",\"zOrder\":\"570\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1526\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1589\",\"typeID\":\"Icon\",\"zOrder\":\"571\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1526\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1590\",\"typeID\":\"Icon\",\"zOrder\":\"572\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1563\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1591\",\"typeID\":\"Icon\",\"zOrder\":\"573\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1563\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1592\",\"typeID\":\"Icon\",\"zOrder\":\"574\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1599\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1593\",\"typeID\":\"Icon\",\"zOrder\":\"575\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1599\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1594\",\"typeID\":\"Icon\",\"zOrder\":\"576\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1634\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1595\",\"typeID\":\"Icon\",\"zOrder\":\"577\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1634\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1596\",\"typeID\":\"Icon\",\"zOrder\":\"578\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1672\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1597\",\"typeID\":\"Icon\",\"zOrder\":\"579\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1672\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1598\",\"typeID\":\"Icon\",\"zOrder\":\"580\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1450\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1599\",\"typeID\":\"Icon\",\"zOrder\":\"581\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1450\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1600\",\"typeID\":\"Icon\",\"zOrder\":\"582\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"106\",\"y\":\"1752\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1601\",\"typeID\":\"Icon\",\"zOrder\":\"583\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"106\",\"y\":\"1752\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1602\",\"typeID\":\"Icon\",\"zOrder\":\"584\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"108\",\"y\":\"1801\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1603\",\"typeID\":\"Icon\",\"zOrder\":\"585\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"108\",\"y\":\"1801\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1604\",\"typeID\":\"Icon\",\"zOrder\":\"586\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"108\",\"y\":\"1801\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1605\",\"typeID\":\"Icon\",\"zOrder\":\"587\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"303\",\"y\":\"1733\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1606\",\"typeID\":\"Icon\",\"zOrder\":\"588\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"303\",\"y\":\"1733\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1607\",\"typeID\":\"Icon\",\"zOrder\":\"589\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"304\",\"y\":\"1825\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1608\",\"typeID\":\"Icon\",\"zOrder\":\"590\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"304\",\"y\":\"1825\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1609\",\"typeID\":\"Icon\",\"zOrder\":\"591\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1242\",\"y\":\"1673\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1610\",\"typeID\":\"Icon\",\"zOrder\":\"592\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1242\",\"y\":\"1673\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1611\",\"typeID\":\"Icon\",\"zOrder\":\"593\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1247\",\"y\":\"1880\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1612\",\"typeID\":\"Icon\",\"zOrder\":\"594\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1247\",\"y\":\"1880\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1613\",\"typeID\":\"Icon\",\"zOrder\":\"595\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"242\",\"y\":\"1875\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1614\",\"typeID\":\"Icon\",\"zOrder\":\"596\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"242\",\"y\":\"1875\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1615\",\"typeID\":\"Icon\",\"zOrder\":\"597\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"242\",\"y\":\"1924\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1616\",\"typeID\":\"Icon\",\"zOrder\":\"598\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"242\",\"y\":\"1924\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1617\",\"typeID\":\"Icon\",\"zOrder\":\"599\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"242\",\"y\":\"1966\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1618\",\"typeID\":\"Icon\",\"zOrder\":\"600\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"242\",\"y\":\"1966\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1619\",\"typeID\":\"Icon\",\"zOrder\":\"601\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"495\",\"y\":\"1992\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1620\",\"typeID\":\"Icon\",\"zOrder\":\"602\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"495\",\"y\":\"1992\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1621\",\"typeID\":\"Icon\",\"zOrder\":\"603\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1157\",\"y\":\"2141\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1622\",\"typeID\":\"Icon\",\"zOrder\":\"604\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1157\",\"y\":\"2141\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1623\",\"typeID\":\"Icon\",\"zOrder\":\"605\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1157\",\"y\":\"2190\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1624\",\"typeID\":\"Icon\",\"zOrder\":\"606\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1157\",\"y\":\"2190\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1625\",\"typeID\":\"Icon\",\"zOrder\":\"607\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1157\",\"y\":\"2231\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1626\",\"typeID\":\"Icon\",\"zOrder\":\"608\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1157\",\"y\":\"2231\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1629\",\"typeID\":\"Icon\",\"zOrder\":\"609\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1159\",\"y\":\"2273\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1630\",\"typeID\":\"Icon\",\"zOrder\":\"610\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1159\",\"y\":\"2273\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1631\",\"typeID\":\"Icon\",\"zOrder\":\"611\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1157\",\"y\":\"2314\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1632\",\"typeID\":\"Icon\",\"zOrder\":\"612\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1157\",\"y\":\"2314\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1633\",\"typeID\":\"Icon\",\"zOrder\":\"613\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"118\",\"y\":\"2170\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1634\",\"typeID\":\"Icon\",\"zOrder\":\"614\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"118\",\"y\":\"2170\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1635\",\"typeID\":\"Icon\",\"zOrder\":\"615\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"117\",\"y\":\"2213\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1636\",\"typeID\":\"Icon\",\"zOrder\":\"616\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"117\",\"y\":\"2213\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1637\",\"typeID\":\"Icon\",\"zOrder\":\"617\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"117\",\"y\":\"2255\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1638\",\"typeID\":\"Icon\",\"zOrder\":\"618\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"117\",\"y\":\"2255\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1639\",\"typeID\":\"Icon\",\"zOrder\":\"619\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"119\",\"y\":\"2298\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1640\",\"typeID\":\"Icon\",\"zOrder\":\"620\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"119\",\"y\":\"2298\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1641\",\"typeID\":\"Icon\",\"zOrder\":\"621\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"118\",\"y\":\"2124\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1642\",\"typeID\":\"Icon\",\"zOrder\":\"622\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"118\",\"y\":\"2124\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1643\",\"typeID\":\"Icon\",\"zOrder\":\"623\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"118\",\"y\":\"2077\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1644\",\"typeID\":\"Icon\",\"zOrder\":\"624\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"118\",\"y\":\"2077\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1645\",\"typeID\":\"Icon\",\"zOrder\":\"625\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"118\",\"y\":\"2031\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1646\",\"typeID\":\"Icon\",\"zOrder\":\"626\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"118\",\"y\":\"2031\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1647\",\"typeID\":\"Icon\",\"zOrder\":\"627\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"477\",\"y\":\"2254\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1648\",\"typeID\":\"Icon\",\"zOrder\":\"628\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"477\",\"y\":\"2254\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1649\",\"typeID\":\"Icon\",\"zOrder\":\"629\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"477\",\"y\":\"2299\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1650\",\"typeID\":\"Icon\",\"zOrder\":\"630\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"477\",\"y\":\"2299\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1651\",\"typeID\":\"Icon\",\"zOrder\":\"631\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"132\",\"y\":\"2400\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1652\",\"typeID\":\"Icon\",\"zOrder\":\"632\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"132\",\"y\":\"2400\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1657\",\"typeID\":\"Icon\",\"zOrder\":\"633\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1058\",\"y\":\"2480\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1658\",\"typeID\":\"Icon\",\"zOrder\":\"634\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1058\",\"y\":\"2480\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1659\",\"typeID\":\"Icon\",\"zOrder\":\"635\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1032\",\"y\":\"2480\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1660\",\"typeID\":\"Icon\",\"zOrder\":\"636\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1032\",\"y\":\"2480\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1661\",\"typeID\":\"Icon\",\"zOrder\":\"637\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1056\",\"y\":\"2530\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1662\",\"typeID\":\"Icon\",\"zOrder\":\"638\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1056\",\"y\":\"2530\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1663\",\"typeID\":\"Icon\",\"zOrder\":\"639\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1056\",\"y\":\"2530\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1664\",\"typeID\":\"Icon\",\"zOrder\":\"640\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"417\",\"y\":\"2555\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1665\",\"typeID\":\"Icon\",\"zOrder\":\"641\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"417\",\"y\":\"2555\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1666\",\"typeID\":\"Icon\",\"zOrder\":\"642\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"223\",\"y\":\"2565\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1667\",\"typeID\":\"Icon\",\"zOrder\":\"643\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"223\",\"y\":\"2565\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1668\",\"typeID\":\"Icon\",\"zOrder\":\"644\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"814\",\"y\":\"2497\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1669\",\"typeID\":\"Icon\",\"zOrder\":\"645\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"814\",\"y\":\"2497\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1670\",\"typeID\":\"Icon\",\"zOrder\":\"646\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1144\",\"y\":\"2364\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1671\",\"typeID\":\"Icon\",\"zOrder\":\"647\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1144\",\"y\":\"2364\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1672\",\"typeID\":\"Icon\",\"zOrder\":\"648\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1121\",\"y\":\"2363\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1673\",\"typeID\":\"Icon\",\"zOrder\":\"649\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1121\",\"y\":\"2363\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1674\",\"typeID\":\"Icon\",\"zOrder\":\"650\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"877\",\"y\":\"2373\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1675\",\"typeID\":\"Icon\",\"zOrder\":\"651\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"877\",\"y\":\"2373\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1676\",\"typeID\":\"Icon\",\"zOrder\":\"652\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1145\",\"y\":\"2404\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1677\",\"typeID\":\"Icon\",\"zOrder\":\"653\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1145\",\"y\":\"2404\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1678\",\"typeID\":\"Icon\",\"zOrder\":\"654\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1145\",\"y\":\"2404\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1679\",\"typeID\":\"Icon\",\"zOrder\":\"655\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"511\",\"y\":\"2680\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1680\",\"typeID\":\"Icon\",\"zOrder\":\"656\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"511\",\"y\":\"2680\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1681\",\"typeID\":\"Icon\",\"zOrder\":\"657\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"866\",\"y\":\"2674\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1682\",\"typeID\":\"Icon\",\"zOrder\":\"658\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"866\",\"y\":\"2674\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1683\",\"typeID\":\"Icon\",\"zOrder\":\"659\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2636\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1684\",\"typeID\":\"Icon\",\"zOrder\":\"660\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2636\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1685\",\"typeID\":\"Icon\",\"zOrder\":\"661\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1125\",\"y\":\"2636\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1686\",\"typeID\":\"Icon\",\"zOrder\":\"662\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1125\",\"y\":\"2636\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1687\",\"typeID\":\"Icon\",\"zOrder\":\"663\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2687\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1688\",\"typeID\":\"Icon\",\"zOrder\":\"664\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2687\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1689\",\"typeID\":\"Icon\",\"zOrder\":\"665\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2687\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1690\",\"typeID\":\"Icon\",\"zOrder\":\"666\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2776\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1691\",\"typeID\":\"Icon\",\"zOrder\":\"667\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2776\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1692\",\"typeID\":\"Icon\",\"zOrder\":\"668\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2776\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1693\",\"typeID\":\"Icon\",\"zOrder\":\"669\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2732\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1694\",\"typeID\":\"Icon\",\"zOrder\":\"670\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2732\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1695\",\"typeID\":\"Icon\",\"zOrder\":\"671\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1151\",\"y\":\"2732\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1696\",\"typeID\":\"Icon\",\"zOrder\":\"672\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"471\",\"y\":\"2720\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1697\",\"typeID\":\"Icon\",\"zOrder\":\"673\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"471\",\"y\":\"2720\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1698\",\"typeID\":\"Icon\",\"zOrder\":\"674\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"531\",\"y\":\"2794\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1699\",\"typeID\":\"Icon\",\"zOrder\":\"675\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"531\",\"y\":\"2794\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1700\",\"typeID\":\"Icon\",\"zOrder\":\"676\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1226\",\"y\":\"2829\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1701\",\"typeID\":\"Icon\",\"zOrder\":\"677\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1226\",\"y\":\"2829\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1702\",\"typeID\":\"Icon\",\"zOrder\":\"678\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1226\",\"y\":\"2882\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1703\",\"typeID\":\"Icon\",\"zOrder\":\"679\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1226\",\"y\":\"2882\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1704\",\"typeID\":\"Icon\",\"zOrder\":\"680\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1226\",\"y\":\"2928\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1705\",\"typeID\":\"Icon\",\"zOrder\":\"681\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1226\",\"y\":\"2928\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}}]},\"attributes\":{\"name\":\"New Wireframe 2\",\"order\":1000009.8590807884,\"parentID\":null},\"resourceID\":\"DDB13677-39DE-4AF9-BE7F-B61E02CC41B3\",\"mockupH\":\"3053\",\"mockupW\":\"1196\",\"measuredW\":\"1288\",\"measuredH\":\"3182\",\"version\":\"1.0\"}}");

/***/ }),

/***/ "./content/project/devops-map.json":
/*!*****************************************!*\
  !*** ./content/project/devops-map.json ***!
  \*****************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {


/***/ }),

/***/ "./content/project/disclaimer.json":
/*!*****************************************!*\
  !*** ./content/project/disclaimer.json ***!
  \*****************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mockup\":{\"controls\":{\"control\":[{\"ID\":\"119\",\"h\":\"274\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"911\",\"x\":\"223\",\"y\":\"170\",\"zOrder\":\"0\"},{\"ID\":\"120\",\"measuredH\":\"40\",\"measuredW\":\"170\",\"properties\":{\"bold\":\"true\",\"size\":\"32\",\"text\":\"Disclaimer!\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"190\",\"zOrder\":\"1\"},{\"ID\":\"121\",\"measuredH\":\"32\",\"measuredW\":\"856\",\"properties\":{\"size\":\"24\",\"text\":\"The purpose of this roadmap is to give you an idea about the landscape and to\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"246\",\"zOrder\":\"2\"},{\"ID\":\"123\",\"measuredH\":\"32\",\"measuredW\":\"833\",\"properties\":{\"size\":\"24\",\"text\":\"guide you if you are confused about what to learn next and not to encourage\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"282\",\"zOrder\":\"3\"},{\"ID\":\"124\",\"measuredH\":\"32\",\"measuredW\":\"825\",\"properties\":{\"size\":\"24\",\"text\":\"you to learn what is hip and trendy. You should *grow some understanding* of\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"317\",\"zOrder\":\"4\"},{\"ID\":\"125\",\"measuredH\":\"32\",\"measuredW\":\"816\",\"properties\":{\"size\":\"24\",\"text\":\"*why one tool would be better suited for some cases than the other and*\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"353\",\"zOrder\":\"5\"},{\"ID\":\"126\",\"measuredH\":\"32\",\"measuredW\":\"710\",\"properties\":{\"size\":\"24\",\"text\":\"*remember hip and trendy never means best suited for the job*\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"389\",\"zOrder\":\"6\"}]},\"measuredH\":\"444\",\"measuredW\":\"1134\",\"mockupH\":\"274\",\"mockupW\":\"911\",\"version\":\"1.0\"}}");

/***/ }),

/***/ "./content/project/frontend-map.json":
/*!*******************************************!*\
  !*** ./content/project/frontend-map.json ***!
  \*******************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mockup\":{\"controls\":{\"control\":[{\"ID\":\"924\",\"typeID\":\"Arrow\",\"zOrder\":\"0\",\"w\":\"105\",\"h\":\"43\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"952\",\"y\":\"2014\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":42},\"p1\":{\"x\":0.3246422893481717,\"y\":0.04197138314785374},\"p2\":{\"x\":104,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"925\",\"typeID\":\"Arrow\",\"zOrder\":\"1\",\"w\":\"128\",\"h\":\"9\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"940\",\"y\":\"2060\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":8},\"p1\":{\"x\":0.3321152059461133,\"y\":0.04465778878909879},\"p2\":{\"x\":127,\"y\":4},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"926\",\"typeID\":\"Arrow\",\"zOrder\":\"2\",\"w\":\"129\",\"h\":\"34\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"941\",\"y\":\"2075\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.3458601686475002,\"y\":-0.005245335635083992},\"p2\":{\"x\":128,\"y\":33},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"927\",\"typeID\":\"Arrow\",\"zOrder\":\"3\",\"w\":\"168\",\"h\":\"138\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"569\",\"y\":\"2066\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":167,\"y\":1},\"p1\":{\"x\":0.5330602565484531,\"y\":-0.2424921849735906},\"p2\":{\"x\":0,\"y\":137},\"rightArrow\":\"false\"}},{\"ID\":\"928\",\"typeID\":\"Arrow\",\"zOrder\":\"4\",\"w\":\"140\",\"h\":\"73\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"588\",\"y\":\"1981\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.3865808955652986,\"y\":-0.19467404585639328},\"p2\":{\"x\":139,\"y\":72},\"rightArrow\":\"false\"}},{\"ID\":\"929\",\"typeID\":\"Arrow\",\"zOrder\":\"5\",\"w\":\"135\",\"h\":\"49\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"367\",\"y\":\"1974\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":134,\"y\":0},\"p1\":{\"x\":0.503622802344166,\"y\":0.003676078849227487},\"p2\":{\"x\":0,\"y\":48},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"930\",\"typeID\":\"Arrow\",\"zOrder\":\"6\",\"w\":\"98\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1073\",\"y\":\"1947\",\"properties\":{\"color\":\"10027263\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":2},\"p1\":{\"x\":0.30434782608695654,\"y\":0.014492753623188411},\"p2\":{\"x\":97,\"y\":2},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"931\",\"typeID\":\"Arrow\",\"zOrder\":\"7\",\"w\":\"122\",\"h\":\"86\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"369\",\"y\":\"1982\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":121,\"y\":0},\"p1\":{\"x\":0.5036228023441662,\"y\":0.00367607884922756},\"p2\":{\"x\":0,\"y\":85},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"932\",\"typeID\":\"Arrow\",\"zOrder\":\"8\",\"w\":\"148\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"353\",\"y\":\"1972\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":147,\"y\":0},\"p1\":{\"x\":0.5036228023441662,\"y\":0.003676078849227491},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"933\",\"typeID\":\"Arrow\",\"zOrder\":\"9\",\"w\":\"137\",\"h\":\"33\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"358\",\"y\":\"1937\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":136,\"y\":32},\"p1\":{\"x\":0.5049180327868853,\"y\":-0.02090163934426227},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"934\",\"typeID\":\"Arrow\",\"zOrder\":\"10\",\"w\":\"146\",\"h\":\"65\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"350\",\"y\":\"1900\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":145,\"y\":64},\"p1\":{\"x\":0.49185940050157245,\"y\":-0.05186895426137495},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"935\",\"typeID\":\"Arrow\",\"zOrder\":\"11\",\"w\":\"105\",\"h\":\"89\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"653\",\"y\":\"1881\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":104,\"y\":0},\"p1\":{\"x\":0.5150450252580716,\"y\":0.2856358444981331},\"p2\":{\"x\":0,\"y\":86},\"rightArrow\":\"false\"}},{\"ID\":\"936\",\"typeID\":\"Arrow\",\"zOrder\":\"12\",\"w\":\"118\",\"h\":\"26\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1065\",\"y\":\"1871\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":117,\"y\":25},\"p1\":{\"x\":0.47388515577275486,\"y\":0.002290775809407195},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"937\",\"typeID\":\"Arrow\",\"zOrder\":\"13\",\"w\":\"124\",\"h\":\"21\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1059\",\"y\":\"1847\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":123,\"y\":0},\"p1\":{\"x\":0.473885155772755,\"y\":0.00229077580940721},\"p2\":{\"x\":0,\"y\":20},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"938\",\"typeID\":\"Arrow\",\"zOrder\":\"14\",\"w\":\"117\",\"h\":\"18\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1056\",\"y\":\"1773\",\"properties\":{\"color\":\"10027263\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":2},\"p1\":{\"x\":0.3238461538461538,\"y\":0.04076923076923073},\"p2\":{\"x\":116,\"y\":17},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"939\",\"typeID\":\"Arrow\",\"zOrder\":\"15\",\"w\":\"108\",\"h\":\"23\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1053\",\"y\":\"1748\",\"properties\":{\"color\":\"10027263\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":107,\"y\":0},\"p1\":{\"x\":0.3813139650049522,\"y\":-0.013865962363816473},\"p2\":{\"x\":0,\"y\":22},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"940\",\"typeID\":\"Arrow\",\"zOrder\":\"16\",\"w\":\"112\",\"h\":\"58\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"854\",\"y\":\"1889\",\"properties\":{\"color\":\"10027263\",\"leftArrow\":\"false\",\"p0\":{\"x\":111,\"y\":57},\"p1\":{\"x\":0.4939621628874279,\"y\":0.14832953173218838},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"941\",\"typeID\":\"Arrow\",\"zOrder\":\"17\",\"w\":\"117\",\"h\":\"5\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"864\",\"y\":\"1864\",\"properties\":{\"color\":\"10027263\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":116,\"y\":1},\"p1\":{\"x\":0.5309292397129627,\"y\":-0.01571441547824508},\"p2\":{\"x\":0,\"y\":4},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"942\",\"typeID\":\"Arrow\",\"zOrder\":\"18\",\"w\":\"86\",\"h\":\"96\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"850\",\"y\":\"1768\",\"properties\":{\"color\":\"10027263\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":85,\"y\":0},\"p1\":{\"x\":0.48716362511599137,\"y\":-0.18836993504485},\"p2\":{\"x\":0,\"y\":95},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"943\",\"typeID\":\"Arrow\",\"zOrder\":\"19\",\"w\":\"57\",\"h\":\"244\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"689\",\"y\":\"1629\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":39,\"y\":0},\"p1\":{\"x\":0.5504287774151931,\"y\":-0.19435379828489027},\"p2\":{\"x\":56,\"y\":243},\"rightArrow\":\"false\"}},{\"ID\":\"944\",\"typeID\":\"Arrow\",\"zOrder\":\"20\",\"w\":\"51\",\"h\":\"116\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"576\",\"y\":\"1632\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":50,\"y\":0},\"p1\":{\"x\":0.6557048619594426,\"y\":0.20855118494991431},\"p2\":{\"x\":0,\"y\":115},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"945\",\"typeID\":\"Arrow\",\"zOrder\":\"21\",\"w\":\"107\",\"h\":\"47\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"312\",\"y\":\"1753\",\"properties\":{\"color\":\"10027263\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":46},\"p1\":{\"x\":0.4438697642869257,\"y\":-0.021282007800576576},\"p2\":{\"x\":106,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"946\",\"typeID\":\"Arrow\",\"zOrder\":\"22\",\"w\":\"114\",\"h\":\"7\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"305\",\"y\":\"1747\",\"properties\":{\"color\":\"10027263\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":6},\"p1\":{\"x\":0.4438697642869257,\"y\":-0.021282007800576562},\"p2\":{\"x\":113,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"947\",\"typeID\":\"Arrow\",\"zOrder\":\"23\",\"w\":\"71\",\"h\":\"36\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1081\",\"y\":\"1631\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":70,\"y\":35},\"p1\":{\"x\":0.5309292397129621,\"y\":-0.01571441547824513},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"948\",\"typeID\":\"Arrow\",\"zOrder\":\"24\",\"w\":\"106\",\"h\":\"10\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1079\",\"y\":\"1621\",\"properties\":{\"color\":\"10027263\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":105,\"y\":0},\"p1\":{\"x\":0.5309292397129626,\"y\":-0.01571441547824508},\"p2\":{\"x\":0,\"y\":9},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"949\",\"typeID\":\"Arrow\",\"zOrder\":\"25\",\"w\":\"85\",\"h\":\"59\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1079\",\"y\":\"1570\",\"properties\":{\"color\":\"10027263\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":84,\"y\":0},\"p1\":{\"x\":0.4951386388188694,\"y\":-0.0763413755851639},\"p2\":{\"x\":-0.5,\"y\":59},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"950\",\"typeID\":\"Arrow\",\"zOrder\":\"26\",\"w\":\"133\",\"h\":\"4\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"780\",\"y\":\"1629\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":2},\"p1\":{\"x\":0.4434300336167677,\"y\":0.014243775690876915},\"p2\":{\"x\":132,\"y\":3},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"951\",\"typeID\":\"Arrow\",\"zOrder\":\"27\",\"w\":\"110\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"513\",\"y\":\"1628\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":2},\"p1\":{\"x\":0.443430033616767,\"y\":0.014243775690876898},\"p2\":{\"x\":109,\"y\":2},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"952\",\"typeID\":\"Arrow\",\"zOrder\":\"28\",\"w\":\"101\",\"h\":\"16\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"327\",\"y\":\"1638\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":15},\"p1\":{\"x\":0.443430033616767,\"y\":0.014243775690876906},\"p2\":{\"x\":100,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"953\",\"typeID\":\"Arrow\",\"zOrder\":\"29\",\"w\":\"108\",\"h\":\"33\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"318\",\"y\":\"1596\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.443430033616767,\"y\":0.014243775690876896},\"p2\":{\"x\":107,\"y\":32},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"954\",\"typeID\":\"Arrow\",\"zOrder\":\"30\",\"w\":\"41\",\"h\":\"110\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"772\",\"y\":\"1500\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":36,\"y\":0},\"p1\":{\"x\":0.4797753661683236,\"y\":0.15845791910146467},\"p2\":{\"x\":0,\"y\":109},\"rightArrow\":\"false\"}},{\"ID\":\"955\",\"typeID\":\"Arrow\",\"zOrder\":\"31\",\"w\":\"50\",\"h\":\"2\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"301\",\"y\":\"1447\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":49,\"y\":1},\"p1\":{\"x\":0.4872751951136748,\"y\":-0.01187648456057007},\"p2\":{\"x\":0,\"y\":1},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"956\",\"typeID\":\"Arrow\",\"zOrder\":\"32\",\"w\":\"165\",\"h\":\"43\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"660\",\"y\":\"1411\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.46185893674451367,\"y\":-0.10438915620232368},\"p2\":{\"x\":164,\"y\":40},\"rightArrow\":\"false\"}},{\"ID\":\"957\",\"typeID\":\"Arrow\",\"zOrder\":\"33\",\"w\":\"85\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1091\",\"y\":\"1449\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":83,\"y\":1},\"p1\":{\"x\":0.4872751951136748,\"y\":-0.01187648456057007},\"p2\":{\"x\":0,\"y\":1},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"958\",\"typeID\":\"Arrow\",\"zOrder\":\"34\",\"w\":\"54\",\"h\":\"129\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"607\",\"y\":\"1283\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":1,\"y\":0},\"p1\":{\"x\":0.46185893674451356,\"y\":-0.10438915620232367},\"p2\":{\"x\":53,\"y\":128},\"rightArrow\":\"false\"}},{\"ID\":\"959\",\"typeID\":\"Arrow\",\"zOrder\":\"35\",\"w\":\"21\",\"h\":\"98\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"877\",\"y\":\"1112\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4592720970537261,\"y\":-0.022530329289428077},\"p2\":{\"x\":20,\"y\":97},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"960\",\"typeID\":\"Arrow\",\"zOrder\":\"36\",\"w\":\"117\",\"h\":\"139\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"607\",\"y\":\"1115\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":116,\"y\":0},\"p1\":{\"x\":0.5113995183302114,\"y\":-0.17615734546427614},\"p2\":{\"x\":0,\"y\":138},\"rightArrow\":\"false\"}},{\"ID\":\"961\",\"typeID\":\"Arrow\",\"zOrder\":\"37\",\"w\":\"175\",\"h\":\"55\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"361\",\"y\":\"1273\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":54},\"p1\":{\"x\":0.4434300336167671,\"y\":0.014243775690876872},\"p2\":{\"x\":174,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"962\",\"typeID\":\"TextArea\",\"zOrder\":\"38\",\"w\":\"151\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"235\",\"y\":\"1297\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"963\",\"typeID\":\"Arrow\",\"zOrder\":\"39\",\"w\":\"171\",\"h\":\"9\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"352\",\"y\":\"1258\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":170,\"y\":8},\"p1\":{\"x\":0.4651735508633531,\"y\":-0.0009522699259062857},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"964\",\"typeID\":\"Arrow\",\"zOrder\":\"40\",\"w\":\"109\",\"h\":\"161\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"748\",\"y\":\"931\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.5674918262494162,\"y\":0.22092480149462868},\"p2\":{\"x\":102,\"y\":160},\"rightArrow\":\"false\"}},{\"ID\":\"965\",\"typeID\":\"Arrow\",\"zOrder\":\"41\",\"w\":\"1\",\"h\":\"77\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1114\",\"y\":\"934\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":76},\"p1\":{\"x\":0.487275195113675,\"y\":-0.01187648456057007},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"966\",\"typeID\":\"Arrow\",\"zOrder\":\"42\",\"w\":\"85\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"845\",\"y\":\"918\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":83,\"y\":1},\"p1\":{\"x\":0.4872751951136748,\"y\":-0.01187648456057007},\"p2\":{\"x\":0,\"y\":1},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"967\",\"typeID\":\"Arrow\",\"zOrder\":\"43\",\"w\":\"2\",\"h\":\"74\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"622\",\"y\":\"924\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":1,\"y\":73},\"p1\":{\"x\":0.4872751951136749,\"y\":-0.01187648456057007},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"968\",\"typeID\":\"Arrow\",\"zOrder\":\"44\",\"w\":\"120\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"772\",\"y\":\"706\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":119,\"y\":2},\"p1\":{\"x\":0.5436210493779461,\"y\":0.006954640290549417},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"969\",\"typeID\":\"Arrow\",\"zOrder\":\"45\",\"w\":\"108\",\"h\":\"5\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"783\",\"y\":\"653\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":107,\"y\":2},\"p1\":{\"x\":0.589278350515464,\"y\":0.035876288659793816},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"970\",\"typeID\":\"Arrow\",\"zOrder\":\"46\",\"w\":\"100\",\"h\":\"45\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"783\",\"y\":\"607\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":99,\"y\":0},\"p1\":{\"x\":0.5773195876288659,\"y\":-0.06466729147141519},\"p2\":{\"x\":0,\"y\":44},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"971\",\"typeID\":\"Arrow\",\"zOrder\":\"47\",\"w\":\"40\",\"h\":\"139\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"656\",\"y\":\"490\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.5674918262494162,\"y\":0.22092480149462868},\"p2\":{\"x\":15,\"y\":138},\"rightArrow\":\"false\"}},{\"ID\":\"972\",\"typeID\":\"Arrow\",\"zOrder\":\"48\",\"w\":\"151\",\"h\":\"29\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"737\",\"y\":\"482\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":150,\"y\":28},\"p1\":{\"x\":0.4823054457996908,\"y\":0.02336368321594228},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"973\",\"typeID\":\"Arrow\",\"zOrder\":\"49\",\"w\":\"153\",\"h\":\"13\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"739\",\"y\":\"465\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":152,\"y\":0},\"p1\":{\"x\":0.4798692360633173,\"y\":-0.004989676531314521},\"p2\":{\"x\":0,\"y\":12},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"974\",\"typeID\":\"Arrow\",\"zOrder\":\"50\",\"h\":\"60\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"737\",\"y\":\"416\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":149,\"y\":0},\"p1\":{\"x\":0.4552212800557556,\"y\":-0.05494250203275647},\"p2\":{\"x\":0,\"y\":59},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"975\",\"typeID\":\"Arrow\",\"zOrder\":\"51\",\"w\":\"134\",\"h\":\"36\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"447\",\"y\":\"483\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":132,\"y\":0},\"p1\":{\"x\":0.4652789342214826,\"y\":-0.001332223147377271},\"p2\":{\"x\":0,\"y\":34},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"976\",\"typeID\":\"Arrow\",\"zOrder\":\"52\",\"w\":\"131\",\"h\":\"9\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"447\",\"y\":\"470\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":129,\"y\":7},\"p1\":{\"x\":0.4652789342214826,\"y\":-0.001332223147377271},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"977\",\"typeID\":\"Arrow\",\"zOrder\":\"53\",\"w\":\"143\",\"h\":\"53\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"437\",\"y\":\"423\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":141,\"y\":51},\"p1\":{\"x\":0.45522128005575574,\"y\":-0.054942502032756434},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"978\",\"typeID\":\"Arrow\",\"zOrder\":\"54\",\"w\":\"45\",\"h\":\"139\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"634\",\"y\":\"327\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":44,\"y\":0},\"p1\":{\"x\":0.540933899332929,\"y\":-0.1946634323832626},\"p2\":{\"x\":16,\"y\":138},\"rightArrow\":\"false\"}},{\"ID\":\"979\",\"typeID\":\"HRule\",\"zOrder\":\"55\",\"measuredW\":\"100\",\"measuredH\":\"10\",\"x\":\"1136\",\"y\":\"754\",\"properties\":{\"color\":\"10027263\",\"stroke\":\"dotted\"}},{\"ID\":\"980\",\"typeID\":\"Arrow\",\"zOrder\":\"56\",\"w\":\"71\",\"h\":\"134\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"646\",\"y\":\"765\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":9,\"y\":0},\"p1\":{\"x\":0.5549276224469561,\"y\":-0.26264128494943484},\"p2\":{\"x\":70,\"y\":133},\"rightArrow\":\"false\"}},{\"ID\":\"981\",\"typeID\":\"Arrow\",\"zOrder\":\"57\",\"w\":\"130\",\"h\":\"213\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"428\",\"y\":\"776\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":129,\"y\":0},\"p1\":{\"x\":0.47589093518297126,\"y\":0.0021765127959818427},\"p2\":{\"x\":0,\"y\":212},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"982\",\"typeID\":\"Arrow\",\"zOrder\":\"58\",\"w\":\"110\",\"h\":\"157\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"442\",\"y\":\"769\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":109,\"y\":0},\"p1\":{\"x\":0.46686783637115814,\"y\":0.0018494634122600195},\"p2\":{\"x\":0,\"y\":156},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"983\",\"typeID\":\"Arrow\",\"zOrder\":\"59\",\"w\":\"119\",\"h\":\"120\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"434\",\"y\":\"762\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":118,\"y\":0},\"p1\":{\"x\":0.46376334167874567,\"y\":-0.006127289497957557},\"p2\":{\"x\":0,\"y\":119},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"984\",\"typeID\":\"Arrow\",\"zOrder\":\"60\",\"w\":\"128\",\"h\":\"82\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"429\",\"y\":\"751\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":127,\"y\":0},\"p1\":{\"x\":0.4682571775171856,\"y\":0.0018196522442377747},\"p2\":{\"x\":0,\"y\":81},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"985\",\"typeID\":\"Arrow\",\"zOrder\":\"61\",\"w\":\"123\",\"h\":\"34\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"429\",\"y\":\"753\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":122,\"y\":0},\"p1\":{\"x\":0.4501850789844116,\"y\":0.009280016683176094},\"p2\":{\"x\":0,\"y\":33},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"986\",\"typeID\":\"Arrow\",\"zOrder\":\"62\",\"w\":\"106\",\"h\":\"99\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"784\",\"y\":\"713\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":105,\"y\":98},\"p1\":{\"x\":0.48727519511367495,\"y\":-0.011876484560570073},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"987\",\"typeID\":\"Arrow\",\"zOrder\":\"63\",\"w\":\"109\",\"h\":\"54\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"781\",\"y\":\"707\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":108,\"y\":53},\"p1\":{\"x\":0.44795435569162256,\"y\":-0.008627887559142778},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"988\",\"typeID\":\"Arrow\",\"zOrder\":\"64\",\"w\":\"111\",\"h\":\"59\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"432\",\"y\":\"579\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":110,\"y\":58},\"p1\":{\"x\":0.45522128005575574,\"y\":-0.054942502032756434},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"989\",\"typeID\":\"Arrow\",\"zOrder\":\"65\",\"w\":\"112\",\"h\":\"58\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"430\",\"y\":\"661\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":111,\"y\":0},\"p1\":{\"x\":0.47938350680544434,\"y\":0.06064851881505207},\"p2\":{\"x\":0,\"y\":57},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"990\",\"typeID\":\"Arrow\",\"zOrder\":\"66\",\"w\":\"112\",\"h\":\"23\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"434\",\"y\":\"651\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":111,\"y\":0},\"p1\":{\"x\":0.4453729012104649,\"y\":0.01983600156188987},\"p2\":{\"x\":0,\"y\":22},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"991\",\"typeID\":\"Arrow\",\"zOrder\":\"67\",\"w\":\"120\",\"h\":\"20\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"431\",\"y\":\"628\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":119,\"y\":19},\"p1\":{\"x\":0.4652789342214826,\"y\":-0.001332223147377271},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"992\",\"typeID\":\"TextArea\",\"zOrder\":\"68\",\"w\":\"250\",\"h\":\"55\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"543\",\"y\":\"619\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"993\",\"typeID\":\"Label\",\"zOrder\":\"69\",\"measuredW\":\"150\",\"measuredH\":\"40\",\"x\":\"624\",\"y\":\"273\",\"properties\":{\"bold\":\"true\",\"size\":\"32\",\"text\":\"Front-end\"}},{\"ID\":\"994\",\"typeID\":\"Arrow\",\"zOrder\":\"70\",\"w\":\"19\",\"h\":\"80\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"721\",\"y\":\"186\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":17,\"y\":0},\"p1\":{\"x\":0.4835868694955965,\"y\":0.10168134507606086},\"p2\":{\"x\":0,\"y\":79},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"995\",\"typeID\":\"TextArea\",\"zOrder\":\"71\",\"w\":\"296\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"559\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"996\",\"typeID\":\"Label\",\"zOrder\":\"72\",\"w\":\"134\",\"measuredW\":\"132\",\"measuredH\":\"25\",\"x\":\"242\",\"y\":\"567\",\"properties\":{\"size\":\"17\",\"text\":\"Learn the basics\"}},{\"ID\":\"997\",\"typeID\":\"TextArea\",\"zOrder\":\"73\",\"w\":\"296\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"606\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"998\",\"typeID\":\"Label\",\"zOrder\":\"74\",\"w\":\"189\",\"measuredW\":\"187\",\"measuredH\":\"25\",\"x\":\"215\",\"y\":\"614\",\"properties\":{\"size\":\"17\",\"text\":\"Writing Semantic HTML\"}},{\"ID\":\"999\",\"typeID\":\"TextArea\",\"zOrder\":\"75\",\"w\":\"296\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"652\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1000\",\"typeID\":\"TextArea\",\"zOrder\":\"76\",\"w\":\"296\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"699\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1001\",\"typeID\":\"Label\",\"zOrder\":\"77\",\"w\":\"248\",\"measuredW\":\"248\",\"measuredH\":\"25\",\"x\":\"185\",\"y\":\"707\",\"properties\":{\"size\":\"17\",\"text\":\"Conventions and Best Practices\"}},{\"ID\":\"1002\",\"typeID\":\"TextArea\",\"zOrder\":\"78\",\"w\":\"250\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"543\",\"y\":\"683\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1003\",\"typeID\":\"TextArea\",\"zOrder\":\"79\",\"w\":\"116\",\"h\":\"185\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1183\",\"y\":\"660\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1004\",\"typeID\":\"TextArea\",\"zOrder\":\"80\",\"w\":\"280\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"875\",\"y\":\"683\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1005\",\"typeID\":\"Label\",\"zOrder\":\"81\",\"w\":\"140\",\"measuredW\":\"132\",\"measuredH\":\"25\",\"x\":\"945\",\"y\":\"692\",\"properties\":{\"size\":\"17\",\"text\":\"Learn the basics\"}},{\"ID\":\"1006\",\"typeID\":\"TextArea\",\"zOrder\":\"82\",\"w\":\"281\",\"h\":\"47\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"874\",\"y\":\"732\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1007\",\"typeID\":\"Label\",\"zOrder\":\"83\",\"w\":\"130\",\"measuredW\":\"123\",\"measuredH\":\"25\",\"x\":\"950\",\"y\":\"743\",\"properties\":{\"size\":\"17\",\"text\":\"Making Layouts\"}},{\"ID\":\"1008\",\"typeID\":\"Label\",\"zOrder\":\"84\",\"measuredW\":\"47\",\"measuredH\":\"25\",\"x\":\"1218\",\"y\":\"673\",\"properties\":{\"size\":\"17\",\"text\":\"Floats\"}},{\"ID\":\"1009\",\"typeID\":\"TextArea\",\"zOrder\":\"85\",\"w\":\"280\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"875\",\"y\":\"785\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1010\",\"typeID\":\"Label\",\"zOrder\":\"86\",\"w\":\"248\",\"measuredW\":\"247\",\"measuredH\":\"22\",\"x\":\"893\",\"y\":\"795\",\"properties\":{\"size\":\"14\",\"text\":\"Responsive design and Media Queries\"}},{\"ID\":\"1011\",\"typeID\":\"Label\",\"zOrder\":\"87\",\"measuredW\":\"85\",\"measuredH\":\"25\",\"x\":\"1199\",\"y\":\"700\",\"properties\":{\"size\":\"17\",\"text\":\"Positioning\"}},{\"ID\":\"1012\",\"typeID\":\"Label\",\"zOrder\":\"88\",\"measuredW\":\"57\",\"measuredH\":\"25\",\"x\":\"1213\",\"y\":\"727\",\"properties\":{\"size\":\"17\",\"text\":\"Display\"}},{\"ID\":\"1013\",\"typeID\":\"Label\",\"zOrder\":\"89\",\"measuredW\":\"80\",\"measuredH\":\"25\",\"x\":\"1202\",\"y\":\"754\",\"properties\":{\"size\":\"17\",\"text\":\"Box Model\"}},{\"ID\":\"1014\",\"typeID\":\"Label\",\"zOrder\":\"90\",\"measuredW\":\"74\",\"measuredH\":\"25\",\"x\":\"1205\",\"y\":\"781\",\"properties\":{\"size\":\"17\",\"text\":\"CSS Grid\"}},{\"ID\":\"1015\",\"typeID\":\"Label\",\"zOrder\":\"91\",\"measuredW\":\"66\",\"measuredH\":\"25\",\"x\":\"1209\",\"y\":\"808\",\"properties\":{\"size\":\"17\",\"text\":\"Flex Box\"}},{\"ID\":\"1016\",\"typeID\":\"TextArea\",\"zOrder\":\"92\",\"w\":\"250\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"543\",\"y\":\"738\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1017\",\"typeID\":\"TextArea\",\"zOrder\":\"93\",\"w\":\"296\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"761\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1018\",\"typeID\":\"Label\",\"zOrder\":\"94\",\"w\":\"228\",\"measuredW\":\"229\",\"measuredH\":\"25\",\"x\":\"195\",\"y\":\"769\",\"properties\":{\"size\":\"17\",\"text\":\"Syntax and Basic Constructs\"}},{\"ID\":\"1019\",\"typeID\":\"TextArea\",\"zOrder\":\"95\",\"w\":\"297\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"807\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1020\",\"typeID\":\"Label\",\"zOrder\":\"96\",\"w\":\"197\",\"measuredW\":\"191\",\"measuredH\":\"25\",\"x\":\"211\",\"y\":\"815\",\"properties\":{\"size\":\"17\",\"text\":\"Learn DOM Manipulation\"}},{\"ID\":\"1021\",\"typeID\":\"TextArea\",\"zOrder\":\"97\",\"w\":\"296\",\"h\":\"113\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"951\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1022\",\"typeID\":\"Label\",\"zOrder\":\"98\",\"w\":\"247\",\"measuredW\":\"247\",\"measuredH\":\"25\",\"x\":\"185\",\"y\":\"996\",\"properties\":{\"size\":\"17\",\"text\":\"Hoisting, Event Bubbling, Scope,\"}},{\"ID\":\"1023\",\"typeID\":\"Label\",\"zOrder\":\"99\",\"w\":\"245\",\"measuredW\":\"244\",\"measuredH\":\"25\",\"x\":\"187\",\"y\":\"1025\",\"properties\":{\"size\":\"17\",\"text\":\"Prototype, Shadow DOM, strict,\"}},{\"ID\":\"1024\",\"typeID\":\"Label\",\"zOrder\":\"100\",\"w\":\"202\",\"measuredW\":\"198\",\"measuredH\":\"25\",\"x\":\"208\",\"y\":\"966\",\"properties\":{\"size\":\"17\",\"text\":\"Understand the concepts\"}},{\"ID\":\"1025\",\"typeID\":\"TextArea\",\"zOrder\":\"101\",\"w\":\"296\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"854\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1026\",\"typeID\":\"Label\",\"zOrder\":\"102\",\"w\":\"234\",\"measuredW\":\"231\",\"measuredH\":\"25\",\"x\":\"192\",\"y\":\"862\",\"properties\":{\"size\":\"17\",\"text\":\"Learn Fetch API / Ajax (XHR)\"}},{\"ID\":\"1027\",\"typeID\":\"TextArea\",\"zOrder\":\"103\",\"w\":\"296\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"902\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1028\",\"typeID\":\"Label\",\"zOrder\":\"104\",\"w\":\"234\",\"measuredW\":\"233\",\"measuredH\":\"25\",\"x\":\"192\",\"y\":\"910\",\"properties\":{\"size\":\"17\",\"text\":\"ES6+ and modular JavaScript\"}},{\"ID\":\"1030\",\"typeID\":\"Label\",\"zOrder\":\"114\",\"w\":\"172\",\"measuredW\":\"170\",\"measuredH\":\"25\",\"x\":\"223\",\"y\":\"660\",\"properties\":{\"size\":\"17\",\"text\":\"Forms and Validations\"}},{\"ID\":\"1031\",\"typeID\":\"TextArea\",\"zOrder\":\"115\",\"w\":\"178\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"573\",\"y\":\"449\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1032\",\"typeID\":\"Label\",\"zOrder\":\"116\",\"w\":\"75\",\"measuredW\":\"69\",\"measuredH\":\"25\",\"x\":\"628\",\"y\":\"462\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Internet\"}},{\"ID\":\"1033\",\"typeID\":\"TextArea\",\"zOrder\":\"117\",\"w\":\"299\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"400\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1034\",\"typeID\":\"Label\",\"zOrder\":\"118\",\"w\":\"223\",\"measuredW\":\"222\",\"measuredH\":\"25\",\"x\":\"198\",\"y\":\"410\",\"properties\":{\"size\":\"17\",\"text\":\"How does the internet work?\"}},{\"ID\":\"1035\",\"typeID\":\"TextArea\",\"zOrder\":\"119\",\"w\":\"299\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"450\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1036\",\"typeID\":\"Label\",\"zOrder\":\"120\",\"w\":\"119\",\"measuredW\":\"118\",\"measuredH\":\"25\",\"x\":\"250\",\"y\":\"458\",\"properties\":{\"size\":\"17\",\"text\":\"What is HTTP?\"}},{\"ID\":\"1037\",\"typeID\":\"TextArea\",\"zOrder\":\"121\",\"w\":\"299\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"496\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1038\",\"typeID\":\"Label\",\"zOrder\":\"122\",\"w\":\"230\",\"measuredW\":\"230\",\"measuredH\":\"25\",\"x\":\"194\",\"y\":\"504\",\"properties\":{\"size\":\"17\",\"text\":\"Browsers and how they work?\"}},{\"ID\":\"1039\",\"typeID\":\"TextArea\",\"zOrder\":\"123\",\"w\":\"280\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"875\",\"y\":\"397\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1040\",\"typeID\":\"Label\",\"zOrder\":\"124\",\"w\":\"179\",\"measuredW\":\"179\",\"measuredH\":\"25\",\"x\":\"926\",\"y\":\"405\",\"properties\":{\"size\":\"17\",\"text\":\"DNS and how it works?\"}},{\"ID\":\"1041\",\"typeID\":\"TextArea\",\"zOrder\":\"125\",\"w\":\"280\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"874\",\"y\":\"443\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1042\",\"typeID\":\"Label\",\"zOrder\":\"126\",\"w\":\"189\",\"measuredW\":\"180\",\"measuredH\":\"25\",\"x\":\"925\",\"y\":\"451\",\"properties\":{\"size\":\"17\",\"text\":\"What is Domain Name?\"}},{\"ID\":\"1043\",\"typeID\":\"TextArea\",\"zOrder\":\"127\",\"w\":\"280\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"875\",\"y\":\"489\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1044\",\"typeID\":\"Label\",\"zOrder\":\"128\",\"w\":\"133\",\"measuredW\":\"130\",\"measuredH\":\"25\",\"x\":\"949\",\"y\":\"497\",\"properties\":{\"size\":\"17\",\"text\":\"What is hosting?\"}},{\"ID\":\"1045\",\"typeID\":\"TextArea\",\"zOrder\":\"129\",\"w\":\"280\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"875\",\"y\":\"589\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1046\",\"typeID\":\"Label\",\"zOrder\":\"130\",\"w\":\"101\",\"measuredW\":\"98\",\"measuredH\":\"25\",\"x\":\"964\",\"y\":\"597\",\"properties\":{\"size\":\"17\",\"text\":\"Accessibility\"}},{\"ID\":\"1047\",\"typeID\":\"TextArea\",\"zOrder\":\"131\",\"w\":\"280\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"875\",\"y\":\"636\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1048\",\"typeID\":\"Label\",\"zOrder\":\"132\",\"w\":\"94\",\"measuredW\":\"93\",\"measuredH\":\"25\",\"x\":\"968\",\"y\":\"644\",\"properties\":{\"size\":\"17\",\"text\":\"SEO Basics\"}},{\"ID\":\"1049\",\"typeID\":\"TextArea\",\"zOrder\":\"133\",\"w\":\"216\",\"h\":\"54\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"522\",\"y\":\"980\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1050\",\"typeID\":\"Label\",\"zOrder\":\"134\",\"w\":\"155\",\"measuredW\":\"154\",\"measuredH\":\"25\",\"x\":\"553\",\"y\":\"995\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Basic Usage of Git\"}},{\"ID\":\"1051\",\"typeID\":\"TextArea\",\"zOrder\":\"135\",\"w\":\"230\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1004\",\"y\":\"983\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1052\",\"typeID\":\"Label\",\"zOrder\":\"136\",\"w\":\"64\",\"measuredW\":\"58\",\"measuredH\":\"25\",\"x\":\"1091\",\"y\":\"996\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"GitHub\"}},{\"ID\":\"1053\",\"typeID\":\"TextArea\",\"zOrder\":\"137\",\"w\":\"352\",\"h\":\"78\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"885\",\"y\":\"882\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1054\",\"typeID\":\"Label\",\"zOrder\":\"138\",\"w\":\"189\",\"measuredW\":\"181\",\"measuredH\":\"25\",\"x\":\"962\",\"y\":\"897\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Repo hosting services\"}},{\"ID\":\"1055\",\"typeID\":\"Label\",\"zOrder\":\"139\",\"w\":\"279\",\"measuredW\":\"279\",\"measuredH\":\"23\",\"x\":\"917\",\"y\":\"923\",\"properties\":{\"size\":\"15\",\"text\":\"Create account and Learn to use GitHub\"}},{\"ID\":\"1056\",\"typeID\":\"TextArea\",\"zOrder\":\"140\",\"w\":\"336\",\"h\":\"77\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"522\",\"y\":\"882\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1057\",\"typeID\":\"Label\",\"zOrder\":\"141\",\"w\":\"201\",\"measuredW\":\"200\",\"measuredH\":\"25\",\"x\":\"587\",\"y\":\"897\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Version Control Systems\"}},{\"ID\":\"1058\",\"typeID\":\"Label\",\"zOrder\":\"142\",\"w\":\"292\",\"measuredW\":\"291\",\"measuredH\":\"23\",\"x\":\"541\",\"y\":\"922\",\"properties\":{\"size\":\"15\",\"text\":\"What are they and why you should use one\"}},{\"ID\":\"1059\",\"typeID\":\"TextArea\",\"zOrder\":\"143\",\"w\":\"211\",\"h\":\"53\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"508\",\"y\":\"1244\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1060\",\"typeID\":\"Label\",\"zOrder\":\"144\",\"w\":\"154\",\"measuredW\":\"151\",\"measuredH\":\"25\",\"x\":\"537\",\"y\":\"1258\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Package Managers\"}},{\"ID\":\"1061\",\"typeID\":\"TextArea\",\"zOrder\":\"145\",\"w\":\"151\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"235\",\"y\":\"1238\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1062\",\"typeID\":\"Label\",\"zOrder\":\"146\",\"measuredW\":\"49\",\"measuredH\":\"25\",\"x\":\"644\",\"y\":\"635\",\"properties\":{\"size\":\"17\",\"text\":\"HTML\",\"bold\":\"true\"}},{\"ID\":\"1063\",\"typeID\":\"Label\",\"zOrder\":\"147\",\"measuredW\":\"36\",\"measuredH\":\"25\",\"x\":\"651\",\"y\":\"697\",\"properties\":{\"size\":\"17\",\"text\":\"CSS\",\"bold\":\"true\"}},{\"ID\":\"1064\",\"typeID\":\"Label\",\"zOrder\":\"148\",\"measuredW\":\"87\",\"measuredH\":\"25\",\"x\":\"625\",\"y\":\"751\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"JavaScript\"}},{\"ID\":\"1065\",\"typeID\":\"Label\",\"zOrder\":\"149\",\"w\":\"36\",\"measuredW\":\"35\",\"measuredH\":\"25\",\"x\":\"292\",\"y\":\"1250\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"npm\"}},{\"ID\":\"1066\",\"typeID\":\"Label\",\"zOrder\":\"150\",\"w\":\"36\",\"measuredW\":\"36\",\"measuredH\":\"25\",\"x\":\"293\",\"y\":\"1309\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"yarn\"}},{\"ID\":\"1068\",\"typeID\":\"TextArea\",\"zOrder\":\"155\",\"w\":\"230\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1004\",\"y\":\"1095\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1069\",\"typeID\":\"Label\",\"zOrder\":\"156\",\"w\":\"80\",\"measuredW\":\"79\",\"measuredH\":\"25\",\"x\":\"1079\",\"y\":\"1107\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"Bitbucket\"}},{\"ID\":\"1070\",\"typeID\":\"TextArea\",\"zOrder\":\"157\",\"w\":\"230\",\"h\":\"48\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1004\",\"y\":\"1095\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1072\",\"typeID\":\"TextArea\",\"zOrder\":\"161\",\"w\":\"372\",\"h\":\"54\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"573\",\"y\":\"1073\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1073\",\"typeID\":\"Label\",\"zOrder\":\"162\",\"w\":\"203\",\"measuredW\":\"203\",\"measuredH\":\"25\",\"x\":\"658\",\"y\":\"1088\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Web Security Knowledge\"}},{\"ID\":\"1074\",\"typeID\":\"Canvas\",\"zOrder\":\"163\",\"w\":\"408\",\"h\":\"162\",\"measuredW\":\"100\",\"measuredH\":\"70\",\"x\":\"151\",\"y\":\"183\"},{\"ID\":\"1076\",\"typeID\":\"TextArea\",\"zOrder\":\"167\",\"w\":\"456\",\"h\":\"161\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"837\",\"y\":\"1168\"},{\"ID\":\"1077\",\"typeID\":\"TextArea\",\"zOrder\":\"168\",\"w\":\"163\",\"h\":\"48\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"852\",\"y\":\"1267\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1078\",\"typeID\":\"Label\",\"zOrder\":\"169\",\"w\":\"51\",\"measuredW\":\"50\",\"measuredH\":\"25\",\"x\":\"894\",\"y\":\"1279\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CORS\"}},{\"ID\":\"1079\",\"typeID\":\"TextArea\",\"zOrder\":\"170\",\"w\":\"166\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"851\",\"y\":\"1212\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1080\",\"typeID\":\"Label\",\"zOrder\":\"171\",\"w\":\"63\",\"measuredW\":\"58\",\"measuredH\":\"25\",\"x\":\"905\",\"y\":\"1224\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"HTTPS\"}},{\"ID\":\"1081\",\"typeID\":\"TextArea\",\"zOrder\":\"172\",\"w\":\"257\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1022\",\"y\":\"1212\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1082\",\"typeID\":\"Label\",\"zOrder\":\"173\",\"w\":\"196\",\"measuredW\":\"192\",\"measuredH\":\"25\",\"x\":\"1053\",\"y\":\"1224\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Content Security Policy\"}},{\"ID\":\"1083\",\"typeID\":\"TextArea\",\"zOrder\":\"174\",\"w\":\"257\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1022\",\"y\":\"1266\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1084\",\"typeID\":\"Label\",\"zOrder\":\"175\",\"w\":\"187\",\"measuredW\":\"184\",\"measuredH\":\"25\",\"x\":\"1065\",\"y\":\"1278\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"OWASP Security Risks\"}},{\"ID\":\"1085\",\"typeID\":\"Label\",\"zOrder\":\"176\",\"w\":\"372\",\"measuredW\":\"353\",\"measuredH\":\"25\",\"x\":\"853\",\"y\":\"1181\",\"properties\":{\"size\":\"17\",\"text\":\"Get at least a basic knowledge of all of these\"}},{\"ID\":\"1086\",\"typeID\":\"TextArea\",\"zOrder\":\"177\",\"w\":\"392\",\"h\":\"141\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"723\",\"y\":\"1381\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1087\",\"typeID\":\"Label\",\"zOrder\":\"178\",\"w\":\"157\",\"measuredW\":\"158\",\"measuredH\":\"25\",\"x\":\"836\",\"y\":\"1398\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CSS Preprocessors\"}},{\"ID\":\"1088\",\"typeID\":\"Label\",\"zOrder\":\"179\",\"w\":\"350\",\"measuredW\":\"333\",\"measuredH\":\"23\",\"x\":\"741\",\"y\":\"1430\",\"properties\":{\"size\":\"15\",\"text\":\"With how the modern frameworks there has been\"}},{\"ID\":\"1089\",\"typeID\":\"Label\",\"zOrder\":\"180\",\"w\":\"350\",\"measuredW\":\"352\",\"measuredH\":\"23\",\"x\":\"741\",\"y\":\"1457\",\"properties\":{\"size\":\"15\",\"text\":\"more push towards CSS-in-JS so you may not need\"}},{\"ID\":\"1090\",\"typeID\":\"Label\",\"zOrder\":\"181\",\"w\":\"350\",\"measuredW\":\"328\",\"measuredH\":\"23\",\"x\":\"741\",\"y\":\"1483\",\"properties\":{\"size\":\"15\",\"text\":\"these but still a good idea to familiarize yourself.\"}},{\"ID\":\"1091\",\"typeID\":\"TextArea\",\"zOrder\":\"182\",\"w\":\"392\",\"h\":\"141\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"312\",\"y\":\"1378\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1092\",\"typeID\":\"Label\",\"zOrder\":\"183\",\"w\":\"148\",\"measuredW\":\"143\",\"measuredH\":\"25\",\"x\":\"434\",\"y\":\"1396\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CSS Architecture\"}},{\"ID\":\"1093\",\"typeID\":\"Label\",\"zOrder\":\"184\",\"w\":\"351\",\"measuredW\":\"343\",\"measuredH\":\"23\",\"x\":\"331\",\"y\":\"1430\",\"properties\":{\"size\":\"15\",\"text\":\"With modern frameworks and CSS-in-JS you don't\"}},{\"ID\":\"1094\",\"typeID\":\"Label\",\"zOrder\":\"185\",\"w\":\"359\",\"measuredW\":\"350\",\"measuredH\":\"23\",\"x\":\"331\",\"y\":\"1454\",\"properties\":{\"size\":\"15\",\"text\":\"have to worry about these anymore but still it would\"}},{\"ID\":\"1095\",\"typeID\":\"TextArea\",\"zOrder\":\"186\",\"w\":\"146\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"151\",\"y\":\"1377\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1096\",\"typeID\":\"Label\",\"zOrder\":\"187\",\"w\":\"45\",\"measuredW\":\"36\",\"measuredH\":\"25\",\"x\":\"207\",\"y\":\"1385\",\"properties\":{\"size\":\"17\",\"text\":\"BEM\"}},{\"ID\":\"1097\",\"typeID\":\"TextArea\",\"zOrder\":\"188\",\"w\":\"145\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"151\",\"y\":\"1474\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1098\",\"typeID\":\"Label\",\"zOrder\":\"189\",\"w\":\"73\",\"measuredW\":\"72\",\"measuredH\":\"25\",\"x\":\"187\",\"y\":\"1484\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"SMACSS\"}},{\"ID\":\"1099\",\"typeID\":\"TextArea\",\"zOrder\":\"190\",\"w\":\"145\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"151\",\"y\":\"1474\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1100\",\"typeID\":\"TextArea\",\"zOrder\":\"191\",\"w\":\"145\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"152\",\"y\":\"1423\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1101\",\"typeID\":\"Label\",\"zOrder\":\"192\",\"w\":\"62\",\"measuredW\":\"63\",\"measuredH\":\"25\",\"x\":\"194\",\"y\":\"1433\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"OOCSS\"}},{\"ID\":\"1102\",\"typeID\":\"TextArea\",\"zOrder\":\"193\",\"w\":\"145\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"152\",\"y\":\"1423\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1103\",\"typeID\":\"Label\",\"zOrder\":\"194\",\"w\":\"359\",\"measuredW\":\"351\",\"measuredH\":\"23\",\"x\":\"331\",\"y\":\"1482\",\"properties\":{\"size\":\"15\",\"text\":\"be a good idea to get familiarized with BEM atleast.\"}},{\"ID\":\"1104\",\"typeID\":\"TextArea\",\"zOrder\":\"195\",\"w\":\"214\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"596\",\"y\":\"1603\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1105\",\"typeID\":\"Label\",\"zOrder\":\"196\",\"measuredW\":\"88\",\"measuredH\":\"25\",\"x\":\"658\",\"y\":\"1616\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Build Tools\"}},{\"ID\":\"1106\",\"typeID\":\"TextArea\",\"zOrder\":\"197\",\"w\":\"138\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"385\",\"y\":\"1605\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1107\",\"typeID\":\"Label\",\"zOrder\":\"198\",\"measuredW\":\"110\",\"measuredH\":\"25\",\"x\":\"402\",\"y\":\"1619\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Task Runners\"}},{\"ID\":\"1108\",\"typeID\":\"TextArea\",\"zOrder\":\"199\",\"w\":\"176\",\"h\":\"45\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"151\",\"y\":\"1577\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1109\",\"typeID\":\"Label\",\"zOrder\":\"200\",\"w\":\"97\",\"measuredW\":\"93\",\"measuredH\":\"25\",\"x\":\"191\",\"y\":\"1587\",\"properties\":{\"size\":\"17\",\"text\":\"npm scripts\"}},{\"ID\":\"1111\",\"typeID\":\"TextArea\",\"zOrder\":\"204\",\"w\":\"225\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"868\",\"y\":\"1604\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1112\",\"typeID\":\"Label\",\"zOrder\":\"205\",\"measuredW\":\"188\",\"measuredH\":\"25\",\"x\":\"887\",\"y\":\"1617\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Linters and Formatters\"}},{\"ID\":\"1113\",\"typeID\":\"TextArea\",\"zOrder\":\"206\",\"w\":\"145\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1150\",\"y\":\"1555\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1114\",\"typeID\":\"Label\",\"zOrder\":\"207\",\"w\":\"66\",\"measuredW\":\"60\",\"measuredH\":\"25\",\"x\":\"1194\",\"y\":\"1563\",\"properties\":{\"size\":\"17\",\"text\":\"Prettier\"}},{\"ID\":\"1115\",\"typeID\":\"TextArea\",\"zOrder\":\"208\",\"w\":\"145\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1150\",\"y\":\"1600\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1116\",\"typeID\":\"Label\",\"zOrder\":\"209\",\"w\":\"53\",\"measuredW\":\"53\",\"measuredH\":\"25\",\"x\":\"1196\",\"y\":\"1608\",\"properties\":{\"size\":\"17\",\"text\":\"ESLint\"}},{\"ID\":\"1117\",\"typeID\":\"TextArea\",\"zOrder\":\"210\",\"w\":\"145\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1151\",\"y\":\"1646\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1118\",\"typeID\":\"Label\",\"zOrder\":\"211\",\"measuredW\":\"98\",\"measuredH\":\"25\",\"x\":\"1177\",\"y\":\"1656\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"StandardJS\"}},{\"ID\":\"1119\",\"typeID\":\"Arrow\",\"zOrder\":\"212\",\"w\":\"127\",\"h\":\"31\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"288\",\"y\":\"1707\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4438697642869249,\"y\":-0.02128200780057653},\"p2\":{\"x\":126,\"y\":30},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1120\",\"typeID\":\"TextArea\",\"zOrder\":\"213\",\"w\":\"176\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"152\",\"y\":\"1688\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1121\",\"typeID\":\"Label\",\"zOrder\":\"214\",\"w\":\"72\",\"measuredW\":\"73\",\"measuredH\":\"25\",\"x\":\"204\",\"y\":\"1696\",\"properties\":{\"size\":\"17\",\"text\":\"Webpack\"}},{\"ID\":\"1122\",\"typeID\":\"TextArea\",\"zOrder\":\"215\",\"w\":\"176\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"151\",\"y\":\"1733\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1123\",\"typeID\":\"Label\",\"zOrder\":\"216\",\"w\":\"46\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"216\",\"y\":\"1741\",\"properties\":{\"size\":\"17\",\"text\":\"Rollup\"}},{\"ID\":\"1124\",\"typeID\":\"Label\",\"zOrder\":\"217\",\"w\":\"46\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"216\",\"y\":\"1786\",\"properties\":{\"size\":\"17\",\"text\":\"Parcel\"}},{\"ID\":\"1125\",\"typeID\":\"TextArea\",\"zOrder\":\"218\",\"w\":\"177\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"411\",\"y\":\"1723\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1126\",\"typeID\":\"Label\",\"zOrder\":\"219\",\"measuredW\":\"135\",\"measuredH\":\"25\",\"x\":\"434\",\"y\":\"1736\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Module Bundlers\"}},{\"ID\":\"1127\",\"typeID\":\"TextArea\",\"zOrder\":\"220\",\"w\":\"176\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"152\",\"y\":\"1688\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1128\",\"typeID\":\"Label\",\"zOrder\":\"221\",\"w\":\"90\",\"measuredW\":\"73\",\"measuredH\":\"25\",\"x\":\"204\",\"y\":\"1696\",\"properties\":{\"size\":\"17\",\"text\":\"Webpack\"}},{\"ID\":\"1129\",\"typeID\":\"TextArea\",\"zOrder\":\"222\",\"w\":\"176\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"151\",\"y\":\"1733\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1130\",\"typeID\":\"Label\",\"zOrder\":\"223\",\"w\":\"63\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"216\",\"y\":\"1741\",\"properties\":{\"size\":\"17\",\"text\":\"Rollup\"}},{\"ID\":\"1131\",\"typeID\":\"TextArea\",\"zOrder\":\"224\",\"w\":\"176\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"151\",\"y\":\"1778\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1132\",\"typeID\":\"Label\",\"zOrder\":\"225\",\"w\":\"63\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"216\",\"y\":\"1786\",\"properties\":{\"size\":\"17\",\"text\":\"Parcel\"}},{\"ID\":\"1133\",\"typeID\":\"TextArea\",\"zOrder\":\"226\",\"w\":\"267\",\"h\":\"53\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"622\",\"y\":\"1840\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1134\",\"typeID\":\"Label\",\"zOrder\":\"227\",\"w\":\"142\",\"measuredW\":\"141\",\"measuredH\":\"25\",\"x\":\"685\",\"y\":\"1854\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Pick a Framework\"}},{\"ID\":\"1135\",\"typeID\":\"TextArea\",\"zOrder\":\"228\",\"w\":\"145\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"920\",\"y\":\"1750\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1136\",\"typeID\":\"Label\",\"zOrder\":\"229\",\"w\":\"68\",\"measuredW\":\"65\",\"measuredH\":\"25\",\"x\":\"959\",\"y\":\"1758\",\"properties\":{\"size\":\"17\",\"text\":\"React.js\"}},{\"ID\":\"1138\",\"typeID\":\"TextArea\",\"zOrder\":\"232\",\"w\":\"145\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"952\",\"y\":\"1927\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1139\",\"typeID\":\"Label\",\"zOrder\":\"233\",\"w\":\"59\",\"measuredW\":\"47\",\"measuredH\":\"25\",\"x\":\"1002\",\"y\":\"1935\",\"properties\":{\"size\":\"17\",\"text\":\"Vue.js\"}},{\"ID\":\"1140\",\"typeID\":\"TextArea\",\"zOrder\":\"234\",\"w\":\"177\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1155\",\"y\":\"1726\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1141\",\"typeID\":\"Label\",\"zOrder\":\"235\",\"w\":\"52\",\"measuredW\":\"51\",\"measuredH\":\"25\",\"x\":\"1218\",\"y\":\"1734\",\"properties\":{\"size\":\"17\",\"text\":\"Redux\"}},{\"ID\":\"1142\",\"typeID\":\"TextArea\",\"zOrder\":\"236\",\"w\":\"177\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1155\",\"y\":\"1771\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1143\",\"typeID\":\"Label\",\"zOrder\":\"237\",\"w\":\"47\",\"measuredW\":\"45\",\"measuredH\":\"25\",\"x\":\"1220\",\"y\":\"1779\",\"properties\":{\"size\":\"17\",\"text\":\"MobX\"}},{\"ID\":\"1144\",\"typeID\":\"TextArea\",\"zOrder\":\"238\",\"w\":\"203\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"483\",\"y\":\"1942\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1145\",\"typeID\":\"Label\",\"zOrder\":\"239\",\"measuredW\":\"102\",\"measuredH\":\"25\",\"x\":\"536\",\"y\":\"1955\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Modern CSS\"}},{\"ID\":\"1147\",\"typeID\":\"TextArea\",\"zOrder\":\"243\",\"w\":\"177\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1155\",\"y\":\"1927\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1148\",\"typeID\":\"Label\",\"zOrder\":\"244\",\"w\":\"44\",\"measuredW\":\"42\",\"measuredH\":\"25\",\"x\":\"1219\",\"y\":\"1936\",\"properties\":{\"size\":\"17\",\"text\":\"VueX\"}},{\"ID\":\"1149\",\"typeID\":\"TextArea\",\"zOrder\":\"245\",\"w\":\"177\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1155\",\"y\":\"1826\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1150\",\"typeID\":\"Label\",\"zOrder\":\"246\",\"w\":\"44\",\"measuredW\":\"44\",\"measuredH\":\"25\",\"x\":\"1222\",\"y\":\"1834\",\"properties\":{\"size\":\"17\",\"text\":\"RxJS\"}},{\"ID\":\"1151\",\"typeID\":\"TextArea\",\"zOrder\":\"247\",\"w\":\"177\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1155\",\"y\":\"1872\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1152\",\"typeID\":\"Label\",\"zOrder\":\"248\",\"w\":\"44\",\"measuredW\":\"45\",\"measuredH\":\"25\",\"x\":\"1222\",\"y\":\"1880\",\"properties\":{\"size\":\"17\",\"text\":\"NgRx\"}},{\"ID\":\"1153\",\"typeID\":\"TextArea\",\"zOrder\":\"249\",\"w\":\"221\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"149\",\"y\":\"1864\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1154\",\"typeID\":\"Label\",\"zOrder\":\"250\",\"w\":\"151\",\"measuredW\":\"154\",\"measuredH\":\"25\",\"x\":\"184\",\"y\":\"1872\",\"properties\":{\"size\":\"17\",\"text\":\"Styled Components\"}},{\"ID\":\"1155\",\"typeID\":\"TextArea\",\"zOrder\":\"251\",\"w\":\"221\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"149\",\"y\":\"1908\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1156\",\"typeID\":\"Label\",\"zOrder\":\"252\",\"w\":\"103\",\"measuredW\":\"106\",\"measuredH\":\"25\",\"x\":\"208\",\"y\":\"1916\",\"properties\":{\"size\":\"17\",\"text\":\"CSS Modules\"}},{\"ID\":\"1160\",\"typeID\":\"TextArea\",\"zOrder\":\"261\",\"w\":\"199\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1104\",\"y\":\"2557\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"color\":\"10066329\"}},{\"ID\":\"1161\",\"typeID\":\"Label\",\"zOrder\":\"262\",\"w\":\"38\",\"measuredW\":\"35\",\"measuredH\":\"25\",\"x\":\"1185\",\"y\":\"2565\",\"properties\":{\"color\":\"3355443\",\"size\":\"17\",\"text\":\"Flow\"}},{\"ID\":\"1163\",\"typeID\":\"Arrow\",\"zOrder\":\"265\",\"w\":\"201\",\"h\":\"4\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"603\",\"y\":\"3042\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":200,\"y\":0},\"p1\":{\"x\":0.5976298194338792,\"y\":0.018096648917003643},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1164\",\"typeID\":\"Arrow\",\"zOrder\":\"266\",\"w\":\"41\",\"h\":\"124\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"742\",\"y\":\"2909\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":37,\"y\":0},\"p1\":{\"x\":0.5697582243361078,\"y\":-0.30657946888624726},\"p2\":{\"x\":40,\"y\":123},\"rightArrow\":\"false\"}},{\"ID\":\"1165\",\"typeID\":\"Arrow\",\"zOrder\":\"267\",\"w\":\"97\",\"h\":\"17\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"897\",\"y\":\"2880\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":96,\"y\":0},\"p1\":{\"x\":0.4835193355826628,\"y\":0.007267064624967626},\"p2\":{\"x\":0,\"y\":16},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1166\",\"typeID\":\"Arrow\",\"zOrder\":\"268\",\"w\":\"78\",\"h\":\"22\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"903\",\"y\":\"2911\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":77,\"y\":21},\"p1\":{\"x\":0.4835193355826629,\"y\":0.0072670646249675805},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1167\",\"typeID\":\"TextArea\",\"zOrder\":\"269\",\"w\":\"167\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"975\",\"y\":\"2860\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1168\",\"typeID\":\"Arrow\",\"zOrder\":\"270\",\"w\":\"158\",\"h\":\"72\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"286\",\"y\":\"2958\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4319942611190819,\"y\":-0.006169296987087513},\"p2\":{\"x\":157,\"y\":71},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1169\",\"typeID\":\"Arrow\",\"zOrder\":\"271\",\"w\":\"134\",\"h\":\"145\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1059\",\"y\":\"3059\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":133,\"y\":144},\"p1\":{\"x\":0.5642023346303501,\"y\":0.02723735408560301},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1170\",\"typeID\":\"Arrow\",\"zOrder\":\"272\",\"w\":\"144\",\"h\":\"111\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1049\",\"y\":\"3049\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":143,\"y\":110},\"p1\":{\"x\":0.5591257349884183,\"y\":0.009087129536140616},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1171\",\"typeID\":\"Arrow\",\"zOrder\":\"273\",\"w\":\"145\",\"h\":\"78\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1053\",\"y\":\"3043\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":144,\"y\":77},\"p1\":{\"x\":0.5642023346303502,\"y\":0.027237354085603124},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1172\",\"typeID\":\"Arrow\",\"zOrder\":\"274\",\"w\":\"29\",\"h\":\"229\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"824\",\"y\":\"2678\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":228},\"p1\":{\"x\":0.4409025564097753,\"y\":-0.09294330895680976},\"p2\":{\"x\":15,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1173\",\"typeID\":\"Arrow\",\"zOrder\":\"275\",\"h\":\"33\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1049\",\"y\":\"3040\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":149,\"y\":32},\"p1\":{\"x\":0.5905801701155262,\"y\":-0.014345563031611016},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1174\",\"typeID\":\"Arrow\",\"zOrder\":\"276\",\"w\":\"141\",\"h\":\"16\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1054\",\"y\":\"3022\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":140,\"y\":0},\"p1\":{\"x\":0.5446556671449067,\"y\":-0.004842180774748907},\"p2\":{\"x\":0,\"y\":15},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1175\",\"typeID\":\"Arrow\",\"zOrder\":\"277\",\"w\":\"144\",\"h\":\"60\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1048\",\"y\":\"2973\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":143,\"y\":0},\"p1\":{\"x\":0.5359734790789354,\"y\":0.012722874294418268},\"p2\":{\"x\":0,\"y\":59},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1176\",\"typeID\":\"TextArea\",\"zOrder\":\"278\",\"w\":\"281\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"776\",\"y\":\"3015\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1177\",\"typeID\":\"Label\",\"zOrder\":\"279\",\"measuredW\":\"184\",\"measuredH\":\"25\",\"x\":\"825\",\"y\":\"3028\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Static Site Generators\"}},{\"ID\":\"1183\",\"typeID\":\"Arrow\",\"zOrder\":\"290\",\"w\":\"2\",\"h\":\"104\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"564\",\"y\":\"3059\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.523291249455812,\"y\":0.00130605137135394},\"p2\":{\"x\":1,\"y\":103},\"rightArrow\":\"false\"}},{\"ID\":\"1184\",\"typeID\":\"Arrow\",\"zOrder\":\"291\",\"w\":\"180\",\"h\":\"45\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"280\",\"y\":\"3052\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":44},\"p1\":{\"x\":0.4319942611190816,\"y\":-0.0061692969870875015},\"p2\":{\"x\":179,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1185\",\"typeID\":\"Arrow\",\"zOrder\":\"292\",\"w\":\"87\",\"h\":\"128\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"995\",\"y\":\"2689\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":86,\"y\":127},\"p1\":{\"x\":0.39844343891402717,\"y\":0.2406877828054298},\"p2\":{\"x\":1,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1186\",\"typeID\":\"Arrow\",\"zOrder\":\"293\",\"w\":\"71\",\"h\":\"81\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1007\",\"y\":\"2686\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":70,\"y\":80},\"p1\":{\"x\":0.44362569752468173,\"y\":0.1679067105451423},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1187\",\"typeID\":\"Arrow\",\"zOrder\":\"294\",\"w\":\"98\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"997\",\"y\":\"2676\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":97,\"y\":0},\"p1\":{\"x\":0.48351933558266286,\"y\":0.007267064624967593},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1188\",\"typeID\":\"Arrow\",\"zOrder\":\"295\",\"w\":\"134\",\"h\":\"109\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"697\",\"y\":\"2562\",\"properties\":{\"color\":\"2848996\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.6566784235546694,\"y\":0.1877932832387666},\"p2\":{\"x\":132,\"y\":108},\"rightArrow\":\"false\"}},{\"ID\":\"1189\",\"typeID\":\"Arrow\",\"zOrder\":\"296\",\"w\":\"1\",\"h\":\"86\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"554\",\"y\":\"2562\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4770488047048041,\"y\":0.005193614908729856},\"p2\":{\"x\":0,\"y\":85},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1190\",\"typeID\":\"Arrow\",\"zOrder\":\"297\",\"w\":\"177\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"358\",\"y\":\"2552\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":176,\"y\":0},\"p1\":{\"x\":0.477048804704804,\"y\":0.005193614908729856},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1191\",\"typeID\":\"Arrow\",\"zOrder\":\"298\",\"w\":\"116\",\"h\":\"1\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"729\",\"y\":\"2551\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":115,\"y\":0},\"p1\":{\"x\":0.477048804704804,\"y\":0.005193614908729856},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1192\",\"typeID\":\"Arrow\",\"zOrder\":\"299\",\"w\":\"119\",\"h\":\"88\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"800\",\"y\":\"2446\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":118,\"y\":87},\"p1\":{\"x\":0.3818452519424929,\"y\":-0.18457172102545016},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1193\",\"typeID\":\"Arrow\",\"zOrder\":\"300\",\"w\":\"76\",\"h\":\"5\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"343\",\"y\":\"2366\",\"properties\":{\"color\":\"10027263\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":74,\"y\":1},\"p1\":{\"x\":0.5049180327868853,\"y\":-0.02090163934426228},\"p2\":{\"x\":0,\"y\":3},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1194\",\"typeID\":\"Arrow\",\"zOrder\":\"301\",\"w\":\"1\",\"h\":\"81\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"586\",\"y\":\"2209\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.5750000000000001,\"y\":0},\"p2\":{\"x\":0,\"y\":80},\"rightArrow\":\"false\"}},{\"ID\":\"1195\",\"typeID\":\"Arrow\",\"zOrder\":\"302\",\"w\":\"191\",\"h\":\"3\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"682\",\"y\":\"2199\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":190,\"y\":2},\"p1\":{\"x\":0.5105398742417108,\"y\":-0.0025761059250436276},\"p2\":{\"x\":0,\"y\":1},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1196\",\"typeID\":\"TextArea\",\"zOrder\":\"303\",\"w\":\"261\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"456\",\"y\":\"2173\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1197\",\"typeID\":\"Label\",\"zOrder\":\"304\",\"measuredW\":\"137\",\"measuredH\":\"25\",\"x\":\"519\",\"y\":\"2186\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CSS Frameworks\"}},{\"ID\":\"1198\",\"typeID\":\"TextArea\",\"zOrder\":\"305\",\"w\":\"236\",\"h\":\"281\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1088\",\"y\":\"2149\"},{\"ID\":\"1202\",\"typeID\":\"Label\",\"zOrder\":\"312\",\"w\":\"206\",\"measuredW\":\"201\",\"measuredH\":\"24\",\"x\":\"1104\",\"y\":\"2342\",\"properties\":{\"size\":\"16\",\"text\":\"CSS first frameworks which\"}},{\"ID\":\"1203\",\"typeID\":\"Label\",\"zOrder\":\"313\",\"w\":\"206\",\"measuredW\":\"196\",\"measuredH\":\"24\",\"x\":\"1104\",\"y\":\"2367\",\"properties\":{\"size\":\"16\",\"text\":\"don't come with JavaScript\"}},{\"ID\":\"1204\",\"typeID\":\"Label\",\"zOrder\":\"314\",\"w\":\"169\",\"measuredW\":\"170\",\"measuredH\":\"24\",\"x\":\"1104\",\"y\":\"2392\",\"properties\":{\"size\":\"16\",\"text\":\"components by default.\"}},{\"ID\":\"1205\",\"typeID\":\"TextArea\",\"zOrder\":\"315\",\"w\":\"236\",\"h\":\"281\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"836\",\"y\":\"2149\"},{\"ID\":\"1207\",\"typeID\":\"Label\",\"zOrder\":\"324\",\"w\":\"205\",\"measuredW\":\"204\",\"measuredH\":\"24\",\"x\":\"852\",\"y\":\"2343\",\"properties\":{\"size\":\"16\",\"text\":\"JS based and better to use\"}},{\"ID\":\"1208\",\"typeID\":\"Label\",\"zOrder\":\"325\",\"w\":\"201\",\"measuredW\":\"197\",\"measuredH\":\"24\",\"x\":\"852\",\"y\":\"2368\",\"properties\":{\"size\":\"16\",\"text\":\"with your framework based\"}},{\"ID\":\"1209\",\"typeID\":\"Label\",\"zOrder\":\"326\",\"w\":\"205\",\"measuredW\":\"171\",\"measuredH\":\"24\",\"x\":\"852\",\"y\":\"2392\",\"properties\":{\"size\":\"16\",\"text\":\"JavaScript applications.\"}},{\"ID\":\"1212\",\"typeID\":\"Arrow\",\"zOrder\":\"355\",\"w\":\"79\",\"h\":\"16\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1026\",\"y\":\"2558\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4835193355826628,\"y\":0.007267064624967568},\"p2\":{\"x\":78,\"y\":15},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1213\",\"typeID\":\"Arrow\",\"zOrder\":\"356\",\"w\":\"85\",\"h\":\"23\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1030\",\"y\":\"2528\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":84,\"y\":0},\"p1\":{\"x\":0.48351933558266297,\"y\":0.007267064624967475},\"p2\":{\"x\":0,\"y\":22},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1214\",\"typeID\":\"TextArea\",\"zOrder\":\"357\",\"w\":\"226\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"819\",\"y\":\"2527\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1215\",\"typeID\":\"Label\",\"zOrder\":\"358\",\"measuredW\":\"121\",\"measuredH\":\"25\",\"x\":\"872\",\"y\":\"2540\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Type Checkers\"}},{\"ID\":\"1217\",\"typeID\":\"TextArea\",\"zOrder\":\"361\",\"w\":\"241\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"502\",\"y\":\"2527\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1218\",\"typeID\":\"Label\",\"zOrder\":\"362\",\"measuredW\":\"181\",\"measuredH\":\"25\",\"x\":\"533\",\"y\":\"2540\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Progressive Web Apps\"}},{\"ID\":\"1221\",\"typeID\":\"TextArea\",\"zOrder\":\"382\",\"w\":\"278\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"740\",\"y\":\"2650\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1222\",\"typeID\":\"Label\",\"zOrder\":\"383\",\"measuredW\":\"236\",\"measuredH\":\"25\",\"x\":\"762\",\"y\":\"2663\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Server Side Rendering (SSR)\"}},{\"ID\":\"1223\",\"typeID\":\"Arrow\",\"zOrder\":\"384\",\"w\":\"66\",\"h\":\"23\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1169\",\"y\":\"2677\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":65,\"y\":22},\"p1\":{\"x\":0.4835193355826627,\"y\":0.007267064624967518},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1224\",\"typeID\":\"Arrow\",\"zOrder\":\"385\",\"w\":\"96\",\"h\":\"27\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1168\",\"y\":\"2651\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":95,\"y\":0},\"p1\":{\"x\":0.48351933558266286,\"y\":0.007267064624967588},\"p2\":{\"x\":0,\"y\":26},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1225\",\"typeID\":\"TextArea\",\"zOrder\":\"386\",\"w\":\"116\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1062\",\"y\":\"2655\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1226\",\"typeID\":\"Label\",\"zOrder\":\"387\",\"w\":\"69\",\"measuredW\":\"65\",\"measuredH\":\"25\",\"x\":\"1085\",\"y\":\"2663\",\"properties\":{\"size\":\"17\",\"text\":\"React.js\"}},{\"ID\":\"1227\",\"typeID\":\"TextArea\",\"zOrder\":\"388\",\"w\":\"94\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1235\",\"y\":\"2635\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1228\",\"typeID\":\"Label\",\"zOrder\":\"389\",\"w\":\"61\",\"measuredW\":\"55\",\"measuredH\":\"25\",\"x\":\"1255\",\"y\":\"2643\",\"properties\":{\"size\":\"17\",\"text\":\"Next.js\"}},{\"ID\":\"1229\",\"typeID\":\"TextArea\",\"zOrder\":\"390\",\"w\":\"94\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1235\",\"y\":\"2682\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"color\":\"10066329\"}},{\"ID\":\"1230\",\"typeID\":\"Label\",\"zOrder\":\"391\",\"w\":\"60\",\"measuredW\":\"56\",\"measuredH\":\"25\",\"x\":\"1256\",\"y\":\"2690\",\"properties\":{\"color\":\"3355443\",\"size\":\"17\",\"text\":\"After.js\"}},{\"ID\":\"1231\",\"typeID\":\"Arrow\",\"zOrder\":\"392\",\"w\":\"65\",\"h\":\"4\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1172\",\"y\":\"2763\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":3},\"p1\":{\"x\":0.4807692307692308,\"y\":-0.01923076923076923},\"p2\":{\"x\":64,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1232\",\"typeID\":\"TextArea\",\"zOrder\":\"393\",\"w\":\"115\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1066\",\"y\":\"2746\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1233\",\"typeID\":\"Label\",\"zOrder\":\"394\",\"w\":\"69\",\"measuredW\":\"63\",\"measuredH\":\"25\",\"x\":\"1097\",\"y\":\"2754\",\"properties\":{\"size\":\"17\",\"text\":\"Angular\"}},{\"ID\":\"1234\",\"typeID\":\"TextArea\",\"zOrder\":\"395\",\"w\":\"111\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1218\",\"y\":\"2746\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1235\",\"typeID\":\"Label\",\"zOrder\":\"396\",\"w\":\"73\",\"measuredW\":\"73\",\"measuredH\":\"25\",\"x\":\"1237\",\"y\":\"2754\",\"properties\":{\"size\":\"17\",\"text\":\"Universal\"}},{\"ID\":\"1236\",\"typeID\":\"Arrow\",\"zOrder\":\"397\",\"w\":\"65\",\"h\":\"2\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"1172\",\"y\":\"2819\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4807692307692308,\"y\":-0.01923076923076923},\"p2\":{\"x\":64,\"y\":1},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1237\",\"typeID\":\"TextArea\",\"zOrder\":\"398\",\"w\":\"115\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1066\",\"y\":\"2799\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1238\",\"typeID\":\"Label\",\"zOrder\":\"399\",\"w\":\"48\",\"measuredW\":\"47\",\"measuredH\":\"25\",\"x\":\"1100\",\"y\":\"2807\",\"properties\":{\"size\":\"17\",\"text\":\"Vue.js\"}},{\"ID\":\"1239\",\"typeID\":\"TextArea\",\"zOrder\":\"400\",\"w\":\"111\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1218\",\"y\":\"2799\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1240\",\"typeID\":\"Label\",\"zOrder\":\"401\",\"w\":\"55\",\"measuredW\":\"55\",\"measuredH\":\"25\",\"x\":\"1246\",\"y\":\"2807\",\"properties\":{\"size\":\"17\",\"text\":\"Nuxt.js\"}},{\"ID\":\"1241\",\"typeID\":\"Arrow\",\"zOrder\":\"402\",\"w\":\"87\",\"h\":\"43\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"673\",\"y\":\"3175\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.43199426111908185,\"y\":-0.006169296987087567},\"p2\":{\"x\":86,\"y\":42},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1242\",\"typeID\":\"Arrow\",\"zOrder\":\"403\",\"w\":\"95\",\"h\":\"8\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"666\",\"y\":\"3165\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.43199426111908185,\"y\":-0.006169296987087555},\"p2\":{\"x\":94,\"y\":7},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1243\",\"typeID\":\"Arrow\",\"zOrder\":\"404\",\"w\":\"98\",\"h\":\"36\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"665\",\"y\":\"3129\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":35},\"p1\":{\"x\":0.4319942611190818,\"y\":-0.006169296987087552},\"p2\":{\"x\":97,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1244\",\"typeID\":\"TextArea\",\"zOrder\":\"405\",\"w\":\"241\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"441\",\"y\":\"3140\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1245\",\"typeID\":\"Label\",\"zOrder\":\"406\",\"measuredW\":\"172\",\"measuredH\":\"25\",\"x\":\"484\",\"y\":\"3153\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Desktop Applications\"}},{\"ID\":\"1246\",\"typeID\":\"TextArea\",\"zOrder\":\"407\",\"w\":\"188\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"755\",\"y\":\"3103\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1247\",\"typeID\":\"Label\",\"zOrder\":\"408\",\"w\":\"69\",\"measuredW\":\"65\",\"measuredH\":\"25\",\"x\":\"818\",\"y\":\"3111\",\"properties\":{\"size\":\"17\",\"text\":\"Electron\"}},{\"ID\":\"1248\",\"typeID\":\"TextArea\",\"zOrder\":\"409\",\"w\":\"188\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"756\",\"y\":\"3152\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"13421772\",\"textColor\":\"3355443\"}},{\"ID\":\"1249\",\"typeID\":\"Label\",\"zOrder\":\"410\",\"w\":\"48\",\"measuredW\":\"43\",\"measuredH\":\"25\",\"x\":\"829\",\"y\":\"3161\",\"properties\":{\"size\":\"17\",\"text\":\"Carlo\",\"color\":\"3355443\"}},{\"ID\":\"1250\",\"typeID\":\"Arrow\",\"zOrder\":\"411\",\"w\":\"179\",\"h\":\"2\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"280\",\"y\":\"3045\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":1},\"p1\":{\"x\":0.431994261119082,\"y\":-0.006169296987087527},\"p2\":{\"x\":178,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1251\",\"typeID\":\"Arrow\",\"zOrder\":\"412\",\"w\":\"161\",\"h\":\"34\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"286\",\"y\":\"3002\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4319942611190819,\"y\":-0.006169296987087513},\"p2\":{\"x\":160,\"y\":33},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1252\",\"typeID\":\"TextArea\",\"zOrder\":\"413\",\"w\":\"210\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"437\",\"y\":\"3018\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1253\",\"typeID\":\"Label\",\"zOrder\":\"414\",\"w\":\"169\",\"measuredW\":\"158\",\"measuredH\":\"25\",\"x\":\"464\",\"y\":\"3031\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Mobile Applications\"}},{\"ID\":\"1259\",\"typeID\":\"TextArea\",\"zOrder\":\"425\",\"w\":\"146\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"767\",\"y\":\"2878\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1260\",\"typeID\":\"Label\",\"zOrder\":\"426\",\"measuredW\":\"73\",\"measuredH\":\"25\",\"x\":\"804\",\"y\":\"2891\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"GraphQL\"}},{\"ID\":\"1261\",\"typeID\":\"TextArea\",\"zOrder\":\"427\",\"w\":\"168\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"975\",\"y\":\"2909\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1262\",\"typeID\":\"Label\",\"zOrder\":\"428\",\"w\":\"49\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"1025\",\"y\":\"2868\",\"properties\":{\"size\":\"17\",\"text\":\"Apollo\"}},{\"ID\":\"1263\",\"typeID\":\"Label\",\"zOrder\":\"429\",\"w\":\"115\",\"measuredW\":\"107\",\"measuredH\":\"25\",\"x\":\"1008\",\"y\":\"2917\",\"properties\":{\"size\":\"17\",\"text\":\"Relay Modern\"}},{\"ID\":\"1264\",\"typeID\":\"Arrow\",\"zOrder\":\"430\",\"w\":\"2\",\"h\":\"89\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"296\",\"y\":\"3529\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":1,\"y\":88},\"p1\":{\"x\":0.40724273933309435,\"y\":0.00953746862674794},\"p2\":{\"x\":1,\"y\":0},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1265\",\"typeID\":\"Arrow\",\"zOrder\":\"431\",\"w\":\"166\",\"h\":\"171\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"279\",\"y\":\"3163\",\"properties\":{\"color\":\"2848996\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":165,\"y\":0},\"p1\":{\"x\":0.5101799412144239,\"y\":-0.2666499390637321},\"p2\":{\"x\":1,\"y\":170},\"rightArrow\":\"false\"}},{\"ID\":\"1266\",\"typeID\":\"Arrow\",\"zOrder\":\"432\",\"w\":\"8\",\"h\":\"166\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"286\",\"y\":\"3351\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"leftArrow\":\"false\",\"p0\":{\"x\":7,\"y\":165},\"p1\":{\"x\":0.4072427393330943,\"y\":0.009537468626747932},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\"}},{\"ID\":\"1267\",\"typeID\":\"TextArea\",\"zOrder\":\"433\",\"w\":\"210\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"187\",\"y\":\"3324\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1268\",\"typeID\":\"Label\",\"zOrder\":\"434\",\"measuredW\":\"119\",\"measuredH\":\"25\",\"x\":\"233\",\"y\":\"3337\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Web Assembly\"}},{\"ID\":\"1269\",\"typeID\":\"TextArea\",\"zOrder\":\"435\",\"w\":\"207\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"201\",\"y\":\"3500\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1270\",\"typeID\":\"Label\",\"zOrder\":\"436\",\"measuredW\":\"118\",\"measuredH\":\"25\",\"x\":\"246\",\"y\":\"3513\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Keep Learning\"}},{\"ID\":\"1272\",\"typeID\":\"TextArea\",\"zOrder\":\"443\",\"w\":\"230\",\"h\":\"50\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"722\",\"y\":\"2038\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1273\",\"typeID\":\"Label\",\"zOrder\":\"444\",\"measuredW\":\"144\",\"measuredH\":\"25\",\"x\":\"766\",\"y\":\"2051\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Web Components\"}},{\"ID\":\"1274\",\"typeID\":\"TextArea\",\"zOrder\":\"445\",\"w\":\"190\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1047\",\"y\":\"1997\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1275\",\"typeID\":\"Label\",\"zOrder\":\"446\",\"w\":\"132\",\"measuredW\":\"132\",\"measuredH\":\"25\",\"x\":\"1077\",\"y\":\"2005\",\"properties\":{\"size\":\"17\",\"text\":\"HTML Templates\"}},{\"ID\":\"1276\",\"typeID\":\"TextArea\",\"zOrder\":\"447\",\"w\":\"190\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1047\",\"y\":\"2042\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1277\",\"typeID\":\"Label\",\"zOrder\":\"448\",\"w\":\"139\",\"measuredW\":\"139\",\"measuredH\":\"25\",\"x\":\"1077\",\"y\":\"2050\",\"properties\":{\"size\":\"17\",\"text\":\"Custom Elements\"}},{\"ID\":\"1278\",\"typeID\":\"TextArea\",\"zOrder\":\"449\",\"w\":\"190\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1047\",\"y\":\"2086\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1279\",\"typeID\":\"Label\",\"zOrder\":\"450\",\"w\":\"105\",\"measuredW\":\"105\",\"measuredH\":\"25\",\"x\":\"1085\",\"y\":\"2094\",\"properties\":{\"size\":\"17\",\"text\":\"Shadow DOM\"}},{\"ID\":\"1280\",\"typeID\":\"TextArea\",\"zOrder\":\"451\",\"w\":\"188\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"756\",\"y\":\"3200\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"13421772\",\"textColor\":\"3355443\"}},{\"ID\":\"1281\",\"typeID\":\"Label\",\"zOrder\":\"452\",\"w\":\"115\",\"measuredW\":\"105\",\"measuredH\":\"25\",\"x\":\"798\",\"y\":\"3208\",\"properties\":{\"color\":\"3355443\",\"size\":\"17\",\"text\":\"Proton Native\"}},{\"ID\":\"1282\",\"typeID\":\"TextArea\",\"zOrder\":\"453\",\"w\":\"186\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"757\",\"y\":\"3199\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"color\":\"10066329\"}},{\"ID\":\"1286\",\"typeID\":\"Label\",\"zOrder\":\"460\",\"w\":\"324\",\"measuredW\":\"320\",\"measuredH\":\"24\",\"x\":\"211\",\"y\":\"269\",\"properties\":{\"size\":\"16\",\"text\":\"Order in roadmap not strict (Learn anytime)\"}},{\"ID\":\"1325\",\"typeID\":\"Arrow\",\"zOrder\":\"539\",\"w\":\"122\",\"h\":\"127\",\"measuredW\":\"150\",\"measuredH\":\"100\",\"x\":\"368\",\"y\":\"1990\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":121,\"y\":0},\"p1\":{\"x\":0.5036228023441662,\"y\":0.00367607884922756},\"p2\":{\"x\":0,\"y\":126},\"rightArrow\":\"false\",\"stroke\":\"dotted\"}},{\"ID\":\"1382\",\"typeID\":\"TextArea\",\"zOrder\":\"677\",\"w\":\"186\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"757\",\"y\":\"3152\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"color\":\"10066329\"}},{\"ID\":\"1384\",\"typeID\":\"TextArea\",\"zOrder\":\"680\",\"w\":\"145\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1151\",\"y\":\"1646\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1386\",\"typeID\":\"Canvas\",\"zOrder\":\"105\",\"w\":\"350\",\"h\":\"141\",\"measuredW\":\"100\",\"measuredH\":\"70\",\"x\":\"933\",\"y\":\"169\"},{\"ID\":\"1387\",\"typeID\":\"Label\",\"zOrder\":\"106\",\"measuredW\":\"315\",\"measuredH\":\"25\",\"x\":\"947\",\"y\":\"186\",\"properties\":{\"size\":\"17\",\"text\":\"Find the detailed version of this roadmap\"}},{\"ID\":\"1388\",\"typeID\":\"Label\",\"zOrder\":\"107\",\"measuredW\":\"323\",\"measuredH\":\"25\",\"x\":\"947\",\"y\":\"214\",\"properties\":{\"size\":\"17\",\"text\":\"along with resources and other roadmaps\"}},{\"ID\":\"1389\",\"typeID\":\"Canvas\",\"zOrder\":\"108\",\"w\":\"320\",\"h\":\"45\",\"measuredW\":\"100\",\"measuredH\":\"70\",\"x\":\"948\",\"y\":\"250\",\"properties\":{\"borderColor\":\"4273622\",\"color\":\"4273622\"}},{\"ID\":\"1391\",\"typeID\":\"TextArea\",\"zOrder\":\"151\",\"w\":\"297\",\"h\":\"107\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"160\",\"y\":\"1108\"},{\"ID\":\"1392\",\"typeID\":\"Label\",\"zOrder\":\"152\",\"w\":\"261\",\"measuredW\":\"248\",\"measuredH\":\"25\",\"x\":\"176\",\"y\":\"1122\",\"properties\":{\"size\":\"17\",\"text\":\"npm and yarn both are fine, pick\"}},{\"ID\":\"1393\",\"typeID\":\"Label\",\"zOrder\":\"153\",\"w\":\"132\",\"measuredW\":\"127\",\"measuredH\":\"25\",\"x\":\"176\",\"y\":\"1175\",\"properties\":{\"size\":\"17\",\"text\":\"much difference.\"}},{\"ID\":\"1394\",\"typeID\":\"Label\",\"zOrder\":\"154\",\"w\":\"248\",\"measuredW\":\"229\",\"measuredH\":\"25\",\"x\":\"176\",\"y\":\"1149\",\"properties\":{\"size\":\"17\",\"text\":\"one or learn both, there is not\"}},{\"ID\":\"1395\",\"typeID\":\"TextArea\",\"zOrder\":\"158\",\"w\":\"230\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1004\",\"y\":\"1039\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1396\",\"typeID\":\"Label\",\"zOrder\":\"159\",\"w\":\"52\",\"measuredW\":\"50\",\"measuredH\":\"25\",\"x\":\"1093\",\"y\":\"1051\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"Gitlab\"}},{\"ID\":\"1397\",\"typeID\":\"TextArea\",\"zOrder\":\"160\",\"w\":\"230\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1004\",\"y\":\"1039\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1399\",\"typeID\":\"Label\",\"zOrder\":\"166\",\"measuredW\":\"264\",\"measuredH\":\"24\",\"x\":\"210\",\"y\":\"204\",\"properties\":{\"size\":\"16\",\"text\":\"Personal Recommendation / Opinion\"}},{\"ID\":\"1400\",\"typeID\":\"TextArea\",\"zOrder\":\"201\",\"w\":\"174\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"152\",\"y\":\"1627\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1401\",\"typeID\":\"Label\",\"zOrder\":\"202\",\"w\":\"41\",\"measuredW\":\"38\",\"measuredH\":\"25\",\"x\":\"219\",\"y\":\"1637\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"Gulp\"}},{\"ID\":\"1402\",\"typeID\":\"TextArea\",\"zOrder\":\"203\",\"w\":\"174\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"152\",\"y\":\"1628\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1403\",\"typeID\":\"TextArea\",\"zOrder\":\"230\",\"w\":\"145\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"952\",\"y\":\"1843\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1404\",\"typeID\":\"Label\",\"zOrder\":\"231\",\"w\":\"64\",\"measuredW\":\"63\",\"measuredH\":\"25\",\"x\":\"993\",\"y\":\"1851\",\"properties\":{\"size\":\"17\",\"text\":\"Angular\"}},{\"ID\":\"1405\",\"typeID\":\"TextArea\",\"zOrder\":\"240\",\"w\":\"145\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1148\",\"y\":\"1476\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1406\",\"typeID\":\"Label\",\"zOrder\":\"241\",\"w\":\"41\",\"measuredW\":\"40\",\"measuredH\":\"25\",\"x\":\"1200\",\"y\":\"1486\",\"properties\":{\"bold\":\"true\",\"color\":\"3355443\",\"size\":\"17\",\"text\":\"Less\"}},{\"ID\":\"1407\",\"typeID\":\"TextArea\",\"zOrder\":\"242\",\"w\":\"145\",\"h\":\"44\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1148\",\"y\":\"1476\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1409\",\"typeID\":\"TextArea\",\"zOrder\":\"255\",\"w\":\"221\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"148\",\"y\":\"2047\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1410\",\"typeID\":\"Label\",\"zOrder\":\"256\",\"w\":\"62\",\"measuredW\":\"59\",\"measuredH\":\"25\",\"x\":\"228\",\"y\":\"2056\",\"properties\":{\"size\":\"17\",\"text\":\"Radium\"}},{\"ID\":\"1411\",\"typeID\":\"TextArea\",\"zOrder\":\"257\",\"w\":\"219\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"149\",\"y\":\"2047\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1412\",\"typeID\":\"TextArea\",\"zOrder\":\"258\",\"w\":\"221\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"148\",\"y\":\"2095\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1413\",\"typeID\":\"Label\",\"zOrder\":\"259\",\"w\":\"81\",\"measuredW\":\"84\",\"measuredH\":\"25\",\"x\":\"218\",\"y\":\"2104\",\"properties\":{\"size\":\"17\",\"text\":\"Glamorous\"}},{\"ID\":\"1414\",\"typeID\":\"TextArea\",\"zOrder\":\"260\",\"w\":\"219\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"149\",\"y\":\"2095\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1416\",\"typeID\":\"TextArea\",\"zOrder\":\"280\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1183\",\"y\":\"2999\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1417\",\"typeID\":\"Label\",\"zOrder\":\"281\",\"w\":\"78\",\"measuredW\":\"78\",\"measuredH\":\"25\",\"x\":\"1218\",\"y\":\"3007\",\"properties\":{\"size\":\"17\",\"text\":\"GatsbyJS\"}},{\"ID\":\"1418\",\"typeID\":\"TextArea\",\"zOrder\":\"282\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1183\",\"y\":\"2953\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1419\",\"typeID\":\"Label\",\"zOrder\":\"283\",\"w\":\"58\",\"measuredW\":\"55\",\"measuredH\":\"25\",\"x\":\"1228\",\"y\":\"2961\",\"properties\":{\"size\":\"17\",\"text\":\"Next.js\"}},{\"ID\":\"1420\",\"typeID\":\"TextArea\",\"zOrder\":\"284\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1183\",\"y\":\"3045\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1421\",\"typeID\":\"Label\",\"zOrder\":\"285\",\"w\":\"56\",\"measuredW\":\"55\",\"measuredH\":\"25\",\"x\":\"1229\",\"y\":\"3053\",\"properties\":{\"size\":\"17\",\"text\":\"Nuxt.js\"}},{\"ID\":\"1422\",\"typeID\":\"TextArea\",\"zOrder\":\"286\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1183\",\"y\":\"3090\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1423\",\"typeID\":\"Label\",\"zOrder\":\"287\",\"w\":\"73\",\"measuredW\":\"74\",\"measuredH\":\"25\",\"x\":\"1225\",\"y\":\"3098\",\"properties\":{\"size\":\"17\",\"text\":\"Vuepress\"}},{\"ID\":\"1424\",\"typeID\":\"TextArea\",\"zOrder\":\"288\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1183\",\"y\":\"3136\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1425\",\"typeID\":\"Label\",\"zOrder\":\"289\",\"w\":\"49\",\"measuredW\":\"45\",\"measuredH\":\"25\",\"x\":\"1235\",\"y\":\"3144\",\"properties\":{\"size\":\"17\",\"text\":\"Jekyll\"}},{\"ID\":\"1426\",\"typeID\":\"TextArea\",\"zOrder\":\"306\",\"w\":\"205\",\"h\":\"52\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1104\",\"y\":\"2164\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1427\",\"typeID\":\"Label\",\"zOrder\":\"307\",\"w\":\"81\",\"measuredW\":\"75\",\"measuredH\":\"25\",\"x\":\"1171\",\"y\":\"2177\",\"properties\":{\"size\":\"17\",\"text\":\"Bootstrap\"}},{\"ID\":\"1428\",\"typeID\":\"TextArea\",\"zOrder\":\"308\",\"w\":\"205\",\"h\":\"51\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1104\",\"y\":\"2224\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1429\",\"typeID\":\"Label\",\"zOrder\":\"309\",\"w\":\"126\",\"measuredW\":\"125\",\"measuredH\":\"25\",\"x\":\"1144\",\"y\":\"2237\",\"properties\":{\"size\":\"17\",\"text\":\"Materialize CSS\"}},{\"ID\":\"1430\",\"typeID\":\"TextArea\",\"zOrder\":\"310\",\"w\":\"205\",\"h\":\"49\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1104\",\"y\":\"2283\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1431\",\"typeID\":\"Label\",\"zOrder\":\"311\",\"w\":\"50\",\"measuredW\":\"48\",\"measuredH\":\"25\",\"x\":\"1182\",\"y\":\"2295\",\"properties\":{\"size\":\"17\",\"text\":\"Bulma\"}},{\"ID\":\"1432\",\"typeID\":\"TextArea\",\"zOrder\":\"316\",\"w\":\"205\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"852\",\"y\":\"2209\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1433\",\"typeID\":\"Label\",\"zOrder\":\"317\",\"w\":\"98\",\"measuredW\":\"86\",\"measuredH\":\"25\",\"x\":\"913\",\"y\":\"2217\",\"properties\":{\"size\":\"17\",\"text\":\"Material UI\"}},{\"ID\":\"1434\",\"typeID\":\"TextArea\",\"zOrder\":\"318\",\"w\":\"205\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"852\",\"y\":\"2297\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1435\",\"typeID\":\"Label\",\"zOrder\":\"319\",\"w\":\"94\",\"measuredW\":\"79\",\"measuredH\":\"25\",\"x\":\"926\",\"y\":\"2304\",\"properties\":{\"size\":\"17\",\"text\":\"Chakra UI\"}},{\"ID\":\"1436\",\"typeID\":\"TextArea\",\"zOrder\":\"320\",\"w\":\"205\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"852\",\"y\":\"2164\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1437\",\"typeID\":\"Label\",\"zOrder\":\"321\",\"w\":\"99\",\"measuredW\":\"87\",\"measuredH\":\"25\",\"x\":\"912\",\"y\":\"2172\",\"properties\":{\"size\":\"17\",\"text\":\"Reactstrap\"}},{\"ID\":\"1438\",\"typeID\":\"TextArea\",\"zOrder\":\"322\",\"w\":\"205\",\"h\":\"39\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"852\",\"y\":\"2253\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1439\",\"typeID\":\"Label\",\"zOrder\":\"323\",\"w\":\"115\",\"measuredW\":\"102\",\"measuredH\":\"25\",\"x\":\"905\",\"y\":\"2261\",\"properties\":{\"size\":\"17\",\"text\":\"Tailwind CSS\"}},{\"ID\":\"1440\",\"typeID\":\"TextArea\",\"zOrder\":\"327\",\"w\":\"247\",\"h\":\"257\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"125\",\"y\":\"2235\"},{\"ID\":\"1448\",\"typeID\":\"TextArea\",\"zOrder\":\"359\",\"w\":\"199\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1104\",\"y\":\"2508\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1449\",\"typeID\":\"Label\",\"zOrder\":\"360\",\"w\":\"91\",\"measuredW\":\"86\",\"measuredH\":\"25\",\"x\":\"1158\",\"y\":\"2516\",\"properties\":{\"size\":\"17\",\"text\":\"TypeScript\"}},{\"ID\":\"1450\",\"typeID\":\"Canvas\",\"zOrder\":\"363\",\"w\":\"228\",\"h\":\"389\",\"measuredW\":\"100\",\"measuredH\":\"70\",\"x\":\"143\",\"y\":\"2527\"},{\"ID\":\"1452\",\"typeID\":\"Canvas\",\"zOrder\":\"374\",\"w\":\"262\",\"h\":\"281\",\"measuredW\":\"100\",\"measuredH\":\"70\",\"x\":\"395\",\"y\":\"2635\"},{\"ID\":\"1453\",\"typeID\":\"TextInput\",\"zOrder\":\"375\",\"w\":\"225\",\"measuredW\":\"125\",\"measuredH\":\"32\",\"x\":\"415\",\"y\":\"2654\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"PRPL Pattern\"}},{\"ID\":\"1454\",\"typeID\":\"TextInput\",\"zOrder\":\"376\",\"w\":\"225\",\"measuredW\":\"110\",\"measuredH\":\"32\",\"x\":\"415\",\"y\":\"2692\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"RAIL Model\"}},{\"ID\":\"1455\",\"typeID\":\"TextInput\",\"zOrder\":\"377\",\"w\":\"225\",\"measuredW\":\"187\",\"measuredH\":\"32\",\"x\":\"415\",\"y\":\"2730\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Performance Metrics\"}},{\"ID\":\"1456\",\"typeID\":\"TextInput\",\"zOrder\":\"378\",\"w\":\"225\",\"measuredW\":\"159\",\"measuredH\":\"32\",\"x\":\"415\",\"y\":\"2767\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Using Lighthouse\"}},{\"ID\":\"1457\",\"typeID\":\"TextInput\",\"zOrder\":\"379\",\"w\":\"225\",\"measuredW\":\"143\",\"measuredH\":\"32\",\"x\":\"415\",\"y\":\"2805\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Using DevTools\"}},{\"ID\":\"1459\",\"typeID\":\"TextArea\",\"zOrder\":\"415\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"146\",\"y\":\"2938\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1460\",\"typeID\":\"Label\",\"zOrder\":\"416\",\"w\":\"101\",\"measuredW\":\"101\",\"measuredH\":\"25\",\"x\":\"169\",\"y\":\"2946\",\"properties\":{\"size\":\"17\",\"text\":\"React Native\"}},{\"ID\":\"1461\",\"typeID\":\"TextArea\",\"zOrder\":\"417\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"146\",\"y\":\"2983\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1462\",\"typeID\":\"Label\",\"zOrder\":\"418\",\"w\":\"101\",\"measuredW\":\"96\",\"measuredH\":\"25\",\"x\":\"169\",\"y\":\"2991\",\"properties\":{\"size\":\"17\",\"text\":\"NativeScript\"}},{\"ID\":\"1463\",\"typeID\":\"TextArea\",\"zOrder\":\"419\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"146\",\"y\":\"3029\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1464\",\"typeID\":\"Label\",\"zOrder\":\"420\",\"w\":\"53\",\"measuredW\":\"52\",\"measuredH\":\"25\",\"x\":\"193\",\"y\":\"3037\",\"properties\":{\"size\":\"17\",\"text\":\"Flutter\"}},{\"ID\":\"1465\",\"typeID\":\"TextArea\",\"zOrder\":\"421\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1183\",\"y\":\"3182\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1466\",\"typeID\":\"Label\",\"zOrder\":\"422\",\"w\":\"43\",\"measuredW\":\"41\",\"measuredH\":\"25\",\"x\":\"1235\",\"y\":\"3190\",\"properties\":{\"size\":\"17\",\"text\":\"Hugo\"}},{\"ID\":\"1467\",\"typeID\":\"TextArea\",\"zOrder\":\"423\",\"w\":\"147\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"146\",\"y\":\"3076\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1468\",\"typeID\":\"Label\",\"zOrder\":\"424\",\"w\":\"40\",\"measuredW\":\"39\",\"measuredH\":\"25\",\"x\":\"200\",\"y\":\"3084\",\"properties\":{\"size\":\"17\",\"text\":\"Ionic\"}},{\"ID\":\"1469\",\"typeID\":\"TextArea\",\"zOrder\":\"437\",\"w\":\"582\",\"h\":\"188\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"464\",\"y\":\"3296\"},{\"ID\":\"1470\",\"typeID\":\"Label\",\"zOrder\":\"438\",\"w\":\"536\",\"measuredW\":\"508\",\"measuredH\":\"25\",\"x\":\"484\",\"y\":\"3316\",\"properties\":{\"size\":\"17\",\"text\":\"Web Assembly or WASM is the binary instructions generated from\"}},{\"ID\":\"1471\",\"typeID\":\"Label\",\"zOrder\":\"439\",\"w\":\"537\",\"measuredW\":\"519\",\"measuredH\":\"25\",\"x\":\"484\",\"y\":\"3346\",\"properties\":{\"size\":\"17\",\"text\":\"higher level languages such as Go, C, C++ or Rust. It is faster than\"}},{\"ID\":\"1472\",\"typeID\":\"Label\",\"zOrder\":\"440\",\"w\":\"528\",\"measuredW\":\"531\",\"measuredH\":\"25\",\"x\":\"483\",\"y\":\"3377\",\"properties\":{\"size\":\"17\",\"text\":\"JavaScript and WASM 1.0 has already shipped in the major browsers.\"}},{\"ID\":\"1473\",\"typeID\":\"Label\",\"zOrder\":\"441\",\"w\":\"536\",\"measuredW\":\"365\",\"measuredH\":\"25\",\"x\":\"483\",\"y\":\"3438\",\"properties\":{\"size\":\"17\",\"text\":\"take quite some time to go mainstream though.\"}},{\"ID\":\"1475\",\"typeID\":\"Label\",\"zOrder\":\"442\",\"w\":\"539\",\"measuredW\":\"538\",\"measuredH\":\"25\",\"x\":\"483\",\"y\":\"3407\",\"properties\":{\"size\":\"17\",\"text\":\"W3C accepted it as an official standard at the end of 2019. It will still\"}},{\"ID\":\"1476\",\"typeID\":\"Icon\",\"zOrder\":\"454\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"552\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1477\",\"typeID\":\"Icon\",\"zOrder\":\"455\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"552\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1478\",\"typeID\":\"Icon\",\"zOrder\":\"456\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"647\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1479\",\"typeID\":\"Icon\",\"zOrder\":\"457\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"647\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1480\",\"typeID\":\"Icon\",\"zOrder\":\"458\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"690\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1481\",\"typeID\":\"Icon\",\"zOrder\":\"459\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"690\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1482\",\"typeID\":\"Icon\",\"zOrder\":\"461\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"174\",\"y\":\"269\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1483\",\"typeID\":\"Icon\",\"zOrder\":\"462\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"174\",\"y\":\"269\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1484\",\"typeID\":\"Icon\",\"zOrder\":\"463\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"601\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1485\",\"typeID\":\"Icon\",\"zOrder\":\"464\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"601\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1486\",\"typeID\":\"Icon\",\"zOrder\":\"465\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1139\",\"y\":\"581\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1487\",\"typeID\":\"Icon\",\"zOrder\":\"466\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1139\",\"y\":\"581\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1488\",\"typeID\":\"Icon\",\"zOrder\":\"467\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1140\",\"y\":\"630\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1489\",\"typeID\":\"Icon\",\"zOrder\":\"468\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1140\",\"y\":\"630\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1490\",\"typeID\":\"Icon\",\"zOrder\":\"469\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1140\",\"y\":\"679\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1491\",\"typeID\":\"Icon\",\"zOrder\":\"470\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1140\",\"y\":\"679\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1492\",\"typeID\":\"Icon\",\"zOrder\":\"471\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1140\",\"y\":\"728\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1493\",\"typeID\":\"Icon\",\"zOrder\":\"472\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1140\",\"y\":\"728\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1494\",\"typeID\":\"Icon\",\"zOrder\":\"473\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1139\",\"y\":\"783\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1495\",\"typeID\":\"Icon\",\"zOrder\":\"474\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1139\",\"y\":\"783\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1496\",\"typeID\":\"Icon\",\"zOrder\":\"475\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1282\",\"y\":\"652\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1497\",\"typeID\":\"Icon\",\"zOrder\":\"476\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1282\",\"y\":\"652\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1498\",\"typeID\":\"Icon\",\"zOrder\":\"477\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"753\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1499\",\"typeID\":\"Icon\",\"zOrder\":\"478\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"753\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1500\",\"typeID\":\"Icon\",\"zOrder\":\"479\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"802\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1501\",\"typeID\":\"Icon\",\"zOrder\":\"480\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"802\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1502\",\"typeID\":\"Icon\",\"zOrder\":\"481\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"849\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1503\",\"typeID\":\"Icon\",\"zOrder\":\"482\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"849\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1504\",\"typeID\":\"Icon\",\"zOrder\":\"483\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"151\",\"y\":\"895\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1505\",\"typeID\":\"Icon\",\"zOrder\":\"484\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"151\",\"y\":\"895\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1506\",\"typeID\":\"Icon\",\"zOrder\":\"485\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"151\",\"y\":\"947\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1507\",\"typeID\":\"Icon\",\"zOrder\":\"486\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"151\",\"y\":\"947\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1508\",\"typeID\":\"Icon\",\"zOrder\":\"487\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"513\",\"y\":\"972\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1509\",\"typeID\":\"Icon\",\"zOrder\":\"488\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"513\",\"y\":\"972\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1510\",\"typeID\":\"Icon\",\"zOrder\":\"489\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"564\",\"y\":\"439\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1511\",\"typeID\":\"Icon\",\"zOrder\":\"490\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"564\",\"y\":\"439\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1512\",\"typeID\":\"Icon\",\"zOrder\":\"491\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"994\",\"y\":\"974\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1513\",\"typeID\":\"Icon\",\"zOrder\":\"492\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"994\",\"y\":\"974\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1514\",\"typeID\":\"Icon\",\"zOrder\":\"493\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"564\",\"y\":\"1065\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1515\",\"typeID\":\"Icon\",\"zOrder\":\"494\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"564\",\"y\":\"1065\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1516\",\"typeID\":\"Icon\",\"zOrder\":\"495\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"228\",\"y\":\"1229\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1517\",\"typeID\":\"Icon\",\"zOrder\":\"496\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"228\",\"y\":\"1229\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1518\",\"typeID\":\"Icon\",\"zOrder\":\"497\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"228\",\"y\":\"1290\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1519\",\"typeID\":\"Icon\",\"zOrder\":\"498\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"228\",\"y\":\"1290\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1528\",\"typeID\":\"Icon\",\"zOrder\":\"507\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1369\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1529\",\"typeID\":\"Icon\",\"zOrder\":\"508\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1369\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1530\",\"typeID\":\"Icon\",\"zOrder\":\"509\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"153\",\"y\":\"391\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1531\",\"typeID\":\"Icon\",\"zOrder\":\"510\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"153\",\"y\":\"391\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1532\",\"typeID\":\"Icon\",\"zOrder\":\"511\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"443\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1533\",\"typeID\":\"Icon\",\"zOrder\":\"512\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"443\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1534\",\"typeID\":\"Icon\",\"zOrder\":\"513\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"488\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1535\",\"typeID\":\"Icon\",\"zOrder\":\"514\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"152\",\"y\":\"488\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1536\",\"typeID\":\"Icon\",\"zOrder\":\"515\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1140\",\"y\":\"388\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1537\",\"typeID\":\"Icon\",\"zOrder\":\"516\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1140\",\"y\":\"388\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1538\",\"typeID\":\"Icon\",\"zOrder\":\"517\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1139\",\"y\":\"438\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1539\",\"typeID\":\"Icon\",\"zOrder\":\"518\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1139\",\"y\":\"438\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1540\",\"typeID\":\"Icon\",\"zOrder\":\"519\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1139\",\"y\":\"483\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1541\",\"typeID\":\"Icon\",\"zOrder\":\"520\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1139\",\"y\":\"483\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1542\",\"typeID\":\"Icon\",\"zOrder\":\"521\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"828\",\"y\":\"1159\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1543\",\"typeID\":\"Icon\",\"zOrder\":\"522\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"828\",\"y\":\"1159\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1544\",\"typeID\":\"Icon\",\"zOrder\":\"523\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"144\",\"y\":\"1566\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1545\",\"typeID\":\"Icon\",\"zOrder\":\"524\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"144\",\"y\":\"1566\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1546\",\"typeID\":\"Icon\",\"zOrder\":\"525\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1281\",\"y\":\"1549\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1547\",\"typeID\":\"Icon\",\"zOrder\":\"526\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1281\",\"y\":\"1549\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1548\",\"typeID\":\"Icon\",\"zOrder\":\"527\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1281\",\"y\":\"1596\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1549\",\"typeID\":\"Icon\",\"zOrder\":\"528\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1281\",\"y\":\"1596\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1550\",\"typeID\":\"Label\",\"zOrder\":\"529\",\"measuredW\":\"278\",\"measuredH\":\"24\",\"x\":\"210\",\"y\":\"237\",\"properties\":{\"size\":\"16\",\"text\":\"Alternative Option - Pick this or purple\"}},{\"ID\":\"1552\",\"typeID\":\"Icon\",\"zOrder\":\"533\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"143\",\"y\":\"1681\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1553\",\"typeID\":\"Icon\",\"zOrder\":\"534\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"143\",\"y\":\"1681\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1554\",\"typeID\":\"Icon\",\"zOrder\":\"535\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1856\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1555\",\"typeID\":\"Icon\",\"zOrder\":\"536\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"141\",\"y\":\"1856\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1557\",\"typeID\":\"Icon\",\"zOrder\":\"540\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"996\",\"y\":\"1033\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1558\",\"typeID\":\"Icon\",\"zOrder\":\"541\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"996\",\"y\":\"1033\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1559\",\"typeID\":\"Icon\",\"zOrder\":\"542\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"996\",\"y\":\"1033\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1560\",\"typeID\":\"Icon\",\"zOrder\":\"543\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"996\",\"y\":\"1090\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1561\",\"typeID\":\"Icon\",\"zOrder\":\"544\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"996\",\"y\":\"1090\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1562\",\"typeID\":\"Icon\",\"zOrder\":\"545\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"996\",\"y\":\"1090\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1563\",\"typeID\":\"Icon\",\"zOrder\":\"546\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"143\",\"y\":\"1729\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1564\",\"typeID\":\"Icon\",\"zOrder\":\"547\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"143\",\"y\":\"1729\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1565\",\"typeID\":\"Icon\",\"zOrder\":\"548\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"143\",\"y\":\"1729\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1566\",\"typeID\":\"Icon\",\"zOrder\":\"549\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"143\",\"y\":\"1774\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1567\",\"typeID\":\"Icon\",\"zOrder\":\"550\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"143\",\"y\":\"1774\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1568\",\"typeID\":\"Icon\",\"zOrder\":\"551\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"143\",\"y\":\"1774\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1569\",\"typeID\":\"Icon\",\"zOrder\":\"552\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1904\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1570\",\"typeID\":\"Icon\",\"zOrder\":\"553\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1904\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1571\",\"typeID\":\"Icon\",\"zOrder\":\"554\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"139\",\"y\":\"1950\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1572\",\"typeID\":\"Icon\",\"zOrder\":\"555\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"139\",\"y\":\"1950\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1573\",\"typeID\":\"Icon\",\"zOrder\":\"556\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"139\",\"y\":\"1950\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1574\",\"typeID\":\"Icon\",\"zOrder\":\"557\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1996\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1575\",\"typeID\":\"Icon\",\"zOrder\":\"558\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1996\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1576\",\"typeID\":\"Icon\",\"zOrder\":\"559\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"140\",\"y\":\"1996\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1577\",\"typeID\":\"Icon\",\"zOrder\":\"560\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"913\",\"y\":\"1742\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1578\",\"typeID\":\"Icon\",\"zOrder\":\"561\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"913\",\"y\":\"1742\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1579\",\"typeID\":\"Icon\",\"zOrder\":\"562\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"944\",\"y\":\"1833\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1580\",\"typeID\":\"Icon\",\"zOrder\":\"563\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"944\",\"y\":\"1833\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1581\",\"typeID\":\"Icon\",\"zOrder\":\"564\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"944\",\"y\":\"1833\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1582\",\"typeID\":\"Icon\",\"zOrder\":\"565\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"945\",\"y\":\"1917\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1583\",\"typeID\":\"Icon\",\"zOrder\":\"566\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"945\",\"y\":\"1917\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1584\",\"typeID\":\"Icon\",\"zOrder\":\"567\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"945\",\"y\":\"1917\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1585\",\"typeID\":\"Icon\",\"zOrder\":\"568\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1719\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1586\",\"typeID\":\"Icon\",\"zOrder\":\"569\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1719\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1587\",\"typeID\":\"Icon\",\"zOrder\":\"570\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1767\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1588\",\"typeID\":\"Icon\",\"zOrder\":\"571\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1767\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1589\",\"typeID\":\"Icon\",\"zOrder\":\"572\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1767\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1590\",\"typeID\":\"Icon\",\"zOrder\":\"573\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"936\",\"y\":\"2028\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1591\",\"typeID\":\"Icon\",\"zOrder\":\"574\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"936\",\"y\":\"2028\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1592\",\"typeID\":\"Icon\",\"zOrder\":\"575\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1222\",\"y\":\"1991\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1593\",\"typeID\":\"Icon\",\"zOrder\":\"576\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1222\",\"y\":\"1991\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1594\",\"typeID\":\"Icon\",\"zOrder\":\"577\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1222\",\"y\":\"2040\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1595\",\"typeID\":\"Icon\",\"zOrder\":\"578\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1222\",\"y\":\"2040\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1596\",\"typeID\":\"Icon\",\"zOrder\":\"579\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1222\",\"y\":\"2082\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1597\",\"typeID\":\"Icon\",\"zOrder\":\"580\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1222\",\"y\":\"2082\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1598\",\"typeID\":\"Icon\",\"zOrder\":\"581\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2158\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1599\",\"typeID\":\"Icon\",\"zOrder\":\"582\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2158\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1600\",\"typeID\":\"Icon\",\"zOrder\":\"583\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2206\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1601\",\"typeID\":\"Icon\",\"zOrder\":\"584\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2206\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1602\",\"typeID\":\"Icon\",\"zOrder\":\"585\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2250\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1603\",\"typeID\":\"Icon\",\"zOrder\":\"586\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2250\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1604\",\"typeID\":\"Icon\",\"zOrder\":\"587\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2250\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1605\",\"typeID\":\"Icon\",\"zOrder\":\"588\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2293\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1606\",\"typeID\":\"Icon\",\"zOrder\":\"589\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2293\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1607\",\"typeID\":\"Icon\",\"zOrder\":\"590\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"844\",\"y\":\"2293\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1608\",\"typeID\":\"Icon\",\"zOrder\":\"591\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1291\",\"y\":\"2159\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1609\",\"typeID\":\"Icon\",\"zOrder\":\"592\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1291\",\"y\":\"2159\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1610\",\"typeID\":\"Icon\",\"zOrder\":\"593\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1294\",\"y\":\"2219\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1611\",\"typeID\":\"Icon\",\"zOrder\":\"594\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1294\",\"y\":\"2219\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1612\",\"typeID\":\"Icon\",\"zOrder\":\"595\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1294\",\"y\":\"2219\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1613\",\"typeID\":\"Icon\",\"zOrder\":\"596\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1294\",\"y\":\"2280\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1614\",\"typeID\":\"Icon\",\"zOrder\":\"597\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1294\",\"y\":\"2280\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1615\",\"typeID\":\"Icon\",\"zOrder\":\"598\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1294\",\"y\":\"2280\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1616\",\"typeID\":\"Icon\",\"zOrder\":\"599\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2243\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1617\",\"typeID\":\"Icon\",\"zOrder\":\"600\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2243\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1618\",\"typeID\":\"Icon\",\"zOrder\":\"601\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2292\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1619\",\"typeID\":\"Icon\",\"zOrder\":\"602\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2292\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1620\",\"typeID\":\"Icon\",\"zOrder\":\"603\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2335\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1621\",\"typeID\":\"Icon\",\"zOrder\":\"604\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2335\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1622\",\"typeID\":\"Icon\",\"zOrder\":\"605\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2378\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1623\",\"typeID\":\"Icon\",\"zOrder\":\"606\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2378\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1624\",\"typeID\":\"Icon\",\"zOrder\":\"607\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2516\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1625\",\"typeID\":\"Icon\",\"zOrder\":\"608\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"134\",\"y\":\"2516\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1626\",\"typeID\":\"Icon\",\"zOrder\":\"609\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"388\",\"y\":\"2626\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1627\",\"typeID\":\"Icon\",\"zOrder\":\"610\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"388\",\"y\":\"2626\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1628\",\"typeID\":\"Icon\",\"zOrder\":\"611\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1286\",\"y\":\"2501\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1629\",\"typeID\":\"Icon\",\"zOrder\":\"612\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1286\",\"y\":\"2501\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1630\",\"typeID\":\"Icon\",\"zOrder\":\"613\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1818\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1631\",\"typeID\":\"Icon\",\"zOrder\":\"614\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1818\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1632\",\"typeID\":\"Icon\",\"zOrder\":\"615\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1818\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1633\",\"typeID\":\"Icon\",\"zOrder\":\"616\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1868\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1634\",\"typeID\":\"Icon\",\"zOrder\":\"617\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1868\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1635\",\"typeID\":\"Icon\",\"zOrder\":\"618\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1868\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1636\",\"typeID\":\"Icon\",\"zOrder\":\"619\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1918\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1637\",\"typeID\":\"Icon\",\"zOrder\":\"620\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1918\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1638\",\"typeID\":\"Icon\",\"zOrder\":\"621\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"1918\",\"properties\":{\"color\":\"40463\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1639\",\"typeID\":\"Icon\",\"zOrder\":\"622\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"2627\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1640\",\"typeID\":\"Icon\",\"zOrder\":\"623\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"2627\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1641\",\"typeID\":\"Icon\",\"zOrder\":\"624\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1163\",\"y\":\"2644\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1642\",\"typeID\":\"Icon\",\"zOrder\":\"625\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1163\",\"y\":\"2644\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1643\",\"typeID\":\"Icon\",\"zOrder\":\"626\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1165\",\"y\":\"2735\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1644\",\"typeID\":\"Icon\",\"zOrder\":\"627\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1165\",\"y\":\"2735\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1645\",\"typeID\":\"Icon\",\"zOrder\":\"628\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1165\",\"y\":\"2735\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1646\",\"typeID\":\"Icon\",\"zOrder\":\"629\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1166\",\"y\":\"2789\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1647\",\"typeID\":\"Icon\",\"zOrder\":\"630\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1166\",\"y\":\"2789\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1648\",\"typeID\":\"Icon\",\"zOrder\":\"631\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1166\",\"y\":\"2789\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1649\",\"typeID\":\"Icon\",\"zOrder\":\"632\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"2735\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1650\",\"typeID\":\"Icon\",\"zOrder\":\"633\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"2735\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1651\",\"typeID\":\"Icon\",\"zOrder\":\"634\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"2735\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1652\",\"typeID\":\"Icon\",\"zOrder\":\"635\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"2789\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1653\",\"typeID\":\"Icon\",\"zOrder\":\"636\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"2789\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1654\",\"typeID\":\"Icon\",\"zOrder\":\"637\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"2789\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1655\",\"typeID\":\"Icon\",\"zOrder\":\"638\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"759\",\"y\":\"2869\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1656\",\"typeID\":\"Icon\",\"zOrder\":\"639\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"759\",\"y\":\"2869\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1657\",\"typeID\":\"Icon\",\"zOrder\":\"640\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"633\",\"y\":\"3009\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1658\",\"typeID\":\"Icon\",\"zOrder\":\"641\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"633\",\"y\":\"3009\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1659\",\"typeID\":\"Icon\",\"zOrder\":\"642\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"137\",\"y\":\"2928\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1660\",\"typeID\":\"Icon\",\"zOrder\":\"643\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"137\",\"y\":\"2928\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1661\",\"typeID\":\"Icon\",\"zOrder\":\"644\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1260\",\"y\":\"2501\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1662\",\"typeID\":\"Icon\",\"zOrder\":\"645\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1260\",\"y\":\"2501\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1663\",\"typeID\":\"Icon\",\"zOrder\":\"646\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1029\",\"y\":\"2517\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1664\",\"typeID\":\"Icon\",\"zOrder\":\"647\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1029\",\"y\":\"2517\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1665\",\"typeID\":\"Icon\",\"zOrder\":\"648\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"496\",\"y\":\"2516\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1666\",\"typeID\":\"Icon\",\"zOrder\":\"649\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"496\",\"y\":\"2516\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1667\",\"typeID\":\"Icon\",\"zOrder\":\"650\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1037\",\"y\":\"3006\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1668\",\"typeID\":\"Icon\",\"zOrder\":\"651\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1037\",\"y\":\"3006\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1669\",\"typeID\":\"Icon\",\"zOrder\":\"652\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"2944\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1670\",\"typeID\":\"Icon\",\"zOrder\":\"653\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"2944\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1671\",\"typeID\":\"Icon\",\"zOrder\":\"654\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"2995\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1672\",\"typeID\":\"Icon\",\"zOrder\":\"655\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"2995\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1673\",\"typeID\":\"Icon\",\"zOrder\":\"656\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"3042\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1674\",\"typeID\":\"Icon\",\"zOrder\":\"657\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"3042\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1675\",\"typeID\":\"Icon\",\"zOrder\":\"658\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"3042\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1676\",\"typeID\":\"Icon\",\"zOrder\":\"659\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"3088\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1677\",\"typeID\":\"Icon\",\"zOrder\":\"660\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"3088\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1678\",\"typeID\":\"Icon\",\"zOrder\":\"661\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1315\",\"y\":\"3088\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1679\",\"typeID\":\"Icon\",\"zOrder\":\"662\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"3132\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1680\",\"typeID\":\"Icon\",\"zOrder\":\"663\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"3132\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1681\",\"typeID\":\"Icon\",\"zOrder\":\"664\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"3132\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1682\",\"typeID\":\"Icon\",\"zOrder\":\"665\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"3182\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1683\",\"typeID\":\"Icon\",\"zOrder\":\"666\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"3182\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1684\",\"typeID\":\"Icon\",\"zOrder\":\"667\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1316\",\"y\":\"3182\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1685\",\"typeID\":\"Icon\",\"zOrder\":\"668\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"666\",\"y\":\"3131\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1686\",\"typeID\":\"Icon\",\"zOrder\":\"669\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"666\",\"y\":\"3131\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1687\",\"typeID\":\"Icon\",\"zOrder\":\"670\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1128\",\"y\":\"2854\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1688\",\"typeID\":\"Icon\",\"zOrder\":\"671\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1128\",\"y\":\"2854\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1689\",\"typeID\":\"Icon\",\"zOrder\":\"672\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1129\",\"y\":\"2905\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1690\",\"typeID\":\"Icon\",\"zOrder\":\"673\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1129\",\"y\":\"2905\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1691\",\"typeID\":\"Icon\",\"zOrder\":\"674\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1129\",\"y\":\"2905\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1692\",\"typeID\":\"Icon\",\"zOrder\":\"675\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"927\",\"y\":\"3097\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1693\",\"typeID\":\"Icon\",\"zOrder\":\"676\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"927\",\"y\":\"3097\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1694\",\"typeID\":\"Icon\",\"zOrder\":\"678\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"176\",\"y\":\"3313\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1695\",\"typeID\":\"Icon\",\"zOrder\":\"679\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"176\",\"y\":\"3313\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1696\",\"typeID\":\"Icon\",\"zOrder\":\"681\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1001\",\"y\":\"2641\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1697\",\"typeID\":\"Icon\",\"zOrder\":\"682\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1001\",\"y\":\"2641\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1698\",\"typeID\":\"Label\",\"zOrder\":\"109\",\"measuredW\":\"104\",\"measuredH\":\"28\",\"x\":\"1089\",\"y\":\"258\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"roadmap.sh\"}},{\"ID\":\"1699\",\"typeID\":\"Label\",\"zOrder\":\"110\",\"measuredW\":\"37\",\"measuredH\":\"28\",\"x\":\"1024\",\"y\":\"258\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"http\"}},{\"ID\":\"1700\",\"typeID\":\"Label\",\"zOrder\":\"111\",\"measuredW\":\"6\",\"measuredH\":\"28\",\"x\":\"1061\",\"y\":\"258\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"size\":\"20\",\"text\":\":\"}},{\"ID\":\"1701\",\"typeID\":\"Label\",\"zOrder\":\"112\",\"measuredW\":\"10\",\"measuredH\":\"28\",\"x\":\"1068\",\"y\":\"259\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"}},{\"ID\":\"1702\",\"typeID\":\"Label\",\"zOrder\":\"113\",\"measuredW\":\"10\",\"measuredH\":\"28\",\"x\":\"1076\",\"y\":\"259\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"}},{\"ID\":\"1703\",\"typeID\":\"Icon\",\"zOrder\":\"164\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"174\",\"y\":\"204\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1704\",\"typeID\":\"Icon\",\"zOrder\":\"165\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"174\",\"y\":\"204\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1705\",\"typeID\":\"TextArea\",\"zOrder\":\"253\",\"w\":\"221\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"148\",\"y\":\"2000\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1706\",\"typeID\":\"Label\",\"zOrder\":\"254\",\"w\":\"62\",\"measuredW\":\"63\",\"measuredH\":\"25\",\"x\":\"228\",\"y\":\"2008\",\"properties\":{\"size\":\"17\",\"text\":\"Emotion\"}},{\"ID\":\"1707\",\"typeID\":\"Label\",\"zOrder\":\"263\",\"measuredW\":\"160\",\"measuredH\":\"24\",\"x\":\"210\",\"y\":\"301\",\"properties\":{\"size\":\"16\",\"text\":\"I wouldn't recommend\"}},{\"ID\":\"1708\",\"typeID\":\"Icon\",\"zOrder\":\"264\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"174\",\"y\":\"301\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1709\",\"typeID\":\"TextArea\",\"zOrder\":\"328\",\"w\":\"216\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"141\",\"y\":\"2294\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1710\",\"typeID\":\"Label\",\"zOrder\":\"329\",\"w\":\"164\",\"measuredW\":\"157\",\"measuredH\":\"25\",\"x\":\"167\",\"y\":\"2302\",\"properties\":{\"size\":\"17\",\"text\":\"react-testing-library\"}},{\"ID\":\"1711\",\"typeID\":\"TextArea\",\"zOrder\":\"330\",\"w\":\"216\",\"h\":\"37\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"141\",\"y\":\"2382\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1712\",\"typeID\":\"Label\",\"zOrder\":\"331\",\"w\":\"68\",\"measuredW\":\"64\",\"measuredH\":\"25\",\"x\":\"216\",\"y\":\"2388\",\"properties\":{\"size\":\"17\",\"text\":\"Enzyme\"}},{\"ID\":\"1713\",\"typeID\":\"TextArea\",\"zOrder\":\"332\",\"w\":\"216\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"141\",\"y\":\"2249\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1714\",\"typeID\":\"Label\",\"zOrder\":\"333\",\"w\":\"39\",\"measuredW\":\"35\",\"measuredH\":\"25\",\"x\":\"230\",\"y\":\"2257\",\"properties\":{\"size\":\"17\",\"text\":\"Jest\"}},{\"ID\":\"1715\",\"typeID\":\"TextArea\",\"zOrder\":\"334\",\"w\":\"216\",\"h\":\"39\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"141\",\"y\":\"2338\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1716\",\"typeID\":\"Label\",\"zOrder\":\"335\",\"w\":\"70\",\"measuredW\":\"67\",\"measuredH\":\"25\",\"x\":\"215\",\"y\":\"2345\",\"properties\":{\"size\":\"17\",\"text\":\"Cypress\"}},{\"ID\":\"1717\",\"typeID\":\"Label\",\"zOrder\":\"336\",\"w\":\"205\",\"measuredW\":\"193\",\"measuredH\":\"24\",\"x\":\"147\",\"y\":\"2428\",\"properties\":{\"size\":\"16\",\"text\":\"You can fill all your testing\"}},{\"ID\":\"1718\",\"typeID\":\"Label\",\"zOrder\":\"337\",\"w\":\"165\",\"measuredW\":\"160\",\"measuredH\":\"24\",\"x\":\"147\",\"y\":\"2453\",\"properties\":{\"size\":\"16\",\"text\":\"needs with just these.\"}},{\"ID\":\"1719\",\"typeID\":\"TextArea\",\"zOrder\":\"338\",\"w\":\"405\",\"h\":\"158\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"395\",\"y\":\"2259\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1720\",\"typeID\":\"Label\",\"zOrder\":\"339\",\"measuredW\":\"155\",\"measuredH\":\"26\",\"x\":\"520\",\"y\":\"2278\",\"properties\":{\"bold\":\"true\",\"size\":\"18\",\"text\":\"Testing your Apps\"}},{\"ID\":\"1722\",\"typeID\":\"TextArea\",\"zOrder\":\"343\",\"w\":\"93\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"504\",\"y\":\"2426\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1723\",\"typeID\":\"Label\",\"zOrder\":\"344\",\"w\":\"38\",\"measuredW\":\"36\",\"measuredH\":\"25\",\"x\":\"532\",\"y\":\"2435\",\"properties\":{\"size\":\"17\",\"text\":\"Chai\"}},{\"ID\":\"1724\",\"typeID\":\"TextArea\",\"zOrder\":\"345\",\"w\":\"93\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"504\",\"y\":\"2426\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1725\",\"typeID\":\"TextArea\",\"zOrder\":\"346\",\"w\":\"75\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"605\",\"y\":\"2426\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1726\",\"typeID\":\"Label\",\"zOrder\":\"347\",\"w\":\"32\",\"measuredW\":\"28\",\"measuredH\":\"25\",\"x\":\"627\",\"y\":\"2435\",\"properties\":{\"size\":\"17\",\"text\":\"Ava\"}},{\"ID\":\"1727\",\"typeID\":\"TextArea\",\"zOrder\":\"348\",\"w\":\"75\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"605\",\"y\":\"2426\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1728\",\"typeID\":\"TextArea\",\"zOrder\":\"349\",\"w\":\"112\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"688\",\"y\":\"2425\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1729\",\"typeID\":\"Label\",\"zOrder\":\"350\",\"w\":\"67\",\"measuredW\":\"65\",\"measuredH\":\"25\",\"x\":\"711\",\"y\":\"2434\",\"properties\":{\"size\":\"17\",\"text\":\"Jasmine\"}},{\"ID\":\"1730\",\"typeID\":\"TextArea\",\"zOrder\":\"351\",\"w\":\"112\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"688\",\"y\":\"2425\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1731\",\"typeID\":\"TextArea\",\"zOrder\":\"352\",\"w\":\"101\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"395\",\"y\":\"2425\",\"properties\":{\"backgroundAlpha\":\"0.5\",\"borderColor\":\"16777215\",\"color\":\"10066329\"}},{\"ID\":\"1732\",\"typeID\":\"Label\",\"zOrder\":\"353\",\"w\":\"55\",\"measuredW\":\"51\",\"measuredH\":\"25\",\"x\":\"418\",\"y\":\"2434\",\"properties\":{\"size\":\"17\",\"text\":\"Mocha\"}},{\"ID\":\"1733\",\"typeID\":\"TextArea\",\"zOrder\":\"354\",\"w\":\"101\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"395\",\"y\":\"2425\",\"properties\":{\"backgroundAlpha\":\"0.25\",\"borderColor\":\"6710886\",\"color\":\"15658734\"}},{\"ID\":\"1734\",\"typeID\":\"TextInput\",\"zOrder\":\"364\",\"w\":\"177\",\"measuredW\":\"151\",\"measuredH\":\"32\",\"x\":\"169\",\"y\":\"2616\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Service Workers\"}},{\"ID\":\"1735\",\"typeID\":\"TextInput\",\"zOrder\":\"365\",\"w\":\"177\",\"measuredW\":\"79\",\"measuredH\":\"32\",\"x\":\"169\",\"y\":\"2542\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Storage\"}},{\"ID\":\"1736\",\"typeID\":\"TextInput\",\"zOrder\":\"366\",\"w\":\"177\",\"measuredW\":\"84\",\"measuredH\":\"32\",\"x\":\"169\",\"y\":\"2653\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Location\"}},{\"ID\":\"1737\",\"typeID\":\"TextInput\",\"zOrder\":\"367\",\"w\":\"177\",\"measuredW\":\"116\",\"measuredH\":\"32\",\"x\":\"169\",\"y\":\"2691\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Notifications\"}},{\"ID\":\"1738\",\"typeID\":\"TextInput\",\"zOrder\":\"368\",\"w\":\"177\",\"measuredW\":\"167\",\"measuredH\":\"32\",\"x\":\"169\",\"y\":\"2728\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Device Orientation\"}},{\"ID\":\"1739\",\"typeID\":\"TextInput\",\"zOrder\":\"369\",\"w\":\"177\",\"measuredW\":\"95\",\"measuredH\":\"32\",\"x\":\"169\",\"y\":\"2765\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Payments\"}},{\"ID\":\"1740\",\"typeID\":\"TextInput\",\"zOrder\":\"370\",\"w\":\"177\",\"measuredW\":\"110\",\"measuredH\":\"32\",\"x\":\"169\",\"y\":\"2802\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Credentials\"}},{\"ID\":\"1741\",\"typeID\":\"TextInput\",\"zOrder\":\"371\",\"w\":\"177\",\"measuredW\":\"122\",\"measuredH\":\"32\",\"x\":\"169\",\"y\":\"2579\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Web Sockets\"}},{\"ID\":\"1742\",\"typeID\":\"Label\",\"zOrder\":\"372\",\"w\":\"156\",\"measuredW\":\"156\",\"measuredH\":\"25\",\"x\":\"180\",\"y\":\"2847\",\"properties\":{\"size\":\"17\",\"text\":\"Learn different Web\"}},{\"ID\":\"1743\",\"typeID\":\"Label\",\"zOrder\":\"373\",\"w\":\"148\",\"measuredW\":\"148\",\"measuredH\":\"25\",\"x\":\"184\",\"y\":\"2873\",\"properties\":{\"size\":\"17\",\"text\":\"APIs used in PWAs\"}},{\"ID\":\"1744\",\"typeID\":\"Label\",\"zOrder\":\"380\",\"w\":\"185\",\"measuredW\":\"178\",\"measuredH\":\"25\",\"x\":\"435\",\"y\":\"2850\",\"properties\":{\"size\":\"17\",\"text\":\"Calculating, Measuring\"}},{\"ID\":\"1745\",\"typeID\":\"Label\",\"zOrder\":\"381\",\"w\":\"224\",\"measuredW\":\"215\",\"measuredH\":\"25\",\"x\":\"415\",\"y\":\"2877\",\"properties\":{\"size\":\"17\",\"text\":\"and improving performance\"}},{\"ID\":\"1746\",\"typeID\":\"TextArea\",\"zOrder\":\"499\",\"w\":\"146\",\"h\":\"43\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1147\",\"y\":\"1428\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1747\",\"typeID\":\"Label\",\"zOrder\":\"500\",\"w\":\"74\",\"measuredW\":\"71\",\"measuredH\":\"25\",\"x\":\"1186\",\"y\":\"1438\",\"properties\":{\"size\":\"17\",\"text\":\"PostCSS\"}},{\"ID\":\"1748\",\"typeID\":\"Icon\",\"zOrder\":\"501\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1278\",\"y\":\"1423\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1749\",\"typeID\":\"Icon\",\"zOrder\":\"502\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1278\",\"y\":\"1423\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1750\",\"typeID\":\"TextArea\",\"zOrder\":\"503\",\"w\":\"146\",\"h\":\"41\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"1147\",\"y\":\"1381\",\"properties\":{\"color\":\"16776960\"}},{\"ID\":\"1751\",\"typeID\":\"Label\",\"zOrder\":\"504\",\"w\":\"46\",\"measuredW\":\"41\",\"measuredH\":\"25\",\"x\":\"1197\",\"y\":\"1389\",\"properties\":{\"size\":\"17\",\"text\":\"Sass\"}},{\"ID\":\"1752\",\"typeID\":\"Icon\",\"zOrder\":\"505\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1279\",\"y\":\"1374\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1753\",\"typeID\":\"Icon\",\"zOrder\":\"506\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"1279\",\"y\":\"1374\",\"properties\":{\"color\":\"10066329\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1754\",\"typeID\":\"Icon\",\"zOrder\":\"530\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"174\",\"y\":\"236\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1755\",\"typeID\":\"Icon\",\"zOrder\":\"531\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"174\",\"y\":\"236\",\"properties\":{\"color\":\"16777215\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}}},{\"ID\":\"1756\",\"typeID\":\"Icon\",\"zOrder\":\"532\",\"measuredW\":\"24\",\"measuredH\":\"24\",\"x\":\"174\",\"y\":\"236\",\"properties\":{\"color\":\"3700253\",\"icon\":{\"ID\":\"check-circle\",\"size\":\"small\"}}},{\"ID\":\"1757\",\"typeID\":\"TextArea\",\"zOrder\":\"537\",\"w\":\"221\",\"h\":\"40\",\"measuredW\":\"200\",\"measuredH\":\"140\",\"x\":\"148\",\"y\":\"1954\",\"properties\":{\"color\":\"16770457\"}},{\"ID\":\"1758\",\"typeID\":\"Label\",\"zOrder\":\"538\",\"w\":\"90\",\"measuredW\":\"89\",\"measuredH\":\"25\",\"x\":\"214\",\"y\":\"1962\",\"properties\":{\"size\":\"17\",\"text\":\"Styled JSX\"}},{\"ID\":\"1759\",\"typeID\":\"Label\",\"zOrder\":\"340\",\"w\":\"349\",\"measuredW\":\"337\",\"measuredH\":\"25\",\"x\":\"417\",\"y\":\"2345\",\"properties\":{\"size\":\"17\",\"text\":\"and {color:blue}Functional{color} tests and learn how to write\"}},{\"ID\":\"1760\",\"typeID\":\"Label\",\"zOrder\":\"341\",\"w\":\"302\",\"measuredW\":\"280\",\"measuredH\":\"25\",\"x\":\"416\",\"y\":\"2374\",\"properties\":{\"size\":\"17\",\"text\":\"them with the tools listed on the left.\"}},{\"ID\":\"1761\",\"typeID\":\"Label\",\"zOrder\":\"342\",\"w\":\"362\",\"measuredW\":\"371\",\"measuredH\":\"25\",\"x\":\"416\",\"y\":\"2315\",\"properties\":{\"size\":\"17\",\"text\":\"Learn the difference between {color:blue}Unit{color}, {color:blue}Integration{color}, \"}}]},\"attributes\":{\"name\":\"New Wireframe 3\",\"order\":1000017.5847047294,\"parentID\":null},\"resourceID\":\"840EFF24-F5D8-4031-AA72-9444A1C2AF46\",\"mockupH\":\"3449\",\"mockupW\":\"1215\",\"measuredW\":\"1340\",\"measuredH\":\"3618\",\"version\":\"1.0\"}}");

/***/ }),

/***/ "./content/project/intro-map.json":
/*!****************************************!*\
  !*** ./content/project/intro-map.json ***!
  \****************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {


/***/ }),

/***/ "./content/roadmaps.json":
/*!*******************************!*\
  !*** ./content/roadmaps.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {


/***/ }),

/***/ "./content/roadmaps/1-frontend/0-About/0-Summary-detailed.md":
/*!*******************************************************************!*\
  !*** ./content/roadmaps/1-frontend/0-About/0-Summary-detailed.md ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }, {
