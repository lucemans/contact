#!/bin/sh

for file in *.png
do
    cwebp -q 0 ./"$file" -o - -resize 40 40 >> ./"${file%.*}".webp
done
