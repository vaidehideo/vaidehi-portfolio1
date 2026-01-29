from PIL import Image
import os

input_path = "/home/ubuntu/upload/IMG_7747.jpg"
output_path = "/home/ubuntu/vaidehi-portfolio/client/public/images/profile-pic.jpg"

# Ensure directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with Image.open(input_path) as img:
    print(f"Original dimensions: {img.size}")
    
    # Calculate crop box for a square portrait focusing on the face/upper body
    # The image is portrait orientation. We want to crop a square from the center-top.
    width, height = img.size
    
    # Determine the size of the square crop (use the full width)
    crop_size = min(width, height)
    
    # Calculate coordinates
    # Center horizontally
    left = (width - crop_size) // 2
    # Align to top (to capture head/shoulders), but maybe add a little offset if needed.
    # Given the description "face/upper body", top alignment usually works well for portrait photos.
    # Let's take a square from the top-center.
    top = 0
    right = left + crop_size
    bottom = top + crop_size
    
    # If the bottom exceeds height (unlikely for portrait), adjust
    if bottom > height:
        bottom = height
        top = height - crop_size
        
    print(f"Cropping box: {left}, {top}, {right}, {bottom}")
    
    cropped_img = img.crop((left, top, right, bottom))
    
    # Resize for web optimization (e.g., 800x800 is plenty for a profile pic)
    cropped_img = cropped_img.resize((800, 800), Image.Resampling.LANCZOS)
    
    cropped_img.save(output_path, quality=90)
    print(f"Saved cropped image to {output_path}")
