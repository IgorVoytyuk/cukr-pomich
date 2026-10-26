# CUKR — карта побиту для українців у Польщі

Вихідний код безкоштовного довідника **[cukr-pomich.pages.dev](https://cukr-pomich.pages.dev/)** — покрокові пояснення українською та російською для тих, хто змінює статус UKR на карту побиту в Польщі.

## Навіщо це

Спеціальний захист для громадян України в Польщі діє до **4 березня 2027 року**. Щоб залишитися легально після цієї дати, потрібно подати заяву на карту побиту (CUKR) — зазвичай заздалегідь, бо терміни в урядах województwa розтягуються на місяці. Сайт пояснює процедуру простою мовою і без платних «посередників».

## Сторінки

| Сторінка | Про що |
|---|---|
| [Головна](https://cukr-pomich.pages.dev/) | Що таке CUKR, кому потрібно, з чого почати |
| [Фото на карту побиту](https://cukr-pomich.pages.dev/foto-cukr) | Вимоги до знімка 35×45 мм, через що найчастіше відмовляють |
| [Оплати](https://cukr-pomich.pages.dev/oplaty-cukr) | 340 zł opłata skarbowa + 100 zł за бланк, реквізити, коли платити |
| [Типові помилки](https://cukr-pomich.pages.dev/pomylky-cukr) | Через що заяву повертають на braki formalne |
| [Виїзд зі статусом UKR](https://cukr-pomich.pages.dev/vyizd-status-ukr) | Скільки днів можна бути за кордоном, щоб не втратити статус |
| [Чек-лист CUKR](https://cukr-pomich.pages.dev/cheklist-cukr) | Що підготувати до подачі |
| [Заява на дитину](https://cukr-pomich.pages.dev/dity-cukr) | Безкоштовно |
| [Обмін водійських прав](https://cukr-pomich.pages.dev/obmin-prav) | Українські права на польські |
| [Про нас / O nas](https://cukr-pomich.pages.dev/pro-nas) | Хто веде проєкт, ціни, контакти (UA/RU/PL) |

## Куди платити — по містах

Мито **340 zł** платиться **місту** (urząd miasta / gmina), а **100 zł** за виготовлення карти — **воєводському управлінню**. Це два різні рахунки, і рахунок мита свій у кожному місті. Реквізити зібрані з офіційних сторінок міст і управлінь, з посиланням на джерело на кожній сторінці.

| Місто | Воєводство | Сторінка |
|---|---|---|
| Варшава | Mazowieckie | [cukr-warszawa](https://cukr-pomich.pages.dev/cukr-warszawa) |
| Вроцлав | Dolnośląskie | [cukr-wroclaw](https://cukr-pomich.pages.dev/cukr-wroclaw) |
| Краків | Małopolskie | [cukr-krakow](https://cukr-pomich.pages.dev/cukr-krakow) |
| Познань | Wielkopolskie | [cukr-poznan](https://cukr-pomich.pages.dev/cukr-poznan) |
| Ґданськ | Pomorskie | [cukr-gdansk](https://cukr-pomich.pages.dev/cukr-gdansk) |
| Лодзь | Łódzkie | [cukr-lodz](https://cukr-pomich.pages.dev/cukr-lodz) |

## Хто веде

**«ЦУКР Поміч»** (CUKR Pomich) — онлайн-допомога українцям у Польщі з документами українською мовою, з вересня 2026. Веде Ihor Voitiuk. Працює в Telegram: [@cukr_pomich_bot](https://t.me/cukr_pomich_bot), канал [@dokumenty_pl_prosto](https://t.me/dokumenty_pl_prosto). Перевірка умов безкоштовна; заяву в MOS ви подаєте й підписуєте самі — ми пояснюємо поля й перевіряємо перед підписом. Не юристи й не державний орган. Деталі: [pro-nas](https://cukr-pomich.pages.dev/pro-nas), для ІІ-асистентів — [llms.txt](https://cukr-pomich.pages.dev/llms.txt).

## Технічно

Статичний сайт без збірки й залежностей: чистий HTML + CSS + один `lang.js` для перемикання UA/RU. Хоститься на Cloudflare Pages.

```
index.html            головна
foto-cukr.html        фото
oplaty-cukr.html      оплати
pomylky-cukr.html     помилки
vyizd-status-ukr.html виїзд
cukr-warszawa.html    Варшава: рахунки мита
cukr-wroclaw.html     Вроцлав: рахунки мита
cukr-krakow.html      Краків: рахунки мита
cukr-poznan.html      Познань: рахунки мита
cukr-gdansk.html      Ґданськ: рахунки мита
cukr-lodz.html        Лодзь: обидва рахунки + каса
lang.js               перемикач мови UA/RU
style.css             стилі
sitemap.xml           карта сайту
robots.txt            дозвіл на сканування (вкл. ІІ-боти)
pro-nas.html          про нас (UA/RU/PL)
llms.txt              опис для ІІ-асистентів
```

## Застереження

Це не юридична консультація. Правила й суми змінюються — перед подачею звіряйте актуальні вимоги на сайті свого urzędu wojewódzkiego.
