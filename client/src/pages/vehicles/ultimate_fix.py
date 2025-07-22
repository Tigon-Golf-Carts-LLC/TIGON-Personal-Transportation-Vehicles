import os
import re
import glob

def fix_vehicle_file(filename):
    """Fix all Link/a tag mismatches in a vehicle file"""
    with open(filename, 'r') as f:
        content = f.read()
    
    # Pattern 1: Link components with wrong closing </a> tags
    pattern1 = r'(<Link href="/[^"]*">\s*<Button[^>]*>.*?</Button>\s*)</a>'
    content = re.sub(pattern1, r'\1</Link>', content, flags=re.DOTALL)
    
    # Pattern 2: Specifically fix contact links
    pattern2 = r'(<Link href="/contact">\s*<Button[^>]*>.*?</Button>\s*)</a>'
    content = re.sub(pattern2, r'\1</Link>', content, flags=re.DOTALL)
    
    # Pattern 3: Fix any remaining mismatches
    pattern3 = r'(<Link[^>]*>\s*<Button[^>]*>.*?</Button>\s*)</a>'
    content = re.sub(pattern3, r'\1</Link>', content, flags=re.DOTALL)
    
    with open(filename, 'w') as f:
        f.write(content)
    print(f"Fixed {filename}")

# Get all tsx files and fix them
files = glob.glob("*.tsx")
for file in files:
    fix_vehicle_file(file)

print("Ultimate fix completed for all files")
