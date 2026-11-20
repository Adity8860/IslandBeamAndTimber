
const BACKEND_API_URL ="https://fum3hsj6bobc7pn5ckb6inyhie0atgso.lambda-url.us-east-1.on.aws/"

export async function POST(request) {
    try {
        const payload = await request.json();

        if (!BACKEND_API_URL) {
            console.error("Contact API configuration error: BACKEND_API_URL is not set");
            return Response.json({
                success: false,
                message: "Contact API is not configured",
            }, { status: 500 });
        }

        const requestBody = JSON.stringify(payload);

        if (process.env.NODE_ENV !== "production") {
            console.info("Contact backend request:", {
                method: "POST",
                url: BACKEND_API_URL,
                body: requestBody,
            });
        }

        const response = await fetch(BACKEND_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: requestBody,
            cache: "no-store",
        });

        const responseText = await response.text();

        let data;
        try {
            data = responseText ? JSON.parse(responseText) : {};
        } catch {
            data = { message: responseText };
        }

        if (!response.ok) {
            return Response.json({
                success: false,
                message: data.message || "Lambda rejected the request",
                details: data,
            }, { status: response.status });
        }

        return Response.json({
            success: true,
            message: "Enquiry submitted successfully",
            data,
        });

    } catch (error) {
        console.error("Contact API error:", error);

        return Response.json({
            success: false,
            message: error.message || "Internal server error",
        }, { status: 500 });
    }
}
