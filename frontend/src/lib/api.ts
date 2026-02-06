import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface ChatRequest {
    message: string;
    conversation_id?: string | null;
    language?: string;
}

export interface ChatResponse {
    response: string;
    conversation_id: string;
    timestamp: string;
}

export async function sendMessage(request: ChatRequest): Promise<ChatResponse> {
    const response = await api.post<ChatResponse>('/assistant/chat', request);
    return response.data;
}

export async function getConversation(conversationId: string) {
    const response = await api.get(`/assistant/conversations/${conversationId}`);
    return response.data;
}

export async function healthCheck() {
    const response = await api.get('/health');
    return response.data;
}

export interface ContactRequest {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service?: string;
    message: string;
}

export interface ContactResponse {
    success: boolean;
    message: string;
    timestamp: string;
}

export async function submitContactForm(request: ContactRequest): Promise<ContactResponse> {
    const response = await api.post<ContactResponse>('/contact', request);
    return response.data;
}

export default api;
