

## Implementation Plan: Hero Image, Service Buttons & Contact Form URL Parameters

### Overview
This plan implements three key changes:
1. Replace the hero background with the uploaded office image
2. Add "Get Started" buttons to service cards linking to the contact form with pre-selected service
3. Enable the contact form to read URL parameters and auto-select the service

---

### Task 1: Update Hero Background Image

**Action:** Copy the uploaded image and update the import in Index.tsx

**Steps:**
1. Copy `user-uploads://Hero-background.jpeg` to `src/assets/hero-bg.jpg` (replaces current AI-generated image)
2. No code changes needed in Index.tsx since the import path remains the same

**Result:** The hero section will display the vibrant cyber café office image showing the workspace with computers, printers, and the branded environment.

---

### Task 2: Add "Get Started" Buttons to Service Cards

**Changes to `src/components/ServiceCard.tsx`:**

Add new optional props and a clickable button:
- `serviceSlug?: string` - URL parameter value for the service
- `showGetStarted?: boolean` - Whether to show the "Get Started" button

**Updated ServiceCard structure:**
```typescript
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "primary" | "accent";
  image?: string;
  serviceSlug?: string;      // NEW
  showGetStarted?: boolean;  // NEW
}
```

Add a "Get Started" button at the bottom of each card that links to `/contact?service={serviceSlug}`:
```tsx
{showGetStarted && serviceSlug && (
  <Link 
    to={`/contact?service=${serviceSlug}`}
    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
  >
    Get Started <ArrowRight className="h-4 w-4" />
  </Link>
)}
```

**Changes to `src/pages/Services.tsx`:**

Add `serviceSlug` and `showGetStarted` props to all service data arrays:

| Service Category | Example Service Slugs |
|-----------------|----------------------|
| Government Services | `passport-application`, `kra-services`, `helb-application`, `ecitizen-support` |
| Design Services | `certificate-design`, `logo-design`, `poster-design`, `wedding-cards` |
| Printing Services | `large-format-printing`, `bulk-printing`, `business-cards`, `document-printing` |
| Branding Services | `tshirt-branding`, `mug-branding`, `corporate-gifts` |

---

### Task 3: Update Contact Form with URL Parameter Reading

**Changes to `src/components/ContactForm.tsx`:**

1. **Add imports for URL parameter handling:**
```typescript
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
```

2. **Add extended service options** to cover specific services from the Services page:
```typescript
const serviceOptions = [
  // Government Services
  { value: "passport-application", label: "Passport Application Assistance" },
  { value: "birth-death-certificate", label: "Birth/Death Certificate Assistance" },
  { value: "helb-application", label: "HELB Application Support" },
  { value: "kra-services", label: "KRA Services Assistance" },
  { value: "business-registration", label: "Business Name Registration" },
  { value: "company-registration", label: "Company Registration Support" },
  { value: "business-permit", label: "Single Business Permit Support" },
  { value: "ecitizen-support", label: "eCitizen Account Support" },
  { value: "ntsa-services", label: "NTSA Services Assistance" },
  { value: "boma-yangu", label: "Boma Yangu Assistance" },
  { value: "nhif-nssf", label: "NHIF/SHIF/NSSF Assistance" },
  { value: "agpo-certificate", label: "AGPO Certificate Assistance" },
  
  // Design Services
  { value: "certificate-design", label: "Award Certificate Design" },
  { value: "poster-design", label: "Posters & Flyers Design" },
  { value: "eulogy-design", label: "Eulogy Design" },
  { value: "greeting-cards", label: "Love Cards & Greeting Cards" },
  { value: "brochure-design", label: "Brochure Design" },
  { value: "wedding-cards", label: "Wedding Card Design" },
  { value: "logo-design", label: "Logo Design" },
  { value: "banner-design", label: "Sticker & Banner Design" },
  { value: "letterhead-design", label: "Letterhead Design" },
  { value: "company-profile", label: "Company Profile Design" },
  { value: "id-card-design", label: "ID Card Design" },
  
  // Printing Services
  { value: "large-format-printing", label: "Large Format Printing" },
  { value: "bulk-printing", label: "Bulk Printing" },
  { value: "certificate-printing", label: "Certificate Printing" },
  { value: "business-cards", label: "Business Card Printing" },
  { value: "flyer-printing", label: "Flyers & Brochures Printing" },
  { value: "wedding-printing", label: "Wedding Cards Printing" },
  { value: "profile-printing", label: "Company Profiles Printing" },
  { value: "document-printing", label: "Document Printing" },
  { value: "scanning-copying", label: "Scanning & Photocopying" },
  { value: "binding-lamination", label: "Binding & Lamination" },
  
  // Branding Services
  { value: "tshirt-branding", label: "T-Shirt Branding" },
  { value: "mug-branding", label: "Mug/Cup Branding" },
  { value: "corporate-gifts", label: "Corporate Gift Branding" },
  { value: "event-branding", label: "Event Branding" },
  { value: "hoodie-branding", label: "Hoodie Branding" },
  { value: "caps-bags", label: "Caps & Bags Branding" },
  
  // General
  { value: "general", label: "General Inquiry" },
];
```

3. **Read URL parameters on mount:**
```typescript
const [searchParams] = useSearchParams();

useEffect(() => {
  const serviceParam = searchParams.get("service");
  if (serviceParam) {
    // Check if the service parameter matches a valid option
    const validService = serviceOptions.find(opt => opt.value === serviceParam);
    if (validService) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }
}, [searchParams]);
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/assets/hero-bg.jpg` | Replace with uploaded office image |
| `src/components/ServiceCard.tsx` | Add `serviceSlug`, `showGetStarted` props, add "Get Started" link |
| `src/pages/Services.tsx` | Add `serviceSlug` and `showGetStarted: true` to all service items |
| `src/components/ContactForm.tsx` | Add `useSearchParams`, expand service options, auto-select from URL |

---

### User Flow Example

1. User visits `/services` page
2. User sees "Passport Application Assistance" card with "Get Started" link
3. User clicks "Get Started"
4. User is redirected to `/contact?service=passport-application`
5. Contact form loads with "Passport Application Assistance" pre-selected in the dropdown
6. User fills in name, email, phone, and message
7. User submits form, WhatsApp opens with pre-filled message

---

### Technical Notes

1. **Backward Compatibility:** The new props are optional, so existing ServiceCard usage continues to work
2. **URL Encoding:** Service slugs use URL-safe characters (lowercase, hyphens)
3. **Validation:** The form validates that URL parameters match valid service options before auto-selecting
4. **No Breaking Changes:** All existing functionality is preserved

