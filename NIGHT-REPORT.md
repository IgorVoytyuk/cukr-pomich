# Ночной отчёт — 2026-10-06

## Что сделано

Создан черновик страницы **cukr-rzeszow.html** (CUKR у Ряшеві / Жешуве, Podkarpackie).

### Почему именно Rzeszów
Очередь городов: Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów.
Проверил репозиторий (main) и все ветки `night/*` (`git branch -r`, `git ls-tree` по каждой):
- **Katowice** — уже в main (`cukr-katowice.html` существует).
- **Szczecin** — уже черновик в ветках `night/2026-09-29`, `night/2026-09-30`, `night/2026-10-03`, `night/2026-10-05` (похоже, эта страница создавалась несколько ночей подряд и ни разу не была смержена — возможно, стоит проверить, почему, и не плодить её дальше).
- **Lublin** — черновик в `night/2026-10-01`.
- **Bydgoszcz** — черновик в `night/2026-10-02`.
- **Białystok** — черновик в `night/2026-10-04`.
- **Rzeszów** — ни в main, ни в одной ветке не найден → взял его.

Страница **не добавлена** в `sitemap.xml` и на неё **не поставлены ссылки** с других страниц — это решение владельца после проверки (по заданию).

## Какие факты проверены напрямую (WebFetch/curl по официальным страницам)

Сеть была доступна напрямую (curl, без блока прокси), WebSearch тоже работал.

1. **100 зл — рахунок за виготовлення/заміну карти побуту:**
   `74 1010 1528 0012 1222 3100 0000`, отримувач **Podkarpacki Urząd Wojewódzki w Rzeszowie** (NBP O/O Rzeszów), ul. Grunwaldzka 15, 35-959 Rzeszów.
   Джерело: сам скачал і прочитав файл `Karty_pobytu_(KIU-259)270426.DOC`, прив'язаний до офіційної сторінки
   https://www.gov.pl/web/uw-podkarpacki/karty-pobytu (актуальна версія «obowiązuje od 27 kwietnia 2026 r.»).
   У документі прямо написано: «Wydanie/wymiana karty pobytu podlega opłacie 100 zł... na konto: Podkarpacki Urząd Wojewódzki... NBP O/O Rzeszów Nr konta: 74 1010 1528 0012 1222 3100 0000». Контекст — саме «karta pobytu». Високий ступінь довіри.

2. **340 зл — мито (opłata skarbowa) за zezwolenie na pobyt czasowy:**
   `90 1240 6960 3851 0062 0000 0423`, отримувач **Urząd Miasta Rzeszowa**, ul. Rynek 1 (Prezydent Miasta Rzeszowa).
   Джерело: сам скачал і прочитав файл `Zezwolenie_na_pobyt_czasowy_i_pracę_(KIU-230)270426.DOC` з офіційної сторінки
   https://www.gov.pl/web/uw-podkarpacki/zezwolenie-na-pobyt-czasowy-i-prace.
   **Нюанс (позначив в HTML-коментарі на сторінці):** цей документ — про «zezwolenie na pobyt czasowy i pracę» (інший підвид дозволу), а не окремо про CUKR. Рахунок opłaty skarbowej належить місту і, за логікою закону про opłatę skarbową, не залежить від конкретного підвиду зезволення — сума ж 340 зл саме для CUKR підтверджена окремо текстом офіційного FAQ PUW
   (https://rzeszow.uw.gov.pl/.../najczesciej-zadawane-pytania-i-odpowiedzi/legalizacja-pobytu — «opłaty w wysokości 100 zł za wydanie karty pobytu oraz opłaty skarbowej w wysokości 340 zł za udzielenie zezwolenia na pobyt czasowy»).
   Окремої офіційної «картки послуги» саме під CUKR на сайті PUW ще нема (новий тип дозволу). Залишив на сторінці явний **TODO-коментар власнику** — перевірити цей рахунок перед публікацією/додаванням в sitemap.

3. **Контакти відділу та інфолінія для іноземців:**
   Wydział Spraw Obywatelskich i Cudzoziemców, Oddział Obsługi Cudzoziemców, ul. Grunwaldzka 15, 35-959 Rzeszów; тел. 17 867-10-47, e-mail cudzoziemcy@rzeszow.uw.gov.pl (з тих самих офіційних карток послуг KIU-230/KIU-259).
   Окрема безкоштовна інфолінія/Punkt Informacyjny для іноземців: тел. 17 867 1265, пн–пт 7:30–15:30, вт 8:00–16:00, кімн. 39 (партер) — підтверджено з https://rzeszow.uw.gov.pl/dla-klienta/cudzoziemcy/punkt-informacyjny-infolinia.

4. **Попередження про шахраїв:** PUW w Rzeszowie офіційно попереджав про платних посередників, що пропонують «оформити» CUKR (стаття на rzeszow.uw.gov.pl/dla-klienta/cudzoziemcy/aktualnosci/nieuczciwe-praktyki...). Коротко згадано в блоці «Що ще важливо знати», підсилює наш наявний месседж про безкоштовну подачу.

## Що залишилось плейсхолдером / потребує перевірки власником

- **Рахунок 340 зл для CUKR конкретно** — технічно підтверджений (прочитаний напряму з офіційного документа PUW), але документ-джерело про інший підвид дозволу («i pracę»). Позначив HTML-коментарем і TODO на сторінці. Рекомендую власнику звірити цей рахунок на сайті Urzędu Miasta Rzeszowa (opłaty skarbowe) перед публікацією.
- Години роботи каси PUW для оплати готівкою — у джерелі не вказані, тому в тексті сторінки просто сказано «уточніть на інфолінії», без вигаданих годин.
- Сторінку НЕ додав у sitemap.xml і не прилінкував з інших сторінок — чекає перевірки власником.

## Блокери

Немає. Мережа працювала напряму (curl без проксі-блоку), WebSearch і прямі запити gov.pl/rzeszow.uw.gov.pl відпрацювали штатно.

## Інше

Звернув увагу: гілка `night/2026-09-29`/`30`/`10-03`/`10-05` кожна ніч перестворює `cukr-szczecin.html`, і жодна з них не змержена в main. Варто власнику подивитись, чому Szczecin досі не влив у main — інакше наступні ночі продовжать його переробляти замість нових міст.
