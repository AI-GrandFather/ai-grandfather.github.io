# Match Tales production-readiness audit and release checklist

Audit and document revision date: **November 9, 2026**.

**Decision: website changes are implemented and locally verified, but this repository is NOT ready for an unattended production deployment or an approved game launch.** Resolve the seller-file discrepancy, app privacy controls and release facts below, then obtain appropriate legal review. Legal pages deliberately display a draft-for-review notice. Do not remove that notice merely to make the pages look finished.

## Scope and evidence

- Website repository: `AI-GrandFather/ai-grandfather.github.io`, initially clean working tree. Existing architecture: static standalone HTML, inline CSS, one local game icon, no Match Tales JavaScript/build pipeline. Existing navy `#0d1b33`, sky-blue `#5cc8ff`, gold `#ffd23f` identity and original icon retained. Shared local `site.css` replaces duplicated Match Tales styles.
- Initial website assertions were not treated as proof of app behavior. After the owner supplied `/Users/atharmushtaq/projects/Rush`, its instructions identified `.worktrees/Rush_cards` as the active Match Tales implementation. Both the supplied root checkout and that worktree were inspected read-only. Their behavior differs. Root checkout: `ca0445e9`; active worktree observed at `f491d264`. Both contain ongoing development; neither proves the contents of the final signed store binary.
- No app code, configuration, purchases, store console, legal identity records or production provider settings were changed. No site push or deployment was performed.
- App source observations below refer to `/Users/atharmushtaq/projects/Rush/.worktrees/Rush_cards/` unless noted. Relative paths are under `unity/`.

| Evidence | Observed behavior | Limits |
| --- | --- | --- |
| `Packages/manifest.json`, `ProjectSettings/AndroidResolverDependencies.xml` | Google Mobile Ads 11.6.0, Firebase App/Analytics/Remote Config 14.1.0, Unity Purchasing 5.4.4, Unity Mobile Notifications 2.5.0 | Package presence is not a complete audit of final native SDKs or live configuration. No Crashlytics or additional mediation integration was identified in inspected configuration. |
| `Assets/Rush/Services/RushServicesBootstrap.cs`, `RushFirebase.cs` | Firebase starts on mobile; code explicitly enables Analytics before the separate ad-consent sequence | No verified prior Analytics consent gating or withdrawal control. |
| `Assets/Rush/Services/RushAdMobRewarded.cs` | `RewardedAd` loading/showing; UMP update/form and `CanRequestAds()` gate; ATT and notification permission sequence | No banner/interstitial placement found in reviewed integration. Actual fill, partner list, regional messages and final permission behavior untested. |
| `Assets/Rush/Services/RushTracking.cs`, `RushMobileNotifications.cs` | iOS ATT request; local notification scheduling; no remote notification registration in reviewed integration | ATT is present in the active worktree, absent from the older root ad startup. Final shipped checkout must be established. |
| `Assets/Rush/Scripts/RushSave.cs`, `RushClockGuard.cs` | Local PlayerPrefs profile, verified checkpoint; HEAD request to `https://www.google.com/generate_204` reads Date header; time inconsistencies can roll progress back while carrying settings and transaction records | Not a publisher cloud save; no claim that rollback always preserves purchased balances. Network-time request can happen again across resumes, not just once ever. |
| `Assets/Rush/Services/RushUnityIapStore.cs`, `Assets/Rush/Scripts/RushShop.cs` | Store receipts, transaction IDs and Apple signed transaction data; consumable/non-consumable products; pending/recovered delivery; restore support; optional verification endpoint | Production endpoint, store catalog and purchase success not verified. `purchase_delivered` Analytics event includes `transaction_id`; privacy text now discloses this. |
| `Assets/Rush/Scripts/RushGameController.UI2.cs` | Home settings offers Restore Purchases; no privacy-options entry point identified in reviewed settings or integration | Final phone UI and all release variants need testing. |
| `Assets/Rush/Scripts/RushPowerupArt.cs`, `RushEconomyConfig.cs`, launch plans | Renamed art: Spring Slammer, Magnet; legacy and new names coexist; Propeller/Boomerang names conflict. Store boosters include Postmark Stamp, Paper Plane, Balloon Drop, Globe Spin and Grand Fireworks | Final naming needs a single approved release roster. Website no longer promises Rockets/TNT/Propellers/Prism Orb as the final roster. |
| `docs/launch-10-obstacles-plan.md`, `docs/LIVE-IMPLEMENTATION-PLAN.md` in app workspace | Different historical 1,000-level plan and newer 100-level initial submission plan; changing obstacle roster and release-feature plans | Do not advertise thousands of levels, dozens of obstacles, passes or events until the release package is confirmed. |
| `ProjectSettings/ProjectSettings.asset` | Active worktree product name `Match Tales`, company field `Rush Studio`, app IDs `com.rushstudio.rushmatch`; catalog products use `com.zelstudio.matchtales.*` | These are technical labels, not evidence of a registered company or a working store listing. Do not rename IDs casually; reconcile them with existing store records. Public site uses the owner's full title. |

