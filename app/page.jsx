import events from "../lib/constants";
import ExploreBtn from "./_components/ExploreBtn";
import EventCard from "./_components/EventCard";

export default async function Home() {


  return (
    <section className="">
    <h1 className="text-center">The Hub for Every Dev <br /> Event You Can&apos;t Miss</h1>
    <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>
    <ExploreBtn />
    <div className="mt-20">
 <h3>Featured Events</h3>
 <ul className="events">
{events.map((event)=> 
<li key={event.title} className="" >
  
  <EventCard {...event} />
    </li>
  )}

 </ul>
    </div>
    </section>
  );
}