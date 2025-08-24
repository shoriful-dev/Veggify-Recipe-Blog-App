import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
  const item = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(item);
  function extractNumber(timeString) {
    let timeArray = timeString.split(' ');
    return parseInt(timeArray[0]);
  }

  // Extract numbers
  let prepTimeMinutes = extractNumber(item?.more.prep_time);
  let cookTimeMinutes = extractNumber(item?.more.cook_time);

  // Calculate total time
  let totalTimeMinutes = prepTimeMinutes + cookTimeMinutes;
  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
      <article>
        <div className="bg-[#fff] md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img
              src={item?.thumbnail_image}
              alt="Photo of an omelette with vegetables on a plate"
              className="md:max-w-[90%] w-full md:h-[570px] md:mx-auto md:rounded-xl"
            />
          </picture>
          <div className="px-8 font-outfit text-wenge-brown">
            <h1 className="font-fancy text-4xl mt-12 text-dark-charcoal">
              {item?.name}
            </h1>
            <p className="mt-6">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <article className="bg-rose-white mt-6 p-5 rounded-xl">
              <h2 className="text-dark-raspberry text-xl font-semibold ml-2">
                Preparation time
              </h2>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-dark-raspberry">
                <li className="pl-3">
                  <p>
                    <span className="font-semibold">Total: </span>{' '}
                    <span>{totalTimeMinutes}</span> minutes
                  </p>
                </li>
                <li className="mt-3 pl-3">
                  <p>
                    <span className="font-semibold">Preparation: </span>
                    {item?.more?.prep_time}
                  </p>
                </li>
                <li className="mt-3 pl-3">
                  <p>
                    <span className="font-semibold">Cooking: </span>
                    {item?.more.cook_time}
                  </p>
                </li>
              </ul>
            </article>
            <div className="mt-8">
              <h3 className="font-fancy text-3xl text-nutmeg">Ingredients</h3>
              <ul className="list-disc marker:text-nutmeg mt-4 ml-6 text-wenge-brown marker:align-middle">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span>{ingredient?.name}:</span>
                    <span> {ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-px bg-light-gray mx-auto mt-8"></div>
            <div className="mt-8">
              <h3 className="font-fancy text-3xl text-nutmeg">Instructions</h3>
              <ol className="marker:text-nutmeg marker:font-semibold marker:font-outfit list-decimal mt-4 ml-6">
                <li className="pl-4">
                  <p>
                    <span className="font-bold">Beat the eggs: </span>In a bowl,
                    beat the eggs with a pinch of salt and pepper until they are
                    well mixed. You can add a tablespoon of water or milk for a
                    fluffier texture.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Heat the pan: </span>Place a
                    non-stick frying pan over medium heat and add butter or oil.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Cook the omelette: </span>Once
                    the butter is melted and bubbling, pour in the eggs. Tilt
                    the pan to ensure the eggs evenly coat the surface.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Add fillings (optional): </span>
                    When the eggs begin to set at the edges but are still
                    slightly runny in the middle, sprinkle your chosen fillings
                    over one half of the omelette.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Fold and serve: </span>As the
                    omelette continues to cook, carefully lift one edge and fold
                    it over the fillings. Let it cook for another minute, then
                    slide it onto a plate.
                  </p>
                </li>
                <li className="pl-4 mt-2">
                  <p>
                    <span className="font-bold">Enjoy: </span>Serve hot, with
                    additional salt and pepper if needed.
                  </p>
                </li>
              </ol>
            </div>
            <div className="w-full h-px bg-light-gray mx-auto mt-8"></div>
            <div className="mt-8">
              <h3 className="font-fancy text-3xl text-nutmeg">Nutrition</h3>
              <p className="mt-4">
                The table below shows nutritional values per serving without the
                additional fillings.
              </p>
              <ul className="mt-6">
                <li>
                  <div className="flex">
                    <p className="ml-8 text-lg w-full mr-auto">Calories</p>
                    <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                      277kcal
                    </p>
                  </div>
                  <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                </li>
                <li>
                  <div className="flex mt-3">
                    <p className="ml-8 text-lg w-full mr-auto">Carbs</p>
                    <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                      0g
                    </p>
                  </div>
                  <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                </li>
                <li>
                  <div className="flex mt-3">
                    <p className="ml-8 text-lg w-full mr-auto">Protein</p>
                    <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                      20g
                    </p>
                  </div>
                  <div className="w-full h-px bg-light-gray mx-auto mt-3"></div>
                </li>
                <li>
                  <div className="flex mt-3">
                    <p className="ml-8 text-lg w-full mr-auto">Fat</p>
                    <p className="font-bold text-nutmeg text-lg w-full mr-auto">
                      22g
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
