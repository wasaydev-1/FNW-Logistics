const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const outputDir = path.dirname(filePath);
  
  try {
    // Create WebP version
    await sharp(filePath)
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${fileName}.webp`));
    
    // Create AVIF version
    await sharp(filePath)
      .avif({ quality: 80 })
      .toFile(path.join(outputDir, `${fileName}.avif`));
    
    // Optimize original JPEG
    if (path.extname(filePath).toLowerCase() === '.jpg' || path.extname(filePath).toLowerCase() === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(path.join(outputDir, `${fileName}_optimized.jpg`));
    }
    
    console.log(`✅ Optimized: ${fileName}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${fileName}:`, error.message);
  }
}

async function optimizeImages() {
  console.log('🚀 Starting image optimization...');
  
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );
  
  console.log(`Found ${imageFiles.length} images to optimize:`);
  imageFiles.forEach(file => console.log(`  - ${file}`));
  
  for (const file of imageFiles) {
    const filePath = path.join(publicDir, file);
    await optimizeImage(filePath);
  }
  
  console.log('🎉 Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update your components to use .webp images');
  console.log('2. Add fallbacks for browsers that don\'t support WebP');
  console.log('3. Consider using Next.js Image component with automatic format selection');
}

optimizeImages().catch(console.error);
