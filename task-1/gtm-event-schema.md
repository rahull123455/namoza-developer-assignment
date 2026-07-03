# GTM Event Schema

## Event Name

| Event | Trigger | Purpose |
|--------|----------|----------|
| page_view | Landing page loaded | Track page visits |
| consultation_form_started | User clicks inside the consultation form | Measure engagement |
| consultation_form_submitted | User successfully submits the consultation form | Primary conversion event |
| consultation_form_failed | Form validation or API failure | Track submission failures |
| phone_click | User clicks the phone number | Measure call intent |

---

# Event Parameters

## consultation_form_submitted

| Parameter | Type | Description |
|------------|------|-------------|
| event | String | consultation_form_submitted |
| fullName | String | User's full name |
| phone | String | User's phone number |
| clinic | String | Selected clinic |
| page_url | String | Current page URL |
| timestamp | String | Event timestamp |

---

## Sample dataLayer Push

```javascript
window.dataLayer = window.dataLayer || [];

window.dataLayer.push({

    event: "consultation_form_submitted",

    fullName: "Vinayak Kumar",

    phone: "9876543210",

    clinic: "Bengaluru",

    page_url: window.location.href,

    timestamp: new Date().toISOString()

});
```

---

# GTM Trigger

**Trigger Type**

Custom Event

**Event Name**

```
consultation_form_submitted
```

---

# GTM Variables

- Event
- fullName
- phone
- clinic
- page_url
- timestamp

---

# Tags

Google Analytics 4 Event

Google Ads Conversion

Meta Pixel (Optional)

---

# Funnel

Landing Page

↓

User Opens Form

↓

User Enters Details

↓

Consultation Submitted

↓

Lead Stored

↓

Conversion Recorded