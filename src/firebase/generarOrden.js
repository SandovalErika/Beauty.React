import { getFirestore } from "./config";
import firebase from "firebase";
import "firebase/firestore";


export const generarOrden = (datos, carrito, total) => {

    return new Promise(async (resolve, reject) => {

        //generar el objeto orden
        const orden = {
            buyer: datos,
            items: carrito.map((element) => ({
            id: element.id,
            precio: element.price,
            cantidad: element.cantidad,
            })),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        };

        //Enviar la orden a firesotre

        //batch de actualizacion

        const db = getFirestore();
        const orders = db.collection("orders");
        const itemsToUpdate = db.collection("productos").where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        carrito.map((el) => el.id)
        );

        const query = await itemsToUpdate.get();
        const batch = db.batch();

        const outOfStock = [];

        query.docs.forEach((doc) => {
        const itemInCart = carrito.find((prod) => prod.id === doc.id);

        if (doc.data().stock >= itemInCart.cantidad) {
            batch.update(doc.ref, {
            stock: doc.data().stock - itemInCart.cantidad,
            });
        } else {
            outOfStock.push({ ...doc.data(), id: doc.id });
        }
        });

        if (outOfStock.length === 0) {
        
            try {
                orders.add(orden)
                .then((res) => {
                batch.commit();
                resolve(res.id);
                });

            } catch (error) {
                console.log(error);
            }
            
        } else {
           reject(outOfStock);
        }

    })

}

//actualizar el stock de los productos

    // carrito.forEach((item) => {
    //   const docRef = db.collection("productos").doc(item.id);
    //   docRef.get().then((doc) => {
    //     if (doc.data().stock >= item.cantidad) {
    //       docRef.update({
    //         stock: doc.data().stock - item.cantidad,
    //       });
    //     } else {
    //       alert("No hay stock" + doc.data().name);
    //     }
    //   });
    // });