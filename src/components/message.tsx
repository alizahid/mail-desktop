import { Component, For } from 'solid-js'

import { Message } from '../types/message'

type Props = {
  message: Message
}

export const MessageCard: Component<Props> = (props) => (
  <div>
    <div class="m-6 select-text">
      <For
        each={props.message.body.split('\n').filter((line) => line.length > 0)}>
        {(line) => <p class="my-2 first:mt-0 last:mb-0">{line}</p>}
      </For>
    </div>
  </div>
)
