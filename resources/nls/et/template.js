﻿define(
({
		viewer: {
			loading: {
				step1: "RAKENDUSE LAADIMINE",
				step2: "ANDMETE LAADIMINE",
				step3: "ALUSTAN TUURI",
				loadBuilder: "VAHETA KOOSTAJA TÜÜP",
				fail: "Kaardi tuuri laadimine ebaõnnestus. Vabandame.",
				failButton: "Proovi uuesti"
			},
			errors: {
				boxTitle: "Esines tõrge",
				invalidConfig: "Totaalne viga: vigane konfiguratsioon",
				invalidConfigOwner: "Totaalne viga: vigane konfiguratsioon (vajalik on autoriseeritud omanik)",
				invalidConfigNoWebmap: "Totaalne viga: Vigane konfiguratsioon (vajalik on veebikaart ja autoriseeritud omanik)",
				createMap: "Võimetu kaarti koostama",
				invalidApp: "Totaalne viga: Rakendust ei saa laadida",
				noLayer: "Veebikaart ei sisalda kaardi tuuri jaoks sobivat kihti.",
				noLayerMobile: "Tere tulemast kaardi tuuri veebirakendusse! Antud rakendus ei ole seadistatav. Kaardi tuuri redigeerimine ei ole mobiilsetes seadmetes toetatud.",
				noLayerView: "Tere tulemast kaardi tuuri veebirakendusse!<br />Antud rakendus ei ole veel seadistatud.",
				appSave: "Viga veebirakenduse salvestamisel",
				mapSave: "Viga veebikaardi salvestamisel",
				featureServiceLoad: "Viga objektiteenuse laadimisel",
				notAuthorized: "Te ei ole selle rakenduse konfigureerimiseks autoriseeritud",
				oldBrowserTitle: "Brauser ei ole täielikult toetatud",
				noBuilderIE8: "Kaardi tuuri koostaja ei ole toetatud varasemaga, kui Internet Explorer 9 versiooniga.",
				ie10Win7Explain: "Kaardi tuuri interaktiivne koostaja ei ole toetatud Windows 7 operatsioonisüsteemis kasutatava Internet Explorer 10 brauseriga, kui andmeallikas on manustega objektiteenus. Manustega objektiteenuste kasutamiseks peate <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>käsitsi muutma dokumendi ülesehitust Internet Explorer 9 standardite alusel</a>, <a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'> Migreeri brauser Internet Explorer 9 versioonile </a> või uuenda operatsioonisüsteem Windows 8 platvormile.",
				oldBrowserExplain: "Antud brauser ei toeta automaatset pisipiltide koostamist pildiandmetest, mis on laaditud tuuri kirjeldavale kaardile. Teil on võimalik koostada kaart selles brauseris kasutamiseks, kuid peate omistama igale üles laetud pildile asjakohase pisipildi.",
				oldBrowserExplain2: "Oskuste parendamiseks, <a href='http://browsehappy.com/' target='_blank'>uuendage enda brauserit</a> or <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>Google Chrome Frame for Internet Explorer aktiveerimiseks</a>.",
				oldBrowserExplain3: "Kaardi tuuri koostaja ei tööta Windows XP operatsioonisüsteemi Internet Explorer 10 versiooniga.",
				oldBrowserClose: "Sulge"
			},
			mobileHTML: {
				showIntro: "KUVA PEALKIRI",
				hideIntro: "PEIDA PEALKIRI",
				navList: "Loend",
				navMap: "Kaart",
				navInfo: "Pildid",
				introStartBtn: "Algus"
			},
			desktopHTML: {
				storymapsText: "Kaardilugu",
				builderButton: "Vaheta koostamise režiimile"
			},
			builderHTML: {
				panelHeader: "RAKENDUSE KONFIGURATSIOON",
				buttonSave: "SALVESTA",
				buttonDiscard: "TÜHISTA",
				buttonSettings: "Seaded",
				buttonView: "Vaaterežiim",
				buttonHelp: "Abi",
				buttonOrganize: "Paiguta",
				buttonAdd: "Lisa",
				buttonImport: "Impordi",
				buttonImportDisabled: "Importimine ei ole kasutatav manustega objektiteenuste juures",
				modalCancel: "Tühista",
				modalApply: "Kehtesta",
				organizeHeader: "Organiseeri tuuri",
				organizeGeneralCaption: "Kasuta tuuri punktide sorteerimisel haaramise ja lohistamise meetodit",
				organizeDelete: "Kustuta",
				organizeHide: "Peida",
				addMaxPointReached: "Olete jõudnud ikoonide poolt autoriseeritud kogumi maksimaalse arvu punktideni ning ei saa rohkem tuuri punkte lisada.<br /><br />Pidage meeles, et kui kustutate juba olemasolevaid punkte, peate taaskäivitama ka rakenduse.",
				addMaxPointReachedMobile: "Olete jõudnud maksimaalse arvu autoriseeritud punktideni ning ei saa seda pilti lisada. Vabandame.",
				addClose: "Sulge",
				addHeader: "Lisa uus tuuri punkt",
				addTabPicture: "Pilt",
				addTabInformation: "Info",
				addTabLocation: "Asukoht",
				addSelectCaption: "Vali või haara pilt",
				addSelectCaptionNoFileReader: "Vali pilt",
				addChangePhoto: "Muuda pilt ja pisipilt",
				addPictureResolutionIntro: "Pildi resolutsioon on nõutavast suurem:",
				addPictureResolutionOldBrowser: "Pildi resolutsioon on nõutavast suurem. Optimeeri kaardi tuuri sisu, määrates resolutsiooni madalamana kui %SOOVITUSLIK_RES%.",
				addPictureResolutionResize: "Muuda pildi resolutsioon %RESOLUTSIOON%",
				addPictureResolutionKeep: "Säilita algne resolutsioon %RESOLUTSIOON%",
				addSelectThumbnail: "Vali pisipilt",
				addNoThumbSelected: "Ühtegi pisipilti ei ole valitud",
				addThumbSelected: "Valitud",
				addCameraSettingsHeader: "KAAMERA SEADED",
				addThumbnailHeader: "PISIPILT",
				addLabelPicUrl: "Pildi URL",
				addLabelThumbUrl: "Pisipildi URL",
				addTextPlaceholderUrl: "Sisesta URL",
				addLabelName: "Nimi",
				addLabelDescription: "Alapealkiri",
				addTextPlaceholder: "Kirjuta midagi",
				addLocatePlaceholder: "Märgi aadress või asukoht",
				addPinColor: "Värv",
				addLatitude: "Laius",
				addLongitude: "Pikkus",
				addLatitudePlaceholder: "nt 34.056",
				addLongitudePlaceholder: "nt -117.195",
				addUploading: "Laadin tuuri punkti",
				addSave: "Lisa tuuri punkt",
				addMobileUploading: "Laen pilti",
				addMobileName: "Sisesta nimi",
				addMobileNameMandatory: "Viga, palun sisesta nimi.",
				addMobileError: "Midagi läks valesti. Vabandame.",
				settingsHeader: "Rakenduse seaded",
				settingsTabLayout: "Kujundus",
				settingsTabColor: "Värvid",
				settingsTabLogo: "Päis",
				settingsTabFields: "Andmed",
				settingsTabExtent: "Kuvaulatus",
				settingsTabZoom: "Suumimise tase",
				settingsLayoutExplain: "Vali rakenduse kujundus kahe variandi vahel.",
				settingsLayoutProfessional: "Kolme paneeliga kujundus",
				settingsLayoutModern: "Integreeritud kujundus",
				settingsLayoutSelected: "Valitud kujundus",
				settingsLayoutSelect: "Vali see kujundus",
				settingsColorExplain: "Muuda väljanägemist, valides selleks puhuks eelnevalt määratud teema või koostades ise uue.",
				settingsLabelColor: "Päise, sisu ja jaluse värvid",
				settingsLogoExplain: "Kohanda päise logo (maksimum on 250 x 50px).",
				settingsLogoEsri: "Esri logo",
				settingsLogoNone: "Logo puudub",
				settingsLogoCustom: "Valikuline logo",
				settingsLogoCustomPlaceholder: "Pildi URL",
				settingsLogoCustomTargetPlaceholder: "Kliki läbi lingi",
				settingsLogoSocialExplain: "Kohanda päist ülemise paremal pool asuva lingi kaudu.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Link",
				settingsDataFieldsExplain: "Vali foto nime, selgitava teksti ja värvi väljad.",
				settingsDataFieldsError: "Rakendus ei suuda määrata sobivat nime, selgitavat teksti ega värvi andmeid. Palun valige siin kasutamiseks vastavad väljad. Vastavad parameetrid on hiljem muudetavad.",
				settingsFieldsLabelName: "Nimi",
				settingsFieldsLabelDescription: "Alapealkiri",
				settingsFieldsLabelColor: "Värv",
				settingsExtentExplain: "Määrake Kaardi tuuri sisemine kuvaulatus läbi alloleva interaktiivse kaardi.",
				settingsExtentExplainBottom: "Antud kuvaulatust kasutatakse vaid juhul, kui see sisaldab esimest tuuri punkti. Väärtus on püsiv läbi veebikaardi sisemise kuvaulatuse.",
				settingsExtentDrawBtn: "Joonista uus ulatus",
				settingsExtentModifyBtn: "Muuda praegust ulatust",
				settingsExtentApplyBtn: "Kehtesta peamisele kaardile",
				settingsZoomExplain: "Määra looga seotud punktidele suum järgeva juhisega (valikuline).",
				settingsLabelZoom: "Mõõtkava/tase",
				settingsZoomFirstValue: "Puudub",
				settingsFieldError: "Palun vali väli igale loendile",
				dataExplain: "Objektiteenus lisatakse Teie veebikaardile. See ei ole kõigile jagatav, vaid ainult Teile lisamiseks, muutmiseks ja õiguste kustutamiseks.<br /><br /> Süsteem küsib Teie käest, kas soovite uuedada enda objektiteenuse jagamise õigusi. See on nõutud kasutajatele, kellel on Teie andmetele ligipääs. Te saate jätta ühe koos muutmise õigustega.",
				dataNameLbl: "Teenuse nimi",
				dataFolderListLbl: "Kaust",
				dataFolderListFetching: "Haaran kaustu ...",
				dataRootFolder: "Juur",
				dataNameError: "Sisesta objektiteenusele nimi",
				dataFolderError: "Vali sobilik kaust",
				dataSrcContainsInvalidChar: "Objektiteenuse nimi sisaldab ühte või mitut vigast tähemärki (-, <, >, #, %, :, \", ?, &, +, / või \).",
				dataSrvAlreadyExistsError: "Sama nimega teenus on Teie organisatsioonis juba olemas. Palun valige teistsugune nimi.",
				dataBtnSave: "Koosta teenus",
				dataFooterProgress: "Koostamine käib",
				dataFooterSucceed: "Koostamine on lõpetatud. Laadin",
				dataFooterError: "Koostamine ei õnnestunud. Proovi uuesti",
				tabError: "Palun kontrolli vigu kõigis osades",
				introRecordBtn: "Intro",
				introRecordActivate: "Kasuta esimest punkti tutvustusena (ei ilmu karussellis)"
			},
			addPopupJS: {
				uploadingPicture: "Laen pilti",
				uploadSuccess: "Laadimine õnnestus",
				uploadError: "Viga pildi laadimisel",
				notJpg: "Laadimiseks vali palun jpeg formaadis pilt",
				errorNoPhoto: "Vali pilt laadimiseks",
				errorNoThumbnail: "Vali pisipilt laadimiseks",
				errorInvalidPicUrl: "Sisesta antud tuuri punktile kehtiv pildi URL",
				errorInvalidThumbUrl: "Sisesta antud tuuri punktile kehtiv pisipildi URL",
				errorNoName: "Sisesta selle tuuri punktile nimetus",
				errorNoDescription: "Sisesta selle tuuri punktile selgitav tekst",
				errorNoLocation: "Määra selle tuuri punktile asukoht"
			},
			builderJS: {
				noPendingChange: "Ühtegi muudatust ei ole ootel",
				unSavedChangeSingular: "1 mittesalvestatud muudatus",
				unSavedChangePlural: "mittesalvestatud muudatused",
				popoverDiscard: "Olete kindel, et soovite loobuda salvestamata muudatustest?",
				yes: "Jah",
				no: "Ei",
				popoverLoseSave: "Kui avate sirvija, siis kaotate kõik salvestamata muudatused",
				ok: "Ok",
				popoverSaveWhenDone: "Ärge unustage salvestada, kui olete lõpetanud",
				closeWithPendingChange: "Olete kindel, et soovite tegevuse kinnitada? Teie tehtud muudatused võivad kaduma minna.",
				gotIt: "Ok",
				savingApplication: "Salvestan rakenduse",
				saveSuccess: "Rakenduse salvestamine õnnestus",
				saveError: "Salvestamine ebaõnnestus, palun proovi uuesti",
				dragColorPicker: "Paigutage mind ümber<br />või muutke minu värvi",
				dataWarningExtent: "Teie andmed on väljaspool veebikaardi ulatust. Neid andmeid ei saa kasutada tuuri punktidena, mistõttu vahetage nende kasutamiseks kaardi ulatust.",
				dataWarningVisibi: "Teie kaardi tuur ei ole praeguse veebikaardi ulatuses nähtav. Veenduge, et Teie kaardi tuuri kiht on nähtav %KAARDI SUURUS% suuremal kaardil.",
				dataWarningEdit: "Muuda veebikaarti",
				dataWarningClose: "Sulge",
				signIn: "Palun logige konto kaudu sisse",
				signInTwo: ", et salvestada rakendus."
			},
			organizePopupJS: {
				messageStart: "Olete valinud kustutamiseks",
				messageSinglePoint: "ühe tuuri punkti",
				messageMultiPoint: "tuuri punkti",
				messagePermantRemove: "See eemaldab jäädavalt",
				messageRecord: "kirje",
				messageRecordPlural: "kirjed",
				messageConfirm: "Teie andmebaasist. Soovite jätkata?",
				labelButtonShow: "Näita",
				labelButtonHide: "Peida"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "See kustutab jäädavalt pildi ja pisipildi",
				popoverDeleteWarningThumb: "See kustutab jäädavalt pisipildi",
				popoverUploadingPhoto: "Laadin pilti ja pisipilti",
				popoverUploadingThumbnail: "Laadin pisipilti",
				popoverUploadSuccessful: "Laadimine õnnestus",
				popoverUploadError: "Laadimine ebaõnnestus, palun proovi uuesti",
				changePicAndThumb: "Vaheta pilt",
				changeThumb: "Vaheta pisipilt",
				selectPic: "Vaheta pilt",
				selectThumb: "Vaheta pisipilt",
				uploadPicAndThumb: "Kehtesta"
			},
			headerJS:{
				editMe: "Muuda mind !",
				templateTitle: "Määra mallile pealkiri",
				templateSubtitle: "Määra mallile alampealkiri"
			},
			crossFaderJS:{
				setPicture: "Määra pildile pealkiri",
				setCaption: "Määra pildile selgitav tekst"
			},
			importPopup: {
				title: "Impordi",
				prevBtn: "Tagasi",
				nextBtn: "Järgmine"
			},
			importPopupHome: {
				header: "Kus Te oma pilte hoiate ?",
				loadCSV: "Need on CSV failis referentseeritud (mistahes jagatud teenuse või veebiserveri kaudu kättesaadavad pildid, vaata detaile abist)",
				loadFolder: "Kaust minu arvutis (eeldab tänapäevast brauserit ja manustega objektiteenust andmeallikana)"
			},
			onlinePhotoSharingCommon: {
				header1: "Pildid nõuavad avalikku jagamist.",
				header2: "Importimine on limiteeritud kuni %NB1% piltidest, et hoida piiri %NB2% punktiga tuuri kohta.",
				emptyDataset: "Viga, pilte ei leitud",
				footerImport: "Impordi",
				selectAlbum: "Vali avalik album",
				selectAlbum2: "Vali album",
				pleaseChoose: "Palun vali",
				userLookup: "Otsi üles",
				userLookingup: "Otsin üles",
				csv: "Referentseeritud CSV failis",
				fromScratch: "Alusta tühjalt kohalt",
				select: "Koosta valik",
				locUse: "Kasuta piltide asukohta",
				locWhy: "miks seda asukohta?",
				locExplain: "Te ei pruugi soovida kasutada piltide asukohta nagu neid päritakse albumist, andes tulemuseks kõik pildid sama asukohaga."
			},
			viewFlickr: {
				header: "Sisesta Flickr kasutajanimi ja vali fotode kogum või märksõna, mida soovite importida.",
				userInputLbl: "Sisesta kasutajanimi",
				signInMsg2: "Kasutajat ei leitud",
				selectSet: "Valige fotokogum",
				selectTag: "või valige märksõna",
				footerImportTag: "Impordi valitud märksõna",
				footerImportSet: "Impordi valitud kogum"
			},
			viewFacebook: {
				header: "Autendi Facebook kasutajanimega või kasuta avalikku lehte. Privaatsed albumeid saab kasutada kaardi tuuri tegemisel, mis ei eelda Facebook kasutaja autentimist ja see võimaldab hoida kommentaare ja meeldimisi privaatsena.",
				leftHeader: "Facebook kasutajanimi",
				rightHeader: "Facebook leht",
				pageExplain: "Facebook leht on avalik kaubamärk/toode nagu <b>esrigis</b>. Te saate lehe nimetuse pärast esimest '/' lehekülje URL-il.",
				pageInputLbl: "Sisesta lehe nimi",
				lookupMsgError: "Lehte ei leitud"
			},
			viewPicasa: {
				header: "Sisesta e-mail või Picasa ID või Google+ konto.",
				userInputLbl: "Sisesta e-mail või ID",
				signInMsg2: "Kontot ei leitud",
				howToFind: "Kuidas leida konto ID-d",
				howToFind2: "Kopeeri numbrikohad esimese ja teise '/' vahelt mistahes Picasa või G+ lehel"
			},
			viewCSV: {
				uploadBtn: "Vali või haara CSV fail",
				resultHeaderEmpty: "CSV fail on tühi",
				resultHeaderSuccess: "Edukalt laeti %NB_POINTS% punkti",
				resultHasBeenLimited: "Importimine on limiteeritud esimese %VAL1% punktidega %VAL2% punktidest, et hoida piiri %VAL3% punkti tuuri kohta",
				browserSupport: "Teie kasutatav brauser ei ole toetatud, CSV failide tarbeks <a href='http://browsehappy.com/' target='_blank'>uuendage enda brauserit</a> või kasutage ArcGIS.com veebikaardi sirvijat (vaata programmi abi).",
				errorLatLng: "Laiuse ja pikkuse veerge ei leitud. Võimalikud laiuskraadi väätused on: <i>%LAT%</i> ja pikkuskraadi ühikud on: <i>%LONG%</i>.",
				errorFieldsExplain: "Laadimine nurjus, kuna sobilikke veerge ei leitud",
				errorFieldsName: "<b>Nimi</b> võimalikud väärtused on: %VAL%",
				errorFieldsDesc: "<b>Kirjeldus</b> võimalikud väärtused on: %VAL%",
				errorFieldsUrl: "<b>Pildi URL</b> võimalikud väärtused on: %VAL%",
				errorFieldsThumb: "<b>Pisipildi URL</b> võimalikud väärtused on: %VAL%",
				errorFields2Explain: "Laadimine nurjus, kuna CSV fail ei kasuta samu atribuute, kui kiht järgnevate atribuutidega",
				errorFields2Name: "<b>Nimi</b> kasuta %VAL1% mitte %VAL2%",
				errorFields2Desc: "<b>Kirjeldus</b> kasuta %VAL1% mitte %VAL2%",
				errorFields2Url: "<b>Pildi URL> kasuta %VAL1% mitte %VAL2%",
				errorFields2Thumb: "<b>Pisipildi URL</b> kasuta %VAL1% mitte %VAL2%",
				resultFieldsAll: "Kõik atribuudid on imporditud",
				resultFieldsNotAll: "Järgnevad atribuudid ei ole imporditud, kuna neid ei eksisteeri kaardikihis",
				resultFieldsNotAll2: "Järgnevad atribuudid on imporditud",
				footerNextBtnResult: "Impordi veebikaarti",
				footerProgress: "Toimub importimine",
				footerSucceed: "Importimine õnnestus. Laadin"
			},
			viewGeoTag: {
				header: "Klikka või koputa piltidele, mida soovite nende paigutamiseks importida.",
				headerMore: "Miks pildid ei ole paigutatud?",
				headerExplain: "Kui piltidel on kehtiv asukoht, märgitakse need automaatselt kaardile ja teise saki all olevasse loendisse.<br /><br />Vaikimisi ei kasuta Picasa ega ka Flickr piltide EXIF metainfot, vaadake Flickr/Picasa seadeid privaatsuse seadetest, et seda ära kasutada. Võimalik, et peate kogu Flickr/Picasa impordi osa uuesti läbi tegema.<br /><br />Facebook-i puhul peate liikuma igale pildile, aktiveerima Muuda ning valima asukoha soovituslike tingimuste alusel, mis põhinevad pildiandmete EXIF sisul.",
				leftPanelTab1: "Paiguta",
				leftPanelTab2: "Paigutatud",
				clickOrTap: "Paigutamiseks klikka või koputa kaardile",
				clickDrop: "Ära impordi",
				footerImport: "Impordi",
				footerProgress: "Toimub importimine",
				footerSucceed: "Importimine õnnestus. Laadin..."
			},
			initPopup: {
				title: "Tere tulemas kaardi tuuri koostajasse",
				prevBtn: "Tagasi",
				nextBtn: "Järgmine"
			},
			initPopupHome: {
				header2: "See nõustaja abistab Teid kaardi tuuri loomisel juba veebis olemasolevatest piltidest või importides neid Teie ArcGIS Online for Organization kontole.",
				title1: "Minu pildid on juba majutatud",
				title2: "Mul on vajadus oma pilte majutada",
				hostedFsNA: "Kättesaadav ainult ArcGIS for Organization publitseerijatest ja administraatoritest kasutajaile",
				footer1: "Kui olete valmis, ärge unustage tehtud teistele jagada läbi rakenduse sisu lehe.",
				footer2: "Kasutage kaardi tuuri abi",
				footer3: "Laadi alla CSV mall",
				footerProgress: "Koostamine käib",
				footerSucceed: "Koostamine oli edukas. Laadin..."
			},
			helpPopup: {
				title: "Abi",
				close: "Sulge",
				tab1: {
					title: "Tutvustus",
					div1: "Kaardi tuuri mall on loodud geograafilise teabe esitamiseks kujul, kus siduvaks elemendiks on lugu koos fotodega.",
					div2: "Mall tekitab atraktiivse ja lihtsasti kasutatava veebirakenduse, mille kaudu saate esitada väiksemas mahus paiku numbrilises järjekorras. Mall on välja töötatud mistahes tüüpi veebibrauseris või nutiseadmes kasutamiseks.",
					div3: "Vastav abi hõlbustab teatud kaardi tuuriga seotud tegevuste realiseerimist, nt:",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>Palm Springs kaardi tuur</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>Hollandi parim mägirattamatk</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>Los Angelese jõe kaardi tuur</a></li></ul>",
					div5: "Ootame Teie tagasisidet! Jagage tehtud tulemusi meilegi:",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>StoryMaps veebileht</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "Leidsite bugi või soovite kasutada uusi funktsionaalsusi? Andke tagasisidet vastava teema osas <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub projekti leht</a>."
				},
				tab2: {
					title: "Andmed",
					div1: "Peamine komponent kaardi tuuri loomise juures on piltide haldamise asukohavalik. Kaardi tuur kasutab pilte, mis on majutatud fotode jagamise teenustena mistahes veebiserveris objektiteenustena.",
					div2: "Interaktiivne koostaja annab Teile tuuri piltide haldamise kontekstis kaks valikut:",
					div3: "<ul><li>Te saate kasutada <b>fotosid, mis juba on pilves</b>, nt piltide jagamise keskkond Flickr või Teie enda veebilehel olevat materjali. Neid pilte referentseeritakse Teie kaardi tuurile läbi URL-aadresside</li><li>Samuti saate <b>laadida fotosid kaardi tuuri </b> üles otse enda arvutist. Antud laadimise valik eeldab ArcGIS for Organizations tellimuse olemasolu ning tegija puhul Publitseerija või Administraatori õigusi (põhjus on asjaolus, et piltidest genereeritakse automaatselt majutatud objektiteenuse, kus fotosid hoitakse nn manustena)</li></ul>",
					div4: "Peamised kasutusjuhud on:",
					div4b: "<b>Teie fotod ei ole veel majutatud</b> ning Teil on organisatsiooni konto: sobilik valik oleks kasutada majutatud objektiteenust. Nõnda nagu on fotode jagamise teenused, optimeeritakse pilte ka siin selliselt, et laadida neid kiiresti üles, kasutades selleks ArcGIS platvormi andmehalduse ja administreerimise võimekust.",
					div5: "<b>Te ei ole organisatsiooni liige</b>: peate esmalt laadima pildid fotode jagamise keskkonda või enda veebiserverisse. Seejärel aitab viisard Teid tegevustes edasi, et kasutada neid pilte, mida jätkuvalt hoitakse algses asukohas",
					div6: "<b>Otsite olemasoleva objektiteenuse korduvkasutust,</b> mis hoiaks pilte manustena or mis viitaksid välistele asukohtadele: küsi nõu allolevast sektsioonist",
					div7: "<b>Olete varasema kaardi tuuri malli versiooni kasutaja</b> ja seal on juba CSV, mis viitab Teie piltidele ja pisipiltidele: Teil on võimalus importida ja täiustada oma andmeid. Viisard toetab vaid CSV faili, mis sisaldab pikkuse ja laiuse asukoha teavet, aadresside põhine CSV on samuti veebikaardile kasutatav (vt allolevat sektsiooni)",
					div8: "Impordin veebipõhisest fotode jagamise teenustest",
					div9: "Importimise toiming viitab olemasolevale majutatud piltidele, varustades nende URL-viited veebikaardi objektide kollektsioonis. Pilte ei hoida ArcGIS Online all. Kui piltide lingid on vigased, ei kuvata neid ka kaardi tuuri aknas ja kuvatakse teadet "Pilt ei ole kättesaadav". Sõltuvalt teenusepakkujast,  impordib kaardi tuur kas piltide nime, kirjelduse ja asukoha. Neid atribuute hoitakse veebikaardil ning kõik tehtavad muudatused kajastuvad ka kaardi tuuri sisus.",
					div10: "Haldan pilte veebiserveris",
					div11: "Kui valite piltide majutamise omalt poolt, peate manuaalselt koostama ka pisipildid. Kasutades piltide täisresolutsiooni pisipiltide tarbeks, saate mitte kõige parema tulemuse. Seetõttu soovitame Teil kasutada veebipõhiseid fotode jagamise teenuseid või objektiteenuseid.",
					div12: "Kasutan olemasolevat objektiteenust või Shape faili",
					div13: "Mistahes objektiteenuse või Shape faili punkt on kasutatav kaardi tuuri andmeallikana. Peate vaid lisama selle kihina enda veebikaardile ArcGIS.com kaardiakna kaudu. Juhul, kui rakendus leiab Teie kihist loodetud atribuudid, on kõik funktsioonid ka kasutatavad.",
					div14: "Oodatavad veerud on (tõstutundlikud):",
					div151: "Nimi",
					div152: "Kirjeldus",
					div153: "Pilt",
					div154: "Pisipilt",
					div155: "Värv (valikuline)",
					div16: "Nime ja kirjelduse veerud on esmatähtsad. Kui rakendus ei leia objektiteenusest sobilikke veerge, siis vaateaken ei toimi seni, kuni tekivad kasutatavad veerud. CSV ja Shape faili kihi lisamine veebikaardile eeldab kõiki vajalikke veerge, sest vastasel korral rakenduse koostamine ei toimi.",
					div17: "Pildi ja pisipildi veerud on esmatähtsad manusteta objektiteenusele ja valikulised, aga tungivalt soovitatavad manustega objektiteenustele. Kui Teie teenuse manused on lubatud, lubab koostaja neid üles laadida manustena. Kui ei, siis saate muuta vaid pildi ja pisipildi URL-i.",
					div18: "Koostan majutatud objektiteenust CSV või Shape failist",
					div19: "Kui loote majutatud objektiteenuse CSV või Shape failist, siis seal ei ole manused vaikimisi toetatud. Selleks saate avada objektiteenuse sisu lehe, klikata väikesele noolekesele ning siis on vastav valik ka nähtav. Sellele järgnevalt jätkab kaardi tuur piltide ja pisipiltide kasutamist, mida oled läbi atibuutide viidanud. Valikuliselt võib pilte laadida ka objektiteenuse manustena.",
				},
				tab3: {
					title: "Kohandamine",
					div1: "Koostaja võimaldab mitmeid kohandamise valikuid, mis on kättesaadavad läbi ülemises paneelis oleva SEADED nupu. Kui Te ei leia oodatud valikut, võib kasutada ka allalaaditavat versiooni, mida võite integreerida enda veebiserverisse ning kohandada seda vastavalt enda vajadustele.",
					div2: "Soovitame kasutada majutatud versiooni, välja arvatud juhtudel:",
					div3: "<li>See ei paku kasutajaliidese seadistamist nagu näiteks päise taustapildi kasutus</li><li>Kui olete arendaja ning soovite rakendust omapoolselt täiustada</li>",
					div4: "Allalaaditav versioon ei paku interaktiivset koostajat. Kaardi tuur hangib andmed veebikaardilt ning selle seadistamine toimib  konfiguratsioonifaili alusel. Soovitame veebikaardi loomise ja täiustaise juures majutatud versiooni.",
					div5: "Külasta <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub projekti lehte</a>, et saada täpsemat teavet allalaaditava versiooni kohta."
				},
				tab4: {
					title: "Vihjed",
					div1: "Pildid",
					div2: "Soovitame kasutada horisontaalset paigutust. Vertikaalpaigutuse juures on pildid ka väiksematel iPad ekraanidel kasutatavad, kuid pildid võivad enda alla haarata liiga suure osa kaardi sisust. Samuti soovitame kasutada võimalikult samaväärse suurusega fotosid. Siis on ka teistel kasutajatel infot lihtsam jälgida.",
					div3: "Formatin selgitava teksti HTML märgenditega",
					div4: "Selgitav tekst saab formattimise ja linkide defineerimiseks sisaldada HTML märgendeid, vaata <a href='http://blogs.esri.com/esri/arcgis/2013/03/29/add-links-map-tour/' target='_blank'>vastavat postitust</a>.",
					div5: "Toetatud kihid",
					div6: "Te saate kaardile lisada täiendavaid toetatud kihte. Need kihid ilmuvad kaardi tuurile, et täiustada taustinfona näidatavat ala vms. Mall kuvab neid kihte veebikaardis kirjeldatud sümboloogia alusel, kuid hüpikaknaid nende kaudu kasutada ja avada ei saa.",
					div7: "Hoia enda tuuri lühikese ja löövana",
					div8: "Teil on võimalik lisada tuuri kuni 99 punkti. Enamik kaardi tuure on eeldatavasti sellest mahust väiksemad. Liiga palju punkte võib muuta info jälgimise koormavaks. Püüa arvestada ka lõppkasutajat!",
					div9: "Rohkema info saamiseks külastage <a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>detailset juhist</a>."
				},
				tab5: {
					title: "Publitseerin",
					div1: "Kui oled lõpetanud, ära unusta jagada tulemust suuremale auditooriumile läbi ArcGIS Online rakenduste valiku. Selle protsessi käigus võib ArcGIS Online paluda mistahes sellega seotud ressursside (veebikaart, objektiteenus) uuendamist, mis ei oma samu jagamise õigusi. Kui üks nendest ressurssidest ei ole auditooriumile jagatud, suunatakse kasutajad ArcGIS Online sisselogimise lehele.",
					div2: "Kui kasutate kaardi tuuri koostajaga loodud majutatud objektiteenust, haldab rakendus teenuse turvalisust ning Te jääte ainsaks kasutajaks, kel on muutmise õigused (ka juhul, kui teenus on avalikult välja jagatud).",
					div3: "Enne kaardi tuuri avalikkusele jagamist veenduge, et see toimiks ka situatsioonis, kus Te ei ole ArcGIS.com kontoga sisse logitud."
				}
			}
        }
    })
);
