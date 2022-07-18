import { async } from "@firebase/util";
import { initializeApp} from "firebase/app"
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDVfMPCCyfk81Uv6YN0j87QCweMTm-nq2I",
    authDomain: "meals-8f81d.firebaseapp.com",
    databaseURL: "https://meals-8f81d-default-rtdb.firebaseio.com",
    projectId: "meals-8f81d",
    storageBucket: "meals-8f81d.appspot.com",
    messagingSenderId: "965204019571",
    appId: "1:965204019571:web:1f0a20e82b79c5db7bdd06",
    measurementId: "G-9234N9DX0P"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
// provider.setCustomParameters({
//     prompt: "'consent'"
// })

export const auth= getAuth(app)
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)

export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, provider)

export const db = getFirestore(app)

export const addCollectionAndDocumnets = async (collectionKey, objectsToAdd)=>{
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objectsToAdd.forEach(obj=>{
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    })
    await batch.commit()
}

export const getCategoriesAndDocuments = async(collectionKey)=>{
    const collectionRef = collection(db, collectionKey)
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot)=>{
        const {title, items} = docSnapShot.data()
        acc[title.toLowerCase()] = items
        return acc
    },{})

    return categoryMap
}
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) =>{
    if(!userAuth) return
    
    const userDocRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createAt = new Date()
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            })
        }catch(err){
            console.log("error creating the user", err.message);
        }
    }

    return userDocRef

    //if user data exists

    //if doesn't exist
    //return userDocRef
}


export const createAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async()=> await signOut(auth)

export const onAuthStateChangedListenser = (callback)=>onAuthStateChanged(auth, callback)
