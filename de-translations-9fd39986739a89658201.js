(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{596:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.messages=n.locale=n.areTranslationsLoaded=void 0;var r,a=t(6),i=t(865),o=(r=i)&&r.__esModule?r:{default:r};(0,a.addLocaleData)(o.default);n.areTranslationsLoaded=!0,n.locale="de",n.messages={"Terra.AbstractModal.BeginModalDialog":"Modaldialog starten","Terra.AbstractModal.EndModalDialog":"Beenden Sie den modalen Dialog","Terra.actionHeader.back":"Zurück","Terra.actionHeader.close":"Schließen","Terra.actionHeader.maximize":"Maximieren","Terra.actionHeader.minimize":"Minimieren","Terra.actionHeader.next":"Nächste","Terra.actionHeader.previous":"Vorherige","Terra.ajax.error":"Inhalt konnte nicht geladen werden.","Terra.applicationNavigation.drawerMenu.navigation":"Navigationselemente","Terra.applicationNavigation.drawerMenu.utilities":"Dienstprogrammelemente","Terra.applicationNavigation.extensions.rollupButtonDescription":"Additional Tools","Terra.applicationNavigation.extensions.rollupMenuHeaderTitle":"Additional Tools","Terra.applicationNavigation.header.menuButtonTitle":"Menü","Terra.applicationNavigation.header.skipToContentTitle":"Zum Inhalt","Terra.applicationNavigation.header.utilityButtonTitleNoUser":"Optionen","Terra.applicationNavigation.header.utilityButtonTitleUser":"Benutzereinstellungen","Terra.applicationNavigation.notifications.new":"Neu","Terra.applicationNavigation.tabs.rollupButtonDescription":"Mehr Navigation","Terra.applicationNavigation.tabs.rollupButtonTitle":"Mehr","Terra.applicationNavigation.tabs.rollupMenuHeaderTitle":"Mehr Navigation","Terra.applicationNavigation.utilityMenu.headerTitle":"Dienstprogramme","Terra.applicationNavigation.utilityMenu.help":"Hilfe","Terra.applicationNavigation.utilityMenu.logout":"Abmelden","Terra.applicationNavigation.utilityMenu.settings":"Einstellungen","Terra.devSite.themed.help":"Hilfe","Terra.form.field.optional":"(wahlweise)","Terra.form.select.add":'"{text}" hinzufügen',"Terra.form.select.ariaLabel":"Suchen","Terra.form.select.clearSelect":"Ausgewählte entfernen","Terra.form.select.defaultDisplay":"- Auswählen -","Terra.form.select.defaultUsageGuidance":"Verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen.","Terra.form.select.dimmed":"Gedimmt","Terra.form.select.disabled":"Deaktiviert","Terra.form.select.listOfTotalOptions":"Liste von {total} Optionen","Terra.form.select.maxSelectionHelp":"{text} Elemente begrenzen.","Terra.form.select.maxSelectionOption":"Maximale Anzahl an ausgewählten {text} Elementen","Terra.form.select.menu":"Menü","Terra.form.select.mobileButtonUsageGuidance":"Klicken, um zu Optionen zu navigieren","Terra.form.select.mobileUsageGuidance":"Nach rechts wischen, um zu Optionen zu navigieren","Terra.form.select.multiSelectUsageGuidance":"Geben Sie Text ein oder verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen oder die Auswahl aufzuheben.","Terra.form.select.noResults":'Keine Übereinstimmungen für "{text}"',"Terra.form.select.option":"Optionen","Terra.form.select.searchUsageGuidance":"Geben Sie Text ein oder verwenden Sie die Pfeiltasten, um durch die Optionen zu navigieren. Drücken Sie die Eingabetaste, um eine Option auszuwählen.","Terra.form.select.selectCleared":"Ausgewählter Wert wurde entfernt","Terra.form.select.selected":"Ausgewählt","Terra.form.select.selectedText":"Ausgewählt: {text}","Terra.form.select.unselected":"Nicht ausgewählt","Terra.form.select.unselectedText":"{text} nicht ausgewählt","Terra.icon.IconConsultInstructionsForUse.title":"Symbol 'Elektronische Gebrauchsanweisung'","Terra.InfiniteList.loading":"Ladevorgang...","Terra.menu.back":"Zurück","Terra.menu.close":"Schließen","Terra.notification.dialog.alert":"Benachrichtigung","Terra.notification.dialog.error":"Fehler","Terra.notification.dialog.info":"Informationen","Terra.notification.dialog.success":"Erfolgreich","Terra.notification.dialog.warning":"Warnung","Terra.Overlay.loading":"Ladevorgang...","Terra.popup.header.close":"Schließen","Terra.searchField.clear":"Entfernen","Terra.searchField.search":"Suchen","Terra.searchField.submit-search":"Suche eingeben","Terra.status-view.error":"Fehler","Terra.status-view.no-data":"Keine Ergebnisse","Terra.status-view.no-matching-results":"Keine Übereinstimmungen","Terra.status-view.not-authorized":"Nicht autorisiert","terraApplication.unsavedChangesPrompt.acceptButtonText":"Nicht speichern","terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro":"Die Änderungen des folgenden Elements wurden nicht gespeichert:","terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro":"Wenn Sie Ihre Änderungen nicht speichern, gehen diese verloren. Wie möchten Sie fortfahren?","terraApplication.unsavedChangesPrompt.rejectButtonText":"Mit der Bearbeitung fortfahren","terraApplication.unsavedChangesPrompt.singlePromptMessage":"Die Änderungen des Elements {promptDescription} wurden nicht gespeichert. Wenn Sie Ihre Änderungen nicht speichern, gehen diese verloren. Wie möchten Sie fortfahren?","terraApplication.unsavedChangesPrompt.title":"Es liegen nicht gespeicherte Änderungen vor."}},865:function(e,n,t){e.exports=function(){"use strict";return[{locale:"de",pluralRuleFunction:function(e,n){var t=!String(e).split(".")[1];return n?"other":1==e&&t?"one":"other"},fields:{year:{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},"year-short":{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},month:{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},"month-short":{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},day:{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},"day-short":{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},hour:{displayName:"Stunde",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Stunde",other:"in {0} Stunden"},past:{one:"vor {0} Stunde",other:"vor {0} Stunden"}}},"hour-short":{displayName:"Std.",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Std.",other:"in {0} Std."},past:{one:"vor {0} Std.",other:"vor {0} Std."}}},minute:{displayName:"Minute",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Minute",other:"in {0} Minuten"},past:{one:"vor {0} Minute",other:"vor {0} Minuten"}}},"minute-short":{displayName:"Min.",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Min.",other:"in {0} Min."},past:{one:"vor {0} Min.",other:"vor {0} Min."}}},second:{displayName:"Sekunde",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sekunde",other:"in {0} Sekunden"},past:{one:"vor {0} Sekunde",other:"vor {0} Sekunden"}}},"second-short":{displayName:"Sek.",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sek.",other:"in {0} Sek."},past:{one:"vor {0} Sek.",other:"vor {0} Sek."}}}}},{locale:"de-AT",parentLocale:"de"},{locale:"de-BE",parentLocale:"de"},{locale:"de-CH",parentLocale:"de"},{locale:"de-IT",parentLocale:"de"},{locale:"de-LI",parentLocale:"de"},{locale:"de-LU",parentLocale:"de"}]}()}}]);
//# sourceMappingURL=de-translations-9fd39986739a89658201.js.map