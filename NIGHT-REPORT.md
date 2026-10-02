# Ночной отчёт — night/2026-10-02

## Что сделано

Создан черновик страницы **Быдгощ** (Bydgoszcz) — `cukr-bydgoszcz.html`.

Проверка очереди городов (Katowice, Szczecin, Lublin, Bydgoszcz, Białystok, Rzeszów):
- Katowice — уже в `main` (`cukr-katowice.html`), пропущен.
- Szczecin — файла в `main` нет, но уже есть ветки `night/2026-09-29` и `night/2026-09-30` с черновиком `cukr-szczecin.html`, пропущен.
- Lublin — файла в `main` нет, но уже есть ветка `night/2026-10-01` с черновиком `cukr-lublin.html`, пропущен.
- **Bydgoszcz — следующий в очереди, ни файла, ни веток `night/*` с ним не было. Взят в работу.**

Структура и стиль скопированы с `cukr-lodz.html` (тот же шаблон, UA/RU переключатель, те же блоки, сниппет `?from=` → `?start=`, кнопка бота со `start=bydgoszcz`). Страница **не добавлена** в `sitemap.xml` и на неё **не поставлено ссылок** с других страниц сайта — это должен сделать владелец после проверки. Внутри самой новой страницы есть ссылка на уже существующую в `main` `cukr-katowice.html` (чтобы не ссылаться на черновики Szczecin/Lublin, которые ещё не в `main`).

## Факты, проверенные напрямую (не по сниппету поиска)

Все номера счетов и контакты ниже проверены прямым открытием официальных страниц через `curl` (с явной выгрузкой HTML и поиском по тексту в контексте «karta pobytu» / «zezwolenie na pobyt czasowy»), а не по сниппету WebSearch.

1. **Счёт 340 зл (мито, оплата городу):**
   `52 1240 6960 3892 1000 0000 0000`, получатель Urząd Miasta Bydgoszczy, Wydział Podatków i Opłat Lokalnych.
   Источники (два независимых, оба открыты напрямую):
   - https://bip.bydgoszcz.uw.gov.pl/251/tabela-obowiazujacych-oplat.html — строка «Za zezwolenie na pobyt czasowy, z wyłączeniem… 340 zł» с тем же номером счёта сразу под ней.
   - https://bip.um.bydgoszcz.pl/artykul/31/13/konta-bankowe — собственная страница счетов города: «Wydział Podatków i Opłat Lokalnych Nr rachunku bankowego: 52 1240 6960 3892 1000 0000 0000 — opłata skarbowa».
   Номер на обеих страницах совпадает дословно.

2. **Счёт 100 зл (изготовление карты, оплата воеводскому управлению):**
   `56 1010 1078 0000 4222 3100 0000`, получатель Kujawsko-Pomorski Urząd Wojewódzki w Bydgoszczy, Wydział Organizacyjny.
   Источники (открыты напрямую):
   - https://bip.bydgoszcz.uw.gov.pl/251/tabela-obowiazujacych-oplat.html — строка «Wydanie lub wymiana karty pobytu 100 zł» с тем же номером счёта.
   - https://bip.bydgoszcz.uw.gov.pl/467/wydanie-i-wymiana-karty-pobytu.html — карта информационная «Wydanie i wymiana karty pobytu», тот же номер в разделе «Opłaty».
   - Дополнительно совпадает с англоязычной страницей https://cudzoziemiec.bydgoszcz.pl/en/fees/ (официальный портал того же управления для иностранцев).

3. **Адрес и контакты управления:** Kujawsko-Pomorski Urząd Wojewódzki w Bydgoszczy, Wydział Spraw Cudzoziemców, ul. Konarskiego 1-3, budynek B, 85-066 Bydgoszcz; инфолиния для иностранцев 52 349 74 61 (пн–пт 8:00–15:00); e-mail cudzoziemiec@bydgoszcz.uw.gov.pl; отдельный e-mail для проверки готовности карты к получению — kartapobytu@bydgoszcz.uw.gov.pl; запись на визит — uw.bezkolejki.eu/kpuw_bydgoszcz.
   Источники: https://cudzoziemiec.bydgoszcz.pl/kontakt/ и https://www.gov.pl/web/uw-kujawsko-pomorski/informacje-o-wydziale-wsoc (обе открыты напрямую).

4. **CUKR-специфичная информация** (суммы 340+100 зл, система MOS, profil zaufany, срок подачи до 04.03.2027, 3 года действия карты) — подтверждена на специальной странице управления именно про карту CUKR: https://cudzoziemiec.bydgoszcz.pl/aktualnosci/informacja-dotyczaca-procedury-wydania-karty-pobytu-z-adnotacja-poprzednio-posiadacz-ochrony-czasowej-tzw-karty-pobytu-cukr/

5. **Правило «60 дней на получение карты»**, подача только через MOS, запрет платных посредников — также на общем источнике https://www.gov.pl/web/udsc/CUKR-procedura (уже использовался для других городских страниц).

## Что осталось как плейсхолдер / под вопросом

- **Оплата наличными в кассе управления** — на официальных страницах оплат Быдгощи такая опция не упомянута (в отличие от Лодзи). Не стал придумывать кассу/часы приёма — страница честно отправляет читателя на инфолинию.
- **Титул перевода (tytuł przelewu)** — Быдгощ не даёт готового шаблона на своих страницах оплат (в отличие от Щецина). Использована та же безопасная общая формулировка, что и на странице Лодзи (со ссылкой на то, что так формулирует Pomorski UW) — без привязки к несуществующему на сайте Быдгощи образцу.
- Оба банковских реквизита стоит перепроверить владельцем в день публикации — счета могут меняться, явного предупреждения об этом на страницах Быдгощи, в отличие от Лодзи, нет, но это стандартная практика для банковских реквизитов госорганов.

## Блокеры

Сетевых блокировок не было: прямой `curl` через `gov.pl`, `bip.bydgoszcz.uw.gov.pl`, `bip.um.bydgoszcz.pl` и `cudzoziemiec.bydgoszcz.pl` отработал без ошибок TLS/прокси. Единственная неудача — прямой запрос `https://www.gov.pl/web/uw-kujawsko-pomorski/oplaty-skarbowe` вернул 301 → редирект на главную `gov.pl` (такого URL-слага для этого воеводства не существует); обошёл проблему, найдя правильный адрес страницы оплат через WebSearch и затем открыв его напрямую через `curl` (`bip.bydgoszcz.uw.gov.pl/251/tabela-obowiazujacych-oplat.html`).
