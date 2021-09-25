import DeleteIcon from './images/delete.png';
import PlusIcon from './images/plus.png';
import renderTaskForm from './taskForm';

function renderMainTaskContentHolder() {
  const deleteIcon = new Image();
  deleteIcon.src = DeleteIcon;
  deleteIcon.setAttribute('id', 'delete_icon');
  const mainTaskContentHolder = document.createElement('main');
  mainTaskContentHolder.classList = 'main_content';
  mainTaskContentHolder.setAttribute('id', 'content');
  mainTaskContentHolder.setAttribute('tabindex', '-1');
  mainTaskContentHolder.setAttribute('role', 'navigation');
  mainTaskContentHolder.setAttribute(
    'aria-label',
    'Main Navigation: contains Tasks'
  );

  const createProjectTaskArea = (() => {
    const editTaskContentHolder = document.createElement('div');
    editTaskContentHolder.setAttribute('id', 'editor');
    editTaskContentHolder.setAttribute('data-project-edit-holder', '');
    mainTaskContentHolder.appendChild(editTaskContentHolder);

    const projectEditor = document.createElement('div');
    projectEditor.classList = 'project_view';
    projectEditor.setAttribute('id', 'project_view');
    editTaskContentHolder.appendChild(projectEditor);

    const projectHeader = document.createElement('header');
    projectHeader.classList = 'project_view_header';
    projectEditor.appendChild(projectHeader);

    const projectHeaderViewContent = document.createElement('div');
    projectHeaderViewContent.classList = 'header_content';
    projectHeader.appendChild(projectHeaderViewContent);

    const header = document.createElement('h1');
    header.classList = 'project_name_content';
    header.setAttribute('id', 'project-name-content');
    header.setAttribute('data-project-name', '');
    header.setAttribute('tabindex', '0');
    projectHeaderViewContent.appendChild(header);

    const headerActionButtonHolder = document.createElement('div');
    headerActionButtonHolder.classList = 'header_actions';
    projectHeaderViewContent.appendChild(headerActionButtonHolder);

    const deleteProjectActionHolder = document.createElement('div');
    deleteProjectActionHolder.classList = 'delete_project';
    deleteProjectActionHolder.setAttribute('data-delete-project-button', '');
    headerActionButtonHolder.appendChild(deleteProjectActionHolder);

    const projectDeleteButton = document.createElement('button');
    projectDeleteButton.setAttribute('aria-label', 'Delete project');
    projectDeleteButton.classList = 'project_delete_button';
    // append icon to button
    projectDeleteButton.appendChild(deleteIcon);
    deleteProjectActionHolder.appendChild(projectDeleteButton);

    const headerActionText = document.createElement('div');
    headerActionText.classList = 'header_action_text';
    headerActionText.textContent = 'Delete project';
    deleteProjectActionHolder.appendChild(headerActionText);

    const taskListBox = document.createElement('div');
    const listViewEditor = document.createElement('div');
    const taskAreaList = document.createElement('ul');
    const taskLineElement = document.createElement('li');
    const taskSectionElement = document.createElement('section');

    taskListBox.setAttribute('id', 'listbox');
    listViewEditor.classList = 'list_editor';
    taskAreaList.classList = 'section_list';
    taskSectionElement.classList = 'task_section';

    projectEditor.appendChild(taskListBox); // appending add task area
    taskListBox.appendChild(listViewEditor);
    listViewEditor.appendChild(taskAreaList);
    taskAreaList.appendChild(taskLineElement);
    taskLineElement.appendChild(taskSectionElement);

    const taskListHolder = document.createElement('div');
    const projectTaskList = document.createElement('ul');
    const projectTaskListLine = document.createElement('li');
    const projectTaskAddButtonLine = document.createElement('li');
    const taskCheckBox = document.createElement('button');
    const addTaskButton = document.createElement('button');
    const addTaskSpan = document.createElement('span');
    const plusIcon = new Image();

    taskListHolder.classList = 'task_list_holder';
    projectTaskList.classList = 'task_items';
    projectTaskList.appendChild(projectTaskListLine);
    projectTaskList.classList = 'task_list_item';
    projectTaskList.setAttribute('data-task-item', '');
    taskCheckBox.setAttribute('type', 'button');
    taskCheckBox.setAttribute('role', 'checkbox');
    taskCheckBox.setAttribute('aria-label', 'Mark task complete');
    taskCheckBox.classList = 'task_checkbox';
    taskCheckBox.setAttribute('tabindex', '0');
    projectTaskAddButtonLine.classList = 'task_actions';
    addTaskButton.setAttribute('type', 'button');
    addTaskButton.classList = 'task_add_button';
    addTaskButton.textContent = 'Add task';
    addTaskButton.classList = 'add_icon';
    plusIcon.src = PlusIcon;
    plusIcon.setAttribute('id', 'plus_icon');

    taskSectionElement.appendChild(taskListHolder);
    taskListHolder.appendChild(projectTaskList);
    projectTaskList.appendChild(projectTaskListLine);
    projectTaskList.appendChild(projectTaskAddButtonLine);
    projectTaskListLine.appendChild(taskCheckBox);
    projectTaskAddButtonLine.appendChild(addTaskButton);
    addTaskButton.appendChild(addTaskSpan);
    addTaskSpan.appendChild(plusIcon);
  })();

  return mainTaskContentHolder;
}

export default renderMainTaskContentHolder;
