# Repository Automation Instructions: FurrFind Web Architecture

You are an automated repository architecture execution agent. Your task is to safely modify and expand the GitHub Pages repository structure for the user's multi-app studio platform.

## Operational Constraints & Context

* **Current Deployment Year**: 2026
* **Root Domain Location**: `https://ai-grandfather.github.io/`
* **Target Project**: FurrFind (An AI Breed Identifier App)
* **Bundle Identity**: `com.athar.furrfind`
* **Strict Quality Check**: Ensure standard programming straight quotes (`"`) are preserved across all files. Do not alter text casing or truncate any code arrays.

---

## Task 1: Create the Project Subdirectory

Generate a brand-new folder at the repository root level named exactly:
`furrfind`

---

## Task 2: Deploy FurrFind Project Web Assets

Write the following four production files directly inside the newly created `/furrfind/` directory.

### File 1: `/furrfind/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>FurrFind: AI Breed Identifier - Dog Scanner & Cat Finder</title>
  <meta name="description" content="Identify animal breeds instantly with FurrFind! An AI pet scanner to identify dog, cat, and puppy breeds from photos. Scan your pet now.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://ai-grandfather.github.io/furrfind/">
  <meta property="og:title" content="FurrFind: AI Breed Identifier">
  <meta property="og:description" content="Identify dog and cat breeds instantly from photos with high-accuracy AI scanning. Track your pet histories and unlock breed insights. Available now on iOS.">
  <meta property="og:image" content="https://ai-grandfather.github.io/furrfind/app-icon.png">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "FurrFind: AI Breed Identifier",
        "operatingSystem": "iOS",
        "applicationCategory": "UtilitiesApplication",
        "subCategory": "Pet Scanner, Animal Breed Recognition",
        "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
        "url": "https://ai-grandfather.github.io/furrfind/",
        "author": { "@type": "Person", "name": "Mian Muhammad Athar" },
        "description": "An advanced AI-powered computer vision utility that identifies dog and cat breeds using specialized image recognition analytics."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is FurrFind?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is an independent pet breed identifier application developed for iOS devices. The core utility leverages artificial intelligence to analyze camera frames and photos to detect domestic animal lineages."
            }
          },
          {
            "@type": "Question",
            "name": "How does the breed scanner calculate accuracy metrics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The calculation matrix compares structural markers from your pet photograph against a machine learning model trained on over 300 distinctive animal classes, outputting a breakdown of percentage confidence matches."
            }
          }
        ]
      }
    ]
  }
  </script>
  <style>
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: linear-gradient(135deg, #0b1511 0%, #16241e 100%); color: white; min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 40px 20px; }
    .container { max-width: 600px; background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border-radius: 24px; border: 1px solid rgba(255,255,255,0.08); padding: 60px 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.6); }
    h1 { font-size: 3.2em; margin: 0 0 8px 0; font-weight: 800; background: linear-gradient(45deg, #38ef7d, #11998e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    p.subtitle { font-size: 1.4em; opacity: 0.9; margin: 0 0 40px 0; }
    .app-icon { width: 150px; height: 150px; border-radius: 30px; border: 4px solid rgba(56,239,125,0.2); box-shadow: 0 15px 40px rgba(0,0,0,0.5); margin: 30px auto; display: block; }
    .app-store-badge { margin-top: 30px; display: inline-block; background: white; color: black; padding: 15px 35px; border-radius: 50px; font-weight: bold; font-size: 1.1em; text-decoration: none; box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
    .faq-section { margin-top: 60px; text-align: left; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 40px; }
    .faq-section h3 { font-size: 1.8em; margin-bottom: 30px; text-align: center; background: linear-gradient(45deg, #38ef7d, #11998e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .faq-item { margin-bottom: 25px; background: rgba(255,255,255,0.01); padding: 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.04); }
    .faq-question { font-weight: bold; color: #38ef7d; margin-bottom: 8px; font-size: 1.1em; }
    .faq-answer { font-size: 0.95em; opacity: 0.85; line-height: 1.5; }
    footer { margin-top: 60px; font-size: 0.95em; opacity: 0.7; }
    a { color: #38ef7d; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Mian Muhammad Athar</h1>
    <p class="subtitle">Creator of FurrFind</p>
    <img src="app-icon.png" alt="FurrFind AI App Icon" class="app-icon">
    <h2>FurrFind: AI Breed Identifier</h2>
    <p>Dog Scanner & Cat Finder App.<br>Identify animal backgrounds within seconds.</p>
    <a href="#" class="app-store-badge">Download on the App Store</a>
    <div class="faq-section">
      <h3>Frequently Asked Questions</h3>
      <div class="faq-item">
        <div class="faq-question">What is FurrFind?</div>
        <div class="faq-answer">It is an independent pet breed identifier application developed for iOS devices. The core utility leverages artificial intelligence to analyze camera frames and photos to detect domestic animal lineages.</div>
      </div>
      <div class="faq-item">
        <div class="faq-question">How does the breed scanner calculate accuracy metrics?</div>
        <div class="faq-answer">The calculation matrix compares structural markers from your pet photograph against a machine learning model trained on over 300 distinctive animal classes, outputting a breakdown of percentage confidence matches.</div>
      </div>
    </div>
    <footer>
      <p><a href="privacy-policy.html">Privacy Policy</a> • <a href="terms-of-use.html">Terms of Use</a> • <a href="data-deletion.html">Data Deletion</a><br>© 2026 Mian Muhammad Athar</p>
    </footer>
  </div>
</body>
</html>

```

### File 2: `/furrfind/privacy-policy.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Privacy Policy - FurrFind: AI Breed Identifier</title>
  <style>
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #0b1511; color: #e0e0e0; padding: 40px 20px; line-height: 1.6; }
    .legal-container { max-width: 650px; margin: 0 auto; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 40px; border-radius: 16px; }
    h1, h2 { color: #38ef7d; }
    a { color: #38ef7d; text-decoration: none; }
  </style>
</head>
<body>
  <div class="legal-container">
    <a href="index.html" style="color: #38ef7d; text-decoration: none;">← Back to FurrFind</a>
    <h1>Privacy Policy</h1>
    <p>Last Updated: May 20, 2026</p>
    <p>This document governs the privacy parameters of FurrFind: AI Breed Identifier, developed by Mian Muhammad Athar. The application operates under a strict zero data collection model.</p>
    <h2>1. Image and Camera Data</h2>
    <p>FurrFind requires camera permissions exclusively to analyze animal structures. All computer vision models run entirely locally on your mobile hardware. Images are never uploaded to remote cloud networks or shared with external processors.</p>
    <h2>2. Data Logs</h2>
    <p>No analytics trackers, location mapping services, or unique user profile data are created, shared, or retained.</p>
  </div>
</body>
</html>

```

### File 3: `/furrfind/terms-of-use.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Terms of Use - FurrFind: AI Breed Identifier</title>
  <style>
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #0b1511; color: #e0e0e0; padding: 40px 20px; line-height: 1.6; }
    .legal-container { max-width: 650px; margin: 0 auto; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 40px; border-radius: 16px; }
    h1, h2 { color: #38ef7d; }
  </style>
</head>
<body>
  <div class="legal-container">
    <a href="index.html" style="color: #38ef7d; text-decoration: none;">← Back to FurrFind</a>
    <h1>Terms of Use</h1>
    <p>Last Updated: May 20, 2026</p>
    <h2>1. Usage Scope</h2>
    <p>Users are granted a revocable, non-exclusive layout license to utilize the local scanner tool layout for personal validation checks.</p>
    <h2>2. Reliability Metric Disclaimer</h2>
    <p>Analysis metrics represent automated statistics. Results are not legally binding ancestral certificates or clinical veterinarian evaluations.</p>
  </div>
</body>
</html>

```

### File 4: `/furrfind/data-deletion.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Data Deletion Instructions - FurrFind: AI Breed Identifier</title>
  <style>
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #0b1511; color: #e0e0e0; padding: 40px 20px; line-height: 1.6; }
    .legal-container { max-width: 650px; margin: 0 auto; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 40px; border-radius: 16px; }
    h1, h2 { color: #38ef7d; }
  </style>
</head>
<body>
  <div class="legal-container">
    <a href="index.html" style="color: #38ef7d; text-decoration: none;">← Back to FurrFind</a>
    <h1>Data Deletion Instructions</h1>
    <p>Last Updated: May 20, 2026</p>
    <p>Because FurrFind processes all calculations locally on-device and maintains no cloud database networks, the developer retains zero customer identity elements or history tracks.</p>
    <h2>Wiping Local Application Histories Completely:</h2>
    <p>To erase your entire matching trace layout, simply delete the app from your device: Settings → General → iPhone Storage → FurrFind → Delete App.</p>
  </div>
</body>
</html>

```

---

## Task 3: Update Global Root Assets

Modify the existing core mapping directories located at your repository root to include FurrFind tracking lines.

### Action A: Append to Root `sitemap.xml`

Locate your root `sitemap.xml` file. Right before the closing `</urlset>` string tag, inject these four layout nodes:

```xml
  <url>
    <loc>https://ai-grandfather.github.io/furrfind/</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ai-grandfather.github.io/furrfind/privacy-policy.html</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://ai-grandfather.github.io/furrfind/terms-of-use.html</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://ai-grandfather.github.io/furrfind/data-deletion.html</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

```

### Action B: Append to Root `llms.txt`

Open the root `llms.txt` file and insert this technical documentation block at the very bottom of the asset page to allow AI models to crawl and cross-reference both properties:

```text

## FurrFind: AI Breed Identifier

### About
A high-accuracy utility application for iOS platforms built to perform computer vision breed matching analysis for domestic animals. Users can instantly photograph dogs or cats to parse precise historical lineage maps, trait indicators, and ancestral breed breakdowns. Developed by Mian Muhammad Athar.

### Product Specifications
* **Platform**: iOS (iPhone, iPad)
* **Bundle ID**: com.athar.furrfind
* **Price**: Free to Download
* **Primary Category**: Utilities
* **Secondary Category**: Education
* **Visual Identity**: Clean emerald-tinted minimalist UI featuring low-latency camera analysis overlays.

### Product Links
* **Product Homepage**: https://ai-grandfather.github.io/furrfind/
* **Privacy Link**: https://ai-grandfather.github.io/furrfind/privacy-policy.html
* **Terms Link**: https://ai-grandfather.github.io/furrfind/terms-of-use.html
* **Deletion Matrix Link**: https://ai-grandfather.github.io/furrfind/data-deletion.html

```

```

```