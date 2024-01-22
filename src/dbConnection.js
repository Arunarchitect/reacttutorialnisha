export function dbConnection(){
    return {
        connect: () => {
            console.log('DB connection opened')
        },
        disconnect: () => {
            console.log('Closing DB connection')
        }
    }
}

