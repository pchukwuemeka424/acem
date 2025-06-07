#!/bin/bash

# Script to fix common ESLint errors related to unescaped entities

# Find all files with React components
find ./src -name "*.tsx" | while read -r file; do
  echo "Processing $file..."
  
  # Replace common unescaped entities
  sed -i '' "s/we've/we've/g" "$file"
  sed -i '' "s/can't/can&apos;t/g" "$file"
  sed -i '' "s/don't/don&apos;t/g" "$file"
  sed -i '' "s/didn't/didn&apos;t/g" "$file"
  sed -i '' "s/won't/won&apos;t/g" "$file"
  sed -i '' "s/wouldn't/wouldn&apos;t/g" "$file"
  sed -i '' "s/couldn't/couldn&apos;t/g" "$file"
  sed -i '' "s/shouldn't/shouldn&apos;t/g" "$file"
  sed -i '' "s/isn't/isn&apos;t/g" "$file"
  sed -i '' "s/aren't/aren&apos;t/g" "$file"
  sed -i '' "s/wasn't/wasn&apos;t/g" "$file"
  sed -i '' "s/weren't/weren&apos;t/g" "$file"
  sed -i '' "s/we're/we&apos;re/g" "$file"
  sed -i '' "s/they're/they&apos;re/g" "$file"
  sed -i '' "s/you're/you&apos;re/g" "$file"
  sed -i '' "s/it's/it&apos;s/g" "$file"
  sed -i '' "s/I'm/I&apos;m/g" "$file"
  sed -i '' 's/"/&quot;/g' "$file"
done

echo "All common unescaped entities have been fixed."
