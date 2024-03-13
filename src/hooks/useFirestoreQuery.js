import { onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";

export const useFirestoreQuery = (collectionRef, conditions, setDataCallback) => {
    useEffect(() => {
        const queryMessage = query(collectionRef, ...conditions);
        const unsubscribe = onSnapshot(queryMessage, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setDataCallback(messages);
        });

        return () => unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
