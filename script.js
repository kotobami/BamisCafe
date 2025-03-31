// スクロールイベントを監視してフェードインをトリガー
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) { // 画面の80%以内に入ったら
            section.classList.add('fade-in');
        }
    });
});
