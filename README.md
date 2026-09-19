<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>زخرفة المدمر الاحترافية</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

    <div class="container">
        <header>
            <div class="logo-area">
                <span class="icon">✨</span>
                <h1>زخرفة المدمر</h1>
            </div>
            <div class="status-badge">
                <span class="fire">🔥</span>
                <span>متصل</span>
            </div>
        </header>

        <div class="main-card input-card">
            <div class="card-header">
                <h3>✍️ اكتب النص للزخرفة:</h3>
            </div>
            <textarea id="inputText" placeholder="اكتب النص هنا..." oninput="generateDecorations()"></textarea>
        </div>

        <div class="section-title">
            <span class="folder-icon">📁</span>
            <h2>النتائج المزخرفة</h2>
        </div>

        <div class="results-grid" id="resultsArea"></div>
    </div>

    <nav class="bottom-nav">
        <a href="#" class="nav-item active">
            <span class="nav-icon">✨</span>
            <span class="nav-text">الزخرفة</span>
        </a>
        <a href="#" class="nav-item">
            <span class="nav-icon">🎨</span>
            <span class="nav-text">التخصيص</span>
        </a>
        <a href="#" class="nav-item">
            <span class="nav-icon">👤</span>
            <span class="nav-text">المطور</span>
        </a>
    </nav>

    <script src="script.js"></script>
</body>
</html>
