sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("cz.sgen.ukazka.controller.View", {
        onInit() {
        },
onButtonPress(oEvent) {
  console.log("🟢 Press na tlačítko:", oEvent);

  const oSource = oEvent.getSource();
  const oParams = oEvent.getParameters();
  const sSourceId = oSource.getId(); 
  const sParamId = oParams?.id || "(žádný parametr 'id')"; 
  const oButtonPressName = "Přidat číslo"

  console.log("📍 Source ID:", sSourceId);
  console.log("📦 Parametry události:", oParams);
  console.log("🔎 ID z parametrů (pokud existuje):", sParamId);
  sap.m.MessageToast.show(`ID buttonu ${sParamId} bylo stisknuto`, {
    duration: 3000,                  // default
    width: "15em",                   // default
    my: sap.ui.core.Popup.Dock.CenterBottom,
    at: sap.ui.core.Popup.Dock.CenterBottom,
    of: window,                      // default
    offset: "0 0",                   // default
    collision: "fit fit",            // default
    onClose: null,                   // default
    autoClose: true,                 // default
    animationTimingFunction: "ease", // default
    animationDuration: 1000,         // default
    closeOnBrowserNavigation: true   // default
});

  oSource.setType("Accept");
  console.log("🔎 Source:", oSource);


  // Globálně do konzole
  window.oEvent = oEvent;
  window.oSource = oSource;
  window.oParams = oParams;
},

onButtonTap(oEvent) {
  console.log("🟢 Tap na tlačítko:", oEvent);

  const oSource = oEvent.getSource();
  const oParams = oEvent.getParameters();
  const sSourceId = oSource.getId(); 
  const sParamId = oParams?.id || "(žádný parametr 'id')";
  const oButtonTapName = "Přidat TAP text"

  console.log("📍 Zdroj komponenty:", oSource);
  console.log("🔎 ID komponenty:", sSourceId);
  console.log("📦 Parametry události:", oParams);
  console.log("🔎 ID z parametrů (pokud existuje):", sParamId);
    sap.m.MessageToast.show(`ID buttonu ${sParamId} bylo stisknuto`, {
    duration: 3000,                  // default
    width: "15em",                   // default
    my: sap.ui.core.Popup.Dock.CenterBottom,
    at: sap.ui.core.Popup.Dock.CenterBottom,
    of: window,                      // default
    offset: "0 0",                   // default
    collision: "fit fit",            // default
    onClose: null,                   // default
    autoClose: true,                 // default
    animationTimingFunction: "ease", // default
    animationDuration: 1000,         // default
    closeOnBrowserNavigation: true   // default
});

  oSource.setType("Emphasized");
  console.log("🔎 Source:", oSource);

  // Globálně do konzole
window.oEvent = oEvent;
window.oSource = oSource;
window.oParams = oParams;
}
    });
});