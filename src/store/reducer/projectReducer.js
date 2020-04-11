

const initState = {
  listofprojects: [
    {id: '1', title: 'help me find peace', content: 'okay boomer'},
    {id: '2', title: 'dont help me find peace', content: 'okay boomer'},
    {id: '3', title: 'why not help me find peace', content: 'okay boomer'},
  ]
}

const projectReducer = (state= initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer
