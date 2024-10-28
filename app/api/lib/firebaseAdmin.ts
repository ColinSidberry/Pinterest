import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export const db = admin.firestore();

export async function createUserIfNotExists(user: { id: string; email: string; name?: string }) {
  const userRef = db.collection('users').doc(user.id);
  const doc = await userRef.get();

  if (!doc.exists) {
    await userRef.set({
      email: user.email,
      name: user.name || '',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log(`New user created with ID: ${user.id}`);
  }
}