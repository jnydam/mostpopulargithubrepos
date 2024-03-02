import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

export interface IUpdateStatus {
  id: Types.ObjectId;
  dataLastUpdatedDateString: string;
}

export type RawIUpdateStatus = IUpdateStatus | null;

const updateStatusSchema = new Schema<IUpdateStatus>({
  dataLastUpdatedDateString: {
    type: String,
    required: true,
  },
});

export default mongoose.model('UpdateStatus', updateStatusSchema);
