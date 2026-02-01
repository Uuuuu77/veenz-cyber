

## Implementation Plan: Clickable Home Service Cards & Scroll to Top on Navigation

### Overview
This plan implements two improvements:
1. Make the 4 service cards on the Home page clickable, linking to the contact form with pre-selected services
2. Add automatic scroll-to-top behavior when navigating between pages

---

### Task 1: Make Home Page Service Cards Clickable

**Current State:**
- The `quickServices` array in `src/pages/Index.tsx` has 4 service cards
- The `ServiceCard` component already supports `serviceSlug` and `showGetStarted` props (added in previous implementation)
- The contact form already reads URL parameters and auto-selects services

**Solution:**
Add `serviceSlug` and `showGetStarted: true` to each service in the `quickServices` array

**Changes to `src/pages/Index.tsx`:**

```typescript
const quickServices = [
  {
    icon: FileText,
    title: "Online Application Assistance",
    description: "eCitizen, KRA, HELB, NTSA, Passport & more government services",
    variant: "accent" as const,
    image: onlineServicesImg,
    serviceSlug: "ecitizen-support",      // ADD
    showGetStarted: true,                  // ADD
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, posters, certificates, brochures & branding materials",
    variant: "primary" as const,
    image: designServicesImg,
    serviceSlug: "logo-design",           // ADD
    showGetStarted: true,                  // ADD
  },
  {
    icon: Printer,
    title: "Printing Services",
    description: "Documents, banners, business cards & large format printing",
    variant: "primary" as const,
    image: printingServicesImg,
    serviceSlug: "document-printing",     // ADD
    showGetStarted: true,                  // ADD
  },
  {
    icon: Shield,
    title: "Branding & Merchandise",
    description: "Custom t-shirts, mugs, caps & corporate gifts",
    variant: "accent" as const,
    image: brandingServicesImg,
    serviceSlug: "tshirt-branding",       // ADD
    showGetStarted: true,                  // ADD
  },
];
```

**User Flow:**
1. User visits Home page
2. Sees 4 service cards with "Get Started" links
3. Clicks "Get Started" on any card
4. Redirected to `/contact?service={slug}`
5. Contact form loads with the service pre-selected

---

### Task 2: Scroll to Top on Navigation

**Current State:**
- There is a `ScrollToTop` component in `src/components/ScrollToTop.tsx`, but it's a **floating button** that appears when the user scrolls down
- This button should NOT be modified (as per requirements)
- Currently, navigating between pages does not scroll to top

**Solution:**
Create a new `ScrollToTopOnNavigation` component that uses React Router's `useLocation` hook to detect route changes and automatically scrolls to top

**New File: `src/components/ScrollToTopOnNavigation.tsx`**

```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTopOnNavigation() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use instant for immediate response
    });
  }, [pathname]);

  return null; // This component doesn't render anything
}
```

**Update `src/components/Layout.tsx`:**

```typescript
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { ScrollToTop } from "./ScrollToTop";
import { ScrollToTopOnNavigation } from "./ScrollToTopOnNavigation";  // ADD

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTopOnNavigation />  {/* ADD - invisible, triggers on route change */}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />  {/* Existing floating button - unchanged */}
    </div>
  );
};

export default Layout;
```

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Add `serviceSlug` and `showGetStarted` to quickServices array |
| `src/components/ScrollToTopOnNavigation.tsx` | **NEW FILE** - Auto scroll on route change |
| `src/components/Layout.tsx` | Import and use `ScrollToTopOnNavigation` component |

---

### Technical Notes

1. **No Header/Footer Changes Needed**: The scroll-to-top behavior is handled at the Layout level, so all navigation links (header, footer, and any other page links) automatically trigger the scroll
2. **Instant vs Smooth Scroll**: Using `behavior: "instant"` for route changes provides immediate feedback. The existing floating button uses `behavior: "smooth"` for manual scrolling
3. **Separation of Concerns**: The new component is separate from the existing `ScrollToTop` button, keeping the codebase clean and maintaining single responsibility
4. **Backward Compatibility**: All existing functionality remains intact
5. **Mobile Menu Compatibility**: The mobile menu closes on navigation (already implemented in Header.tsx), and the new scroll behavior doesn't interfere with it

---

### Expected User Experience

**Service Card Flow:**
- Home page service cards now have "Get Started" links
- Clicking redirects to contact page with service pre-selected
- User can fill remaining form fields and submit via WhatsApp

**Navigation Scroll:**
- User scrolls down on Home page
- Clicks "About" in header or footer
- Page navigates to About and immediately scrolls to top
- Works for all navigation links across the site

