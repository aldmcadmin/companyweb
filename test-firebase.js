import { initializeApp } from "firebase/app";

async function test() {
  try {
    const res = await fetch("https://firebasestorage.googleapis.com/v0/b/company-homepage-28347.firebasestorage.app/o/%EB%8C%80%EA%B5%AC%EA%B3%B5%EC%9E%A5.JPG?alt=media&token=530a1c33-4075-4f33-a6e2-cf01939f5b8b");
    console.log("IMAGE FETCH STATUS:", res.status);
    console.log(await res.text());
  } catch(e) {
    console.error("IMAGE FETCH ERROR:", e.message);
  }
}
test();
