# 写真付き v2 更新報告（2026-10-21）

既存のHTML/JSアプリを改修。写真2薬・2枚を収録し、残り50薬は写真なし。医療情報全項目の専門職監修は未完了。

## 写真と利用条件

- ヘパリン類似物質ローション0.3%「ニプロ」（0.3% / 50g、ニプロ株式会社）：Hanabishi / [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) / [出典](https://commons.wikimedia.org/wiki/File:Heparinoid_lotion.jpg)。ボトル正面の代表写真です。裏面や他の包装は収録していません。 画像ファイルは無加工。画面内で縮小表示。
- ロキソニン錠60mg（60mg、第一三共株式会社）：Yoshi 2012 / [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) / [出典](https://commons.wikimedia.org/wiki/File:ロキソニン錠60mg.jpg)。2015年撮影の代表例です。現在の包装と異なる可能性があります。 画像ファイルは無加工。画面内で縮小表示。

Commonsの再利用条件を直接確認し、公式・公的製品情報で製品名・規格・メーカーを照合。メーカー公式写真の転載許諾があるという扱いではありません。原本のSHA-1照合済み。写真と改変物のライセンス条件は各画像に適用されます。作者による本アプリの推奨を意味しません。

## 変更した薬

14：ヘパリン注射→ヘパリン類似物質ローション。指定外レンボレキサントを除き47以降を依頼の並びへ修正。50：曖昧な抗菌薬グループ→アモキシシリン。51：剤形混在のアズノール→軟膏0.033%。52：モビコールを追加。14の写真はニプロ製であるため、先の調査候補ヒルドイドの出典を写真カードに流用しない。

## クイズ・UI・安全対策

- 写真のある2薬の目的を問う4択。薬名を断定する形式ではない。写真内の製品名・ラベルは隠さない。
- 正誤にかかわらず目的・観察・報告例を表示。全52薬に報告例と報告クイズ。
- 写真ありフィルター、★現場使用4薬の導線、代表製品と規格・メーカー・出典の表示。
- 写真のすぐ下に固定警告。古い包装の注意とライセンスを表示。画像読込失敗時は解答を停止し、記録しないスキップへ。
- カロナールの4時間、モビコールの食前使用を全員共通の指示にしない。
- 旧版から薬の番号が変わる記録を安全に移行し、別薬の記録を引き継がない。
- 配信用distを生成し、写真を含めたオフラインキャッシュを更新。

## 52薬・代表製品・出典

この表の製品候補は調査記録です。写真以外の50薬の規格・供給状況・臨床情報の最終レビューは継続課題です。サワシリンは元依頼のカプセル候補から錠250を調査候補として記録しており、剤形の混用はしていません。

|番号|学習名|代表製品|規格|製造販売元|写真|出典|
|---|---|---|---|---|---|---|
|1|アムロジピン|アムロジピン錠5mg「サワイ」|5mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?prodid=1180)|
|2|ニフェジピン|ニフェジピンCR錠20mg「サワイ」|20mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?prodid=1098)|
|3|カンデサルタン|カンデサルタンOD錠4mg「サワイ」|4mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?mode=link&prodid=1650)|
|4|テルミサルタン|テルミサルタン錠40mg「サワイ」|40mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?mode=link&prodid=4582)|
|5|フロセミド|ラシックス錠20mg|20mg|サノフィ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2139005F1052_1?user=1)|
|6|スピロノラクトン|スピロノラクトン錠25mg「NP」|25mg|ニプロ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2133001F1654_1?user=1)|
|7|ビソプロロール|ビソプロロールフマル酸塩錠2.5mg「サワイ」|2.5mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?prodid=1319)|
|8|ニトログリセリン|ニトロペン舌下錠0.3mg|0.3mg|日本化薬株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2171018K1039_1?user=1)|
|9|アスピリン|バイアスピリン錠100mg|100mg|バイエル薬品株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3399007H1021_1?user=1)|
|10|クロピドグレル|クロピドグレル錠75mg「サワイ」|75mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?prodid=1707)|
|11|アピキサバン|エリキュース錠2.5mg|2.5mg|ブリストル・マイヤーズ スクイブ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3339004F1029_1?user=1)|
|12|リバーロキサバン|イグザレルト錠10mg|10mg|バイエル薬品株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3339003F1024_1?user=1)|
|13|ワルファリン|ワーファリン錠1mg|1mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?prodid=4874)|
|14|ヘパリン類似物質ローション|ヘパリン類似物質ローション0.3%「ニプロ」|0.3% / 50g|ニプロ株式会社|あり|[資料](https://rctportal.mhlw.go.jp/drug?id=00063344&sub=002)|
|15|ロスバスタチン|ロスバスタチン錠2.5mg「サワイ」|2.5mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?prodid=4613)|
|16|アトルバスタチン|アトルバスタチン錠10mg「サワイ」|10mg|沢井製薬株式会社|なし|[資料](https://med.sawai.co.jp/preview.php?prodid=1340)|
|17|メトホルミン|メトグルコ錠250mg|250mg|住友ファーマ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3962002F2027_1?user=1)|
|18|シタグリプチン|ジャヌビア錠50mg|50mg|MSD株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3969010F1034_2?user=1)|
|19|グリメピリド|アマリール1mg錠|1mg|サノフィ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3961008F1020_1?user=1)|
|20|エンパグリフロジン|ジャディアンス錠10mg|10mg|日本ベーリンガーインゲルハイム株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/3969023F1023_1?user=1)|
|21|インスリン|ノボラピッド注 フレックスタッチ|100単位/mL・1筒3mL（300単位）|ノボ ノルディスク ファーマ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2492415G1031_1?user=1)|
|22|アセトアミノフェン|カロナール錠200|200mg|あゆみ製薬株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1141007F1063_5?user=1)|
|23|ロキソプロフェン|ロキソニン錠60mg|60mg|第一三共株式会社|あり|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1149019C1149_1?user=1)|
|24|セレコキシブ|セレコックス錠100mg|100mg|ヴィアトリス製薬合同会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1149037F1020_2?user=1)|
|25|プレガバリン|リリカOD錠25mg|25mg|ヴィアトリス製薬合同会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1190017F1029_3?user=1)|
|26|トラマドール|トラマールOD錠25mg|25mg|日本新薬株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1149038F1024_1?user=1)|
|27|酸化マグネシウム|酸化マグネシウム錠330mg「ケンエー」|330mg|健栄製薬株式会社|なし|[資料](https://www.kenei-pharm.com/medical/products/3262/)|
|28|センノシド|センノシド錠12mg「サワイ」|12mg|沢井製薬株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2354003F2367_1?user=1)|
|29|ピコスルファートナトリウム|ラキソベロン内用液0.75%|0.75%|帝人ファーマ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/470310_2359005S1240_1_09)|
|30|ルビプロストン|アミティーザカプセル24μg|24μg|未確認|なし|[資料](https://www.info.pmda.go.jp/downfiles/ph/GUI/671450_2359006M1025_3_00G.pdf)|
|31|リナクロチド|リンゼス錠0.25mg|0.25mg|アステラス製薬株式会社|なし|[資料](https://www.astellas.com/jp/patient-product/lnz)|
|32|ロペラミド|ロペミンカプセル1mg|1mg|帝國製薬株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2319001C2060_2?user=1)|
|33|ランソプラゾール|タケプロンOD錠15|15mg|T's製薬株式会社|なし|[資料](https://www.info.pmda.go.jp/psearch/html/interview_form_list.pdf)|
|34|ファモチジン|ガスターD錠20mg|20mg|LTLファーマ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2325003F3035_2?user=1)|
|35|モサプリド|ガスモチン錠5mg|5mg|未確認|なし|[資料](https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/400093_2399010B1034_1_13)|
|36|ドンペリドン|ナウゼリン錠10|10mg|協和キリン株式会社|なし|[資料](https://rctportal.mhlw.go.jp/drug?id=00005940&sub=002)|
|37|ドネペジル|アリセプトD錠5mg|5mg|エーザイ株式会社|なし|[資料](https://medical.eisai.jp/products/art/art_dt5)|
|38|メマンチン|メマリーOD錠20mg|20mg|第一三共株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1190018F1023_1?user=1)|
|39|リバスチグミン|リバスタッチパッチ18mg|18mg|未確認|なし|[資料](https://rctportal.mhlw.go.jp/drug?id=00059690&sub=004)|
|40|クエチアピン|セロクエル25mg錠|25mg|LTLファーマ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1179042C1023_3?user=1)|
|41|リスペリドン|リスパダール錠1mg|1mg|ヤンセンファーマ株式会社|なし|[資料](https://www.info.pmda.go.jp/psearch/PackinsSearch?count=1000&effect=117)|
|42|オランザピン|ジプレキサ錠2.5mg|2.5mg|未確認|なし|[資料](https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/450900_1179044F1029_2_01)|
|43|エチゾラム|デパス錠0.5mg|0.5mg|未確認|なし|[資料](https://patients.tanabe-pharma.com/product/dep/)|
|44|ブロチゾラム|レンドルミン錠0.25mg|0.25mg|日本ベーリンガーインゲルハイム株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1124009F1223_1?user=1)|
|45|ゾルピデム|マイスリー錠5mg|5mg|アステラス製薬株式会社|なし|[資料](https://www.astellas.com/jp/patient-product/mys)|
|46|スボレキサント|ベルソムラ錠15mg|15mg|MSD株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/bookSearch/01/14987185808795)|
|47|レボドパ配合剤|メネシット配合錠100|レボドパ100mg／カルビドパ10mg相当|オルガノン株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1169101F1146_3?user=1)|
|48|レボチロキシン|チラーヂンS錠50μg|50μg|あすか製薬株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/470007_2431004F1056_1_06)|
|49|プレドニゾロン|プレドニン錠5mg|5mg|未確認|なし|[資料](https://med.shionogi.co.jp/products/medicine/predonine-tablets.html)|
|50|アモキシシリン|サワシリン錠250|250mg（力価）|LTLファーマ株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/6131001C1210_2)|
|51|アズノール軟膏0.033%|アズノール軟膏0.033%|0.033%|日本新薬株式会社|なし|[資料](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2649716M1042_1?user=1)|
|52|モビコール配合内用剤|モビコール配合内用剤LD|LD|EAファーマ株式会社|なし|[資料](https://medical.eisai.jp/products/mvc/mvc_ld)|

## 未解決事項

- 残る50薬の転載可能な写真の収集。裸錠の裏面・全包装など未収録の視点。
- 全52薬の専門職監修、販売・在庫・供給の継続確認。モビコールの一部自主回収情報の最新状況等は公式サイトで確認する。
- iOS Safari・Android実機は未検証。
- 公開結果と検証記録はREADME.mdを参照。

公開状態：2026-10-21、mainへのcommit/pushは自動承認審査により実行前に拒否されたため、公開版への反映は未実施。ユーザーによる「GitHub mainへのpushと既存Vercel本番サイト更新」の明示承認待ち。コードと写真はローカルに完成・検証済み。旧メモの未コミット状態は引き続き該当する。
