#!/bin/bash

# Script to check TypeScript errors without blocking the build process

echo "Running TypeScript type checking..."

# Use tsc to perform type checking without emitting files
if npx tsc --noEmit; then
  echo "✅ TypeScript check passed. No type errors found."
  exit 0
else
  echo "❗ TypeScript check found errors."
  echo "These errors are reported for awareness but won't block the build process."
  echo "Please fix them when possible to improve code quality."
  echo "------------------------------------------------------------------------------"
  exit 0  # Still exit with 0 to not block the build process
fi