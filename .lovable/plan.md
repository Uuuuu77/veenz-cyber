

## Implementation Plan: Auto-Scroll to Contact Form on Service Selection

### Overview
When users click "Online Services" links in the footer, they navigate to `/contact?service={slug}`. The form already auto-selects the service, but users land at the top of the page and need to scroll down to see the form. This fix will automatically scroll to the form section when a service parameter is present.

---

### Solution

**Modify `src/pages/Contact.tsx`:**

1. **Add imports**: Import `useEffect`, `useRef` from React and `useSearchParams` from react-router-dom
2. **Add ref**: Create a ref for the contact form section
3. **Add useEffect**: Detect service parameter and scroll to form section with a slight delay

---

### Code Changes

**File: `src/pages/Contact.tsx`**

**Add imports (line 1):**
```typescript
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
```

**Add ref and scroll logic inside component (after line 32):**
```typescript
const Contact = () => {
  const [searchParams] = useSearchParams();
  const formSectionRef = useRef<HTMLElement>(null);

  // Auto-scroll to form when arriving with a service parameter
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && formSectionRef.current) {
      // Small delay to ensure page has rendered
      const timer = setTimeout(() => {
        formSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    // ... rest of component
```

**Attach ref to form section (line 187):**
```tsx
{/* Contact Form Section */}
<section className="mt-16" ref={formSectionRef}>
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Contact.tsx` | Add imports, useRef, useEffect for auto-scroll, attach ref to form section |

---

### User Flow After Implementation

1. User clicks "Passport Applications" in footer
2. Page navigates to `/contact?service=passport-application`
3. Page loads and:
   - `ScrollToTopOnNavigation` scrolls to top (instant)
   - `ContactForm` auto-selects "Passport Application Assistance"
   - After 150ms, page smoothly scrolls down to the form section
4. User sees the form with the service pre-selected, ready to fill in

---

### Technical Notes

1. **150ms delay**: Allows the page to fully render before scrolling. This is necessary because React Router's navigation happens first, then our scroll effect runs
2. **Smooth scroll**: Uses `behavior: "smooth"` for a polished UX
3. **Cleanup function**: The `clearTimeout` ensures no memory leaks if the component unmounts quickly
4. **Block: "start"**: Positions the form section at the top of the viewport
5. **No interference**: This scroll happens after the initial route-change scroll, so both work together seamlessly

