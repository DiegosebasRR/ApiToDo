export interface Task{
    title: string;
    description: string;
    expiration_date: string;
    priority: number;
    labels?: Array<String>;
}