import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase/firebase.config";
import {
  doc,
  getDoc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      // 1️⃣ Avval uid orqali o‘qib ko‘ramiz (future-proof)
      const uidDoc = doc(db, "users", firebaseUser.uid);
      const uidSnap = await getDoc(uidDoc);

      let role;

      if (uidSnap.exists()) {
        role = uidSnap.data().role;
      } else {
        // 2️⃣ Agar uid emas, email orqali qidiramiz (sen auto-id bilan yaratgansan)
        const q = query(
          collection(db, "users"),
          where("email", "==", firebaseUser.email),
        );
        const snap = await getDocs(q);

        if (!snap.empty) {
          role = snap.docs[0].data().role;
        }
      }

      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        role: role,
      });

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
