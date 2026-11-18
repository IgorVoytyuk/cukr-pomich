# Ночной отчёт — 2026-11-18

## Сделано

Создан черновик страницы **cukr-szczecin.html** (Щецин / Szczecin) — следующий город в очереди, для которого в репозитории ещё не было файла и не было ветки `night/*` (Katowice уже существовал как `cukr-katowice.html`, остальные Szczecin/Lublin/Bydgoszcz/Białystok/Rzeszów — нет).

Структура и стиль скопированы с `cukr-lodz.html` / `cukr-katowice.html` (та же HTML-разметка, блоки, двуязычность UA/RU, сниппет `?from=` → `?start=`, кнопка бота). Страница **не добавлена** в `sitemap.xml` и на неё **нет ссылок** с других страниц сайта — это оставлено владельцу после проверки.

## Факты, проверенные напрямую (WebFetch открывал страницу и видел текст)

1. **100 зл за карту** — рахунок `66 1010 1599 0055 9722 3100 0000`, отримувач Zachodniopomorski Urząd Wojewódzki (NBP O/O Szczecin).
   Источник: https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe
   Цитата со страницы: «Opłatę za wydanie lub wymianę karty pobytu wnosisz na rachunek: ...»

2. **340 зл мито (opłata skarbowa)** — рахунок `20 1020 4795 0000 9302 0277 9429`, отримувач Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, pl. Armii Krajowej 1, 70-456 Szczecin.
   Источник: https://www.gov.pl/web/uw-zachodniopomorski/pobyt-czasowy-na-terytorium-rp
   Цитата: «Opłata skarbowa za udzielenie zezwolenia na pobyt czasowy wynosi 340 PLN.» и «Opłaty wnosi się w kasie organu podatkowego – Urząd Miasta Szczecin lub na rachunek tego organu: ...»
   Важно: эта страница про обычный pobyt czasowy, а не именно про CUKR — но счёт того же типа платежа (opłata skarbowa городу), поэтому используется тот же счёт, как и на других уже опубликованных страницах городов (Łódź, Katowice) для той же логики.

3. **Два разных счёта, возврат не делается при ошибке** — страница прямо пишет: «opłata skarbowa za udzielenie zezwolenia na pobyt oraz opłata za wydanie karty pobytu to dwie różne opłaty» и «Zachodniopomorski Urząd Wojewódzki nie dokonuje zwrotów opłat wpłaconych na rachunek Urzędu Miasta Szczecin.»
   Источник: https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe

4. **Адрес управления** — ul. Wały Chrobrego 4, 70-502 Szczecin.
   Источник: тот же gov.pl, подтверждено также на странице https://www.gov.pl/web/uw-zachodniopomorski/przedluzenie-wizy и https://www.gov.pl/web/uw-zachodniopomorski/informacje-dla-cudzoziemcow

5. **Инфолиния для иностранцев** — (+48) 91 44 12 000, цілодобова/автоматична, «mogą wystąpić czasowe przerwy w działaniu Infolinii dla Cudzoziemców».
   Источник: https://www.gov.pl/web/uw-zachodniopomorski/informacje-dla-cudzoziemcow

## Что НЕ проверялось напрямую / оставлено без хардкода

- Часы приёма конкретно отдела по делам иностранцев (на разных страницах gov.pl встречались противоречивые данные для Делегатуры в Кошалине — на странице явно написано, что для Щецина и Кошалина часы могут отличаться). Поэтому на странице **не указаны** конкретные часы приёма — вместо этого ссылка «звіряйте на офіційному сайті» (как в cukr-katowice.html).
- Часы работы кассы Urzędu Miasta Szczecin (Wydział Podatków i Opłat Lokalnych) — попытка открыть szczecin.eu дала редирект, не стал тратить дальше время на цепочку редиректов; часы не указаны на странице (нет хардкода).
- Отдельная формулировка титула перевода именно «CUKR» на официальной странице не найдена (там общая формула для обычного pobyt czasowy) — на странице это прямо объясняется, и предложена универсальная формула по аналогии с Pomorski UW (как и на уже опубликованных страницах Łódź/Katowice).
- Полное название структурного подразделения (аналог «Wydział Spraw Obywatelskich i Cudzoziemców» в Łódź/Katowice) для Щецина явно не найдено на открытых страницах — не стал его указывать, чтобы не выдумывать.

## Блокеры

Нет. Сеть и WebFetch/WebSearch работали без ограничений (EGRESS не блокировался). Все числовые реквизиты (оба счёта) подтверждены прямым открытием официальных страниц gov.pl.

## Следующий город в очереди

После Szczecin: Lublin, Bydgoszcz, Białystok, Rzeszów (ни файла, ни ветки `night/*` для них пока нет).
