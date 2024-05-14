
export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  sender: string;
  message: string;
  sent_at: Date;
}

export interface Sender {
  id: number;
  username: string;
}
