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

## Куди платити — по містах

Мито **340 zł** платиться **місту** (urząd miasta / gmina), а **100 zł** за виготовлення карти — **воєводському управлінню**. Це два різні рахунки, і рахунок мита свій у кожному місті. Реквізити зібрані з офіційних сторінок міст і управлінь, з посиланням на джерело на кожній сторінці.

| Місто | Воєводство | Сторінка |
|---|---|---|
| Варшава | Mazowieckie | [cukr-warszawa](https://cukr-pomich.pages.dev/cukr-warszawa) |
| Вроцлав | Dolnośląskie | [cukr-wroclaw](https://cukr-pomich.pages.dev/cukr-wroclaw) |
| Краків | Małopolskie | [cukr-krakow](https://cukr-pomich.pages.dev/cukr-krakow) |
| Познань | Wielkopolskie | [cukr-poznan](https://cukr-pomich.pages.dev/cukr-poznan) |
| Ґданськ | Pomorskie | [cukr-gdansk](https://cukr-pomich.pages.dev/cukr-gdansk) |

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
lang.js               перемикач мови UA/RU
style.css             стилі
sitemap.xml           карта сайту
robots.txt            дозвіл на сканування
```

## Застереження

Це не юридична консультація. Правила й суми змінюються — перед подачею звіряйте актуальні вимоги на сайті свого urzędu wojewódzkiego.
