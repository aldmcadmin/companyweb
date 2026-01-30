
// @ts-ignore
import { initializeApp } from "firebase/app";
// @ts-ignore
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// @ts-ignore
import { getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";

// ------------------------------------------------------------------
// [중요] Firebase 콘솔에서 복사한 값으로 채워주세요!
// ------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "company-homepage-28347.firebaseapp.com",
  projectId: "company-homepage-28347",
  storageBucket: "company-homepage-28347.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app); // Database

/**
 * Uploads a file to Firebase Storage and returns the public download URL.
 */
export const uploadImageToStorage = async (file: File, pathPrefix: string = 'images/'): Promise<string> => {
  try {
    const fileName = `${Date.now()}_${file.name}`;
    const fullPath = `${pathPrefix}${fileName}`;
    const storageRef = ref(storage, fullPath);

    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Firebase Upload Error:", error);
    if (error instanceof Error) {
        // 권한 에러가 가장 흔하므로 안내 메시지 추가
        if (error.message.includes("unauthorized")) {
           alert("업로드 권한이 없습니다. Firebase Storage 규칙을 'allow write: if true;'로 설정했는지 확인해주세요.");
        } else {
           alert(`업로드 에러: ${error.message}`);
        }
    }
    throw error;
  }
};

export { db, doc, getDoc, setDoc, updateDoc, onSnapshot };
