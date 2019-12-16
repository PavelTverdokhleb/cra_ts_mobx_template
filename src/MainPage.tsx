import React from 'react'

interface IState {
  active: boolean
}

class MainPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      active: false,
    }
  }

  render(): React.ReactElement {
    return <div>Main Page</div>
  }
}

export default MainPage;
