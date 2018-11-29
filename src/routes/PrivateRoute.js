export default (props) => {
  return (
    <div>
      {/* 根据props中的值来判断是否渲染子组件children */}
      <div>PrivateRoute (routes/PrivateRoute.js)</div>
      { props.children }
    </div>
  )
}
