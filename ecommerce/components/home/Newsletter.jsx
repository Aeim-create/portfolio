import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive updates on new arrivals, special offers,
            and other discount information.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-10 px-4 rounded-md border focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates
            from our company.
          </p>
        </div>
      </div>
    </section>
  );
} 