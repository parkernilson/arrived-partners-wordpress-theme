/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/skip-link-focus-fix */ \"./src/js/skip-link-focus-fix.js\");\n/* harmony import */ var _js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/MzcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vanMvbmF2aWdhdGlvbic7XG5pbXBvcnQgJy4vanMvc2tpcC1saW5rLWZvY3VzLWZpeCc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * File navigation.js.\r\n *\r\n * Handles toggling the navigation menu for small screens and enables TAB key\r\n * navigation support for dropdown menus.\r\n */\n(function () {\n  //TODO: I don't know how to make this work.\n  var sidebarMenu, container, button, menu, links, i, len;\n  container = document.getElementById('site-navigation');\n\n  if (!container) {\n    return;\n  } // button = container.getElementsByTagName('button')[0];\n\n\n  button = container.getElementsByClassName('menu-toggle')[0];\n\n  if ('undefined' === typeof button) {\n    return;\n  } // menu = container.getElementsByTagName('ul')[0];\n\n\n  sidebarMenu = document.getElementById('sidebar-menu'); // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof sidebarMenu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  sidebarMenu.setAttribute('aria-expanded', 'false');\n\n  if (-1 === sidebarMenu.className.indexOf('nav-menu')) {\n    sidebarMenu.className += ' nav-menu';\n  } // button.onclick = function() {\n\n\n  button.addEventListener(\"click\", function () {\n    console.log('click!');\n\n    if (-1 !== sidebarMenu.className.indexOf('toggled')) {\n      // container.className = container.className.replace(' toggled', '');\n      sidebarMenu.className = sidebarMenu.className.replace(' toggled', '');\n      button.setAttribute('aria-expanded', 'false'); // menu.setAttribute('aria-expanded', 'false');\n\n      sidebarMenu.setAttribute('aria-expanded', 'false');\n    } else {\n      // container.className += ' toggled';\n      sidebarMenu.className += ' toggled';\n      button.setAttribute('aria-expanded', 'true'); // menu.setAttribute('aria-expanded', 'true');\n\n      sidebarMenu.setAttribute('aria-expanded', 'true');\n    }\n  }); //TODO: I don't know what this does.\n  // // Get all the link elements within the menu.\n  // links = menu.getElementsByTagName('a');\n  // // Each time a menu link is focused or blurred, toggle focus.\n  // for (i = 0, len = links.length; i < len; i++) {\n  //   links[i].addEventListener('focus', toggleFocus, true);\n  //   links[i].addEventListener('blur', toggleFocus, true);\n  // }\n  // /**\n  //  * Sets or removes .focus class on an element.\n  //  */\n  // function toggleFocus() {\n  //   var self = this;\n  //   // Move up through the ancestors of the current link until we hit .nav-menu.\n  //   while (-1 === self.className.indexOf('nav-menu')) {\n  //     // On li elements toggle the class .focus.\n  //     if ('li' === self.tagName.toLowerCase()) {\n  //       if (-1 !== self.className.indexOf('focus')) {\n  //         self.className = self.className.replace(' focus', '');\n  //       } else {\n  //         self.className += ' focus';\n  //       }\n  //     }\n  //     self = self.parentElement;\n  //   }\n  // }\n  // /**\n  //  * Toggles `focus` class to allow submenu access on tablets.\n  //  */\n  // (function(container) {\n  //   var touchStartFn,\n  //     i,\n  //     parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');\n  //   if ('ontouchstart' in window) {\n  //     touchStartFn = function(e) {\n  //       var menuItem = this.parentNode,\n  //         i;\n  //       if (!menuItem.classList.contains('focus')) {\n  //         e.preventDefault();\n  //         for (i = 0; i < menuItem.parentNode.children.length; ++i) {\n  //           if (menuItem === menuItem.parentNode.children[i]) {\n  //             continue;\n  //           }\n  //           menuItem.parentNode.children[i].classList.remove('focus');\n  //         }\n  //         menuItem.classList.add('focus');\n  //       } else {\n  //         menuItem.classList.remove('focus');\n  //       }\n  //     };\n  //     for (i = 0; i < parentLink.length; ++i) {\n  //       parentLink[i].addEventListener('touchstart', touchStartFn, false);\n  //     }\n  //   }\n  // })(container);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbmF2aWdhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9uYXZpZ2F0aW9uLmpzPzIzNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbGUgbmF2aWdhdGlvbi5qcy5cclxuICpcclxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zIGFuZCBlbmFibGVzIFRBQiBrZXlcclxuICogbmF2aWdhdGlvbiBzdXBwb3J0IGZvciBkcm9wZG93biBtZW51cy5cclxuICovXG4oZnVuY3Rpb24gKCkge1xuICAvL1RPRE86IEkgZG9uJ3Qga25vdyBob3cgdG8gbWFrZSB0aGlzIHdvcmsuXG4gIHZhciBzaWRlYmFyTWVudSwgY29udGFpbmVyLCBidXR0b24sIG1lbnUsIGxpbmtzLCBpLCBsZW47XG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLW5hdmlnYXRpb24nKTtcblxuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHJldHVybjtcbiAgfSAvLyBidXR0b24gPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpWzBdO1xuXG5cbiAgYnV0dG9uID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUtdG9nZ2xlJylbMF07XG5cbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgYnV0dG9uKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIG1lbnUgPSBjb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJylbMF07XG5cblxuICBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyLW1lbnUnKTsgLy8gSGlkZSBtZW51IHRvZ2dsZSBidXR0b24gaWYgbWVudSBpcyBlbXB0eSBhbmQgcmV0dXJuIGVhcmx5LlxuXG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHNpZGViYXJNZW51KSB7XG4gICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgaWYgKC0xID09PSBzaWRlYmFyTWVudS5jbGFzc05hbWUuaW5kZXhPZignbmF2LW1lbnUnKSkge1xuICAgIHNpZGViYXJNZW51LmNsYXNzTmFtZSArPSAnIG5hdi1tZW51JztcbiAgfSAvLyBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrIScpO1xuXG4gICAgaWYgKC0xICE9PSBzaWRlYmFyTWVudS5jbGFzc05hbWUuaW5kZXhPZigndG9nZ2xlZCcpKSB7XG4gICAgICAvLyBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCcgdG9nZ2xlZCcsICcnKTtcbiAgICAgIHNpZGViYXJNZW51LmNsYXNzTmFtZSA9IHNpZGViYXJNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCcgdG9nZ2xlZCcsICcnKTtcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTsgLy8gbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgICAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gJyB0b2dnbGVkJztcbiAgICAgIHNpZGViYXJNZW51LmNsYXNzTmFtZSArPSAnIHRvZ2dsZWQnO1xuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7IC8vIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcblxuICAgICAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB9XG4gIH0pOyAvL1RPRE86IEkgZG9uJ3Qga25vdyB3aGF0IHRoaXMgZG9lcy5cbiAgLy8gLy8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnUuXG4gIC8vIGxpbmtzID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuICAvLyAvLyBFYWNoIHRpbWUgYSBtZW51IGxpbmsgaXMgZm9jdXNlZCBvciBibHVycmVkLCB0b2dnbGUgZm9jdXMuXG4gIC8vIGZvciAoaSA9IDAsIGxlbiA9IGxpbmtzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gIC8vICAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0b2dnbGVGb2N1cywgdHJ1ZSk7XG4gIC8vICAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRvZ2dsZUZvY3VzLCB0cnVlKTtcbiAgLy8gfVxuICAvLyAvKipcbiAgLy8gICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuICAvLyAgKi9cbiAgLy8gZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG4gIC8vICAgdmFyIHNlbGYgPSB0aGlzO1xuICAvLyAgIC8vIE1vdmUgdXAgdGhyb3VnaCB0aGUgYW5jZXN0b3JzIG9mIHRoZSBjdXJyZW50IGxpbmsgdW50aWwgd2UgaGl0IC5uYXYtbWVudS5cbiAgLy8gICB3aGlsZSAoLTEgPT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ25hdi1tZW51JykpIHtcbiAgLy8gICAgIC8vIE9uIGxpIGVsZW1lbnRzIHRvZ2dsZSB0aGUgY2xhc3MgLmZvY3VzLlxuICAvLyAgICAgaWYgKCdsaScgPT09IHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gIC8vICAgICAgIGlmICgtMSAhPT0gc2VsZi5jbGFzc05hbWUuaW5kZXhPZignZm9jdXMnKSkge1xuICAvLyAgICAgICAgIHNlbGYuY2xhc3NOYW1lID0gc2VsZi5jbGFzc05hbWUucmVwbGFjZSgnIGZvY3VzJywgJycpO1xuICAvLyAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIHNlbGYuY2xhc3NOYW1lICs9ICcgZm9jdXMnO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgICBzZWxmID0gc2VsZi5wYXJlbnRFbGVtZW50O1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyAvKipcbiAgLy8gICogVG9nZ2xlcyBgZm9jdXNgIGNsYXNzIHRvIGFsbG93IHN1Ym1lbnUgYWNjZXNzIG9uIHRhYmxldHMuXG4gIC8vICAqL1xuICAvLyAoZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gIC8vICAgdmFyIHRvdWNoU3RhcnRGbixcbiAgLy8gICAgIGksXG4gIC8vICAgICBwYXJlbnRMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSwgLnBhZ2VfaXRlbV9oYXNfY2hpbGRyZW4gPiBhJyk7XG4gIC8vICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAvLyAgICAgdG91Y2hTdGFydEZuID0gZnVuY3Rpb24oZSkge1xuICAvLyAgICAgICB2YXIgbWVudUl0ZW0gPSB0aGlzLnBhcmVudE5vZGUsXG4gIC8vICAgICAgICAgaTtcbiAgLy8gICAgICAgaWYgKCFtZW51SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzJykpIHtcbiAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgICAgICAgZm9yIChpID0gMDsgaSA8IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgLy8gICAgICAgICAgIGlmIChtZW51SXRlbSA9PT0gbWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbltpXSkge1xuICAvLyAgICAgICAgICAgICBjb250aW51ZTtcbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgIG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9O1xuICAvLyAgICAgZm9yIChpID0gMDsgaSA8IHBhcmVudExpbmsubGVuZ3RoOyArK2kpIHtcbiAgLy8gICAgICAgcGFyZW50TGlua1tpXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydEZuLCBmYWxzZSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9KShjb250YWluZXIpO1xufSkoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/navigation.js\n");

