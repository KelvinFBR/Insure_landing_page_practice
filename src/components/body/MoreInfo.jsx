import { data } from "../../data/data";
import { BannerBody } from "./BannerBody";
import { Card } from "./Card";

export const MoreInfo = () => {
  {
    /* data.dataMoreInfo  */
  }

  console.log(data.dataMoreInfo);

  return (
    <section className="my-40 mx-5 lg:mx-40  ">
      {/* MoreInfo */}
      <article className="mb-40">
        <span className="h-px w-60 block m-auto bg-dark-grayish-violet"></span>
        <h2 className="text-dark-violet text-5xl font-headings text-center mt-10">
          We're diferrent
        </h2>
        {/* cards*/}

        {data.dataMoreInfo.map(({ id, urlImg, title, description }) => (
          <Card
            key={id}
            urlImg={urlImg}
            title={title}
            description={description}
          />
        ))}
      </article>

      {/* BannerBody */}
      <article>
        <BannerBody />
      </article>
    </section>
  );
};
