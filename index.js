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
