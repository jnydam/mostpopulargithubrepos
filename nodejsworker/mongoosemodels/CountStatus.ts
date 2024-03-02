import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface ICountStatus {
  id: Types.ObjectId;
  countName: string;
  countNumber: number;
}

export type RawICountStatus = ICountStatus | null;

const countStatusSchema = new Schema<ICountStatus>({
  countName: {
    type: String,
    required: true,
  },
  countNumber: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('CountStatus', countStatusSchema);
