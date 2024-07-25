const https = require("https")

exports.handler = async (event) => {
    switch (event.functionName) {
        case "Course_history":
            return await Course_history()
        case "Class_history":
            return Class_history()
        default:
            return {
                statusCode: 400,
                body: "Function not found",
            }
    }
}

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        https
            .get(url, (res) => {
                let data = ""

                // 데이터를 조각조각 수신합니다.
                res.on("data", (chunk) => {
                    data += chunk
                })

                // 전체 데이터 수신이 완료되면 이 콜백이 호출됩니다.
                res.on("end", () => {
                    resolve(data)
                })
            })
            .on("error", (err) => {
                reject(err)
            })
    })
}

const Course_history = async () => {
    console.log("Course_history")
    try {
        const data = await fetchData("https://www.google.com")
        console.log(data)
        const response = {
            statusCode: 200,
            body: "Function Course_history executed successfully",
        }
        console.log(JSON.stringify(response))
        return response
    } catch (err) {
        console.error("Error: " + err.message)
        return {
            statusCode: 500,
            body: "Internal Server Error",
        }
    }
}

const Class_history = () => {
    console.log("Class_history")
    const response = {
        statusCode: 200,
        body: "Function Class_history executed successfully",
    }
    console.log(JSON.stringify(response))
    return response
}
