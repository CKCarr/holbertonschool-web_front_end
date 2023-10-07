#!/bin/bash

# Loop to create HTML files from 0 to 9
for i in {0..9}; do
    touch "${i}-index.html"
done

# Loop to create CSS files from 0 to 14
for i in {0..14}; do
    touch "${i}-styles.css"
done

# Loop to create Article files from 10 to 14
for i in {10..14}; do
    touch "${i}-article.html"
done
