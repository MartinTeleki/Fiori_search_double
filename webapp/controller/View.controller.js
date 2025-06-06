sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast",  "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";



    return Controller.extend("cz.sgen.ukazka.controller.View", {
onInit() {
  var oModel = new JSONModel({
    itemy: [
      { jmeno: "John", age: 30, city: "Prague", state: "CZ" },
      { jmeno: "Jane", age: 25, city: "Brno",  state: "CZ" },
      { jmeno: "Jirka", age: 27, city: "Ostrava", state: "CZ" },
      { jmeno: "Pavel", age: 55, city: "Znojmo", state: "CZ" },
      { jmeno: "René", age: 26, city: "Olomouc", state: "CZ" },
      { jmeno: "Karel", age: 45, city: "Plzeň", state: "CZ" },
      { jmeno: "Marel", age: 28, city: "Jirkov", state: "CZ" },
    ]
  });
  this.getView().setModel(oModel);
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
  MessageToast.show(`ID buttonu ${oButtonPressName} bylo stisknuto`, {
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
    MessageToast.show(`ID buttonu ${oButtonTapName} bylo stisknuto`, {
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