import React from "react";
import "./ArticleBox.css";

function ArticleBox() {
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <div className="article-box">
        <div className="content-article-box">
          <div className="image-article-box">
            <a href="">
              <img
                src="https://demos.turboweb-wp.ir/topnevisan/wp-content/uploads/2023/08/sabz-next-410x230.png"
                alt=""
              />
            </a>
          </div>
          <div className="title-article-box">
            <a href="">
              <h3>
                یادگیری ری اکت ( ReactJS ) در دنیای واقعی | از 0 تا استخدام
                [منتورشیپ]
              </h3>
            </a>
          </div>
          <div className="category-article-box">
            <a href="">
              <span className="category">برنامه نویسی</span>
            </a>
          </div>
          <div className="desc-article-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae non suscipit repellendus, perspiciatis neque soluta
              laboriosam nam velit ipsam eum ipsa optio officia a, qui doloribus
              maxime, itaque architecto alias. Obcaecati a natus numquam quia ad
              delectus adipisci ab fugiat. Molestias itaque quas qui molestiae
              magnam minima rerum deserunt nemo. Voluptates explicabo
              accusantium fuga, itaque, ab ullam ducimus dolores provident
              incidunt temporibus beatae laudantium, dicta dignissimos
              obcaecati? Modi porro recusandae, eos, nostrum quas eveniet
              mollitia eum totam temporibus, dolores placeat ea earum
              consequuntur quisquam eaque officia provident nisi inventore
              similique nulla error itaque? Odit placeat dolorum ipsum obcaecati
              quas nam magnam velit, molestiae in expedita voluptate fuga
              provident sit, aut consequatur enim temporibus. Accusamus culpa
              asperiores id quis voluptates accusantium veniam unde nemo non!
              Magni odit quas quae aut officiis, illum eos fuga ducimus amet
              nobis delectus laboriosam quod debitis perferendis fugit
              exercitationem aperiam commodi nulla. Dignissimos omnis adipisci
              beatae?
            </p>
          </div>
          <div className="read-article-box">
            <a href="">
              <span>مطالعه</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
