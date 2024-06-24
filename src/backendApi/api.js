import axios from 'axios';

export const getAllDrawings = async () => {
    try {
        const response = await axios.get('/synthdata/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching drawings', error);
        throw error;
    }
};

export const saveDrawing = async (name, lines) => {
    try {
        const response = await axios.post('/synthdata/save', { name, lines });
        return response.data;
    } catch (error) {
        console.error('Error saving drawing', error);
        throw error;
    }
};

export const loadDrawing = async (id) => {
    try {
        const response = await axios.get(`/synthdata/load/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error loading drawing', error);
        throw error;
    }
};

export const updateDrawing = async (name, lines) => {
    try {
        const response = await axios.patch('/synthdata/update', { name, lines });
        return response.data;
    } catch (error) {
        console.error('Error updating drawing', error);
        throw error;
    }
};

export const deleteDrawing = async (id) => {
    try {
        const response = await axios.delete(`/synthdata/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting drawing', error);
        throw error;
    }
};
