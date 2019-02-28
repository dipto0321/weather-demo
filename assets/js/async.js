// const second = () => {
//   setTimeout(() => {
//     console.log("I'm from second!");
//   }, 2000);
// }
// const first = () => {
//   second();
//   console.log("I'm the first!");
// }

// function getRecipe() {
//   setTimeout(() => {
//     const recipeID = [523, 883, 432, 974];
//     const clients = ["John", "Jane", "Jack", "Bob"];
//     console.log(recipeID);

//     setTimeout((id, client) => {
//       const recipe = {
//         title: 'Fresh tomato pasta',
//         publisher: 'Jonas'
//       };
//       console.log(`${id}: ${recipe.title} ordered by: ${client}`);

//     }, 1500, recipeID[2], clients[1]);

//   }, 1500);
// }
// getRecipe();

const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
  }, 1500);
});

const getRecipe = recId => {
  return new Promise((resolve, reject) => {
    setInterval(
      id => {
        const recipe = { title: "Mashroom pazta", publisher: "John Doe" };
        resolve(`${id} : ${recipe.title}`);
      },
      1500,
      recId
    );
  });
};

const getReleted = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipe = { title: "Italian pizza", publisher: "John Doe" };
        resolve(`${pub} : ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

// getIds
//   .then(Ids => {
//     console.log(Ids);
//     return getRecipe(Ids[2]);
//   })
//   .then(recipe => {
//     console.log(recipe);
//     return getReleted("John Doe");
//   })
//   .then(recipe => {
//     console.log(recipe);
//   })
//   .catch(error => {
//     console.log("Error!");
//   });

async function getRecipiesAW() {
  const ids = await getIds;
  console.log(ids);
  const recipe = await getRecipe(ids[1]);
  console.log(recipe);
  const releted = await getReleted("John Doe");
  console.log(releted);

  return recipe;
}

getRecipiesAW().then(rec =>
  console.log(`Awesome tricky ${rec} for best bla bla.`)
);
