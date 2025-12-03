// firebase.config.ts

// initializeApp — Firebase loyihasini frontend ichida ishga tushirish.
// Buni chaqirmasak, Auth/Firestore/Storage ishlamaydi.
import { initializeApp } from "firebase/app";

// getAuth — authentication xizmatini olish.
// Bu orqali login, signup, logout, userni olish kabi ishlar qilinadi.
import { getAuth } from "firebase/auth";

// getFirestore — Firestore (database) bilan ishlash uchun kerak.
// CRUD, collection, document o‘qish/yozish shu orqali qilinadi.
import { getFirestore } from "firebase/firestore";

// getStorage — Firebase Storage bilan ishlash.
// Rasmlar, fayllar, upload, download shu orqali bajariladi.
import { getStorage } from "firebase/storage";

// Firebase config — loyihaga tegishli maxfiy kalitlar.
// Bu ma’lumotlar Firebase console → Project settings → Web app dan olinadi.
const firebaseConfig = {
  apiKey: "AIzaSyAEbKQzA9vrP65gUB2ikS7zmCL7V0-DyAA",
  authDomain: "blogify-1ad5b.firebaseapp.com",
  projectId: "blogify-1ad5b",
  storageBucket: "blogify-1ad5b.firebasestorage.app",
  messagingSenderId: "1043968168190",
  appId: "1:1043968168190:web:0f576d7988fe7e4680d5af",
  measurementId: "G-BBGQY2GE9V",
};

// initializeApp — config bo‘yicha Firebase ilovasini ishga tushuradi.
const app = initializeApp(firebaseConfig);

// Auth, Firestore, Storage xizmatlarini export qilamiz.
// Loyihaning boshqa joylarida shu obyektlar orqali Firebase bilan ishlaymiz.

// auth — login, signup, logout, currentUser uchun.
export const auth = getAuth(app);

// db — Firestore database (collection/document CRUD).
export const db = getFirestore(app);

// storage — rasmlar/fayllarni upload qilish uchun.
export const storage = getStorage(app);
