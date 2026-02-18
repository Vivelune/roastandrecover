// scripts/cleanup-sanity.ts
import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error('❌ Missing required environment variables:');
  console.error('NEXT_PUBLIC_SANITY_PROJECT_ID:', projectId ? '✅' : '❌');
  console.error('NEXT_PUBLIC_SANITY_DATASET:', dataset ? '✅' : '❌');
  console.error('SANITY_API_WRITE_TOKEN:', token ? '✅' : '❌');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function cleanupSanity() {
  console.log('🧹 Starting Sanity cleanup...');
  console.log(`📊 Project: ${projectId}, Dataset: ${dataset}`);

  try {
    // Delete all draft documents
    console.log('Checking for drafts...');
    const drafts = await client.fetch(`*[_id in path("drafts.**")]._id`);
    if (drafts.length > 0) {
      console.log(`Found ${drafts.length} drafts, deleting...`);
      const transaction = client.transaction();
      drafts.forEach((id: string) => transaction.delete(id));
      await transaction.commit();
      console.log(`✅ Deleted ${drafts.length} drafts`);
    } else {
      console.log('✅ No drafts found');
    }

    // Delete test orders (e.g., orders with test@example.com)
    console.log('\nChecking for test orders...');
    const testOrders = await client.fetch(`*[_type == "order" && email match "*test*"]._id`);
    if (testOrders.length > 0) {
      console.log(`Found ${testOrders.length} test orders, deleting...`);
      const transaction = client.transaction();
      testOrders.forEach((id: string) => transaction.delete(id));
      await transaction.commit();
      console.log(`✅ Deleted ${testOrders.length} test orders`);
    } else {
      console.log('✅ No test orders found');
    }

    // Delete test customers
    console.log('\nChecking for test customers...');
    const testCustomers = await client.fetch(`*[_type == "customer" && email match "*test*"]._id`);
    if (testCustomers.length > 0) {
      console.log(`Found ${testCustomers.length} test customers, deleting...`);
      const transaction = client.transaction();
      testCustomers.forEach((id: string) => transaction.delete(id));
      await transaction.commit();
      console.log(`✅ Deleted ${testCustomers.length} test customers`);
    } else {
      console.log('✅ No test customers found');
    }

    console.log('\n🎉 Cleanup complete!');
  } catch (error) {
    console.error('❌ Error during cleanup:', error);
  }
}

cleanupSanity();