Source snapshot hashes (SHA-256 prefixes, to distinguish reviewed content from later changes):

```text
Packages/manifest.json                             7592d3c3379344f7
ProjectSettings/ProjectSettings.asset              61925da5b0828312
Assets/Rush/Services/RushFirebase.cs                3358ad44b3e23616
Assets/Rush/Services/RushAdMobRewarded.cs            880a3b85f4cbb7f3
Assets/Rush/Services/RushServicesBootstrap.cs       dcf015fdcb376735
Assets/Rush/Services/RushUnityIapStore.cs            5646482da8116471
Assets/Rush/Services/RushTracking.cs                ea861a0de52473dd
Assets/Rush/Services/RushMobileNotifications.cs     88ce93747b640b9d
Assets/Rush/Scripts/RushClockGuard.cs               6742ab4f8abc628f
Assets/Rush/Scripts/RushSave.cs                     8fe705b03c6731b3
Assets/Rush/Scripts/RushShop.cs                     954763f43d6feb9e
Assets/Rush/Scripts/RushGameController.UI2.cs        6da62e9fc93a98e6
Assets/Rush/Scripts/RushPowerupArt.cs                52705d924a1b8893
```

## Confirmed defects and deployment hazards

- [ ] **Seller-file divergence must be reconciled before publishing this checkout.** Live domain-root `/app-ads.txt` returned 200 and 23,962 bytes (550 lines), SHA-256 `c924edfc9d57be8b5e62dfb2b979601852e34c4325c9b4f694a8d6857a85f572`. Local root and local/project seller files are only 115 bytes, two records, SHA-256 `f13640547d551bd94d88f27297690acc1177d2ac226cf47f59375729b3f6b874`. A whole-repository deployment could replace live authorized sellers with this shorter file. Both local files were preserved byte-for-byte; no remote seller was imported or declared authorized on inference. Obtain the authoritative current seller list and publishing-source history, reconcile it with the owner/AdMob account and preserve authorized entries before deploy. Do not use a full-directory mirror of this checkout meanwhile.
- [ ] **Analytics consent implementation gap:** `RushFirebase.Start()` explicitly enables collection independently of UMP. Where prior consent is required, implement startup gating and withdrawal (including default settings before SDK initialization), test them and update the policy to match. A website notice cannot fix app behavior.
- [ ] **Ad privacy-options control gap:** no `ShowPrivacyOptionsForm` or equivalent working entry point was found in the reviewed settings/integration. Implement and test the persistent entry point wherever UMP requires it. Stop recommending deletion/reinstallation as consent management.
- [x] **Live `/matchtales/privacy` was 404.** Static directory alias now created and locally tested with and without the trailing slash. Deployment and a live recheck remain necessary.
- [x] **Website copy defects corrected:** Analytics no longer called anonymous; removed unsupported fixed retention/deletion/response periods, universal offline assurances, unconditional consent-reset instructions and obsolete fixed content roster. Purchases, local deletion and provider retention are now distinguished.
- [x] **Canonical and presentation defects corrected:** canonical/OG metadata added to content pages; shared responsive navigation, table of contents for both long documents, skip link and visible keyboard focus added. Existing canonical HTML page filenames retained.

