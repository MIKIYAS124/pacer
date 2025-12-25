const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const images = [
    '20250830_135231.jpg',
    '20250830_135235.jpg',
    '20250830_135245.jpg',
    '20250830_135546.jpg',
    'chia seed mockup green.png',
    'chia seed mockup purple.png',
    'purple back.png',
    'purple final front.png'
];

async function compress() {
    for (const img of images) {
        const filePath = path.join(publicDir, img);
        if (fs.existsSync(filePath)) {
            const ext = path.extname(img).toLowerCase();
            const tmpPath = filePath + '.tmp';

            console.log(`Compressing ${img}...`);

            try {
                if (ext === '.jpg' || ext === '.jpeg') {
                    await sharp(filePath)
                        .jpeg({ quality: 80, mozjpeg: true })
                        .toFile(tmpPath);
                } else if (ext === '.png') {
                    await sharp(filePath)
                        .png({ quality: 80, compressionLevel: 9 })
                        .toFile(tmpPath);
                }

                fs.renameSync(tmpPath, filePath);
                console.log(`Done: ${img}`);
            } catch (err) {
                console.error(`Error compressing ${img}:`, err);
            }
        }
    }
}

compress();
