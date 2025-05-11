// This script migrates the database schema
console.log('Pushing database schema...');

const { execSync } = require('child_process');

try {
  // Execute the drizzle-kit push command
  execSync('npm run db:push', { stdio: 'inherit' });
  console.log('Database schema migration completed successfully!');
} catch (error) {
  console.error('Failed to migrate database schema:', error.message);
  process.exit(1);
}