import os
import re
import glob

# Get all tsx files
files = glob.glob("*.tsx")

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    # Fix all patterns where Link components have wrong closing tags
    # Pattern 1: Internal Link with /contact that has </a> instead of </Link>
    content = re.sub(
        r'(<Link href="/[^"]*">[^<]*<Button[^>]*>[^<]*</Button>\s*)</a>',
        r'\1</Link>',
        content,
        flags=re.DOTALL
    )
    
    # Write back to file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Fixed {file}")
    
print("All files processed")
