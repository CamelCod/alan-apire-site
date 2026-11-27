"""Photo Editor workflow: original diagrams only; Pillow + ImageMagick, no facility photos."""
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "public/brand"
BRAND.mkdir(parents=True, exist_ok=True)

def export(image, folder, stem, sizes):
    image = ImageOps.exif_transpose(image).convert("RGB")
    clean = Image.new("RGB", image.size)
    clean.paste(image)  # New image, no inherited metadata.
    for width in sizes:
        height = round(clean.height * width / clean.width)
        clean.resize((width, height), Image.Resampling.LANCZOS).save(
            folder / f"{stem}-{width}.webp", quality=84, method=6
        )

# Abstract three-step workflow; deliberately not a real project drawing or signed deliverable.
hero = Image.new("RGB", (1280, 800), "#0b1930")
draw = ImageDraw.Draw(hero)
small = ImageFont.load_default(size=25)
for x in range(0, 1280, 40):
    draw.line((x, 0, x, 800), fill="#142740")
for y in range(0, 800, 40):
    draw.line((0, y, 1280, y), fill="#142740")
positions = [(70,210), (475,210), (880,210)]
labels = ["Dubai contact","Technical team","Document delivery"]
for (x,y), label in zip(positions,labels):
    draw.rounded_rectangle((x,y,x+330,y+330),radius=16,fill="#142d46",outline="#7096aa",width=3)
    draw.text((x+24,y+265),label,font=small,fill="#f2f4f6")
    draw.rounded_rectangle((x+75,y+40,x+255,y+220),radius=5,fill="#f2f4f6")
    for n in range(4):
        draw.line((x+100,y+75+n*31,x+230-n*8,y+75+n*31),fill="#597387",width=7)
for x,y in [(415,375),(820,375)]:
    draw.line((x-16,y,x+40,y),fill="#efbf6c",width=6)
    draw.polygon([(x+48,y),(x+30,y-11),(x+30,y+11)],fill="#efbf6c")
draw.text((90,710),"Illustrative",font=small,fill="#c2d2df")
export(hero,BRAND,"partner-workflow",[480,768,1280])
hero.save(BRAND/"partner-network.webp",quality=84,method=6)

print("Prepared four metadata-stripped workflow WebPs. Project images are the supplied files, not generated artwork.")
