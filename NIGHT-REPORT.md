# Ночной отчёт — 2026-11-28

## Что сделано
Создана черновая страница `cukr-szczecin.html` по шаблону `cukr-lodz.html` (те же блоки, стили, сниппет `?from=`, кнопки бота с `start=szczecin`).

Город выбран по очереди из задания (Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów): **Katowice уже есть** в репозитории (`cukr-katowice.html`), веток `night/*` в репо не было вообще — значит следующий в очереди — **Szczecin**.

Страница **не добавлена** в `sitemap.xml` и ссылки на неё с других страниц **не проставлены** — это должен сделать владелец после проверки, как и требовалось.

## Какие факты проверены напрямую (через `curl` на официальные `gov.pl` страницы, сам открывал HTML и искал номера в контексте)

Источник: **https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe**
- Счёт 340 зл (opłata skarbowa, zezwolenie na pobyt czasowy): **Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, Pl. Armii Krajowej 1, 70-456 Szczecin**, № **20 1020 4795 0000 9302 0277 9429**. Текст страницы: «opłata za udzielenie zezwolenia na pobyt czasowy wynosi 340 PLN... Opłaty wnosi się w kasie organu podatkowego – Urząd Miasta Szczecin lub na rachunek tego organu: ... 20 1020 4795 0000 9302 0277 9429».
- Счёт 100 зл (wydanie karty pobytu): **Zachodniopomorski Urząd Wojewódzki (NBP O/O Szczecin)**, № **66 1010 1599 0055 9722 3100 0000**. Там же льготная ставка 50 зл.

Источник: **https://www.gov.pl/web/uw-zachodniopomorski/informacje-dla-cudzoziemcow**
- Подтверждён тот же счёт 100 зл и формулировка титула: «opłata za wydanie karty pobytu dla ...».
- Подтверждён тот же счёт 340 зл (Urząd Miasta Szczecin) и формулировка титула для него.

Источник: **https://www.gov.pl/web/uw-zachodniopomorski/pobyt-czasowy-na-terytorium-rp**
- Адрес и часы приёма Wydział Spraw Obywatelskich i Cudzoziemców: ul. Wały Chrobrego 4, 70-502 Szczecin; пн 8:00–18:00, вт–пт 8:00–15:00.
- Телефон 91 44 12 000, факс 91 42 25 712, e-mail wsoim@szczecin.uw.gov.pl — взяты из текста этой же страницы (блок «jednostka odpowiedzialna»).
- Подтверждена ставка 340 PLN за zezwolenie na pobyt czasowy и счёт Urzędu Miasta Szczecin.

Источник: **https://www.gov.pl/web/udsc/CUKR-procedura** — общая справочная ссылка по процедуре CUKR (как и на других городских страницах), отдельно по Щецину CUKR-специфики на сайте ZUW не нашёл — счётный ряд общий для всех zezwoleń na pobyt czasowy, как и на уже опубликованных страницах (Łódź, Katowice и др.), где CUKR тоже не выделен отдельно.

Специфичного для Щецина раздела "справки для иностранцев по карте CUKR" (отдельная страница про CUKR на сайте ZUW Szczecin) не нашёл — страница использует общий порядок оплат для zezwolenie na pobyt czasowy, как и у других уже опубликованных городов.

## Что НЕ проверял и не включил (чтобы не выдумывать)
- Название банка для счёта Urzędu Miasta Szczecin (340 зл) — на странице явно не указано, поэтому в HTML банк не упомянут, указан только получатель и номер счёта.
- Детали "очереди/талона" при получении готовой карты в Щецине (как это описано для Лодзи) — отдельно для Щецина не нашёл, не стал придумывать.
- Email wsoim@szczecin.uw.gov.pl — в сети гуляют также варианты wso@ и so@ (встретились в поисковых сниппетах), но я НЕ беру их за источник: в HTML указан только wsoim@szczecin.uw.gov.pl, который сам видел на официальной странице pobyt-czasowy-na-terytorium-rp.

Плейсхолдеров [СЧЁТ: ПРОВЕРИТЬ] в итоге не потребовалось — оба счёта нашёл и проверил напрямую на официальных страницах.

## Блокеры
Нет. Сеть была доступна напрямую (curl, без EGRESS_BLOCKED). WebFetch тоже сработал бы, но использовал curl для прямого контроля над парсингом текста вокруг номеров счетов.

## Рекомендация владельцу перед деплоем
1. Проверить дату "Оновлено" и актуальность реквизитов на день деплоя (как и для всех остальных городов).
2. Добавить `cukr-szczecin` в `sitemap.xml` и проставить ссылки с других страниц (например, заменить `cukr-lodz`/`cukr-gdansk` в блоке "Дивіться також" на соседних страницах, если хотите ротацию).
3. По желанию — уточнить название банка Urzędu Miasta Szczecin и порядок получения готовой карты (талон/очередь), если это важно для UX страницы.
