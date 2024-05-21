export interface Sender {
  id: number;
  username: string;
}

export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  sender: Sender;
  message: string;
  sent_at: Date;
}

