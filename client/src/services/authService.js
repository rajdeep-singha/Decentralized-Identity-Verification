import { API_BASE_URL } from "../config";

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return response.json();
    } catch (error) {
        console.error("Registration error:", error);
        return { error: "Registration failed" };
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return response.json();
    } catch (error) {
        console.error("Login error:", error);
        return { error: "Login failed" };
    }
};
