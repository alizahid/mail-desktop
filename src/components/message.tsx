import { Component, For } from 'solid-js'

import { Message } from '../types/message'

type Props = {
  message: Message
}

export const MessageCard: Component<Props> = (props) => (
  <div class="select-text">
    <div class="m-6 prose dark:prose-invert max-w-full">
      <For
        each={props.message.body.split('\n').filter((line) => line.length > 0)}>
        {(line) => <p>{line}</p>}
      </For>
    </div>
  </div>
)
