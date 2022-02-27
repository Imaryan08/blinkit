
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=a2b3dfd422f1993f16ea9678e7a1cdff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

async function getPopularMovies(){
    
    let data = await fetch(url);
    let popularMovies = await data.json();
    
    showMovies(popularMovies.results);
}

getPopularMovies()

let trendingDiv = document.querySelector('.trending');
function showMovies(mov){

    console.log('mov:', mov)

    mov.map(function (elem,index){

        let div = document.createElement('div');

        let imgDiv = document.createElement('div');
        let image = document.createElement('img');
        image.src = `https://image.tmdb.org/t/p/w500/${elem.poster_path}`;
        imgDiv.append(image);
        
        let detail = document.createElement('div');
        detail.setAttribute('class','movieTitle');
        let title = document.createElement('h2');
        title.innerHTML = `${elem.title}`;
        let releaseDate = document.createElement('h3')
        releaseDate.innerHTML = `${elem.release_date}`;
        detail.append(title, releaseDate);

        let hoverTextDiv = document.createElement('div');
        hoverTextDiv.setAttribute('class','hoverTextDiv');
        let hoverText = document.createElement('p');
        hoverText.innerHTML = `${elem.overview}`;
        hoverTextDiv.append(hoverText);

        div.append(imgDiv,detail,hoverTextDiv);
        trendingDiv.append(div);

        div.addEventListener('mouseover',function(){
            detail.style.display = 'none';
            hoverTextDiv.style.display = 'block';
        })

        div.addEventListener('mouseout',function(){
            console.log(index)
            detail.style.display = 'block';
            hoverTextDiv.style.display = 'none';
        })

    })
}

// function showDetail(index){
//     alert('index:', index)
   

// }

function returnHome(){
    history.back();
}