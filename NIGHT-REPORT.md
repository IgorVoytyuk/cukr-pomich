# Ночной отчёт — 2026-10-03

## Что сделано
Создан черновик страницы **cukr-szczecin.html** (карта CUKR в Щецине) по структуре и стилю `cukr-lodz.html` / `cukr-katowice.html`: те же блоки (два счёта, титул перевода, ловушка с подтверждением, воеводское управление, что ещё важно знать, помощь, источники), сниппет `?from=` и кнопки бота (`?start=szczecin`) сохранены.

Очередь городов на момент запуска: Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów. `cukr-katowice.html` уже существовал в репозитории, веток `night/*` не было (`git branch -r` → только `origin/main`). Поэтому первый город без файла — **Szczecin**.

Страница НЕ добавлена в `sitemap.xml` и ссылки на неё с других страниц не ставились — по инструкции это делает владелец после проверки. `index.html` и meta `google-site-verification` не трогались.

## Какие факты проверены напрямую и с какого URL
Сеть не заблокирована (проверено `curl` на google.com → 200; WebFetch и WebSearch тоже работали).

Все факты на странице взяты напрямую через `curl`/WebFetch с официальных страниц gov.pl, с контекстом «karta pobytu» / «opłata za wydanie karty pobytu»:

1. **Счёт 340 зл (мито, opłata skarbowa)** — `20 1020 4795 0000 9302 0277 9429`, получатель Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, pl. Armii Krajowej 1, 70-456 Szczecin.
   Источник: https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe (сырой текст страницы получен через `curl`, найден блок «Opłata za kartę pobytu» и отдельно блок про opłatę skarbową с этим счётом и категорией «Zezwolenie na pobyt czasowy – pozostałe przypadki 340 zł»).

2. **Счёт 100 зл (за карту)** — `66 1010 1599 0055 9722 3100 0000`, получатель Zachodniopomorski Urząd Wojewódzki, NBP O/O Szczecin.
   Источник: та же страница https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe — явно привязан к «Opłatę za wydanie lub wymianę karty pobytu wnosisz na rachunek...», ставка «Wydanie lub wymiana karty pobytu 100 zł» и льгота 50 зл рядом.

3. **Официальные формулировки титула перевода** (другие, чем в Лодзи/Катовице — это настоящий текст именно для Щецина, а не обобщённая формула): «opłata za udzielenie zezwolenia na pobyt czasowy dla …» и «opłata za wydanie karty pobytu dla …» — взято с той же страницы.

4. **Адрес управления** — ul. Wały Chrobrego 4, 70-502 Szczecin; **название отдела** — Wydział Spraw Obywatelskich i Cudzoziemców — подтверждено из официального объявления о вакансии на nabory.kprm.gov.pl (PDF скачан через `curl`, текст извлечён через PyPDF2): «...w Wydziale Spraw Obywatelskich i Cudzoziemców», адрес совпадает.

5. **Часы работы и инфолиния** — пн 8:00–18:00, вт–пт 8:00–15:00; инфолиния для иностранцев (круглосуточная, автоматическая) 91 44 12 000; делегатура ZUW в Koszalin — тел. 94 34 28 338, e-mail delegatura@zuw.szczecin.uw.gov.pl.
   Источник: https://www.gov.pl/web/uw-zachodniopomorski/informacje-dla-cudzoziemcow (сырой текст через `curl`).

## Что осталось плейсхолдером
Ничего — оба счёта и все факты на странице подтверждены напрямую по официальным источникам с нужным контекстом, плейсхолдеров не потребовалось.

## Блокеры
Нет блокеров. Сеть работала весь сеанс. Страницу стоит проверить владельцу перед добавлением в sitemap.xml и простановкой ссылок с index.html / других городских страниц (по аналогии с Katowice/Gdańsk/Łódź).
