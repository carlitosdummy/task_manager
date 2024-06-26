import { Task as TaskType } from '../../../types'

import { NormalView, ExpandedView } from '../'

import './Task.css'

export interface ViewProps {
  task: TaskType
}

interface Props {
  task: TaskType
}

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <>
      {
        task.isExpanded
          ? <ExpandedView task={task} />
          : <NormalView task={task} />
      }
    </>
  )
}
