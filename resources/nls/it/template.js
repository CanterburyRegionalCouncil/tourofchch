﻿define(
({
		viewer: {
			loading: {
				step1: "CARICAMENTO APPLICAZIONE",
				step2: "CARICAMENTO DATI",
				step3: "INIZIALIZZAZIONE DEL TOUR",
				loadBuilder: "PASSAGGIO A MODALITÀ GENERATORE",
				fail: "Caricamento Tour mappa non riuscito",
				failButton: "Riprova"
			},
			errors: {
				boxTitle: "Si è verificato un errore",
				invalidConfig: "Errore irreversibile: configurazione non valida",
				invalidConfigOwner: "Errore irreversibile: configurazione non valida (richiesto proprietario autorizzato)",
				invalidConfigNoWebmap: "Errore irreversibile: configurazione non valida (richiesti mappa Web e proprietario autorizzato)",
				createMap: "Impossibile creare la mappa",
				invalidApp: "Errore irreversibile: impossibile caricare l\'applicazione",
				noLayer: "La mappa Web non contiene un layer dati valido per Tour mappa.",
				noLayerMobile: "Benvenuti all\'applicazione Web Tour mappa. L\'applicazione non è configurata. Il generatore di Tour mappa non è supportato su dispositivi mobili.",
				noLayerView: "Benvenuti all\'applicazione Web Tour mappa.<br />L\'applicazione non è ancora configurata.",
				appSave: "Errore durante il salvataggio dell\'applicazione Web",
				mapSave: "Errore durante il salvataggio della mappa Web",
				featureServiceLoad: "Errore di caricamento del feature service",
				notAuthorized: "L\'utente non è autorizzato a configurare questa applicazione",
				oldBrowserTitle: "Browser non completamente supportato",
				noBuilderIE8: "Il generatore di Tour mappa non è supportato nelle versioni di Internet Explorer precedenti alla versione 9.",
				ie10Win7Explain: "Il generatore di Tour mappa interattivo non è supportato in Internet Explorer 10 in Windows 7 se l\'origine dati è un feature service con allegati. Per utilizzare un feature service con allegati, è necessario <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'> forzare manualmente la modalità documento sugli standard di Internet Explorer 9</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>eseguire il downgrade a Internet Explorer 9</a> o l\'aggiornamento a Windows 8.",
				oldBrowserExplain: "Il browser non supporta la generazione automatica di anteprime dalle immagini caricate nel tour mappa. Per creare un tour mappa utilizzando questo browser, sarà necessario fornire un\'immagine di anteprima distinta per ogni immagine caricata.",
				oldBrowserExplain2: "Per ottimizzare l\'esperienza utente, <a href='http://browsehappy.com/' target='_blank'>aggiornare il browser</a> o <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>attivare il Google Chrome Frame per Internet Explorer</a>.",
				oldBrowserExplain3: "Il generatore di Tour mappa non funziona con Internet Explorer 10 su Windows XP.",
				oldBrowserClose: "Chiudi"
			},
			mobileHTML: {
				showIntro: "MOSTRA TITOLO",
				hideIntro: "NASCONDI TITOLO",
				navList: "Elenco",
				navMap: "Mappa",
				navInfo: "Immagini",
				introStartBtn: "Avvia"
			},
			desktopHTML: {
				storymapsText: "Mappa collegata a una storia",
				builderButton: "Passa a modalità generatore"
			},
			builderHTML: {
				panelHeader: "CONFIGURAZIONE APPLICAZIONE",
				buttonSave: "SALVA",
				buttonDiscard: "ANNULLA",
				buttonSettings: "Impostazioni",
				buttonView: "Modalità visualizzazione",
				buttonHelp: "Guida",
				buttonOrganize: "Organizza",
				buttonAdd: "Aggiungi",
				buttonImport: "Importa",
				buttonImportDisabled: "L\'importazione non è disponibile quando si utilizza un feature service con allegati",
				modalCancel: "Annulla",
				modalApply: "Applica",
				organizeHeader: "Organizza il tour",
				organizeGeneralCaption: "Utilizza il trascinamento per ordinare i punti del tour",
				organizeDelete: "Elimina",
				organizeHide: "Nascondi",
				addMaxPointReached: "È stato raggiunto il numero massimo di punti del tour autorizzati dalle icone impostate e non è possibile aggiungerne altri.<br /><br />Si noti che eliminando punti esistenti sarà necessario ricaricare l\'applicazione.",
				addMaxPointReachedMobile: "È stato raggiunto il numero massimo di punti autorizzati. Impossibile aggiungere l\'immagine.",
				addClose: "Chiudi",
				addHeader: "Aggiungi un nuovo punto del tour",
				addTabPicture: "Immagine",
				addTabInformation: "Informazioni",
				addTabLocation: "Posizione",
				addSelectCaption: "Seleziona o rilascia immagine",
				addSelectCaptionNoFileReader: "Seleziona immagine",
				addChangePhoto: "Cambia immagine e anteprima",
				addPictureResolutionIntro: "La risoluzione dell\'immagine è maggiore di quella richiesta:",
				addPictureResolutionOldBrowser: "La risoluzione dell\'immagine è maggiore di quella richiesta. Per ottimizzare l\'esperienza di Tour mappa, specificare una risoluzione inferiore a %RECOMMENDED_RES%.",
				addPictureResolutionResize: "Cambia la risoluzione immagine in %RESOLUTION%",
				addPictureResolutionKeep: "Mantieni la risoluzione originale di %RESOLUTION%",
				addSelectThumbnail: "Seleziona anteprima",
				addNoThumbSelected: "Nessuna anteprima selezionata",
				addThumbSelected: "Selezionata",
				addCameraSettingsHeader: "IMPOSTAZIONI VIDEOCAMERA",
				addThumbnailHeader: "ANTEPRIMA",
				addLabelPicUrl: "URL immagine",
				addLabelThumbUrl: "URL anteprima",
				addTextPlaceholderUrl: "Immettere un URL",
				addLabelName: "Nome",
				addLabelDescription: "Didascalia",
				addTextPlaceholder: "Digitare del testo",
				addLocatePlaceholder: "Trova un indirizzo o un luogo",
				addPinColor: "Colore",
				addLatitude: "Latitudine",
				addLongitude: "Longitudine",
				addLatitudePlaceholder: "es. 34.056",
				addLongitudePlaceholder: "es. -117.195",
				addUploading: "Caricamento del punto del tour",
				addSave: "Aggiungi punto tour",
				addMobileUploading: "Caricamento immagine in corso",
				addMobileName: "Immettere un nome",
				addMobileNameMandatory: "Errore. Immettere un nome.",
				addMobileError: "Si è verificato un errore",
				settingsHeader: "Impostazioni applicazione",
				settingsTabLayout: "Layout",
				settingsTabColor: "Colori",
				settingsTabLogo: "Intestazione",
				settingsTabFields: "Dati",
				settingsTabExtent: "Estensione",
				settingsTabZoom: "Livello zoom",
				settingsLayoutExplain: "Selezionare il layout dell\'applicazione tra i due forniti.",
				settingsLayoutProfessional: "Layout a tre pannelli",
				settingsLayoutModern: "Layout integrato",
				settingsLayoutSelected: "Layout selezionato",
				settingsLayoutSelect: "Seleziona il layout",
				settingsColorExplain: "Per modificare l\'aspetto, scegliere un tema predefinito o crearne uno personale.",
				settingsLabelColor: "Colori di intestazione, contenuto e piè di pagina",
				settingsLogoExplain: "Personalizza il logo dell\'intestazione (max 250 x 50 px).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Nessun logo",
				settingsLogoCustom: "Logo personalizzato",
				settingsLogoCustomPlaceholder: "URL immagine",
				settingsLogoCustomTargetPlaceholder: "Collegamento clickthrough",
				settingsLogoSocialExplain: "Personalizzare il collegamento in alto a destra nell\'intestazione.",
				settingsLogoSocialText: "Testo",
				settingsLogoSocialLink: "Collegamento",
				settingsDataFieldsExplain: "Selezionare i campi per nome foto, didascalia e colore.",
				settingsDataFieldsError: "L\'applicazione non è in grado di determinare i dati appropriati relativi a nome, didascalia o colore. Selezionare qui i campi da utilizzare. Queste impostazioni possono essere modificate in un secondo momento.",
				settingsFieldsLabelName: "Nome",
				settingsFieldsLabelDescription: "Didascalia",
				settingsFieldsLabelColor: "Colore",
				settingsExtentExplain: "Impostare l\'estensione iniziale di Tour mappa utilizzando la mappa interattiva seguente.",
				settingsExtentExplainBottom: "L\'estensione viene utilizzata solo se include il primo punto del tour. Il valore è permanente nell\'estensione iniziale della mappa Web.",
				settingsExtentDrawBtn: "Disegna una nuova estensione",
				settingsExtentModifyBtn: "Modifica l\'estensione corrente",
				settingsExtentApplyBtn: "Applica su mappa principale",
				settingsZoomExplain: "Imposta lo zoom per i punti della storia successivi all\'introduzione (facoltativo).",
				settingsLabelZoom: "Scala/livello",
				settingsZoomFirstValue: "Nessuno",
				settingsFieldError: "Selezionare un campo in ogni elenco",
				dataExplain: "Il feature service verrà aggiunto alla mappa Web. Non verrà condiviso con altri utenti e i privilegi di aggiunta, modifica ed eliminazione saranno disponibili solo per l\'utente corrente.<br /><br />Se si modificano i privilegi di condivisione dell\'applicazione, il sistema chiederà se si desidera aggiornare i privilegi di condivisione del feature service. Tale operazione è necessaria per consentire agli utenti di accedere ai dati. L\'utente corrente rimarrà l\'unico a disporre dei privilegi di modifica.",
				dataNameLbl: "Nome servizio",
				dataFolderListLbl: "Cartella",
				dataFolderListFetching: "Recupero cartelle...",
				dataRootFolder: "Radice",
				dataNameError: "Immetti un nome per il feature service",
				dataFolderError: "Seleziona un cartella valida",
				dataSrcContainsInvalidChar: "Il nome del feature service contiene uno o più caratteri non validi (-, <, >, #, %, :, \", ?, &, +, / o \).",
				dataSrvAlreadyExistsError: "Nell\'organizzazione esiste già un servizio con questo nome. Scegliere un nome diverso.",
				dataBtnSave: "Crea il servizio",
				dataFooterProgress: "Creazione in corso",
				dataFooterSucceed: "Creazione riuscita. Caricamento in corso",
				dataFooterError: "Creazione non riuscita. Riprovare",
				tabError: "Verificare la presenza di errori in tutte le schede",
				introRecordBtn: "Introduzione",
				introRecordActivate: "Usa il primo punto come introduzione (non viene visualizzato nel gruppo)"
			},
			addPopupJS: {
				uploadingPicture: "Caricamento immagine in corso",
				uploadSuccess: "Caricamento riuscito",
				uploadError: "Errore durante il caricamento dell\'immagine",
				notJpg: "Scegliere una foto JPEG da caricare",
				errorNoPhoto: "Scegli un\'immagine da caricare",
				errorNoThumbnail: "Scegliere un\'anteprima da caricare",
				errorInvalidPicUrl: "Immettere un URL immagine valido per il punto del tour",
				errorInvalidThumbUrl: "Immettere un URL anteprima valido per il punto del tour",
				errorNoName: "Immetti un nome per il punto del tour",
				errorNoDescription: "Immetti una didascalia per il punto del tour",
				errorNoLocation: "Imposta una posizione per il punto del tour"
			},
			builderJS: {
				noPendingChange: "Nessuna modifica in sospeso",
				unSavedChangeSingular: "1 modifica non salvata",
				unSavedChangePlural: "modifiche non salvate",
				popoverDiscard: "Annullare tutte le modifiche non salvate?",
				yes: "Sì",
				no: "No",
				popoverLoseSave: "Se si apre il viewer, tutte le modifiche non salvate andranno perse",
				ok: "OK",
				popoverSaveWhenDone: "Al termine, non dimenticare di salvare",
				closeWithPendingChange: "Confermare l\'azione? Le modifiche apportate andranno perse.",
				gotIt: "OK",
				savingApplication: "Salvataggio dell\'applicazione",
				saveSuccess: "Salvataggio dell\'applicazione completato",
				saveError: "Salvataggio non riuscito. Riprovare",
				dragColorPicker: "Cambia posizione<br />o colore",
				dataWarningExtent: "Sono presenti dati esterni all\'estensione della mappa Web. Tali dati non verranno utilizzati come punti del tour. Se si desidera utilizzarli, cambiare l\'estensione della mappa.",
				dataWarningVisibi: "Il layer Tour mappa non è attualmente visibile nell\'estensione della mappa Web corrente. Verificare che il layer sia visibile con una mappa di dimensioni %MAPSIZE%.",
				dataWarningEdit: "Modifica la mappa Web",
				dataWarningClose: "Chiudi",
				signIn: "Effettuare l\'accesso con un account su",
				signInTwo: "per salvare l\'applicazione."
			},
			organizePopupJS: {
				messageStart: "L\'opzione scelta consente di eliminare",
				messageSinglePoint: "un punto del tour",
				messageMultiPoint: "punti del tour",
				messagePermantRemove: "Questa operazione implica la rimozione definitiva",
				messageRecord: "del record",
				messageRecordPlural: "dei record",
				messageConfirm: "dal database. Continuare?",
				labelButtonShow: "Mostra",
				labelButtonHide: "Nascondi"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "Immagine e anteprima verranno eliminate definitivamente",
				popoverDeleteWarningThumb: "L\'anteprima verrà eliminata definitivamente",
				popoverUploadingPhoto: "Caricamento di immagine e anteprima",
				popoverUploadingThumbnail: "Caricamento dell\'anteprima",
				popoverUploadSuccessful: "Caricamento riuscito",
				popoverUploadError: "Caricamento non riuscito. Riprovare",
				changePicAndThumb: "Cambia immagine",
				changeThumb: "Cambia anteprima",
				selectPic: "Cambia immagine",
				selectThumb: "Cambia anteprima",
				uploadPicAndThumb: "Applica"
			},
			headerJS:{
				editMe: "Modifica utente",
				templateTitle: "Imposta titolo modello",
				templateSubtitle: "Imposta sottotitolo modello"
			},
			crossFaderJS:{
				setPicture: "Imposta titolo immagine",
				setCaption: "Imposta didascalia immagine"
			},
			importPopup: {
				title: "Importa",
				prevBtn: "Indietro",
				nextBtn: "Avanti"
			},
			importPopupHome: {
				header: "Dove sono archiviate le immagini?",
				loadCSV: "Si fa riferimento a esse in un CSV (qualsiasi servizio di condivisione immagini o server Web, per i dettagli consultare la guida)",
				loadFolder: "Una cartella nel computer (richiede un browser moderno e un\'origine dati feature service con allegati)"
			},
			onlinePhotoSharingCommon: {
				header1: "Le immagini devono essere condivise pubblicamente.",
				header2: "L\'importazione sarà limitata a %NB1% immagini per rispettare il limite di %NB2% punti per tour.",
				emptyDataset: "Errore, nessun\'immagine trovata",
				footerImport: "Importa",
				selectAlbum: "Seleziona un album pubblico",
				selectAlbum2: "Seleziona un album",
				pleaseChoose: "Scegli",
				userLookup: "Ricerca",
				userLookingup: "Ricerca in corso",
				csv: "Si fa riferimento in un CSV",
				fromScratch: "Avvia da zero",
				select: "Crea una selezione",
				locUse: "Usa posizione immagini",
				locWhy: "perché?",
				locExplain: "Si può selezionare di non utilizzare le posizioni delle immagini perché possono essere ereditate dall\'album, quindi tutte le foto sono nella stessa posizione."
			},
			viewFlickr: {
				header: "Immettere un nome utente Flickr e selezionare un set di foto o un tag da importare.",
				userInputLbl: "Immettere un nome utente",
				signInMsg2: "Utente non trovato",
				selectSet: "Selezionare un set di foto",
				selectTag: "o selezionare un tag",
				footerImportTag: "Importa il tag selezionato",
				footerImportSet: "Importa il set selezionato"
			},
			viewFacebook: {
				header: "Autentica con un account utente Facebook o utilizza una pagina pubblica. Gli album privati possono essere utilizzati per creare Tour mappa pubblici che non richiedono l\'autenticazione dell\'utente Facebook, consentendo di mantenere privati commenti e simili.",
				leftHeader: "Utente Facebook",
				rightHeader: "Pagina Facebook",
				pageExplain: "Una pagina Facebook è un marchio/prodotto pubblico o un personaggio pubblico come <b>esrigis</b>. È possibile ottenere il nome della pagina dopo il primo \"/\" nell\'URL della pagina.",
				pageInputLbl: "Immettere un nome di pagina",
				lookupMsgError: "Pagina non trovata"
			},
			viewPicasa: {
				header: "Immettere l\'e-mail o l\'ID di un account Picasa o Google+.",
				userInputLbl: "Immettere un\'e-mail o un ID",
				signInMsg2: "Account non trovato",
				howToFind: "Come trovare un ID dell\'account",
				howToFind2: "Copiare le cifre tra il primo e il secondo \"/\" di qualsiasi pagina Picasa o G+"
			},
			viewCSV: {
				uploadBtn: "Selezionare o rilasciare un file CSV",
				resultHeaderEmpty: "Il CSV è vuoto",
				resultHeaderSuccess: "Caricati %NB_POINTS% punti",
				resultHasBeenLimited: "L\'importazione è stata limitata ai primi %VAL1% punti su %VAL2% per rispettare il limite di %VAL3% punti per tour",
				browserSupport: "Il browser non è supportato; per utilizzare un CSV è necessario <a href='http://browsehappy.com/' target='_blank'>aggiornare il browser</a> o utilizzare il map viewer Web di ArcGIS.com (consultare la Guida).",
				errorLatLng: "Campi Latitudine e Longitudine non trovati. Valori possibili per la latitudine sono: <i>%LAT%</i> e per la longitudine: <i>%LONG%</i>.",
				errorFieldsExplain: "Il caricamento non è riuscito perché non sono stati trovati i seguenti campi obbligatori",
				errorFieldsName: "I valori possibili per <b>Nome</b> sono: %VAL%",
				errorFieldsDesc: "I valori possibili per <b>Descrizione</b> sono: %VAL%",
				errorFieldsUrl: "I valori possibili per <b>URL immagine</b> sono: %VAL%",
				errorFieldsThumb: "I valori possibili per <b>URL anteprima</b> sono: %VAL%",
				errorFields2Explain: "Il caricamento non è riuscito perché il CSV non usa gli stessi attributi del layer per i seguenti attributi",
				errorFields2Name: "<b>Nome</b> usa %VAL1% invece di %VAL2%",
				errorFields2Desc: "<b>Descrizione</b> usa %VAL1% invece di %VAL2%",
				errorFields2Url: "<b>URL immagine</b> usa %VAL1% invece di %VAL2%",
				errorFields2Thumb: "<b>URL anteprima</b> usa %VAL1% invece di %VAL2%",
				resultFieldsAll: "Tutti gli attributi sono stati importati",
				resultFieldsNotAll: "I seguenti attributi non sono stati importati perché non esistono nel layer mappa",
				resultFieldsNotAll2: "Sono stati importati i seguenti attributi",
				footerNextBtnResult: "Importa nella mappa Web",
				footerProgress: "Importazione in corso",
				footerSucceed: "Importazione riuscita. Caricamento in corso"
			},
			viewGeoTag: {
				header: "Fare clic o toccare le immagini da importare per individuarle.",
				headerMore: "Perché le immagini non vengono individuate?",
				headerExplain: "Se le immagini hanno una posizione valida, verranno individuate automaticamente sulla mappa ed elencate nella seconda scheda.<br /><br />Per impostazione predefinita, Picasa e Flickr non sfruttano i metadati di posizione EXIF delle immagini; controllare le impostazioni di Flickr/Picasa nella scheda Privacy per consentire l\'uso della posizione delle immagini. Potrebbe essere necessario importare nuovamente le immagini in Flickr/Picasa.<br /><br />Per Facebook, è necessario andare su ogni immagine, fare clic su Modifica e selezionare la posizione tra le scelte consigliate basate sui metadati EXIF delle immagini.",
				leftPanelTab1: "Per individuare",
				leftPanelTab2: "Individuato",
				clickOrTap: "Fare clic o toccare la mappa per individuare",
				clickDrop: "Non importare",
				footerImport: "Importa",
				footerProgress: "Importazione in corso",
				footerSucceed: "Importazione completata. Caricamento in corso..."
			},
			initPopup: {
				title: "Benvenuto nel Generatore di Tour mappa",
				prevBtn: "Indietro",
				nextBtn: "Avanti"
			},
			initPopupHome: {
				header2: "L\'Assistente consente di generare un Tour mappa da immagini già archiviate online o le importerà nell\'account ArcGIS Online for Organization dell\'utente.",
				title1: "Immagini personali già ospitate",
				title2: "Devo ospitare le mie immagini",
				hostedFsNA: "Disponibile solo per utenti con privilegi di editore e amministratore di ArcGIS for Organization",
				footer1: "Al termine, non dimenticare di condividere il Tour mappa con il proprio pubblico mediante la pagina di elementi dell\'applicazione.",
				footer2: "Consulta la Guida di Tour mappa",
				footer3: "Scarica il modello CSV",
				footerProgress: "Creazione in corso",
				footerSucceed: "Creazione completata. Caricamento in corso..."
			},
			helpPopup: {
				title: "Guida",
				close: "Chiudi",
				tab1: {
					title: "Introduzione",
					div1: "Il modello di Tour mappa è progettato per presentare informazioni geografiche in cui è presente un elemento fotografico interessante per la storia da raccontare.",
					div2: "Il modello produce un\'applicazione Web interessante e di facile utilizzo che consente di presentare una breve serie di luoghi su una mappa in una sequenza numerata che può essere sfogliata dagli utenti. Il modello è progettato per l\'utilizzo in qualsiasi browser Web su qualsiasi dispositivo, compresi smartphone e tablet.",
					div3: "La presente guida mostra all\'utente i passaggi della pubblicazione di Tour mappa quali:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>Tour mappa Palm Springs</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>I migliori giri in bicicletta in montagna nei Paesi Bassi</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>Tour mappa del fiume di Los Angeles</a></li></ul>",
					div5: "Vogliamo vostre notizie! Non esitate a condividere il vostro Tour mappa con noi:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>Sito Web StoryMaps</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Avete trovato un bug o volete richiedere una nuova funzione? Inviateci un messaggio nella <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>pagina del progetto GitHub</a>."
				},
				tab2: {
					title: "Dati",
					div1: "Quando si crea un Tour mappa, l\'elemento principale da considerare è la scelta del punto in cui verranno archiviate le immagini. Tour mappa può utilizzare immagini archiviate in grandi servizi di condivisione di foto, su qualsiasi server Web o feature service.",
					div2: "Il generatore interattivo offre due opzioni per la gestione delle immagini in Tour mappa:",
					div3: "<ul><li>È possibile utilizzare <b>foto già online</b>, come ad esempio immagini archiviate in un sito per la condivisione di foto, come Flickr, o immagini archiviate nel proprio sito Web. In Tour mappa si farà riferimento a tali immagini mediante i relativi URL</li><li>È anche possibile <b>caricare fotografie dal proprio computer</b> direttamente in Tour mappa. Tale opzione di caricamento richiede un account con abbonamento ad ArcGIS for Organizations e che l\'utente abbia privilegi di editore o amministratore (perché viene creato automaticamente un feature service ospitato per l\'utente in cui le foto sono archiviate come allegati)</li></ul>",
					div4: "I principali casi d\'uso sono:",
					div4b: "<b>Le foto non sono ancora ospitate</b> e l\'utente dispone di un account Organization: l\'utilizzo di un feature service ospitato rappresenta la scelta migliore. Come i servizi di condivisione di foto pubblici, ottimizziamo le immagini in modo da creare immagini rapide da caricare e l\'utente avrà accesso a tutte le possibilità di amministrazione e di gestione dei dati della piattaforma ArcGIS",
					div5: "<b>L\'utente non è membro di un\'organizzazione</b>: prima è necessario caricare le immagini in un sito Web per la condivisione di foto o sul proprio server Web. Quindi, la procedura guidata aiuta l\'utente a utilizzare le immagini che continueranno a essere ospitate nella posizione originale",
					div6: "<b>Si desidera riutilizzare un feature service esistente</b> che archivia le immagini come allegati o che fa riferimento a immagini esterne: consultare la sezione dettagliata di seguito",
					div7: "<b>Utenti di una versione precedente</b> del modello di Tour mappa e già in possesso del CSV che fa riferimento alle immagini e alle anteprime: è possibile importare e ottimizzare i dati. La procedura guidata supporta solo CSV che utilizzano attributi di lat/long; i CSV basati su indirizzi possono continuare a essere utilizzati mediante la mappa Web (vedere la sezione di seguito)",
					div8: "Importare da servizi di condivisione di immagini online",
					div9: "L\'operazione di importazione fa riferimento a immagini già ospitate tramite la memorizzazione dei relativi URL in una raccolta di feature mappa Web. Le immagini non vengono archiviate in ArcGIS Online. Se le immagini ospitate sono danneggiate, non saranno disponibili in Tour mappa e verrà utilizzata un\'immagine \"Immagine non disponibile\". Secondo il fornitore di servizi, il Tour mappa importerà o meno il nome, la descrizione e la posizione delle immagini. Tali attributi sono memorizzati nella mappa Web e le modifiche ai servizi online non verranno riflesse in Tour mappa.",
					div10: "Archiviare le immagini su un server Web",
					div11: "Se si sceglie di ospitare le immagini per proprio conto, è necessario creare manualmente le anteprime delle immagini. Se per le anteprime si utilizzano immagini a risoluzione piena, ne risultano prestazioni scarse. Per tale motivo si consiglia di utilizzare un servizio di condivisione di foto online o un feature service che effettui l\'operazione.",
					div12: "Utilizzare un feature service o uno shapefile esistente",
					div13: "Come origine dati per Tour mappa è possibile utilizzare qualsiasi feature service o shapefile. Deve essere aggiunto come layer nella mappa Web mediante ArcGIS.com Map Viewer. Se l\'applicazione trova gli attributi previsti nel layer, saranno disponibili tutte le funzionalità del generatore.",
					div14: "I campi previsti sono (senza differenza tra maiuscole e minuscole):",
					div151: "Nome",
					div152: "Descrizione",
					div153: "Immagine",
					div154: "Anteprima",
					div155: "Colore (opzionale)",
					div16: "I campi Nome e Descrizione sono obbligatori. Se l\'applicazione non trova campi corrispondenti quando si utilizza un feature service, il visualizzatore non funzionerà fino a quando non verranno configurati i campi da utilizzare mediante il generatore. I layer CSV e shapefile aggiunti alla mappa Web devono avere tutti i campi obbligatori; in caso contrario, il generatore non funziona.",
					div17: "I campi Immagine e Anteprima sono obbligatori per i feature service senza allegati e facoltativi ma consigliati per i feature service con allegati. Se nel servizio sono abilitati gli allegati, il generatore consente di caricare le immagini come allegati. In caso contrario, è possibile soltanto modificare l\'URL dell\'immagine e dell\'anteprima.",
					div18: "Creazione di un feature service ospitato da CSV o shapefile",
					div19: "Quando si crea un feature service ospitato da un CSV o shapefile, per impostazione predefinita gli allegati non sono abilitati. Per abilitarli, aprire la pagina Elementi feature service e fare clic sulla piccola freccia sulla sezione Layer per visualizzare l\'opzione. Dopo aver effettuato quest\'operazione, Tour mappa continuerà a utilizzare le immagini e le anteprime a cui si è fatto riferimento mediante gli attributi. Facoltativamente, se si desidera caricare le immagini come allegati di feature service, utilizzare i due pulsanti sul pannello immagini (Cambia immagine e Cambia anteprima).",
				},
				tab3: {
					title: "Personalizzazione",
					div1: "Il generatore fornisce numerose opzioni di personalizzazione accessibili mediante il pulsante IMPOSTAZIONI nel pannello superiore. Se non si trova l\'opzione cercata, è disponibile anche una versione scaricabile che può essere distribuita nel proprio server Web per soddisfare le proprie necessità.",
					div2: "Si consiglia di utilizzare la versione ospitata, con le seguenti eccezioni:",
					div3: "<li>Non offre una personalizzazione dell\'interfaccia utente desiderata, per esempio l\'utilizzo di un\'immagine di sfondo per l\'intestazione</li><li>L\'utente è uno sviluppatore e desidera migliorare l\'applicazione</li>",
					div4: "La versione scaricabile non offre il generatore interattivo. Tour mappa ottiene i dati da una mappa Web e la configurazione da un file di configurazione che offre le stesse possibilità della versione ospitata. Si consiglia di creare e ottimizzare la mappa Web con la versione ospitata e di riutilizzarla nella versione scaricabile.",
					div5: "Per ulteriori informazioni sulla versione scaricabile, visitare la <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>pagina di progetto GitHub</a>."
				},
				tab4: {
					title: "Suggerimenti",
					div1: "Immagini",
					div2: "Si consiglia l\'orientamento delle fotografie orizzontale e non verticale. Le immagini con orientamento verticale possono essere utilizzate, ma su schermi più piccoli, come quello dell\'iPad, una gran parte della fotografia può essere nascosta dalla didascalia, perché il testo occupa più spazio quando è visualizzato in un\'area alta rispetto a un\'area larga. Sebbene in un Tour mappa sia possibile utilizzare immagini di dimensioni, forme e orientamenti diversi, si consiglia di utilizzare forme e dimensioni uguali per tutte le immagini. In tal modo, l\'utente non sarà distratto da immagini di dimensioni diverse mentre segue il tour.",
					div3: "Formattare il testo della didascalia con tag HTML",
					div4: "Il testo della didascalia può contenere tag HTML per definire formattazione e collegamenti; consultare <a href='http://blogs.esri.com/esri/arcgis/2013/03/29/add-links-map-tour/' target='_blank'>questo post del blog</a>.",
					div5: "Layer di supporto",
					div6: "Nella mappa è possibile aggiungere ulteriori layer di supporto. Tali layer saranno visualizzati in Tour mappa per fornire orientamento, sfondo e altre feature geografiche che si desidera siano mostrate nella mappa, oltre ai punti di Tour mappa, quale un\'area di studio, un percorso a piedi o in auto che collega ai propri punti ecc. Il modello visualizza i layer di supporto utilizzando la simbologia specificata nella mappa Web, i popup non sono disponibili.",
					div7: "Mantenere il tour breve e piacevole",
					div8: "Esiste un limite di 99 punti per tour. Naturalmente, la maggior parte dei Tour mappa sarà molto più breve. Il pubblico non desidera scorrere troppi punti del tour. Il soggetto può essere affascinante, ma non si deve presupporre che lo sarà anche per il pubblico.",
					div9: "Per ulteriori informazioni, consultare <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>la guida dettagliata</a>."
				},
				tab5: {
					title: "Pubblicazione",
					div1: "Al termine, non dimenticare di condividere il Tour mappa con il proprio pubblico mediante la pagina Elementi dell\'applicazione in ArcGIS Online. Durante il processo, se necessario ArcGIS Online chiederà di aggiornare le risorse dipendenti (mappa Web, feature service) che non dispongono dei privilegi di condivisione. Se una delle risorse non è condivisa con il pubblico, gli utenti verranno reindirizzati alla pagina di accesso ad ArcGIS Online.",
					div2: "Se si utilizza un feature service ospitato creato mediante il generatore di Tour mappa, l\'applicazione gestisce la protezione del servizio e l\'utente è il solo con privilegi di modifica, anche se il servizio è condiviso pubblicamente.",
					div3: "Prima di condividere pubblicamente un Tour mappa, verificare che funzioni quando non si è collegati al proprio account ArcGIS.com."
				}
			}
        }
    })
);
