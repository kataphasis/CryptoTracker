import { createContext, useState, useEffect, useContext } from "react"
import { getFirestore, getDoc, getDocs, collection, doc, addDoc, Timestamp, orderBy, query, collectionGroup } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [cryptos, setCryptos] = useState([])
    const { user } = useContext(AuthContext)

    const db = getFirestore()

    useEffect(() => {
        const getCryptos = async() => {
            if (!user.loggedIn) 
                return 
            const collectionRef = collection(db, "users", user.id, "cryptos")
            const collectionSnap = await getDocs(collectionRef)
            
            

            let cryptoArr = []

            collectionSnap.forEach((docSnap) => {
                cryptoArr.push({
                    ...docSnap.data(),
                    id: docSnap.id,
                    // Get reference to document, get reference to posts subcollection, then get reference to the user document
                    // Then get the user document's ID
                    uid: docSnap.ref.parent.parent.id 
                })
            })

            console.log(cryptoArr)

            setCryptos(cryptoArr)
        }
        getCryptos()
    }, [user.loggedIn])


    const addCrypto = async(coin) => {
        if (!user.loggedIn) {
            alert("Please login before adding a crypto!")
            throw new Error("You can't add a crypto if you're not logged in.")
        }
        
        const newCrypto = {
            ...coin, 
            uid: user.id,
            dateCreated: Timestamp.now()
        }

        const docRef = await addDoc(collection(db, "users", user.id, "cryptos"), newCrypto)

        newCrypto.id = docRef.id

        setCryptos([newCrypto, ...cryptos])

        console.log(docRef)
        console.log("New crypto added to your collection!", docRef.id)
        console.log(test)
    }

    const values = {
        cryptos,
        addCrypto
    }

    return (
        <DataContext.Provider value={values}>
            { props.children }
        </DataContext.Provider>
    )
}