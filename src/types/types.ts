export interface ContactsResponse {
  'totalCount'?: number,
  'contacts'?: Contact[],
  'nextPage'?:string,
};

export interface Tags {
  'tags': [
    {
      'name': string,
      'filters': {}
    }
  ]
}

export interface Contact {
  id: number,
  type: string,
  name: string,
  platformNames: [
    string
  ],
  createdAt?: string,
  updatedAt?: string,
  phoneNumber: string,
  email?: string,
  img?: {
    url?: string,
    fetchedAt?: string
  },
  tags: [
    {
      name: string,
      filters?: {}
    }
  ],
  assignee?: string | null,
  assigner?: string,
  messagesSent?: number,
  messagesReceived?: number,
  chats: [
    {
      accountId: string,
      id: string,
      lastMessage: string
    }
  ]
}
