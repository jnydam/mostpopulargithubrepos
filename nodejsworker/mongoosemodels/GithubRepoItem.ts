import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface IGithubRepoItem {
  id: Types.ObjectId;
  name: string;
  language: string;
  stars: number;
  issues: number;
  ownerName: string;
  ownerAvatarUrl: string;
  description: string;
  htmlUrl: string;
  createdDateString: string;
}

export type RawIGithubRepoItem = IGithubRepoItem | null;

const githubRepoItemSchema = new Schema<IGithubRepoItem>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  htmlUrl: { type: String, required: true },
  ownerAvatarUrl: { type: String, required: true },
  language: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  issues: {
    type: Number,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  createdDateString: {
    type: String,
    required: true,
  },
});

export default mongoose.model('GithubRepoItem', githubRepoItemSchema);
