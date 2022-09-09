

function LoadMore({onClick}) {
  return (
    <div className="font-bold text-white my-10 mx-auto text-lg text-center md:w-1/6 w-1/3 bg-red-400 md:p-5 p-3 rounded-md">
      <button onClick = {onClick}>Load more</button>
    </div>
  )
}

export default LoadMore
