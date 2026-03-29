# Holistic Progress Card & Student Competency Portfolio Studio
### Developed by Mateen Yousuf | Teacher, School Education Department Kashmir
### Aligned with NEP 2020 | NCF 2023 | PARAKH Framework

---

## 📁 File Structure

```
jkbose-holistic-app/
├── index.html          ← Main application (entire app in one file)
├── manifest.json       ← PWA manifest for installability
├── service-worker.js   ← Offline caching service worker
├── author.jpg          ← Author photo (place your photo here)
└── README.md           ← This file
```

---

## 🚀 How to Run Locally

### Option 1: Open Directly in Browser
1. Place all files in one folder
2. Double-click `index.html` to open
3. Note: Service Worker won't activate on `file://` — use a local server for full PWA features

### Option 2: VS Code Live Server (Recommended)
1. Install VS Code: https://code.visualstudio.com
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. App opens at `http://127.0.0.1:5500`

### Option 3: Python Local Server
```bash
# Python 3
cd jkbose-holistic-app
python -m http.server 8080
# Open http://localhost:8080
```

---

## 🌐 How to Host for Free (Online Access)

### GitHub Pages (Free, Permanent)
1. Create account at https://github.com
2. Create new repository: `hpc-studio`
3. Upload all files to the repository
4. Go to Settings → Pages → Source: main branch → Save
5. Your app is live at: `https://yourusername.github.io/hpc-studio`

### Netlify (Free, Drag & Drop)
1. Go to https://netlify.com
2. Drag your entire `jkbose-holistic-app` folder onto the deploy area
3. Your app is instantly live with a URL like `https://xyz.netlify.app`

### Cloudflare Pages (Free)
1. Go to https://pages.cloudflare.com
2. Connect GitHub repository or upload files
3. Deploy — live globally on Cloudflare's CDN

---

## 📱 Installing as PWA (Add to Home Screen)

### On Android Chrome:
1. Open the app URL in Chrome
2. Tap the 3-dot menu → "Add to Home Screen"
3. App installs like a native app with offline support

### On Desktop Chrome/Edge:
1. Open the app URL
2. Click the install icon in the address bar
3. Click "Install"

---

## 📦 Converting to Android APK

### Method 1: Android Studio WebView Wrapper (Recommended)

**Prerequisites:**
- Android Studio: https://developer.android.com/studio
- JDK 11 or higher
- Your app hosted online OR use a local file approach

**Steps:**
1. Host your app on GitHub Pages or Netlify (free)
2. Open Android Studio → New Project → No Activity
3. Add WebView to MainActivity:

```java
// MainActivity.java
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebSettings;

public class MainActivity extends AppCompatActivity {
    private WebView webView;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        webView = findViewById(R.id.webview);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);  // Enables localStorage
        settings.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK);
        
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("https://yourusername.github.io/hpc-studio");
    }
    
    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }
}
```

4. In `AndroidManifest.xml`, add internet permission:
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

5. Add splash screen icon in `res/drawable/`
6. Build → Generate Signed Bundle/APK
7. Sign with keystore → Generate APK

### Method 2: PWABuilder (Easiest — No Coding)
1. Go to https://www.pwabuilder.com
2. Enter your hosted app URL
3. Click "Start" → "Android" → "Generate Package"
4. Download the APK package
5. Install on Android by enabling "Unknown Sources" in Settings

### Method 3: Bubblewrap (Google's Official Tool)
```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://yourusername.github.io/hpc-studio/manifest.json
bubblewrap build
```

---

## ⚙️ APK Signing

```bash
# Generate keystore
keytool -genkey -v -keystore hpc-studio.keystore -alias hpcstudio -keyalg RSA -keysize 2048 -validity 10000

# Sign APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore hpc-studio.keystore app-release-unsigned.apk hpcstudio

# Align APK
zipalign -v 4 app-release-unsigned.apk hpc-studio-final.apk
```

---

## 🎨 App Icon Setup

1. Create a 512×512 PNG icon
2. Place as `icon-512.png` in the app folder
3. Place a 192×192 version as `icon-192.png`
4. For Android Studio, use Image Asset Studio to generate all sizes

---

## 💾 Data & Privacy

- All student data is stored in **browser localStorage only**
- No data is sent to any server
- No internet required after first page load (with service worker)
- Use **Export Data** button to back up all records as JSON
- Use **Import Data** button to restore from backup

---

## 📐 Analytics Formulas Reference

| Formula | Calculation |
|---------|------------|
| ACI (Academic Competency Index) | avg(subject levels) / 4 × 100 |
| SDI (Social Development Index) | (R×0.2 + T×0.25 + Re×0.2 + E×0.2 + I×0.15) × 20 |
| SRDS (Self-Reflection Depth Score) | (Quality Score × 0.7 + Star Rating × 0.3) × 20 |
| PCI (Peer Collaboration Index) | (Academic×0.3 + Teamwork×0.4 + Respect×0.3) × 20 |
| II (Innovation Index) | (Depth×0.4 + Innovation×0.6) × 20 |
| HDC (Holistic Development Composite) | ACI×0.4 + SDI×0.25 + SRDS×0.15 + PCI×0.1 + II×0.1 |
| Growth % | ((Current HDC − Baseline HDC) / Baseline HDC) × 100 |
| Improvement Velocity | T3 HDC − T2 HDC |

---

## 📞 About the Developer

**Mateen Yousuf**  
Teacher, School Education Department, Jammu & Kashmir  
NEP 2020 Implementation Advocate | Holistic Assessment Designer

*"Every child is a universe of potential. Our assessment must be as expansive as that potential."*

---

*Developed with ❤️ for the students and teachers of Kashmir*
