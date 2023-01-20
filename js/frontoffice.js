const url = "https://striveschool-api.herokuapp.com/api/movies/";

// const headers = new Headers({
//   "Content-Type": "application/json",
//   Authorization:
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQyMDU0OTcsImV4cCI6MTY3NTQxNTA5N30.46ZlnsSty_g9npWTXjIqWXh52mpZtcMP9R3BRtZARWw",
// });

const options = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQyMDU0OTcsImV4cCI6MTY3NTQxNTA5N30.46ZlnsSty_g9npWTXjIqWXh52mpZtcMP9R3BRtZARWw",
  },
};

const getAllMovies = () => {
  fetch(url, options)
    .then((dataRaw) => dataRaw.json())
    .then((data) => {
      //   renderAllMovies(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
};

// const renderAllMovies = (movies) => {
//   const container = document.getElementById("carousel-inner");
//   container.innerHTML = ` <div class="carousel-item active">
//   <div class="col-md-3 col-lg-auto carousel-hover   px-1 mb-1 mb-lg-0">
//       <div class="card card-body">
//           <img class="img-fluid" src="${movies[0].imageUrl}">
//       </div>
//                                                 <div class="infos-container p-3">
//         <div class="d-flex justify-content-between py-2">
//           <div class="d-flex">
//           <li class="circle play-circle"><i class="bi bi-play-fill"></i></li>
//           <li class="circle"><i class="bi bi-plus"></i></li>
//           <li class="circle"><i class="bi bi-hand-thumbs-up"></i></li>
//             </div>
//           <div>
//             <li class="circle">
//             <i class="bi bi-arrow-down py-2"></i>
//           </li>
//           </div>
//         </div>
//         <div class="info-row2 py-2"><span class="text-success">98% Match</span><span class="border border-ligh">16+</span><span>4 seasons</span><span><small class="border border-light">HD</span></small></div>
//         <div>
//           <ul class="d-flex py-2 px-0">
//             <li class="mx-3">Emotional</li>
//             <li class="mx-3">Drama</li>
//             <li class="mx-3">Medical</li>
//           </ul>
//         </div>
//       </div>
//   </div>
// </div>`;

//   for (let i = 0; i < movies.length; i++) {
//     singleMovie = movies[i];
//     const { name, description, category, imageUrl } = singleMovie;
//     container.innerHTML += ` <div class="carousel-item">
//     <div class="col-md-3 col-lg-auto carousel-hover   px-1 mb-1 mb-lg-0">
//         <div class="card card-body">
//             <img class="img-fluid" src="${imageUrl}">
//         </div>
//                                                   <div class="infos-container p-3">
//           <div class="d-flex justify-content-between py-2">
//             <div class="d-flex pop-up">
//             <li class="circle play-circle"><i class="bi bi-play-fill"></i></li>
//             <li class="circle"><i class="bi bi-plus"></i></li>
//             <li class="circle"><i class="bi bi-hand-thumbs-up"></i></li>
//               </div>
//             <div>
//               <li class="circle">
//               <i class="bi bi-arrow-down py-2"></i>
//             </li>
//             </div>
//           </div>
//           <div class="info-row2 py-2"><span class="text-success">98% Match</span><span class="border border-ligh">16+</span><span>4 seasons</span><span><small class="border border-light">HD</span></small></div>
//           <div>
//             <ul class="d-flex py-2 px-0">
//               <li class="mx-3">Emotional</li>
//               <li class="mx-3">Drama</li>
//               <li class="mx-3">Medical</li>
//             </ul>
//           </div>
//         </div>
//     </div>
// </div>`;
//   }
// };
//   movies.forEach((singleMovie) => {
//     const { name, description, category, imageUrl } = singleMovie;
//     container.innerHTML += ` <div class="carousel-item">
//     <div class="col-md-3 col-lg-auto carousel-hover   px-1 mb-1 mb-lg-0">
//         <div class="card card-body">
//             <img class="img-fluid" src="${imageUrl}">
//         </div>
//                                                   <div class="infos-container p-3">
//           <div class="d-flex justify-content-between py-2">
//             <div class="d-flex">
//             <li class="circle play-circle"><i class="bi bi-play-fill"></i></li>
//             <li class="circle"><i class="bi bi-plus"></i></li>
//             <li class="circle"><i class="bi bi-hand-thumbs-up"></i></li>
//               </div>
//             <div>
//               <li class="circle">
//               <i class="bi bi-arrow-down py-2"></i>
//             </li>
//             </div>
//           </div>
//           <div class="info-row2 py-2"><span class="text-success">98% Match</span><span class="border border-ligh">16+</span><span>4 seasons</span><span><small class="border border-light">HD</span></small></div>
//           <div>
//             <ul class="d-flex py-2 px-0">
//               <li class="mx-3">Emotional</li>
//               <li class="mx-3">Drama</li>
//               <li class="mx-3">Medical</li>
//             </ul>
//           </div>
//         </div>
//     </div>
// </div>`;
//   });
// };

window.onload = () => {
  getAllMovies();
};
