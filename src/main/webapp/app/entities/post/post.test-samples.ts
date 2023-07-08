import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 26956,
};

export const sampleWithPartialData: IPost = {
  id: 39641,
  title: 'male navigate Devolved',
  category: 'optical',
  description: 'perferendis Executive',
};

export const sampleWithFullData: IPost = {
  id: 91237,
  title: 'Lodge stunning',
  category: 'invoice International West',
  description: 'katal',
};

export const sampleWithNewData: NewPost = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
