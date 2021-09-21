function renderMainTaskContentHolder() {
  const mainTaskContentHolder = document.createElement('main');
  mainTaskContentHolder.classList = 'main_content';
  mainTaskContentHolder.setAttribute('id', 'content');
  mainTaskContentHolder.setAttribute('tabindex', '-1');
  mainTaskContentHolder.setAttribute('role', 'navigation');
  mainTaskContentHolder.setAttribute(
    'aria-label',
    'Main Navigation: contains Tasks'
  );

  const createTaskGUI = (() => {
    const createEditTaskContentHolder = document.createElement('div');
    createEditTaskContentHolder.setAttribute('id', 'editor');
    mainTaskContentHolder.appendChild(createEditTaskContentHolder);

    const createProjectEditor = document.createElement('div');
    createProjectEditor.classList = 'project_view';
    createEditTaskContentHolder.appendChild(createProjectEditor);

    const projectHeader = document.createElement('header');
    projectHeader.classList = 'project_view_header';
    createProjectEditor.appendChild(projectHeader);
  })();

  return mainTaskContentHolder;
}

export default renderMainTaskContentHolder;