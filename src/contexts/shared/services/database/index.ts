import '@firebase/init';
import {
  getFirestore,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  addDoc,
  collection,
  query,
  orderBy,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore();

type Options = {
  includeEnvironmentSuffix?: boolean;
};

async function updateById({
  table,
  id,
  data,
  options: { includeEnvironmentSuffix } = { includeEnvironmentSuffix: true },
}: {
  table: string;
  id: string;
  data: any;
  options?: Options;
}) {
  const tableName = includeEnvironmentSuffix
    ? `${table}_${process.env.NEXT_PUBLIC_FIREBASE_TABLE_SUFFIX}`
    : table;
  const docRef = doc(db, tableName, id);

  await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
}

async function findById({
  table,
  id,
  options: { includeEnvironmentSuffix },
}: {
  table: string;
  id: string;
  options: Options;
}) {
  try {
    const tableName = includeEnvironmentSuffix
      ? `${table}_${process.env.NEXT_PUBLIC_FIREBASE_TABLE_SUFFIX}`
      : table;
    const docRef = doc(db, tableName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (e) {
    console.log(e.message);
  }

  return null;
}

async function create({
  table,
  data,
  options: { includeEnvironmentSuffix } = { includeEnvironmentSuffix: true },
}: {
  table: string;
  data: any;
  options?: Options;
}) {
  const tableName = includeEnvironmentSuffix
    ? `${table}_${process.env.NEXT_PUBLIC_FIREBASE_TABLE_SUFFIX}`
    : table;

  await addDoc(collection(db, tableName), {
    ...data,
    createdAtFirestore: serverTimestamp(),
  });
}

async function getAll({
  table,
  constraints,
  options: { includeEnvironmentSuffix } = { includeEnvironmentSuffix: true },
}: {
  table: string;
  constraints?: { orderBy?: { column: string; direction: 'desc' | 'asc' } };
  options?: Options;
}) {
  const tableName = includeEnvironmentSuffix
    ? `${table}_${process.env.NEXT_PUBLIC_FIREBASE_TABLE_SUFFIX}`
    : table;

  const queryConstaints = [];

  if (orderBy) {
    queryConstaints.push(
      orderBy(constraints.orderBy.column, constraints.orderBy.direction)
    );
  }

  const q = query(collection(db, tableName), ...queryConstaints);
  const querySnapshot = await getDocs(q);
  const response = [];

  querySnapshot.forEach((document) => {
    const data = document.data();
    response.push({ id: document.id, ...data });
  });

  return response;
}

async function remove({
  table,
  id,
  options: { includeEnvironmentSuffix } = { includeEnvironmentSuffix: true },
}: {
  table: string;
  id: string;
  options?: Options;
}) {
  const tableName = includeEnvironmentSuffix
    ? `${table}_${process.env.NEXT_PUBLIC_FIREBASE_TABLE_SUFFIX}`
    : table;

  await deleteDoc(doc(db, tableName, id));
}

const Database = {
  updateById,
  findById,
  create,
  getAll,
  remove,
};

export default Database;
