const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const outputDir = path.dirname(filePath);
  
  try {
    const stats = await fs.promises.stat(filePath);
    const originalSize = stats.size;
    
    // Create optimized JPEG version
    if (path.extname(filePath).toLowerCase() === '.jpg' || path.extname(filePath).toLowerCase() === '.jpeg') {
      await sharp(filePath)
        .jpeg({ 
          quality: 85, 
          progressive: true,
          mozjpeg: true 
        })
        .toFile(path.join(outputDir, `${fileName}_optimized.jpg`));
    }
    
    // Create optimized PNG version
    if (path.extname(filePath).toLowerCase() === '.png') {
      await sharp(filePath)
        .png({ 
          quality: 85,
          progressive: true,
          compressionLevel: 9
        })
        .toFile(path.join(outputDir, `${fileName}_optimized.png`));
    }
    
    console.log(`✅ Optimized: ${fileName} (${(originalSize / 1024).toFixed(1)}KB)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${fileName}:`, error.message);
  }
}

async function optimizeImages() {
  console.log('🚀 Starting local image optimization...');
  
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
  
  console.log('🎉 Local image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Replace original images with optimized versions');
  console.log('2. Next.js will automatically serve WebP/AVIF formats');
  console.log('3. Images will load faster on both dev and production');
}

optimizeImages().catch(console.error);
