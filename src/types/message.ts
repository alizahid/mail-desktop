export type Message = {
  id: string
  mailboxId: string
  messages?: Array<Message>
  body: string
  photo: string
  sender: string
  subject: string
  time: Date
}
