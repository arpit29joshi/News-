import { Fragment } from "react";
import NewsCard from "./layout/NewsCard";
import Card from "./UI/Card";
function CardData(props) {
  const context = props.contextData;
  return (
    <Fragment>
      {context.map((e) => {
        return (
          <Card>
            <NewsCard
              fullUrl={e.url}
              title={e.title}
              desc={e.abstract}
              by={e.byline}
              imgUrl={e.multimedia[0].url}
            />
          </Card>
        );
      })}
    </Fragment>
  );
}

export default CardData;
