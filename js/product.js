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

  if(JSON.parse(sessionStorage.getItem('name')))
  {
    var user = JSON.parse(sessionStorage.getItem('name'));
    // console.log(user.email);
    var username = user.email;

  }
  
 let application = Vue.createApp({
    data: function() {
  return {
      products: [],
      newTask: [],
      myInput2: 'vivi',
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
let array =[];
        const product = onSnapshot(
            query(collection(db, "products"), orderBy("timestamp", "desc")),
            (snapshot) => {
            snapshot.docs.map((doc) => {
                // array.push(doc.data());
                this.products.push(doc.data())
            });

            }
            );
        // console.log(array);
      },
      async getfire(item) {
        console.log(item);
        const docRef = await addDoc(collection(db, "cart"), {
          product_name: item.product_name,
          product_image: item.product_image,
          product_decription: item.product_decription,
          product_prize: item.product_prize,
          username: username,
          timestamp: serverTimestamp(),
        });
        console.log("added");
      },
      async addtowishlist(item) {
        console.log(item);
        const docRef = await addDoc(collection(db, "wishlist"), {
          product_name: item.product_name,
          product_image: item.product_image,
          product_decription: item.product_decription,
          product_prize: item.product_prize,
          username: username,
          timestamp: serverTimestamp(),
        });
        console.log("added");
      },
      async send(item) {
        const url = new URL('http://127.0.0.1:5500/productinfo.html?');
        url.searchParams.set("items" ,JSON.stringify(item))
        console.log(url.search);
        // console.log(JSON.parse(url.search));
        const urlObject = new URL(url);
        const id = urlObject.searchParams.get('items')
        console.log(JSON.parse(id))
        window.location = url;
        
      }

}
,
beforeMount(){
  this.addfire();
}
    })
    application.mount("#todaysmenu")





    let application1 = Vue.createApp({
      data: function() {
    return {
        products: [],
        newTask: [],
        myInput2: 'vivi',
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
  let array =[];
          const product = onSnapshot(
              query(collection(db, "populardish"), orderBy("timestamp", "desc")),
              (snapshot) => {
              snapshot.docs.map((doc) => {
                  // array.push(doc.data());
                  this.products.push(doc.data())
              });
  
              }
              );
          // console.log(array);
        },
        async getfire(item) {
          console.log(item);
          const docRef = await addDoc(collection(db, "cart"), {
            product_name: item.product_name,
            product_image: item.product_image,
            product_decription: item.product_decription,
            product_prize: item.product_prize,
            username: username,
            timestamp: serverTimestamp(),
          });
          console.log("added");
        },
        async addtowishlist(item) {
          console.log(item);
          const docRef = await addDoc(collection(db, "wishlist"), {
            product_name: item.product_name,
            product_image: item.product_image,
            product_decription: item.product_decription,
            product_prize: item.product_prize,
            username: username,
            timestamp: serverTimestamp(),
          });
          console.log("added");
        }
  
  }
  ,
  beforeMount(){
    this.addfire();
  }
      })
      application1.mount("#popular")
  
  
  
  
  

      
    let application3 = Vue.createApp({
      data: function() {
    return {
        products: [],
        newTask: {},
        myInput2: 'vivi',
        sign: true,
        dp: false,
    }
  },
  methods: {
    hello() {
      if(JSON.parse(sessionStorage.getItem('name')))
      {
      let item = JSON.parse(sessionStorage.getItem('name'));
      console.log(item);
      this.newTask = item;
      console.log(this.newTask);
      this.sign = !this.sign;
      this.dp = !this.dp;
      }
    },
      async signin(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log('Sign-in successful.');
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // this.newTask.push(user)
    sessionStorage.setItem('name', JSON.stringify(user));
    let item = JSON.parse(sessionStorage.getItem('name'));
      console.log(item);
      this.newTask = item;
      console.log(this.newTask);
      this.sign = !this.sign;
      this.dp = !this.dp;
 
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
      },
      async signout(){
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          sessionStorage.removeItem('name');
          this.sign = !this.sign;
          this.dp = !this.dp;
          location.reload();
          console.log('Sign-out successful.');
        }).catch((error) => {
          // An error happened.
        });
      }
  
  }
  ,
  beforeMount(){
    this.hello();
  }
      })
      application3.mount("#google")
  
  
  
  
  
  
      
  





    
