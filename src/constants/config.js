
const production = false

export const config =  {
    PROD_BASE_URL : `${production ? 'https:/iandiapi.herokuapp.com/api' : 'http://localhost:4545/api'}`
}