# Assessment Architecture Studio
## Competency-Based Assessment & Question Design Architecture Studio
**Developed by Mateen Yousuf — Teacher, School Education Department Kashmir**
Aligned with NEP 2020 | PARAKH | NCF 2023 | Competency-Based Evaluation

---

## 📁 File Structure

```
jkbose-assessment-studio/
├── index.html          ← Main application (everything inside)
├── manifest.json       ← PWA manifest
├── service-worker.js   ← Offline caching
├── author.jpg          ← Author photo (place your photo here)
└── README.md           ← This file
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser (simplest)
1. Place all files in a folder named `jkbose-assessment-studio`
2. Double-click `index.html` — opens in your browser
3. All features work offline except Google Fonts (uses fallback fonts offline)

### Option 2: VS Code Live Server (recommended)
1. Install VS Code + Live Server extension
2. Right-click `index.html` → "Open with Live Server"
3. PWA install prompt will appear in browser

### Option 3: Python Local Server
```bash
cd jkbose-assessment-studio
python -m http.server 8080
# Open http://localhost:8080
```

---

## 🌐 How to Host for Free

### GitHub Pages (recommended)
1. Create a GitHub account at github.com
2. Create a new repository named `assessment-studio`
3. Upload all files to the repository
4. Go to Settings → Pages → Source: main branch / root
5. Your app is live at: `https://yourusername.github.io/assessment-studio`

### Netlify (drag & drop)
1. Go to netlify.com → Sign up free
2. Drag your entire folder onto the Netlify dashboard
3. Your app is live instantly with a shareable URL

### Cloudflare Pages
1. Go to pages.cloudflare.com
2. Connect GitHub repository or upload files
3. Deploy — free, fast, with global CDN

---

## 📱 Installing as PWA (Add to Home Screen)

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap the 3-dot menu → "Add to Home Screen"
3. The app installs like a native app
4. Works fully offline after first load

### iOS (Safari)
1. Open the URL in Safari
2. Tap the Share button → "Add to Home Screen"
3. Works offline after first load

---

## 📦 APK Conversion Guide (Android App)

### Method 1: Android Studio WebView Wrapper

**Prerequisites:** Android Studio installed, Java JDK 11+

**Step 1: Create new Android project**
```
File → New → New Project → Empty Activity
Application Name: Assessment Studio
Package Name: com.kashmiredu.assessmentstudio
Minimum SDK: API 21 (Android 5.0)
```

**Step 2: Copy web files**
```
Place all files in: app/src/main/assets/web/
- index.html
- manifest.json
- service-worker.js
- author.jpg
```

**Step 3: MainActivity.java**
```java
import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        webView = new WebView(this);
        setContentView(webView);
        
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);  // Required for localStorage
        settings.setAllowFileAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("file:///android_asset/web/index.html");
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
```

**Step 4: AndroidManifest.xml — add permissions**
```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>

<application
    android:usesCleartextTraffic="true"
    android:hardwareAccelerated="true"
    ...>
```

**Step 5: Splash Screen (res/drawable/splash.xml)**
```xml
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@color/navy"/>
    <item>
        <bitmap
            android:src="@drawable/logo"
            android:gravity="center"/>
    </item>
</layer-list>
```

**Step 6: Build APK**
```
Build → Build Bundle(s)/APK(s) → Build APK(s)
APK saved in: app/build/outputs/apk/debug/
```

**Step 7: Sign APK for release**
```
Build → Generate Signed Bundle/APK
Create keystore → Fill details → Build Release APK
```

### Method 2: PWA Builder (No Android Studio needed)
1. Host your app on GitHub Pages or Netlify
2. Go to pwabuilder.com
3. Enter your app URL
4. Click "Build My PWA" → Download Android APK package
5. Sign and install the APK

### Method 3: Capacitor (Professional approach)
```bash
npm install -g @capacitor/cli
npx cap init "Assessment Studio" "com.kashmiredu.studio"
npx cap add android
# Copy web files to www/ folder
npx cap sync
npx cap open android
# Build from Android Studio
```

---

## 💾 Data Storage & Backup

The app stores all data in **LocalStorage** (browser storage):
- `blueprint_saved` — Saved question paper blueprint
- `bp_data` — Last blueprint analysis results
- `mp_data` — Last competency mapping results
- `ia_data` — Last item analysis results

### Backup Data
Open browser console (F12) and run:
```javascript
const backup = {};
['blueprint_saved','bp_data','mp_data','ia_data'].forEach(k=>{
  backup[k] = localStorage.getItem(k);
});
const blob = new Blob([JSON.stringify(backup)], {type:'application/json'});
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'assessment-studio-backup.json';
a.click();
```

### Restore Data
```javascript
// Paste the JSON string from your backup file
const data = JSON.parse(/* paste backup JSON here */);
Object.keys(data).forEach(k=>{
  if(data[k]) localStorage.setItem(k, data[k]);
});
location.reload();
```

---

## 🎨 Customisation

- **Author photo:** Replace `author.jpg` with your own photo (keep the filename)
- **School name:** Edit the subtitle in `index.html` (line ~hero section)
- **Colour scheme:** Modify CSS variables at the top of `<style>` tag
- **Competencies:** Edit the `competencies` array in the JavaScript section

---

## ✅ Features Checklist

- [x] Fully offline after first load
- [x] No API required
- [x] No backend required
- [x] LocalStorage for all data persistence
- [x] PWA installable (Add to Home Screen)
- [x] Service Worker with offline caching
- [x] Single file app (index.html)
- [x] Blueprint Designer with Balance Score formula
- [x] Competency Mapping Lab with CDI formula
- [x] Item Analysis Engine (Difficulty Index)
- [x] Assessment Quality Dashboard with charts
- [x] Exam Improvement Simulator with real-time predictions
- [x] Assessment Reform Report Generator (printable)
- [x] 18 Foundation Pages (1000+ words each)
- [x] NEP 2020 & PARAKH aligned
- [x] Bloom's Taxonomy integration
- [x] Mobile responsive design
- [x] Print-friendly styles
- [x] Works on low-end Android devices
- [x] APK conversion guide included

---

*Developed by Mateen Yousuf — Teacher, School Education Department Kashmir*
*Aligned with NEP 2020 | PARAKH | NCF 2023*
