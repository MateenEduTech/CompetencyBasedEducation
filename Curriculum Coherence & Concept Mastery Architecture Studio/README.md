# Curriculum Coherence & Concept Mastery Architecture Studio
## Developed by Mateen Yousuf | School Education Department, Kashmir
### Aligned with NEP 2020 | NCF 2023 | Competency-Based Curriculum

---

## 📁 FILE STRUCTURE

```
jkbose-curriculum-app/
├── index.html          ← Main application (single file, all HTML/CSS/JS)
├── manifest.json       ← PWA manifest for installability
├── service-worker.js   ← Offline caching service worker
├── author.jpg          ← Author photo (add your photo here)
└── README.md           ← This file
```

---

## 🚀 HOW TO RUN LOCALLY

### Option 1: VS Code Live Server (Recommended)
1. Install VS Code → Install "Live Server" extension
2. Open the `jkbose-curriculum-app` folder in VS Code
3. Right-click `index.html` → "Open with Live Server"
4. App opens at `http://127.0.0.1:5500`

### Option 2: Python Local Server
```bash
cd jkbose-curriculum-app
python3 -m http.server 8080
# Open: http://localhost:8080
```

### Option 3: Node.js Server
```bash
npx serve .
# Or: npx http-server .
```

---

## 🌐 HOW TO HOST FOR FREE

### GitHub Pages (Recommended — Free)
1. Create a GitHub account at github.com
2. Create a new repository (e.g., `ccmas-app`)
3. Upload all files to the repository
4. Go to Settings → Pages → Source: main branch → /root
5. Your app will be live at: `https://yourusername.github.io/ccmas-app`

### Netlify (Drag & Drop)
1. Go to netlify.com → Sign up free
2. Drag your entire `jkbose-curriculum-app` folder to the Netlify dashboard
3. App goes live instantly at a free URL

### Cloudflare Pages
1. Go to pages.cloudflare.com
2. Connect your GitHub repository
3. Deploy automatically on every update

---

## 📱 PWA INSTALLATION (Add to Home Screen)

### Android Chrome:
1. Open the app URL in Chrome on Android
2. Tap the 3-dot menu → "Add to Home Screen"
3. OR wait for the install banner to appear automatically
4. Tap "Install" → App installs like a native app

### Desktop Chrome:
1. Open the app URL
2. Click the install icon (⊕) in the address bar
3. Or: Menu → "Install Curriculum Mastery Studio"

---

## 📲 APK CONVERSION GUIDE (Android App)

### Method 1: Android Studio WebView (Full APK)

**Step 1: Build Requirements**
- Install Android Studio (free at developer.android.com)
- Install Java JDK 11 or higher

**Step 2: Create New Project**
1. Open Android Studio → New Project → Empty Activity
2. Name: `CurriculumMasteryStudio`
3. Package: `com.jkbose.ccmas`
4. Language: Java or Kotlin
5. Min SDK: API 21 (Android 5.0)

**Step 3: Add WebView to MainActivity**

In `res/layout/activity_main.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    <WebView
        android:id="@+id/webview"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
</RelativeLayout>
```

In `MainActivity.java`:
```java
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        WebView webView = findViewById(R.id.webview);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);  // Enables localStorage
        settings.setAllowFileAccess(true);
        settings.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
        
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("file:///android_asset/index.html");
    }
}
```

**Step 4: Copy App Files**
- Copy `index.html`, `manifest.json`, `service-worker.js`, `author.jpg`
- Paste into: `app/src/main/assets/` folder

**Step 5: Configure Permissions in AndroidManifest.xml**
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

**Step 6: Add Splash Screen**
- Add `splash.xml` in `res/drawable`
- Set app icon in `res/mipmap` folders (use 192x192 and 512x512 icons)

**Step 7: Build APK**
1. Build → Generate Signed Bundle/APK
2. Select APK → Create new keystore
3. Fill keystore details → Build Release APK
4. APK will be in: `app/release/app-release.apk`

**Step 8: Install on Device**
- Enable "Install from Unknown Sources" in Android Settings
- Transfer APK to device and tap to install

### Method 2: PWA Builder (Faster, No Coding)
1. Host app on GitHub Pages (see above)
2. Go to pwabuilder.com
3. Enter your app URL
4. Click "Package for stores" → Android
5. Download the APK package
6. Install on Android device

---

## 💾 DATA & PRIVACY

- All data is stored locally in your browser (LocalStorage)
- No internet connection required after first load
- No data is sent to any server
- To backup data: use Export function in Report page
- To restore: app saves automatically on every entry

---

## 📋 FEATURES

| Feature | Status |
|---------|--------|
| Works Offline | ✅ Complete |
| No Login Required | ✅ Complete |
| PWA Installable | ✅ Complete |
| LocalStorage Persistence | ✅ Complete |
| Print/Export Report | ✅ Complete |
| 20-Page Foundation Content | ✅ Complete |
| Curriculum Map Explorer | ✅ Complete |
| Vertical Alignment Engine | ✅ Complete |
| Horizontal Integration Analyzer | ✅ Complete |
| Concept Mastery Tracker | ✅ Complete |
| Academic Rigor Analyzer | ✅ Complete |
| Overload Detector | ✅ Complete |
| Coherence Dashboard | ✅ Complete |
| Improvement Report | ✅ Complete |
| NEP 2020 Aligned Formulas | ✅ Complete |
| NCF 2023 Framework | ✅ Complete |

---

## 📐 ANALYTICS FORMULAS

```
Vertical Coherence Score (VCS):
VCS = f(avg_depth_gain, grade_span, progression_quality) × 100

Integration Index (II):
II = (Σ subject_scores / (n × max_score)) × 100

Fragmentation Risk:
FR = 100 − Integration Index

Concept Mastery Score (CMS):
CMS = (Full% × 1.0) + (Partial% × 0.5) + (Weak% × 0.0)

Rigor Balance Index (RBI):
RBI = (Σ L_i × weight_i) / (total × max_weight) × 100

Higher-Order Thinking Ratio (HOTR):
HOTR = (L3 + L4 + L5 + L6) / Total_Questions × 100

Overload Risk Score (ORS):
ORS = f(hours_per_chapter, assessment_density)

Depth Deficit Indicator (DDI):
DDI = (1 − depth_rating/5) × 100
```

---

*Curriculum Coherence & Concept Mastery Architecture Studio*  
*Developed by Mateen Yousuf | Teacher, School Education Department, Jammu & Kashmir*  
*NEP 2020 · NCF 2023 · Competency-Based Curriculum*
