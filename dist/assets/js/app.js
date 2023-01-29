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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// tabs\n\n$('[data-tab-nav] li').on('click', function(ev) {\n  ev.preventDefault();\n  $([$(this)[0], $($(this).data('href'))[0]]).addClass('active-tab').siblings('.active-tab').removeClass('active-tab');\n});\n\n// show sidebar on mobile\n\n$('.sidebar__open').click(function(e) {\n  e.preventDefault();\n  $('.sidebar').toggleClass('active');\n})\n\n// select\n\nconst element = document.querySelectorAll('.select-default');\n    element.forEach(item => {\n        const example = new Choices(item, {\n          placeholder: false,\n          placeholderValue: null,\n        }); \n    })\n\n// table\n\n$(document).ready(function () {\n  $('#example').DataTable();\n});\n\nconst tableData = [\n    {\n      name: 'Grand Hotel du Palais Royal',\n      supplier: 'Fairmont',\n      location: 'Paris, France',\n      vibe: 'Sophisticated',\n      perks: 'Virtuoso',\n      from: '10.5k',\n    },\n    {\n      name: 'Rosewood Little Dix Bay',\n      supplier: 'Rosewood',\n      location: 'Virgin Gorda, BVI',\n      vibe: 'Comfortable Beach',\n      perks: 'Virtuoso',\n      from: '12.3k',\n    },\n    {\n      name: 'Vila Planinka',\n      supplier: 'Fairmont',\n      location: 'Paris, France',\n      vibe: 'Urban Chic',\n      perks: 'Virtuoso',\n      from: '9.5k',\n    },\n    {\n      name: 'Fairmont Olympic Hotel',\n      supplier: 'Fairmont',\n      location: 'Paris, France',\n      vibe: 'Business',\n      perks: 'Fairmont Plus',\n      from: '8.8k',\n    },\n    {\n      name: 'Palmaia - House of AiA',\n      supplier: 'Palmaia',\n      location: 'Paris, France',\n      vibe: 'Party Scene',\n      perks: 'Virtuoso',\n      from: '8.5k',\n    },\n    {\n      name: 'InterContinental Amstel',\n      supplier: 'InterContinental',\n      location: 'Amsterdam, Netherlands',\n      vibe: 'Boutique',\n      perks: 'Virtuoso',\n      from: '7.2k',\n    },\n    {\n      name: 'Aman Tokyo',\n      supplier: 'Aman',\n      location: 'Paris, France',\n      vibe: 'Quiet Comfort',\n      perks: 'Virtuoso',\n      from: '11.8k',\n    },\n    {\n      name: 'Oasy Hotel',\n      supplier: 'IHG',\n      location: 'London, UK',\n      vibe: 'Urban Living',\n      perks: 'Virtuoso',\n      from: '7.4k',\n    },\n    {\n      name: 'Como Uma Punakha',\n      supplier: 'IHG',\n      location: 'Mumbai, India',\n      vibe: 'Hip/Trendy',\n      perks: 'Virtuoso',\n      from: '6.3k',\n    },\n    {\n      name: 'Central Private Hotel',\n      supplier: 'InterContinental',\n      location: 'Rotterdam, Netherlands',\n      vibe: 'Busy Urban',\n      perks: 'Virtuoso',\n      from: '6.5k',\n    },\n    {\n      name: 'Capella Bangkok',\n      supplier: 'InterContinental',\n      location: 'Bangkok, Thailand',\n      vibe: 'Party Scene',\n      perks: 'Virtuoso',\n      from: '4.7k',\n    },\n    {\n      name: 'The Londoner',\n      supplier: 'Fairmont',\n      location: 'Bangkok, Thailand',\n      vibe: 'Busy Urban',\n      perks: 'Virtuoso',\n      from: '4.8k',\n    },\n    {\n      name: 'St. Regis Hong Kong',\n      supplier: 'Marriott',\n      location: 'Hong Kong',\n      vibe: 'Party Scene',\n      perks: 'Multiple',\n      from: '4.1k',\n    },\n    {\n      name: 'Ritz-Carlton, Turks & Caicos',\n      supplier: 'Ritz-Carlton',\n      location: 'Turks & Caicos',\n      vibe: 'Party Scene',\n      perks: 'Multiple',\n      from: '9.3k',\n    },\n    {\n      name: 'Ritz-Carlton, Aruba',\n      supplier: 'Ritz-Carlton',\n      location: 'Aruba',\n      vibe: 'Party Scene',\n      perks: 'Virtuoso',\n      from: '8.5k',\n    },\n    {\n      name: 'The Bedford',\n      supplier: 'IHG',\n      location: 'Coppenhagen',\n      vibe: 'Quiet Luxury',\n      perks: 'Virtuoso',\n      from: '5.1k',\n    },\n    {\n      name: 'Fairmont London',\n      supplier: 'Fairmont',\n      location: 'London, UK',\n      vibe: 'Busy Urban',\n      perks: 'Virtuoso',\n      from: '6.5k',\n    },\n  ];\n  \n  let dataJson = [...tableData];\n  \n  const listSlider = document.querySelector(\".main-page__item\");\n  \n  const sliderFn = ({ name, supplier, location, vibe, perks, from }) => {\n    const template = `\n      <tr>\n        <td class=\"main-page__table-check\">\n          <label class=\"custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-checkbox__input\">\n            <span class=\"custom-checkbox__input-fake\"></span>\n          </label>\n        </td>\n        <td class=\"main-page__table-name\">${name}</td>\n        <td>${supplier}</td>\n        <td class=\"main-page__table__location\">${location}</td>\n        <td>${vibe}</td>\n        <td class=\"main-page__table__perks\">${perks}</td>\n        <td>US$ ${from}</td>\n        <td>\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M4 9.33334V5.33334C4 4.22877 4.89543 3.33334 6 3.33334C7.10457 3.33334 8 4.22877 8 5.33334V10.6667C8 11.7712 8.89543 12.6667 10 12.6667C11.1046 12.6667 12 11.7712 12 10.6667V6.66668\" stroke=\"#6366F1\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <rect x=\"10.6667\" y=\"2\" width=\"2.66667\" height=\"4.66667\" rx=\"1.33333\" stroke=\"#6366F1\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <rect x=\"2.66669\" y=\"9.33334\" width=\"2.66667\" height=\"4.66667\" rx=\"1.33333\" stroke=\"#6366F1\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"10.6667\" cy=\"6.00001\" r=\"0.666667\" stroke=\"#6366F1\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <path d=\"M4 7.33333L6.66667 6L9 8L8 9.33333\" stroke=\"#6366F1\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <path d=\"M2 11.1667C2.20753 11.2698 2.435 11.3267 2.66667 11.3333C3.19381 11.3444 3.69255 11.095 4 10.6667C4.30745 10.2383 4.80619 9.98894 5.33333 9.99999C5.86047 9.98894 6.35922 10.2383 6.66667 10.6667C6.97412 11.095 7.47286 11.3444 8 11.3333C8.52714 11.3444 9.02588 11.095 9.33333 10.6667C9.64078 10.2383 10.1395 9.98894 10.6667 9.99999C11.1938 9.98894 11.6925 10.2383 12 10.6667C12.3075 11.095 12.8062 11.3444 13.3333 11.3333C13.565 11.3267 13.7925 11.2698 14 11.1667\" stroke=\"#6366F1\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99998 14.3333C5.97331 14.3333 4.03198 13.8573 2.33331 13.0113L7.99998 2L13.6666 13.0113C11.9052 13.8837 9.96561 14.3362 7.99998 14.3333Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <path d=\"M3.58667 10.5773C4.99332 11.2955 6.55061 11.6689 8.13 11.6667C9.63071 11.6687 11.1125 11.3316 12.4647 10.6807\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <path d=\"M8.66665 7.33999V7.33333\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <path d=\"M7.33333 9.33334V9.32667\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </td>\n      </tr>\n    `;\n    return template;\n  };\n  \n  dataJson.forEach((item) => {\n    listSlider.insertAdjacentHTML(\"beforeend\", sliderFn(item));\n  });\n\n  // modal\n\n  function initPopup() {\n    $(document).on('click', '.modal__content', function(e) {\n        e.stopPropagation();\n    });\n    \n    let data_modal = document.querySelectorAll('[data-modal]');\n    \n    if(data_modal.length > 0){\n        for(let i = 0; i < data_modal.length; i++){\n            var target;\n            data_modal[i].addEventListener('click', (e) =>\n            {\n                e.preventDefault();\n                if(target !== undefined){\n                    target.classList.remove('modal--show');\n                    $('body').removeClass('lock');\n                }\n                \n                target = document.querySelector(`.modal${data_modal[i].getAttribute('data-modal')}`);\n                target.classList.add('modal--show');\n                $('body').addClass('lock');\n            })\n        }\n    }\n\n    $(document).on('click', '[data-close-modal], .modal', function(e) {\n        e.preventDefault();\n        $('.modal').removeClass('modal--show');\n        $('body').removeClass('lock');\n    });\n}\ninitPopup()\n\n// all checkboxes\n\nconst allCheckboxes = document.querySelector('.all-checkboxes');\nconst checkboxes = document.querySelectorAll('input[type=\"checkbox\"]');\n\nconst checkedAll = () => {\n  for(let checkbox of checkboxes) {\n    if(checkbox.checked === true) {\n      checkbox.checked = false;\n    } else {\n      checkbox.checked = true;\n    }\n  }\n}\n\nallCheckboxes.addEventListener('click', checkedAll);\n\n\n// calendar\n\n$('#datepicker').daterangepicker({\n  \"singleDatePicker\": true,\n  \"autoApply\": true,\n  \"showCustomRangeLabel\": false,\n  \"startDate\": \"01/23/2023\",\n  \"endDate\": \"01/29/2023\",\n  \"opens\": \"center\",\n  \"drops\": \"auto\"\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });