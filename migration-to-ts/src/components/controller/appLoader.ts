import { Loader } from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e30b2ae1f3b6452185a280f66c0bc139',
        });
    }
}

export default AppLoader;
