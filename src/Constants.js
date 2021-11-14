const prod = {
    url: {
        ROOT_URL:
        'https://modocripto-web.herokuapp.com/',
        ROOT_BACKEND_ULR:
        'https://criptoprojeto-services.herokuapp.com/',
        SWAGGER_URL:
        'https://criptoprojeto-services.herokuapp.com/swagger-ui.html'
    }
};

const dev = {
    url: {
        ROOT_URL:
        'http://localhost:3000',
        ROOT_BACKEND_ULR:
        'http://localhost:4321/',
        SWAGGER_URL:
        'http://localhost:4321/swagger-ui.html'
    }
};

export const config = process.env.NODE_ENV === "production" ? prod : dev;