
// @ts-ignore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// @ts-ignore
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
// @ts-ignore
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// @ts-ignore
import { getFirestore, doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKWWaI4hiFx1LGaPyrIkILo0yG0WhZCTY",
  authDomain: "aldmc-e447e.firebaseapp.com",
  projectId: "aldmc-e447e",
  storageBucket: "aldmc-e447e.firebasestorage.app",
  messagingSenderId: "833121703524",
  appId: "1:833121703524:web:51b2eda8c43871755bb171"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export auth functions for use in Context
export { signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence, browserSessionPersistence };

// Export firestore functions
export { doc, onSnapshot, setDoc };

/**
 * Uploads a file to Firebase Storage and returns the public download URL.
 * @param file The file object to upload
 * @param pathPrefix The folder path in storage (e.g. 'images/products/')
 */
export const uploadImageToStorage = async (file: File, pathPrefix: string = 'images/'): Promise<string> => {
  try {
    // Create a safe filename (timestamp + sanitized original name)
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const fileName = `${Date.now()}_${sanitizedName}`;
    const fullPath = `${pathPrefix}${fileName}`;
    
    const storageRef = ref(storage, fullPath);
    
    // Upload
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Firebase Upload Error:", error);
    if (error instanceof Error) {
        // Handle common errors gracefully
        // @ts-ignore
        if (error.code === 'storage/unauthorized' || error.message.includes('unauthorized')) {
            alert("업로드 권한이 없습니다. 관리자 계정으로 로그인되어 있는지 확인해주세요.");
        } else {
            alert(`이미지 업로드 실패: ${error.message}`);
        }
    }
    throw error;
  }
};
