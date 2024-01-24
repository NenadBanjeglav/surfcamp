import SignUpForm from "@/app/_components/Events/SignUpForm";
import ReactMarkdown from "react-markdown";
import {
  fetchAllEvents,
  fetchDataFromStrapi,
  fetchIndividualEvent,
  processEventData,
} from "@/utils/strapi.utils";
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";

export default async function Event({ params }) {
  const { eventId } = params;
  const event = await fetchIndividualEvent(eventId);
  const otherEvents = await fetchAllEvents(eventId);

  const descriptionMarkdown = (
    <ReactMarkdown className="copy">{event.description}</ReactMarkdown>
  );
  const pricing = {
    singlePrice: event.singlePrice,
    sharedPrice: event.sharedPrice,
  };

  return (
    <main className="events-page">
      <SignUpForm
        headline={event.name}
        infoText={descriptionMarkdown}
        buttonLabel="Sign Up"
        pricing={pricing}
        eventId={eventId}
      />
      <FeaturedItems
        items={otherEvents}
        itemType="events"
        headline="Explore our other events"
      />
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const events = await fetchDataFromStrapi("events");
    const slugs = events.map((el) => ({
      eventId: String(el.id),
    }));

    return slugs;
  } catch (error) {
    console.log(`Error fetching slugs for the events`, error);
  }
}
