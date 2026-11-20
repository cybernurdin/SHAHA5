---
name: ShaSha Designs
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#605e58'
  on-secondary: '#ffffff'
  secondary-container: '#e6e2d9'
  on-secondary-container: '#66645d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271900'
  on-tertiary-container: '#a17f3d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e6e2d9'
  secondary-fixed-dim: '#c9c6be'
  on-secondary-fixed: '#1c1c16'
  on-secondary-fixed-variant: '#484740'
  tertiary-fixed: '#ffdea6'
  tertiary-fixed-dim: '#e9c178'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5d4203'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
---

## Brand & Style
The design system embodies the intersection of Cameroonian heritage and global high-fashion couture. It is a minimalist-editorial framework designed to act as a silent gallery for high-resolution photography. The visual identity avoids clutter, using restraint to evoke a sense of exclusivity and timelessness.

The aesthetic leans heavily into **Minimalism** with a **High-Contrast** editorial edge. Large margins, ample whitespace (negative space), and a strict adherence to a grid create an atmosphere of order and luxury. The emotional response should be one of reverence, sophistication, and cultural pride.

## Colors
The palette is rooted in natural and traditional Cameroonian textures.
- **Obsidian (#0A0A0A):** The primary anchor. Used for typography, iconography, and deep-space backgrounds to create a sense of weight.
- **Ivory (#F7F3EA):** The canvas. Used as the primary background color to provide a warmer, more organic feel than pure white.
- **Heritage Gold (#B7934F):** Used sparingly for call-to-actions, borders of distinction, and subtle metallic accents.
- **Toghu Ember (#C65A2E):** A tribute to North-West Region textiles. Used as a high-visibility accent for seasonal highlights or limited edition alerts.
- **Cocoa (#2B211D):** A soft neutral used for secondary text or subtle dividers to maintain warmth without the harshness of black.

## Typography
The typographic hierarchy follows an editorial "Vogue-style" approach. 
- **Display & Headings:** Utilize **EB Garamond** (as the closest high-quality match for Cormorant Garamond style) to convey the classical couture heritage. It should be used for names of collections, lookbook titles, and hero statements.
- **Body & UI:** Utilize **Manrope** for its technical precision and modern balance. It ensures legibility for descriptions, prices, and navigation. 
- **Navigation & Labels:** Always use Manrope in Uppercase with generous letter spacing to maintain a clean, organized UI.

## Layout & Spacing
The design system utilizes a **fluid-to-fixed grid** model. 
- **Mobile (Base):** 4-column grid with 20px side margins. Content is primarily a single-column stack to prioritize large-scale vertical imagery.
- **Tablet:** 8-column grid with 40px margins.
- **Desktop:** 12-column grid with a maximum container width of 1440px and 80px margins to create a "letterbox" effect for cinematic impact.

Spacing follows an 8pt rhythm, but vertical section spacing should be aggressive (64px+) to allow the eye to rest between collection pieces.

## Elevation & Depth
In alignment with the minimalist luxury style, this design system rejects traditional drop shadows.
- **Flat Depth:** Depth is communicated through color blocking (Obsidian on Ivory) rather than shadows.
- **Ghost Borders:** Use ultra-thin (0.5px - 1px) borders in Heritage Gold or light Cocoa to define interactive regions without adding visual weight.
- **Layering:** Images may occasionally overlap slightly in a "scrapbook" editorial style, but the background remains a flat, tactile Ivory surface.

## Shapes
The shape language is **Sharp (0px roundedness)**. 
Every element—from buttons and input fields to image containers—must maintain hard 90-degree angles. This reflects the precision of couture tailoring and the architectural strength of contemporary African design. 
- **Exceptions:** No exceptions. Even "pills" or circular elements are avoided in favor of rectangular boxes.

## Components
- **Buttons:** Primary buttons are solid Obsidian with Ivory Manrope text in all-caps. Hover states should transition to Heritage Gold. Secondary buttons are transparent with a 1px Obsidian border.
- **Inputs:** Minimalist bottom-border only. Labels use the `label-caps` style positioned above the line.
- **Cards:** Product cards are borderless. The image should take 100% of the card width, with the product name in EB Garamond and price in Manrope centered or left-aligned below.
- **Navigation:** A persistent but minimal top bar. Use a thin "hamburger" or simple text links. The cart icon should be a simple geometric stroke.
- **Lookbook Slider:** A full-width horizontal scroll component where images bleed off the edge of the screen, encouraging discovery.
- **Dividers:** Horizontal lines should be used sparingly and should be 0.5px thick in Cocoa (#2B211D).