## Developer verification required before launch

These are unresolved facts, not assertions that a defect has been proven:

- [ ] Identify the exact Android/iOS release commits, flags, native dependency manifests, remote config and signed binaries. Review startup network traffic before and after consent/ATT choices. The supplied root and active worktree differ.
- [ ] Confirm final title/subtitle, platform release status, approved store URLs and actual downloadable build. No live store link was invented. The old coming-soon promise was replaced by an explicit availability-verification message.
- [ ] Confirm and document final power-up/booster names and launch obstacle roster. Confirm launch level count and any pass/event functionality actually included. Publish only the approved release claims.
- [ ] Test first-launch and repeated offline play, offline resume, remote-config failures and reconnection. Website describes local core gameplay without guaranteeing every feature is offline.
- [ ] Verify no publisher account/cloud save in the shipped build; confirm iCloud/Android backup configuration, backup exclusions and transfer behavior. Test uninstall versus iOS offload and device restore. Do not promise uninstall removes backups or provider data.
- [ ] Verify UMP messages, partner/vendor list, limited/non-personalized ads, consent withdrawal, applicable US state opt-outs and consent propagation to Analytics and ads. No Unity Ads, Meta or Liftoff game mediation has been asserted based on seller files or another app.
- [ ] Verify actual Analytics event schema, transaction-ID necessity, retention, access controls and deletion tooling. Consider removing transaction IDs from Analytics if not needed. Establish how support can safely obtain/match a relevant identifier for rights requests; device model/install date alone is insufficient. Do not publish a deletion promise that cannot be performed.
- [ ] Verify Unity IAP's actual SDK telemetry and provider terms in the exact release, plus any native dependencies not visible in source manifests. Reassess the provider/data-category disclosures if they differ.
- [ ] Confirm whether any receipt-verification endpoint is enabled in production. If enabled, document operator, hosting countries, receipt/transaction processing, security, retention and deletion. No active endpoint was independently verified.
- [ ] Test purchase completion, interrupted delivery, pending payments, refunds, idempotency, restore of one-time products and non-restorability of spent consumables on both stores. Verify purchase records and paid balances survive clock-check rollback appropriately.
- [ ] Review clock rollback thresholds and error handling against legitimate clock changes, travel, network failure and purchases. Confirm players receive sufficient notice before any rollback and can seek support. Do not advertise a guaranteed anti-cheat outcome.
- [ ] Confirm notification permission UX, local-only reminders, advertising diagnostic log contents and local retention. Reassess if remote push or new providers are added.
- [ ] Verify retention schedules, support mailbox practices, rights-response workflow, lawful exceptions and provider deletion capabilities. Exact retention settings were not available; no numeric promise was invented.
- [ ] Check every privacy statement against final App Privacy and Data safety forms, including identifiers, approximate location, interactions, purchases, diagnostics, support information and optional tracking. Pseudonymous is not anonymous.

## Legal review required before publication

