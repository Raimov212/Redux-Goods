import React from "react";
import { useDispatch } from "react-redux";
import { addGoods } from "../action";

const Goods = () => {
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    let data = e.target.elements;
    dispatch(addGoods(data.id.value, data.title.value, data.img.value));
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type="text" name="id" defaultValue="3IION" />
        </div>
        <div>
          <input
            type="text"
            name="title"
            defaultValue="Смартфон HONOR 50 6/128GB Полночный черный"
          />
        </div>
        <div>
          <input
            type="text"
            name="img"
            defaultValue="https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://avatars.mds.yandex.net/get-mpic/4267432/img_id4089701218966705497.jpeg"
          />
        </div>
        <div>
          <button type="submit">Add Goods</button>
        </div>
      </form>
    </div>
  );
};

export default Goods;
