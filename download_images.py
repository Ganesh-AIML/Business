import os
import urllib.request
import urllib.parse

images = [
    ("hero-cityscape.jpg", "premium modern Mumbai cityscape skyline with glass high-rise buildings aerial view", 1200, 800),
    ("car-hero.jpg", "luxury corporate car fleet lineup side view professional automotive photography dark background", 1200, 800),
    ("sedan.jpg", "white executive sedan car side profile studio shot professional automotive photography", 1200, 800),
    ("suv.jpg", "dark premium SUV MPV car side profile studio shot professional automotive photography", 1200, 800),
    ("luxury-car.jpg", "black luxury sedan car front three-quarter angle studio shot professional automotive photography", 1200, 800),
    ("community.jpg", "diverse group of people community gathering social event professional photography", 1200, 800),
    ("logistics.jpg", "corporate fleet logistics cars driving on modern highway aerial view professional photography", 1200, 800),
    ("mentorship.jpg", "business mentorship professional meeting two people in modern office discussion", 1200, 800),
    ("flat-2bhk.jpg", "modern spacious apartment living room interior with natural light minimalist design", 1200, 800),
    ("office-space.jpg", "modern corporate open plan office interior workspace with glass partitions professional photography", 1200, 800),
    ("studio-1bhk.jpg", "compact modern studio apartment interior minimalist design with kitchen area", 1200, 800),
    ("audi-a6.jpg", "Audi A6 luxury sedan white side profile professional automotive photography", 1200, 800),
    ("innova-crysta.jpg", "Toyota Innova Crysta MPV silver side profile professional automotive photography", 1200, 800),
    ("bmw-5-series.jpg", "BMW 5 Series luxury sedan dark blue front three-quarter angle professional automotive photography", 1200, 800),
    ("mercedes-gle.jpg", "Mercedes GLE premium SUV black side profile professional automotive photography", 1200, 800),
    ("toyota-fortuner.jpg", "Toyota Fortuner SUV dark grey side profile professional automotive photography", 1200, 800),
    ("hyundai-tucson.jpg", "Hyundai Tucson SUV white front three-quarter angle professional automotive photography", 1200, 800),
    ("avatar-james.jpg", "professional headshot man 30s business attire neutral background corporate portrait", 800, 800),
    ("avatar-sarah.jpg", "professional headshot woman 30s business attire neutral background corporate portrait", 800, 800),
    ("avatar-david.jpg", "professional headshot man 40s business attire neutral background corporate portrait", 800, 800),
    ("avatar-marcus.jpg", "professional headshot man 30s business casual neutral background corporate portrait", 800, 800),
]

target_dir = os.path.join(os.getcwd(), "src", "assets")
os.makedirs(target_dir, exist_ok=True)

success_count = 0

for filename, prompt, width, height in images:
    encoded_prompt = urllib.parse.quote(prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width={width}&height={height}&nologo=true"
    target_path = os.path.join(target_dir, filename)
    
    try:
        urllib.request.urlretrieve(url, target_path)
        print(f"- Filename: {filename}\n- Source: {url}\n- Dimensions: {width}x{height}\n- Status: SUCCESS\n")
        success_count += 1
    except Exception as e:
        print(f"- Filename: {filename}\n- Source: {url}\n- Dimensions: {width}x{height}\n- Status: FAILED ({e})\n")

print(f"SUMMARY: {success_count}/21 images downloaded successfully.")