- [ ] Review the original Terms and Privacy drafts with an appropriately qualified adviser familiar with Pakistan and the intended distribution markets. No mandatory arbitration, class-action waiver, exclusive Pakistan forum, universal no-refund clause or blanket no-liability clause was imported.
- [ ] Confirm operator/trader disclosures, any required business contact or geographical address, EEA/UK representative obligations if applicable, governing-law treatment and regional consumer protections. No company incorporation or corporate address was invented.
- [ ] Confirm the intended minimum age, target audience, store age ratings, child-directed/mixed-audience classification, age gate and child/ad SDK settings. The retained intended 13+ rule and guardian requirement do not alone establish legal compliance or negate a child-directed audience.
- [ ] Assess controller/processor roles, legal bases, international transfer contracts and safeguards, legitimate-interest assessments and whether California/state sale/sharing rules actually apply to this publisher and configuration. Do not publish unverified claims of no sale/sharing or worldwide compliance.
- [ ] Confirm Apple's applicable EULA selection. Website Terms supplement the applicable store license; they are not presented as a replacement custom Apple EULA. If selecting a custom EULA, have it reviewed against Apple's required minimum terms separately.
- [ ] Verify rights and licenses for all shipped game assets, levels, names, code, audio and third-party components. The app workspace contains recovered reference materials and an owner instruction to ship only owned assets; that is not evidence of completed clearance. Obtain an approved release-asset inventory and licenses. This audit did not establish infringement or clearance.
- [ ] Approve the final legal and technical disclosures together, remove draft notices only after approval, and update the Last Updated date if revised on another day. Ensure terms/policy links and any required assent/consent flows are accessible in the app, not solely on the website.

## App Store Connect and Google Play Console actions

| Service | Required action |
| --- | --- |
| App Store Connect | Set the Privacy Policy URL to `https://ai-grandfather.github.io/matchtales/privacy-policy.html`; Support URL to `https://ai-grandfather.github.io/matchtales/support.html`; Marketing/Developer Website URL to `https://ai-grandfather.github.io/matchtales/`. Verify that the public Developer Website link actually appears. Confirm full title/subtitle, app/bundle identity, App Privacy answers, ATT purpose string/behavior, age rating/audience, privacy manifests, paid product metadata and store EULA selection. Test restoration and sandbox purchases. Supply only real approved store links to the website. |
| Google Play Console | Set store contact website to `https://ai-grandfather.github.io/matchtales/`, contact email to `atharmushtaq9@gmail.com` and policy URL to `https://ai-grandfather.github.io/matchtales/privacy-policy.html`. Reconcile package identity and products; complete Data safety, contains-ads and target audience/age declarations from the final build. Use `https://ai-grandfather.github.io/matchtales/data-deletion.html` for an applicable deletion-resource field. If accounts are introduced, implement the applicable account-deletion requirements; do not pretend an email-only page is sufficient. Test billing and restoration with licensed test accounts. |
| AdMob / consent console | Reconcile seller records and app IDs with the store listings; verify domain-root app-ads.txt crawl status, authorized seller IDs, UMP regional messages and live vendor list. Test consent/ATT decline and accept, privacy-options reopening, withdrawal and Analytics gating. Confirm any test-ad flags are appropriate for the target build. |

