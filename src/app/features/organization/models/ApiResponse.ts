export interface ApiResponse {
    id:number;
    image: string;
    title: string;
    description: string;
    authorizationResponse: {
        id: number;
        name: string;
    };
    disasterName: string;
    targetResponses: {
        id: number;
        name: string;
        currentValue: number;
        targetValue: number;
    }[];
}
