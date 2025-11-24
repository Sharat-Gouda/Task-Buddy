import React from 'react'

export default function PrograssTracker({ tasks = [] }) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progress-tracker">
      <h3>Progress Tasks</h3>
      <p>{completedTasks} of {totalTasks} tasks completed</p>
      <div className="progress-bar" style={{width: '100%', background: '#eee', height: 8, borderRadius: 4}}>
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
