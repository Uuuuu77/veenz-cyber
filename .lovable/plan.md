

## Implementation Plan: Footer Navigation Fixes

### Overview
Based on my analysis, here's what needs to be fixed:

| Issue | Current State | Required Change |
|-------|---------------|-----------------|
| Footer "Home" link | Already functional with `<Link to="/">` and `ScrollToTopOnNavigation` | Verify functionality - likely already works |
| Branding & Merchandise image | Already implemented with `branding-merchandise.jpg` | Already complete |
| Footer "Online Services" links | All link to `/services` | Change to `/contact?service={slug}` |

---

### Task 1: Verify Footer "Home" Link (Already Working)

**Current Implementation:**
- The Home link uses `<Link to="/">` which is the correct React Router pattern
- The `ScrollToTopOnNavigation` component in Layout.tsx triggers scroll-to-top on every route change
- This should already be working correctly

**No changes needed** - The existing implementation is correct.

---

### Task 2: Branding & Merchandise Image (Already Complete)

**Current Implementation:**
- Image exists at `src/assets/services/branding-merchandise.jpg`
- It's imported and used in Services.tsx at line 43
- The `ServiceSectionHeader` component displays it at line 476-480

**No changes needed** - The image is already in place.

---

### Task 3: Update Footer "Online Services" Links

**Current State:**
All 6 links currently point to `/services`:
- Passport Applications
- KRA Services  
- HELB Applications
- NTSA Services
- Business Registration
- eCitizen Support

**Required Change:**
Update each link to navigate to the Contact page with the appropriate service pre-selected using URL parameters.

**File: `src/components/Footer.tsx`**

Lines 54-73 will be updated to:

```typescript
{/* Online Services */}
<div>
  <h4 className="font-semibold mb-4">Online Services</h4>
  <nav className="flex flex-col gap-2">
    <Link to="/contact?service=passport-application" className="text-sm text-background/70 hover:text-background transition-colors">
      Passport Applications
    </Link>
    <Link to="/contact?service=kra-services" className="text-sm text-background/70 hover:text-background transition-colors">
      KRA Services
    </Link>
    <Link to="/contact?service=helb-application" className="text-sm text-background/70 hover:text-background transition-colors">
      HELB Applications
    </Link>
    <Link to="/contact?service=ntsa-services" className="text-sm text-background/70 hover:text-background transition-colors">
      NTSA Services
    </Link>
    <Link to="/contact?service=business-registration" className="text-sm text-background/70 hover:text-background transition-colors">
      Business Registration
    </Link>
    <Link to="/contact?service=ecitizen-support" className="text-sm text-background/70 hover:text-background transition-colors">
      eCitizen Support
    </Link>
  </nav>
</div>
```

---

### Service Slug Mapping

| Footer Link | Service Slug | Matches ContactForm Option |
|-------------|--------------|---------------------------|
| Passport Applications | `passport-application` | Yes (line 44) |
| KRA Services | `kra-services` | Yes (line 47) |
| HELB Applications | `helb-application` | Yes (line 46) |
| NTSA Services | `ntsa-services` | Yes (line 52) |
| Business Registration | `business-registration` | Yes (line 48) |
| eCitizen Support | `ecitizen-support` | Yes (line 51) |

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/Footer.tsx` | Update 6 "Online Services" links from `/services` to `/contact?service={slug}` |

---

### User Flow After Implementation

1. User clicks "Passport Applications" in footer
2. Page navigates to `/contact?service=passport-application`
3. `ScrollToTopOnNavigation` scrolls page to top
4. `ContactForm` reads URL parameter and auto-selects "Passport Application Assistance"
5. User sees form with service already selected

---

### Technical Notes

1. **No hash fragments needed** - The current implementation uses query parameters (`?service=`) which the ContactForm already handles via `useSearchParams`
2. **Auto-scroll already works** - The `ScrollToTopOnNavigation` component triggers on pathname change, and query parameter changes also trigger this
3. **Form auto-selection works** - The ContactForm's `useEffect` already reads the `service` URL parameter and selects the matching option
4. **All slugs are valid** - Each slug used in the footer links matches an entry in the `serviceOptions` array in ContactForm

