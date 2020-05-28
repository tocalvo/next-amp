// // AMP currently doesn't have built-in types for TypeScript, but it's in their roadmap
// // https://nextjs.org/docs/advanced-features/amp-support/typescript

// declare namespace JSX {
//   interface AmpTimeAgo {
//     children?: never[];
//     layout?: string;
//     width?: string;
//     height?: string;
//     datetime?: string;
//   }

//   interface AmpState {
//     children?: never[];
//     id?: string;
//     src?: string;
//   }

//   interface AmpList {
//     children?: Element;
//     layout?: string;
//     width?: string;
//     height?: string;
//     src?: string;
//   }

//   interface IntrinsicElements {
//     "amp-timeago": AmpTimeAgo;
//     "amp-state": AmpState;
//     "amp-list": AmpList;
//   }
// }
// Any element you create will be accepted
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
    template: any;
  }
}

declare var page: any;
