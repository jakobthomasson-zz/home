
/// <reference types="react-spring" />

// Add RequestValidation Interface on to Express's Request Interface.
// declare namespace Express {
//   interface Request extends Flash {}
// }

// interface Flash {
//   flash(type: string, message: any): void;
// }

declare module "react-spring/dist/addons" {
  export const TimingAnimation: any;
  export const OscillatorAnimation: any;
  export const Easing: any;
}

