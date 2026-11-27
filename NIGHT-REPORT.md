# Ночной отчёт — 2026-11-27

## Что сделано
Создан черновик страницы **Щецина**: `cukr-szczecin.html`.

Очередь городов из задания: Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów.
`cukr-katowice.html` уже существует и слит в `main` (коммит `b623275`) — это не черновик, а готовая страница. Веток `night/*` в репозитории не было. Поэтому следующий в очереди — **Szczecin**.

Страница скопирована по структуре и стилю `cukr-lodz.html`: та же разметка, те же блоки (предупреждение про два счёта, 340 зл, 100 зл, титул перевода, предупреждение про "Szczegóły zlecenia", воеводское управление, "что ещё важно знать", блок помощи с ботом, источники, дисклеймер), тот же скрипт `?from=` → `?start=`, тот же JSON-LD. Кнопка бота: `?start=szczecin`.

Страница **не добавлена** в `sitemap.xml` и на неё **нет ссылок** с других страниц сайта — по заданию это решает владелец после проверки.

## Факты, проверенные напрямую (WebFetch по официальным gov.pl страницам)

Сеть не была заблокирована (EGRESS_BLOCKED не возникал для WebFetch/WebSearch; прямой `curl` на `szczecin.uw.gov.pl` падал по таймауту/сбросу соединения — это отдельный домен ужонда, не связанный с ограничением прокси, использовал зеркало на `gov.pl`).

1. **Счёт 340 зл** (opłata skarbowa za udzielenie zezwolenia na pobyt czasowy):
   `20 1020 4795 0000 9302 0277 9429`, получатель Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, pl. Armii Krajowej 1, 70-456 Szczecin.
   Источник: https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe — открыт лично через WebFetch, номер и получатель видны в тексте страницы в разделе «Opłaty skarbowe». Название банка на странице не указано — не выдумывал, не вписал.

2. **Счёт 100 зл** (opłata za wydanie karty pobytu):
   `66 1010 1599 0055 9722 3100 0000`, получатель Zachodniopomorski Urząd Wojewódzki (NBP O/O Szczecin).
   Источник: та же страница https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe, раздел «Opłata za kartę pobytu». Там же указана льготная ставка 50 зл.

3. **Что суммы 340/100 зл действительно относятся к CUKR** (страница ZUW сама термин «CUKR» не использует — это общие ставки «zezwolenie na pobyt czasowy» и «wydanie karty pobytu») — подтверждено отдельно страницей https://www.gov.pl/web/udsc/CUKR-procedura, открытой через WebFetch: там прямая цитата «opłata w wysokości 100 zł za wydanie karty pobytu oraz opłaty skarbowej w wysokości 340 zł za udzielenie zezwolenia na pobyt czasowy» и «pamiętaj, że są to osobne opłaty i należy ich dokonać na osobne konta!». Эта же страница подтвердила формулировки про систему MOS (подача только электронно, без визита и очереди), про три способа подписи (profil zaufany / kwalifikowany podpis elektroniczny / podpis osobisty) и про правило 60 дней на получение готовой карты (цитата: «w terminie 60 dni od dnia poinformowania przez urząd wojewódzki o możliwości jej odbioru»).

4. **Титул перевода** — взят не из общей формулы другого воеводства (как в Лодзи/Катовице), а из собственной страницы ZUW Szczecin: «opłata za udzielenie zezwolenia na pobyt czasowy dla …» и «opłata za wydanie karty pobytu dla …» — процитировано с той же страницы oplaty-skarbowe.

5. **Контакты и адрес воеводского управления**: ul. Wały Chrobrego 4, 70-502 Szczecin; телефон 91 44 12 000 (цілодобова автоматична інфолінія для іноземців); email wsoim@szczecin.uw.gov.pl; факс 91 42 25 712 (в текст не включён — не нужен); часы пн 8:00–18:00, вт–пт 8:00–15:00. Источники: https://www.gov.pl/web/uw-zachodniopomorski/pobyt-czasowy-na-terytorium-rp и https://www.gov.pl/web/uw-zachodniopomorski/informacje-dla-cudzoziemcow — оба открыты через WebFetch напрямую.

6. На странице informacje-dla-cudzoziemcow на момент проверки было явно написано, что **онлайн-резервации визитов по вопросам пребывания нет** и что дату/время визита назначает сам урядник письмом — это вставлено в текст страницы как явная оговорка «на момент перевірки … перед візитом звірте», чтобы не выдать временное состояние за постоянный факт.

## Что осталось как общий факт сайта, не проверялось повторно этой ночью
- Срок подачи заявления на CUKR «до 04.03.2027» — это установленный факт всего проекта (указан в самом задании и уже используется на опубликованной странице Katowice), в эту ночь отдельно не перепроверялся по новому источнику.
- Общая формулировка про «Szczegóły zlecenia» (ловушка с банковским подтверждением) и правило «подать можно самостоятельно, без платных посредников» — перенесены из уже опубликованных страниц Лодзи/Катовице без повторной проверки, это не city-specific факты.

## Блокеры
- Прямой `curl` на `szczecin.uw.gov.pl` не прошёл (таймаут/сброс соединения через корпоративный прокси). Решено через зеркало gov.pl (`gov.pl/web/uw-zachodniopomorski/...`), где опубликованы те же официальные реквизиты — страницы открывались успешно.
- SWIFT для счёта Urzędu Miasta Szczecin и название банка на официальной странице не указаны — в текст страницы не вписаны (не выдуманы).
- Проверка на будущее: перед публикацией сверить актуальность статуса «нет онлайн-резервации визитов» (может быть временным на момент 27.11.2026).

## Дальше по очереди
Lublin → Bydgoszcz → Białystok → Rzeszów (если за следующую ночь появится ветка/файл по Щецину, брать Lublin).
