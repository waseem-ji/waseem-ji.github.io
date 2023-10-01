/******/ (() => {
  // webpackBootstrap
  var __webpack_exports__ = {};
  /*!*******************************************!*\
      !*** ./3MIAMq17_ZYLou6i0Yzgl-original.js ***!
      \*******************************************/
  window.cookieyes = window.cookieyes || {};
  const ref = window.cookieyes;
  Object.assign(ref._ckyStore, {
    _ruleData: {
      _countryName: "",
      _regionCode: "",
      _regionName: "",
      _currentLanguage: document.documentElement.lang,
      _geoIPFailed: false,
    },
    _language: {
      _store: new Map(),
      _supportedMap: {
        en: "_hTcDU0w",
      },
      _active: "",
      _default: "en",
      _localeMap: {},
    },
    _banners: {
      910540: "FRVyUDvE",
    },
    _bannerConfig: {},
    _bannerDisplayState: "none",
    _auditTable: {
      _headerKeys: [],
    },
    _isPreview: _ckyCheckPreview(),
  });

  function _ckyRequest(url, method = "GET", data = null) {
    let body = null;
    const headers = {};

    if (method === "POST" && data) {
      body = JSON.stringify(data);
      headers["Content-Type"] = "application/json";
    }

    return fetch(url, {
      method,
      headers,
      body,
    });
  }

  function _ckyPushGTMConsentData() {
    if (arguments[0] && typeof arguments[0] === "object")
      window.dataLayer.push(arguments[0]);
    else window.dataLayer.push(arguments);
  }

  function _ckyGetGTMConsentString(category) {
    return ref._ckyIsCategoryToBeBlocked(category) ? "denied" : "granted";
  }

  function _ckyAttachListener(selector, fn) {
    const item = _ckyFindElement(selector);

    item && item.addEventListener("click", fn);
  }

  function _ckyRemoveElement(selector, removeParent = true) {
    const item = _ckyFindElement(selector, removeParent);

    item && item.remove();
  }

  function _ckyHasClass() {
    return _ckyClassAction("contains", ...arguments);
  }

  function _ckyClassAdd() {
    return _ckyClassAction("add", ...arguments);
  }

  function _ckyClassRemove() {
    return _ckyClassAction("remove", ...arguments);
  }

  function _ckyClassToggle() {
    return _ckyClassAction("toggle", ...arguments);
  }

  function _ckyClassAction(action, selector, className, forParent = true) {
    const item = _ckyFindElement(selector, forParent);

    return item && item.classList[action](className);
  }

  function _ckyFindElement(selector, forParent) {
    let createdSelector = selector;

    switch (true) {
      case selector.startsWith("="):
        createdSelector = `[data-cky-tag="${selector.substring(1)}"]`;

      default:
        break;
    }

    const element = document.querySelector(createdSelector);
    if (!element || (forParent && !element.parentElement)) return null;
    return forParent ? element.parentElement : element;
  }

  function _ckyFireEvent(responseCategories) {
    const consetUpdate = new CustomEvent("cookieyes_consent_update", {
      detail: responseCategories,
    });
    document.dispatchEvent(consetUpdate);
  }

  function _ckyFindHeaders() {
    const languageDictionary = ref._ckyStore._language._store.get(
      ref._ckyStore._language._active
    );

    const headerKeys = [];

    for (const key in languageDictionary)
      if (key.includes(`cky_audit_table_header_`))
        headerKeys.push(key.replace(`cky_audit_table_header_`, ""));

    return headerKeys;
  }

  function _ckyGetValueFromMap(key, dictionary) {
    let allKeys = key.split(".");
    if (/cookies\.(.*\..*)\..*/gm.test(key))
      allKeys = [
        allKeys[0],
        allKeys.slice(1, -1).join("."),
        allKeys[allKeys.length - 1],
      ];
    return allKeys.reduce((obj, i) => (obj ? obj[i] : null), dictionary);
  }

  function _ckyGetTranslation(key) {
    const languageDictionary = ref._ckyStore._language._store.get(
      ref._ckyStore._language._active
    );

    const response = _ckyGetValueFromMap(key, languageDictionary);

    return response || "";
  }

  function _ckyPrepareHTML(htmlContent) {
    const languageDictionary = ref._ckyStore._language._store.get(
      ref._ckyStore._language._active
    );

    const keysToReplace = Object.keys(languageDictionary).reduce(
      (prev, curr) => {
        if (curr.startsWith(`cky_`))
          prev[`[${curr}]`] = languageDictionary[curr] || "";
        return prev;
      },
      {}
    );
    const reToReplace = new RegExp(
      Object.keys(keysToReplace)
        .join("|")
        .replace(/[\[\]]/g, "\\$&"),
      "gi"
    );
    htmlContent = htmlContent.replace(
      reToReplace,
      (matched) => keysToReplace[matched]
    );
    return htmlContent;
  }

  function _ckyCheckPreview() {
    if (!location.search) return false;
    return location.search
      .substring(1)
      .split("&")
      .some((item) => {
        const [key, value] = item
          .split("=")
          .map((val) => decodeURIComponent(val));
        return key === "cky_preview" && value === "true";
      });
  }

  function _ckyToggleAriaExpandStatus(selector, forceDefault = null) {
    const element = _ckyFindElement(selector);

    if (!element) return;
    if (forceDefault)
      return element.setAttribute("aria-expanded", forceDefault);
    const toggleFinalValue =
      element.getAttribute("aria-expanded") === "true" ? "false" : "true";
    element.setAttribute("aria-expanded", toggleFinalValue);
  }

  function _ckyGetIntMapLength(item) {
    return Object.keys(item).length;
  }

  function _ckyReplaceKeysInText(hayStack) {
    const replaceKey = (key, value = null, treatment = 1) => {
      const processedKey = treatment === 1 || value === null ? `[${key}]` : key;
      hayStack = hayStack.replaceAll(
        processedKey,
        value === null ? _ckyGetTranslation(key) : value
      );
    };

    const getFinalText = () => hayStack;

    return [replaceKey, getFinalText];
  }

  function _ckyFindItemFromShortCode(data) {
    return (key) => data.find((code) => code.key === key).content.container;
  }

  function _ckyGetItemListText(list) {
    return list.map((item) => `<li>${item.name}</li>`).join("");
  }

  function _ckyCleanNodesWithClasses(
    list,
    keyPreffix,
    selectedItemID,
    accordionClass = ".cky-accordion-btn"
  ) {
    const itemIDsWithClass = [];
    const activeClass = "cky-accordion-active";
    list.forEach((currItem) => {
      if (currItem.id === selectedItemID) return;
      const currentItemID = `#${keyPreffix}${currItem.id}`;
      if (_ckyHasClass(currentItemID, activeClass, false))
        itemIDsWithClass.push(currentItemID);
    });
    itemIDsWithClass.forEach((currItemID) => {
      _ckyClassRemove(currItemID, activeClass, false);

      _ckyToggleAriaExpandStatus(`${currItemID} ${accordionClass}`, "false");
    });
  }

  function _ckyUnblock() {
    if (navigator.doNotTrack === 1) return;

    const ckyconsent = ref._ckyGetFromStore("consent");

    if (
      ref._ckyStore._bannerConfig.activeLaw === "gdpr" &&
      (!ckyconsent || ckyconsent !== "yes") &&
      ref._ckyStore._categories.every(
        (cat) => cat.isNecessary || ref._ckyGetFromStore(cat.slug) === "no"
      )
    )
      return;
    ref._ckyStore._backupNodes = ref._ckyStore._backupNodes.filter(
      ({ position, node, uniqueID }) => {
        try {
          if (ref._ckyShouldBlockProvider(node.src)) return true;

          if (node.nodeName.toLowerCase() === "script") {
            const scriptNode = document.createElement("script");
            scriptNode.src = node.src;
            scriptNode.type = "text/javascript";
            document[position].appendChild(scriptNode);
          } else {
            const frame = document.getElementById(uniqueID);
            if (!frame) return false;
            const iframe = document.createElement("iframe");
            iframe.src = node.src;
            iframe.width = frame.offsetWidth;
            iframe.height = frame.offsetHeight;
            frame.parentNode.insertBefore(iframe, frame);
            frame.parentNode.removeChild(frame);
          }

          return false;
        } catch (error) {
          console.error(error);
          return false;
        }
      }
    );
  }

  function _ckyClearListeners() {
    ref._nodeListObserver.disconnect();

    document.createElement = ref._ckyCreateElementBackup;
  }

  function _ckyAcceptCookies(choice = "all") {
    const { activeLaw, reloadOnAccept } = ref._ckyStore._bannerConfig;

    ref._ckySetInStore("action", "yes");

    ref._ckySetInStore("consent", choice === "reject" ? "no" : "yes");

    const responseCategories = {
      accepted: [],
      rejected: [],
    };

    for (const category of ref._ckyStore._categories) {
      let valueToSet =
        !category.isNecessary &&
        (choice === "reject" ||
          (choice === "custom" && !_ckyFindCheckBoxValue(category.slug)))
          ? "no"
          : "yes";

      ref._ckySetInStore(`${category.slug}`, valueToSet);

      if (valueToSet === "no") {
        responseCategories.rejected.push(category.slug);

        _ckyRemoveDeadCookies(category);
      } else responseCategories.accepted.push(category.slug);
    }

    _ckyLogCookies();

    if (reloadOnAccept) location.reload();
    else _ckyUnblock();

    _ckyFireEvent(responseCategories);

    _ckySetGoogleConsentMode();

    if (activeLaw === "gdpr") _ckySetCategorySelections(false);
  }

  function _ckySetInitialState() {
    const { activeLaw, shouldFollowGPC } = ref._ckyStore._bannerConfig;

    ref._ckySetInStore(
      "consent",
      activeLaw === "ccpa" && shouldFollowGPC ? "yes" : "no"
    );

    const responseCategories = {
      accepted: [],
      rejected: [],
    };

    for (const category of ref._ckyStore._categories) {
      let valueToSet = "yes";
      if (!category.isNecessary && !category.defaultConsent[activeLaw])
        valueToSet = "no";
      if (valueToSet === "no") responseCategories.rejected.push(category.slug);
      else responseCategories.accepted.push(category.slug);

      ref._ckySetInStore(`${category.slug}`, valueToSet);
    }

    _ckyUnblock();

    _ckyFireEvent(responseCategories);

    _ckySetGoogleConsentMode();
  }

  function _ckyAllowAll() {
    ref._ckySetInStore("action", "no");

    ref._ckySetInStore("consent", "yes");

    const responseCategories = {
      accepted: [],
      rejected: [],
    };

    for (const category of ref._ckyStore._categories) {
      ref._ckySetInStore(`${category.slug}`, "yes");

      responseCategories.accepted.push(category.slug);
    }

    _ckyUnblock();

    _ckyClearListeners();

    _ckyFireEvent(responseCategories);

    _ckySetGoogleConsentMode();
  }

  function _ckyReSetConsentID() {
    if (!ref._ckyStore._resetConsentID) return;

    const cookieyesID = ref._ckyGetFromStore("consentid");

    ref._ckySetInStore("consentid", cookieyesID);
  }

  function _ckySetBannerAction(action) {
    ref._ckySetInStore("action", action);
  }

  function _ckyRemoveDeadCookies({ cookies }) {
    const currentCookieMap = ref._ckyGetCookieMap();

    for (const { cookieID, domain } of cookies) {
      const cookieToReset = getKeyToReset(currentCookieMap, cookieID);

      if (cookieToReset) {
        [domain, "", window.location.host].map((cookieDomain) =>
          ref._ckySetCookie(cookieToReset, "", 0, cookieDomain)
        );
        delete currentCookieMap[cookieToReset];
        continue;
      }

      const localDataToReset = getKeyToReset(localStorage, cookieID);
      if (localDataToReset) localStorage.removeItem(localDataToReset);
      const sessionDataToReset = getKeyToReset(sessionStorage, cookieID);
      if (sessionDataToReset) sessionStorage.removeItem(sessionDataToReset);
    }
  }

  function getKeyToReset(objectData, keyToSearch) {
    if (keyToSearch.includes("*")) keyToSearch = keyToSearch.replace("*", ".+");
    keyToSearch = `^${keyToSearch}$`;
    const dataToReset = Object.keys(objectData).find((key) =>
      new RegExp(keyToSearch).test(key)
    );
    return dataToReset;
  }

  function _ckySetGoogleConsentMode() {
    if (!window.dataLayer || !Array.isArray(window.dataLayer)) return;

    const functionalConsent = _ckyGetGTMConsentString("functional");

    const advertisementConsent = _ckyGetGTMConsentString("advertisement");

    const analyticsConsent = _ckyGetGTMConsentString("analytics");

    _ckyPushGTMConsentData("consent", "update", {
      ad_storage: advertisementConsent,
      analytics_storage: analyticsConsent,
      functionality_storage: functionalConsent,
      personalization_storage: functionalConsent,
      security_storage: "granted",
    });

    _ckyPushGTMConsentData(
      "set",
      "ads_data_redaction",
      advertisementConsent === "denied"
    );

    _ckyPushGTMConsentData(
      "set",
      "url_passthrough",
      analyticsConsent === "denied"
    );

    _ckyPushGTMConsentData({
      event: "cookie_consent_update",
    });
  }

  async function _ckyFindApplyingRule() {
    try {
      const response = await _ckyRequest(
        `https://cdn-cookieyes.com/client_data/abc81dc5cb41faf0dd9d8591/JAceVrk1.json`
      );
      ref.ruleSet = await response.json();
      if (!Array.isArray(ref.ruleSet) || ref.ruleSet.length <= 0) return false;

      if (ref._ckyStore._isPreview) {
        const rule = ref.ruleSet[ref.ruleSet.length - 1];
        return ref._ckyStore._banners[rule.targetBanner];
      }

      for (const rule of ref.ruleSet) {
        if (rule.condition === "all" || _ckyParseRule(rule.condition))
          return ref._ckyStore._banners[rule.targetBanner];
      }
    } catch (error) {}

    return false;
  }

  function _ckyParseRule(rule) {
    const isOrRule = / OR /i.test(rule);
    const isAndRule = / AND /i.test(rule);
    if (!isOrRule && !isAndRule) return _ckyCheckRule(rule);
    const rules = rule.split(isOrRule ? / OR /i : / AND /i);

    for (const rule of rules) {
      const ruleOutput = _ckyParseRule(rule);

      if (isOrRule && ruleOutput) return true;
      else if (!isOrRule && !ruleOutput) return false;
    }

    return !isOrRule;
  }

  function _ckyCheckRule(condition) {
    const [lhs, rhs] = condition.split(/ IS | IS_NOT | IN | NOT_IN /i);

    switch (true) {
      case / IS /i.test(condition):
        return _ckyParseRuleLHS(lhs) === rhs;

      case / IS_NOT /i.test(condition):
        return _ckyParseRuleLHS(lhs) !== rhs;

      case / IN /i.test(condition):
        return rhs
          .replace(/\[|\]/g, "")
          .split(",")
          .includes(_ckyParseRuleLHS(lhs));

      case / NOT_IN /i.test(condition):
        return !rhs
          .replace(/\[|\]/g, "")
          .split(",")
          .includes(_ckyParseRuleLHS(lhs));

      default:
        return false;
    }
  }

  function _ckyParseRuleLHS(lhs) {
    switch (true) {
      case !!ref._ckyStore._ruleData[`_${lhs}`]:
        return `'${ref._ckyStore._ruleData[`_${lhs}`]}'`;

      case ref._ckyStore._ruleData[`_${lhs}`] === "":
        return "";

      case !!window.ckySettings && !!window.ckySettings[lhs]:
        return `'${window.ckySettings[lhs]}'`;

      default:
        return "";
    }
  }

  window.revisitCkyConsent = () => _ckyRevisitAction();

  window.performBannerAction = (action) => {
    const acceptStatus =
      action === "accept_all"
        ? "all"
        : action === "accept_partial"
        ? "custom"
        : "reject";
    return _ckyBannerAction(acceptStatus)();
  };

  function _ckyPreferenceCenterControl(show = true) {
    let fnToCall = _ckyClassAdd,
      popupFnToCall = _ckyClassRemove;
    if (!show) (fnToCall = _ckyClassRemove), (popupFnToCall = _ckyClassAdd);
    const { activeLaw, bannerType } = ref._ckyStore._bannerConfig;

    if (bannerType === "classic") {
      _ckyToggleAriaExpandStatus("=settings-button", show ? "true" : "false");

      return fnToCall("=notice", "cky-consent-bar-expand");
    }

    popupFnToCall(".cky-overlay", "cky-hide", false);
    if (activeLaw === "gdpr") fnToCall("=detail", "cky-modal-open");
    else fnToCall("=optout-popup", "cky-modal-open");
  }

  function _ckyBannerControl(show = true) {
    if (show) ref._ckyStore._bannerDisplayState = "banner";
    const fnToCall = show ? _ckyClassRemove : _ckyClassAdd;
    fnToCall("=notice", "cky-hide");
    if (ref._ckyStore._bannerConfig.bannerType === "popup")
      fnToCall(".cky-overlay", "cky-hide", false);
  }

  function _ckyRevisitControl(show = true) {
    if (show) ref._ckyStore._bannerDisplayState = "revisit";
    if (!ref._ckyStore._bannerConfig.showToggler) return;
    const fnToCall = show ? _ckyClassRemove : _ckyClassAdd;
    fnToCall("=revisit-consent", "cky-revisit-hide", false);
  }

  function _ckyPopulateAuditTable(action = "init") {
    if (action === "redraw") _ckyClearOutsideAuditTable();
    ref._ckyStore._auditTable._headerKeys = _ckyFindHeaders();
    const { showAuditTable, activeLaw } = ref._ckyStore._bannerConfig;
    if (showAuditTable && activeLaw === "gdpr") _ckyPopulateInsideAuditTable();

    _ckyPopulateOutsideAuditTable();

    if (action === "init") _ckyWatchAuditTableElement();
  }

  function _ckyPopulateInsideAuditTable() {
    const auditTableCode = ref._ckyStore._commonShortCodes.find(
      (code) => code.key === "cky_audit_table"
    );

    const auditTableEmpty = ref._ckyStore._commonShortCodes.find(
      (code) => code.key === "cky_audit_table_empty"
    );

    for (const category of ref._ckyStore._categories) {
      const categoryTableContent = _ckyGetAuditTableContent(
        category,
        auditTableCode.content.container,
        auditTableEmpty.content.container
      );

      document
        .querySelector(
          `#ckyDetailCategory${category.slug} [data-cky-tag="audit-table"]`
        )
        .insertAdjacentHTML("beforeend", categoryTableContent);
    }
  }

  function _ckyGetAuditTableContent(category, auditTableBase, auditTableEmpty) {
    if (category.cookies.length === 0) {
      return auditTableEmpty.replace(
        "[cky_audit_table_empty_text]",
        _ckyGetTranslation(`cky_audit_table_empty_text`)
      );
    }

    let categoryContent = ``;

    for (const cookie of category.cookies) {
      let cookieContent = ``;

      for (const header of ref._ckyStore._auditTable._headerKeys) {
        cookieContent = `${cookieContent}<li><div>${_ckyGetTranslation(
          `cky_audit_table_header_${header}`
        )}</div><div>${
          header === "id"
            ? cookie.cookieID
            : _ckyGetTranslation(`cookies.${cookie.cookieID}.${header}`)
        }</div></li>`;
      }

      categoryContent = `${categoryContent}${auditTableBase.replace(
        "[CONTENT]",
        cookieContent
      )}`;
    }

    return categoryContent;
  }

  function _ckyClearOutsideAuditTable() {
    const auditTableElements = document.querySelectorAll(
      ".cky-audit-table-element"
    );
    if (auditTableElements.length < 1) return;

    for (const element of auditTableElements) element.innerHTML = "";
  }

  function _ckyPopulateOutsideAuditTable() {
    const auditTableElements = Array.from(
      document.querySelectorAll(".cky-audit-table-element")
    )
      .filter(({ innerHTML }) => ["", "&nbsp;", " "].includes(innerHTML))
      .map((element) => {
        element.innerHTML = "";
        return element;
      });
    if (auditTableElements.length < 1) return;
    if (!document.getElementById("cky-audit-table-style"))
      document.head.insertAdjacentHTML(
        "beforeend",
        `<style id="cky-audit-table-style">.cky-table-wrapper{width: 100%; max-width: 100%; overflow: auto;}.cky-cookie-audit-table{font-family: inherit; border-collapse: collapse; width: 100%;}.cky-cookie-audit-table th{background-color: #d9dfe7; border: 1px solid #cbced6;}.cky-cookie-audit-table td{border: 1px solid #d5d8df;}.cky-cookie-audit-table th,.cky-cookie-audit-table td{text-align: left; padding: 10px; font-size: 12px; color: #000000; word-break: normal;}.cky-cookie-audit-table td p{font-size: 12px; line-height: 24px; margin-bottom: 1em;}.cky-cookie-audit-table td p:last-child{margin-bottom: 0;}.cky-cookie-audit-table tr:nth-child(2n + 1) td{background: #f1f5fa;}.cky-cookie-audit-table tr:nth-child(2n) td{background: #ffffff;}.cky-audit-table-element h3{margin: 35px 0 16px 0;}.cky-audit-table-element .cky-table-wrapper{margin-bottom: 1rem;}.cky-audit-table-element .cky-category-des p{margin-top: 0;}</style>`
      );

    const auditTableOutside = ref._ckyStore._commonShortCodes.find(
      (code) => code.key === "cky_outside_audit_table"
    );

    for (const category of ref._ckyStore._categories) {
      const outTableContent = _ckyGetAuditTableContentForPage(
        category,
        auditTableOutside.content.container
      );

      if (!outTableContent) continue;

      for (const element of auditTableElements)
        element.insertAdjacentHTML("beforeend", outTableContent);
    }
  }

  function _ckyGetAuditTableContentForPage(category, auditTableBase) {
    if (category.cookies.length === 0) return "";
    const { _headerKeys: headers } = ref._ckyStore._auditTable;
    const auditTableBasePrepared = auditTableBase
      .replace(
        `[cky_preference_{{category_slug}}_title]`,
        _ckyGetTranslation(`cky_preference_${category.slug}_title`)
      )
      .replace(
        `[cky_preference_{{category_slug}}_description]`,
        _ckyGetTranslation(`cky_preference_${category.slug}_description`)
      );
    let categoryContent = `<thead><tr>`;

    for (const header of headers) {
      categoryContent = `${categoryContent}<th>${_ckyGetTranslation(
        `cky_audit_table_header_${header}`
      )}</th>`;
    }

    categoryContent = `${categoryContent}</tr></thead><tbody>`;

    for (const cookie of category.cookies) {
      let cookieContent = `<tr>`;

      for (const header of headers) {
        cookieContent = `${cookieContent}<td>${
          header === "id"
            ? cookie.cookieID
            : _ckyGetTranslation(`cookies.${cookie.cookieID}.${header}`)
        }</td>`;
      }

      categoryContent = `${categoryContent}${cookieContent}</tr>`;
    }

    categoryContent = `${categoryContent}</tbody>`;
    return auditTableBasePrepared.replace("[CONTENT]", categoryContent);
  }

  function _ckyWatchAuditTableElement() {
    const auditTableObserver = new MutationObserver(
      _ckyPopulateOutsideAuditTable
    );
    auditTableObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  function _ckyGetFocusableElements(element) {
    const wrapperElement = document.querySelector(
      `[data-cky-tag="${element}"]`
    );
    if (!wrapperElement) return [];
    const focussableElements = Array.from(
      wrapperElement.querySelectorAll(
        'a:not([disabled]), button:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])'
      )
    ).filter((element) => element.style.display !== "none");
    if (focussableElements.length <= 0) return [];
    return [
      focussableElements[0],
      focussableElements[focussableElements.length - 1],
    ];
  }

  function _ckyLoopFocus() {
    const { activeLaw, bannerType } = ref._ckyStore._bannerConfig;
    if (bannerType === "classic") return;

    if (bannerType === "popup") {
      const [firstElementBanner, lastElementBanner] =
        _ckyGetFocusableElements("notice");

      _ckyAttachFocusLoop(firstElementBanner, lastElementBanner, true);

      _ckyAttachFocusLoop(lastElementBanner, firstElementBanner);
    }

    const [firstElementPopup, lastElementPopup] = _ckyGetFocusableElements(
      activeLaw === "ccpa" ? "optout-popup" : "detail"
    );

    _ckyAttachFocusLoop(firstElementPopup, lastElementPopup, true);

    _ckyAttachFocusLoop(lastElementPopup, firstElementPopup);
  }

  function _ckyAttachFocusLoop(element, targetElement, isReverse = false) {
    if (!element || !targetElement) return;
    element.addEventListener("keydown", (event) => {
      if (
        event.which !== 9 ||
        (isReverse && !event.shiftKey) ||
        (!isReverse && event.shiftKey)
      )
        return;
      event.preventDefault();
      targetElement.focus();
    });
  }

  function _ckyCloseButtonAction() {
    _ckyPreferenceCenterControl(false);

    const { activeLaw, bannerType } = ref._ckyStore._bannerConfig;

    if (ref._ckyStore._bannerDisplayState !== "revisit") {
      _ckyBannerControl();

      const nextFocusElement = document.querySelector(
        `[data-cky-tag="${
          activeLaw === "gdpr" ? "settings-button" : "donotsell-button"
        }"]`
      );
      return nextFocusElement && nextFocusElement.focus();
    }

    if (bannerType === "classic") {
      _ckyBannerControl(false);
    }

    _ckyRevisitControl();
  }

  function _ckySettingsAction() {
    if (ref._ckyStore._bannerConfig.bannerType === "classic")
      return _ckyPreferenceCenterControl(!_ckyIsPreferenceOpen());

    _ckyBannerControl(false);

    _ckyPreferenceCenterControl();
  }

  function _ckyRevisitAction() {
    _ckyRevisitControl(false);

    if (ref._ckyStore._bannerConfig.bannerType === "classic")
      _ckyBannerControl();

    _ckyPreferenceCenterControl();
  }

  function _ckyBannerAction(choice = "custom") {
    return () => {
      _ckyAcceptCookies(choice);

      _ckyBannerControl(false);

      _ckyPreferenceCenterControl(false);

      _ckyRevisitControl();
    };
  }

  function _ckyBannerPassiveAction() {
    _ckySetBannerAction("yes");

    _ckyBannerControl(false);

    _ckyRevisitControl();
  }

  function _ckyRegisterListeners() {
    ["=accept-button", "=detail-accept-button"].map((key) =>
      _ckyAttachListener(key, _ckyBannerAction("all"))
    );
    ["=reject-button", "=detail-reject-button"].map((key) =>
      _ckyAttachListener(key, _ckyBannerAction("reject"))
    );
    [
      "=detail-save-button",
      "=detail-category-preview-save-button",
      "=optout-confirm-button",
    ].map((key) => _ckyAttachListener(key, _ckyBannerAction()));
    ["=settings-button", "=donotsell-button"].map((key) =>
      _ckyAttachListener(key, _ckySettingsAction)
    );
    ["=optout-cancel-button", "=detail-close", "=optout-close"].map((key) =>
      _ckyAttachListener(key, _ckyCloseButtonAction)
    );

    _ckyAttachListener("=close-button", _ckyBannerPassiveAction);

    _ckyAttachListener("=revisit-consent", _ckyRevisitAction);
  }

  function _ckyAttachCategoryListeners() {
    if (!ref._ckyStore._bannerConfig.showAuditTable) return;

    const categoryNames = ref._ckyStore._categories.map(({ slug }) => slug);

    categoryNames.map((category) => {
      const selector = `#ckyDetailCategory${category}`;
      const accordionButtonSelector = `${selector}  .cky-accordion-btn`;

      _ckyAttachListener(selector, ({ target: { id } }) => {
        if (
          id === `ckySwitch${category}` ||
          !_ckyClassToggle(selector, "cky-accordion-active", false)
        )
          return _ckyToggleAriaExpandStatus(accordionButtonSelector, "false");

        _ckyToggleAriaExpandStatus(accordionButtonSelector, "true");

        categoryNames
          .filter((categoryName) => categoryName !== category)
          .map((filteredName) => {
            _ckyClassRemove(
              `#ckyDetailCategory${filteredName}`,
              "cky-accordion-active",
              false
            );

            _ckyToggleAriaExpandStatus(
              `#ckyDetailCategory${filteredName} .cky-accordion-btn`,
              "false"
            );
          });
      });
    });
  }

  function _ckySetCategorySelections(addListeners = true) {
    const { dataShortCodes, togglerSwitch, activeLaw } =
      ref._ckyStore._bannerConfig;
    const toggleDataCode = dataShortCodes.find(
      (code) => code.key === "cky_category_toggle_label"
    );

    for (const category of ref._ckyStore._categories) {
      const cookieValue = ref._ckyGetFromStore(category.slug);

      const checked =
        cookieValue === "yes" ||
        (!cookieValue && category.defaultConsent[activeLaw]);
      const formattedLabel = toggleDataCode.content.container.replace(
        `[cky_preference_{{category_slug}}_title]`,
        _ckyGetTranslation(`cky_preference_${category.slug}_title`)
      );
      [`ckyCategoryDirect`, `ckySwitch`].map((key) =>
        _ckySetCheckBoxInfo(
          _ckyFindElement(`#${key}${category.slug}`),
          formattedLabel,
          {
            checked,
            disabled: category.isNecessary,
            addListeners,
          },
          togglerSwitch.styles
        )
      );
    }
  }

  function _ckySetCheckBoxInfo(
    boxElem,
    formattedLabel,
    { checked, disabled, addListeners },
    { activeColor, inactiveColor },
    isCCPA = false
  ) {
    if (!boxElem) return;
    if (isCCPA && addListeners)
      _ckyAttachListener("=optout-option-title", () => boxElem.click());
    boxElem.checked = checked;
    boxElem.disabled = disabled;
    boxElem.style.backgroundColor = checked ? activeColor : inactiveColor;

    _ckySetCheckBoxAriaLabel(boxElem, checked, formattedLabel, isCCPA);

    if (!addListeners) return;
    boxElem.addEventListener("change", ({ currentTarget: elem }) => {
      const isChecked = elem.checked;
      elem.style.backgroundColor = isChecked ? activeColor : inactiveColor;

      _ckySetCheckBoxAriaLabel(boxElem, isChecked, formattedLabel, isCCPA);
    });
  }

  function _ckySetCheckBoxAriaLabel(
    boxElem,
    isChecked,
    formattedLabel,
    isCCPA = false
  ) {
    const keyName = isChecked ? "disable" : "enable";
    const textCode = `cky_${keyName}_${isCCPA ? "optout" : "category"}_label`;
    const labelText = formattedLabel
      .replace(/{{status}}/g, keyName)
      .replace(`[${textCode}]`, _ckyGetTranslation(textCode));
    boxElem.setAttribute("aria-label", labelText);
  }

  function _ckyFindCheckBoxValue(id = "") {
    const elemetsToCheck = id
      ? [`ckySwitch`, `ckyCategoryDirect`]
      : [`ckyCCPAOptOut`];
    return elemetsToCheck.some((key) => {
      const checkBox = _ckyFindElement(`#${key}${id}`);

      return checkBox && checkBox.checked;
    });
  }

  function _ckyAttachReadMore() {
    const { readMore: readMoreButton, activeLaw } = ref._ckyStore._bannerConfig;
    if (!readMoreButton.status) return;

    const readMoreCode = ref._ckyStore._bannerConfig.dataShortCodes.find(
      (code) => code.key === "cky_readmore"
    );

    const content = readMoreCode.processedHTML;
    const readMoreElement = document.querySelector(
      '[data-cky-tag="description"] p:last-child'
    );
    readMoreElement &&
      readMoreElement.insertAdjacentHTML(
        "beforeend",
        `&nbsp;${content
          .replaceAll(
            "[cky_readmore_text]",
            _ckyGetTranslation("cky_readmore_text")
          )
          .replace(
            `href="#"`,
            `href="${_ckyGetTranslation("cky_readmore_privacyLink")}"`
          )}`
      );
  }

  function _ckySetShowMoreLess() {
    const { dataShortCodes, activeLaw } = ref._ckyStore._bannerConfig;
    const showCode = dataShortCodes.find(
      (code) => code.key === "cky_show_desc"
    );
    const hideCode = dataShortCodes.find(
      (code) => code.key === "cky_hide_desc"
    );
    if (!showCode || !hideCode) return;
    const hideButtonContent = `${hideCode.content.button.replaceAll(
      "[cky_showless_text]",
      _ckyGetTranslation("cky_showless_text")
    )}`;
    const showButtonContent = `${showCode.content.button.replaceAll(
      "[cky_showmore_text]",
      _ckyGetTranslation("cky_showmore_text")
    )}`;
    const contentLimit = window.innerWidth < 376 ? 150 : 300;
    const element = document.querySelector(
      `[data-cky-tag="${
        activeLaw === "gdpr" ? "detail" : "optout"
      }-description"]`
    );
    const content = element.textContent;
    if (content.length < contentLimit) return;
    const contentHTML = element.innerHTML;
    const htmlDoc = new DOMParser().parseFromString(contentHTML, "text/html");
    const innerElements = htmlDoc.querySelectorAll("body > p");
    if (innerElements.length <= 1) return;
    let strippedContent = ``;

    for (let index = 0; index < innerElements.length; index++) {
      if (index === innerElements.length - 1) return;
      const element = innerElements[index];
      if (`${strippedContent}${element.outerHTML}`.length > contentLimit)
        element.insertAdjacentHTML(
          "beforeend",
          `...&nbsp;${showButtonContent}`
        );
      strippedContent = `${strippedContent}${element.outerHTML}`;
      if (strippedContent.length > contentLimit) break;
    }

    function showMoreHandler() {
      element.innerHTML = `${contentHTML}${hideButtonContent}`;

      _ckyAttachListener("=hide-desc-button", showLessHandler);
    }

    function showLessHandler() {
      element.innerHTML = strippedContent;

      _ckyAttachListener("=show-desc-button", showMoreHandler);
    }

    showLessHandler();
  }

  ref._ckySetPlaceHolder = function (uniqueID = "") {
    const { status, styles } = ref._ckyStore._bannerConfig.placeHolder;
    if (!status) return;
    const placeHolderQuery = `${
      uniqueID ? `#${uniqueID} ` : ""
    }[data-cky-tag="placeholder-title"]`;
    const placeHolders = document.querySelectorAll(placeHolderQuery);
    if (placeHolders.length < 1) return;
    Array.from(placeHolders).forEach((placeHolder) => {
      placeHolder.innerHTML = _ckyGetTranslation("cky_video_placeholder_title");
      placeHolder.style.display = "block";
      placeHolder.addEventListener("click", () => {
        if (ref._ckyStore._bannerDisplayState === "revisit")
          _ckyRevisitAction();
      });

      for (const style in styles) {
        if (!styles[style]) continue;
        placeHolder.style[style] = styles[style];
      }
    });
  };

  function _ckyIsPreferenceOpen() {
    const { activeLaw, bannerType } = ref._ckyStore._bannerConfig;
    if (bannerType === "classic")
      return _ckyHasClass("=notice", "cky-consent-bar-expand");
    if (activeLaw === "gdpr") return _ckyHasClass("=detail", "cky-modal-open");
    return _ckyHasClass("=optout-popup", "cky-modal-open");
  }

  function _ckyRemoveAndReInitializeBanner() {
    const isPreferenceOpen = _ckyIsPreferenceOpen();

    [
      "=notice",
      "=detail",
      "=optout-popup",
      ".cky-overlay",
      "=revisit-consent",
    ].map((key, index) => _ckyRemoveElement(key, index < 3));

    _ckyAttachBannerToUI();

    _ckyPopulateAuditTable("redraw");

    if (isPreferenceOpen) {
      if (ref._ckyStore._bannerConfig.bannerType === "classic")
        _ckyBannerControl();
      return _ckyPreferenceCenterControl();
    }

    if (ref._ckyStore._bannerDisplayState === "banner")
      return _ckyBannerControl();

    _ckyRevisitControl();
  }

  function _ckyWatchBannerElement() {
    document.querySelector("body").addEventListener("click", (event) => {
      const selector = ".cky-banner-element, .cky-banner-element *";
      if (
        event.target.matches
          ? event.target.matches(selector)
          : event.target.msMatchesSelector(selector)
      )
        _ckyRevisitAction();
    });
  }

  async function _ckyLogCookies() {
    try {
      const logData = JSON.stringify(
        ref._ckyStore._categories
          .map(({ slug }) => ({
            name: slug,
            status: ref._ckyGetFromStore(slug) || "no",
          }))
          .concat([
            {
              name: "CookieYes Consent",
              status:
                ref._ckyStore._bannerConfig.activeLaw === "ccpa"
                  ? "yes"
                  : ref._ckyGetFromStore("consent") || "no",
            },
          ])
      );
      const data = new FormData();
      data.append("log", logData);
      data.append("key", "abc81dc5cb41faf0dd9d8591");
      data.append("consent_id", ref._ckyGetFromStore("consentid"));
      data.append("language", ref._ckyStore._language._active);
      data.append("consented_domain", window.location.host);
      data.append("cookie_list_version", "11");
      navigator.sendBeacon("https://consentlog.cookieyes.com/api/v1/log", data);
    } catch (err) {
      console.error(err);
    }
  }

  async function _ckyTranslatePage(toLanguage) {
    try {
      if (ref._ckyStore._language._active === toLanguage) return;
      await _ckyFetchLanguage(toLanguage);
      ref._ckyStore._language._active = toLanguage;

      _ckyRemoveAndReInitializeBanner();
    } catch (err) {
      console.error(err);
    }
  }

  function _ckyLanguageObserver(mutations) {
    for (const mutation of mutations) {
      if (mutation.type !== "attributes" || mutation.attributeName !== "lang")
        continue;

      let siteLanguage = _ckyFindApplicableLanguage(
        document.documentElement.lang
      );

      _ckyTranslatePage(siteLanguage);
    }
  }

  function _ckyFindApplicableLanguage(currentLang) {
    if (ref._ckyStore._language._localeMap[currentLang])
      return ref._ckyStore._language._localeMap[currentLang];
    if (ref._ckyStore._language._supportedMap[currentLang]) return currentLang;
    currentLang = currentLang.split("-")[0];
    if (ref._ckyStore._language._supportedMap[currentLang]) return currentLang;
    return ref._ckyStore._language._default;
  }

  async function _ckyGetLanguageJSON(url) {
    const response = await _ckyRequest(url);
    if (!response.ok) throw new Error(`Invalid response`);
    const languageFile = await response.json();
    if (
      !languageFile ||
      typeof languageFile !== "object" ||
      Object.keys(languageFile).length === 0
    )
      throw new Error(`Invalid response`);
    return languageFile;
  }

  async function _ckyFetchLanguage(language) {
    const languageDictionary = ref._ckyStore._language._store.get(language);

    if (
      languageDictionary &&
      languageDictionary.setAuditTableContent &&
      languageDictionary.setLanguageContent
    )
      return;
    let languageFile = {};
    if (
      (!languageDictionary || !languageDictionary.setLanguageContent) &&
      ref._ckyStore._bannerConfig.languageMap &&
      ref._ckyStore._bannerConfig.languageMap[language]
    )
      languageFile = await _ckyGetLanguageJSON(
        `https://cdn-cookieyes.com/client_data/abc81dc5cb41faf0dd9d8591/translations/${ref._ckyStore._bannerConfig.languageMap[language]}.json`
      );
    let languageFileAuditTable = {};
    if (!languageDictionary || !languageDictionary.setAuditTableContent)
      languageFileAuditTable = await _ckyGetLanguageJSON(
        `https://cdn-cookieyes.com/client_data/abc81dc5cb41faf0dd9d8591/audit-table/${ref._ckyStore._language._supportedMap[language]}.json`
      );

    ref._ckyStore._language._store.set(language, {
      ...languageFile,
      ...languageFileAuditTable,
      setLanguageContent: Object.keys(languageFile).length > 0,
      setAuditTableContent: Object.keys(languageFileAuditTable).length > 0,
    });

    return language;
  }

  async function _ckySetupTranslation() {
    try {
      const siteLanguage = _ckyFindApplicableLanguage(
        document.documentElement.lang
      );

      ref._ckyStore._language._active = siteLanguage;
      await _ckyFetchLanguage(siteLanguage);

      const _ckyLangObserver = new MutationObserver(_ckyLanguageObserver);

      _ckyLangObserver.observe(document.querySelector("html"), {
        attributes: true,
      });
    } catch (err) {
      console.error(err);
    }
  }

  function _ckyAttachBannerToUI() {
    const { html, css, activeLaw, bannerType } = ref._ckyStore._bannerConfig;

    const parsedHTML = _ckyPrepareHTML(html);

    document.head.insertAdjacentHTML("beforeend", css);
    document.body.insertAdjacentHTML("afterbegin", parsedHTML);
    if (bannerType === "classic")
      _ckyToggleAriaExpandStatus("=settings-button", "false");

    _ckySetCategorySelections();

    _ckyAttachCategoryListeners();

    _ckyRegisterListeners();

    ref._ckySetPlaceHolder();

    _ckyAttachReadMore();

    _ckySetShowMoreLess();

    _ckyLoopFocus();

    ref._ckyStore._bannerAttached = true;
  }

  async function _ckySetupBanner(bannerID) {
    const response = await _ckyRequest(
      `https://cdn-cookieyes.com/client_data/abc81dc5cb41faf0dd9d8591/config/${bannerID}.json`
    );
    const data = await response.json();
    data.shouldFollowGPC = data.respectGPC && ref._ckyStore._gpcStatus;
    ref._ckyStore._bannerConfig = data;
    await _ckySetupTranslation();

    _ckyAttachBannerToUI();

    const actionState = ref._ckyGetFromStore("action");

    if (!actionState) {
      _ckySetInitialState();

      return _ckyBannerControl();
    }

    _ckySetGoogleConsentMode();

    if (ref._ckyStore._isPreview) {
      _ckyBannerControl();
    } else _ckyRevisitControl();
  }

  async function _ckyWindowLoadHandler(event) {
    try {
      if (event) window.removeEventListener("load", _ckyWindowLoadHandler);
      const bannerID = await _ckyFindApplyingRule();

      if (!bannerID) {
        _ckyAllowAll();

        await _ckySetupTranslation();

        ref._ckySendPageViewLog("banner_hide");
      } else {
        await _ckySetupBanner(bannerID);

        for (const category of ref._ckyStore._categories) {
          if (ref._ckyGetFromStore(category.slug) !== "yes")
            _ckyRemoveDeadCookies(category);
        }

        _ckyWatchBannerElement();

        ref._ckySendPageViewLog("banner_view", bannerID);
      }

      _ckyPopulateAuditTable();
    } catch (err) {
      console.error(err);
    }
  }

  if (document.readyState === "complete") _ckyWindowLoadHandler();
  else window.addEventListener("load", _ckyWindowLoadHandler);
  /******/
})();
