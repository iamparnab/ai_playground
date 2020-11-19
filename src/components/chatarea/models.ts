export type EachChatType = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

export type Props = {
  chats: EachChatType[];
  isProcessingQuery: boolean;
};