AdMob discovers app-ads.txt from the **hostname** of the developer website, not the `/matchtales/` path. The discovery location is `https://ai-grandfather.github.io/app-ads.txt`, already publicly accessible at audit time. No new domain is required if that hostname remains the store's Developer Website host and its root file remains correct. `/matchtales/app-ads.txt` is a convenience copy, not a substitute for the root file. Store listing/console values were not available for independent verification. See [Google's app-ads.txt setup instructions](https://support.google.com/admob/answer/9363762).

## URLs after deployment

Canonical content pages:

- `https://ai-grandfather.github.io/matchtales/`
- `https://ai-grandfather.github.io/matchtales/terms-of-use.html` (Terms of Service and Terms of Use)
- `https://ai-grandfather.github.io/matchtales/privacy-policy.html`
- `https://ai-grandfather.github.io/matchtales/support.html`
- `https://ai-grandfather.github.io/matchtales/data-deletion.html`

Supported static alternatives, with or without trailing slash:

- `https://ai-grandfather.github.io/matchtales/terms-of-use` -> canonical Terms HTML
- `https://ai-grandfather.github.io/matchtales/terms-of-service` -> canonical Terms HTML
- `https://ai-grandfather.github.io/matchtales/privacy` -> canonical Privacy HTML

Aliases use directory `index.html` files, canonical tags, HTML meta refresh and ordinary fallback links. They require no JavaScript, server rewrites or deploy-time routing plugin. GitHub Pages may normalize directory URLs with a trailing slash or continue serving an existing extensionless HTML route; either Terms representation points to the same canonical HTML. Sitemap lists canonical pages only. The existing `.html` URLs are unchanged.

## Verification performed

- Live pre-change HTTP checks: homepage, extensionless Terms, Privacy HTML, Support and Data Deletion returned 200; `/privacy` returned 404. Both root and project seller URLs returned 200; root/project mismatch recorded above.
- HTML5 parsing: all **8** Match Tales HTML documents parsed with **zero HTML5 parser errors**. This is structural parsing, not a claim of W3C conformance certification or legal correctness.
- Checked **154** local links/asset references, including same-site absolute URLs, relative URLs and fragment targets: no missing targets. Checked canonical uniqueness, descriptions, viewports, duplicate IDs, programming quotes and absence of script/iframe dependencies. Sitemap parses as XML.
- Browser tests at widths **320, 375, 768 and 1440 px** across all five content pages: no horizontal overflow, one H1 per page, no broken images, consistent header/footer navigation and no page JavaScript errors.
- Tested all three aliases with and without a trailing slash on a local static HTTP server. All six landed at the expected canonical HTML page.
- Keyboard Tab/Enter test: skip link receives visible solid focus and moves to `#main`. Mobile homepage screenshot inspected: original icon/palette retained, navigation wraps and copy is readable. Mobile Terms screenshot also inspected; table-of-contents link to device-clock disclosure and header navigation to Support and Data Deletion exercised successfully.
- All **9** distinct external links used by the revised pages returned HTTP 200, including the Apple/Google refund resources, provider policies and Apple Standard EULA (redirects followed).
- Root and project app-ads.txt match their original SHA-256 values. Root homepage changes are limited to the Match Tales promotional block. Sitemap changes are limited to Match Tales revision dates. `git diff --check` passed.
- These are local static-site checks. No final mobile binary, store console, complete accessibility audit, every gameplay feature or post-deployment GitHub Pages response was certified. Recheck the public URLs and seller file after an approved deployment.

## Files changed

Modified:

- `index.html` (only Match Tales promotional claims)
- `sitemap.xml` (only Match Tales lastmod dates)
- `matchtales/index.html`
- `matchtales/terms-of-use.html`
- `matchtales/privacy-policy.html`
- `matchtales/support.html`
- `matchtales/data-deletion.html`

Created:

- `matchtales/site.css`
- `matchtales/privacy/index.html`
- `matchtales/terms-of-use/index.html`
- `matchtales/terms-of-service/index.html`
- `docs/matchtales-release-checklist.md` (this audit and delivery record)

Unrelated FurrFind, FairSlice and other studio assets, all seller records and the game icon were preserved.

## Reference sources

Reviewed only for organization and coverage; wording drafted independently. Large-publisher company facts, dispute provisions and technical practices were not adopted as facts about Match Tales:

- [Dream Games Terms](https://www.dreamgames.com/en/terms) and [Privacy](https://www.dreamgames.com/en/privacy).
- [King Terms](https://www.king.com/termsandconditions/) and [Privacy](https://www.king.com/privacypolicy).
- [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) for store-license precedence.
- [Firebase privacy](https://firebase.google.com/support/privacy), [Google Mobile Ads data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure), [Google provider processing](https://policies.google.com/technologies/partner-sites), [Unity player privacy](https://unity.com/legal/game-player-and-app-user-privacy-policy) and [GitHub privacy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) for provider context, always subject to release-specific verification.

The unofficial royalmatch.co.uk site was not used.
