import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnnw9qqms0o_CxGR7VlQ8b23qNXopXQh0",
  authDomain: "hmbiz-8fa65.firebaseapp.com",
  projectId: "hmbiz-8fa65",
  storageBucket: "hmbiz-8fa65.appspot.com",
  messagingSenderId: "530896060024",
  appId: "1:530896060024:web:0fb32837d64a95e6c8778d"
};
  const app = initializeApp(firebaseConfig);
 
  //   import {
  //     ref,
  //     uploadBytesResumable,
  //     getDownloadURL,
  //     getMetadata,
  //   } from "firebase/storage";
  import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
  import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
    setDoc,
    getDoc,
    where,
    query,
    orderBy,
    getDocs,
    onSnapshot,
    getFirestore,
  } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
  const db = getFirestore();


  
 let application = Vue.createApp({
    data: function() {
  return {
      products: [],
      newTask: [],
      myInput2: 'vivi',
      name: "",
      img: "",
      desc: "",
      prize: "",
      categaory: "",
      output: [{
        player: 'vivek',
        monster: 'st',
      },
      {
        player: 'vivek1',
        monster: 'st1',
      },
      {
        player: 'vivek2',
        monster: 'st3',
      },
    ]
  }
},
methods: {
    hello() {
        alert("hii");
    },
      async addfire() {
        // console.log(this.name , this.img , this.desc , this.prize, this.categaory);
        const docRef = await addDoc(collection(db, "populardish"), {
          product_name: this.name,
          product_image: this.img,
          product_decription: this.desc,
          product_prize: this.prize,
          category: this.categaory,
          timestamp: serverTimestamp(),
        });
        console.log("added");
      },
      async addproduct() {
        // console.log(this.name , this.img , this.desc , this.prize, this.categaory);
        const docRef = await addDoc(collection(db, "products"), {
          product_name: this.name,
          product_image: this.img,
          product_decription: this.desc,
          product_prize: this.prize,
          category: this.categaory,
          timestamp: serverTimestamp(),
        });
        console.log("added");
      },


}
// ,
// beforeMount(){
//   this.addfire();
// }
    })
    application.mount("#add")
