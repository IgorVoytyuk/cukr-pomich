# NIGHT-REPORT — 2026-10-17

## Задача
Вариант (A): следующий город из очереди (Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów).

Katowice в репозитории уже существует (cukr-katowice.html, закоммичен ранее, уже в sitemap.xml и index.html). Веток night/* на момент старта не было (`git branch -r` → только origin/main). Поэтому взят следующий город по очереди — **Szczecin**.

## Что сделано
Создан черновик `cukr-szczecin.html` по структуре и стилю `cukr-katowice.html` (самый свежий шаблон: тот же набор блоков, сниппет `?from=` → `?start=`, кнопка бота с `start=szczecin`, блок «60 днів», дедлайн 04.03.2027, перекрёстная ссылка на `/cukr-katowice`).

Страница **НЕ** добавлена в `sitemap.xml` и ни с одной существующей страницы на неё нет ссылок — по заданию это делает владелец после проверки.

## Факты, проверенные напрямую (curl/WebFetch по официальным URL, не по сниппету поиска)

Источник: **https://www.gov.pl/web/uw-zachodniopomorski/informacje-dla-cudzoziemcow** (открыт напрямую, текст страницы просмотрен целиком) и **https://www.gov.pl/web/uw-zachodniopomorski/oplaty-skarbowe** (тот же метод) — оба давали HTTP 200, сеть не блокирована.

- **340 зл (opłata skarbowa)**: получатель Urząd Miasta Szczecin, Wydział Podatków i Opłat Lokalnych, pl. Armii Krajowej 1, 70-456 Szczecin. Счёт **20 1020 4795 0000 9302 0277 9429**. Формулировка титула на самой странице: «opłata za udzielenie zezwolenia dla …». Контекст на странице: «Zezwolenie na pobyt czasowy — pozostałe przypadki — 340 zł» и отдельно блок «Opłaty za udzielenie zezwolenia pobytu możesz dokonać na konto: Urząd Miasta Szczecin … 20 1020 4795 0000 9302 0277 9429».
- **100 зл (karta pobytu)**: получатель Zachodniopomorski Urząd Wojewódzki, NBP O/O Szczecin. Счёт **66 1010 1599 0055 9722 3100 0000**. Титул на странице: «opłata za wydanie karty pobytu dla …». Контекст: «Opłata za kartę pobytu … Wydanie lub wymiana karty pobytu 100 zł».
- Адрес управления (подвал страницы): ul. Wały Chrobrego 4, 70-502 Szczecin.
- Часы работы ZUW Szczecin (та же страница): пн 8:00–18:00, вт–пт 8:00–15:00.
- Инфолиния по делам иностранцев (та же страница, подписана «Informacje dotyczące spraw cudzoziemców»): тел. 91 44 12 000, круглосуточная автоматическая.

Банк-эмитент счёта 340 зл (PKO BP по коду 1020) **не указан явно** на странице источника — поэтому в название получателя название банка не вписано (в отличие от черновика Katowice, где оно было, но это не подтверждённый с текстом источника факт).

## Плейсхолдеры / чего нет на странице
Плейсхолдеров со счетами нет — оба номера подтверждены напрямую с официальной страницы с привязкой к «karta pobytu» / «zezwolenie na pobyt czasowy». Отдельного раздела делегатуры в Koszalinie с её собственными реквизитами и часами на страницу не выносил (это не Szczecin, а другой город области) — только упомянул её существование со ссылкой на источник.

## Блокеры
Нет. Сеть не блокирована (прямые HTTP 200 к gov.pl через curl/прокси). CUKR-специфичного упоминания на странице ZUW не нашёл (страница общая «opłaty skarbowe / karta pobytu», без аббревиатуры CUKR) — это ожидаемо, поскольку CUKR — это сокращение для профильного типа zezwolenia, а сами платёжные реквизиты у управления единые для всех типов pobyt czasowy с одинаковой ставкой 340/100 зл (так же оформлено на уже живых страницах Łódź, Katowice и др.).
