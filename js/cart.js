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
    deleteDoc,
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
      count: [],
      total: 0,
  }
},
methods: {
  hello() {
    console.log('hii');
  },
    async addfire() {
    let array =[];
    var tot = 0;
    // let username = JSON.parse(sessionStorage.getItem('name'));
        const product = onSnapshot(
            query(collection(db, "cart"), where("username", "==", username)),
            (snapshot) => {
            snapshot.docs.map((doc) => {
                // console.log(doc.data());
                tot = tot + parseInt(doc.data().product_prize);
                this.total = tot;
                // console.log(this.total);
                console.log(doc.data());
                this.products.push({ ...doc.data(), id: doc.id})
            });

            }
            );
        // console.log(array);
      },
      async getfire1() {
        // console.log(this.products);
        // for (item in this.products) {
        //   console.log(item.product_image)
        // }
        this.products.map((doc) => 
        {
          console.log(doc.product_prize)

        }

        
        )
        // const docRef = await addDoc(collection(db, "cart"), {
        //   id:item.id,
        //   name: item.name,
        //   age: item.age,
        //   email: item.email,
        //   timestamp: serverTimestamp(),
        // });
        console.log("added");
      },
      async removecart(item){
        const docRef = await deleteDoc(doc(db, "cart", item));
        console.log("deleted");
        location.reload();
      },
      async payment(){
        var tot = 0;
        // const product = onSnapshot(
        //   query(collection(db, "users"), orderBy("timestamp", "desc")),
        //   (snapshot) => {
        //     this.vv = snapshot.docs;
        //     this.vv.map((doc) => {
        //       tot = tot + parseInt(doc.data().age);
        //     this.total = tot;
        //     });
        //     console.log(this.total * 100)
            

        //   }
        //   );

        var options = {
          "key": "rzp_test_3yA28Ie7xKzqV6", // Enter the Key ID generated from the Dashboard
    "amount": this.total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "HMBiz",
    "description": "HMbiz",
    "image": "https://example.com/your_logo",
    "handler": function (response){
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        saveToDb(response);
    },
    "prefill": {
        // "name": "Gaurav Kumar",
        // "email": "gaurav.kumar@example.com",
        "email": username,
        // "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
// document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
// }


async function saveToDb(response) {

  const product = onSnapshot(
    query(collection(db, "cart"), where("username", "==", username)),
    (snapshot) => {
    snapshot.docs.map((doc) => {
      // console.log("success");
      // console.log(response);
      // console.log(doc.data());

      const docRef = addDoc(collection(db, "orders"), {
        payment_id:response.razorpay_payment_id,
        product_name: doc.data().product_name,
        product_image: doc.data().product_image,
        product_decription: doc.data().product_decription,
        product_prize: doc.data().product_prize,
        user: username,
        timestamp: serverTimestamp(),
      });

    });

    }
    );

  // this.products.map((doc) => 
  // {
  //   console.log(doc.product_prize)
  //   addDoc(collection(db, "orders"), {
  //     payment_id:response.razorpay_payment_id,
  //     order_id:response.razorpay_order_id,
  //     product_name: doc.product_name,
  //     product_image: doc.product_image,
  //     product_decription: doc.product_decription,
  //     product_prize: doc.product_prize,
  //     user: username,
  //     timestamp: serverTimestamp(),
  //   });

  // }

  
  // )
  
  console.log("added");
}


      },
      async saveToDb(response) {
        const product = onSnapshot(
          query(collection(db, "cart"), where("username", "==", username)),
          (snapshot) => {
          snapshot.docs.map((doc) => {
            console.log("success");
            console.log(response);

            // const docRef = await addDoc(collection(db, "orders"), {
            //   payment_id:response.razorpay_payment_id,
            //   order_id:response.razorpay_order_id,
            //   product_name: doc.data().product_name,
            //   product_image: doc.data().product_image,
            //   product_decription: doc.data().product_decription,
            //   product_prize: doc.data().product_prize,
            //   user: username,
            //   timestamp: serverTimestamp(),
            // });

          });

          }
          );
        
        console.log("added");
      }

},
beforeMount(){
  this.addfire();

}
    })
    application.mount("#cart")



        
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
  