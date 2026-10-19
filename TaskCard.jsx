import React from 'react';
import {CalendarDays,Check,Ellipsis,PenLine,Trash2} from 'lucide-react';
export default function TaskCard({task,onToggle,onEdit,onDelete}){
 const date = task.date ? new Date(task.date+'T12:00:00').toLocaleDateString('tr-TR',{day:'numeric',month:'short',year:'numeric'}) : 'Tarih yok';
 return <article className={'task-card '+(task.completed?'done':'')}><button className={'task-check '+(task.completed?'checked':'')} onClick={()=>onToggle(task.id)} aria-label={task.completed?'Tamamlanmadı olarak işaretle':'Tamamlandı olarak işaretle'}>{task.completed&&<Check size={15} strokeWidth={3}/>}</button><div className="task-main"><div className="task-heading"><h3>{task.title}</h3><span className={'priority '+task.priority.toLowerCase()}>{task.priority}</span></div><div className="task-meta"><span className="course-tag">{task.course}</span><span><CalendarDays size={14}/>{date}</span></div></div><div className="task-actions"><button onClick={()=>onEdit(task)} title="Düzenle" aria-label="Düzenle"><PenLine size={17}/></button><button onClick={()=>onDelete(task)} title="Sil" aria-label="Sil"><Trash2 size={17}/></button></div></article>
}
