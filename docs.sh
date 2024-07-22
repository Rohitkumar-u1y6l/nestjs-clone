#!/bin/bash

# Define the target directory for the copied README files
target_dir="./docs"

# Check if the docs directory exists, if not, create it
if [ ! -d "$target_dir" ]; then
    mkdir -p "$target_dir"
fi

# Find and copy all README.md files to the docs directory
find . -type f -iname "README.md" -exec cp {} "$target_dir"/ \;