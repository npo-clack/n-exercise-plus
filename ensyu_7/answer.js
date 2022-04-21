for (let i = 2; i <= 100; i+=2) {
    document.write(i + "は偶数です！<br>");
}
// ↑↓どちらでも良い
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        document.write(i + "は偶数です！<br>");
    }
}