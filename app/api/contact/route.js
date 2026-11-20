
export async function POST(request) {
    try {
        const payload = await request.json();

        console.log("Frontend payload:", payload);

        const response = await fetch(process.env.BACKEND_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
        });

        const responseText = await response.text();

        console.log("Lambda status:", response.status);
        console.log("Lambda response:", responseText);

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
