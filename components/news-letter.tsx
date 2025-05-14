import { Button } from "./ui/button";

/**
 * A component for displaying a newsletter subscription form.
 *
 * @return {JSX.Element}
 */
function NewsLetter() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4 py-4 md:py-6 md:px-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Newsletter title and description */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Subscribe to Our Newsletter
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500">
              Stay updated with our latest products and exclusive offers.
            </p>
          </div>
          {/* Newsletter form */}
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              {/* Email input field */}
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
                type="email"
                required
              />
              {/* Subscribe button */}
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;