import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzY4OWQ1OWZiYjM3Y2QyYzg3YjNkNWFhNGI4MTg0MSIsInN1YiI6IjY1NjAyODNiN2RmZGE2MDBjNGY3ODczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kgHstSvqDAPuSwUIug9quKY8kTH_Tqw5jP2eH3YeXrc',
    },
});

export default instance;
