# Нічний звіт — 2026-10-07

## Завдання
Варіант (A): черновик сторінки наступного міста з черги (Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów).

Перевірка репо показала, що **Katowice вже готове** (`cukr-katowice.html` є, 164 рядки, повний шаблон, уже підключене в `index.html` і `sitemap.xml`). Гілок `night/*` у репо не було взагалі (`git branch -r` → лише `origin/main`). Отже наступне місто в черзі — **Szczecin**, для нього не було ні файлу, ні гілки.

Створено файл: **`cukr-szczecin.html`** — за структурою й стилем `cukr-lodz.html`/`cukr-katowice.html` (той самий шаблон, ті самі блоки, сниппет `?from=`, кнопка бота, класи CSS).

## Мережа
Проксі не блокував зовнішні запити: `curl` і `WebFetch` на gov.pl відповідали 200. Працював напряму через офіційні сторінки (без WebSearch-заглушки), окрім одного збою на `szczecin.uw.gov.pl` (TLS reset) — не критично, бо потрібні дані знайдені на `gov.pl`.

## Перевірені напряму факти (WebFetch + curl, з контекстом «karta pobytu»)
Джерело №1 — **https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe** (відкрито і через WebFetch, і напряму через `curl` з парсингом сирого HTML, щоб виключити галюцинацію проміжної моделі):
- **340 зл** (мито, opłata skarbowa za udzielenie zezwolenia na pobyt czasowy): рахунок `20 1020 4795 0000 9302 0277 9429`, отримувач «Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, pl. Armii Krajowej 1, 70-456 Szczecin». Текст сторінки прямо дає формулювання титулу: «opłata za udzielenie zezwolenia na pobyt czasowy dla …».
- **100 зл** (opłata za wydanie lub wymianę karty pobytu): рахунок `66 1010 1599 0055 9722 3100 0000`, отримувач «Zachodniopomorski Urząd Wojewódzki, NBP O/O Szczecin». Титул: «opłata za wydanie karty pobytu dla …».
- Сторінка прямо попереджає: «opłata skarbowa za udzielenie zezwolenia na pobyt oraz opłata za wydanie karty pobytu to dwie różne opłaty» — підтверджує різні рахунки.
- Пільгова ставка 50 зл за картку теж є на сторінці (для осіб з правом на пільгу).

Джерело №2 — **https://www.gov.pl/web/uw-zachodniopomorski/cudzoziemcy** (WebFetch + curl):
- Адреса управління: ul. Wały Chrobrego 4, 70-502 Szczecin.
- Інфолінія для іноземців: «Numer telefonu infolinii: 91 44 12 000» (цитата з тексту сторінки).
- Загальний контакт управління: 222 500 109, робочі дні 8:00–15:00 (стоїть і в футері сторінки).

Назва відділу **Wydział Spraw Obywatelskich i Cudzoziemców** підтверджена окремо — офіційним оголошенням про вакансію на `nabory.kprm.gov.pl` (урядовий портал служби цивільної), де прямо вказано «... w Wydziale Spraw Obywatelskich i Cudzoziemców» для ZUW Szczecin за тією ж адресою.

## Що залишено без вигаданих деталей (НЕ підтверджено напряму — НЕ писав)
- Точні години прийому саме відділу у справах іноземців (не загальні години управління) і графік видачі готової карти — на офіційних сторінках не знайдено окремо, тому в тексті дано лише загальний контакт/адресу і явне посилання «звіряйте на офіційному сайті перед візитом» (як і в cukr-katowice.html).
- Окремий e-mail відділу у справах іноземців — на сторінці не вказаний, не придумував.
- Кімната/внутрішній телефон співробітника з одного зі старих оголошень про вакансію — не використав, бо це не контактна інформація для заявників, а внутрішній HR-документ.

## Що НЕ зроблено (свідомо, за інструкцією)
- `cukr-szczecin.html` **не доданий** в `sitemap.xml`.
- Посилання на нову сторінку **не додані** на інші сторінки сайту (index.html і т.д. не чіпав).
- `meta google-site-verification` в index.html не чіпав.
- `main` напряму не чіпав — усе в гілці `night/2026-10-07`.

## Блокери
Немає. Задачу (A) виконано повністю для міста Szczecin з перевіреними офіційними реквізитами.
