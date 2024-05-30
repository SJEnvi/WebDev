const app = Vue.createApp({
    data(){
        return {
            nickname: "",
            timestamp: null,
            showNameInput: true,
            invalidInput: false,
            movieNotLoaded: true,
            movieDetails: {
                movieTitle: null,
                posterPath: null,
                posterAlt: null,
                tmdbId: null,
                overview: null,
                overallRating: null,
                voteCount: null,
                releaseDate: null,
            },
            rating: null,
            rateWithoutConfirm: false,
        }
    },
    methods: {
        showMovieDiv(){
            if (this.nickname){
                this.showNameInput = false;
                document.documentElement.style.setProperty('--header-display', 'none')
                this.timestamp = Date.now().toString(36);
                this.getNextMovie()
            }
            else{
                this.invalidInput = true;
            }
        },
        async getNextMovie(){
            this.movieNotLoaded = true;
            const response = await axios.get("http://127.0.0.1:1337/randomMovie");
            this.movieDetails.movieTitle = response.data.title
            this.movieDetails.posterPath = 'https://image.tmdb.org/t/p/w500' + response.data.posterPath
            this.movieDetails.posterAlt = response.data.title + " poster"
            this.movieDetails.tmdbId = response.data.tmdbId
            this.movieDetails.overview = response.data.overview
            this.movieDetails.overallRating = response.data.voteAverage
            this.movieDetails.voteCount = response.data.voteCount
            this.movieDetails.releaseDate = response.data.releaseDate
            this.movieNotLoaded = false;
        },
        async rateMovie(){
            if (!this.rating){
                return;
            }
            const payload = {name: `${this.nickname}-${this.timestamp}`,
                             movieID: this.movieDetails.tmdbId,
                             rating: this.rating}
            await axios.post('http://127.0.0.1:1337/prediction', payload);
            this.rating = null
            this.getNextMovie()
        },
        async setRating(rating){
            this.rating = rating;
            if (this.rateWithoutConfirm){
                await this.rateMovie();
            }
        },
        async skipMovie(){
            this.getNextMovie()
        },
    },
})

app.component('star-rating', VueStarRating.default)
app.mount("#app")


