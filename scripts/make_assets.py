"""Generates public/assets/icon.png (1024) and og.png (1200x630). Run: python3 scripts/make_assets.py [AppName]"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = Path(__file__).resolve().parent.parent / "public" / "assets"
NAME = sys.argv[1] if len(sys.argv) > 1 else "Stridea"
TOP, BOTTOM = (62, 142, 255), (12, 74, 224)
SS = 4  # supersampling


def gradient(w, h, top=TOP, bottom=BOTTOM):
    img = Image.new("RGB", (w, h))
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = min(1.0, max(0.0, (y / h) * 0.8 + (x / w) * 0.2))
            px[x, y] = tuple(round(top[i] + (bottom[i] - top[i]) * t) for i in range(3))
    return img


def footprint(size, color=(255, 255, 255, 255)):
    """A shoe-print glyph (sole + heel) on a transparent square, drawn at `size` px."""
    s = size * SS
    layer = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    # Sole: wide rounded oval; heel: smaller rounded block under it.
    d.ellipse((0.30 * s, 0.06 * s, 0.70 * s, 0.62 * s), fill=color)
    d.rounded_rectangle((0.34 * s, 0.36 * s, 0.66 * s, 0.64 * s), radius=0.10 * s, fill=color)
    d.rounded_rectangle((0.36 * s, 0.70 * s, 0.64 * s, 0.94 * s), radius=0.13 * s, fill=color)
    return layer.resize((size, size), Image.LANCZOS)


def glyph(size):
    """Two footprints, mid-stride."""
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    foot = int(size * 0.62)
    left = footprint(foot).rotate(12, resample=Image.BICUBIC, expand=True)
    right = footprint(foot, (255, 255, 255, 215)).rotate(-12, resample=Image.BICUBIC, expand=True)
    canvas.alpha_composite(left, (int(size * 0.02), int(size * 0.30)))
    canvas.alpha_composite(right, (int(size * 0.36), int(size * 0.02)))
    return canvas


def icon(size=1024):
    base = gradient(size // 4, size // 4).resize((size, size), Image.BICUBIC).convert("RGBA")
    # Soft highlight, top left.
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse((-size * 0.3, -size * 0.45, size * 0.8, size * 0.45), fill=(255, 255, 255, 46))
    base.alpha_composite(glow.filter(ImageFilter.GaussianBlur(size * 0.08)))
    g = glyph(int(size * 0.66))
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    offset = (int(size * 0.135), int(size * 0.152))
    shadow.paste((8, 40, 130, 90), (offset[0], offset[1] + int(size * 0.02)), g)
    base.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(size * 0.02)))
    base.alpha_composite(g, offset)
    # Rounded-square mask (the site also rounds it with CSS; this keeps the favicon tidy).
    mask = Image.new("L", (size * 2, size * 2), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size * 2, size * 2), radius=int(size * 2 * 0.225), fill=255)
    base.putalpha(mask.resize((size, size), Image.LANCZOS))
    return base


def font(size, bold=True):
    for path, index in (("/System/Library/Fonts/SFNSRounded.ttf", 0), ("/System/Library/Fonts/SFNS.ttf", 0),
                        ("/System/Library/Fonts/Helvetica.ttc", 1 if bold else 0)):
        try:
            f = ImageFont.truetype(path, size, index=index)
            try:
                f.set_variation_by_name("Bold" if bold else "Regular")
            except Exception:
                pass
            return f
        except Exception:
            continue
    return ImageFont.load_default()


def og(app_icon):
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), (244, 247, 253)).convert("RGBA")
    blobs = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(blobs)
    d.ellipse((700, -260, 1400, 440), fill=(20, 99, 255, 70))
    d.ellipse((-260, 330, 380, 900), fill=(52, 199, 89, 46))
    img.alpha_composite(blobs.filter(ImageFilter.GaussianBlur(110)))
    d = ImageDraw.Draw(img)
    ic = app_icon.resize((132, 132), Image.LANCZOS)
    img.alpha_composite(ic, (90, 96))
    d.text((246, 116), NAME, font=font(84), fill=(11, 18, 32))
    d.text((90, 290), "Every step, every walk,", font=font(62), fill=(11, 18, 32))
    d.text((90, 366), "every heartbeat.", font=font(62), fill=(20, 99, 255))
    d.text((90, 480), "Step counter and walk tracker for iPhone.", font=font(32, False), fill=(75, 85, 105))
    d.text((90, 524), "Connected to Apple Health. No account, no ads.", font=font(32, False), fill=(75, 85, 105))
    # Goal ring on the right.
    ring = Image.new("RGBA", (360 * SS, 360 * SS), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    box = (30 * SS, 30 * SS, 330 * SS, 330 * SS)
    rd.ellipse((10 * SS, 10 * SS, 350 * SS, 350 * SS), fill=(255, 255, 255, 255))
    rd.arc(box, 0, 360, fill=(226, 234, 250, 255), width=30 * SS)
    rd.arc(box, -90, 213, fill=(20, 99, 255, 255), width=30 * SS)
    ring = ring.resize((360, 360), Image.LANCZOS)
    img.alpha_composite(ring, (770, 135))
    d = ImageDraw.Draw(img)
    d.text((950, 300), "8,426", font=font(72), fill=(11, 18, 32), anchor="mm")
    d.text((950, 356), "steps", font=font(28, False), fill=(110, 120, 140), anchor="mm")
    return img.convert("RGB")


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    app_icon = icon()
    app_icon.save(OUT / "icon.png", optimize=True)
    og(app_icon).save(OUT / "og.png", optimize=True)
    print("wrote", OUT / "icon.png", OUT / "og.png")
