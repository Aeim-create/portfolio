import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    image: "/testimonial-1.jpg",
    content: "StyleHub has completely transformed my wardrobe. The quality of their clothing is exceptional, and their customer service is top-notch. I've been a loyal customer for over a year now!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Minimalist Dresser",
    image: "/testimonial-2.jpg",
    content: "I appreciate the sustainable approach StyleHub takes with their clothing. The materials are eco-friendly, and the designs are timeless. My purchases have lasted me years.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Working Professional",
    image: "/testimonial-3.jpg",
    content: "Finding professional attire that's both comfortable and stylish has always been a challenge until I discovered StyleHub. Their collection is versatile and perfect for my busy lifestyle.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Style Conscious Shopper",
    image: "/testimonial-4.jpg",
    content: "The attention to detail in every piece I've purchased from StyleHub is remarkable. From the stitching to the fit, everything is carefully considered. Highly recommend!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their StyleHub experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-muted flex items-center justify-center">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-sm flex-grow">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 