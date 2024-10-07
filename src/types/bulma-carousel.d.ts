declare module "bulma-carousel/dist/js/bulma-carousel.min.js" {
  interface CarouselOptions {
    slidesToScroll?: number;
    slidesToShow?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    // Add more options as needed
  }

  interface BulmaCarousel {
    on(event: string, callback: (state: any) => void): void;
    // Add more methods as needed
  }

  interface BulmaCarouselStatic {
    attach(
      selector: string | HTMLElement,
      options?: CarouselOptions
    ): BulmaCarousel[];
    // Add more static methods if needed
  }

  const bulmaCarousel: BulmaCarouselStatic;
  export default bulmaCarousel;
}
