## refactor

from


    toggleDone(taskID) {
        let chosenTask = this.state.tasks.filter(task => task._id === taskID)[0]

        chosenTask.done = !chosenTask.done

        this.setState({
            ...this.state
        })
    }

    toggleFavourite(taskID) {
        let chosenTask = this.state.tasks.filter(task => task._id === taskID)[0]

        chosenTask.favourited = !chosenTask.favourited

        this.setState({
            ...this.state
        })
    }

to 

    toggle(taskID, property) {
        let chosenTask = this.state.tasks.filter(task => task._id === taskID)[0]

        chosenTask[property] = !chosenTask[property]

        this.setState({
            ...this.state
        })
    }