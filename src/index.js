const{app} = require('./app');
const{dbConnection} = require('./db');
port  = process.env.PORT || 4002
async function main(){
    try {
        await dbConnection();
    app.listen(port, () => console.log('Listening on port' + port)
        );
    } catch (error) {
        console.log(error)
    }
}

main();