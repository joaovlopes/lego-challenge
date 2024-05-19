interface publicationProps {
    name: string,
    type: string,
    style: {
      borderColor: string,
    },
    content: {
      title: string,
      text: string,
      description: string,
      shortSummary: string,
    },
    secondPost: {
      content: {
        title: string,
        text: string,
        description: string,
        shortSummary: string,
      },
    },
  }

function Publications(props: publicationProps) {
    // console.log(props)

    return (
        <div>
            <h1>{props.content.title}</h1>
            <p>{props.content.text}</p>
        </div>
    )
}

export default Publications;