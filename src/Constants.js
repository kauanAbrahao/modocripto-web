const prod = {
    url: {
        ROOT_URL:
        'https://modocripto-web.herokuapp.com/',
        SWAGGER_URL:
        ''
    }
};

const dev = {
    url: {
        ROOT_URL:
        'http://localhost:3000',
        SWAGGER_URL:
        'http://localhost:4321/swagger-ui.html'
    }
};

export const config = process.env.NODE_ENV === 'production' ? prod : dev;