/***/ }),

/***/ "./src/js/skip-link-focus-fix.js":
/*!***************************************!*\
  !*** ./src/js/skip-link-focus-fix.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * File skip-link-focus-fix.js.\r\n *\r\n * Helps with accessibility for keyboard only users.\r\n *\r\n * Learn more: https://git.io/vWdr2\r\n */\n(function () {\n  var isIe = /(trident|msie)/i.test(navigator.userAgent);\n\n  if (isIe && document.getElementById && window.addEventListener) {\n    window.addEventListener('hashchange', function () {\n      var id = location.hash.substring(1),\n          element;\n\n      if (!/^[A-z0-9_-]+$/.test(id)) {\n        return;\n      }\n\n      element = document.getElementById(id);\n\n      if (element) {\n        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n          element.tabIndex = -1;\n        }\n\n        element.focus();\n      }\n    }, false);\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9za2lwLWxpbmstZm9jdXMtZml4LmpzP2VjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cclxuICpcclxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxyXG4gKlxyXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxyXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBpc0llID0gLyh0cmlkZW50fG1zaWUpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBpZiAoaXNJZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgZWxlbWVudDtcblxuICAgICAgaWYgKCEvXltBLXowLTlfLV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIS9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KGVsZW1lbnQudGFnTmFtZSkpIHtcbiAgICAgICAgICBlbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9XG59KSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/skip-link-focus-fix.js\n");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zYWM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/style.scss\n");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });