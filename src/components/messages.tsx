import { faker } from '@faker-js/faker'
import { format } from 'date-fns'
import orderBy from 'lodash/orderBy'
import range from 'lodash/range'
import { Component, createMemo, createSignal, For, Show } from 'solid-js'
import { twMerge } from 'tailwind-merge'

import { Message } from '../types/message'
import { Icon } from './icon'

type Props = {
  message?: Message

  onChange: (message: Message) => void
}

export const Messages: Component<Props> = (props) => {
  const data: Array<Message> = orderBy(
    range(100).map(() => {
      const sender = `${faker.name.firstName()} ${faker.name.lastName()}`

      const paragraphs = faker.datatype.number({
        max: 5,
        min: 2
      })

      const body = `Hey Ali,\n${faker.lorem.paragraphs(
        paragraphs,
        '\n'
      )}\nThanks,\n${sender}`

      return {
        body,
        id: faker.datatype.uuid(),
        mailboxId: faker.random.arrayElement([
          'inbox',
          'outbox',
          'archived',
          'drafts',
          'spam',
          'trash'
        ]),
        photo: faker.image.avatar(),
        sender,
        subject: faker.lorem.lines(1),
        time: faker.date.recent(10)
      }
    }),
    'time',
    'desc'
  )

  const [query, setQuery] = createSignal('')

  const messages = createMemo(() => {
    const text = query().toLowerCase()

    if (text.length > 0) {
      return data.filter(
        ({ sender, subject }) =>
          sender.toLowerCase().includes(text) ||
          subject.toLowerCase().includes(text)
      )
    }

    return data
  })

  return (
    <div class="w-72 border-r dark:border-neutral-800 border-neutral-200 flex flex-col">
      <div class="flex border-b dark:border-neutral-800 border-neutral-200">
        <input
          class="p-3 flex-1 bg-transparent placeholder:text-neutral-600 dark:placeholder:text-neutral-400"
          onInput={(event) => setQuery(event.currentTarget.value)}
          placeholder="Search"
          type="text"
          value={query()}
        />

        <Show when={query().length > 0}>
          <button
            class="p-3 text-neutral-600 dark:text-neutral-400"
            onClick={() => setQuery('')}>
            <Icon name="close" size={16} />
          </button>
        </Show>
      </div>

      <div class="h-full overflow-y-auto">
        <For each={messages()}>
          {(item) => (
            <button
              onClick={() => props.onChange(item)}
              class={twMerge(
                'text-left p-3 border-t first:border-t-0 border-neutral-100 dark:border-neutral-900 w-full flex items-center',
                props.message?.id === item.id &&
                  'bg-primary-100 dark:bg-primary-900'
              )}>
              <img
                class="w-8 h-8 rounded-full bg-neutral-400 dark:bg-neutral-600"
                src={item.photo}
              />

              <div class="flex-1 ml-3">
                <div class="font-medium">{item.sender}</div>
                <div class="text-sm my-2">{item.subject}</div>
                <div class="text-xs text-neutral-600 dark:text-neutral-400">
                  {format(item.time, 'Pp')}
                </div>
              </div>
            </button>
          )}
        </For>
      </div>
    </div>
  )
}
