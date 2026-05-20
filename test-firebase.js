import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKWWaI4hiFx1LGaPyrIkILo0yG0WhZCTY",
  authDomain: "aldmc-e447e.firebaseapp.com",
  projectId: "aldmc-e447e",
  storageBucket: "aldmc-e447e.firebasestorage.app",
  messagingSenderId: "833121703524",
  appId: "1:833121703524:web:51b2eda8c43871755bb171"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

async function test() {
  try {
    console.log("Testing Firestore...");
    const d = await getDoc(doc(db, "site_data", "content"));
    console.log("Firestore success:", d.exists());
    
    console.log("Testing Storage...");
    const r = ref(storage, "test/fake_image.txt");
    const snapshot = await uploadString(r, "Hello Firebase Storage");
    const url = await getDownloadURL(snapshot.ref);
    console.log("Storage success, URL:", url);
  } catch(e) {
    console.error("ERROR:", e);
  }
}
test();
