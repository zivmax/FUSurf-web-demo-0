declare module "bulma-slider/dist/js/bulma-slider.min.js" {
  interface SliderOptions {
    // Define any options if needed
  }

  interface BulmaSlider {
    attach(selector?: string | HTMLElement, options?: SliderOptions): void;
    // Add more methods if necessary
  }

  const bulmaSlider: BulmaSlider;
  export default bulmaSlider;
}
