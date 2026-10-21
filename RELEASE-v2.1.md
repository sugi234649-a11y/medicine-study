# 写真を5薬追加（2026-10-21）

写真付きは2薬から7薬へ増加。残る45薬は写真なしで維持します。

|追加した学習項目|写真の代表製品|撮影日|作者・ライセンス|写真当時／現在のメーカー|
|---|---|---|---|---|
|ランソプラゾール|タケプロンOD錠30（30mg）|2010-09-06|MaksimTack / Public domain|武田薬品工業／現在T's製薬、販売は武田薬品工業|
|ドンペリドン|ナウゼリン錠5（5mg）|2012-09-12|Tama998 / CC0 1.0|協和発酵キリン／現在協和キリン|
|ブロチゾラム|ブロチゾラム錠0.25mg「サワイ」|2014-06-22|Tobosha / Public domain|メディサ新薬、発売元沢井製薬。2012年厚労省資料と現在のPMDAで確認|
|ゾルピデム|マイスリー錠10mg|2013-01-29|Hanabishi / CC BY-SA 3.0|アステラス製薬|
|プレドニゾロン|プレドニン錠5mg|2012-01-31|ぱたごん / CC BY-SA 3.0|塩野義製薬／現在シオノギファーマ|

写真はすべて原画像を目視確認し、製品名・規格、メーカーの現在または当時の公式資料、写真ごとの利用条件を照合しました。原画像は無加工のまま、作者・出典・ライセンスを各画面へ表示。古い包装が現在も同じ外観とは限らないことを明記し、メーカー移管・社名変更がある3薬は当時と現在を別欄に表示します。

写真の目的は見覚えをつくり看護師へ確認する手掛かりです。外観だけで薬名を断定する形式には変更していません。

## 出典と利用条件

- [タケプロンOD錠30の写真・Public domain](https://commons.wikimedia.org/wiki/File:Lansoprazole_TakepronOD30mg.jpg) / [現在のPMDA情報](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2329023F1020_2?user=1) / [当時のPMDA資料](https://www.pmda.go.jp/drugs/2010/P201000038/400256000_20400AMZ01104_B100_2.pdf)
- [ナウゼリン錠5の写真・CC0](https://commons.wikimedia.org/wiki/File:Domperidone_nauzelin_5mg.JPG) / [現在のPMDA情報](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/2399005F1027_1?user=1) / [当時のメーカー照合資料](https://www.pmda.go.jp/files/000148209.pdf)
- [ブロチゾラムの写真・Public domain](https://commons.wikimedia.org/wiki/File:Brotizolam0.25mg_20140622.jpg) / [現在のPMDA情報](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1124009F1312_1?user=1) / [2012年厚労省収載表](https://www.mhlw.go.jp/topics/2012/04/tp0402-1.html)
- [マイスリー錠10mgの写真・CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Myslee10.JPG) / [PMDA情報](https://www.pmda.go.jp/PmdaSearch/rdDetail/iyaku/1129009F1025_3?user=1)
- [プレドニン錠5mgの写真・CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Predonine_5mg日本発売品プレドニン5mg.jpg) / [現在のPMDA情報](https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/343018_2456001F1310_4_07) / [2015年PMDA審査資料](https://www.pmda.go.jp/drugs/2015/P20150609002/navi.html)

個別の原画像URL、確認日、SHA-1、メーカー根拠等は `photo-catalog.json` に保存。原画像のライセンスを維持し、第三者による本アプリの推奨を示唆しません。

## 保留したもの

写真が見つかっても、海外製品・構造式・原料写真・販売名や規格が不明な画像は採用しませんでした。旧メーカーの写真で当時の情報確認が不十分なもの、転載条件を確認できないメーカー画像も保留です。今回の調査は追加可能な写真の確認範囲であり、残り45薬に利用可能な写真が存在しないという意味ではありません。

## 検証

- 自動テスト9件成功：52薬、選択肢、復習、移行、画像と製品の一致、原本ハッシュ、旧包装メーカーの分離、7画像のオフラインキャッシュ。
- ブラウザで追加5画像の正常読込、警告・作者・利用条件、当時／現在のメーカー欄を確認。
- 写真クイズは7薬だけを出題し、7問を採点・完了できることを確認。
- ビルド時に登録写真の原本ハッシュと確認記録を検査し、登録した写真だけをdistへコピー。キャッシュ一覧とキャッシュバージョンを写真台帳から自動更新。

## 再開・写真追加

`photo-catalog.json` を正本として編集し、`node build.cjs` を実行します。`photo-data.js` は自動生成されるため直接編集しません。製品一致・メーカー資料・利用条件・目視確認・原本ハッシュが揃わない写真は登録しません。
