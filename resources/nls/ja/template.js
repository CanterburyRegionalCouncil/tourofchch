﻿define(
({
		viewer: {
			loading: {
				step1: "アプリケーションを読み込んでいます",
				step2: "データを読み込んでいます",
				step3: "ツアーを初期化しています",
				loadBuilder: "ビルダ モードへの切り替え",
				fail: "マップ ツアーの読み込みに失敗しました",
				failButton: "再試行"
			},
			errors: {
				boxTitle: "エラーが発生しました",
				invalidConfig: "致命的なエラー: 無効な構成",
				invalidConfigOwner: "致命的なエラー: 無効な構成 (権限のある所有者が必要です)",
				invalidConfigNoWebmap: "致命的なエラー: 無効な構成 (Web マップと権限のある所有者が必要です)",
				createMap: "マップを作成できません",
				invalidApp: "致命的なエラー: アプリケーションを読み込めません",
				noLayer: "Web マップにマップ ツアーの有効なデータ レイヤが含まれていません。",
				noLayerMobile: "マップ ツアー Web アプリケーションへようこそ。このアプリケーションは構成されていません。マップ ツアー ビルダは、モバイル デバイスではサポートされていません。",
				noLayerView: "マップ ツアー Web アプリケーションへようこそ。<br />このアプリケーションは、まだ構成されていません。",
				appSave: "Web アプリケーションの保存中にエラーが発生しました",
				mapSave: "Web マップの保存中にエラーが発生しました",
				featureServiceLoad: "フィーチャ サービスの読み込み中にエラーが発生しました",
				notAuthorized: "このアプリケーションを構成する権限がありません。",
				oldBrowserTitle: "完全にサポートされていないブラウザです",
				noBuilderIE8: "マップ ツアー ビルダは、バージョン 9 より前の Internet Explorer ではサポートされていません。",
				ie10Win7Explain: "データ ソースがアタッチメントを含むフィーチャ サービスである場合、マップ ツアー対話型ビルダは、Windows 7 の Internet Explorer 10 ではサポートされていません。アタッチメントを含むフィーチャ サービスを使用するには、<a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'>ドキュメント モードを手動で強制的に Internet Explorer 9 標準にするか</a>、<a target='_blank' href='http://news.softpedia.com/news/How-to-Remove-IE10-and-Get-Back-to-IE9-on-Windows-7-308998.shtml'>Internet Explore 9 にダウングレードするか</a>、Windows 8 にアップグレードする必要があります。",
				oldBrowserExplain: "このブラウザは、マップ ツアーにアップロードした画像からサムネイルを自動生成する機能をサポートしていません。このブラウザを使用してマップ ツアーを作成できますが、アップロードした画像に対してサムネイル画像を個別に指定する必要があります。",
				oldBrowserExplain2: "操作性を改善するには、<a href='http://browsehappy.com/' target='_blank'>ブラウザをアップグレードするか</a>、<a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>Internet Explorer 向けの Google Chrome Frame を有効化してください</a>。",
				oldBrowserExplain3: "マップ ツアー ビルダは、Windows XP の Internet Explorer 10 では動作しません。",
				oldBrowserClose: "閉じる"
			},
			mobileHTML: {
				showIntro: "タイトルの表示",
				hideIntro: "タイトルの非表示",
				navList: "リスト",
				navMap: "マップ",
				navInfo: "写真",
				introStartBtn: "開始"
			},
			desktopHTML: {
				storymapsText: "ストーリー マップ",
				builderButton: "ビルダ モードに切り替え"
			},
			builderHTML: {
				panelHeader: "アプリケーション構成",
				buttonSave: "保存",
				buttonDiscard: "キャンセル",
				buttonSettings: "設定",
				buttonView: "ビュー モード",
				buttonHelp: "ヘルプ",
				buttonOrganize: "整理",
				buttonAdd: "追加",
				buttonImport: "インポート",
				buttonImportDisabled: "アタッチメントを含むフィーチャ サービスを使用する場合、インポートは使用できません",
				modalCancel: "キャンセル",
				modalApply: "適用",
				organizeHeader: "ツアーの整理",
				organizeGeneralCaption: "ツアー ポイントを並べ替えるにはドラッグ アンド ドロップを使用します",
				organizeDelete: "削除",
				organizeHide: "非表示",
				addMaxPointReached: "アイコン セットで許容されているポイントの最大数に達したため、別のツアー ポイントを追加できません。<br /><br />既存のポイントを削除した場合、アプリケーションを再度読み込む必要があります。",
				addMaxPointReachedMobile: "許容されているポイントの最大数に達したため、その写真を追加できません。",
				addClose: "閉じる",
				addHeader: "新しいツアー ポイントの追加",
				addTabPicture: "写真",
				addTabInformation: "情報",
				addTabLocation: "位置",
				addSelectCaption: "写真の選択または削除",
				addSelectCaptionNoFileReader: "写真の選択",
				addChangePhoto: "写真とサムネイルの変更",
				addPictureResolutionIntro: "写真の解像度が高すぎます:",
				addPictureResolutionOldBrowser: "写真の解像度が高すぎます。%RECOMMENDED_RES% より低い解像度を指定して、マップ ツアーの表示を最適化してください。",
				addPictureResolutionResize: "写真の解像度を %RESOLUTION% に変更",
				addPictureResolutionKeep: "元の解像度である %RESOLUTION% を維持",
				addSelectThumbnail: "サムネイルの選択",
				addNoThumbSelected: "サムネイルが選択されていません",
				addThumbSelected: "選択済み",
				addCameraSettingsHeader: "カメラ設定",
				addThumbnailHeader: "サムネイル",
				addLabelPicUrl: "写真の URL",
				addLabelThumbUrl: "サムネイルの URL",
				addTextPlaceholderUrl: "URL を入力",
				addLabelName: "名前",
				addLabelDescription: "キャプション",
				addTextPlaceholder: "ここに入力します",
				addLocatePlaceholder: "住所または位置を検索します",
				addPinColor: "色",
				addLatitude: "緯度",
				addLongitude: "経度",
				addLatitudePlaceholder: "例: 34.056",
				addLongitudePlaceholder: "例: -117.195",
				addUploading: "ツアー ポイントをアップロードしています",
				addSave: "ツアー ポイントの追加",
				addMobileUploading: "写真をアップロードしています",
				addMobileName: "名前を入力",
				addMobileNameMandatory: "エラーです。名前を入力してください。",
				addMobileError: "不具合が発生しました",
				settingsHeader: "アプリケーション設定",
				settingsTabLayout: "レイアウト",
				settingsTabColor: "色",
				settingsTabLogo: "ヘッダー",
				settingsTabFields: "データ",
				settingsTabExtent: "範囲",
				settingsTabZoom: "ズーム レベル",
				settingsLayoutExplain: "2 つのアプリケーション レイアウトの中から 1 つを選択します。",
				settingsLayoutProfessional: "3 パネル レイアウト",
				settingsLayoutModern: "統合レイアウト",
				settingsLayoutSelected: "選択したレイアウト",
				settingsLayoutSelect: "このレイアウトを選択",
				settingsColorExplain: "外観を変更するには、定義済みのテーマを選択するか、独自のテーマを作成します。",
				settingsLabelColor: "ヘッダー、コンテンツおよびフッターの色",
				settingsLogoExplain: "ヘッダー ロゴをカスタマイズします (最大 250 x 50 ピクセル)。",
				settingsLogoEsri: "Esri ロゴ",
				settingsLogoNone: "ロゴなし",
				settingsLogoCustom: "カスタム ロゴ",
				settingsLogoCustomPlaceholder: "画像の URL",
				settingsLogoCustomTargetPlaceholder: "クリックスルー リンク",
				settingsLogoSocialExplain: "ヘッダー右上にあるリンクのカスタマイズ",
				settingsLogoSocialText: "テキスト",
				settingsLogoSocialLink: "リンク",
				settingsDataFieldsExplain: "写真の名前、キャプションおよび色の各フィールドを選択します。",
				settingsDataFieldsError: "アプリケーションが適切な名前、キャプション、または色データを判断できません。ここで使用されるフィールドを選択してください。これらの設定は後で変更できます。",
				settingsFieldsLabelName: "名前",
				settingsFieldsLabelDescription: "キャプション",
				settingsFieldsLabelColor: "色",
				settingsExtentExplain: "次の対話型マップを使用して、マップ ツアーの初期範囲を設定します。",
				settingsExtentExplainBottom: "その範囲は、最初のツアー ポイントを含んでいる場合にのみ使用されます。この値は、Web マップの初期範囲の間、保持されます。",
				settingsExtentDrawBtn: "新しい範囲の描画",
				settingsExtentModifyBtn: "現在の範囲の編集",
				settingsExtentApplyBtn: "メイン マップに適用",
				settingsZoomExplain: "概要に続くストーリー ポイントのズームを設定します (オプション)。",
				settingsLabelZoom: "縮尺/レベル",
				settingsZoomFirstValue: "なし",
				settingsFieldError: "各リスト内のフィールドを選択してください",
				dataExplain: "フィーチャ サービスは Web マップに追加されます。これは、他のユーザとは共有されず、あなただけに追加/編集/削除の権限があります。<br /><br />アプリケーションで共有している権限を変更した場合、フィーチャ サービスの共有設定を更新するかどうかをシステムから尋ねられます。この更新は、ユーザがデータにアクセスする場合に必要です。共有しても編集権限を持つのはあなただけです。",
				dataNameLbl: "サービス名",
				dataFolderListLbl: "フォルダ",
				dataFolderListFetching: "フォルダを取得しています...",
				dataRootFolder: "ルート",
				dataNameError: "フィーチャ サービスの名前を入力してください",
				dataFolderError: "有効なフォルダの選択",
				dataSrcContainsInvalidChar: "フィーチャ サービス名に無効な文字 (-、＜、>、#、%、:、\"、?、&、+、/、\) が 1 つ以上含まれています。",
				dataSrvAlreadyExistsError: "その名前のサービスは組織内にすでに存在します。別の名前を選択してください。",
				dataBtnSave: "サービスの作成",
				dataFooterProgress: "作成が進行中です",
				dataFooterSucceed: "作成に成功しました。読み込んでいます。",
				dataFooterError: "作成に失敗しました。もう一度やり直してください。",
				tabError: "すべてのタブでエラーを確認してください",
				introRecordBtn: "概要",
				introRecordActivate: "最初のポイントを概要として使用します (カルーセルには表示されません)"
			},
			addPopupJS: {
				uploadingPicture: "写真をアップロードしています",
				uploadSuccess: "アップロードに成功しました",
				uploadError: "写真のアップロード中にエラーが発生しました",
				notJpg: "アップロードする JPEG の写真を選択してください",
				errorNoPhoto: "アップロードする画像を選択",
				errorNoThumbnail: "アップロードするサムネイルを選択",
				errorInvalidPicUrl: "このツアー ポイントの有効な写真の URL を入力します",
				errorInvalidThumbUrl: "このツアー ポイントの有効なサムネイルの URL を入力します",
				errorNoName: "このツアー ポイントの名前を入力してください",
				errorNoDescription: "このツアー ポイントのキャプションを入力してください",
				errorNoLocation: "このツアー ポイントの位置を設定"
			},
			builderJS: {
				noPendingChange: "保留中の変更はありません",
				unSavedChangeSingular: "1 つの保存されていない変更",
				unSavedChangePlural: "複数の保存されていない変更",
				popoverDiscard: "保存されていない変更を破棄しますか？",
				yes: "はい",
				no: "いいえ",
				popoverLoseSave: "ビューアを開くと、保存されていない変更は失われます",
				ok: "OK",
				popoverSaveWhenDone: "完了したら必ず保存してください",
				closeWithPendingChange: "アクションを確認しますか？変更内容は失われます。",
				gotIt: "OK",
				savingApplication: "アプリケーションを保存しています",
				saveSuccess: "アプリケーションは正常に保存されました",
				saveError: "保存に失敗しました。もう一度やり直してください。",
				dragColorPicker: "移動するか<br />色を変更します",
				dataWarningExtent: "Web マップの範囲外にデータがあります。これらのデータはツアー ポイントとして使用されません。使用するには、マップ範囲を変更します。",
				dataWarningVisibi: "現在の Web マップの範囲では、マップ ツアー レイヤは表示されません。%MAPSIZE% のマップでマップ ツアー レイヤが表示されることを確認してください。",
				dataWarningEdit: "Web マップの編集",
				dataWarningClose: "閉じる",
				signIn: "アカウントでサイン インして",
				signInTwo: "アプリケーションを保存してください。"
			},
			organizePopupJS: {
				messageStart: "次のレコードを削除しようとしています。",
				messageSinglePoint: "1 つのツアー ポイント",
				messageMultiPoint: "複数のツアー ポイント",
				messagePermantRemove: "これにより、データベースから",
				messageRecord: "レコードが",
				messageRecordPlural: "レコードが",
				messageConfirm: "永久に削除されます。続行しますか？",
				labelButtonShow: "表示",
				labelButtonHide: "非表示"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "これにより、写真およびサムネイルが完全に削除されます。",
				popoverDeleteWarningThumb: "これにより、サムネイルが完全に削除されます。",
				popoverUploadingPhoto: "写真とサムネイルをアップロードしています",
				popoverUploadingThumbnail: "サムネイルをアップロードしています",
				popoverUploadSuccessful: "アップロードに成功しました",
				popoverUploadError: "アップロードに失敗しました。もう一度やり直してください。",
				changePicAndThumb: "写真の変更",
				changeThumb: "サムネイルの変更",
				selectPic: "写真の変更",
				selectThumb: "サムネイルの変更",
				uploadPicAndThumb: "適用"
			},
			headerJS:{
				editMe: "編集",
				templateTitle: "テンプレートのタイトルの設定",
				templateSubtitle: "テンプレートのサブタイトルの設定"
			},
			crossFaderJS:{
				setPicture: "写真のタイトルの設定",
				setCaption: "写真のキャプションの設定"
			},
			importPopup: {
				title: "インポート",
				prevBtn: "戻る",
				nextBtn: "次へ"
			},
			importPopupHome: {
				header: "写真の保存場所",
				loadCSV: "これらは、CSV で参照されます (任意の写真共有サービスまたは Web サーバ。詳細はヘルプを参照)",
				loadFolder: "コンピュータ上のフォルダ (最新のブラウザ、およびアタッチメント データ ソースを含むフィーチャ サービスが必要)"
			},
			onlinePhotoSharingCommon: {
				header1: "写真をパブリックに共有する必要があります。",
				header2: "1 つのツアーにつき %NB2% ポイントの制限を遵守するために、インポートは %NB1% 写真に制限されます。",
				emptyDataset: "エラー。写真が見つかりませんでした",
				footerImport: "インポート",
				selectAlbum: "パブリック アルバムの選択",
				selectAlbum2: "アルバムの選択",
				pleaseChoose: "選択してください",
				userLookup: "検索",
				userLookingup: "検索",
				csv: "CSV で参照",
				fromScratch: "最初から開始",
				select: "選択",
				locUse: "写真の場所を使用",
				locWhy: "このオプションの理由",
				locExplain: "写真の場所は、アルバムから継承でき、すべての写真が同じ場所に置かれることになるため、使用しないことをお勧めします。"
			},
			viewFlickr: {
				header: "Flickr ユーザ名を入力し、インポートする写真のセットまたはタグを選択します。",
				userInputLbl: "ユーザ名の入力",
				signInMsg2: "ユーザが見つかりません",
				selectSet: "写真セットの選択",
				selectTag: "またはタグを選択",
				footerImportTag: "選択したタグのインポート",
				footerImportSet: "選択したセットのインポート"
			},
			viewFacebook: {
				header: "Facebook ユーザ アカウントで認証するか、公開ページを使用します。プライベート アルバムを使用して、Facebook のユーザ認証を必要としない公開マップ ツアーを作成できます。この公開マップ ツアーでは、プライベートのようにコメントを保持できます。",
				leftHeader: "Facebook ユーザ",
				rightHeader: "Facebook ページ",
				pageExplain: "Facebook ページは、<b>esrigis</b> などの、公開されたブランド/製品または著名人です。ページ URL 内の最初の「/」以降から、ページ名を取得できます。",
				pageInputLbl: "ページ名の入力",
				lookupMsgError: "ページが見つかりません"
			},
			viewPicasa: {
				header: "電子メール、あるいは Picasa または Google+ アカウントの ID を入力してください。",
				userInputLbl: "電子メールまたは ID の入力",
				signInMsg2: "アカウントが見つかりません",
				howToFind: "アカウント ID の検索方法",
				howToFind2: "任意の Picasa または Google+ のページの 1 番目と 2 番目の「/」の間の数字をコピーします。"
			},
			viewCSV: {
				uploadBtn: "CSV ファイルの選択またはドロップ",
				resultHeaderEmpty: "CSV が空です",
				resultHeaderSuccess: "%NB_POINTS% ポイントが正常に読み込まれました",
				resultHasBeenLimited: "1 つのツアーにつき %VAL3% ポイントの制限を遵守するために、インポートは、%VAL2% のうちの最初の %VAL1% ポイントに制限されます",
				browserSupport: "使用中のブラウザはサポートされていません。CSV を使用するには、<a href='http://browsehappy.com/' target='_blank'>ブラウザをアップグレードする</a>か、ArcGIS.com Web マップ ビューアを使用する必要があります (ヘルプを参照)。",
				errorLatLng: "緯度フィールドと経度フィールドが見つかりませんでした。可能な緯度の値は <i>%LAT%</i>、経度の値は <i>%LONG%</i> です。",
				errorFieldsExplain: "以下の必須フィールドが見つからないため、読み込みに失敗しました。",
				errorFieldsName: "<b>名前</b>: 可能な値は %VAL%",
				errorFieldsDesc: "<b>説明</b>: 可能な値は %VAL%",
				errorFieldsUrl: "<b>写真 URL</b>: 可能な値は %VAL%",
				errorFieldsThumb: "<b>サムネイル URL</b>: 可能な値は %VAL%",
				errorFields2Explain: "以下の属性について、レイヤとは異なる属性が CSV で使用されているため、読み込みに失敗しました。",
				errorFields2Name: "<b>名前</b>: %VAL2% ではなく %VAL1% を使用",
				errorFields2Desc: "<b>説明</b>: %VAL2% ではなく %VAL1% を使用",
				errorFields2Url: "<b>写真 URL</b>: %VAL2% ではなく %VAL1% を使用",
				errorFields2Thumb: "<b>サムネイル URL</b>: %VAL2% ではなく %VAL1% を使用",
				resultFieldsAll: "すべての属性がインポートされました",
				resultFieldsNotAll: "以下の属性は、マップ レイヤに存在しないため、インポートされませんでした",
				resultFieldsNotAll2: "以下の属性がインポートされました",
				footerNextBtnResult: "Web マップにインポート",
				footerProgress: "インポートが進行中です",
				footerSucceed: "インポートに成功しました。読み込んでいます"
			},
			viewGeoTag: {
				header: "インポートする写真をクリックまたはタップして検索します。",
				headerMore: "写真が見つからない理由",
				headerExplain: "写真の場所が有効であれば、それらの写真は自動的にマップ上で検索されて、2 番目のタブに表示されます。<br /><br />デフォルトでは、Picasa と Flickr は、写真の EXIF 位置メタデータを使用しません。[プライバシー] タブの Flickr または Picasa の設定で、写真の場所の使用が有効化されていることを確認してください。Flickr または Picasa に、写真を完全に再インポートすることが必要になる場合があります。<br /><br />Facebook の場合、各写真に移動し、[編集] をクリックして、写真の EXIF メタデータに基づいて提案された選択肢から場所を選択する必要があります。",
				leftPanelTab1: "検索する",
				leftPanelTab2: "検索済み",
				clickOrTap: "マップをクリックまたはタップして検索する",
				clickDrop: "インポートしない",
				footerImport: "インポート",
				footerProgress: "インポートが進行中です",
				footerSucceed: "インポートに成功しました。読み込んでいます..."
			},
			initPopup: {
				title: "マップ ツアー ビルダへようこそ",
				prevBtn: "戻る",
				nextBtn: "次へ"
			},
			initPopupHome: {
				header2: "このアシスタントを使用して、オンラインに保存された写真からマップ ツアーを構築したり、それらを ArcGIS Online for Organization アカウントにインポートしたりできます。",
				title1: "写真はすでにホストされています",
				title2: "写真をホストする必要があります",
				hostedFsNA: "ArcGIS for Organization の公開者ユーザまたは管理者ユーザのみが使用できます",
				footer1: "完了したら、必ずアプリケーション アイテム ページを使用してマップ ツアーを利用者と共有してください。",
				footer2: "マップ ツアーのヘルプを参照",
				footer3: "CSV テンプレートのダウンロード",
				footerProgress: "作成が進行中です",
				footerSucceed: "正常に作成されました。読み込んでいます..."
			},
			helpPopup: {
				title: "ヘルプ",
				close: "閉じる",
				tab1: {
					title: "概要",
					div1: "マップ ツアー テンプレートは、説得力のある写真エレメントが存在する地理情報を、伝えたいストーリーで表示するために設計されています。",
					div2: "このテンプレートを使用して、魅力的な使いやすい Web アプリケーションを作成できます。そのWeb アプリケーションでは、番号の順序でマップ上に小規模な一連の場所が表示され、その順序で参照できます。このテンプレートは、スマートフォンやタブレットなど、任意のデバイス上の任意のブラウザで使用するように設計されています。",
					div3: "このヘルプは、以下のようなマップ ツアーを公開する手順について説明します。",
					div4: "<ul><li><a href='http://storymaps.esri.com/stories/demo/map_tour/?webmap=7190edafe7464cb19c1caf1360cd6ee5' target='_blank'>パームスプリングス マップ ツアー</a></li><li><a href='http://story.maps.arcgis.com/apps/MapTour/index.html?appid=4d6054b109ce482d88588d5c06a7a478' target='_blank'>オランダの最高のマウンテン バイク ツアー</a></li><li><a href='http://ugis.esri.com/LA_River_Tour/' target='_blank'>ロサンゼルス リバー マップ ツアー</a></li></ul>",
					div5: "みなさまのご参加をお待ちしています。作成したマップ ツアーを是非共有しましょう。",
					div6: "<ul><li><a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a></li><li><a href='http://storymaps.esri.com/home/' target='_blank'>ストーリー マップ Web サイト</a></li><li><a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a></li></ul>",
					div7: "不具合を見つけたり、新機能のご要望などがありましたら、<a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub プロジェクト ページ</a>からご報告ください。"
				},
				tab2: {
					title: "データ",
					div1: "マップ ツアーを作成する際に考慮する主な点は、写真の保存場所の選択です。マップ ツアーは、主要な写真共有サービス、任意の Web サーバ、またはフィーチャ サービスに保存された写真を使用できます。",
					div2: "対話型ビルダでは、マップ ツアーで画像を処理するための次の 2 つのオプションが提供されます。",
					div3: "<ul><li>Flickr のような写真共有サイトに保存された画像や、独自の Web サイトに保存された画像などの、<b>すでにオンラインに存在する写真</b>を使用できます。それらの画像は、URL を使用してマップ ツアーで参照されます。</li><li><b>写真画像をコンピューターから直接マップ ツアーにアップロードする</b>こともできます。このアップロードのオプションを使用するには、ArcGIS for Organizations サブスクリプション アカウントを所有し、公開者権限または管理者権限を持っている必要があります (ホストされたフィーチャ サービスが自動的に作成され、写真がアタッチメントとしてそのフィーチャ サービスに保存されるためです)。</li></ul>",
					div4: "主なユース ケースは次のとおりです。",
					div4b: "<b>写真がまだホストされず</b>、組織のアカウントを保有している: 最良の選択は、ホストされたフィーチャ サービスを使用することです。公開写真共有サービスのように、写真が最適化され、高速な読み込み画像が作成されます。ArcGIS プラットフォームのすべての管理機能およびデータ管理機能にアクセスできます。",
					div5: "<b>組織のメンバーではない</b>: まず、写真共有 Web サイトまたは独自の Web サーバに写真をアップロードする必要があります。ウィザードを介してそれらの写真を使用します。それらの写真は、元の場所で引き続きホストされます。",
					div6: "写真をアタッチメントとして保存しているか、外部の写真を参照している<b>既存のフィーチャ サービスを再利用しようとしている</b>: 詳細は、下のセクションを参照してください",
					div7: "マップ ツアー テンプレートの<b>以前のバージョンを使用しており</b>、写真とサムネイルを参照する CSV が既に存在する: その CSV をインポートしてデータを改善できます。ウィザードは、緯度/経度属性を使用する CSV のみをサポートします。アドレス ベース CSV は、Web マップを使用して引き続き使用できます (下のセクションを参照)。",
					div8: "オンライン写真共有サービスからインポートする",
					div9: "インポート操作は、Web マップ フィーチャ コレクションに URL を格納することによって、すでにホストされた写真を参照します。写真は ArcGIS Online に保存されません。ホスト中の写真が破損した場合、それらの写真はマップ ツアーで使用できなくなり、「写真を使用できません」という画像が使用されます。写真の名前、説明、および場所がマップ ツアーにインポートされるかどうかは、サービス プロバイダによって異なります。 これらの属性は Web マップに保存され、オンライン サービスに対するどのような編集も、マップ ツアーには反映されません。",
					div10: "Web サーバへの写真の保存",
					div11: "写真を自分でホストすることを選択した場合、写真のサムネイルを手動で作成することが必要になります。最大解像度の写真をサムネイルに使用すると、パフォーマンスが低下します。そのため、自動的にそれを実行するオンライン写真共有サービスやフィーチャ サービスを使用することを強く推奨します。",
					div12: "既存のフィーチャ サービスまたはシェープファイルの使用",
					div13: "任意のポイント フィーチャ サービスまたはシェープファイルを、マップ ツアーのデータ ソースとして使用できます。ArcGIS.com マップ ビューアを使用して、それをレイヤとして Web マップに追加するだけです。アプリケーションが必要な属性をレイヤで検出すると、ビルダのすべての機能が使用可能になります。",
					div14: "必要なフィールドは次のとおりです (大文字と小文字が区別されません)。",
					div151: "名前",
					div152: "説明",
					div153: "写真",
					div154: "サムネイル",
					div155: "色 (オプション)",
					div16: "名前フィールドと説明フィールドは必須です。フィーチャ サービスを使用しているときに、一致するフィールドをアプリケーションが検出できない場合、ビルダで使用されるフィールドを構成するまで、ビューアは動作しません。Web マップに追加される CSV とシェープファイル レイヤには、必須フィールドがすべて存在している必要があります。必須フィールドが存在しない場合、ビルダは動作しません。",
					div17: "アタッチメントを含まないフィーチャ サービスの場合、写真 フィールドとサムネイル フィールドは必須です。アタッチメントを含むフィーチャ サービスの場合、これらのフィールドはオプションですが、強く推奨されます。サービスでアタッチメントを有効にしている場合、ビルダを使用して写真をアタッチメントとしてアップロードできます。サービスでアタッチメントを有効にしていない場合は、写真 URL とサムネイル URL を編集することのみが可能です。",
					div18: "CVS またはシェープファイルからのホストされたフィーチャ サービスの作成",
					div19: "ホストされたフィーチャ サービスを CSV またはシェープファイルから作成した場合、デフォルトではアタッチメントは有効化されません。これを有効化するには、フィーチャ サービスのアイテム ページを開きます。そのページの [レイヤ] セクションで小さい矢印をクリックすると、そのオプションが表示されます。その後、マップ ツアーは、属性を介して参照していた写真とサムネイルを引き続き使用します。必要に応じて、写真をフィーチャ サービスのアタッチメントとしてアップロードする場合、[写真] パネル上の 2 つのボタン ([写真の変更] と [サムネイルの変更]) を使用してそれを実行できます。",
				},
				tab3: {
					title: "カスタマイズ",
					div1: "ビルダは、上部パネルの [設定] ボタンで使用できる複数のカスタマイズ オプションを備えています。必要なオプションが見つからない場合、Web サーバに配置し、必要に応じて拡張できるダウンロード可能なバージョンも提供されています。",
					div2: "次の場合を除き、ホストされたバージョンを使用することを推奨します。",
					div3: "<li>ヘッダーの背景画像など、必要な UI のカスタマイズが提供されていない場合</li><li>開発者がアプリケーションの拡張を行う場合</li>",
					div4: "ダウンロード可能なバージョンでは、対話型ビルダは提供されません。マップ ツアーは、Web マップからそのデータを取得し、構成ファイルからその設定を取得して、ホストされたバージョンと同じ機能を提供します。ホストされたバージョンを使用して Web マップを作成および改良し、ダウンロード可能なバージョンでそれを再利用することをお勧めします。",
					div5: "ダウンロード可能なバージョンの詳細については、<a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>GitHub プロジェクト ページ</a>をご覧ください。"
				},
				tab4: {
					title: "ヒント",
					div1: "写真",
					div2: "縦方向ではなく横方向の写真を使用することをお勧めします。縦方向の画像を使用することはできますが、iPad のような小さい画面上では、大量の写真がキャプションによって不明瞭になることがあります。これは、テキストを縦長の領域に表示すると、横長の領域に表示する場合よりも多くのスペースが使用されるためです。マップ ツアーでは、さまざまなサイズ、形状、および方向の画像を使用できますが、正確に同じサイズと形状をすべての画像に対して使用することをお勧めします。そうすることで、ユーザがツアーをたどるときに、異なるサイズの画像に気を取られることがなくなります。",
					div3: "HTML タグを使用したキャプション テキストのフォーマット",
					div4: "フォーマットとリンクを定義する HTML タグを、キャプション テキストに含めることができます。<a href='http://blogs.esri.com/esri/arcgis/2013/03/29/add-links-map-tour/' target='_blank'>このブログの投稿</a>をご参照ください。",
					div5: "レイヤのサポート",
					div6: "その他のサポート レイヤをマップに追加できます。それらのレイヤは、マップ ツアーに表示され、方向、背景、および他のジオグラフィック フィーチャを提供します。それらのジオグラフィック フィーチャは、マップ ツアー ポイントに加えてマップに表示したい、分析範囲、ツアー ポイントを接続するウォーキング ルート、ドライブ ルートなどです。テンプレートは、Web マップで指定したシンボルを使用して、これらの追加サポート レイヤを表示します。ポップアップを使用することはできません。",
					div7: "ツアーを短く魅力的に",
					div8: "1 つのツアーにつき 99 ポイントまでという制限があります。当然、ほとんどのマップ ツアーは、この制限よりも大幅に短くなります。利用者はあまり多くのポイントを移動したがりません。自分では主題が魅力的だと思っていても、利用者もそう思うと考えてはいけません。",
					div9: "詳細については、<a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>詳細なガイド</a>をご参照ください。"
				},
				tab5: {
					title: "公開",
					div1: "完了したら、必ずマップ ツアーを、ArcGIS Online のアプリケーション アイテム ページを使用して利用者と共有してください。この処理の実行中に、ArcGIS Online は、同じ共有権限を持たない依存するリソース (Web マップ、フィーチャ サービス) を更新するかどうかを、必要に応じて尋ねます。リソースのうちのいずれかが利用者と共有されていない場合、ユーザは、ArcGIS Online のログイン ページにリダイレクトされます。",
					div2: "マップ ツアー ビルダによって作成された、ホストされたフィーチャ サービスを使用している場合、アプリケーションはサービスのセキュリティを自動的に管理します。サービスをパブリックに共有している場合でも、編集権限を持つのはあなただけです。",
					div3: "マップ ツアーをパブリックに共有する前に、ArcGIS.com アカウントでログインしていない状態で、そのマップ ツアーが動作することを確認してください。"
				}
			}
        }
    })
);
