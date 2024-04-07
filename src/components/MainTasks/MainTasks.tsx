import React from 'react'
import './MainTasks.scss'

export const MainTasks = () => {
  return (
    <div className='mainTasks'>
        <div className="mainTasks__title">Основные задачи</div>
        <div className="mainTasks__option">
            <div className="mainTasks__option__one">
                <div className="mainTasks__option__one-num">1</div>
                <div className="mainTasks__option__one-text">Создание комфортных условий и повышение качества обслуживания клиентов</div>
            </div>
            <div className="mainTasks__option__two">
                <div className="mainTasks__option__two-num">2</div>
                <div className="mainTasks__option__two-text">Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</div>
            </div>
        </div>
    </div>
  )
}
