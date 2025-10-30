import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Design Workshop 2024",
    description:
      "An immersive workshop covering the fundamentals of modern design.",
    image: "/images/active/5.webp",
    date: "October 2024",
  },
  {
    id: 2,
    title: "Annual Designathon",
    description: "A 24-hour design challenge to test your creative skills.",
    image: "/images/active/11.webp",
    date: "November 2024",
  },
  {
    id: 3,
    title: "Guest Lecture Series",
    description: "Industry experts share their insights and experiences.",
    image: "/images/active/12.webp",
    date: "December 2024",
  },
  {
    id: 4,
    title: "Portfolio Review",
    description: "Get feedback on your work from experienced designers.",
    image: "/images/active/13.webp",
    date: "January 2025",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12 px-6 text-center">
        <h1 className="page-title">
          Our Events
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join us for a series of workshops, competitions, and talks designed
          to inspire and educate. Hello.
        </p>
      </section>

      <section className="px-6 pb-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
