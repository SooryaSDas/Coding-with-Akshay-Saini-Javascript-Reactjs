import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, 
  // key passed from frontend so
  dangerouslyAllowBrowser : true,
});


export default openai;