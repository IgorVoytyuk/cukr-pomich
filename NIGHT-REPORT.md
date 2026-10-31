# Ночной отчёт — 2026-10-31

## Что сделано
Черновик страницы города из очереди (Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów).
Katowice в репозитории уже существовал (`cukr-katowice.html`), веток `night/*` не было (`git branch -r` — только `origin/main`).
Следующий в очереди без файла — **Szczecin**. Создан файл `cukr-szczecin.html` по структуре и стилю `cukr-lodz.html` (тот же шаблон, блоки, сниппет `?from=`, кнопки бота с `?start=szczecin`).

Страница НЕ добавлена в `sitemap.xml` и на неё не поставлены ссылки с других страниц (кроме обратной ссылки `cukr-katowice.html` → ничего не менялось, только новая страница сама ссылается на `/cukr-katowice` в блоке "Дивіться також" — это принято как часть шаблона, сама `cukr-katowice.html` не редактировалась).

## Факты, проверенные напрямую (WebFetch по официальным gov.pl-страницам)
Источник обеих оплат — одна и та же официальная страница: **gov.pl — uw-zachodniopomorski/oplaty-skarbowe** (Zachodniopomorski Urząd Wojewódzki w Szczecinie). Страница не упоминает слово «CUKR» явно (как и большинство таких страниц у других воеводств) — это общая страница сборов за zezwolenie na pobyt czasowy / kartę pobytu, на которую опираются и уже опубликованные страницы (Łódź, Gdańsk и др.).

Проверено лично (WebFetch, 2026-10-31):
- **340 zł** (opłata skarbowa za zezwolenie na pobyt czasowy — «pozostałe przypadki»): счёt **20 1020 4795 0000 9302 0277 9429**, получатель Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, Pl. Armii Krajowej 1, 70-456 Szczecin. Название банка (PKO Bank Polski) определено по банковскому коду счёта (префикс 1020), как и в уже опубликованных страницах (напр. Łódź — Bank Pekao по префиксу 1240). Титул перевода на странице: «za wydanie zezwolenia na zamieszkanie na pobyt czasowy na terytorium RP».
- **100 zł** (wydanie lub wymiana karty pobytu): счёt **66 1010 1599 0055 9722 3100 0000**, получатель Zachodniopomorski Urząd Wojewódzki, NBP O/O Szczecin (банк указан прямо на странице). Льготная ставка 50 zł — там же, с условиями льготы. Титул перевода: «opłata za wydanie karty pobytu dla …».
- Адрес и контакты отдела по делам иностранцев — с страницы **gov.pl — uw-zachodniopomorski/pobyt-czasowy-na-terytorium-rp**: ul. Wały Chrobrego 4, 70-502 Szczecin; тел. 91 44 12 000; e-mail wsoim@szczecin.uw.gov.pl; факс 91 42 25 712; приём пн 8:00–18:00, вт–пт 8:00–15:00; делегатура в Koszalinie — тел. 94 34 28 382.

## Что осталось плейсхолдером / не подтверждено
- **Часы работы кассы** для наличной оплаты (и городской, и воеводской) — на официальных страницах не указаны. В тексте явно написано, что это не подтверждено, вместо выдуманных часов/кабинета.
- **Процедура выдачи готовой карты** (талон из автомата, конкретные дни выдачи, как было найдено для Łódź) — отдельного подтверждения не найдено, в тексте указано прямо, что это нужно уточнять при подаче.
- Явного упоминания «CUKR» на страницах Zachodniopomorskiego UW нет — использованы общие тарифы за zezwolenie na pobyt czasowy / kartę pobytu, как и на уже опубликованных городских страницах сайта.

## Блокеры
- Сетевой доступ: прямой `curl` на `szczecin.eu` вернул `Connection reset by peer` (вероятно блок прокси/firewall для этого хоста), но `gov.pl` и WebFetch отработали нормально — все факты подтверждены через WebFetch напрямую на gov.pl.
- Задача (B) не потребовалась — город для задачи (A) нашёлся сразу (Szczecin).
- PR: попытка открыть через GitHub MCP — результат см. в финальном сообщении.
