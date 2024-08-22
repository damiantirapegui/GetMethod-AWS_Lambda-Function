exports.handler = async (event) => {
  console.log("Event", event);

  const method = event.requestContext.http.method;
  //   let methodMesage = method;

  if (method === "GET" || method === "POST" || method === "PATCH") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: `Method: ${method}` }),
    };
  } else {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Unsupported method" }),
    };
  }
};
