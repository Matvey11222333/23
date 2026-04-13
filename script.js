<!DOCTYPE html>

<html lang="ru">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>EduCompare | Рейтинг онлайн-школ</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>

        /* ----- ВАШИ СТИЛИ (ПОЛНОСТЬЮ СОХРАНЕНЫ) ----- */

        :root {

            --primary: #6C63FF;

            --primary-dark: #5752D4;

            --secondary: #FF6584;

            --dark-bg: #0F0F23;

            --darker-bg: #090914;

            --card-bg: #1A1A2E;

            --text: #E2E2F2;

            --text-light: #A0A0C0;

            --border: #2D2D4D;

            --success: #4CC9F0;

            --warning: #F72585;

            --ege: #4361EE;

            --lang: #7209B7;

            --dev: #4CC9F0;

            --finance: #F72585;

        }



        * {

            margin: 0;

            padding: 0;

            box-sizing: border-box;

            font-family: 'Segoe UI', system-ui, sans-serif;

        }



        body {

            background-color: var(--dark-bg);

            color: var(--text);

            line-height: 1.6;

            overflow-x: hidden;

        }



        .container {

            max-width: 1400px;

            margin: 0 auto;

            padding: 0 20px;

        }



        /* Header */

        header {

            background: linear-gradient(135deg, var(--darker-bg) 0%, #15152a 100%);

            padding: 2.5rem 0;

            border-bottom: 1px solid var(--border);

            position: relative;

            overflow: hidden;

        }



        header::before {

            content: '';

            position: absolute;

            top: 0;

            left: 0;

            width: 100%;

            height: 100%;

            background: radial-gradient(circle at 20% 50%, rgba(108, 99, 255, 0.1) 0%, transparent 50%);

        }



        .logo {

            display: flex;

            align-items: center;

            gap: 12px;

            font-size: 1.8rem;

            font-weight: 700;

            color: var(--text);

            margin-bottom: 1.5rem;

        }



        .logo i {

            color: var(--primary);

            font-size: 2.2rem;

        }



        .logo span {

            color: var(--primary);

        }



        .header-content {

            max-width: 800px;

        }



        h1 {

            font-size: 2.5rem;

            margin-bottom: 1rem;

            background: linear-gradient(90deg, var(--primary), var(--secondary));

            -webkit-background-clip: text;

            background-clip: text;

            color: transparent;

        }



        .subtitle {

            font-size: 1.1rem;

            color: var(--text-light);

            margin-bottom: 1.5rem;

            max-width: 700px;

        }



        .stats {

            display: flex;

            flex-wrap: wrap;

            gap: 2rem;

            margin-top: 2rem;

        }



        .stat-item {

            display: flex;

            align-items: center;

            gap: 10px;

        }



        .stat-icon {

            width: 40px;

            height: 40px;

            border-radius: 10px;

            background: var(--card-bg);

            display: flex;

            align-items: center;

            justify-content: center;

            color: var(--primary);

        }



        .stat-text h3 {

            font-size: 1.5rem;

            color: var(--text);

        }



        .stat-text p {

            color: var(--text-light);

            font-size: 0.9rem;

        }



        /* Фильтры */

        .filters {

            display: flex;

            flex-wrap: wrap;

            gap: 15px;

            margin: 2.5rem 0 1.5rem;

        }



        .filter-btn {

            padding: 10px 24px;

            border: none;

            border-radius: 50px;

            background: var(--card-bg);

            color: var(--text);

            font-weight: 600;

            cursor: pointer;

            transition: all 0.3s ease;

            display: flex;

            align-items: center;

            gap: 8px;

        }



        .filter-btn:hover {

            transform: translateY(-2px);

        }



        .filter-btn.active {

            background: var(--primary);

            color: white;

        }



        .filter-btn.ege.active { background: var(--ege); }

        .filter-btn.lang.active { background: var(--lang); }

        .filter-btn.dev.active { background: var(--dev); }

        .filter-btn.finance.active { background: var(--finance); }



        /* Таблица */

        .table-container {

            background: var(--card-bg);

            border-radius: 16px;

            overflow: hidden;

            margin-bottom: 3rem;

            border: 1px solid var(--border);

            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

        }



        table {

            width: 100%;

            border-collapse: collapse;

        }



        thead {

            background: rgba(0, 0, 0, 0.2);

            border-bottom: 2px solid var(--border);

        }



        th {

            padding: 20px 15px;

            text-align: left;

            font-weight: 600;

            color: var(--text-light);

            user-select: none;

        }



        th i {

            margin-left: 5px;

            font-size: 0.8rem;

            opacity: 0.7;

        }



        th.sortable {

            cursor: pointer;

            transition: color 0.2s;

        }



        th.sortable:hover {

            color: var(--primary);

        }



        tbody tr {

            border-bottom: 1px solid rgba(255, 255, 255, 0.05);

            transition: background 0.3s;

        }



        tbody tr:hover {

            background: rgba(255, 255, 255, 0.03);

        }



        td {

            padding: 18px 15px;

        }



        .school-info {

            display: flex;

            align-items: center;

            gap: 15px;

        }



        .school-logo {

            width: 50px;

            height: 50px;

            border-radius: 12px;

            background: linear-gradient(135deg, var(--primary-dark), var(--primary));

            display: flex;

            align-items: center;

            justify-content: center;

            font-weight: bold;

            color: white;

            font-size: 1.2rem;

        }



        /* Стиль для изображений-логотипов */

        .school-logo-img {

            width: 50px;

            height: 50px;

            border-radius: 12px;

            object-fit: cover;

            background: linear-gradient(135deg, var(--primary-dark), var(--primary));

        }



        .school-name h3 {

            font-size: 1.1rem;

            margin-bottom: 5px;

        }



        .school-category {

            display: inline-block;

            padding: 4px 10px;

            border-radius: 20px;

            font-size: 0.8rem;

            font-weight: 600;

        }



        .category-ege { background: rgba(67, 97, 238, 0.2); color: var(--ege); }

        .category-lang { background: rgba(114, 9, 183, 0.2); color: var(--lang); }

        .category-dev { background: rgba(76, 201, 240, 0.2); color: var(--dev); }

        .category-finance { background: rgba(247, 37, 133, 0.2); color: var(--finance); }



        .rating {

            display: flex;

            align-items: center;

            gap: 10px;

        }



        .stars {

            color: #FFC107;

        }



        .rating-value {

            font-weight: 700;

            font-size: 1.2rem;

        }



        .reviews {

            color: var(--text-light);

        }



        .details-btn {

            background: transparent;

            border: 1px solid var(--primary);

            color: var(--primary);

            padding: 8px 20px;

            border-radius: 8px;

            cursor: pointer;

            transition: all 0.3s;

            font-weight: 600;

        }



        .details-btn:hover {

            background: var(--primary);

            color: white;

        }



        /* Модальное окно */

        .modal-overlay {

            position: fixed;

            top: 0;

            left: 0;

            width: 100%;

            height: 100%;

            background: rgba(0, 0, 0, 0.8);

            display: none;

            justify-content: center;

            align-items: center;

            z-index: 1000;

            padding: 20px;

        }



        .modal {

            background: var(--card-bg);

            border-radius: 20px;

            width: 100%;

            max-width: 800px;

            max-height: 90vh;

            overflow-y: auto;

            border: 1px solid var(--border);

            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

        }



        .modal-header {

            padding: 25px 30px 20px;

            border-bottom: 1px solid var(--border);

            display: flex;

            justify-content: space-between;

            align-items: center;

        }



        .modal-header h2 {

            font-size: 1.8rem;

            color: var(--text);

        }



        .close-modal {

            background: transparent;

            border: none;

            color: var(--text-light);

            font-size: 1.5rem;

            cursor: pointer;

            width: 40px;

            height: 40px;

            border-radius: 50%;

            display: flex;

            align-items: center;

            justify-content: center;

            transition: background 0.3s;

        }



        .close-modal:hover {

            background: rgba(255, 255, 255, 0.1);

        }



        .modal-content {

            padding: 30px;

        }



        .rating-display {

            background: rgba(0, 0, 0, 0.2);

            border-radius: 12px;

            padding: 25px;

            margin-bottom: 30px;

        }



        .rating-visual {

            display: flex;

            align-items: center;

            gap: 30px;

            margin-bottom: 20px;

        }



        .rating-circle {

            width: 120px;

            height: 120px;

            border-radius: 50%;

            background: conic-gradient(var(--primary) 0% 98%, var(--border) 98% 100%);

            display: flex;

            align-items: center;

            justify-content: center;

            position: relative;

        }



        .rating-circle-inner {

            width: 90px;

            height: 90px;

            border-radius: 50%;

            background: var(--card-bg);

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

        }



        .rating-circle-value {

            font-size: 1.8rem;

            font-weight: 700;

            color: var(--text);

        }



        .rating-circle-text {

            font-size: 0.8rem;

            color: var(--text-light);

        }



        .rating-info h3 {

            font-size: 1.5rem;

            margin-bottom: 10px;

        }



        .recommend {

            display: flex;

            align-items: center;

            gap: 10px;

            margin-top: 15px;

        }



        .recommend-badge {

            background: rgba(76, 201, 240, 0.2);

            color: var(--success);

            padding: 6px 15px;

            border-radius: 20px;

            font-weight: 600;

        }



        .mentions-table {

            width: 100%;

            border-collapse: collapse;

            margin-top: 20px;

        }



        .mentions-table th,

        .mentions-table td {

            padding: 15px;

            text-align: left;

            border-bottom: 1px solid var(--border);

        }



        .mentions-table th {

            color: var(--text-light);

            font-weight: 600;

        }



        .mentions-table tr:last-child td {

            border-bottom: none;

        }



        .mentions-bar {

            height: 8px;

            background: var(--border);

            border-radius: 4px;

            overflow: hidden;

            margin-top: 5px;

        }



        .mentions-fill {

            height: 100%;

            background: linear-gradient(90deg, var(--primary), var(--secondary));

            border-radius: 4px;

        }



        /* Кнопка сайта */

        .site-link-btn {

            display: inline-block;

            background: var(--primary);

            color: white;

            padding: 12px 24px;

            border-radius: 8px;

            text-decoration: none;

            font-weight: 600;

            margin-top: 20px;

            transition: background 0.3s;

        }



        .site-link-btn:hover {

            background: var(--primary-dark);

        }



        /* Футер */

        footer {

            background: var(--darker-bg);

            padding: 3rem 0;

            border-top: 1px solid var(--border);

            margin-top: 3rem;

        }



        .footer-content {

            display: grid;

            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

            gap: 30px;

            margin-bottom: 2rem;

        }



        .footer-section h3 {

            font-size: 1.2rem;

            margin-bottom: 1.2rem;

            color: var(--text);

        }



        .footer-section p, .footer-section a {

            color: var(--text-light);

            margin-bottom: 10px;

            display: block;

            text-decoration: none;

            transition: color 0.3s;

        }



        .footer-section a:hover {

            color: var(--primary);

        }



        .social-icons {

            display: flex;

            gap: 15px;

            margin-top: 15px;

        }



        .social-icon {

            width: 40px;

            height: 40px;

            border-radius: 50%;

            background: var(--card-bg);

            display: flex;

            align-items: center;

            justify-content: center;

            color: var(--text);

            transition: all 0.3s;

        }



        .social-icon:hover {

            background: var(--primary);

            transform: translateY(-3px);

        }



        .copyright {

            text-align: center;

            padding-top: 2rem;

            border-top: 1px solid var(--border);

            color: var(--text-light);

            font-size: 0.9rem;

        }



        /* Адаптивность */

        @media (max-width: 992px) {

            .rating-visual {

                flex-direction: column;

                text-align: center;

            }

            

            .filters {

                justify-content: center;

            }

            

            .stats {

                justify-content: center;

            }

        }



        @media (max-width: 768px) {

            h1 {

                font-size: 2rem;

            }

            

            .table-container {

                overflow-x: auto;

            }

            

            table {

                min-width: 800px;

            }

            

            .modal-content {

                padding: 20px;

            }

        }



        /* Анимации */

        @keyframes fadeIn {

            from { opacity: 0; transform: translateY(20px); }

            to { opacity: 1; transform: translateY(0); }

        }



        .fade-in {

            animation: fadeIn 0.5s ease-out;

        }

    </style>

</head>

<body>

    <header>

        <div class="container">

            <div class="logo">

                <i class="fas fa-graduation-cap"></i>

                <div>Edu<span>Compare</span></div>

            </div>

            <div class="header-content">

                <h1>Рейтинг онлайн-школ</h1>

                <p class="subtitle">Мы анализируем и сравниваем онлайн-школы по ключевым параметрам: оценка пользователей и количество отзывов. Наша цель — помочь вам сделать осознанный выбор образовательной платформы, соответствующей вашим целям.</p>

                

                <div class="stats">

                    <div class="stat-item">

                        <div class="stat-icon">

                            <i class="fas fa-school"></i>

                        </div>

                        <div class="stat-text">

                            <h3>20</h3>

                            <p>онлайн-школ</p>

                        </div>

                    </div>

                    <div class="stat-item">

                        <div class="stat-icon">

                            <i class="fas fa-star"></i>

                        </div>

                        <div class="stat-text">

                            <h3>4.87</h3>

                            <p>средний рейтинг</p>

                        </div>

                    </div>

                    <div class="stat-item">

                        <div class="stat-icon">

                            <i class="fas fa-comments"></i>

                        </div>

                        <div class="stat-text">

                            <h3>8,834</h3>

                            <p>отзывов проанализировано</p>

                        </div>

                    </div>

                    <div class="stat-item">

                        <div class="stat-icon">

                            <i class="fas fa-layer-group"></i>

                        </div>

                        <div class="stat-text">

                            <h3>4</h3>

                            <p>направления обучения</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </header>



    <main class="container">

        <div class="filters">

            <button class="filter-btn active" data-category="all">

                <i class="fas fa-layer-group"></i> Все школы

            </button>

            <button class="filter-btn ege" data-category="ege">

                <i class="fas fa-book-open"></i> ЕГЭ и ОГЭ

            </button>

            <button class="filter-btn lang" data-category="lang">

                <i class="fas fa-language"></i> Иностранные языки

            </button>

            <button class="filter-btn dev" data-category="dev">

                <i class="fas fa-code"></i> Программирование

            </button>

            <button class="filter-btn finance" data-category="finance">

                <i class="fas fa-chart-line"></i> Финансы

            </button>

        </div>



        <div class="table-container fade-in">

            <table id="schoolsTable">

                <thead>

                    <tr>

                        <th class="sortable" data-sort="rank">Место <i class="fas fa-sort"></i></th>

                        <th>Онлайн-школа</th>

                        <th class="sortable" data-sort="rating">Рейтинг <i class="fas fa-sort"></i></th>

                        <th class="sortable" data-sort="reviews">Отзывы <i class="fas fa-sort"></i></th>

                        <th>Направление</th>

                        <th>Подробнее</th>

                    </tr>

                </thead>

                <tbody id="tableBody">

                    <!-- Данные будут загружены через JavaScript -->

                </tbody>

            </table>

        </div>

    </main>



    <!-- Модальное окно с деталями школы -->

    <div class="modal-overlay" id="modalOverlay">

        <div class="modal">

            <div class="modal-header">

                <h2 id="modalSchoolName"></h2>

                <button class="close-modal" id="closeModal">&times;</button>

            </div>

            <div class="modal-content">

                <div id="modalContent">

                    <!-- Контент будет загружен через JavaScript -->

                </div>

            </div>

        </div>

    </div>



    <footer>

        <div class="container">

            <div class="footer-content">

                <div class="footer-section">

                    <h3>EduCompare</h3>

                    <p>Мы независимый агрегатор рейтингов образовательных онлайн-платформ. Наша цель — помочь вам найти лучшую школу для достижения ваших целей.</p>

                    <div class="social-icons">

                        <a href="#" class="social-icon"><i class="fab fa-vk"></i></a>

                        <a href="#" class="social-icon"><i class="fab fa-telegram"></i></a>

                        <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>

                    </div>

                </div>

                <div class="footer-section">

                    <h3>Контакты</h3>

                    <p><i class="fas fa-map-marker-alt"></i> г. Москва, ул. Образовательная, д. 15</p>

                    <p><i class="fas fa-phone"></i> +7 (495) 123-45-67</p>

                    <p><i class="fas fa-envelope"></i> info@educompare.ru</p>

                    <p><i class="fas fa-clock"></i> Пн-Пт: 9:00-18:00</p>

                </div>

                <div class="footer-section">

                    <h3>Полезные ссылки</h3>

                    <a href="#">Методология рейтинга</a>

                    <a href="#">Как мы собираем данные</a>

                    <a href="#">Партнерская программа</a>

                    <a href="#">Для образовательных организаций</a>

                </div>

            </div>

            <div class="copyright">

                <p>&copy; 2023 EduCompare. Все права защищены. Данные на сайте носят ознакомительный характер.</p>

            </div>

        </div>

    </footer>



    <script>

        // ---------- ДАННЫЕ С ПРЯМЫМИ ССЫЛКАМИ ImgBB И ДОБАВЛЕННЫМИ URL ----------

        const schools = [

            // ЕГЭ и ОГЭ

            { id: 1, name: "Умскул", 

              rating: 4.93, 

              reviews: 2150, 

              category: "ege",

              logo: "https://i.ibb.co/GftwwsTR/IMG-8667.jpg",

              url: "https://landing.umschool.net/summerschool?utm_source=yandex&utm_medium=cpc&utm_campaign=2%20%7C%20%D0%95%D0%9F%D0%9A%20%7C%20%D0%9F%D0%BE%D0%B8%D1%81%D0%BA%20%7C%20%D0%91%D1%80%D0%B5%D0%BD%D0%B4%20%7C%20%D0%90%D0%B2%D1%82%D0%BE%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%20%7C%20%D0%A0%D0%A4%20%7C%20%D0%9B%D1%83%D1%87%D1%88%D0%B0%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D0%B0_700715353&utm_content=17078563046_none&utm_region=%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3%20%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA&utm_term=---autotargeting&etext=2202.PA3j1hAfnloiGaXUb73lNHVPwX4iHvFeGJmEX0qbgNdldWNlaXpkZWV4dnNnc3hy.f0bfb1bc94928c6b619641cdda8a20ca91789fcd&yclid=905337845943894015",

              details: true, recommend: 99, mentions: [

                { name: "Поддержка", value: 321 },

                { name: "Преподаватели", value: 231 },

                { name: "Качество", value: 201 },

                { name: "Удобство", value: 114 },

                { name: "Платформа", value: 107 },

                { name: "Одобрение", value: 73 }

            ]},

            { id: 2, name: "100бальныйрепетитор", 

              rating: 4.92, 

              reviews: 2233,

              category: "ege",

              logo: "https://i.ibb.co/qLyQbL5Q/IMG-8666.jpg",

              url: "https://100points.ru/?ysclid=mn3mzduj4p124799958",

              details: false },

            { id: 3, name: "ЕГЭLand", 

              rating: 4.83, 

              reviews: 335,

              category: "ege",

              logo: "https://i.ibb.co/Hm7ZKV1/logo.jpg", // прямая ссылка из imgbb

              url: "https://el-ed.ru/?utm_source=yandex&utm_medium=el-ege&utm_campaign=706544010&utm_content=1899616989024259229&utm_term=ektr&etext=2202.NuJ4OOEVn3nPBJ4Wh-rtDUBImRYnq9CCKKWmIYkcnFxeucFT37yqygzLgt5sVGGxc2h0Z2Nob254dGl5b3Bjbw.355ec10741c0781b1e0306ea918423fb76d72d1e&yclid=16829421301168865279&ybaip=1",

              details: false },

            { id: 4, name: "ТурбоЕГЭ", 

              rating: 4.83,

              reviews: 397, 

              category: "ege",

              logo: "https://i.ibb.co/Zn1X66j/logo.jpg", // прямая ссылка из imgbb

              url: "https://egeturbo.ru/?ysclid=mn4bhwmwxg576876569",

              details: false },

            { id: 5, name: "Сотка", 

              rating: 4.75, 

              reviews: 481, 

              category: "ege", 

              logo: "https://i.ibb.co/GfPCx4WL/logo.jpg", // прямая ссылка из imgbb

              url: "https://sotkaonline.ru/?ysclid=mn4bh5mmm368972600", 

              details: false },

            

            // Иностранные языки

            { id: 6, name: "Skysmart", rating: 4.90, reviews: 238, category: "lang", details: true, recommend: 98, mentions: [

                { name: "Поддержка", value: 32 },

                { name: "Преподаватели", value: 30 },

                { name: "Платформа", value: 27 },

                { name: "Удобство", value: 15 },

                { name: "Эффективность", value: 18 },

                { name: "Интерфейс", value: 12 }

            ]},

            { id: 7, name: "Инглекс", rating: 4.89, reviews: 39, category: "lang", details: false },

            { id: 8, name: "Skyeng", 

              rating: 4.86, 

              reviews: 1473, 

              category: "lang", 

              logo: "https://i.ibb.co/XfRZhwWp/IMG-8668.jpg",

              url: "https://study.skyeng.ru/english-courses?source_type=contextbrand&manager=procontext&product=skyeng&utm_medium=search&utm_source=yandex&utm_campaign=skyeng_yandex_search_brand_english-courses_test_text%7Ccpid-708141680&utm_term=gid-5731858562%7Ck-skyeng%7Cp-none%7Cpos-premium_1%7Cph_56789363617&utm_content=adid-1904465994218001249%7Cdev-mobile%7Cloc-%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BE%D0%BA%D1%80%D1%83%D0%B3%20%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%7Clid-121194&etext=2202.MabF9y7fr-iQls3We3gTP3pzdHF0dWx2aG92aXh2ZHc.4c618217681635a1741af7f9d61a14bca2cc2581&yclid=2450205841568825343",

              details: false },

            { id: 9, name: "ILS", rating: 4.83, reviews: 44, category: "lang", details: false },

            { id: 10, name: "Anecole", rating: 4.85, reviews: 38, category: "lang", details: false },

            

            // Программирование

            { id: 11, name: "Skypro", 

              rating: 4.89, 

              reviews: 289, 

              category: "dev", 

              logo: "https://i.ibb.co/HL4B0Qff/logo.jpg", // прямая ссылка из imgbb

              url: "https://sky.pro/?ysclid=mn4bkncjsy286264599", 

              details: true, recommend: 98, mentions: [

                { name: "Поддержка", value: 15 },

                { name: "Удобство", value: 11 }

            ]},

            { id: 12, name: "Pixel", rating: 4.87, reviews: 200, category: "dev", details: false },

            { id: 13, name: "Нетология", 

              rating: 4.86, 

              reviews: 580, 

              category: "dev", 

              logo: "https://i.ibb.co/bjZB9NWN/IMG-8669.jpg",

              url: "https://netology.ru/?utm_source=admitad&utm_medium=cpa&utm_campaign=affiliate&admitad_uid=2abc907edffdf57552cf4ceeab9f5700&utm_term=1248096",

              details: false },

            { id: 14, name: "Skillbox", 

              rating: 4.82, 

              reviews: 925, 

              category: "dev", 

              logo: "https://i.ibb.co/TBMnsvDd/IMG-8670.jpg",

              url: "https://yabs.yandex.ru/count/WiqejI_zOoVX2Lc60lqL0BDgeIMSm0cOlM42UhCFwaWO0juB2EXJgBtSsOC-wPqx7sJdwtUytd27QnFzZ604D3GaH2EfH5K8Q2afn15G24L0LGnc7E5NwmGpfhZrQMJ11DGf2w1dYQeGajK4YJpgT5xjgfDQjQNGg-qCikqWfI0g4DMsEcdW05Cs9tYJGkN65gMFu8YAlKJ3eEEumPLlpfTU8WKI2eiUdrgAsr9R6ftYqESTbKQVDnIAtpKElQUvyuvAfTCdBfNQAt2mAQJv3Ur1yJpXX3xhQOx2fpu1ZU8rr8bFQvySXTFfuupkTFWxSM9wmZczLK1xLEIr2XLtNgEuKU2ryvdYMTizKLl52QbqvsRFGw7vWT51fKb2kV5wBJMlB4ClNrCURtP77R6I1ylvVCDauxKm1T1czqu0Du1bDd3jggOoDISbXKUy6lQcai8ZNWrR3Be0tX9EO06uj9CtCm5vueC8cOTSZPQfwtgDpW48uPR0AzovIHekJRCL8OmA5G1Gm8kW0x4c0MmTq7Lz2aFOX6A9ep0d54gC0w7CTASeI0jR4un1-GPqMoWMTj1a5SfDEienv1WeNSVJcR1ECM8QnjpieYd29Q87Y0YEOBfckeOU37DJhga7GVDhOGfWasjX2c1pzx_Hmzt-mpMFHJwOPWZO_rvuZFlU2uzndtlXCUxlCqB0Nqj12zhFKj22nZHxe6fZbZrGjJ77pANNJsdopTjrNTTfy_AA5LaNkf6cnngWgiJqhW6gIanllOusFZhhhNpPfvcj1NhotxbTOp-cFJW1ihF7h_zw9YbVMlRybjPr9YOfNrhslDQBnubMNvyDWE0vI-5kf2rCZw22c2kLIgLG4R0mUmcb_3sWj88SjtYm4H3y0-8LO8wA7vSaNiKDvWDBc67pw3jfdrTf1Vub0vY7oOs-Z_fSB8CObnI5QFmEmBzRhr9V2T00~2?etext=2202.1TMgSsvDYRKqYqjCBwEZ5GdqbnZnbWJnZWZ2eWNkYmM.37dff302d04a52979e184c3e575b69e735a8e35d&from=yandex.ru%3Bsearch%26%23x2F%3Btouch%26%23x2F%3B%3Bweb%3B%3B202512080324%3B&q=skillbox&baobab_event_id=mn3n2u12uj",

              details: false },

            { id: 15, name: "ProductStar", 

              rating: 4.78, 

              reviews: 433, 

              category: "dev", 

              logo: "https://i.ibb.co/bjkhbX6S/logo.jpg", // прямая ссылка из imgbb

              url: "https://productstar.ru/?cm_id=yd~~115004010~~5502538881~~16579213084~~53378173900~~53378173900~~yandex.ru~~search~~type1~~no~~mobile~~premium~~11062&etext=&utm_campaign=brand_p_rf%7C115004010&utm_content=53378173900_53378173900%7Ccid%7C115004010%7Cgid%7C5502538881%7Caid%7C16579213084%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch_yandex.ru%7Cdvc%7Cmobile&utm_medium=cpc&utm_source=yandex&utm_term=productstar&yclid=16609462502195199999", 

              details: false },

            

            // Финансы

            { id: 16, name: "УЦ МГУТУ", rating: 4.96, reviews: 39, category: "finance", details: true, recommend: 98, mentions: [

                { name: "Практика", value: 16 },

                { name: "Условия", value: 15 },

                { name: "Качество", value: 5 },

                { name: "Преподаватели", value: 3 },

                { name: "Получение", value: 3 }

            ]},

            { id: 17, name: "Eduson Academy", rating: 4.94, reviews: 21, category: "finance", details: false },

            { id: 18, name: "Академия «Синергия»", rating: 4.91, reviews: 14, category: "finance", details: false },

            { id: 19, name: "Moscow Business Academy", rating: 4.88, reviews: 10, category: "finance", details: false },

            { id: 20, name: "Русская школа управления", rating: 4.89, reviews: 23, category: "finance", details: false }

        ];



        // Переменные для сортировки

        let currentSort = { column: 'rank', direction: 'asc' };

        let filteredSchools = [...schools];



        // Инициализация таблицы

        function initTable() {

            renderTable(filteredSchools);

            setupEventListeners();

        }



        // Отрисовка таблицы с поддержкой логотипов

        function renderTable(data) {

            const tbody = document.getElementById('tableBody');

            tbody.innerHTML = '';

            

            // Сортируем данные

            const sortedData = sortData(data);

            

            sortedData.forEach((school, index) => {

                const row = document.createElement('tr');

                

                // Определяем категорию для стиля

                let categoryClass = '';

                let categoryText = '';

                switch(school.category) {

                    case 'ege':

                        categoryClass = 'category-ege';

                        categoryText = 'ЕГЭ/ОГЭ';

                        break;

                    case 'lang':

                        categoryClass = 'category-lang';

                        categoryText = 'Языки';

                        break;

                    case 'dev':

                        categoryClass = 'category-dev';

                        categoryText = 'Программирование';

                        break;

                    case 'finance':

                        categoryClass = 'category-finance';

                        categoryText = 'Финансы';

                        break;

                }

                

                // Создаем звезды для рейтинга

                let stars = '';

                const fullStars = Math.floor(school.rating);

                for (let i = 0; i < 5; i++) {

                    if (i < fullStars) {

                        stars += '<i class="fas fa-star"></i>';

                    } else if (i === fullStars && school.rating % 1 >= 0.5) {

                        stars += '<i class="fas fa-star-half-alt"></i>';

                    } else {

                        stars += '<i class="far fa-star"></i>';

                    }

                }

                

                // Генерируем логотип: изображение или первая буква

                let logoHtml = '';

                if (school.logo) {

                    logoHtml = `<img src="${school.logo}" alt="${school.name}" class="school-logo-img"

                                onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'50\' height=\'50\' viewBox=\'0 0 50 50\'%3E%3Crect width=\'50\' height=\'50\' fill=\'%236C63FF\' /%3E%3Ctext x=\'25\' y=\'32\' font-size=\'20\' text-anchor=\'middle\' fill=\'%23fff\' font-family=\'Arial\'%3E${school.name.charAt(0)}%3C/text%3E%3C/svg%3E';">`;

                } else {

                    logoHtml = `<div class="school-logo">${school.name.charAt(0)}</div>`;

                }

                

                row.innerHTML = `

                    <td>${index + 1}</td>

                    <td>

                        <div class="school-info">

                            ${logoHtml}

                            <div class="school-name">

                                <h3>${school.name}</h3>

                                <span class="school-category ${categoryClass}">${categoryText}</span>

                            </div>

                        </div>

                    </td>

                    <td>

                        <div class="rating">

                            <div class="stars">${stars}</div>

                            <div class="rating-value">${school.rating}</div>

                        </div>

                    </td>

                    <td><span class="reviews">${school.reviews.toLocaleString()}</span></td>

                    <td><span class="school-category ${categoryClass}">${categoryText}</span></td>

                    <td><button class="details-btn" data-id="${school.id}">Подробности</button></td>

                `;

                

                tbody.appendChild(row);

            });

        }



        // Сортировка данных

        function sortData(data) {

            return [...data].sort((a, b) => {

                let aVal, bVal;

                

                if (currentSort.column === 'rank') {

                    aVal = a.rating * 1000 + a.reviews;

                    bVal = b.rating * 1000 + b.reviews;

                } else if (currentSort.column === 'rating') {

                    aVal = a.rating;

                    bVal = b.rating;

                } else if (currentSort.column === 'reviews') {

                    aVal = a.reviews;

                    bVal = b.reviews;

                }

                

                if (currentSort.direction === 'asc') {

                    return bVal - aVal;

                } else {

                    return aVal - bVal;

                }

            });

        }



        // Настройка обработчиков событий

        function setupEventListeners() {

            // Фильтрация по категориям

            document.querySelectorAll('.filter-btn').forEach(btn => {

                btn.addEventListener('click', () => {

                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));

                    btn.classList.add('active');

                    

                    const category = btn.dataset.category;

                    

                    if (category === 'all') {

                        filteredSchools = [...schools];

                    } else {

                        filteredSchools = schools.filter(school => school.category === category);

                    }

                    

                    renderTable(filteredSchools);

                });

            });

            

            // Сортировка по колонкам

            document.querySelectorAll('.sortable').forEach(th => {

                th.addEventListener('click', () => {

                    const column = th.dataset.sort;

                    

                    if (currentSort.column === column) {

                        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';

                    } else {

                        currentSort.column = column;

                        currentSort.direction = 'asc';

                    }

                    

                    document.querySelectorAll('.sortable i').forEach(icon => {

                        icon.className = 'fas fa-sort';

                    });

                    

                    const icon = th.querySelector('i');

                    icon.className = currentSort.direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';

                    

                    renderTable(filteredSchools);

                });

            });

            

            // Кнопки "Подробности"

            document.addEventListener('click', (e) => {

                if (e.target.classList.contains('details-btn')) {

                    const schoolId = parseInt(e.target.dataset.id);

                    const school = schools.find(s => s.id === schoolId);

                    

                    if (school) {

                        openSchoolModal(school);

                    }

                }

            });

            

            // Закрытие модального окна

            document.getElementById('closeModal').addEventListener('click', closeModal);

            document.getElementById('modalOverlay').addEventListener('click', (e) => {

                if (e.target.id === 'modalOverlay') {

                    closeModal();

                }

            });

        }



        // Открытие модального окна с информацией о школе

        function openSchoolModal(school) {

            document.getElementById('modalSchoolName').textContent = school.name;

            

            let modalContent = '';

            

            if (school.details) {

                const percentage = Math.round((school.rating / 5) * 100);

                

                modalContent = `

                    <div class="rating-display">

                        <div class="rating-visual">

                            <div class="rating-circle" style="background: conic-gradient(#6C63FF 0% ${percentage}%, #2D2D4D ${percentage}% 100%)">

                                <div class="rating-circle-inner">

                                    <div class="rating-circle-value">${school.rating}</div>

                                    <div class="rating-circle-text">из 5.0</div>

                                </div>

                            </div>

                            <div class="rating-info">

                                <h3>Рейтинг школы ${school.name}</h3>

                                <p>Школа имеет рейтинг ${school.rating} из 5.0 на основе ${school.reviews} отзывов пользователей.</p>

                                <div class="recommend">

                                    <div class="recommend-badge">${school.recommend}% рекомендуют</div>

                                    <span>основано на отзывах</span>

                                </div>

                            </div>

                        </div>

                        

                        <h3>Что нравится пользователям:</h3>

                        <table class="mentions-table">

                            <thead>

                                <tr>

                                    <th>Категория</th>

                                    <th>Количество упоминаний</th>

                                    <th></th>

                                </tr>

                            </thead>

                            <tbody>

                `;

                

                const maxMention = Math.max(...school.mentions.map(m => m.value));

                

                school.mentions.forEach(mention => {

                    const width = (mention.value / maxMention) * 100;

                    modalContent += `

                        <tr>

                            <td>${mention.name}</td>

                            <td>${mention.value}</td>

                            <td>

                                <div class="mentions-bar">

                                    <div class="mentions-fill" style="width: ${width}%"></div>

                                </div>

                            </td>

                        </tr>

                    `;

                });

                

                modalContent += `

                            </tbody>

                        </table>

                    </div>

                `;

            } else {

                modalContent = `

                    <div class="rating-display">

                        <div class="rating-visual">

                            <div class="rating-circle">

                                <div class="rating-circle-inner">

                                    <div class="rating-circle-value">${school.rating}</div>

                                    <div class="rating-circle-text">из 5.0</div>

                                </div>

                            </div>

                            <div class="rating-info">

                                <h3>Рейтинг школы ${school.name}</h3>

                                <p>Школа имеет рейтинг ${school.rating} из 5.0 на основе ${school.reviews} отзывов пользователей.</p>

                                <p>Детальная аналитика по этой школе пока недоступна, но вы можете ознакомиться с отзывами на официальном сайте школы.</p>

                            </div>

                        </div>

                    </div>

                `;

            }

            

            // Если у школы есть URL, добавляем кнопку перехода на сайт

            if (school.url) {

                modalContent += `

                    <div style="text-align: center; margin-top: 20px;">

                        <a href="${school.url}" target="_blank" rel="noopener noreferrer" class="site-link-btn">

                            <i class="fas fa-external-link-alt"></i> Перейти на сайт

                        </a>

                    </div>

                `;

            }

            

            document.getElementById('modalContent').innerHTML = modalContent;

            document.getElementById('modalOverlay').style.display = 'flex';

            

            setTimeout(() => {

                document.querySelector('.modal').classList.add('fade-in');

            }, 10);

        }



        // Закрытие модального окна

        function closeModal() {

            document.querySelector('.modal').classList.remove('fade-in');

            setTimeout(() => {

                document.getElementById('modalOverlay').style.display = 'none';

            }, 300);

        }



        // Инициализация при загрузке страницы

        document.addEventListener('DOMContentLoaded', initTable);

    </script>

</body>
</html>