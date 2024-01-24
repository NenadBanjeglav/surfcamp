/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";

function FeaturedEvent({ event }) {
  return (
    <Link
      className="featured-items__article"
      href={`/events/${event.id}`}
      key={event.id}
    >
      <div className="featured-items__article-img">
        <img
          src={event.image}
          alt={`Go check out the event ${event.name}`}
          className=""
        />
      </div>
      <div className="featured-items__article-text featured-items__article-text--event">
        <h5>{event.name}</h5>
        <p className="copy-small bold">{formatDate(event.startingDate)}</p>
        <p className="copy-small">Prices starting at {event.sharedPrice}$</p>
      </div>
    </Link>
  );
}

export default FeaturedEvent;
