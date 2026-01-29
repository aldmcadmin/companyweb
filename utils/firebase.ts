
// @ts-ignore
import { initializeApp } from "firebase/app";
// @ts-ignore
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: 아래 설정을 본인의 Firebase 프로젝트 설정으로 교체해주세요!
// Firebase 콘솔 -> 프로젝트 설정 -> 일반 -> '내 앱' -> 'SDK 설정 및 구성' 에서 확인 가능합니다.
const firebaseConfig = {
  apiKey: "API_KEY_를_여기에_붙여넣으세요",
  authDomain: "company-homepage-28347.firebaseapp.com",
  projectId: "company-homepage-28347",
  storageBucket: "company-homepage-28347.firebasestorage.app",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/**
 * Uploads a file to Firebase Storage and returns the public download URL.
 * @param file The file object to upload
 * @param pathPrefix The folder path in storage (default: 'images/')
 * @returns Promise<string> The download URL
 */
export const uploadImageToStorage = async (file: File, pathPrefix: string = 'images/'): Promise<string> => {
  try {
    // Create a unique filename: timestamp_filename
    const fileName = `${Date.now()}_${file.name}`;
    const fullPath = `${pathPrefix}${fileName}`;
    const storageRef = ref(storage, fullPath);

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Firebase Upload Error:", error);
    throw new Error("이미지 업로드에 실패했습니다. Firebase 설정을 확인하거나 잠시 후 다시 시도해주세요.");
  }
};
