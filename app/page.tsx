import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[hsl(30,54%,90%)] min-h-screen flex flex-col items-center p-4 py-15">

    <div className="text-[hsl(30,10%,34%)] bg-white max-w-2xl rounded-2xl  p-8 mt-10">

      <img src="image-omelette.jpeg" alt="Imagem do Omelette" width="600" className="rounded-xl"></img>
      <h1 className="text-3xl py-6 font bold text-stone-900 font-serif"> 
        Simple Omelette Recipe 
      </h1> 
      <p className="pb-7 text-[15px]">
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.
      </p>
      
      <div className="rounded-2xl px-3.5 py-1  bg-[hsl(330,100%,98%)]">

        <h3 className="text-xl pt-5 pl-5 font-bold  text-[hsl(332,51%,32%)]">
          Preparation time 
        </h3>

        <ul className="text-[15px] pt-2.5 pb-4 pl-5 list-disc list-inside space-y-2">
          <li>
            <span className="font-bold pl-3">Total:</span> Approximately 10 minutes
          </li>
          <li>
            <span className="font-bold pl-3">Preparation:</span> 5 minutes
          </li>
          <li>
            <span className="font-bold pl-3">Cooking:</span> 5 minutes
          </li>
        </ul>

      </div> 

      <h2 className="text-2xl font-bolt py-5 text-[hsl(14,45%,36%)]">
        Ingredients
      </h2>

      <ul className="text-[15px] list-disc list-inside space-y-2">
      <li>
        2-3 large eggs
      </li>
      <li>
        Salt, to taste
      </li>
      <li>
        Pepper, to taste
      </li>
      <li>
        1 tablespoon of butter or oil
      </li>
      <li>
        Optional fillings: cheese, diced vegetables, cooked meats, herbs
      </li>
      </ul>

      <hr className="border-t border-stone-200 my-7 "></hr>


      <h2 className="text-2xl py-3 font-bolt text-[hsl(14,45%,36%)]">
        Instructions
      </h2>

      <ol className="text-[15px] list-decimal pl-5 space-y-3 marker:font-bold marker:text-[hsl(332,51%,32%)]">
        <li className="pl-3.5">
          <span className="font-bold">Beat the eggs: </span>
          In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
          You can add a tablespoon of water or milk for a fluffier texture.
        </li>
        <li className="pl-3.5">
          <span className="font-bold">Heat the pan: </span>
          Place a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className="pl-3.5">
          <span className="font-bold">Cook the omelette: </span>
          Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
          the eggs evenly coat the surface.
        </li>
        <li className="pl-3.5">
          <span className="font-bold">Add fillings (optional): </span>
          When the eggs begin to set at the edges but are still slightly runny in the 
          middle, sprinkle your chosen fillings over one half of the omelette.
        </li>
        <li className="pl-3.5">
          <span className="font-bold">Fold and serve: </span>
          As the omelette continues to cook, carefully lift one edge and fold it over the 
          fillings. Let it cook for another minute, then slide it onto a plate.
        </li>
        <li className="pl-3.5">
          <span className="font-bold">Enjoy: </span>
          Serve hot, with additional salt and pepper if needed.
        </li>
      </ol>

      <hr className="border-t border-stone-200 my-7"></hr>
  
      <h2 className="text-2xl py-3 font-bolt text-[hsl(14,45%,36%)]">
        Nutrition
      </h2>
      <p className="text-[15px]">
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <table className="w-full border-collapse text-[15px]">
        <tbody>
          <tr>
            <td className="py-3 pl-10 border-b border-stone-200" >Calories</td>
            <td className="py-3 pl-10 border-b border-stone-200 font-bold text-[hsl(14,45%,36%)]">277kcal</td>
          </tr>
          <tr>
            <td className="py-3 pl-10 border-b border-stone-200" >Carbs</td>
            <td className="py-3 pl-10 border-b border-stone-200 font-bold text-[hsl(14,45%,36%)]">0g</td>
          </tr>
          <tr>
            <td className="py-3 pl-10 border-b border-stone-200" >Protein</td>
            <td className="py-3 pl-10 border-b border-stone-200 font-bold text-[hsl(14,45%,36%)]">20g</td>
          </tr>
          <tr>
            <td className="py-3 pl-10" >Fat</td>
            <td className="py-3 pl-10 font-bold text-[hsl(14,45%,36%)]">22g</td>
          </tr>

        </tbody>
      </table>
  </div>

</main>
  );
}
