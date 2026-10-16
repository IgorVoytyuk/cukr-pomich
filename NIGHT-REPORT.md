# Ночной отчёт — 2026-10-16

## Задача
Вариант (A): черновик страницы следующего города из очереди (Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów).

Katowice в репозитории уже существует (`cukr-katowice.html`, в sitemap.xml, задеплоен). Следующий в очереди без файла и без ветки `night/*` — **Szczecin**. Создан черновик `cukr-szczecin.html` по структуре и стилю `cukr-lodz.html` / `cukr-katowice.html` (тот же шаблон, те же блоки, сниппет `?from=`→`?start=`, кнопка бота).

Страница **не** добавлена в `sitemap.xml` и на неё **не** проставлены ссылки с других страниц (кроме обратной ссылки на `/cukr-katowice` внутри самой новой страницы, по аналогии с тем, как Katowice ссылается на Łódź) — проверка и деплой за владельцем.

## Что проверено напрямую (curl, не поисковый сниппет)

Все факты ниже проверены прямым запросом (`curl -L`) к странице и видны в тексте с нужным контекстом:

1. **Счёт 340 зл (opłata skarbowa, город)**
   Источник: https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe (раздел "Opłaty skarbowe")
   Получатель: Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, pl. Armii Krajowej 1, 70-456 Szczecin
   Счёт: `20 1020 4795 0000 9302 0277 9429`
   Контекст на странице: «opłata skarbowa za udzielenie zezwolenia na pobyt» + тариф «Zezwolenie na pobyt czasowy – pozostałe przypadki — 340 zł» (ровно та же сумма, что и в Лодзі/Катовіцах для CUKR).

2. **Счёт 100 зл (karta pobytu, воеводство)**
   Тот же источник, раздел «Opłata za kartę pobytu».
   Получатель: Zachodniopomorski Urząd Wojewódzki, NBP O/O Szczecin
   Счёт: `66 1010 1599 0055 9722 3100 0000`
   Контекст: «Opłatę za wydanie lub wymianę karty pobytu wnosisz na rachunek: ... Wydanie lub wymiana karty pobytu — 100 zł».

3. **Титул переказу** — взят дословно со страницы оплат (не из общей кросс-городской формулы): «opłata za udzielenie zezwolenia na pobyt czasowy dla …» и «opłata za wydanie karty pobytu dla … oraz imię i nazwisko osoby, której dotyczy karta».

4. **Назва відділу**: на странице https://www.gov.pl/web/uw-zachodniopomorski/wydzialy-i-biura3 ужонд в Щеціні називає відділ **«Wydział Spraw Cudzoziemców»** (без «Obywatelskich», на відміну від Лодзі/Катовіц, де «Wydział Spraw Obywatelskich i Cudzoziemców»). Використано точну локальну назву.

5. **Адреса управління**: ul. Wały Chrobrego 4, 70-502 Szczecin — підтверджено на кількох сторінках того ж сайту (dane-kontaktowe, cudzoziemcy).

6. **Інфолінія для іноземців**: 91 44 12 000 — джерело https://www.gov.pl/web/uw-zachodniopomorski/cudzoziemcy (розділ «Infolinia dla Cudzoziemców»).

7. **Загальні години роботи управління**: понеділок 8:00–18:00, вівторок–пʼятниця 8:00–15:00 — джерело https://www.gov.pl/web/uw-zachodniopomorski/godziny-otwarcia. Це загальні години ужонду, **не** окремо підтверджені години прийому саме відділу у справах іноземців (на сайті окремого розкладу для цього відділу я не знайшов) — на сторінці явно написано, що це треба звіряти окремо.

## Блокери / залишки
- Немає окремого підтвердженого розкладу прийому (годин візитів) саме для Wydział Spraw Cudzoziemców — на сторінці вказано лише загальні години ужонду. Явного плейсхолдера не ставив, бо жодних вигаданих годин не вписано — лише перевірений загальний факт із позначенням, що саме для відділу варто звіряти окремо.
- E-mail відділу у справах іноземців (щось типу wso@szczecin.uw.gov.pl) зустрічався лише в пошуковому сніппеті, прямим фетчем на офіційній сторінці я його не побачив — тому в сторінку **не включений**.
- Мережа: EGRESS не заблокирован — WebSearch, WebFetch и curl до gov.pl отработали нормально.

## Файл
`cukr-szczecin.html` — готов до ревʼю. Не в sitemap.xml, нет входящих ссылок с других сторінок сайту.
