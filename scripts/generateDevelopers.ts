import fs from 'fs';
import path from 'path';

// This script will help generate the complete developers data
// Run with: npx tsx scripts/generateDevelopers.ts

const generateDeveloperData = () => {
  // Copy the existing developer data from the current page.tsx
  // This is a placeholder - you can run this script to extract and format the data
  
  const developersTemplate = `
import { Developer } from "../types/developer";

export const developers: Developer[] = [
  // All 50 developers will be here
  // This will be populated by copying from the existing page.tsx
];
`;

  const outputPath = path.join(process.cwd(), 'src/data/allDevelopers.ts');
  fs.writeFileSync(outputPath, developersTemplate);
  
  console.log('Developer data template generated at:', outputPath);
  console.log('Please copy the developer data from app/devs/page.tsx to this file');
};

if (require.main === module) {
  generateDeveloperData();
}

export default generateDeveloperData;
