import { Component, For } from 'solid-js'
import { twMerge } from 'tailwind-merge'

import { Mailbox, MailboxId } from '../types/mailbox'
import { Icon } from './icon'

type Props = {
  id: MailboxId

  onChange: (mailbox: Mailbox) => void
}

export const Mailboxes: Component<Props> = (props) => {
  const mailboxes: Array<Mailbox> = [
    {
      icon: 'inbox',
      id: 'inbox',
      name: 'Inbox'
    },
    {
      icon: 'outbox',
      id: 'outbox',
      name: 'Sent'
    },
    {
      icon: 'archived',
      id: 'archived',
      name: 'Archived'
    },
    {
      icon: 'drafts',
      id: 'drafts',
      name: 'Drafts'
    },
    {
      icon: 'spam',
      id: 'spam',
      name: 'Spam'
    },
    {
      icon: 'trash',
      id: 'trash',
      name: 'Trash'
    }
  ]

  return (
    <div
      data-tauri-drag-region
      class="w-44 flex flex-col border-r dark:border-neutral-800 border-neutral-200">
      <div class="my-6 flex flex-col">
        <For each={mailboxes}>
          {(item) => (
            <button
              onClick={() => props.onChange(item)}
              class={twMerge(
                'flex items-center px-6 py-3 cursor-pointer w-full transition-colors font-medium',
                props.id === item.id
                  ? 'bg-primary-100 dark:bg-primary-800'
                  : 'hover:bg-primary-50 dark:hover:bg-primary-900'
              )}>
              <Icon
                class={twMerge(
                  props.id === item.id &&
                    'text-primary-600 dark:text-primary-200'
                )}
                name={item.icon}
                size={20}
              />
              <span class="ml-3 text-sm leading-none">{item.name}</span>
            </button>
          )}
        </For>
      </div>

      <button class="mt-auto p-3 text-white dark:text-black bg-primary-600 dark:bg-primary-400 self-end m-3 rounded-full">
        <Icon name="compose" />
      </button>
    </div>
  )
}
