import '@firebase/init';
import { getDatabase, ref, onValue } from 'firebase/database';

const db = getDatabase();

function get({
  table,
  callback,
}: {
  table: string;
  callback: (data: any) => void;
}) {
  onValue(ref(db, table), (snapshot) => {
    callback(snapshot.val());
  });
}

const RealtimeDatabase = {
  get,
};

export default RealtimeDatabase;
