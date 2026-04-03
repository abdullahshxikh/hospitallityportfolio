# Assets Folder

Drop all slide images here. They are served from `/public/` in Next.js,
so the URL paths used in code start with `/assets/...`

## Structure

```
public/assets/
├── hero.png                    ← cover/hero image (slide 1)
│
├── unit1/                      ← Safety unit images
│   └── whmis.png               ← WHMIS symbols chart
│
├── unit2/                      ← Quick/Yeast Breads images
│   └── pancakes.png            ← Shrove Tuesday pancakes photo
│
├── unit3/                      ← Potatoes & Grains images
│   └── (drop your images here)
│
└── unit4/                      ← Sandwiches images
    └── (drop your images here)
```

## How to add an image to a slide

1. Drop the image file into the correct unit folder above
2. In the slide file, reference it like this:

```tsx
import Image from "next/image";

// Then inside the JSX:
<Image
  src="/assets/unit2/your-image.png"
  alt="Description of image"
  fill
  className="object-cover"
/>
```

The path always starts with `/assets/` (no `public` prefix needed).
