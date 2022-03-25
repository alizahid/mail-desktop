import { Component, createSignal, Show } from 'solid-js'

import { Mailboxes } from '../components/mailboxes'
import { MessageCard } from '../components/message'
import { Messages } from '../components/messages'
import { MailboxId } from '../types/mailbox'
import { Message } from '../types/message'

export const Home: Component = () => {
  const [mailboxId, setMailboxId] = createSignal<MailboxId>('inbox')
  const [message, setMessage] = createSignal<Message>()

  return (
    <div class="h-screen flex">
      <Mailboxes onChange={({ id }) => setMailboxId(id)} id={mailboxId()} />
      <Messages onChange={setMessage} message={message()} />

      <main class="flex-1 flex h-full overflow-y-auto">
        <Show
          when={message()}
          fallback={<div class="m-6 text-neutral-600">Select a message</div>}>
          <MessageCard message={message()} />
        </Show>
      </main>
    </div>
  )
}
