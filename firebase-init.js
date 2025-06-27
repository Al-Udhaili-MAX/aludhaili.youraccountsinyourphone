<!-- firebase-init.js -->

<!-- تحميل Firebase App و Firestore -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"></script>

<script>
  // إعدادات مشروع Firebase الخاص بك
  const firebaseConfig = {
    apiKey: "AIzaSyDK6pLHdCEOttVk0QcJCqr2fPhyEHz-Kvk",
    authDomain: "your-accounts-in-your-phone.firebaseapp.com",
    projectId: "your-accounts-in-your-phone",
    storageBucket: "your-accounts-in-your-phone.firebasestorage.app",
    messagingSenderId: "1056632872663",
    appId: "1:1056632872663:web:bca575ca817836b126da92",
    measurementId: "G-7HTVQG0CX6"
  };

  // تهيئة Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // تهيئة Firestore
  const db = firebase.firestore();
</script>
