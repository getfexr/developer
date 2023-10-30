import React from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Unraveling the Tale Behind Fexr
          </h1>
          <p class="mb-8 leading-relaxed">
            Venture into our journey, understanding the essence and inspiration
            behind the name Fexr. Paint a visual narrative that lures the
            visitor into our world.
          </p>
          <div class="flex justify-center">
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Dive In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageHeader;
