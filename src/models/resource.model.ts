export interface ResourceEndorsementUserModel {
  id: string;
  name: string;
}

export enum ResourceEndorsementType {
  Worth,
  NotWorth
}

export interface ResourceEndorsementModel {
  type: ResourceEndorsementType;
  user: ResourceEndorsementUserModel;
}

export default interface ResourceModel {
  title: string;
  url: string;
  worthCount: number;
  notWorthCount: number;
  endorsements: ResourceEndorsementModel[];
}
