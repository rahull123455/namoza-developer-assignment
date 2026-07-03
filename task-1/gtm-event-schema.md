# Task 1 - GTM Event Schema

## Project

Client: OrthoNow

Purpose:
Implement Google Tag Manager (GTM) and Google Analytics 4 (GA4) event tracking to measure user interactions across the OrthoNow website and optimize marketing performance.

| Event Name | Trigger Type | Key Parameters | GA4 Report / Audience |
|------------|--------------|----------------|------------------------|
| appointment_step_1 | Custom Event | clinic_location, specialty, page_location | Funnel Exploration |
| appointment_step_2 | Custom Event | patient_name, preferred_date, clinic_location | Funnel Exploration |
| appointment_step_3 | Custom Event | booking_id, clinic_location, specialty | Conversion Report |
| consultation_form_submitted | Form Submission | page_location, form_name, source | Conversions |
| call_now_click | Click Trigger | phone_number, page_location, clinic_name | Engagement |
| whatsapp_click | Click Trigger | page_location, device_type, campaign | Engagement |
| patient_guide_download | Form Submit + File Download | guide_name, phone_number, page_location | Lead Generation |
| clinic_page_view | Page View | clinic_location, page_title, page_location | Landing Pages |
| blog_scroll_25 | Scroll Depth | article_title, scroll_percent, page_location | Content Engagement |
| blog_scroll_50 | Scroll Depth | article_title, scroll_percent, page_location | Content Engagement |
| blog_scroll_75 | Scroll Depth | article_title, scroll_percent, page_location | Content Engagement |
| blog_scroll_100 | Scroll Depth | article_title, scroll_percent, page_location | Content Engagement |

## Booking Funnel Tracking

### Step 1

```javascript
window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
  event: "booking_step_complete",
  step_number: 1,
  step_name: "location_specialty_selected",
  clinic_location: selectedClinic,
  specialty: selectedSpecialty
});
```

### Step 2

```javascript
window.dataLayer.push({
  event: "booking_step_complete",
  step_number: 2,
  step_name: "patient_details_entered",
  patient_name: patientName,
  preferred_date: selectedDate,
  phone_number: patientPhone
});
```

### Step 3

```javascript
window.dataLayer.push({
  event: "booking_step_complete",
  step_number: 3,
  step_name: "booking_confirmed",
  booking_id: bookingId,
  confirmation_status: "Success"
});
```