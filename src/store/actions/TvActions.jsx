import axios from '../../utils/axios';
import { loadTv } from '../reducers/TvSlice';
export { removeTv } from '../reducers/TvSlice';

export const asyncLoadTv = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
        let theUltimateDetails = {
            detail: detail.data,
            externalId: externalId.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(
                (t) => t.english_name
            ),
            videos: videos.data.results.find((m) => m.type === 'Trailer'),
            watchProviders: watchProviders.data.results.IN,
        };
        dispatch(loadTv(theUltimateDetails));
        console.log(theUltimateDetails);
    } catch (error) {
        console.log('Error loading TV details:', error.message);
        console.log('Status code:', error.response?.status);
    }
};
