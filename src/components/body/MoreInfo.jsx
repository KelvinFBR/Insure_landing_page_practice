import { data } from "../../data/data";
import { BannerBody } from "./BannerBody";
import { Card } from "./Card";

export const MoreInfo = () => {
  {
    /* data.dataMoreInfo  */
  }

  console.log(data.dataMoreInfo);

  return (
    <section className="my-40 mx-5 lg:mx-40">
      {/* MoreInfo */}
      <article className="mb-40">
        <span className="h-px w-60 lg:w-40 block m-auto lg:m-0 bg-dark-grayish-violet"></span>
        <h2 className="text-dark-violet text-5xl font-headings lg:text-left text-center mt-10">
          We're diferrent
        </h2>

        {/* cards*/}
        <section className="flex flex-wrap lg:flex-nowrap lg:justify-between justify-center items-center gap-10">
          {data.dataMoreInfo.map(({ id, urlImg, title, description }) => (
            <Card
              key={id}
              urlImg={urlImg}
              title={title}
              description={description}
            />
          ))}
        </section>
      </article>

      {/* BannerBody */}
      <article>
        <BannerBody />
      </article>
    </section>
  );
};
