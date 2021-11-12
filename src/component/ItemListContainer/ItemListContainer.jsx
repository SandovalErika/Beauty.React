import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/config";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const productos = categoryId
      ? db.collection("productos").where("category", "==", categoryId)
      : db.collection("productos");

    productos
      .get()
      .then((response) => {
        const newItems = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        console.log(newItems);
        setItems(newItems);
      })

      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId, setLoading]);

  return (
    <section className="container py-5 containerLoad ">
      {loading ? (
        <img
          className="load"
          src="http://www.gifde.com/gif/otros/decoracion/cargando-loading/cargando-loading-041.gif"
        />
      ) : (
        <ItemList productos={items} />
      )}
    </section>
  );
};

export default ItemListContainer;
