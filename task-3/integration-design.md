# Task 3 - Integration Architecture

## Objective

Design the backend architecture for the OrthoNow consultation booking system. The solution should receive a booking request from the landing page, store the lead, synchronize it with HubSpot CRM, send a WhatsApp confirmation using Karix, and record a Google Ads conversion.

---

# High-Level Architecture

```
                User
                 │
                 ▼
        HTML Landing Page
                 │
                 ▼
      Consultation Form Submit
                 │
                 ▼
      Express.js REST API
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
   MongoDB   HubSpot   Google Ads
                 │
                 ▼
        Karix WhatsApp API
                 │
                 ▼
        Confirmation Message
```

---

# Request Flow

### Step 1

The user opens the landing page.

---

### Step 2

The user enters:

- Full Name
- Phone Number
- Clinic

and clicks **Book Consultation**.

---

### Step 3

The frontend sends a POST request:

```
POST /api/consultation
```

with JSON:

```json
{
  "fullName": "Vinayak Kumar",
  "phone": "9876543210",
  "clinic": "Bengaluru"
}
```

---

### Step 4

The Express backend validates:

- Required fields
- Phone number
- Duplicate submissions

---

### Step 5

If validation succeeds, the consultation is stored in MongoDB Atlas.

---

### Step 6

After successful storage:

- Create or update the contact in HubSpot CRM.
- Send a confirmation WhatsApp message using Karix.
- Fire a Google Ads conversion event.

---

### Step 7

The backend returns:

```json
{
    "success": true,
    "message": "Consultation booked successfully."
}
```

The frontend displays a success message and pushes a GTM `dataLayer` event.

---

# Failure Handling

## HubSpot Failure

If HubSpot is unavailable:

- Save the consultation in MongoDB.
- Log the failure.
- Retry later using a background worker or queue.

---

## Karix Failure

If the WhatsApp API fails:

- Keep the booking in MongoDB.
- Retry sending the message.
- Notify administrators if repeated failures occur.

---

## Google Ads Failure

If conversion tracking fails:

- Log the error.
- Continue processing without affecting the user experience.

---

# Monitoring

Track:

- API response time
- Booking success rate
- HubSpot synchronization success
- Karix delivery success
- Google Ads conversion success
- Server errors

---

# Security

- HTTPS
- Environment variables for API keys
- Input validation
- CORS
- Rate limiting
- Server-side validation
- Secure database credentials

---

# Technologies

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express.js

Database

- MongoDB Atlas
- Mongoose

Third-Party Services

- HubSpot CRM
- Karix WhatsApp API
- Google Ads Conversion API

---

# Conclusion

This architecture provides a scalable and modular solution for handling consultation bookings. It separates the frontend, backend, database, and third-party integrations, making the application easier to maintain and extend.