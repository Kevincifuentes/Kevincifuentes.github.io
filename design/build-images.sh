#!/usr/bin/env bash
# Regenerates every shipped image from design/source.
# Requires ImageMagick 7, and pyftsubset for fonts.
set -euo pipefail
cd "$(dirname "$0")/.."

mkdir -p public/images/banner public/images/portrait

# Banner: 21:9 crop anchored east, warm duotone
for w in 1200 1800 2400; do
  magick design/source/banner.jpg -gravity east -crop 4032x1728+0+0 +repage \
    -colorspace Gray +level-colors '#241a13,#f3efe6' -resize "${w}x" -quality 84 \
    "public/images/banner/cern-2017-${w}.jpg"
  magick "public/images/banner/cern-2017-${w}.jpg" -quality 55 "public/images/banner/cern-2017-${w}.avif"
  magick "public/images/banner/cern-2017-${w}.jpg" -quality 78 "public/images/banner/cern-2017-${w}.webp"
done

# Open Graph card
magick design/source/banner.jpg -gravity east -crop 4032x2117+0+0 +repage \
  -resize '1200x630^' -gravity center -extent 1200x630 \
  -colorspace Gray +level-colors '#241a13,#f3efe6' -quality 86 public/images/og-card.jpg

# Portrait
for w in 400 800; do
  magick design/source/profile_kevin.jpeg -resize "${w}x${w}" -colorspace Gray -quality 85 \
    "public/images/portrait/kevin-${w}.jpg"
  magick "public/images/portrait/kevin-${w}.jpg" -quality 60 "public/images/portrait/kevin-${w}.avif"
  magick "public/images/portrait/kevin-${w}.jpg" -quality 80 "public/images/portrait/kevin-${w}.webp"
done

echo "images rebuilt"
