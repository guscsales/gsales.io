import '@firebase/init';
import {
  getFirestore,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore';

const db = getFirestore();

async function updateById({
  table,
  id,
  data,
}: {
  table: string;
  id: string;
  data: any;
}) {
  const docRef = doc(db, table, id);

  await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
}

async function findById({ table, id }: { table: string; id: string }) {
  try {
    const docRef = doc(db, table, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (e) {
    console.log(e.message);
  }

  return null;
}

const Database = {
  updateById,
  findById,
};

export default Database;
