#!/bin/sh

for file in *.png
do
    []
    cwebp -q 0 ./"$file" -o - -resize 10 10 >> ./"${file%.*}".webp
done
