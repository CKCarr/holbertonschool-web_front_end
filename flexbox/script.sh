#!/bin/bash
for file in *index.html; do cp 0-index.html "$file"; done
for file in *article.html; do cp 10-article.html "$file"; done
for file in *styles.css; do cp 0-styles.css "$file"; done
