import { IconName } from '../components/icon'

const mailboxIds = [
  'inbox',
  'outbox',
  'archived',
  'drafts',
  'spam',
  'trash'
] as const

export type MailboxId = typeof mailboxIds[number]

export type Mailbox = {
  id: MailboxId
  icon: IconName
  name: string
}
