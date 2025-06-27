// تسجيل Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("✅ تم تسجيل Service Worker بنجاح"))
    .catch(err => console.error("❌ فشل في تسجيل Service Worker:", err));
}
