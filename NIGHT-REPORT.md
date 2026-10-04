# Ночной отчёт — 2026-10-04

## Что сделано
Создан черновик страницы для следующего города очереди: **cukr-bialystok.html** (Білосток).

Очередь из задания: Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów.
Проверка перед стартом (`git branch -r`, `git ls-tree` по всем ночным веткам):
- Katowice — уже в main (cukr-katowice.html).
- Szczecin — черновик уже существует в ветках night/2026-09-29, night/2026-09-30, night/2026-10-03 (не в main).
- Lublin — черновик в ветке night/2026-10-01.
- Bydgoszcz — черновик в ветке night/2026-10-02.
- Białystok и Rzeszów — нигде не найдены.

→ Взял **Białystok** (первый в очереди без файла и без ветки).

Структура и стиль скопированы с cukr-lodz.html (как указано в задании), оформление карточек — как в cukr-katowice.html (последняя смёрженная версия шаблона: блок с дедлайном 04.03.2027, перекрёстные ссылки). Сниппет `?from=` → `?start=` в скрипте сохранён без изменений. Кнопки бота — `https://t.me/cukr_pomich_bot?start=bialystok`.

Файл НЕ добавлен в sitemap.xml и ссылки на него с других страниц НЕ проставлены — это решение владельца после проверки.

## Сеть
Прокси пропускает запросы к `gov.pl` и `bialystok.pl`/`bip.bialystok.pl` напрямую (curl, HTTP 200). Домен `bialystok.uw.gov.pl` (поддомен voivodeship-сайта) оказался заблокирован проверкой egress-прокси (`connect_rejected`, 502 на CONNECT) — но нужная информация об отделе по делам иностранцев дублируется на `gov.pl/web/uw-podlaski/...`, который открылся без проблем, так что это не стало блокером.

**Важно:** инструмент WebFetch (суммаризация через маленькую модель) один раз исказил номер счёта — вместо `26...` подставил `24...` (спутал с соседним счётом за "grunty Skarbu Państwa" на той же странице). Поэтому для всех числовых реквизитов перепроверял через `curl` + `grep` по сырому HTML, а не доверял пересказу WebFetch. Рекомендация на будущее: для платёжных реквизитов всегда сверять сырой HTML, WebFetch использовать только для навигации/контекста.

## Факты, проверенные напрямую (с URL)
Все — через `curl` сырого HTML (не через пересказ WebFetch), номера сверены вручную по регулярному выражению и контексту.

1. **340 зл (opłata skarbowa, город)** — счёт `26 1240 5211 1111 0010 3553 3132`, получатель Urząd Miejski w Białymstoku, Departament Finansów Miasta (Bank Pekao S.A.).
   - Источник 1: https://www.gov.pl/web/uw-podlaski/tabela-oplat — официальная таблица оплат Podlaskiego UW, строка «Zezwolenie na pobyt czasowy 340 zł», с тем же номером счёта и титулом «Opłata za wydanie zezwolenia na pobyt czasowy + imię i nazwisko wnioskodawcy».
   - Источник 2 (перекрёстная проверка того же номера): https://bip.bialystok.pl/urzad_miejski/poradnik_interesanta/aktualne-konta-bankowe.html — раздел «Wpłaty dochodów Gminy Białystok... z tytułu opłaty skarbowej», тот же номер.
   - Источник 3 (тот же номер ещё раз): https://www.bialystok.pl/pl/dla_biznesu/podatki_i_oplaty/konta-bankowe-urzedu-miejskiego.html.

2. **100 зл (карта, воеводство)** — счёт `94 1010 1049 0000 3922 3100 0000`, получатель Wydział Finansów i Budżetu Podlaskiego Urzędu Wojewódzkiego w Białymstoku (O/O NBP Białystok).
   - Источник: https://www.gov.pl/web/uw-podlaski/tabela-oplat — строка «Wydanie lub wymiana karty pobytu 100 zł», тот же номер, титул «Opłata za wydanie/wymianę karty pobytu + imię i nazwisko wnioskodawcy».
   - Примечание: страница не упоминает CUKR отдельно — это общая ставка за выдачу/замену karty pobytu, которая распространяется и на CUKR (как и на страницах других городов в этом проекте).

3. **Контакты отдела по делам иностранцев** — Oddział do Spraw Cudzoziemców i Rejestracji Zaproszeń, инфолиния +48 857439600, e-mail cudzoziemcy@bialystok.uw.gov.pl, часы: понедельник 7:00–18:00, вторник/четверг/пятница 7:30–15:30 (среда в графике не указана — так и оставлено, не придумано).
   - Источник: https://www.gov.pl/web/uw-podlaski/kontakt.

4. **Адрес управления** — ul. Mickiewicza 3, 15-213 Białystok (общий адрес Podlaskiego UW из подвала той же страницы tabela-oplat; отдельного адреса именно для отдела по делам иностранцев на сайте не нашёл — не выдумывал).

## Осталось плейсхолдером / не проверено
Ничего не оставлено плейсхолдером — оба счёта и титул переводов подтверждены напрямую с одной и той же официальной страницы (tabela-oplat), что надёжнее, чем в части уже существующих страниц (например, в Лодзи и Катовицах титул переводов — это общая формула Pomorskiego UW, а не собственная формулировка города). Для Белостока удалось взять **собственную** официальную формулировку титула.

Не проверялось (и не указывается на странице): часы и адрес личной выдачи готовой карты (odbiór karty) — на сайте Podlaskiego UW не нашлось отдельной информации по этому пункту для иностранцев, в отличие от Лодзи. Текст сайта это не упоминает, чтобы не выдумывать.

## Блокеры
Нет блокеров. Задание выполнено полностью (вариант A).

## Ветка и доставка
Ветка: `night/2026-10-04`, запушена в origin, открыт PR в main через GitHub MCP.
