"use client"

import React, {useEffect} from 'react';
import {getFirestore, doc, getDoc} from "@firebase/firestore";
import {app} from "@/app/Shared/firebaseConfig";

interface ProfileInterface {
    params: {
        userId: string;
    }
}
function Profile({params}: ProfileInterface) {
    const db = getFirestore(app)// TODO: use a singleton pattern to initialize your database connection. You don't need multiple connections per page

    useEffect(() => {
        const getUserInfo = async (email: string) => {
            const docRef = doc(db, "user", email);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        if (params) {
            const email = params.userId.replace('%40','@');
            getUserInfo(email)
        }
    }, [db, params]);


    return (
        <div>{params.userId.replace('%40','@')}</div>
    );
}

export default Profile;