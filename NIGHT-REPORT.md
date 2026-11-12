# Ночной отчёт — 2026-09-30

## Задача
Вариант (A): черновик страницы следующего города из очереди (Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów).

**Важно:** Katowice в очереди уже был реализован ранее (файл `cukr-katowice.html` уже есть в main и в `sitemap.xml`). Следующий город без файла и без ветки `night/*` — **Szczecin**. Создан файл `cukr-szczecin.html`.

## Сеть
WebFetch и WebSearch работали нормально. Прямой `curl` на `gov.pl` через прокси не прошёл (`Recv failure: Connection reset by peer` / `ws_closed_mid_exchange` — см. `__agentproxy/status`), поэтому официальные страницы читались через инструмент WebFetch (он сам делает запрос и отдаёт текст страницы), а не через `curl`. Факты ниже дополнительно перепроверены вторым независимым способом — через WebSearch-сниппеты с других страниц (bip.um.szczecin.pl и повторные попадания в поиске), номера счетов совпали посимвольно.

## Что проверено напрямую (WebFetch страницы) и чем перепроверено

| Факт | Значение | Источник (WebFetch) | Перепроверка |
|---|---|---|---|
| Счёт 340 зл (opłata skarbowa, мито) | `20 1020 4795 0000 9302 0277 9429`, получатель Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, pl. Armii Krajowej 1, 70-456 Szczecin | gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe | WebSearch-сниппет с bip.um.szczecin.pl — тот же номер счёта |
| Счёт 100 зл (за виготовлення карти) | `66 1010 1599 0055 9722 3100 0000`, получатель Zachodniopomorski Urząd Wojewódzki (NBP O/O Szczecin), ul. Wały Chrobrego 4, 70-502 Szczecin | gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe | WebSearch-сниппет — тот же номер счёта |
| Титули переказів (специфічні для Щецина, не загальна формула) | `opłata za udzielenie zezwolenia na pobyt czasowy dla …` / `opłata za wydanie karty pobytu dla …` | gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe | — |
| Пільгова ставка 50 зл за картку | умова — документ, що підтверджує право на пільгу (навчання, складне матеріальне становище, вік неповнолітнього) | gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe | — |
| Адреса воєводського управління (Wydział Spraw Obywatelskich i Cudzoziemców) | ul. Wały Chrobrego 4, 70-502 Szczecin | gov.pl/web/uw-zachodniopomorski/pobyt-czasowy-na-terytorium-rp | WebSearch — та сама адреса |
| Заява CUKR подається виключно електронно через сервіс Шефа UDSC | так, аналог MOS | gov.pl/web/uw-zachodniopomorski/informacja-w-sprawie-wnioskow-o-wydanie-tzw-karty-pobytu-cukr | — |

## Що НЕ вставлено як факт (навмисно опущено, а не вигадано)
- Телефон/e-mail/години прийому відділу у справах іноземців — знайдені двома фетчами дані **суперечили одне одному** (наприклад, понеділок «8:00–18:00» vs «10:00–18:00», телефон «91 44 12 000» vs «91 4303-500»). Замість вигадування чи вибору навмання — на сторінці залишено лише адресу і **пряме посилання на офіційну сторінку** для звірки (за зразком уже опублікованої cukr-katowice.html, де так само немає точних годин прийому в тексті).
- Каса/готівкова оплата на місці (адреса, години) — офіційна сторінка згадує лише «в касі органу» без деталей, тому в текст не додано.

## Не робилось
- Файл **не** додано в `sitemap.xml`.
- Посилання на нову сторінку з інших сторінок (index.html тощо) **не** додавались.
- `google-site-verification` в index.html не чіпався.
- Деплой не робився.

## Блокери / що варто перевірити власнику вранці
1. Перед публікацією — відкрити обидва офіційні лінки (`oplaty-skarbowe`, `pobyt-czasowy-na-terytorium-rp`) і візуально звірити номери рахунків та формулювання титулів (WebFetch використовує проміжну модель для витягу тексту зі сторінки — ймовірність помилки низька через збіг двох незалежних перевірок, але не нульова для фінансових реквізитів).
2. Додати точні години прийому/телефон/e-mail відділу у справах іноземців — дані в мене розійшлись, потрібна ручна звірка на сторінці «Dane kontaktowe» або «Wydziały i biura» ZUW Szczecin.
3. Після перевірки — власник сам додає сторінку в sitemap.xml і розставляє перехресні посилання.

## Гілка
`night/2026-09-30`
