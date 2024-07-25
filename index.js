const https = require("https")

exports.handler = async (event) => {
    switch (event.functionName) {
        case "Course_history":
            return Course_history()
        case "Class_history":
            return Class_history()
        default:
            return {
                statusCode: 400,
                body: "Function not found",
            }
    }
}

const Course_history = () => {
    console.log("Course_history")
    https
        .get("https://www.google.com", (res) => {
            let data = ""

            // 데이터를 조각조각 수신합니다.
            res.on("data", (chunk) => {
                data += chunk
            })

            // 전체 데이터 수신이 완료되면 이 콜백이 호출됩니다.
            res.on("end", () => {
                console.log(data)
            })
        })
        .on("error", (err) => {
            console.error("Error: " + err.message)
        })
    const response = {
        statusCode: 200,
        body: "Function Course_history executed successfully",
    }
    console.log(JSON.stringify(response))
    return response
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
